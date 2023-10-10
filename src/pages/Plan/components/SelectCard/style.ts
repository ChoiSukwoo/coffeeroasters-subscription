import styled from '@emotion/styled';
import { Color, Util } from '@styles/index';

export const CardStyle = styled.label(
  {
    ...Util.DragPrevent,
    cursor: 'pointer',
    borderRadius: '8px',

    '@media (min-width: 1440px)': {
      padding: '32px 28px',
      width: '228px',
      height: '250px',
    },

    '@media (min-width:768px) and (max-width: 1439px)': {
      padding: '32px 25px',
      minwidth: '220px',
      maxWidth: '445px',
      width: '100%',
      height: '250px',
    },

    '@media (max-width: 767px)': {
      padding: '24px 25px',
      width: '100%',
      height: '140px',
    },
  },
  ({ select }: { select: boolean }) => ({
    backgroundColor: select ? Color.darkCyan : Color.springWood,
    color: select ? Color.lightCream : Color.darkGreyBlue,
    ':hover': {
      backgroundColor: select ? Color.darkCyan : Color.paleOrange,
    },
  }),
);
