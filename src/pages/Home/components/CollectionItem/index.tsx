import React from 'react';
import { CollectionItemStyle, ItemInfo, ItemNm } from './styles';

interface Props {
  imgSrc: string;
  name: string;
  info: string;
}

const CollectionItem = ({ imgSrc, name, info }: Props) => {
  return (
    <CollectionItemStyle>
      <img alt={name} src={imgSrc} style={{ paddingBottom: '72px', objectFit: 'cover' }} />
      <ItemNm>{name}</ItemNm>
      <ItemInfo>{info}</ItemInfo>
    </CollectionItemStyle>
  );
};

export default CollectionItem;
