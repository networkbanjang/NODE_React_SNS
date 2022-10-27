const express = require('express');

const db = require('./models');
const cors = require('cors');  //헤더에 cors 끼워넣기 1

const postRouter = require('./routes/post')
const postsRouter = require('./routes/posts')
const userRouter = require('./routes/user')
const hashtagRouter = require('./routes/hashtag');

const morgan = require('morgan');  // log보기용
const dotenv = require('dotenv');
const passportConfig = require('./passport');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const hpp = require('hpp');

const { default: helmet } = require('helmet');

dotenv.config() //.env에 있는 설정 가져오기
const app = express();  //익스프레스 호출

db.sequelize.sync()
  .then(() => {
    console.log('DB연결 성공');
  })
  .catch(console.error);

passportConfig();  //패스포트 설정값 불러오기

app.set('port', process.env.PORT || 3065);   // 포트설정

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'))  //배포용 로그
  app.use(hpp());        //보안에 필요
  app.use(helmet());      
} else {
  app.use(morgan('dev')) //개발용 로그
}
app.use(cors({
  origin: ['http://localhost:3060','next_express.com'],  //헤더 넘기기
  credentials: true, //쿠키도 넘김
})) //모든 응답에 cors넣기

app.use('/', express.static(path.join(__dirname, 'uploads')));

app.use(express.json())  //json 읽기 프론트에서 보낸걸 req.body로 넣어주는 역할을함
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
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
app.use('/posts', postsRouter);
app.use('/hashtag', hashtagRouter);


app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});