import styled from '@emotion/styled';
import { Color, Util, Font } from '@styles/index';

export const Collectiontyle = styled.div({
  ...Util.DragPrevent,
  position: 'relative',
  overflow: 'hidden',
  height: '525px',
  width: '100%',
  color: Color.lightCream,
});

export const BackTextPos = styled.div({
  position: 'absolute',
  top: 0,
  width: '100%',
});

export const BackTextCover = styled.div({
  width: 'fit-content',
  height: '196px',
  margin: '0 auto',
});

export const BackTextDim = styled.div({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(#ffffff00 , ${Color.lightCream})`,
});

export const BackText = styled.div({
  ...Font.title,

  paddingTop: '86px',
  whiteSpace: 'nowrap',
  color: Color.grey,
});

export const CollectionFlex = styled.div({
  display: 'flex',
  columnGap: '30px',
  position: 'relative',
  padding: '126px 80px 0',
  color: Color.darkGreyBlue,
});
