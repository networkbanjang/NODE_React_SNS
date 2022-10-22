const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const fs = require('fs');

const { Post, Image, Comment, User, Hashtag } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const user = require('../models/user');

try {
  fs.accessSync('uploads'); //디렉터리 접근
} catch (error) {
  fs.mkdirSync('uploads')  //없으면 디렉터리생성
}



const upload = multer({
  storage: multer.diskStorage({  //디스크에
    destination(req, file, done) {   //파일경로
      done(null, 'uploads')   //에러처리 , uploads라는 폴더 , 나중엔 aws에 저장할거다
    },
    filename(req, file, done) {             //파일명
      const ext = path.extname(file.originalname); // 오리지널 네임의 확장자 추출
      const basename = path.basename(file.originalname, ext);  //오리지널네임+확장자
      done(null, basename + '_' + new Date().getTime() + ext);  //에러처리, 파일명항목(베이스네임+날짜+확장자)
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, //20MB
})

router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => {
  console.log(req.files);   //multer 는 req.files에 들어간다
  res.json(req.files.map((e) => e.filename));
});

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {  // /post
  try {
    const hashtag = req.body.content.match(/#[^\s#]+/g);
    const result = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtag) {
      const hash = await Promise.all(hashtag.map((tag) => Hashtag.findOrCreate({
        where: { name: tag.slice(1).toLowerCase() },
      })));
      await result.addHashtags(hash.map((v) => v[0]));
    }
    if (Array.isArray(req.body.image)) {   //이미지 여러개면 배열
      const images = await Promise.all(req.body.image.map(image => Image.create({ src: image })));
      await result.addImages(images);
    } else {   //이미지 하나면 스트링
      const image = await Image.create({ src: req.body.image });
      await result.addImages(image);
    }
    const fullPost = await Post.findOne({
      where: { id: result.id },
      include: [{
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }]
      }, {
        model: User,  //게시글 작성자
        attributes: ['id', 'nickname'],
      }, {
        model: User,    //좋아요 누른사람
        as: "Likers",
        attributes: ['id'],
      }]
    })
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.delete('/:postId', isLoggedIn, async (req, res, next) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId }
    });
    if (!post) {
      return res.status(403).send("잘못된 요청입니다");
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }],
    })
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.post('/:postId/retweet', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [{
        model: Post,
        as: 'Retweet',
      }],
    });
    if (!post) {
      return res.status(403).send("잘못된 요청입니다");
    }
    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.userid)) {
      return res.status(403).send('자신의 글은 리트윗 할 수 없습니다.');
    }
    const retweetTargetId = post.RetweetId || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    })
    if (exPost) {
      return res.status(403).send("리트윗한 글을 또 리트윗 할 수 없습니다.");
    };
    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: 'retweet',
    });
    const retweetWithPrevPost = await Post.findOne({
      where: { id: retweet.id },
      include: [{
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }]
      }, {
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }],
      },{
        model: User,    //좋아요 누른사람
        as: "Likers",
        attributes: ['id'],
      }],
    })
    res.status(201).json(retweetWithPrevPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
})
module.exports = router;