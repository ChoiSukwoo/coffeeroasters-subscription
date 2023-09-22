import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const FooterStyle = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '120px',
  padding: '47px 85px',
  marginBottom: '88px',
  backgroundColor: Color.darkGreyBlue,
});

export const LeftSide = styled.div({
  display: 'flex',
});

export const LogoCover = styled(Link)({
  flexShrink: '0',
  marginRight: '103px',
});

export const NavBar = styled.nav({
  display: 'flex',
  columnGap: '33px',
  color: Color.grey,

  '& > a': {
    flexShrink: '0',
    padding: '5px 0 4px 0',
    cursor: 'pointer',
    ':hover': {
      color: Color.lightCream,
    },
  },
});

export const RightSide = styled.div({});

export const IconList = styled.div({
  display: 'flex',
  columnGap: '24px',
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
