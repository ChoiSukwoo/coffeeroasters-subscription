import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const ChooseUsItemStyle = styled.div({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: Color.darkCyan,
  color: Color.lightCream,

  '@media (min-width: 1440px)': {
    width: '350px',
    padding: '72px 48px 48px 48px',
    flexDirection: 'column',
  },

  '@media (max-width: 1439px)': {
    width: '100%',
    padding: '41px 48px 41px 71px',
    flexDirection: 'row',
  },

  '@media (max-width: 767px)': {
    flexDirection: 'column',
    padding: '72px 33.5px 51px',
  },
});

export const IconCover = styled.div({
  flexShrink: '0',
  width: '72px',
  height: '72px',

  '@media (min-width:768px) and (max-width: 1439px)': {
    width: '56px',
    height: '56px',
  },
});

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '@media (min-width: 1440px)': {
    paddingTop: '56px',
  },

  '@media (min-width:768px) and (max-width: 1439px)': {
    paddingLeft: '56px',
  },

  '@media (max-width: 767px)': {
    paddingTop: '56px',
  },
});

export const ItemNm = styled.h4({
  textAlign: 'center',

  '@media (min-width: 1440px)': {
    marginBottom: '24px',
  },

  '@media (max-width: 1439px)': {
    marginBottom: '16px',
  },

  '@media (max-width: 767px)': {
    marginBottom: '24px',
  },
});

export const ItemInfo = styled.div({
  display: 'flex',
  textAlign: 'center',
  '@media (min-width:768px) and (max-width: 1439px)': {
    textAlign: 'left',
  },
});
