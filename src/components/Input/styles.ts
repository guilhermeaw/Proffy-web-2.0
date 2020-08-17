import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    width: 100%;
    border-radius: 0.8rem;
    padding: 2rem;
    border: 1px solid ${props => props.theme.colors.lineInWhite};
  }

  &:focus-within::after {
    width: 2px;
    height: calc(100% - 3.2rem);
    content: '';
    background-color: ${props => props.theme.colors.primaryLight};
    position: absolute;
    left: 0;
    bottom: 1.5rem;
  }
`;
