import { CreateModal } from './styles';
import React, { CSSProperties, MouseEventHandler, useCallback } from 'react';

interface Props {
  show: boolean;
  onClose: () => void;
  style?: CSSProperties;
  children: JSX.Element | JSX.Element[];
}

const AlertModal = ({ show, onClose, style, children }: Props) => {
  const stopPropagation = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
    e.stopPropagation();
  }, []);

  return show ? (
    <CreateModal onClick={onClose}>
      <div onClick={stopPropagation} style={style}>
        {children}
      </div>
    </CreateModal>
  ) : (
    <></>
  );
};

export default AlertModal;
