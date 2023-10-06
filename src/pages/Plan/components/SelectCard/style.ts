import styled from '@emotion/styled';
import { Color, Util } from '@styles/index';

export const CardStyle = styled.label(
  {
    ...Util.DragPrevent,
    cursor: 'pointer',
    width: '228px',
    height: '250px',
    padding: '32px 28px',
    borderRadius: '8px',
  },
  ({ select }: { select: boolean }) => ({
    backgroundColor: select ? Color.darkCyan : Color.springWood,
    color: select ? Color.lightCream : Color.darkGreyBlue,
    ':hover': {
      backgroundColor: select ? Color.darkCyan : Color.paleOrange,
    },
  }),
);
