import AlertModal from "@components/AlertModal";
import {
  Content,
  ContentCover,
  DesktopModalStyle,
  Header,
  ModalContentStyle,
  PriceContainer,
  PriceCover,
  Warning,
  mobileBackgroundStyle,
  mobileModalStyle,
} from "./style";
import { useResponsive } from "@hooks/responsive";
import { Button01 } from "@components/Button/styles";
import { capitalizeFirstLetterInWords } from "@utils/capitalize";
import { selectedPlanContent } from "@utils/selectedPlanContent";
import { IFormInput } from "@pages/Plan/data";

interface Props {
  isShow: boolean;
  onClose: () => void;
  data: IFormInput;
}

export const SummaryModal = ({ isShow, onClose, data }: Props) => {
  const { isMobile } = useResponsive();
  const { textList, price } = selectedPlanContent(data);

  return (
    <AlertModal
      show={isShow}
      onClose={onClose}
      backgroundStyle={isMobile ? mobileBackgroundStyle : {}}
      modalStyle={isMobile ? mobileModalStyle : DesktopModalStyle}
    >
      <ModalContentStyle>
        <Header>Order Summary</Header>
        <ContentCover>
          <Content>{textList.map((e, i) => (e[0] === 0 ? e[1] : <span key={i}>{capitalizeFirstLetterInWords(e[1])}</span>))}</Content>
          <Warning>
            Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be
            redeemed at the checkout.
          </Warning>
          <PriceContainer>
            {isMobile ? (
              <PriceCover>
                <Button01 style={{ width: "100%" }} onClick={onClose}>
                  Checkout - {price} / mo
                </Button01>
              </PriceCover>
            ) : (
              <PriceCover>
                <h3>{price}/ mo</h3>
                <Button01 onClick={onClose}>Checkout</Button01>
              </PriceCover>
            )}
          </PriceContainer>
        </ContentCover>
      </ModalContentStyle>
    </AlertModal>
  );
};
