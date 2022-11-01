const SocketIO = require('socket.io');
module.exports = (server, app) => {

  const io = SocketIO(server, {
    cors: {
      origin: "*",
    }
  });
  app.set('id', io) //req.app.get('io')  

  io.on('connection', (socket) => {
    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('연결', ip, socket.id);

    socket.on('disconnect', () => {  //연결종료시
      console.log('연결해제');

    });
    socket.on('error', (error) => {  //에러시
      console.error(error)
    });
  })
}