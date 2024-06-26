import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { Container, ContainerCover } from "@styles/common";
import Logo_d from "@svg/shared/logo_d.svg?react";
import Logo_m from "@svg/shared/logo_m.svg?react";
import Hamberger from "@svg/shared/icon-hamburger.svg?react";
import CloseIcon from "@svg//shared/icon-close.svg?react";
import { Content, HeaderStyle, LogoCover, NavBar } from "./style";
import { useResponsive } from "@hooks/responsive";
import AlertModal from "@components/AlertModal";
import { Color } from "@styles/index";

interface Props {
  isSticky: boolean;
}

const Header = ({ isSticky }: Props) => {
  const { isMobile } = useResponsive();
  const [menuShow, setMenuShow] = useState(false);

  const modalClose = useCallback(() => {
    setMenuShow(false);
  }, []);

  return (
    <>
      <HeaderStyle isSticky={isSticky}>
        <ContainerCover>
          <Container>
            <Content>
              <LogoCover to={"/"} aria-label="HeaderHomeLogo">
                {isMobile ? <Logo_m /> : <Logo_d />}
              </LogoCover>
              {isMobile ? (
                menuShow ? (
                  <CloseIcon onClick={() => setMenuShow(false)} />
                ) : (
                  <Hamberger onClick={() => setMenuShow(true)} />
                )
              ) : (
                <NavBar>
                  <Link to="/">HOME</Link>
                  <Link to="/about">ABOUT US</Link>
                  <Link to="/plan">CREATE YOUR PLAN</Link>
                </NavBar>
              )}
            </Content>
          </Container>
        </ContainerCover>
      </HeaderStyle>
      {isMobile && (
        <AlertModal
          show={menuShow}
          onClose={modalClose}
          backgroundStyle={{
            marginTop: "90px",
            padding: "0 24px 77px",
            background: `linear-gradient(${Color.lightCream} 47%,${Color.lightCream}80)`,
          }}
          modalStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "32px",
            width: "100%",
            height: "100%",
            minWidth: "auto",
            padding: "40px",
            backgroundColor: "transparent",
          }}
        >
          <Link to="/">
            <h4>HOME</h4>
          </Link>
          <Link to="/about">
            <h4>ABOUT US</h4>
          </Link>
          <Link to="/plan">
            <h4>Create Your Plan</h4>
          </Link>
        </AlertModal>
      )}
    </>
  );
};

Header.defaultProps = {
  isSticky: false,
};

export default Header;
