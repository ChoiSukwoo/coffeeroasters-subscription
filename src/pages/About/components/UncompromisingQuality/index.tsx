import { Container, ContainerCover } from "@styles/common";
import { BackgroundImg, ContentCover, ImgStyle, Content, ContentTitle, ImgStyleCover } from "./style";

import ImageSrc_d from "@img/about/image-quality_d.jpg";
import ImageSrc_t from "@img/about/image-quality_t.jpg";
import ImageSrc_m from "@img/about/image-quality_m.jpg";
import BackgroundSrc_d from "@img/about/bg-quality_d.png";
import BackgroundSrc_t from "@img/about/bg-quality_t.png";
import BackgroundSrc_m from "@img/about/bg-quality_m.png";
import { useResponsive } from "@hooks/responsive";

const OurCommitment = () => {
  const { isDesktop, isTablet } = useResponsive();
  return (
    <ContainerCover as={"section"} style={{ marginBottom: isDesktop ? "168px" : isTablet ? "144px" : "120px" }}>
      <Container>
        <ContentCover>
          <BackgroundImg src={isDesktop ? BackgroundSrc_d : isTablet ? BackgroundSrc_t : BackgroundSrc_m} />
          <Content>
            <ContentTitle>Uncompromising quality</ContentTitle>
            <p>
              Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality
              control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our
              goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
            </p>
          </Content>
          <ImgStyleCover>
            <ImgStyle src={isDesktop ? ImageSrc_d : isTablet ? ImageSrc_t : ImageSrc_m} />
          </ImgStyleCover>
        </ContentCover>
      </Container>
    </ContainerCover>
  );
};

export default OurCommitment;
