import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

const PasswordRedefinitionFinished: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <img src={successIcon} alt="success" />
          <h1>Redefinição enviada!</h1>
          <span>
            Boa, agora é só checar o e-mail que foi enviado para você redefinir
            sua senha e aproveitar os estudos.
          </span>
        </div>
        <Link to="/">
          <button type="button">Voltar ao login</button>
        </Link>
      </Content>
    </Container>
  );
};

export default PasswordRedefinitionFinished;
