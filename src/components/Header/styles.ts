import styled from 'styled-components';

import backgroundImg from '../../assets/images/success-background.svg';

interface HeaderContentProps {
  size?: 'small' | 'large';
  showBackground?: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const HeaderTop = styled.header`
  padding: 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.colors.primaryDarker};

  span {
    color: ${props => props.theme.colors.textInPrimary};
    font-size: 1.5rem;
  }
`;

export const HeaderContent = styled.div<HeaderContentProps>`
  background: ${({ showBackground }) =>
    showBackground && `url(${backgroundImg}) no-repeat center`};
  background-color: ${props => props.theme.colors.primary};

  padding: ${({ size }) =>
    size === 'small' ? '5rem 10rem 8rem' : '7rem 10rem 10rem'};
`;
