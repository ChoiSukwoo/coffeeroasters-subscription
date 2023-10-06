import React from 'react';
import BannerImg from '@img/plan/desktop/image-hero-blackcup.jpg';
import { BannerStyle } from './styles';
import { Container, ContainerCover } from '@styles/common';

const Banner = () => {
  return (
    <ContainerCover style={{ marginBottom: '168px' }} as={'section'}>
      <Container>
        <BannerStyle url={BannerImg}>
          <h1 style={{ marginBottom: '32px' }}>Create plan</h1>
          <p style={{ width: '445px' }}>
            Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method
            you use. For choice, for convenience, for quality.
          </p>
        </BannerStyle>
      </Container>
    </ContainerCover>
  );
};

export default Banner;
