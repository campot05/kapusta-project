import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

export default function Modal({ onClose, children }) {
  const modalRoot = document.querySelector('#modal-root');

  const closeModal = ({ target, currentTarget, code }) => {
    if (
      target === currentTarget ||
      code === 'Escape' ||
      target.nodeName === 'svg' ||
      target.nodeName === 'path' ||
      target.nodeName === 'BUTTON'
    ) {
      onClose(false);
      document.removeEventListener('keydown', closeModal);
      document.body.classList.remove('no-scroll');
    }
  };

  document.addEventListener('keydown', closeModal);

  return createPortal(
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
};
