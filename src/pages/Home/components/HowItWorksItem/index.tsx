import React from 'react';
import { HowItWorksItemStyle, ItemNm, ItemNum } from './styles';

interface Props {
  num: string;
  name: string;
  info: string;
}

const HowItWorksItem = ({ num, name, info }: Props) => {
  return (
    <HowItWorksItemStyle>
      <ItemNum>{num}</ItemNum>
      <ItemNm>{name}</ItemNm>
      <div>{info}</div>
    </HowItWorksItemStyle>
  );
};

export default HowItWorksItem;
