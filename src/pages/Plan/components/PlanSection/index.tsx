import React from 'react';
import { Container, ContainerCover } from '@styles/common';
import CreatePlan from '@components/CreatePlan';
import { PlanCover } from './styles';

const PlanSection = () => {
  return (
    <ContainerCover style={{ marginBottom: '168px' }} as={'section'}>
      <Container>
        <PlanCover>
          <CreatePlan type="dark" />
        </PlanCover>
      </Container>
    </ContainerCover>
  );
};

export default PlanSection;
