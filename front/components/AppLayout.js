import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

import { useState } from 'react'
import UserProfile from "./Userprofile"
import LoginForm from "./LoginForm"
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align : middle;
`;


const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggendIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item> <SearchInput enterButton /></Menu.Item>

        <Menu.Item><Link href="/signUp"><a>회원가입</a></Link></Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6} >
          {isLoggedIn ? <UserProfile setIsLoggendIn={setIsLoggendIn} /> : <LoginForm setIsLoggendIn={setIsLoggendIn}/>}
        </Col>
        <Col xs={24} md={12} >
          {children}
        </Col>
        <Col xs={24} md={6} >
          <a href='https:www.zerocho.com' target="_blank" rel="noreferrer noopener">Made by zeerocho</a>
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default AppLayout;