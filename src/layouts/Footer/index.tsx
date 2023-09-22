import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContainerCover } from '@styles/common';
import { FooterStyle, IconCover, IconList, LeftSide, LogoCover, NavBar, RightSide } from './style';
import Logo from '@svg/shared/desktop/logo_light.svg';
import Facebook from '@svg/shared/desktop/icon-facebook.svg';
import Twitter from '@svg/shared/desktop/icon-twitter.svg';
import Instagram from '@svg/shared/desktop/icon-instagram.svg';

interface Props {}

const Footer = ({}: Props) => {
  return (
    <ContainerCover>
      <Container>
        <FooterStyle>
          <LeftSide>
            <LogoCover to={'/'}>
              <Logo />
            </LogoCover>
            <NavBar>
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT US</Link>
              <Link to="/plan">Create your plan</Link>
            </NavBar>
          </LeftSide>
          <RightSide>
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
          </RightSide>
        </FooterStyle>
      </Container>
    </ContainerCover>
  );
};

export default Footer;
