import React from 'react';
import { Content, Summary, SummaryContent, SummaryHeader } from './style';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import {
  BeanTypeEnum,
  DeliveriesEnum,
  GrindOptionEnum,
  IFormInput,
  IFormInputKeys,
  PreferencesEnum,
  QuantityEnum,
} from '../SelectSection';
import SelectPart from '../SelectPart';
import { Button01 } from '@components/Button/styles';
import { selectedPlanContent } from '@utils/selectedPlanContent';
import { capitalizeFirstLetterInWords } from '@utils/capitalize';

interface Props {
  register: UseFormRegister<IFormInput>;
  watch: UseFormWatch<IFormInput>;
}

export interface CardInfo<T extends IFormInputKeys> {
  content: string;
  value: IFormInput[T];
}

const RightSide = ({ register, watch }: Props) => {
  const { textList } = selectedPlanContent({
    preferences: watch('preferences'),
    beanType: watch('beanType'),
    deliveries: watch('deliveries'),
    grindOption: watch('grindOption'),
    quantity: watch('quantity'),
  });

  return (
    <Content>
      <SelectPart
        title="How do you drink your coffee?"
        watch={watch('preferences')}
        register={register('preferences', { required: true })}
        cardinfos={[
          {
            value: PreferencesEnum.capsule,
            content: 'Compatible with Nespresso systems and similar brewers',
          },
          {
            value: PreferencesEnum.filter,
            content: 'For pour over or drip methods like Aeropress, Chemex, and V60',
          },
          {
            value: PreferencesEnum.espresso,
            content: 'Dense and finely ground beans for an intense, flavorful experience',
          },
        ]}
        style={{ marginBottom: '88px' }}
        active={true}
      />
      <SelectPart
        title="What type of coffee?"
        watch={watch('beanType')}
        register={register('beanType', { required: true })}
        cardinfos={[
          {
            value: BeanTypeEnum.SingleOrigin,
            content: 'Distinct, high-quality coffee from a specific family-owned farm',
          },
          {
            value: BeanTypeEnum.Decaf,
            content: 'Just like regular coffee, except the caffeine has been removed',
          },
          {
            value: BeanTypeEnum.Blended,
            content: 'Combination of two or three dark roasted beans of organic coffees',
          },
        ]}
        style={{ marginBottom: '88px' }}
        active={!!watch('preferences')}
      />
      <SelectPart
        title="How much would you like?"
        watch={watch('quantity')}
        register={register('quantity', { required: true })}
        cardinfos={[
          {
            value: QuantityEnum._250g,
            content: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
          },
          {
            content: 'Perfect option for a couple. Yields about 40 delectable cups.',
            value: QuantityEnum._500g,
          },
          {
            content: 'Perfect for offices and events. Yields about 90 delightful cups.',
            value: QuantityEnum._1000g,
          },
        ]}
        style={{ marginBottom: '88px' }}
        active={!!watch('beanType')}
      />
      <SelectPart
        title="Want us to grind them?"
        watch={watch('grindOption')}
        register={register('grindOption', {
          required: watch('preferences') && watch('preferences') !== PreferencesEnum.capsule,
        })}
        cardinfos={[
          {
            content: 'Best choice if you cherish the full sensory experience',
            value: GrindOptionEnum.Wholebean,
          },
          {
            content: 'For drip or pour-over coffee methods such as V60 or Aeropress',
            value: GrindOptionEnum.Filter,
          },
          {
            content: 'Coarse ground beans specially suited for French press coffee',
            value: GrindOptionEnum.Cafetiere,
          },
        ]}
        style={{ marginBottom: '88px' }}
        active={!!watch('quantity') && watch('preferences') !== PreferencesEnum.capsule}
        disable={watch('preferences') === PreferencesEnum.capsule}
      />
      <SelectPart
        title="How often should we deliver?"
        watch={watch('deliveries')}
        register={register('deliveries', { required: true })}
        cardinfos={[
          {
            content: '$14.00 per shipment. Includes free first-class shipping.',
            value: DeliveriesEnum.EveryWeek,
          },
          {
            content: '$17.25 per shipment. Includes free priority shipping.',
            value: DeliveriesEnum.Every2Weeks,
          },
          {
            content: '$22.50 per shipment. Includes free priority shipping.',
            value: DeliveriesEnum.EveryMonth,
          },
        ]}
        style={{ marginBottom: '88px' }}
        active={watch('preferences') !== PreferencesEnum.capsule ? !!watch('grindOption') : !!watch('quantity')}
      />

      <Summary style={{ marginBottom: '40px' }}>
        <SummaryHeader>Order Summary</SummaryHeader>
        <SummaryContent>
          {textList.map((e, i) => (e[0] === 0 ? e[1] : <span key={i}>{capitalizeFirstLetterInWords(e[1])}</span>))}
        </SummaryContent>
      </Summary>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button01 type="submit" form="SelectForm">
          Create my plan!
        </Button01>
      </div>
    </Content>
  );
};

export default RightSide;
