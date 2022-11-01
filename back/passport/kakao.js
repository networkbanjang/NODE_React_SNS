const passport = require('passport');
const KakaoLogin = require('passport-kakao').Strategy;

const User = require('../models/user');

module.exports = () => {
  passport.use(new KakaoLogin({
    clientID: process.env.KAKAO_ID,
    callbackURL: '/loginappend/kakao',  //콜백 링크 지정
  }, async (accessToken, refreshToken, profile, done) => {

    try {
      const exUser = await User.findOne({
        where: { snsId: profile.id,},
      });
      if (exUser) {                      //이전 유저가 없을시 생성
        done(null, exUser);
      } else {
        const newUser = await User.create({
          email: profile._json.kakao_account.email,
          nickname: profile.displayName,
          snsId: profile.id,
        });
        done(null, newUser);
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};