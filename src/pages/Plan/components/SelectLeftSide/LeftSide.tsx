import React from 'react';
import { Content, Line } from './style';
import { Progress, PreferencesEnum } from '@pages/Plan/data';
import { Props, LeftSideItem } from '.';

export const LeftSide = ({ watch, extend, setExtend }: Props) => {
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
        expendable={false}
      />
      <Line />
      <LeftSideItem
        num={2}
        text={Progress[1]}
        nowProgress={nowProgress === 'beanType'}
        onClick={() => setExtend.beanType(!extend.beanType)}
        expendable={false}
      />
      <Line />
      <LeftSideItem
        num={3}
        text={Progress[2]}
        nowProgress={nowProgress === 'quantity'}
        onClick={() => setExtend.quantity(!extend.quantity)}
      />
      <Line />
      <LeftSideItem
        num={4}
        text={Progress[3]}
        nowProgress={nowProgress === 'grindOption'}
        disable={grindOptionDisable}
        onClick={() => setExtend.grindOption(!extend.grindOption)}
      />
      <Line />
      <LeftSideItem
        num={5}
        text={Progress[4]}
        nowProgress={nowProgress === 'deliveries'}
        onClick={() => setExtend.deliveries(!extend.deliveries)}
      />
    </Content>
  );
};
