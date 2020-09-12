import React, { memo } from "react";

import { ModalWrapper } from "./style";

const Modal = memo(({ title, position, visible, children, onClose }) => (
  <ModalWrapper visible={visible} position={position}>
    <div className="modal-title">
      <span>{title}</span>
      <div
        className="close"
        role="button"
        onClick={onClose ? onClose : undefined}
      >
        &times;
      </div>
    </div>
    <div className="modal-content">{children}</div>
  </ModalWrapper>
));

export default Modal;
