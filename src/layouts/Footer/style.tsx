import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const FooterStyle = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  height: '120px',
  padding: '47px 85px',
  marginBottom: '88px',
  backgroundColor: Color.darkGreyBlue,

  '@media (max-width: 1280px)': {
    marginBottom: '72px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '54px',
    height: '270px',
  },

  '@media (max-width: 767px)': {
    height: '346px',
  },
});

export const LogoCover = styled(Link)({
  flexShrink: '0',

  '@media (min-width: 1281px)': {
    marginRight: '103px',
  },

  '@media (max-width: 1280px)': {
    marginBottom: '32.5px',
  },

  '@media (max-width: 767px)': {
    marginBottom: '48.5px',
  },
});

export const NavBar = styled.nav({
  display: 'flex',
  columnGap: '33px',
  color: Color.grey,

  '& > a': {
    flexShrink: '0',
    cursor: 'pointer',
    ':hover': {
      color: Color.lightCream,
    },

    '@media (min-width: 1280px)': {
      padding: '5px 0 4px 0',
    },
  },

  '@media (min-width: 1280px)': {
    columnGap: '33px',
  },

  '@media (max-width: 767px)': {
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '24px',
  },
});

export const IconList = styled.div({
  flex: '1',
  display: 'flex',
  columnGap: '24px',

  '@media (min-width: 1281px)': {
    justifyContent: 'flex-end',
  },

  '@media (max-width: 1280px)': {
    alignItems: 'flex-end',
  },

  '@media (max-width: 767px)': {},
});

export const IconCover = styled.div({
  cursor: 'pointer',
  '& path': {
    fill: Color.lightCream,
  },
  '&:hover path': {
    fill: Color.paleOrange,
  },
});
