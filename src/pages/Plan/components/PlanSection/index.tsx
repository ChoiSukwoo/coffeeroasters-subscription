import { Container, ContainerCover } from "@styles/common";
import CreatePlan from "@components/CreatePlan";
import { PlanCover } from "./styles";
import { useResponsive } from "@hooks/responsive";

const PlanSection = () => {
  const { isDesktop, isTablet } = useResponsive();

  return (
    <ContainerCover style={{ marginBottom: isDesktop ? "177px" : isTablet ? "144px" : "120px" }} as={"section"}>
      {isDesktop ? (
        <Container>
          <PlanCover>
            <CreatePlan theme="dark" />
          </PlanCover>
        </Container>
      ) : (
        <PlanCover>
          <CreatePlan theme="dark" />
        </PlanCover>
      )}
    </ContainerCover>
  );
};

export default PlanSection;
