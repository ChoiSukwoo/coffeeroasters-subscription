import styled from '@emotion/styled';

export const CollectionItemStyle = styled.div({
  display: 'flex',

  '@media (min-width: 1440px)': {
    flexDirection: 'column',
    width: '255px',
  },

  '@media (max-width: 1439px)': {
    flexDirection: 'row',
    width: '100%',
  },

  '@media (max-width: 767px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const ItemImgCover = styled.div({
  flexShrink: '0',
  width: '255px',
  height: '193px',
  '@media (min-width: 1440px)': {
    marginBottom: '72px',
  },
  '@media (max-width: 767px)': {
    marginBottom: '24px',
  },
});

export const ItemContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '@media (min-width:768px) and (max-width: 1439px)': {
    margin: '30px 0 035px',
  },
});

export const ItemNm = styled.h4({
  textAlign: 'center',
  paddingBottom: '24px',
  '@media (max-width: 767px)': {
    paddingBottom: '16px',
  },
});

export const ItemInfo = styled.div({
  display: 'flex',
  textAlign: 'center',
});
