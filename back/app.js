const express = require('express');
const postRouter = require('./routes/post')

const app = express();  //익스프레스 호출


//get,post,put,delete,patch                 ,options,head 
app.get('/', (req, res) => {
  res.send('FIST EXPRESS!');
});

app.use('/post',postRouter);

app.listen(3065, () => {
  console.log('서버 실행중');
});