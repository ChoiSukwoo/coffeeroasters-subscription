import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const ModalContentStyle = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '540px',
  height: '597px',
  borderRadius: ' 0 0 8px 8px',
});

export const Header = styled.div({
  height: '136px',
  padding: '48px 56px 40px',
  backgroundColor: Color.darkGrey,
  borderRadius: '8px 8px 0 0',
  color: Color.lightCream,
});

export const ContentCover = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '57px 56px 56px 56px',
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
