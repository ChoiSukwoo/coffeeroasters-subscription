import React from 'react';
import { Container, ContainerCover } from '@styles/common';
import { Color } from '@styles/index';
import { Content } from './style';
import CreatePlan from '@components/CreatePlan';

const HowItWorks = () => {
  return (
    <ContainerCover as="section" style={{ marginBottom: '64px' }}>
      <Container>
        <Content>
          <h3 style={{ color: Color.grey, marginBottom: '95px' }}>How it works</h3>
          <CreatePlan />
        </Content>
      </Container>
    </ContainerCover>
  );
};

export default HowItWorks;
