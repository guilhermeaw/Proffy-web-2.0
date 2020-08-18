import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BannerContainer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 6rem 10rem 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BannerContent = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const BannerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: ${props => props.theme.colors.primaryDark};
    border: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 0.8rem;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 6rem;
    border-radius: 50%;
  }

  span {
    margin-left: 2rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.textInPrimary};
  }
`;

export const BannerMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 4rem 0 3.2rem;
`;

export const LogoContainer = styled.div`
  margin-right: 8rem;

  h2 {
    font-size: 3.2rem;
    color: ${props => props.theme.colors.textInPrimary};
    width: 40rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin: 8rem 0 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.textBase};
  font-size: 2rem;
  line-height: 3rem;

  strong {
    font-weight: bold;
  }
`;

export const MainBox = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-right: 4rem;
    text-align: right;

    span {
      color: ${props => props.theme.colors.textComplement};
      font-size: 1.2rem;
      line-height: 2rem;
    }

    img {
      margin-left: 0.8rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 56rem;

  button {
    width: 50%;
    height: 10rem;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.buttonText};
    font-weight: bold;
    font-size: 1.8rem;
    border: 0;
    border-radius: 0.8rem;
    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 1.6rem;
    }

    &:hover {
      background-color: ${props => props.theme.colors.primaryDark};
    }

    &:nth-child(2) {
      margin-left: 1.6rem;
      background-color: ${props => props.theme.colors.secondary};
    }

    &:nth-child(2):hover {
      background-color: ${props => props.theme.colors.secondaryDark};
    }
  }
`;
