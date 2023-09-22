import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const HeaderStyle = styled.div(({ isSticky }: { isSticky: boolean }) => ({
  position: isSticky ? 'sticky' : 'relative',
  top: 0,
}));

export const Content = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '45px 0 44px 0',
});

export const LogoCover = styled(Link)({
  flexShrink: '0',
  fill: Color.darkGreyBlue,
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
      color: Color.darkGreyBlue,
    },
  },
});
