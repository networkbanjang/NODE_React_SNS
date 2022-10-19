const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt')
const { User } = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',                  //req.body.email   req.body.password
  }, async (email, password, done) => {                 //req.body.email , req.body.passowrd , 결과판단
    try {
      const exUser = await User.findOne({
        where: { email },
      });
      if (!exUser) {   //아이디가 없을경우
        return done(null, false, { reason: '존재하지 않는 사용자입니다.' })
        //첫번째 자리 :서버에러  두번째 자리 : 성공여부 세번째 자리:클라이언트 에러
      }
      const result = await bcrypt.compare(password, exUser.password);
      if (result) {
        return done(null, exUser)                             //성공에다가 사용자 정보 넘겨줌
      }
      return done(null, false, { reason: "비밀번호가 틀렸습니다." });
    } catch (error) {
      console.error(error);
      return done(error);;   //서버 났을경우 done으로 에러 보내기
    }

  }));
};