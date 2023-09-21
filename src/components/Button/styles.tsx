import styled from '@emotion/styled';
import { Font, Color } from '@styles/index';

export const Button01 = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '217px',
  height: '56px',
  padding: '10px',
  borderRadius: '6px',

  ...Font.button,

  color: Color.lightCream,
  backgroundColor: Color.darkCyan,

  ':hover': {
    backgroundColor: Color.cyan,
  },

  ':disabled': {
    backgroundColor: Color.westar,
  },
});
