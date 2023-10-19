import { useCallback, useState } from "react";
import { Container, ContainerCover } from "@styles/common";
import { Content } from "./style";

import RightSide from "../SelectRightSide";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useResponsive } from "@hooks/responsive";
import { IFormInput, PreferencesEnum } from "@pages/Plan/data";
import LeftSide from "../SelectLeftSide";

interface Props {
  setAlterText: (content: IFormInput) => void;
  setShowSummary: () => void;
  setShowAlterText: (text: string) => void;
}

const SelectSection = ({ setAlterText, setShowSummary, setShowAlterText }: Props) => {
  const { register, handleSubmit, watch } = useForm<IFormInput>();

  const { isDesktop } = useResponsive();

  const grindOptionDisable = watch("preferences") === PreferencesEnum.capsule;

  const [preferencesExtend, setPreferencesExtend] = useState(true);
  const [beanTypeExtend, setBeanTypeExtend] = useState(true);
  const [quantityExtend, setQuantityExtend] = useState(true);
  const [grindOptionExtend, setGrindOptionExtend] = useState(true);
  const [deliveriesExtend, setDeliveriesExtend] = useState(true);

  const setPreferences = useCallback((value: boolean) => setPreferencesExtend(value), []);

  const setBeanType = useCallback((value: boolean) => !!watch("preferences") && setBeanTypeExtend(value), [watch]);

  const setQuantity = useCallback((value: boolean) => !!watch("beanType") && setQuantityExtend(value), [watch]);

  const setGrindOption = useCallback(
    (value: boolean) => !grindOptionDisable && !!watch("quantity") && setGrindOptionExtend(value),
    [grindOptionDisable, watch]
  );

  const setDeliveries = useCallback(
    (value: boolean) => {
      (!grindOptionDisable ? !!watch("quantity") : !!watch("grindOption")) && setDeliveriesExtend(value);
    },
    [grindOptionDisable, watch]
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setAlterText(data);
    setShowSummary();
  };

  const onError: SubmitErrorHandler<IFormInput> = (e) => {
    if (e.preferences) {
      setShowAlterText("Please Select Preferences");
      return;
    }
    if (e.beanType) {
      setShowAlterText("Please Select BeanType");
      return;
    }
    if (e.quantity) {
      setShowAlterText("Please Select Quantity");
      return;
    }
    if (e.grindOption) {
      setShowAlterText("Please Select GrindOptio");
      return;
    }
    if (e.deliveries) {
      setShowAlterText("Please Select Deliveries ");
      return;
    }
  };

  return (
    <ContainerCover style={{ marginBottom: "168px" }} as={"section"}>
      <Container as={"form"} onSubmit={handleSubmit(onSubmit, onError)} id="SelectForm">
        {isDesktop ? (
          <Content>
            <LeftSide
              watch={watch}
              extend={{
                preferences: preferencesExtend,
                beanType: beanTypeExtend,
                quantity: quantityExtend,
                grindOption: grindOptionExtend,
                deliveries: deliveriesExtend,
              }}
              setExtend={{
                preferences: setPreferences,
                beanType: setBeanType,
                quantity: setQuantity,
                grindOption: setGrindOption,
                deliveries: setDeliveries,
              }}
            />
            <RightSide
              register={register}
              watch={watch}
              extend={{
                preferences: preferencesExtend,
                beanType: beanTypeExtend,
                quantity: quantityExtend,
                grindOption: grindOptionExtend,
                deliveries: deliveriesExtend,
              }}
            />
          </Content>
        ) : (
          <RightSide
            register={register}
            watch={watch}
            extend={{
              preferences: preferencesExtend,
              beanType: beanTypeExtend,
              quantity: quantityExtend,
              grindOption: grindOptionExtend,
              deliveries: deliveriesExtend,
            }}
          />
        )}
      </Container>
    </ContainerCover>
  );
};

export default SelectSection;
