import { Card, Button, Popover, Avatar, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import PostImages from './Postimages';
import { useMemo, useState, useCallback } from 'react'
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';
import FollowButton from './Follow';

const PostCard = ({ post }) => {
  const dispatch=useDispatch();
  //css영역
  const style = useMemo(() => ({
    marginBottom: '20px',
  }), [])
  //state 영역
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(false);


  //이벤트 처리 영역
  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev);
  }, []);
  const onComment = useCallback(() => {
    setComment(prev => !prev);
  },[])

  const onRemovePost =useCallback(()=>{
    dispatch({
      type:REMOVE_POST_REQUEST,
      data : post.id,
    })
  },[]);

  //아이디 체크 그런데 백엔드 구현하면 바뀔듯
  const id = useSelector((state) => state.user).me?.id;  //옵셔널 체이닝 AA ?. BB == 있으면 해라
  return (
    <div style={style}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="reteet" />,   //리트윗 아이콘 배열엔 반드시 key
          liked
            ? <HeartTwoTone twoToneColor='red' key="heart" onClick={onToggleLike} />  //하트아이콘 비활성화
            : <HeartOutlined key="heart" onClick={onToggleLike} />,     //하트 아이콘 활성화
          <MessageOutlined key="message" onClick={onComment} />,   //리플 아이콘
          <Popover key="more" content={(
            <Button.Group>
              {id && post.User.id === id ? (<><Button type='primary'>수정</Button>
                <Button type='danger' onClick={onRemovePost}>삭제</Button> </>)
                : <Button>신고</Button>}
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>,
        ]}
        extra={id && <FollowButton post={post} />}
      >
        
        <Card.Meta  
          tar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content}/>}
        />
        <Button></Button>
      </Card>
      {comment && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}

    </div >

  )
}

PostCard.prototype = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
export default PostCard;