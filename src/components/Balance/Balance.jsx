import { useState, useEffect } from 'react';
import {
  Form,
  Title,
  Input,
  Button,
  Label,
  InputContainer,
  WrapperForm,
} from './Balance.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserBalance } from 'redux/balance/balanceOperations';
import BalanceModal from './BalanceModal';
import { selectBalance } from 'redux/auth/auth-selectors';
import { useAuth } from 'hooks';
export const Balance = () => {
  const [value, setValue] = useState(0);
  const currentBalance = useSelector(selectBalance);
  const [promptClose, setPromptClose] = useState(true);
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isRefreshing } = useAuth();
  const onChange = e => {
    setValue(e.target.value);
    setIsSubmitted(false);
  };

  const toggleWindow = () => {
    setPromptClose(prev => !prev);
  };

  useEffect(() => {
    setValue(currentBalance?.toFixed(2) || '');
  }, [currentBalance]);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
    const data = e.target.elements.balance.value;
    const balance = Number(data);

    const savedBalance = {
      newBalance: balance,
    };

    dispatch(updateUserBalance(savedBalance));
    if (currentBalance) {
      setPromptClose(prev => !prev);
    }
  };
  return (
    <>
      <WrapperForm>
        <Title>Balance:</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              type="number"
              readOnly={isSubmitted || currentBalance}
              name="balance"
              pattern="[0-9, .UAH]*"
              value={value}
              onChange={onChange}
            />
            <Label>UAH</Label>
          </InputContainer>
          {!isRefreshing && promptClose && currentBalance === 0 && (
            <BalanceModal onClose={toggleWindow} />
          )}
          {
            <Button type="submit" disabled={isSubmitted || currentBalance}>
              CONFIRM
            </Button>
          }
        </Form>
      </WrapperForm>
    </>
  );
};
