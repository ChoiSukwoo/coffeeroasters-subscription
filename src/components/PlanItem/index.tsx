import React from 'react';
import { HowItWorksItemStyle, ItemNm, ItemNum } from './styles';
import { PlanType } from '@components/CreatePlan';

interface Props {
  num: string;
  name: string;
  info: string;
  type: PlanType;
}

const HowItWorksItem = ({ num, name, info, type }: Props) => {
  return (
    <HowItWorksItemStyle type={type}>
      <ItemNum>{num}</ItemNum>
      <ItemNm>{name}</ItemNm>
      <div>{info}</div>
    </HowItWorksItemStyle>
  );
};

export default HowItWorksItem;
