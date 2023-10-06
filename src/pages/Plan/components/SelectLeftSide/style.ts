import styled from '@emotion/styled';
import { Color, Util } from '@styles/index';

export const Content = styled.div({
  ...Util.DragPrevent,
  marginRight: '125px',
});

export const ItemStyle = styled.div(
  {
    width: '255px',
    padding: '24px 44px 24px 0',
    display: 'flex',

    ':first-of-type': {
      paddingTop: '0',
    },
    ':last-of-child': {
      paddingBottom: '0',
    },
  },
  ({ active, disable }: { active: boolean; disable: boolean }) => ({
    opacity: disable ? 0.2 : active ? 1 : 0.3,
  }),
);

export const ItemNum = styled.h4({ marginRight: '28.5px' }, ({ active }: { active: boolean }) => ({
  color: active ? Color.darkCyan : Color.grey,
}));

export const ItemText = styled.h4(({ active }: { active: boolean }) => ({
  color: Color.darkGreyBlue,
}));
