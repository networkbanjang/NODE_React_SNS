const express = require('express');
const router = express.Router();

const { Post, User, Image, Comment, Hashtag } = require('../models');
const { Op } = require('sequelize');


router.get('/:tag', async (req, res, next) => {
  try {
    where = {};
    if (parseInt(req.query.lastId, 10)) {//초기 로딩이 아닐때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }  //조건이 라스트 아이디보다 작은것으로 바낌
    }
    const posts = await Post.findAll({
      where,
      limit: 5,
      order: [
        ['createdAt', 'DESC']],
      include: [{
        model: Hashtag,
        where: { name: decodeURIComponent(req.params.tag) },
      }, {
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