import PropTypes from 'prop-types';
import { Button, Form, Input } from "antd";
import { useCallback } from "react";
import useinput from '../hooks/useinput';
import { useSelector } from 'react-redux';




const CommentForm = ({ post }) => {
  const [commentText,onChangeComment] = useinput('');
  const onSubmitComment = useCallback(()=>{
    console.log(post.id,commentText,);
  },[commentText])


  //아이디
  const id = useSelector((state) => state.user).me?.id;  //옵셔널 체이닝 AA ?. BB == 있으면 해라

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea value={commentText} onChange={onChangeComment} rows={4} />
        <Button type='primary' htmlType='submit'>작성</Button>
      </Form.Item>
    </Form>
  );
}

CommentForm.PropTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
export default CommentForm;
