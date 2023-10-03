import styled from '@emotion/styled';
import { Color, Util } from '@styles/index';

export const Content = styled.div({
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  height: '562px',
  padding: '0 85px',
});

export const ImgStyle = styled.div(
  {
    zIndex: '1',
    width: '445px',
    height: '474px',
    borderRadius: '8px',
  },
  ({ url }: { url: string }) => ({
    ...Util.BackGround({ url }),
  }),
);

export const TextArea = styled.div({
  zIndex: '1',
  padding: '176px 0',
  maxWidth: '540px',
  marginRight: '125px',
  display: 'flex',
  flexDirection: 'column',
  color: Color.lightCream,
});

export const BackgroundImg = styled.div(
  {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '474px',
  },
  ({ url }: { url: string }) => ({
    ...Util.BackGround({ url }),
  }),
);
