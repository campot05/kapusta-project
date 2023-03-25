import { useDispatch } from 'react-redux';
import {
  deleteTransaction,
  getExpenseSummary,
  getIncomeSummary,
} from 'redux/transactions/trans-operations';
import { deleteByClick } from 'redux/transactions/trans-slice';
import Sure from 'components/Sure/Sure';
import { ReactComponent as RecycleBin } from '../../images/recycleBin.svg';
import { DelBtn } from './DeleteBtn.styled';
import { useState, useEffect } from 'react';
export default function DeleteBtn(id) {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line
  }, [modal]);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleClickOutside = e => {
    if (e.target.tagName !== 'DIV') return;

    if (e.target.className.includes('Modal_overlay')) {
      closeModal();
    }
  };
  const closeModal = () => {
    setModal(false);
  };

  const handleClick = () => {
    setModal(true);
  };

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTransaction(id))
      .unwrap()
      .then(() => {
        dispatch(getExpenseSummary());
        dispatch(getIncomeSummary());
      });
    dispatch(deleteByClick(id));
    closeModal();
  };

  //   const detByClick = id => {
  //  dispatch(deleteTransaction(id))
  //    .unwrap()
  //    .then(() => dispatch(getExpenseSummary()));
  //  dispatch(deleteByClick(id));
  //   };

  return (
    <>
      <DelBtn type="button" onClick={handleClick}>
        <RecycleBin />
      </DelBtn>
      {modal && (
        <Sure
          onClick={closeModal}
          handleConfirm={handleDelete}
          handleCancel={() => setModal(prevState => !prevState)}
        />
      )}
    </>
  );
}
