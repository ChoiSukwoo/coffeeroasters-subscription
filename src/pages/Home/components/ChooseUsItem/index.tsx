import React from 'react';
import { ChooseUsItemStyle, Content, IconCover, ItemInfo, ItemNm } from './styles';

interface Props {
  Icon: string;
  name: string;
  info: string;
}

const ChooseUsItem = ({ Icon: SvgIcon, name, info }: Props) => {
  return (
    <ChooseUsItemStyle>
      <IconCover>
        <SvgIcon />
      </IconCover>
      <Content>
        <ItemNm>{name}</ItemNm>
        <ItemInfo>{info}</ItemInfo>
      </Content>
    </ChooseUsItemStyle>
  );
};

export default ChooseUsItem;
