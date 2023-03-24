import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/transactions/trans-operations';
import { deleteByClick } from 'redux/transactions/trans-slice';

import { ReactComponent as RecycleBin } from '../../images/recycleBin.svg';
import { DelBtn } from './DeleteBtn.styled';

export default function DeleteBtn(id) {
  const dispatch = useDispatch();

  const detByClick = id => {
    dispatch(deleteTransaction(id));
    dispatch(deleteByClick(id));
  };

  return (
    <DelBtn type="button">
      <RecycleBin onClick={() => detByClick(id)} />
    </DelBtn>
  );
}
