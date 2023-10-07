import HowItWorksItem from '@components/PlanItem';
import React from 'react';
import { Line, Circle, CircleCover, Content, ItemCover } from './style';
import { useResponsive } from '@hooks/responsive';

interface Props {
  type: PlanType;
}

export type PlanType = 'white' | 'dark';

const CreatePlan = ({ type }: Props) => {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  return (
    <Content>
      {!isMobile && (
        <CircleCover>
          <Line />
          <Circle type={type} />
          <Circle type={type} style={{ left: isDesktop ? '380px' : '233px' }} />
          <Circle type={type} style={{ left: isDesktop ? '760px' : '466px' }} />
        </CircleCover>
      )}

      <ItemCover>
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
      </ItemCover>
    </Content>
  );
};

CreatePlan.defaultProps = {
  type: 'white',
};

export default CreatePlan;
