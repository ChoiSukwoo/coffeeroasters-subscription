import React from 'react';
import { Global, css } from '@emotion/react';
import { Font } from '@styles/index';

const style = css`
  @font-face {
    font-family: 'Fraunces';
    font-weight: 900;
    font-display: swap;
    src: url('./src/asset/font/Fraunces_9pt-Black.ttf');
  }

  @font-face {
    font-family: 'Barlow';
    font-weight: 400;
    font-display: swap;
    src: url('./src/asset/font/Barlow-Regular.ttf');
  }

  @font-face {
    font-family: 'Barlow';
    font-weight: 700;
    font-display: swap;
    src: url('./src/asset/font/Barlow-Bold.ttf');
  }

  html,
  body {
    margin: 0;
    padding: 0;
    overflow: initial !important;
  }

  body {
    font-size: 15px;
    line-height: 1.46668;
    font-weight: 400;
    font-variant-ligatures: common-ligatures;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  .h1 {
    ${Font.h1}
  }

  h2,
  .h2 {
    ${Font.h2}
  }

  h3,
  .h3 {
    ${Font.h3}
  }

  h4,
  .h4 {
    ${Font.h4}
  }

  body,
  .body {
    ${Font.body}
  }

  .title {
    ${Font.title}
  }

  nav,
  .nav {
    ${Font.nav}
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
