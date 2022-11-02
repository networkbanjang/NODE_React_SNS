import { Card } from "antd";
import { useEffect, useState, useCallback } from 'react';
import { io } from "socket.io-client"; //웹소켓
import LetterForm from "./letterForm";
import LetterProps from "./letterProps";

const Chatinguser = ({ me }) => {
  const [arrayList, setArrayList] = useState([]);

  const socket = io.connect('http://localhost:3065', {
    cors: {
      origin: "*",
      credentials: true,
    },
    path: '/socket.io',
    transports: ['websocket'],
  })

  useEffect(() => { socket.emit('firstJoin', me.nickname); }, [])



  socket.on('userUpdate', (list) => {
    setArrayList(list);
  })



  return (
    <>
      <Card style={{ width: 300 }} title='접속중인 유저'>
        {arrayList.map((props) => {
          return <LetterForm props={props} socket={socket} me={me}/>
        })}
      </Card>
      <LetterProps socket={socket} />
    </>
  )
}

export default Chatinguser;