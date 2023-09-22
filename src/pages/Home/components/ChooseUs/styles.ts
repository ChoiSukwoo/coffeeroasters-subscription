import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const Content = styled.div({
  position: 'relative',
  width: '100%',
  height: '728px',
});

export const Back = styled.div({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '577px',
  paddingTop: '100px',
  borderRadius: '10px',
  color: Color.lightCream,
  backgroundColor: Color.darkGrey,
});

export const ItemListCover = styled.div({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  top: '346px',
  width: '100%',
});

export const ItemList = styled.div({
  width: 'fit-content',
  display: 'flex',
  columnGap: '30px',
});
