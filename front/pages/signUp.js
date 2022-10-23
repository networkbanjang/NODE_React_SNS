import AppLayout from "../components/AppLayout";
import Head from 'next/head'
import { Form, Input, Checkbox, Button } from "antd";
import { useCallback, useState, useMemo, useEffect } from 'react';
import useinput from "../hooks/useinput";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MY_INFO_REQUEST, SIGN_UP_REQUEST } from "../reducers/user";
import Router from "next/router";
import wrapper from "../store/configureStore";
import axios from "axios";
import { END } from "redux-saga";

const SingUp = () => {
  const [email, onChangeEmail] = useinput('');
  const [nick, onChangeNick] = useinput('');
  const [password, onChangePassword] = useinput('');

  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector((state) => state.user);

  const style = useMemo(() => ({   //스타일설정
    color: 'red',
  }), [])

  useEffect(() => {
    if (signUpDone) {
      Router.replace('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  useEffect(() => {
    if (me && me.id) {
      Router.replace('/');
    }
  }, [me && me.id]);

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
    if (password !== passowrdCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nick },
    });
  }, [email, password, passowrdCheck, term, nick]);

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
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';   //헤더 정보가 context.req안에 들어있음
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });

  context.store.dispatch(END);
  console.log('엔드!');
  await context.store.sagaTask.toPromise();
})

export default SingUp;