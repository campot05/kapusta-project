import { createPortal } from 'react-dom';

import css from './Modal.module.css';

export default function Modal({ children }) {
  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
}
