import { Container, ContainerCover } from '@styles/common';
import React from 'react';
import { Content, ItemList } from './style';

import { Color } from '@styles/index';
import Item from '../OurHeadquartersItem';

import UkSvg from '@svg/about/illustration-uk.svg';
import CanadaSvg from '@svg/about/illustration-canada.svg';
import Australia from '@svg/about/illustration-australia.svg';

const OurCommitment = () => {
  return (
    <ContainerCover as={'section'} style={{ paddingBottom: '168px' }}>
      <Container>
        <Content>
          <h4 style={{ color: Color.grey, marginBottom: '72px' }}>Our headquarters</h4>
          <ItemList>
            <Item
              Icon={UkSvg}
              name={'United Kingdom'}
              infoList={['68 Asfordby Rd', 'Alcaston', 'SY6 1YA', '+44 1241 918425']}
            />
            <Item
              Icon={CanadaSvg}
              name={'Canada'}
              infoList={['1528 Eglinton Avenue', 'Toronto', 'Ontario M4P 1A6', '+1 416 485 2997']}
            />
            <Item
              Icon={Australia}
              name={'Australia'}
              infoList={['36 Swanston Street', 'Kewell', 'Victoria', '+61 4 9928 3629']}
            />
          </ItemList>
        </Content>
      </Container>
    </ContainerCover>
  );
};

export default OurCommitment;
