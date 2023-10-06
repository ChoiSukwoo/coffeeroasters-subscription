import React from 'react';
import { Container, ContainerCover } from '@styles/common';
import { Content } from './style';

import RightSide from '../SelectRightSide';
import LeftSide from '../SelectLeftSide';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

export interface IFormInput {
  preferences?: PreferencesEnum;
  beanType?: BeanTypeEnum;
  quantity?: QuantityEnum;
  grindOption?: GrindOptionEnum;
  deliveries?: DeliveriesEnum;
}

export type IFormInputKeys = keyof IFormInput;

export const Progress = ['Preferences', 'Bean Type', 'Quantity', 'Grind Option', 'Deliveries'];

export enum IFormInputKeysEnum {
  preferences = 'preferences',
  beanType = 'beanType',
  quantity = 'quantity',
  grindOption = 'grindOption',
  deliveries = 'deliveries',
}

export enum PreferencesEnum {
  capsule = 'Capsule',
  filter = 'Filter',
  espresso = 'Espresso',
}

export enum BeanTypeEnum {
  SingleOrigin = 'Single Origin',
  Decaf = 'Decaf',
  Blended = 'Blended',
}

export enum QuantityEnum {
  _250g = '250g',
  _500g = '500g',
  _1000g = '1000g',
}

export enum GrindOptionEnum {
  Wholebean = 'Wholebean',
  Filter = 'Filter',
  Cafetiere = 'Cafetiére',
}

export enum DeliveriesEnum {
  EveryWeek = 'Every week',
  Every2Weeks = 'Every 2 weeks',
  EveryMonth = 'Every month',
}

interface Props {
  setAlterText: (content: IFormInput) => void;
  setShowSummary: () => void;
}

const SelectSection = ({ setAlterText, setShowSummary }: Props) => {
  const { register, handleSubmit, watch } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setAlterText(data);
    setShowSummary();
  };

  const onError: SubmitErrorHandler<IFormInput> = (e) => {
    if (e.preferences) {
      alert('Please Select Preferences');
      return;
    }
    if (e.beanType) {
      alert('Please Select BeanType');
      return;
    }
    if (e.quantity) {
      alert('Please Select Quantity');
      return;
    }
    if (e.grindOption) {
      alert('Please Select GrindOptio');
      return;
    }
    if (e.deliveries) {
      alert('Please Select Deliveries ');
      return;
    }
  };

  return (
    <ContainerCover style={{ marginBottom: '168px' }} as={'section'}>
      <Container>
        <Content onSubmit={handleSubmit(onSubmit, onError)} id="SelectForm">
          <LeftSide watch={watch} />
          <RightSide register={register} watch={watch} />
        </Content>
      </Container>
    </ContainerCover>
  );
};

export default SelectSection;
