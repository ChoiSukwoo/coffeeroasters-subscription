import { PlanType } from '@components/CreatePlan';
import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const HowItWorksItemStyle = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    color: Color.darkGreyBlue,

    '@media (min-width: 1281px)': {
      width: '285px',
    },

    '@media (max-width: 1280px)': {
      width: '220px',
    },

    '@media (max-width: 767px)': {
      alignItems: 'center',
      width: '100%',
    },
  },
  ({ type }: { type: PlanType }) => ({
    color: type === 'white' ? Color.darkGreyBlue : Color.lightCream,
  }),
);

export const ItemNum = styled.h1({
  color: Color.paleOrange,

  '@media (min-width: 1281px)': {
    paddingBottom: '38px',
  },

  '@media (max-width: 1280px)': {
    marginBottom: '42px',
  },

  '@media (max-width: 767px)': {
    marginBottom: '24px',
  },
});

export const ItemNm = styled.h3({
  '@media (min-width: 1281px)': {
    paddingRight: '50px',
    marginBottom: '42px',
  },

  '@media (max-width: 1280px)': {
    marginBottom: '38px',
  },

  '@media (max-width: 767px)': {
    marginBottom: '24px',
  },
});

export const ItemContent = styled.div({
  '@media (max-width: 767px)': {
    textAlign: 'center',
  },
});
