import { Button, Form, Input, Card } from "antd";
import { useSelector } from 'react-redux';

const Chatingroom = () => {
  const { chatroom } = useSelector((state) => state.chat);

  return (
    chatroom.map((room) => {
    <Card style={{ width: 300 }} title='님과의 대화'>
      <Form encType="multipart/form-data"  >
        <p>밸류</p>
        <Input.TextArea
          maxLength={140}
          placeholder="채팅 입력하기"
        />
        <div>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit">전송</Button>
        </div>
      </Form>
    </Card>
     }))
}

export default Chatingroom;