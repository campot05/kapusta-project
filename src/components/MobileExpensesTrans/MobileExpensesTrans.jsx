import { useAuth } from 'hooks';
import { divider } from 'images/images';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenseSummary } from 'redux/transactions/trans-operations';
import { getExpensesTrans } from 'redux/transactions/trans-selectors';
import { Item, List } from './MobileExpensesTrans.styled';

export default function MobileExpensesTrans() {
  const allExpensesTrans = useSelector(getExpensesTrans);
  console.log(`🚀 ~ MobileExpensesTrans ~ allExpensesTrans:`, allExpensesTrans);

  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRefreshing) {
      return;
    }
    dispatch(getExpenseSummary());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefreshing]);

  if (allExpensesTrans === null) {
    return;
  }

  return (
    <List>
      {allExpensesTrans.map(({ _id, amount, category, description, date }) => {
        return (
          <Item key={_id}>
            <p>{category}</p>
            <p>{date}</p>
            <p>{description}</p>
            <p>{amount}</p>
            <img src="" alt="" />
          </Item>
        );
      })}
    </List>
  );
}
