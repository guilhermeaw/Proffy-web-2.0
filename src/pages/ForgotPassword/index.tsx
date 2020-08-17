import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import {
  Container,
  Content,
  RegisterContainer,
  BackgroundContainer,
  Background,
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Content>
        <RegisterContainer>
          <Link to="/">
            <img src={backIcon} alt="back" />
          </Link>

          <form>
            <h1>
              Eita, esqueceu <br /> sua senha?
            </h1>
            <span>Não esquenta, vamos dar um jeito nisso.</span>

            <Input placeholder="E-mail" name="email" type="email" />

            <button type="submit">Enviar</button>
          </form>
        </RegisterContainer>
      </Content>

      <BackgroundContainer>
        <Background>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </Background>
      </BackgroundContainer>
    </Container>
  );
};

export default ForgotPassword;
