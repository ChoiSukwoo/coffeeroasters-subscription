export interface IFormInput {
  preferences?: (typeof PreferencesEnum)[keyof typeof PreferencesEnum];
  beanType?: (typeof BeanTypeEnum)[keyof typeof BeanTypeEnum];
  quantity?: (typeof QuantityEnum)[keyof typeof QuantityEnum];
  grindOption?: (typeof GrindOptionEnum)[keyof typeof GrindOptionEnum];
  deliveries?: (typeof DeliveriesEnum)[keyof typeof DeliveriesEnum];
}

export type IFormInputKeys = keyof IFormInput;

export const Progress = ["Preferences", "Bean Type", "Quantity", "Grind Option", "Deliveries"];

export const IFormInputKeysEnum = {
  preferences: "preferences",
  beanType: "beanType",
  quantity: "quantity",
  grindOption: "grindOption",
  deliveries: "deliveries",
};
export const PreferencesEnum = {
  capsule: "Capsule",
  filter: "Filter",
  espresso: "Espresso",
};

export const BeanTypeEnum = {
  SingleOrigin: "Single Origin",
  Decaf: "Decaf",
  Blended: "Blended",
};

export const QuantityEnum = {
  _250g: "250g",
  _500g: "500g",
  _1000g: "1000g",
};

export const GrindOptionEnum = {
  Wholebean: "Wholebean",
  Filter: "Filter",
  Cafetiere: "Cafetiére",
};

export const DeliveriesEnum = {
  EveryWeek: "Every week",
  Every2Weeks: "Every 2 weeks",
  EveryMonth: "Every month",
};

export const SelectCardData = () => {
  return {
    preferences: [
      {
        value: PreferencesEnum.capsule,
        content: "Compatible with Nespresso systems and similar brewers",
      },
      {
        value: PreferencesEnum.filter,
        content: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        value: PreferencesEnum.espresso,
        content: "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
    beenType: [
      {
        value: BeanTypeEnum.SingleOrigin,
        content: "Distinct, high-quality coffee from a specific family-owned farm",
      },
      {
        value: BeanTypeEnum.Decaf,
        content: "Just like regular coffee, except the caffeine has been removed",
      },
      {
        value: BeanTypeEnum.Blended,
        content: "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
    quantity: [
      {
        value: QuantityEnum._250g,
        content: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        content: "Perfect option for a couple. Yields about 40 delectable cups.",
        value: QuantityEnum._500g,
      },
      {
        content: "Perfect for offices and events. Yields about 90 delightful cups.",
        value: QuantityEnum._1000g,
      },
    ],
    grindOption: [
      {
        content: "Best choice if you cherish the full sensory experience",
        value: GrindOptionEnum.Wholebean,
      },
      {
        content: "For drip or pour-over coffee methods such as V60 or Aeropress",
        value: GrindOptionEnum.Filter,
      },
      {
        content: "Coarse ground beans specially suited for French press coffee",
        value: GrindOptionEnum.Cafetiere,
      },
    ],
    deliveries: [
      {
        content: "$14.00 per shipment. Includes free first-class shipping.",
        value: DeliveriesEnum.EveryWeek,
      },
      {
        content: "$17.25 per shipment. Includes free priority shipping.",
        value: DeliveriesEnum.Every2Weeks,
      },
      {
        content: "$22.50 per shipment. Includes free priority shipping.",
        value: DeliveriesEnum.EveryMonth,
      },
    ],
  };
};
