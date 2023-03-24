// import { clearTransisions } from 'redux/transaction/transaction-slice';

import Modal from '../Modal/Modal';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import css from './Quit.module.css';

export default function ToTestModal() {
  var showModal = true; //треба поміняти

  //треба поміняти
  const handleClose = () => {
    console.log('Modal closed');
    showModal = false;
  };

  //треба поміняти
  const handleLogout = () => {
    console.log('User logged out');
    showModal = false;
  };

  const style = {
    iconButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      padding: '0',
    },
    closeIcon: {
      cursor: 'pointer',
      color: '#52555F',
      width: ' 12px',
      height: '12px',
    },
    buttonYes: {
      width: '125px',
      height: '44px',
      borderRadius: 16,
      color: '#fff',
      backgroundColor: '#FF751D',
      padding: '12px 0',
      fontSize: '12px',
      fontWeight: '700',
    },
    buttonNo: {
      width: '125px',
      height: '44px',
      borderRadius: 16,
      border: '2px solid #F5F6FB',
      color: '#52555F',
      backgroundColor: '#fff',
      padding: '12px 0',
      fontSize: '12px',
      fontWeight: '700',
    },
  };

  return (
    <div>
      {showModal && (
        <Modal onClose={handleClose}>
          <IconButton aria-label="close" style={style.iconButton}>
            <CloseIcon style={style.closeIcon} onClick={handleClose} />
          </IconButton>
          <div className={css.dialog}>
            Do you really want to leave?
            <div className={css.buttons}>
              <div>
                <Button
                  variant="contained"
                  style={style.buttonYes}
                  onClick={handleLogout}
                >
                  Yes
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  style={style.buttonNo}
                  onClick={handleClose}
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
