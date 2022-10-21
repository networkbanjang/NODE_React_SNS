import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NickNameEditForm from "../components/NickNameEditForm";
import FollowList from "../components/FollowList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import Router from "next/router";
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from "../reducers/user";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  },[]);


  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }
  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header="팔로잉 목록" data={me.Followings} />
        <FollowList header="팔로워 목록" data={me.Followers} />
      </AppLayout>
    </>
  )
}

export default Profile;