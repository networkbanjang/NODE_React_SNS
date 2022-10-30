const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isNotLoggedIn } = require('./middlewares');


router.get('/kakaologin',isNotLoggedIn,passport.authenticate('kakao')); 

router.get('/kakao' ,passport.authenticate('kakao', {
  failureRedirect:'http://localhost:3060/',   //프론트서버로 리다이렉트
}),(req,res)=>{
  res.redirect('http://localhost:3060/'); //프론트서버로 리다이렉트
});

module.exports = router;