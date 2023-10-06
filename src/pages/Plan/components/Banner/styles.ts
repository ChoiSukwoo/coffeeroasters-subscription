import styled from '@emotion/styled';
import { Color, Util } from '@styles/index';

export const BannerStyle = styled.div(
  {
    ...Util.DragPrevent,

    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '450px',
    padding: '134px 85px 134px',
    borderRadius: '10px',
    overflow: 'hidden',


    color: Color.lightCream,
  },
  ({ url }: { url: string }) => ({
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }),
);
