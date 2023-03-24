import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from '../ZeroBalanceModal/ZeroBalanceModal.module.css';
export const ZeroBalanceModal = ({ onClose }) => {
  const modalRoot = document.querySelector('#modal-root');

  const closeModal = ({ target, currentTarget, code }) => {
    console.log('Zero balance warning is closed');
    // if (
    //   target === currentTarget ||
    //   code === 'Escape' ||
    //   target.nodeName === 'svg' ||
    //   target.nodeName === 'path' ||
    //   target.nodeName === 'BUTTON'
    // ) {
    //   onClose(false);
    //   document.removeEventListener('keydown', closeModal);
    //   document.body.classList.remove('no-scroll');
    // }
  };

  document.addEventListener('keydown', closeModal);

  return createPortal(
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal} onClick={closeModal}>
        <div className={css.triangle}></div>
        <div className={css.rectangle}>
          <div className={css.warning}>
            Hello! To get started, enter the current balance of your account!
          </div>
          <div className={css.joke}>
            You can't spend money until you have it :&#x29;
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};
export default ZeroBalanceModal;

ZeroBalanceModal.propTypes = {
  onClose: PropTypes.func,
};
