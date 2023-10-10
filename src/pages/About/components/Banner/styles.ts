import styled from '@emotion/styled';
import { Color, Util } from '@styles/index';

export const BannerStyle = styled.div(
  {
    ...Util.DragPrevent,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
    color: Color.lightCream,

    '@media (min-width: 1440px)': {
      height: '450px',
      padding: '137px 85px 137px',
    },

    '@media (max-width: 1439px)': {
      height: '400px',
      padding: '118px 58px 118px',
    },

    '@media (max-width: 767px)': {
      padding: '111px 24px 0px',
      alignItems: 'center',
    },
  },
  ({ url }: { url: string }) => ({
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }),
);

export const Title = styled.h2({
  paddingBottom: '24px',

  '@media (max-width: 1439px)': {
    fontSize: '32px',
    lineHeight: '40px',
  },

  '@media (max-width: 767px)': {
    fontSize: '28px',
    lineHeight: '28px',
  },
});

export const Content = styled.p({
  '@media (min-width: 1440px)': {
    width: '445px',
  },

  '@media (max-width: 1439px)': {
    width: '398px',
  },

  '@media (max-width: 767px)': {
    width: '100%',
    textAlign: 'center',
  },
});
