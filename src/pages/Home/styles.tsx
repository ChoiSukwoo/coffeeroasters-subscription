import styled from '@emotion/styled';
import { ContainerCover as Container } from '@styles/common';
import { Color, Util } from '@styles/index';

export const ButtonCover = styled.div({
  display: 'flex',

  '@media (min-width: 1281px)': {
    padding: '0 85px',
  },

  '@media (max-width: 767px)': {
    justifyContent: 'center',
  },
});
