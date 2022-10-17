import { Avatar, Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {useCallback} from 'react';

import {logoutRequestAction} from '../reducers/user'

const UserProfile = () => {
  const dispath = useDispatch();
  const {me,logOutLoading} = useSelector((state)=>state.user)   // 구조화할당 안하면 me =useSelector((state)=>state.user.me)

  const logout = useCallback(()=>{
    dispath(logoutRequestAction());
  },[])
  return (
    <Card
     actions={[
      <div key="twit">트윗 수<br />{me.Posts.length}</div>,
      <div key="following">팔로잉<br />{me.Followings.length}</div>,
      <div key="follower">팔로워<br />{me.Followers.length}</div>,
     ]}>

      <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname}/>
      <Button onClick={logout} loading={logOutLoading}>로그 아웃</Button>
    </Card>
  )
}

export default UserProfile;