import { Button, Form, Input, Card } from "antd";
import { useSelector } from 'react-redux';
import Chatingroom from "./Chatingroom";
import { io } from "socket.io-client"; //웹소켓

const Chatinguser = () => {
  const socket = io('http://localhost:3065', {
    cors: {
      origin: "*",
    },
  });
  return (
    <>
    <Card style={{ width: 300 }} title='접속중인 유저'>
        <p>밸류</p>
       
    </Card>
    <Chatingroom/>
    </>
  )
}

export default Chatinguser;