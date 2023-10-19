import React, { useCallback } from "react";

import Layout from "@layouts/MainLayout";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import ChooseUs from "./components/ChooseUs";
import HowItWorks from "./components/HowItworks";
import { Button01 } from "@components/Button/styles";
import { Container, ContainerCover } from "@styles/common";
import { useNavigate } from "react-router";
import { useResponsive } from "@hooks/responsive";
import { ButtonCover } from "./styles";

const Home = () => {
  const navigator = useNavigate();
  const { isDesktop, isTablet } = useResponsive();

  const MoveHome = useCallback(() => {
    navigator("/plan");
  }, [navigator]);

  return (
    <Layout title="HOME">
      <div style={{ flex: "1" }}>
        <Banner />
        <Collection />
        <ChooseUs />
        <HowItWorks />
        <ContainerCover style={{ marginBottom: isDesktop ? "200px" : isTablet ? "144px" : "120px" }}>
          <Container>
            <ButtonCover>
              <Button01 onClick={MoveHome}>Create your plan</Button01>
            </ButtonCover>
          </Container>
        </ContainerCover>
      </div>
    </Layout>
  );
};
export default Home;
