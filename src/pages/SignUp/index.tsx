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

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <RegisterContainer>
          <Link to="/">
            <img src={backIcon} alt="back" />
          </Link>

          <form>
            <h1>Cadastro</h1>
            <span>Preencha os dados abaixo para começar.</span>

            <Input placeholder="Nome" name="name" type="text" />
            <Input placeholder="Sobrenome" name="lastName" type="text" />
            <Input placeholder="E-mail" name="email" type="email" />
            <Input placeholder="Senha" name="password" type="password" />

            <button type="submit">Concluir cadastro</button>
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

export default SignUp;
