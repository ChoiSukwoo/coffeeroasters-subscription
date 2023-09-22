import React from 'react';

import BannerUrl from '@img/home/desktop/image-hero-coffeepress.jpg';

import { Container, ContainerCover } from '@styles/common';
import { Button01 } from '@components/Button/styles';

import { BannerStyle } from './styles';

const Banner = () => {
  return (
    <ContainerCover as="section" style={{ marginBottom: '136px' }}>
      <Container>
        <BannerStyle url={BannerUrl}>
          <h1 style={{ width: '493px', marginBottom: '32px' }}>Great coffee made simple.</h1>
          <p style={{ width: '445px', marginBottom: '56px' }}>
            Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best
            roasters delivered directly to your door, at your schedule.
          </p>
          <Button01>Create your plan</Button01>
        </BannerStyle>
      </Container>
    </ContainerCover>
  );
};

export default Banner;
