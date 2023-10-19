import HowItWorksItem from "@components/PlanItem";
import { Line, Circle, CircleCover, Content, ItemCover } from "./style";
import { useResponsive } from "@hooks/responsive";

interface Props {
  theme: PlanType;
}

export type PlanType = "white" | "dark";

const CreatePlan = ({ theme }: Props) => {
  const { isDesktop, isMobile } = useResponsive();

  return (
    <Content>
      {!isMobile && (
        <CircleCover>
          <Line />
          <Circle theme={theme} />
          <Circle theme={theme} style={{ left: isDesktop ? "380px" : "233px" }} />
          <Circle theme={theme} style={{ left: isDesktop ? "760px" : "466px" }} />
        </CircleCover>
      )}

      <ItemCover>
        <HowItWorksItem
          num={"01"}
          name={"Pick your coffee"}
          info={
            "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
          }
          type={theme}
        />
        <HowItWorksItem
          num={"02"}
          name={"Choose the frequency"}
          info={
            "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
          }
          type={theme}
        />
        <HowItWorksItem
          num={"03"}
          name={"Receive and enjoy!"}
          info={
            "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
          }
          type={theme}
        />
      </ItemCover>
    </Content>
  );
};

CreatePlan.defaultProps = {
  theme: "white",
};

export default CreatePlan;
