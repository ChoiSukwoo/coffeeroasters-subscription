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
      padding: '134px 85px',
      height: '450px',
    },

    '@media (max-width: 1439px)': {
      padding: '127px 58px',
      height: '400px',
    },

    '@media (max-width: 767px)': {
      padding: '101px 24px ',
      height: '400px',
    },
  },
  ({ url }: { url: string }) => ({
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }),
);

export const BannerTitle = styled.h1({
  '@media (min-width: 1440px)': {
    marginBottom: '32px',
  },

  '@media (max-width: 1439px)': {
    marginBottom: '24px',
    fontSize: '48px',
    lineHeight: '48px',
  },

  '@media (max-width: 767px)': {
    marginBottom: '22px',
    textAlign: 'center',
    fontSize: '40px',
    lineHeight: '40px',
  },
});

export const BannerContent = styled.div({
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
