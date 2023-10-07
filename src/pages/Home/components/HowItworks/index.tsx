import React from 'react';
import { Container, ContainerCover } from '@styles/common';
import { Color } from '@styles/index';
import { Content, Title } from './style';
import CreatePlan from '@components/CreatePlan';
import { useResponsive } from '@hooks/responsive';

const HowItWorks = () => {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  return (
    <ContainerCover as="section" style={{ marginBottom: isMobile ? '79px' : isTablet ? '44px' : '64px' }}>
      <Container>
        <Content>
          <Title>How it works</Title>
          <CreatePlan />
        </Content>
      </Container>
    </ContainerCover>
  );
};

export default HowItWorks;
