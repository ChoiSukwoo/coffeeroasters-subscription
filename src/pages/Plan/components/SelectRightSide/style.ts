import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const Content = styled.div({});

export const Summary = styled.div({
  borderRadius: '10px',
  backgroundColor: Color.darkGrey,

  '@media (min-width: 1440px)': {
    padding: '27px 64px',
  },

  '@media (max-width: 1439px)': {
    padding: '27px 43px',
  },

  '@media (max-width: 767px)': {
    padding: '32px 24px',
  },
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
