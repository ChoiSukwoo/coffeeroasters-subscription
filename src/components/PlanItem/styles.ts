import { PlanType } from '@components/CreatePlan';
import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const HowItWorksItemStyle = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '285px',
    height: '355px',
    color: Color.darkGreyBlue,
  },
  ({ type }: { type: PlanType }) => ({
    color: type === 'white' ? Color.darkGreyBlue : Color.lightCream,
  }),
);

export const ItemNum = styled.h1({
  color: Color.paleOrange,
  paddingBottom: '38px',
});

export const ItemNm = styled.h3({
  padding: '0 50px 42px 0',
});
