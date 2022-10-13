import { Avatar, Button, Card } from "antd";
import {useCallback} from 'react';

const UserProfile = ({setIsLoggendIn}) => {
  const logout = useCallback(()=>{
    setIsLoggendIn(false);
  },[])
  return (
    <Card
     actions={[
     <div key="twit">짹짹<br/>0</div>,
     <div key="followings">팔로잉<br/>0</div>,
     <div key="follwers">팔로워<br/>0</div>
     ]}>

      <Card.Meta avatar={<Avatar>SE</Avatar>} title="nodebird"/>
      <Button onClick={logout}>로그 아웃</Button>
    </Card>
  )
}

export default UserProfile;