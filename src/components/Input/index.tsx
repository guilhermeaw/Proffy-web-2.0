import React, { InputHTMLAttributes } from 'react';

import { Container, InputWrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <InputWrapper>
        <input id={name} {...rest} />
      </InputWrapper>
    </Container>
  );
};

export default Input;
