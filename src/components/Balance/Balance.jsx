import { useState } from 'react';
import {
  Form,
  Title,
  Input,
  Button,
  Label,
  InputContainer,
  WrapperForm,
} from './Balance.styled';

export const Balance = () => {
  const [value, setValue] = useState(0);

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <WrapperForm>
        <Title>Balance:</Title>
        <Form>
          <InputContainer>
            <Input
              type="number"
              name="balance"
              pattern="[0-9, .UAH]*"
              value={value}
              onChange={onChange}
            />
            <Label>UAH</Label>
          </InputContainer>

          <Button type="submit">CONFIRM</Button>
        </Form>
      </WrapperForm>
    </>
  );
};
