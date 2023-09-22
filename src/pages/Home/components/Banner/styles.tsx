import styled from '@emotion/styled';
import { Color, Util } from '@styles/index';

export const BannerStyle = styled.div(
  {
    ...Util.DragPrevent,

    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '600px',
    padding: '117px 85px 116px',
    borderRadius: '10px',
    overflow: 'hidden',

    color: Color.lightCream,
  },
  ({ url }: { url: string }) => ({
    backgroundImage: `url(${url})`,
  }),
);
