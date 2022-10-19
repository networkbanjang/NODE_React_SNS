const express = require('express');
const router = express.Router();
const { Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

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
      PostId: req.params.postId,
      UserId: req.user.id,
    });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.post('/', isLoggedIn, async (req, res, next) => {  // /post
  try {
    const result = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
})


router.delete('/', (req, res) => {
  res.json({ id: 1 });
})

module.exports = router;