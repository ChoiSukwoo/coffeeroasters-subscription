import styled from '@emotion/styled';

export const ContainerCover = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'fit-content',
});

export const Container = styled.div({
  flex: 1,
  width: '100%',
  maxWidth: '1440px',
  margin: '0px auto',
  padding: '0 80px',

  '@media (max-width: 1280px)': {
    maxWidth: '1280px',
    padding: '0 40px',
  },

  '@media (max-width: 767px)': {
    maxWidth: '767px',
    minWidth: '375px',
    padding: '0 24px',
  },
});
