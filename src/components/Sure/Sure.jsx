import Modal from '../Modal/Modal';
import { ReactComponent as CloseIcon } from '../../images/close.svg';

import css from './Sure.module.css';

export default function Sure({ onClick, handleConfirm, handleCancel }) {
  return (
    <div>
      <Modal>
        <CloseIcon className={css.icon} onClick={onClick} />
        <div className={css.dialog}>
          <p className={css.text}>Are you sure?</p>
          <div className={css.buttons}>
            <button className={css.buttonYes} onClick={handleConfirm}>
              Yes
            </button>
            <button className={css.buttonNo} onClick={handleCancel}>
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
