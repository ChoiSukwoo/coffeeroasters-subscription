import styled from '@emotion/styled';
import { Color, Util } from '@styles/index';

export const ContentCover = styled.div({
  display: 'flex',

  '@media (min-width: 1440px)': {
    padding: '0 85px',
  },

  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
});

export const ImgStyle = styled.img({
  ...Util.DragPrevent,

  flexShrink: '0',
  borderRadius: '8px',

  '@media (min-width: 1440px)': {
    width: '445px',
    height: '520px',
    marginRight: '125px',
  },

  '@media (min-width:768px) and (max-width: 1439px)': {
    width: '281px',
    height: '470px',
    marginRight: '69px',
  },

  '@media (max-width: 767px)': {
    width: '100%',
    height: 'auto',
    marginBottom: '48px',
  },
});

export const Content = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  color: Color.darkGreyBlue,

  '@media (min-width: 1440px)': {
    paddingTop: '90px',
  },

  '@media (min-width:768px) and (max-width: 1439px)': {
    paddingTop: '8px',
  },

  '@media (max-width: 767px)': {
    textAlign: 'center',
  },
});

export const ContentTitle = styled.h2({
  '@media (min-width: 1440px)': {
    marginBottom: '32px',
  },

  '@media (max-width: 1439px)': {
    fontSize: '32px',
    marginBottom: '30px',
  },
});
