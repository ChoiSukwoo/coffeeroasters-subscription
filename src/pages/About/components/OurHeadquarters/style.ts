import styled from '@emotion/styled';

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '@media (min-width: 1440px)': {
    padding: '0 85px',
  },

  '@media (max-width: 767px)': {
    alignItems: 'center',
  },
});

export const ItemList = styled.div({
  display: 'flex',

  '@media (min-width: 1440px)': {
    columnGap: '95px',
  },

  '@media (max-width: 1439px)': {
    columnGap: '9px',
  },

  '@media (max-width: 767px)': {
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '80px',
  },
});
