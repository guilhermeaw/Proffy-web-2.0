import styled from 'styled-components';

export const Container = styled.div`
  label {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  transition: 0.2s all;

  input {
    width: 100%;
    border-radius: 0.8rem;
    padding: 2rem;
    border: 1px solid ${props => props.theme.colors.lineInWhite};
  }

  &:focus-within::after {
    width: 2px;
    height: 50%;
    content: '';
    background-color: ${props => props.theme.colors.primaryLight};
    position: absolute;
    left: 0;
    bottom: 1.5rem;
  }
`;
