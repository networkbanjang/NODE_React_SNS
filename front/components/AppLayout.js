import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

import { useSelector } from 'react-redux'
import UserProfile from "./Userprofile"
import LoginForm from "./LoginForm"
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align : middle;
`;


const AppLayout = ({ children }) => {
  const {me} = useSelector((state)=>state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key='123'><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key='234'><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key='456'> <SearchInput enterButton /></Menu.Item>

        <Menu.Item key='kekeke'><Link href="/signUp"><a>회원가입</a></Link></Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6} >
          {me ? <UserProfile /> : <LoginForm/>}
        </Col>
        <Col xs={24} md={12} >
          {children}
        </Col>
        <Col xs={24} md={6} >
          <a href='http://localhost:3065/unfinished' target="_blank" rel="noreferrer noopener">업데이트 내역 보기</a>
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default AppLayout;