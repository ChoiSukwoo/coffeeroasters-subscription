import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const Content = styled.div({
  padding: '0 85px',
});

export const Circle = styled.div({
  position: 'absolute',
  width: '30px',
  height: '30px',
  borderRadius: '30px',
  border: `2px solid ${Color.darkCyan}`,
  backgroundColor: Color.lightCream,
});
export const Line = styled.div({
  height: '4px',
  width: '790px',
  backgroundColor: Color.paleOrange,
});
