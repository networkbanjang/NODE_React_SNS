const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const { User } = require('../models');
router.post('/', async (req, res, next) => {
  try {
    const exUser=await User.findOne({
      where: {
        email:req.body.email,
      }
    });
    if(exUser){
      return res.status(403).send('중복 이메일입니다.')
    }
    const bcryptPW = await bcrypt.hash(req.body.password, 10);
    await User.create({                    //req.body에 데이터 있음
      email: req.body.email,
      nickname: req.body.nick,
      password: bcryptPW,
    });
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3060')
    res.status(201).send('완료');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;