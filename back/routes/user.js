const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');

const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

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
            exclude: ['password'],
          },
          include: [{
            model: Post,
          }, {
            model: User,
            as: 'Followings',
          }, {
            model: User,
            as: 'Followers',
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

module.exports = router;