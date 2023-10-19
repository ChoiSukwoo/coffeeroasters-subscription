import { Content, Summary, SummaryContent, SummaryHeader } from "./style";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

import SelectPart from "../SelectPart";
import { Button01 } from "@components/Button/styles";
import { selectedPlanContent } from "@utils/selectedPlanContent";
import { capitalizeFirstLetterInWords } from "@utils/capitalize";
import { useResponsive } from "@hooks/responsive";
import { IFormInput, IFormInputKeys, PreferencesEnum, SelectCardData } from "@pages/Plan/data";

interface Props {
  register: UseFormRegister<IFormInput>;
  watch: UseFormWatch<IFormInput>;
  extend: {
    preferences: boolean;
    beanType: boolean;
    quantity: boolean;
    grindOption: boolean;
    deliveries: boolean;
  };
}

export interface CardInfo<T extends IFormInputKeys> {
  content: string;
  value: IFormInput[T];
}

const RightSide = ({ register, watch, extend }: Props) => {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  const selectCardData = SelectCardData();

  const grindOptionDisable = watch("preferences") === PreferencesEnum.capsule;

  const beanTypeActive = !!watch("preferences");
  const quantityActive = !!watch("beanType");
  const grindOptionActive = !grindOptionDisable && !!watch("quantity");
  const deliveriesActive = grindOptionDisable ? !!watch("quantity") : !!watch("grindOption");

  const { textList } = selectedPlanContent({
    preferences: watch("preferences"),
    beanType: watch("beanType"),
    deliveries: watch("deliveries"),
    grindOption: watch("grindOption"),
    quantity: watch("quantity"),
  });

  return (
    <Content>
      <SelectPart
        title="How do you drink your coffee?"
        watch={watch("preferences")}
        register={register("preferences", { required: true })}
        cardinfos={selectCardData.preferences}
        active={true}
        expend={extend.preferences}
        style={{ marginBottom: isDesktop ? "88px" : isTablet ? "100px" : "110px" }}
      />
      <SelectPart
        title="What type of coffee?"
        watch={watch("beanType")}
        register={register("beanType", { required: true })}
        cardinfos={selectCardData.beenType}
        active={beanTypeActive}
        expend={extend.beanType}
        style={{ marginBottom: isDesktop ? "88px" : isTablet ? "100px" : "110px" }}
      />
      <SelectPart
        title="How much would you like?"
        watch={watch("quantity")}
        register={register("quantity", { required: true })}
        cardinfos={selectCardData.quantity}
        active={quantityActive}
        expend={extend.quantity}
        style={{ marginBottom: isDesktop ? "88px" : isTablet ? "100px" : "110px" }}
      />
      <SelectPart
        title="Want us to grind them?"
        watch={watch("grindOption")}
        register={register("grindOption", { required: !grindOptionDisable })}
        cardinfos={selectCardData.grindOption}
        active={grindOptionActive}
        disable={grindOptionDisable}
        expend={extend.grindOption}
        style={{ marginBottom: isDesktop ? "88px" : isTablet ? "100px" : "110px" }}
      />
      <SelectPart
        title="How often should we deliver?"
        watch={watch("deliveries")}
        register={register("deliveries", { required: true })}
        cardinfos={selectCardData.deliveries}
        active={deliveriesActive}
        expend={extend.deliveries}
        style={{ marginBottom: isDesktop ? "88px" : isTablet ? "140px" : "120px" }}
      />

      <Summary style={{ marginBottom: isMobile ? "56px" : "40px" }}>
        <SummaryHeader>Order Summary</SummaryHeader>
        <SummaryContent>{textList.map((e, i) => (e[0] === 0 ? e[1] : <span key={i}>{capitalizeFirstLetterInWords(e[1])}</span>))}</SummaryContent>
      </Summary>

      <div style={{ display: "flex", justifyContent: isMobile ? "center" : "flex-end" }}>
        <Button01 type="submit" form="SelectForm">
          Create my plan!
        </Button01>
      </div>
    </Content>
  );
};

export default RightSide;
