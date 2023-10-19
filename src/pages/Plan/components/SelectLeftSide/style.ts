import styled from '@emotion/styled';
import { Color, Util } from '@styles/index';

export const Content = styled.div({
  ...Util.DragPrevent,
  marginRight: '125px',
});

export const ItemStyle = styled.div(
  {
    cursor: 'pointer',
    width: '255px',
    padding: '24px 44px 24px 0',
    display: 'flex',

    ':first-of-type': {
      paddingTop: '0',
    },
    ':last-of-type': {
      paddingBottom: '0',
    },
  },
  ({ disable, nowProgress, expendable }: { nowProgress: boolean; disable: boolean; expendable: boolean }) => ({
    opacity: disable ? 0.2 : nowProgress ? 1 : 0.4,

    ':hover': {
      opacity: disable ? 0.2 : nowProgress ? 1 : expendable ? 0.6 : 0.4,
    },
  }),
);

export const ItemNum = styled.h4({ marginRight: '28.5px' }, ({ num }: { num: number }) => ({
  color: num === 1 ? Color.darkCyan : Color.grey,
}));

export const ItemText = styled.h4({
  color: Color.darkGreyBlue,
});

export const Line = styled.div({
  width: '100%',
  height: '1px',
  backgroundColor: Color.grey,
});
