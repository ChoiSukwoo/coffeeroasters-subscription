import styled from '@emotion/styled';
import { Font, Color, Util } from '@styles/index';

export const SelectionStyle = styled.div({
  width: '228px',
  height: '250px',
  padding: '32px 28px',
  borderRadius: '8px',

  ...Font.button,

  color: Color.darkGreyBlue,
  backgroundColor: Color.springWood,

  ':hover': {
    backgroundColor: Color.paleOrange,
  },

  ':active': {
    backgroundColor: Color.darkCyan,
    color: Color.lightCream,
  },
});

export const ContentStyle = styled.div({
  ...Util.LineCutting({ line: 5 }),
});
