import AppLayout from "../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import {useEffect} from "react";

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePost, loadPostsLoading } = useSelector((state) => state.post);

  const dispath = useDispatch;

  useEffect(() => {               //scrollY : 얼마나 내렸는지 clientHeight:화면 보이는 길이  scrollHeight:총 길이
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        // if (hasMorePost && !loadPostsLoading) {
        //   dispatch({
        //     type: LOAD_POSTS_REQUEST,
        //     data: mainPosts[mainPosts.length - 1].id,
        //   });
        // }                 
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePost, loadPostsLoading]);
  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => {
        return (<PostCard key={post.id} post={post} />)
      })}
    </AppLayout>
  )
}

export default Home;