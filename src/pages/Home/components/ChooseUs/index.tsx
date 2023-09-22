import React from 'react';
import { Container, ContainerCover } from '@styles/common';
import { Back, Content, ItemList, ItemListCover } from './styles';
import CoffeeBin from '@svg/home/desktop/icon-coffee-bean.svg';
import Gift from '@svg/home/desktop/icon-gift.svg';
import Truck from '@svg/home/desktop/icon-truck.svg';
import ChooseUsItem from '../ChooseUsItem';

const ChooseUs = () => {
  return (
    <ContainerCover as="section" style={{ marginBottom: '200px' }}>
      <Container>
        <Content>
          <Back>
            <h2 style={{ marginBottom: '32px' }}>Why choose us?</h2>
            <div style={{ width: '540px' }}>
              A large part of our role is choosing which particular coffees will be featured in our range. This means
              working closely with the best coffee growers to give you a more impactful experience on every level.
            </div>
          </Back>
          <ItemListCover>
            <ItemList>
              <ChooseUsItem
                Icon={CoffeeBin}
                name="Best quality"
                info="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
              />
              <ChooseUsItem
                Icon={Gift}
                name="Exclusive benefits"
                info="Special offers and swag when you subscribe, including 30% off your first shipment."
              />
              <ChooseUsItem
                Icon={Truck}
                name="Free shipping"
                info="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
              />
            </ItemList>
          </ItemListCover>
        </Content>
      </Container>
    </ContainerCover>
  );
};

export default ChooseUs;
