import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const ItemStyle = styled.div({
  display: 'flex',
  flexDirection: 'column',
  color: Color.darkGreyBlue,

  '@media (min-width: 1440px)': {
    width: '225px',
  },

  '@media (max-width: 1439px)': {
    width: '222px',
  },

  '@media (max-width: 767px)': {
    width: '100%',
    alignItems: 'center',
  },
});

export const IconCover = styled.div({
  height: '50px',
  '@media (min-width: 1440px)': {
    marginBottom: '45PX',
  },

  '@media (max-width: 1439px)': {
    marginBottom: '48PX',
  },
});

export const Title = styled.h3({
  '@media (min-width: 1440px)': {
    marginBottom: '24px',
  },

  '@media (max-width: 1439px)': {
    marginBottom: '22px',
    fontSize: '24px',
  },

  '@media (max-width: 767px)': {
    marginBottom: '21px',
    fontSize: '28px',
  },
});
