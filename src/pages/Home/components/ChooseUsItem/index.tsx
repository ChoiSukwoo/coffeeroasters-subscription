import React from 'react';
import { ChooseUsItemStyle, ItemInfo, ItemNm } from './styles';

interface Props {
  Icon: string;
  name: string;
  info: string;
}

const ChooseUsItem = ({ Icon: SvgIcon, name, info }: Props) => {
  return (
    <ChooseUsItemStyle>
      <SvgIcon />
      <ItemNm>{name}</ItemNm>
      <ItemInfo>{info}</ItemInfo>
    </ChooseUsItemStyle>
  );
};

export default ChooseUsItem;
