import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContainerCover } from '@styles/common';
import { FooterStyle, IconCover, IconList, LogoCover, NavBar } from './style';
import Logo_d from '@svg/shared/desktop/logo_light.svg';
import Logo_t from '@svg/shared/desktop/logo_light_t.svg';
import Logo_m from '@svg/shared/desktop/logo_light_m.svg';
import Facebook from '@svg/shared/desktop/icon-facebook.svg';
import Twitter from '@svg/shared/desktop/icon-twitter.svg';
import Instagram from '@svg/shared/desktop/icon-instagram.svg';
import { useResponsive } from '@hooks/responsive';

interface Props {}

const Footer = ({}: Props) => {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  return (
    <ContainerCover>
      <Container>
        <FooterStyle>
          <LogoCover to={'/'}>{isTablet ? <Logo_t /> : isMobile ? <Logo_m /> : <Logo_d />}</LogoCover>
          <NavBar>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/plan">Create your plan</Link>
          </NavBar>
          <IconList>
            <IconCover>
              <Facebook />
            </IconCover>
            <IconCover>
              <Twitter />
            </IconCover>
            <IconCover>
              <Instagram />
            </IconCover>
          </IconList>
        </FooterStyle>
      </Container>
    </ContainerCover>
  );
};

export default Footer;
