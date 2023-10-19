import { HowItWorksItemStyle, ItemContent, ItemNm, ItemNum } from "./styles";
import { PlanType } from "@components/CreatePlan";

interface Props {
  num: string;
  name: string;
  info: string;
  theme: PlanType;
}

const HowItWorksItem = ({ num, name, info, theme }: Props) => {
  return (
    <HowItWorksItemStyle theme={theme}>
      <ItemNum>{num}</ItemNum>
      <ItemNm>{name}</ItemNm>
      <ItemContent>{info}</ItemContent>
    </HowItWorksItemStyle>
  );
};

export default HowItWorksItem;
