import AppLayout from "../components/AppLayout";
import Head from 'next/head'
import { Form, Input, Checkbox, Button } from "antd";
import { useCallback, useState, useMemo } from 'react';
import useinput from "../hooks/useinput";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";

const SingUp = () => {
  const [email, onChangeEmail] = useinput('');
  const [nick, onChangeNick] = useinput('');
  const [password, onChangePassword] = useinput('');

  const dispatch=useDispatch();
  const {signUpLoading} = useSelector((state)=>state.user);

  const style = useMemo(() => ({   //스타일설정
    color: 'red',
  }), [])

  const [passowrdCheck, setPasswordCheck] = useState('');
  const [passowrdError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password])

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, [])

  const onsubmit = useCallback(() => {
    if (password !==passowrdCheck){
      return setPasswordError(true);
    }
    if(!term){
      return setTermError(true);
    }
    dispatch({
      tyoe:SIGN_UP_REQUEST,
      data:{email,password,nick}
    })
  }, [email,password,passowrdCheck,term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form onFinish={onsubmit}>
        <div>
          <label htmlFor='user-id'>이메일</label>
          <br />
          <Input name='user-id' type='email' value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor='user-nick'>닉네임</label>
          <br />
          <Input name='user-nick' value={nick} required onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor='user-password'>비밀번호</label>
          <br />
          <Input name='user-passowrd' type='password' value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor='user-password-check'>비밀번호 체크</label>
          <br />
          <Input name='user-passowrd-check' type='password' value={passowrdCheck} required onChange={onChangePasswordCheck} />
          {passowrdError && <div style={style}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
          {termError && <div style={style}> 약관에 동의하셔야 합니다</div>}
        </div>
        <div style={{marginTop:10}}>
          <Button type ="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  )
}

export default SingUp;