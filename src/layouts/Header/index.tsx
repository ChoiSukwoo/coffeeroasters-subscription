import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContainerCover } from '@styles/common';
import Logo_d from '@svg/shared/logo_d.svg';
import Logo_m from '@svg/shared/logo_m.svg';
import Hamberger from '@svg/shared/mobile/icon-hamburger.svg';
import { Content, HeaderStyle, LogoCover, NavBar } from './style';
import { useResponsive } from '@hooks/responsive';

interface Props {
  isSticky: boolean;
}

const Header = ({ isSticky }: Props) => {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  return (
    <HeaderStyle isSticky={isSticky}>
      <ContainerCover>
        <Container>
          <Content>
            <LogoCover to={'/'}>{isMobile ? <Logo_m /> : <Logo_d />}</LogoCover>
            {isMobile ? (
              <Hamberger />
            ) : (
              <NavBar>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT US</Link>
                <Link to="/plan">Create your plan</Link>
              </NavBar>
            )}
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
