import styled from '@emotion/styled';
import { Color, Font } from '@styles/index';

export const Content = styled.div({
  position: 'relative',
  width: '100%',
  height: 'fit-content',
});

export const Back = styled.div({
  position: 'absolute',
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  borderRadius: '10px',
  color: Color.lightCream,
  backgroundColor: Color.darkGrey,

  '@media (min-width: 1440px)': {
    padding: '100px 85px 0',
    height: '577px',
  },

  '@media (max-width: 1439px)': {
    padding: '56px 58px 0',
    height: '573px',
  },

  '@media (max-width: 767px)': {
    padding: '64px 24px 0',
    height: '902px',
  },
});

export const BackTitle = styled.h1({
  '@media (min-width: 1440px)': {
    ...Font.h2,
    marginBottom: '32px',
  },

  '@media (max-width: 1439px)': {
    ...Font.h3,
    lineHeight: '48px',
    marginBottom: '24px',
  },

  '@media (max-width: 767px)': {
    fontSize: '28px',
    lineHeight: '28px',
  },
});

export const BactContent = styled.div({
  width: '540px',

  '@media (max-width: 767px)': {
    width: '100%',
  },
});

export const ItemListCover = styled.div({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  width: '100%',

  '@media (min-width: 1440px)': {
    paddingTop: '346px',
  },

  '@media (max-width: 1439px)': {
    paddingTop: '275px',
  },

  '@media (max-width: 767px)': {
    paddingTop: '305px',
  },
});

export const ItemList = styled.div({
  display: 'flex',
  width: 'fit-content',

  '@media (min-width: 1440px)': {
    columnGap: '30px',
  },

  '@media (max-width: 1439px)': {
    flexDirection: 'column',
    rowGap: '24px',
    padding: '0 57px',
  },

  '@media (max-width: 767px)': {
    padding: '0 24px',
  },
});
