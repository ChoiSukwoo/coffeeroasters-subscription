import React from 'react';
import { Container, ContainerCover } from '@styles/common';
import { Color } from '@styles/index';
import { Circle, Content, Line } from './style';
import HowItWorksItem from '../HowItWorksItem';

`

Create your plan

Home
About us
Create your plan`;

const HowItWorks = () => {
  return (
    <ContainerCover as="section" style={{ marginBottom: '64px' }}>
      <Container>
        <Content>
          <h3 style={{ color: Color.grey, marginBottom: '95px' }}>How it works</h3>
          <div style={{ display: 'flex', position: 'relative', marginBottom: '82px' }}>
            <Line />
            <Circle style={{ top: '-13px' }} />
            <Circle style={{ top: '-13px', left: '380px' }} />
            <Circle style={{ top: '-13px', left: '760px' }} />
          </div>
          <div style={{ display: 'flex', columnGap: '95px' }}>
            <HowItWorksItem
              num={'01'}
              name={'Pick your coffee'}
              info={
                'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
              }
            />
            <HowItWorksItem
              num={'02'}
              name={'Choose the frequency'}
              info={
                'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
              }
            />
            <HowItWorksItem
              num={'03'}
              name={'Receive and enjoy!'}
              info={
                'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
              }
            />
          </div>
        </Content>
      </Container>
    </ContainerCover>
  );
};

export default HowItWorks;
