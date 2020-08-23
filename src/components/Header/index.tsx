import React from 'react';

import { Link } from 'react-router-dom';
import { Container, HeaderTop, HeaderContent } from './styles';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface HeaderProps {
  title: string;
  showBackground?: boolean;
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({
  showBackground = false,
  size = 'large',
  title,
  children,
}) => {
  return (
    <Container>
      <HeaderTop>
        <Link to="/">
          <img src={backIcon} alt="go-back" />
        </Link>
        <span>{title}</span>
        <img src={logoImg} alt="proffy" style={{ width: '4.6rem' }} />
      </HeaderTop>

      <HeaderContent size={size} showBackground={showBackground}>
        {children}
      </HeaderContent>
    </Container>
  );
};

export default Header;
