import styled from '@emotion/styled';
import { Color } from '@styles/index';
import { PlanType } from '.';

export const Content = styled.div({
  paddingTop: '14px',
});

export const CircleCover = styled.div({
  display: 'flex',
  position: 'relative',
  marginBottom: '81px',
});

export const Circle = styled.div(
  {
    position: 'absolute',
    top: '-14px',
    width: '30px',
    height: '30px',
    borderRadius: '30px',
    border: `2px solid ${Color.darkCyan}`,
  },
  ({ type }: { type: PlanType }) => ({
    backgroundColor: type === 'white' ? Color.lightCream : Color.darkGrey,
  }),
);
export const Line = styled.div({
  height: '2px',
  width: '790px',
  backgroundColor: Color.paleOrange,
});
