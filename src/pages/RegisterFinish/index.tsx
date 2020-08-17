import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

const RegisterFinish: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <img src={successIcon} alt="success" />
          <h1>Cadastro concluído</h1>
          <span>
            Agora você faz parte da plataforma da Proffy. Tenha uma ótima
            experiência.
          </span>
        </div>
        <Link to="/">
          <button type="button">Fazer login</button>
        </Link>
      </Content>
    </Container>
  );
};

export default RegisterFinish;
