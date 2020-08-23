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
  padding: 4rem 10rem;
  margin: -5.6rem 0 4rem;
  background-color: ${props => props.theme.colors.titleInPrimary};
  border-radius: 0.8rem;

  form {
    fieldset {
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

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 1.6rem;
  }
`;
