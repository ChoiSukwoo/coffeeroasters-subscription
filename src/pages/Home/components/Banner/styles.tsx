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

    '@media (min-width: 1281px)': {
      height: '600px',
      padding: '117px 85px 116px',
    },

    '@media (max-width: 1280px)': {
      height: '500px',
      padding: '104px 58px 104px',
    },
    '@media (max-width: 767px)': {
      alignItems: 'center',
      padding: '100px 24px 20px',
    },
  },
  ({ url }: { url: string }) => ({
    ...Util.BackGround({ url }),
  }),
);

export const BannerTitle = styled.h1({
  '@media (min-width: 1281px)': {
    width: '493px',
    marginBottom: '32px',
  },

  '@media (min-width:768px) and (max-width: 1280px)': {
    width: '329px',
    marginBottom: '24px',
    fontSize: '48px',
  },

  '@media (max-width: 767px)': {
    width: '100%',
    marginBottom: '24px',
    textAlign: 'center',
  },
});

export const BannerContent = styled.p({
  '@media (min-width: 1281px)': {
    width: '445px',
    marginBottom: '56px',
  },

  '@media (max-width: 1280px)': {
    width: '398px',
    marginBottom: '40px',
  },

  '@media (max-width: 767px)': {
    width: '100%',
    textAlign: 'center',
  },
});
