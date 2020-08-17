import styled from 'styled-components';

import backgroundImg from '../../assets/images/background.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 700px;
  padding: 2rem 4rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RegisterContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a img {
    position: absolute;
    top: 0;
    left: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 40rem;

    h1 {
      margin-bottom: 2rem;
      font-size: 4rem;
      font-weight: bold;
      color: ${props => props.theme.colors.textTitle};
    }

    span {
      width: 22rem;
      font-size: 1.6rem;
      line-height: 2.6rem;
      margin-bottom: 3.2rem;
    }

    button {
      margin-top: 3.8rem;
      border: 0;
      border-radius: 1rem;
      height: 6rem;
      color: ${props => props.theme.colors.buttonText};
      background-color: ${props => props.theme.colors.secondary};
      transition: background-color 0.2s;

      &:hover {
        background-color: ${props => props.theme.colors.secondaryDark};
      }
    }
  }
`;

export const PasswordActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: ${props => props.theme.colors.textComplement};
  margin-top: 1.8rem;

  div input {
    margin-right: 0.8rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textComplement};
  }
`;

export const BackgroundContainer = styled.div`
  flex: 1;
  padding: 6.4rem;
  background-color: ${props => props.theme.colors.primary};
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${backgroundImg}) no-repeat center;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 32rem;
  }

  h2 {
    width: 32rem;
    color: ${props => props.theme.colors.textInPrimary};
  }
`;
