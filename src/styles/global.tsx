import React from 'react';
import { Global, css } from '@emotion/react';
import { Font } from '@styles/index';

const style = css`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-variant-ligatures: common-ligatures;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

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
