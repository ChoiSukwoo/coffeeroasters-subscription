import { Container, ContainerCover } from '@styles/common';
import React from 'react';
import { Content, ImgStyle, TextAre } from './style';

import Image from '@img/about/desktop/image-commitment.jpg';

const OurCommitment = () => {
  return (
    <ContainerCover as={'section'} style={{ paddingBottom: '168px' }}>
      <Container>
        <Content>
          <ImgStyle url={Image} />
          <TextAre>
            <h2 style={{ marginBottom: '32px' }}>Our commitment </h2>
            <p>
              We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for
              you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the
              specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global
              community of farmers through with well above fair-trade benchmarks. We also offer training, support farm
              community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each
              lot to highlight tasting profiles distinctive to their native growing region.
            </p>
          </TextAre>
        </Content>
      </Container>
    </ContainerCover>
  );
};

export default OurCommitment;
