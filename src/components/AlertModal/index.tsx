import { ModalBackground } from "./styles";
import { CSSProperties, MouseEventHandler, useCallback } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
  modalStyle?: CSSProperties;
  backgroundStyle?: CSSProperties;
  children: JSX.Element | JSX.Element[];
}

const AlertModal = ({ show, onClose, modalStyle, backgroundStyle, children }: Props) => {
  const stopPropagation = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
    e.stopPropagation();
  }, []);

  return show ? (
    <ModalBackground onClick={onClose} style={backgroundStyle}>
      <div onClick={stopPropagation} style={modalStyle}>
        {children}
      </div>
    </ModalBackground>
  ) : (
    <></>
  );
};

export default AlertModal;
