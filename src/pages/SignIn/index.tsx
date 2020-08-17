import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  BackgroundContainer,
  Background,
  Content,
  LoginContainer,
  PasswordActionsContainer,
  LoginFooter,
  RegisterContainer,
} from './styles';

import logoImg from '../../assets/images/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <BackgroundContainer>
        <Background>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </Background>
      </BackgroundContainer>

      <Content>
        <LoginContainer>
          <form>
            <h1>Fazer login</h1>
            <input placeholder="E-mail" />
            <input placeholder="Senha" />

            <PasswordActionsContainer>
              <div>
                <input type="checkbox" id="remember-password" />
                <label htmlFor="remember-password">Lembrar-me</label>
              </div>
              <Link to="/forgot">Esqueci minha senha</Link>
            </PasswordActionsContainer>

            <button type="submit">Entrar</button>
          </form>

          <LoginFooter>
            <RegisterContainer>
              <span>Não tem conta?</span>
              <Link to="/signup">Cadastre-se</Link>
            </RegisterContainer>
            <div>
              <span>É de graça</span>
            </div>
          </LoginFooter>
        </LoginContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
