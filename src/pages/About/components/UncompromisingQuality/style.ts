import styled from '@emotion/styled';
import { Color, Util } from '@styles/index';

export const ContentCover = styled.div({
  display: 'flex',
  position: 'relative',

  '@media (min-width: 1440px)': {
    padding: '0 85px',
  },

  '@media (max-width: 1439px)': {
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
});

export const BackgroundImg = styled.img({
  borderRadius: '10px',
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  '@media (min-width: 1440px)': {
    height: '474px',
  },

  '@media (max-width: 1439px)': {
    height: '488px',
  },

  '@media (max-width: 767px)': {
    height: '509px',
  },
});

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  color: Color.lightCream,

  '@media (min-width: 1440px)': {
    padding: '176px 0',
    marginRight: '125px',
  },

  '@media (max-width: 1439px)': {
    marginBottom: '67px',
    padding: '0 74px',
  },

  '@media (max-width: 767px)': {
    marginBottom: '61px',
    padding: '0 24px',
  },
});

export const ContentTitle = styled.h2({
  '@media (min-width: 1440px)': {
    marginBottom: '32px',
  },

  '@media (max-width: 1439px)': {
    textAlign: 'center',
    marginBottom: '24px',
    fontSize: '32px',
  },

  '@media (max-width: 767px)': {
    fontSize: '28px',
    lineHeight: '28px',
  },
});

export const ImgStyleCover = styled.div({
  '@media (max-width: 767px)': {
    padding: '0 24px',
  },
});

export const ImgStyle = styled.img({
  position: 'relative',
  borderRadius: '8px',

  '@media (min-width: 1440px)': {
    width: '445px',
    height: '474px',
  },

  '@media (max-width: 1439px)': {
    width: '573px',
    marginBottom: '64px',
  },

  '@media (max-width: 767px)': {
    width: '100%',
  },
});
