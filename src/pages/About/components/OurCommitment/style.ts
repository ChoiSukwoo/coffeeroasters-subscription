import styled from '@emotion/styled';
import { Color, Util } from '@styles/index';

export const Content = styled.div({
  display: 'flex',
});

export const ImgStyle = styled.div(
  {
    width: '445px',
    height: '520px',
    borderRadius: '8px',
    marginRight: '125px',
  },
  ({ url }: { url: string }) => ({
    ...Util.BackGround({ url }),
  }),
);

export const TextAre = styled.div({
  padding: '90px 0',
  maxWidth: '540px',
  display: 'flex',
  flexDirection: 'column',
  color: Color.darkGreyBlue,
});
