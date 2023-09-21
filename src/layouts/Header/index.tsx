import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container, ContainerCover } from '@styles/common';
import Logo from '@svg/shared/desktop/logo.svg';
import { Content, HeaderStyle, LogoCover, NavBar } from './style';

interface Props {
  isSticky: boolean;
}

const Header = ({ isSticky }: Props) => {
  return (
    <HeaderStyle isSticky={isSticky}>
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
    </HeaderStyle>
  );
};

Header.defaultProps = {
  isSticky: false,
};

export default Header;
