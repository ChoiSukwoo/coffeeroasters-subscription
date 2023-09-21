import { CSSObject, keyframes } from '@emotion/react';
import { CSSProperties } from 'react';

export const Color = {
  darkCyan: '#0E8784' as CSSProperties['color'],
  cyan: '#66D2CF' as CSSProperties['color'],
  darkGreyBlue: '#333D4B' as CSSProperties['color'],
  paleOrange: '#FDD6BA' as CSSProperties['color'],
  lightCream: '#FEFCF7' as CSSProperties['color'],
  westar: '#e2dedbF' as CSSProperties['color'],
  springWood: '#f4f1eb' as CSSProperties['color'],
  grey: '#83888F' as CSSProperties['color'],
};

export const Font = {
  title: {
    fontFamily: 'Fraunces',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: '150px',
    lineHeight: '72px',
  } as CSSObject,
  h1: {
    fontFamily: 'Fraunces',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: '72px',
    lineHeight: '72px',
  } as CSSObject,
  h2: {
    fontFamily: 'Fraunces',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: '40px',
    lineHeight: '48px',
  } as CSSObject,
  h3: {
    fontFamily: 'Fraunces',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: '32px',
    lineHeight: '36px',
  } as CSSObject,
  h4: {
    fontFamily: 'Fraunces',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '32px',
  } as CSSObject,
  body: {
    fontFamily: 'Barlow',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '26px',
  } as CSSObject,
  nav: {
    fontFamily: 'Barlow',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '15px',
    letterSpacing: '0.92',
  } as CSSObject,

  button: {
    fontFamily: 'Fraunces',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '25px',
  } as CSSObject,
};

export const Util = {
  DragPrevent: {
    msUser: 'none',
    MozUserDrag: 'none',
    KhtmlUserDrag: 'none',
    WebkitUserDrag: 'none',
    userSelect: 'none',
    msUserSelect: 'none',
    MozUserSelect: 'none',
    KhtmlUserSelect: 'none',
    WebkitUserSelect: 'none',
  } as CSSObject,
  LineCutting: (props: { line: number }): CSSObject => ({
    display: '-webkit-box',
    wordWrap: 'break-word',
    WebkitLineClamp: props.line,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  ButtonStyleRemove: {
    backgroundColor: 'transparent',
    color: 'inherit',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    outline: 'inherit',
  },
  LoadingBg: {
    animation: `${keyframes({
      '0%': {
        backgroundPosition: '-100% 0',
      },
      '100% ': {
        backgroundPosition: '100% 0',
      },
    })} 2.5s infinite linear`,
    backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
    backgroundSize: '200% auto',
  } as CSSObject,
  ContentWidth: {
    flexShrink: 0,
    minWidth: '1140px',
    '&>*': {
      maxWidth: '1140px',
      width: '100%',
    },
  },
  FlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const styles = {
  Color: Color,
  Font: Font,
  Util: Util,
};
