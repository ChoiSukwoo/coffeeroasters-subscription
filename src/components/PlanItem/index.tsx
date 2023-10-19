import { HowItWorksItemStyle, ItemContent, ItemNm, ItemNum } from "./styles";
import { PlanType } from "@components/CreatePlan";

interface Props {
  num: string;
  name: string;
  info: string;
  type: PlanType;
}

const HowItWorksItem = ({ num, name, info, type }: Props) => {
  return (
    <HowItWorksItemStyle type={type}>
      <ItemNum>{num}</ItemNum>
      <ItemNm>{name}</ItemNm>
      <ItemContent>{info}</ItemContent>
    </HowItWorksItemStyle>
  );
};

export default HowItWorksItem;
