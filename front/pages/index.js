import AppLayout from "../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useEffect } from "react";
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {               //scrollY : 얼마나 내렸는지 clientHeight:화면 보이는 길이  scrollHeight:총 길이
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);
  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
            data: mainPosts[mainPosts.length - 1].id,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);

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