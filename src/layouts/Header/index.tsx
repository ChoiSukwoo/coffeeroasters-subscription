import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContainerCover } from '@styles/common';
import Logo from '@svg/shared/desktop/logo.svg';
import { Content, LogoCover, NavBar } from './style';

const Header = () => (
  <ContainerCover>
    <Container>
      <Content>
        <LogoCover to={'/'}>
          <Logo />
        </LogoCover>
        <NavBar>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/plan">Create your plan</Link>
        </NavBar>
      </Content>
    </Container>
  </ContainerCover>
);
export default Header;
