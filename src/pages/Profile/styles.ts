import styled from 'styled-components';
import Input from '../../components/Input';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    position: relative;

    > img {
      border-radius: 50%;
      width: 16rem;
    }

    button {
      background-color: ${props => props.theme.colors.secondary};
      border: 0;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      position: absolute;
      bottom: 0.8rem;
      right: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${props => props.theme.colors.secondaryDark};
      }

      img {
        width: 2rem;
      }
    }
  }

  h2 {
    color: ${props => props.theme.colors.titleInPrimary};
    font-weight: bold;
    margin-top: 0.8rem;
  }

  span {
    color: ${props => props.theme.colors.textInPrimary};
  }
`;

export const Content = styled.main`
  padding: 5.6rem 0 0;
  margin: -5.6rem 0 5.6rem;
  background-color: ${props => props.theme.colors.titleInPrimary};
  border-radius: 0.8rem;
  max-width: 700px;

  form {
    fieldset {
      padding: 0 5.6rem;
      border: 0;
      margin-bottom: 5.6rem;

      legend {
        width: 100%;
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 1.6rem;
        padding-bottom: 1.6rem;
        position: relative;
      }

      legend::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme.colors.lineInWhite};
        content: '';
      }
    }
  }
`;

export const CustomInput = styled(Input)`
  background-color: ${props => props.theme.colors.background};
`;

export const NameWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2.4rem;
  margin-bottom: 1.6rem;
`;

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 2.4rem;
  margin-bottom: 1.6rem;
`;

export const ClassWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 2.4rem;
`;

export const ScheduleWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-column-gap: 1.6rem;
`;

export const FormFooter = styled.footer`
  background-color: ${props => props.theme.colors.boxFooter};
  padding: 5.6rem 5.6rem;
  border-top: 1px solid ${props => props.theme.colors.lineInWhite};
  border-radius: 0 0 0.8rem 0.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
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

export const FooterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-left: 1.6rem;

  strong {
    color: ${props => props.theme.colors.primary};
    font-size: 1.4rem;
  }

  span {
    color: ${props => props.theme.colors.textComplement};
    font-size: 1.4rem;
  }
`;
