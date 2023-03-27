import { createPortal } from 'react-dom';

import css from './Modal.module.css';

export default function Modal({ onClose, children }) {
  const modalRoot = document.querySelector('#modal-root');

  const handleClickOutside = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleClickOutside}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
}
