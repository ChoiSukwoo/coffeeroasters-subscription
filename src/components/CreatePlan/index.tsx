import HowItWorksItem from '@components/PlanItem';
import React from 'react';
import { Line, Circle, CircleCover, Content } from './style';

interface Props {
  type: PlanType;
}

export type PlanType = 'white' | 'dark';

const CreatePlan = ({ type }: Props) => {
  return (
    <Content>
      <CircleCover>
        <Line />
        <Circle type={type} />
        <Circle type={type} style={{ left: '380px' }} />
        <Circle type={type} style={{ left: '760px' }} />
      </CircleCover>
      <div style={{ display: 'flex', columnGap: '95px' }}>
        <HowItWorksItem
          num={'01'}
          name={'Pick your coffee'}
          info={
            'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
          }
          type={type}
        />
        <HowItWorksItem
          num={'02'}
          name={'Choose the frequency'}
          info={
            'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
          }
          type={type}
        />
        <HowItWorksItem
          num={'03'}
          name={'Receive and enjoy!'}
          info={
            'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
          }
          type={type}
        />
      </div>
    </Content>
  );
};

CreatePlan.defaultProps = {
  type: 'white',
};

export default CreatePlan;
