import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

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
import heartIcon from '../../assets/images/icons/purple-heart.svg';

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
            <Input placeholder="E-mail" name="email" />
            <Input placeholder="Senha" name="password" />

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
              <img src={heartIcon} alt="heart" />
            </div>
          </LoginFooter>
        </LoginContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
