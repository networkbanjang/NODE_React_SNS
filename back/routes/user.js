const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');

const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

router.get('/', async (req, res, next) => {   //GET /user
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id },
      })
      const findUser = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],  //password만 제외
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],

        }, {
          model: User,
          as: 'Followers',
        }]
      })
      res.status(200).json(findUser);
    }
    else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {   //done의 정보
    if (err) { //서버에러
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);   //401:허가되지 않음
    }
    return req.logIn(user, async (loginErr) => {   //passport로 req.login할때 res.setHeader로 쿠키가 남음
      //req.login하면 passprt.index의 시리얼 라이즈 유저가 동시실행됨
      if (loginErr) {
        console.error(loginErr)
        return next(loginErr);
      }
      try {
        const findUser = await User.findOne({
          where: { id: user.id },
          attributes: {
            exclude: ['password'],  //password만 제외
          },
          include: [{
            model: Post,
            attributes: ['id'],
          }, {
            model: User,
            as: 'Followings',
            attributes: ['id'],

          }, {
            model: User,
            as: 'Followers',
            attributes: ['id'],

          }]
        })
        return res.status(200).json(findUser);
      } catch (error) {
        console.error(error)
        next(error);
      }

    })
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.session.destroy();
  res.send('OK');
})

router.post('/', isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('중복 이메일입니다.')
    }
    const bcryptPW = await bcrypt.hash(req.body.password, 10);
    await User.create({                    //req.body에 데이터 있음
      email: req.body.email,
      nickname: req.body.nick,
      password: bcryptPW,
    });
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060')
    res.status(201).send('완료');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    });
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/followers', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(403).send('잘못 된 요청입니다.');
    }
    const followers = await user.getFollowers();
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.get('/followings', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(403).send('잘못 된 요청입니다.');
    }
    const followings = await user.getFollowings();
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      return res.status(403).send('잘못 된 요청입니다.');
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ userId: parseInt(req.params.userId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
})
router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send('잘못 된 요청입니다.');
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ userId: parseInt(req.params.userId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
})
module.exports = router;