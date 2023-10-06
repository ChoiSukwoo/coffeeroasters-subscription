import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const Content = styled.div({});

export const Summary = styled.div({
  padding: '47px 64px',
  borderRadius: '10px',
  backgroundColor: Color.darkGrey,
});

export const SummaryHeader = styled.p({
  opacity: 0.5,
  color: Color.lightCream,
  marginBottom: '8px',
});

export const SummaryContent = styled.h4({
  color: Color.lightCream,
  lineHeight: '40px',
  '& > span': {
    color: Color.darkCyan,
  },
});
