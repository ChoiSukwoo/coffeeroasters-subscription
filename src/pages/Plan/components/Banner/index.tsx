import BannerImg_d from "@img/plan/image-hero-blackcup_d.jpg";
import BannerImg_t from "@img/plan/image-hero-blackcup_t.jpg";
import BannerImg_m from "@img/plan/image-hero-blackcup_m.jpg";
import { BannerContent, BannerStyle, BannerTitle } from "./styles";
import { Container, ContainerCover } from "@styles/common";
import { useResponsive } from "@hooks/responsive";

const Banner = () => {
  const { isDesktop, isTablet } = useResponsive();

  return (
    <ContainerCover style={{ marginBottom: isDesktop ? "177px" : isTablet ? "144px" : "120px" }} as={"section"}>
      <Container>
        <BannerStyle url={isDesktop ? BannerImg_d : isTablet ? BannerImg_t : BannerImg_m}>
          <BannerTitle>Create plan</BannerTitle>
          <BannerContent>
            Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for
            convenience, for quality.
          </BannerContent>
        </BannerStyle>
      </Container>
    </ContainerCover>
  );
};

export default Banner;
