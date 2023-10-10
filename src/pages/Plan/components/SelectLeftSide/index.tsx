import React from 'react';
import { Content, ItemNum, ItemStyle, ItemText, Line } from './style';
import { Color } from '@styles/index';
import { UseFormWatch } from 'react-hook-form';
import { IFormInput, Progress, PreferencesEnum } from '@pages/Plan/data';

interface Props {
  watch: UseFormWatch<IFormInput>;
  extend: {
    preferences: boolean;
    beanType: boolean;
    quantity: boolean;
    grindOption: boolean;
    deliveries: boolean;
  };
  setExtend: {
    preferences: (value: boolean) => void;
    beanType: (value: boolean) => void;
    quantity: (value: boolean) => void;
    grindOption: (value: boolean) => void;
    deliveries: (value: boolean) => void;
  };
}

const LeftSide = ({ watch, extend, setExtend }: Props) => {
  const grindOptionDisable = watch('preferences') === PreferencesEnum.capsule;
  const beanTypeActive = !!watch('preferences');
  const quantityActive = !!watch('beanType');
  const grindOptionActive = !grindOptionDisable && !!watch('quantity');
  const deliveriesActive = grindOptionDisable ? !!watch('quantity') : !!watch('grindOption');

  const nowProgress = deliveriesActive
    ? 'deliveries'
    : grindOptionActive
    ? 'grindOption'
    : quantityActive
    ? 'quantity'
    : beanTypeActive
    ? 'beanType'
    : 'preferences';

  return (
    <Content>
      <LeftSideItem
        num={1}
        text={Progress[0]}
        nowProgress={nowProgress === 'preferences'}
        onClick={() => setExtend.preferences(!extend.preferences)}
        expendable={true}
      />
      <Line />
      <LeftSideItem
        num={2}
        text={Progress[1]}
        nowProgress={nowProgress === 'beanType'}
        onClick={() => setExtend.beanType(!extend.beanType)}
        expendable={beanTypeActive}
      />
      <Line />
      <LeftSideItem
        num={3}
        text={Progress[2]}
        nowProgress={nowProgress === 'quantity'}
        onClick={() => setExtend.quantity(!extend.quantity)}
        expendable={quantityActive}
      />
      <Line />
      <LeftSideItem
        num={4}
        text={Progress[3]}
        nowProgress={nowProgress === 'grindOption'}
        disable={grindOptionDisable}
        onClick={() => setExtend.grindOption(!extend.grindOption)}
        expendable={grindOptionActive}
      />
      <Line />
      <LeftSideItem
        num={5}
        text={Progress[4]}
        nowProgress={nowProgress === 'deliveries'}
        onClick={() => setExtend.deliveries(!extend.deliveries)}
        expendable={deliveriesActive}
      />
    </Content>
  );
};

interface ItemProps {
  num: number;
  text: string;
  disable: boolean;
  nowProgress: boolean;
  expendable: boolean;
  onClick: () => void;
}

const LeftSideItem = ({ num, text, nowProgress, disable, expendable, onClick }: ItemProps) => {
  return (
    <ItemStyle nowProgress={nowProgress} disable={disable} onClick={onClick} expendable={expendable}>
      <ItemNum num={num}>{num}</ItemNum>
      <ItemText>{text}</ItemText>
    </ItemStyle>
  );
};

LeftSideItem.defaultProps = {
  disable: false,
};

export default LeftSide;
