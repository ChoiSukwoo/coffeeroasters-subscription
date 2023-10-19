import { Global, css } from "@emotion/react";
import { Font } from "@styles/index";

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
    text-decoration: none;
    color: inherit;
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
    border: 0;
    background-color: transparent;
  }

  html,
  body,
  #app {
    padding: 0;
    margin: 0;
    width: 100dvw;
    height: 100dvh;
    overflow: auto; /* 반드시 overlay 처리 */
  }

  :root {
    --scrollWidth--: 8px;
    --index--bg: -1;
    --index--fillterCover: 10;
    --index--fillterExpend: 11;
    --index--header: 50;
    --index--modalCover: 100;
    --index--modalContent: 101;
  }

  //PC 접속일때만 커스텀 스크롤바 처리
  @media (hover: hover) and (pointer: fine) {
    ::-webkit-scrollbar {
      width: var(--scrollWidth--);
      height: var(--scrollWidth--);
    }

    ::-webkit-scrollbar-thumb {
      outline: none;
      border-radius: 10px;
      box-shadow: inset var(--scrollWidth--) var(--scrollWidth--) 0 rgba(34, 34, 34, 0.15);
    }

    ::-webkit-scrollbar-thumb:hover {
      box-shadow: inset var(--scrollWidth--) var(--scrollWidth--) 0 rgba(34, 34, 34, 0.3);
    }

    ::-webkit-scrollbar-track {
      box-shadow: none;
      background-color: rgba(34, 34, 34, 0.1);
      border-radius: 10px;
    }
  }

  @media (hover: none) and (pointer: coarse) {
  }

  @font-face {
    font-family: "Fraunces";
    font-weight: 900;
    font-display: swap;
    src: url("/font/Fraunces_9pt-Black.ttf");
  }
  @font-face {
    font-family: "Barlow";
    font-weight: 400;
    font-display: swap;
    src: url("/font/Barlow-Regular.ttf");
  }

  @font-face {
    font-family: "Barlow";
    font-weight: 700;
    font-display: swap;
    src: url("/font/Barlow-Bold.ttf");
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
    @media (max-width: 1439px) {
      ${Font.body_m}
    }
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
