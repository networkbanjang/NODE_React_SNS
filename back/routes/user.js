const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const { User, Post, Image, Comment } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Op } = require('sequelize');
const multer = require('multer');

try {
  fs.accessSync('uploads/profiles'); //디렉터리 접근
} catch (error) {
  fs.mkdirSync('uploads/profiles')  //없으면 디렉터리생성
}

router.get('/', async (req, res, next) => {   //GET /user
  try {
    if (req.user) {
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
  req.logout(() => {
    res.redirect('/');
  });
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
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060')
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
    const followers = await user.getFollowers({
      limit: parseInt(req.query.limit),
    });
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
    const followings = await user.getFollowings({
      limit: parseInt(req.query.limit),
    });
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

router.get('/:id/posts', async (req, res, next) => {
  try {
    const where = { UserId: req.params.id };
    if (parseInt(req.query.lastId, 10)) {//초기 로딩이 아닐때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }  //조건이 라스트 아이디보다 작은것으로 바낌
    }
    const posts = await Post.findAll({
      where,
      limit: 5,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC']],
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }]
      }, {
        model: User,    //좋아요 누른사람
        as: "Likers",
        attributes: ['id'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }]
      }],
    });
    return res.status(200).json(posts);
  } catch (error) {
    console.error('posts 에러', error);
    next(error);
  }
})

router.get('/:id', async (req, res, next) => { // 남의 정보 가져오기
  try {
    const fullUserWithoutPassword = await User.findOne({
      where: { id: req.params.id },
      attributes: {
        exclude: ['password']
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
    if (fullUserWithoutPassword) {
      const data = fullUserWithoutPassword.toJSON();   //Sequelize에서 쓰는 Data는 Json이 아니기 때문에 Json으로 바꿈
      data.Posts = data.Posts.length;
      data.Followings = data.Followings.length;
      data.Followers = data.Followers.length;
      res.status(200).json(data);
    } else {
      res.status(404).json('존재하지 않는 사용자입니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/sendMail', async (req, res, next) => { // EMAIL 보내기
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,  //gmail은 기본적으로 587포트
    secure: false,
    auth: {
      // Gmail 주소, 보안상 .env에있음
      user: process.env.GMAIL_ID,
      // Gmail 앱 비밀번호
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  try {
    const info = await transporter.sendMail({
      // 보내는 곳의 이름과, 메일 주소
      from: `"REACT_EXPRESS" <${process.env.GMAIL_ID}>`,
      // 받는 곳의 메일 주소
      to: req.body.email,
      // 보내는 메일의 제목을 입력
      subject: '인증번호입니다.',

      text: `인증번호는 : ${req.body.number}입니다.`,
    });
    return res.status(200).send(req.body.number);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const upload = multer({
  storage: multer.diskStorage({  //디스크에
    destination(req, file, done) {   //파일경로
      done(null, 'uploads/profiles')
    },
    filename(req, file, done) {             //파일명
      const ext = path.extname(file.originalname); // 오리지널 네임의 확장자 추출
      if (ext !== '.jpeg' && ext !== '.png' && ext !== '.gif') {
        return;
      }
      const basename = path.basename(file.originalname, ext);  //오리지널네임+확장자
      done(null, basename + '_' + new Date().getTime() + ext);  //에러처리, 파일명항목(베이스네임+날짜+확장자)
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, //20MB
})

router.post('/profileUpdate', isLoggedIn, upload.single('image'), async (req, res, next) => { // 프로필 수정
  if (req.file) {
    console.log('성공!')
    return res.status(200).send(req.file.filename);
  }
  console.log('실패')
  return res.status(500).send('파일의 확장자가 맞지않거나 파일의 전송이 이뤄지지 않았습니다.')
});

router.patch('/profileSubmit', isLoggedIn, async (req, res, next) => {

  try {
    await User.update({
      profile:req.body.profile,
    }, {
      where: { id: req.user.id },
    });
    res.status(200).json({ profile: req.body.profile });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;