import React, { useCallback } from "react";

import BannerUrl_d from "@img/home/image-hero-coffeepress_d.jpg";
import BannerUrl_t from "@img/home/image-hero-coffeepress_t.jpg";
import BannerUrl_m from "@img/home/image-hero-coffeepress_m.jpg";

import { Container, ContainerCover } from "@styles/common";
import { Button01 } from "@components/Button/styles";

import { BannerContent, BannerStyle, BannerTitle } from "./styles";
import { useNavigate } from "react-router";
import { useResponsive } from "@hooks/responsive";

const Banner = () => {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  const navigator = useNavigate();

  const MoveHome = useCallback(() => {
    navigator("/plan");
  }, [navigator]);

  return (
    <ContainerCover as="section" style={{ marginBottom: isMobile ? "120px" : isTablet ? "144px" : "136px" }}>
      <Container>
        <BannerStyle url={isMobile ? BannerUrl_m : isTablet ? BannerUrl_t : BannerUrl_d}>
          <BannerTitle as={isDesktop ? "h1" : "h2"}>Great coffee made simple.</BannerTitle>
          <BannerContent>
            Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </BannerContent>
          <Button01 onClick={MoveHome}>Create your plan</Button01>
        </BannerStyle>
      </Container>
    </ContainerCover>
  );
};

export default Banner;
