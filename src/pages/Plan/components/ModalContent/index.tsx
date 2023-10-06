import React from 'react';
import { ContentCover, ModalContentStyle, Header, Warning, Content, PriceCover, PriceContainer } from './style';
import { IFormInput } from '../SelectSection';
import { selectedPlanContent } from '@utils/selectedPlanContent';
import { capitalizeFirstLetterInWords } from '@utils/capitalize';
import { Button01 } from '@components/Button/styles';

interface Props {
  data: IFormInput;
}

const ModalContent = ({ data }: Props) => {
  const { textList, price } = selectedPlanContent(data);

  return (
    <ModalContentStyle>
      <Header>
        <h2>Order Summary</h2>
      </Header>
      <ContentCover>
        <Content>
          {textList.map((e, i) => (e[0] === 0 ? e[1] : <span key={i}>{capitalizeFirstLetterInWords(e[1])}</span>))}
        </Content>
        <Warning>
          Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription
          discount codes can also be redeemed at the checkout.
        </Warning>
        <PriceContainer>
          <PriceCover>
            <h3>{price}/ mo</h3>
            <Button01>Checkout</Button01>
          </PriceCover>
        </PriceContainer>
      </ContentCover>
    </ModalContentStyle>
  );
};

export default ModalContent;
