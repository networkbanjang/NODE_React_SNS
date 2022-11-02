import { Button, Input } from 'antd';
import { useState, useEffect } from 'react'

const LetterForm = ({ props, socket,me }) => {
  const [open, setOpen] = useState("");
  const [id, setId] = useState("");
  const [message, setMessage] = useState('');

  const openInput = () => {
    setOpen(prev => !prev);
  }

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  useEffect(() => {
    setId(props[1]);
  }, [])

  const sendMessage = () => {
    socket.emit('message', {
      id,
      nick:me.nickname,
      message,
    });
    setMessage("");
  }

  return (
    <>
      <a><p key={props[1]} onClick={openInput}>{props[0]}</p></a>
      {open &&
        <>
          <Input value={message} showCount maxLength={30} onChange={onChangeMessage} />
          <Button type="primary" style={{ marginTop: 10 }} onClick={sendMessage}>전송</Button>
        </>
      }
    </>
  )
}

export default LetterForm;