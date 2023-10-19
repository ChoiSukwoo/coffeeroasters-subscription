import AlertModal from "@components/AlertModal";
import { DesktopModalStyle, MobileBackgroundStyle, MobileModalStyle } from "./style";
import { useResponsive } from "@hooks/responsive";
import Close from "@svg/shared/icon-close.svg?react";

interface Props {
  isShow: boolean;
  onClose: () => void;
  data: string;
}

export const WarningModal = ({ isShow, onClose, data }: Props) => {
  const { isMobile } = useResponsive();

  return (
    <AlertModal
      show={isShow}
      onClose={onClose}
      backgroundStyle={isMobile ? MobileBackgroundStyle : {}}
      modalStyle={isMobile ? MobileModalStyle : DesktopModalStyle}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <button onClick={onClose} style={{ padding: "0" }}>
          <Close />
        </button>
      </div>
      <div style={{ flex: 1, padding: "10px 0" }}>{data}</div>
    </AlertModal>
  );
};
