import { Avatar, Button, Card } from "antd";
import { useDispatch } from "react-redux";
import {useCallback} from 'react';

import {logoutAction} from '../reducers/user'

const UserProfile = () => {
  const dispath = useDispatch();
  const logout = useCallback(()=>{
    dispath(logoutAction());
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