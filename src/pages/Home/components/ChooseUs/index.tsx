import { Container, ContainerCover } from "@styles/common";
import { Back, BackTitle, BactContent, Content, ItemList, ItemListCover } from "./styles";
import CoffeeBin_l from "@svg/home/icon-coffee-bean_l.svg?react";
import Gift_l from "@svg/home/icon-gift_l.svg?react";
import Truck_l from "@svg/home/icon-truck_l.svg?react";
import CoffeeBin_m from "@svg/home/icon-coffee-bean_m.svg?react";
import Gift_m from "@svg/home/icon-gift_m.svg?react";
import Truck_m from "@svg/home/icon-truck_m.svg?react";
import ChooseUsItem from "../ChooseUsItem";
import { useResponsive } from "@hooks/responsive";

const ChooseUs = () => {
  const { isTablet, isMobile } = useResponsive();

  return (
    <ContainerCover as="section" style={{ marginBottom: isMobile ? "120px" : isTablet ? "144px" : "200px" }}>
      <Container>
        <Content>
          <Back>
            <BackTitle>Why choose us?</BackTitle>
            <BactContent>
              A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every level.
            </BactContent>
          </Back>
          <ItemListCover>
            <ItemList>
              <ChooseUsItem
                Icon={isTablet ? CoffeeBin_m : CoffeeBin_l}
                name="Best quality"
                info="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
              />
              <ChooseUsItem
                Icon={isTablet ? Gift_m : Gift_l}
                name="Exclusive benefits"
                info="Special offers and swag when you subscribe, including 30% off your first shipment."
              />
              <ChooseUsItem
                Icon={isTablet ? Truck_m : Truck_l}
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
