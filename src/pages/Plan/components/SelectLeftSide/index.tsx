import React from 'react';
import { Content, ItemNum, ItemStyle, ItemText } from './style';
import { Color } from '@styles/index';
import { IFormInput, PreferencesEnum, Progress } from '../SelectSection';
import { UseFormWatch } from 'react-hook-form';

interface Props {
  watch: UseFormWatch<IFormInput>;
}

const LeftSide = ({ watch }: Props) => {
  return (
    <Content>
      <LeftSideItem num={1} text={Progress[0]} active={true} />
      <div style={{ width: '100%', height: '1px', backgroundColor: Color.grey }} />

      <LeftSideItem num={2} text={Progress[1]} active={!!watch('preferences')} />
      <div style={{ width: '100%', height: '1px', backgroundColor: Color.grey }} />

      <LeftSideItem num={3} text={Progress[2]} active={!!watch('beanType')} />
      <div style={{ width: '100%', height: '1px', backgroundColor: Color.grey }} />

      <LeftSideItem
        num={4}
        text={Progress[3]}
        active={!!watch('quantity') && watch('preferences') !== PreferencesEnum.capsule}
        disable={watch('preferences') === PreferencesEnum.capsule}
      />
      <div style={{ width: '100%', height: '1px', backgroundColor: Color.grey }} />

      <LeftSideItem
        num={5}
        text={Progress[4]}
        active={watch('preferences') !== PreferencesEnum.capsule ? !!watch('grindOption') : !!watch('quantity')}
      />
      <div style={{ width: '100%', height: '1px', backgroundColor: Color.grey }} />
    </Content>
  );
};

interface ItemProps {
  num: number;
  text: string;
  active: boolean;
  disable: boolean;
}

const LeftSideItem = ({ num, text, active, disable }: ItemProps) => {
  return (
    <ItemStyle active={active} disable={disable}>
      <ItemNum active={active}>{num}</ItemNum>
      <ItemText active={active}>{text}</ItemText>
    </ItemStyle>
  );
};

LeftSideItem.defaultProps = {
  disable: false,
};

export default LeftSide;
