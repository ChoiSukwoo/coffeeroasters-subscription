import React from 'react';

import GranEspresso from '@img/home/desktop/image-gran-espresso.png';
import Planalto from '@img/home/desktop/image-planalto.png';
import Piccollo from '@img/home/desktop/image-piccollo.png';
import Danche from '@img/home/desktop/image-danche.png';

import { Container, ContainerCover } from '@styles/common';
import { BackTextCover, BackText, BackTextDim, Collectiontyle, BackTextPos, CollectionFlex } from './styles';
import CollectionItem from '../CollectionItem';

const Banner = () => {
  return (
    <ContainerCover as="section" style={{ marginBottom: '200px' }}>
      <Container>
        <Collectiontyle>
          <BackTextPos>
            <BackTextCover>
              <BackText>our collection</BackText>
            </BackTextCover>
            <BackTextDim />
          </BackTextPos>
          <CollectionFlex>
            <CollectionItem
              imgSrc={GranEspresso}
              name={'Gran Espresso'}
              info={'Light and flavorful blend with cocoa and black pepper for an intense experience'}
            />
            <CollectionItem
              imgSrc={Planalto}
              name={'Planalto'}
              info={'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'}
            />
            <CollectionItem
              imgSrc={Piccollo}
              name={'Piccollo'}
              info={'Mild and smooth blend featuring notes of toasted almond and dried cherry'}
            />
            <CollectionItem
              imgSrc={Danche}
              name={'Danche'}
              info={'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'}
            />
          </CollectionFlex>
        </Collectiontyle>
      </Container>
    </ContainerCover>
  );
};

export default Banner;
