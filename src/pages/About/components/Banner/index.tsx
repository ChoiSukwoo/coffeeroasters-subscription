import React from 'react';
import BannerImg from '@img/about/desktop/image-hero-whitecup.jpg';
import { BannerStyle } from './styles';
import { Container, ContainerCover } from '@styles/common';

const Banner = () => {
  return (
    <ContainerCover style={{ marginBottom: '168px' }} as={'section'}>
      <Container>
        <BannerStyle url={BannerImg}>
          <h2 style={{ paddingBottom: '24px' }}>About us</h2>
          <p style={{ width: '445px' }}>
            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the
            world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
          </p>
        </BannerStyle>
      </Container>
    </ContainerCover>
  );
};

export default Banner;
