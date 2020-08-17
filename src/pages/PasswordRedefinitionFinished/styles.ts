import styled from 'styled-components';

import backgroundImg from '../../assets/images/success-background.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  padding: 8rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: url(${backgroundImg}) no-repeat center;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin: 4rem 0;
    }

    h1 {
      font-family: 'Archivo';
      font-weight: bold;
      font-size: 6rem;
      text-align: center;
      color: ${props => props.theme.colors.titleInPrimary};
      margin-bottom: 2.4rem;
    }

    span {
      font-size: 1.6rem;
      line-height: 2.6rem;
      color: ${props => props.theme.colors.textInPrimary};
      width: 48rem;
      text-align: center;
    }
  }

  a {
    margin-bottom: 6rem;
  }

  a button {
    border: 0;
    border-radius: 1rem;
    height: 6rem;
    width: 20rem;
    color: ${props => props.theme.colors.buttonText};
    background-color: ${props => props.theme.colors.secondary};
    transition: background-color 0.2s;

    &:hover {
      background-color: ${props => props.theme.colors.secondaryDark};
    }
  }
`;
