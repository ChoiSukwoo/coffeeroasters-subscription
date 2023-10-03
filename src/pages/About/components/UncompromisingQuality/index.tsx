import { Container, ContainerCover } from '@styles/common';
import React from 'react';
import { BackgroundImg, Content, ImgStyle, TextArea } from './style';

import ImageSrc from '@img/about/desktop/image-quality.jpg';
import BackgroundSrc from '@img/about/desktop/bg-quality.png';

const OurCommitment = () => {
  return (
    <ContainerCover as={'section'} style={{ paddingBottom: '168px' }}>
      <Container>
        <Content>
          <BackgroundImg url={BackgroundSrc} />
          <TextArea>
            <h2 style={{ marginBottom: '32px' }}>Uncompromising quality</h2>
            <p>
              Although we work with growers who pay close attention to all stages of harvest and processing, we employ,
              on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag
              of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </TextArea>
          <ImgStyle url={ImageSrc} />
        </Content>
      </Container>
    </ContainerCover>
  );
};

export default OurCommitment;
