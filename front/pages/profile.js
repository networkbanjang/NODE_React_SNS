import AppLayout from "../components/AppLayout";
import Head from "next/head"; 
import NickNameEditForm from "../components/NickNameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {

  const followerList=[{nickname:'닉네임'},{nickname:'두번째'},{nickname:'세번째'},{nickname:'네번째'}]//더미
  const followingList=[{nickname:'닉네임'},{nickname:'두번째'},{nickname:'세번째'}]//더미
  return (<>
    <Head>
      <title>내 프로필</title>
    </Head>
    <AppLayout>
      <NickNameEditForm/>
      <FollowList header="팔로잉 목록" data={followingList}/>
      <FollowList header="팔로워 목록" data={followerList}/>
    </AppLayout>
  </> 
  )
}

export default Profile;