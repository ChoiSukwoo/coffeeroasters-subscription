import styled from '@emotion/styled';
import { Color, Util, Font } from '@styles/index';

export const Collectiontyle = styled.div({
  ...Util.DragPrevent,
  position: 'relative',
  width: '100%',
  color: Color.lightCream,
});

export const BackTextPos = styled.div({
  position: 'absolute',
  top: 0,
  width: '100%',
  '@media (min-width: 1440px)': {
    padding: '0 85px',
  },

  '@media (max-width: 1439px)': {},

  '@media (max-width: 767px)': {
    padding: '0',
  },
});

export const BackTextCover = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '196px',
  margin: '0 auto',

  '@media (min-width: 1440px)': {
    height: '196px',
  },

  '@media (max-width: 1439px)': {
    height: '118px',
  },

  '@media (max-width: 767px)': {
    height: '72px',
  },
});

export const BackTextDim = styled.div({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(#ffffff00 , ${Color.lightCream})`,
});

export const BackText = styled.div({
  ...Font.title,
  whiteSpace: 'nowrap',
  color: Color.grey,

  '@media (min-width: 1440px)': {
    width: '1110px',
    paddingTop: '86px',
  },

  '@media (min-width:768px) and (max-width: 1439px)': {
    width: '686px',
    fontSize: '96px',
    paddingTop: '27px',
  },

  '@media (max-width: 767px)': {
    width: '286px',
    fontSize: '40px',
  },
});

export const CollectionFlex = styled.div({
  display: 'flex',
  position: 'relative',
  color: Color.darkGreyBlue,

  '@media (min-width: 1440px)': {
    padding: '126px 85px 0',
    columnGap: '30px',
  },

  '@media (max-width: 1439px)': {
    flexDirection: 'column',
    padding: '59px 57px 0',
    rowGap: '32px',
  },

  '@media (max-width: 767px)': {
    padding: '85px 23px 0',
    rowGap: '48px',
  },
});
