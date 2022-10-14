import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useRef, useState } from 'react';
import useinput from "../hooks/useinput";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const disspatch = useDispatch();
  //이미지
  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current])
  ///텍스트
  const [text, setText] = useState('');
  const onChangeText=useCallback((event)=>{
    setText(event.target.value);
  },[])
  //전송후 초기화
  const onsubmit = useCallback(() => {
    disspatch(addPost)
    setText('')
  }, [])


  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onsubmit} >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="내용을 입력해주세요"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">전송</Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  )
}

export default PostForm;