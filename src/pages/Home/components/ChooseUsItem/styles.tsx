import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const ChooseUsItemStyle = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '350px',
  height: '382px',
  padding: '72px 48px 48px 48px',
  borderRadius: '8px',
  backgroundColor: Color.darkCyan,
  color: Color.lightCream,
});

export const ItemNm = styled.h4({
  textAlign: 'center',
  margin: '56px 0 24px',
});

export const ItemInfo = styled.div({
  display: 'flex',
  textAlign: 'center',
});
