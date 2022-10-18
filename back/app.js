const express = require('express');

const db = require('./models');
const cors = require('cors');  //헤더에 cors 끼워넣기 1

const postRouter = require('./routes/post')
const userRouter = require('./routes/user')

const app = express();  //익스프레스 호출

db.sequelize.sync()
  .then(() => {
    console.log('DB연결 성공');
  })
  .catch(console.error);

app.use(cors({
  origin: true,
})) //모든 응답에 cors넣기

app.use(express.json())  //json 읽기 프론트에서 보낸걸 req.body로 넣어주는 역할을함
app.use(express.urlencoded({ extended: true }))

//get,post,put,delete,patch,options,head 
app.get('/', (req, res) => {
  res.send('FIST EXPRESS!');
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('서버 실행중');
});