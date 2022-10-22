const express = require('express');

const { Post, User, Image, Comment } = require('../models');
const { isLoggedIn } = require('./middlewares');
const {Op} =require('sequelize');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit,10);
    const where = {};   //초기 로딩설정
    if (parseInt(req.query.lastId, 10)) {//초기 로딩이 아닐때
      where.id = {[Op.lt]: parseInt(req.query.lastId,10)}  //조건이 라스트 아이디보다 작은것으로 바낌
     }
    const posts = await Post.findAll({
      where,
      limit,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'] ],
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


module.exports = router;