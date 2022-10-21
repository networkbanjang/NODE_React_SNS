import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useRef, useState } from 'react';
import { addPostRequest, UPLOAD_IMAGES_REQUEST } from "../reducers/post";

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  //이미지
  const imageInput = useRef();              //파일버튼 숨기기용
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();              //imageInput을 클릭한걸로 만든다
  }, [imageInput.current])


  ///텍스트
  const [text, setText] = useState('');
  const onChangeText = useCallback((event) => {
    setText(event.target.value);
  }, [])


  //전송후 초기화
  const onsubmit = useCallback(() => {
    dispatch(addPostRequest(text));
    setText('')
  }, [text])

  const onChangeImages = useCallback((event) => {
    const imageFormData = new FormData() ; //Form데이터로 보내야 백단에서 데이터 처리가 가능함
    [].forEach.call(event.target.files, (file)=>{      //유사배열을 배열로 바꾸기
      imageFormData.append('image',file);   //키,값 upload.array와 같아야함 
    });
    dispatch({
      type:UPLOAD_IMAGES_REQUEST,
      data:imageFormData,
    })
  });

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onsubmit} >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="내용을 입력해주세요"
      />
      <div>
        <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
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