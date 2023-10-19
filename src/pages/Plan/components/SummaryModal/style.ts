import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import { Color } from '@styles/index';

export const mobileBackgroundStyle = {
  padding: '35px 24px',
} as CSSProperties;

export const mobileModalStyle = {
  width: '100%',
  minWidth: 'auto',
  height: '100%',
  padding: '0px',
  backgroundColor: 'transparent',
} as CSSProperties;

export const DesktopModalStyle = {
  padding: '0px',
  backgroundColor: 'transparent',
} as CSSProperties;

export const ModalContentStyle = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '540px',
  height: '597px',
  '@media (max-width: 767px)': {
    width: '100%',
    height: '100%',
  },
});

export const Header = styled.h2({
  height: '136px',
  padding: '48px 56px 40px',
  backgroundColor: Color.darkGrey,
  borderRadius: '8px 8px 0 0',
  color: Color.lightCream,

  '@media (max-width: 767px)': {
    height: '88px',
    padding: '28px 24px',
    fontSize: '28px',
    lineHeight: '32px',
  },
});

export const ContentCover = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '57px 56px 56px 56px',
  borderRadius: ' 0 0 8px 8px',
  backgroundColor: Color.lightCream,

  '@media (max-width: 767px)': {
    padding: '40px 24px 24px 24px',
  },
});

export const Content = styled.h4({
  color: Color.grey,
  marginBottom: '7px',
  lineHeight: '40px',
  '& > span': {
    color: Color.darkCyan,
  },
});

export const Warning = styled.div({
  color: Color.darkGreyBlue,
  opacity: 0.8,
});

export const PriceContainer = styled.div({
  flex: 1,
  display: 'flex',
  alignItems: 'flex-end',
  color: Color.darkGreyBlue,
});

export const PriceCover = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});
