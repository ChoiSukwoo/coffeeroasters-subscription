import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 85px',
  '@media (max-width: 1439px)': {
    padding: '0 0px',
  },
  '@media (max-width: 767px)': {
    alignItems: 'center',
  },
});

export const Title = styled.h3({
  color: Color.grey,

  '@media (min-width: 1440px)': {
    marginBottom: '80px',
  },

  '@media (max-width: 1439px)': {
    marginBottom: '40px',
  },

  '@media (max-width: 767px)': {
    marginBottom: '80px',
  },
});
