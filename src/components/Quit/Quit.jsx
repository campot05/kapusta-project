import Modal from '../Modal/Modal';

import { ReactComponent as CloseIcon } from '../../images/close.svg';
import css from './Quit.module.css';

export default function Quit({ onClick, handleConfirm, handleCancel }) {
  return (
    <div>
      <Modal onClose={onClick}>
        <CloseIcon className={css.icon} onClick={onClick} />
        <div className={css.dialog}>
          <p className={css.text}>Do you really want to leave?</p>
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
