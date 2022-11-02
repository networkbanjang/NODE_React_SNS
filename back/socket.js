const SocketIO = require('socket.io');
module.exports = (server, app) => {
  const userList = [];

  const io = SocketIO(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
    path: '/socket.io'
  });
  app.set('id', io) //req.app.get('io')  

  io.on('connection', (socket) => {
    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let usernick = '';
    console.log('연결', ip, socket.id);

    socket.on('disconnect', () => {  //연결종료시
      console.log('연결해제');
      userList.forEach((e, i) => {
        if (e[0] === usernick) {
          userList.splice(i, 1);
        }
      })
      io.emit('userUpdate', userList);
    });
    socket.on('error', (error) => {  //에러시
      console.error(error)
    });
    socket.on('firstJoin', (nick) => {
      usernick = nick;
      const check = userList.some((e) => e[0] === nick);   //닉이 중복이있을시 true 리턴
      if (!check) {
        userList.push([nick,socket.id]);
      }
      io.emit('userUpdate', userList); //유저리스트 최신화

    });
    
    socket.on('message',(data)=>{
      console.log(data);
      io.to(data.id).emit('letter',data)
    })
  })
}