import { Link } from "react-router-dom";

import { Container, ContainerCover } from "@styles/common";
import { FooterStyle, IconCover, IconList, LogoCover, NavBar } from "./style";
import Logo_d from "@svg/shared/logo_light.svg?react";
import Logo_t from "@svg/shared/logo_light_t.svg?react";
import Logo_m from "@svg/shared/logo_light_m.svg?react";
import Facebook from "@svg/shared/icon-facebook.svg?react";
import Twitter from "@svg/shared/icon-twitter.svg?react";
import Instagram from "@svg/shared/icon-instagram.svg?react";
import { useResponsive } from "@hooks/responsive";

const Footer = () => {
  const { isTablet, isMobile } = useResponsive();

  return (
    <ContainerCover>
      <Container>
        <FooterStyle>
          <LogoCover to={"/"}>{isTablet ? <Logo_t /> : isMobile ? <Logo_m /> : <Logo_d />}</LogoCover>
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
