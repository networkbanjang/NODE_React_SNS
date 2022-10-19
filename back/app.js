const express = require('express');

const db = require('./models');
const cors = require('cors');  //헤더에 cors 끼워넣기 1

const postRouter = require('./routes/post')
const userRouter = require('./routes/user')

const dotenv = require('dotenv');
const passportConfig = require('./passport');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

dotenv.config() //.env에 있는 설정 가져오기
const app = express();  //익스프레스 호출

db.sequelize.sync()
  .then(() => {
    console.log('DB연결 성공');
  })
  .catch(console.error);

passportConfig();  //패스포트 설정값 불러오기


app.use(cors({
  origin: true,
})) //모든 응답에 cors넣기

app.use(express.json())  //json 읽기 프론트에서 보낸걸 req.body로 넣어주는 역할을함
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.COOKIE_SECRERT));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRERT,
  cookie: {                //cookie도 넣기
    httpOnly: true,
    secure: false,
  },
}));
app.use(passport.initialize());
app.use(passport.session());    //passport의 deserializeUser실행

//get,post,put,delete,patch,options,head 
app.get('/', (req, res) => {
  res.send('FIST EXPRESS!');
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('서버 실행중');
});