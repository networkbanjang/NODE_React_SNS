const express = require('express');

const { Post, User, Image, Comment } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      limit: 10,
      order: [
        [Comment, 'createdAt', 'DESC'], ['createdAt', 'DESC']],
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model:User,    //좋아요 누른사람
        as:"Likers",
        attributes:['id'],
      },{
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


module.exports = router;