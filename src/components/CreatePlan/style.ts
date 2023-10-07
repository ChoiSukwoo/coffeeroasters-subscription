import styled from '@emotion/styled';
import { Color } from '@styles/index';
import { PlanType } from '.';

export const Content = styled.div({});

export const CircleCover = styled.div({
  padding: '14px 0',
  display: 'flex',
  position: 'relative',
  '@media (min-width: 1440px)': {
    marginBottom: '67px',
  },

  '@media (max-width: 1439px)': {
    marginBottom: '48px',
  },
});

export const Line = styled.div({
  height: '2px',
  backgroundColor: Color.paleOrange,

  '@media (min-width: 1440px)': {
    width: '790px',
  },
  '@media (max-width: 1439px)': {
    width: '496px',
  },
});

export const Circle = styled.div(
  {
    position: 'absolute',
    top: '0px',
    width: '30px',
    height: '30px',
    borderRadius: '30px',
    border: `2px solid ${Color.darkCyan}`,
  },
  ({ type }: { type: PlanType }) => ({
    backgroundColor: type === 'white' ? Color.lightCream : Color.darkGrey,
  }),
);

export const ItemCover = styled.div({
  display: 'flex',

  '@media (min-width: 1440px)': {
    columnGap: '95px',
  },

  '@media (max-width: 1439px)': {
    columnGap: '10px',
  },

  '@media (max-width: 767px)': {
    flexDirection: 'column',
    rowGap: '56px',
  },
});
