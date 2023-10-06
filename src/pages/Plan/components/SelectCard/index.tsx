import React from 'react';
import { CardStyle } from './style';
import { UseFormRegisterReturn } from 'react-hook-form';
import { IFormInputKeys } from '../SelectSection';

interface Props<T extends IFormInputKeys> {
  register: UseFormRegisterReturn<T>;
  content: string;
  select: boolean;
  value: string;
}

const SelectCard = <T extends IFormInputKeys>({ content: contetn, select, value, register }: Props<T>) => {
  return (
    <>
      <CardStyle select={select}>
        <input hidden type="radio" value={value} {...register} />
        <h4 style={{ marginBottom: '24px' }}>{value}</h4>
        <p>{contetn}</p>
      </CardStyle>
    </>
  );
};

export default SelectCard;
