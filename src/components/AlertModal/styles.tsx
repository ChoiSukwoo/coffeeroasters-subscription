import styled from '@emotion/styled';

export const ModalBackground = styled.div({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  left: 0,
  bottom: 0,
  top: 0,
  right: 0,
  zIndex: 'var(--index--modalCover)',
  backgroundColor: 'rgba(0,0,0,0.7)',
  '& > div': {
    boxSizing: 'border-box',
    minWidth: '388px',
    width: 'fit-content',
    minHeight: '143px',
    borderRadius: '8px',
    backgroundColor: 'white',
    userSelect: 'none',
    padding: '25px 29px',
    zIndex: 'var(--index--modalContent)',
    position: 'relative',
  },
});
