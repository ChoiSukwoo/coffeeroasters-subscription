import React from 'react';
import { ContentStyle, SelectionStyle } from './styles';

interface Props {
  title: string;
  content: string;
}

const Selection = ({ title, content }: Props) => {
  return (
    <SelectionStyle>
      <h4 style={{ marginBottom: '24px' }}>{title}</h4>
      <ContentStyle>{content}</ContentStyle>
    </SelectionStyle>
  );
};

export default Selection;
