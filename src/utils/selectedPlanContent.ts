import { DeliveriesEnum, IFormInput, PreferencesEnum, QuantityEnum } from "@pages/Plan/data";

type SelectPlanInfo = (data: IFormInput) => {
  textList: [number, string][];
  price: string;
};

export const selectedPlanContent: SelectPlanInfo = (data) => {
  const textList: [number, string][] = [];
  if (!data.preferences || data.preferences === PreferencesEnum.capsule) {
    textList.push([0, "“I drink my coffee using "]);
    textList.push([1, "Capsules"]);
  } else {
    textList.push([0, "“I drink my coffee as "]);
    textList.push([1, data.preferences || "_____"]);
  }

  textList.push([0, ", with a "]);
  textList.push([1, data.beanType || "_____"]);
  textList.push([0, " type of bean. "]);
  textList.push([1, data.quantity || "_____"]);
  textList.push([0, " "]);
  //값이 존재하면서 캡슐이 아닐떄
  if (data.preferences && data.preferences !== PreferencesEnum.capsule) {
    textList.push([0, "ground ala "]);
    textList.push([1, data.grindOption || "_____"]);
  }

  textList.push([0, ", sent to me "]);
  textList.push([1, data.deliveries || "_____"]);
  textList.push([0, ".”"]);

  const price =
    data.quantity === QuantityEnum._250g
      ? data.deliveries === DeliveriesEnum.EveryWeek
        ? "$28.80"
        : data.deliveries === DeliveriesEnum.Every2Weeks
        ? "$19.20"
        : data.deliveries === DeliveriesEnum.EveryMonth
        ? "$12.00"
        : "$00.00"
      : QuantityEnum._500g
      ? data.deliveries === DeliveriesEnum.EveryWeek
        ? "$52.00"
        : data.deliveries === DeliveriesEnum.Every2Weeks
        ? "$35.00"
        : data.deliveries === DeliveriesEnum.EveryMonth
        ? "$22.00"
        : "$00.00"
      : QuantityEnum._1000g
      ? data.deliveries === DeliveriesEnum.EveryWeek
        ? "$88.00"
        : data.deliveries === DeliveriesEnum.Every2Weeks
        ? "$64.00"
        : data.deliveries === DeliveriesEnum.EveryMonth
        ? "$42.00"
        : "$00.00"
      : "$00.00";

  return { textList: textList, price: price };
};
