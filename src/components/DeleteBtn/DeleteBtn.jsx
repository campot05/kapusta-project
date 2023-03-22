import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/transactions/trans-operations';
import { ReactComponent as RecycleBin } from '../../images/recycleBin.svg';
import { DelBtn } from './DeleteBtn.styled';

export default function DeleteBtn(id) {
  const dispatch = useDispatch();

  return (
    <DelBtn type="button">
      <RecycleBin onClick={() => dispatch(deleteTransaction(id))} />
    </DelBtn>
  );
}
