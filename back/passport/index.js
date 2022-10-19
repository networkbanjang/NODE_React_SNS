//여기가 패스토프 설정 파일
const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {   //라우터에서 req.login하면 user정보가 여기로 들어감
    done(null,user.id);  //user정보중에서 id만 저장하는것
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user)                        //req.user에 넣어줌
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
}