import React from 'react';
import BannerImg_d from '@img/about/image-hero-whitecup_d.jpg';
import BannerImg_t from '@img/about/image-hero-whitecup_t.jpg';
import BannerImg_m from '@img/about/image-hero-whitecup_m.jpg';
import { BannerStyle, Content, Title } from './styles';
import { Container, ContainerCover } from '@styles/common';
import { useResponsive } from '@hooks/responsive';

const Banner = () => {
  const { isDesktop, isTablet } = useResponsive();

  return (
    <ContainerCover as={'section'} style={{ marginBottom: isDesktop ? '168px' : isTablet ? '144px' : '120px' }}>
      <Container>
        <BannerStyle url={isDesktop ? BannerImg_d : isTablet ? BannerImg_t : BannerImg_m}>
          <Title>About us</Title>
          <Content>
            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the
            world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
          </Content>
        </BannerStyle>
      </Container>
    </ContainerCover>
  );
};

export default Banner;
