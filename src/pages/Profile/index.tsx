import React from 'react';

import Header from '../../components/Header';

import {
  Container,
  AvatarContainer,
  Content,
  CustomInput,
  NameWrapper,
  ContactWrapper,
  ClassWrapper,
  ScheduleWrapper,
  FormFooter,
  FooterTextWrapper,
} from './styles';

import photoIcon from '../../assets/images/icons/photo.svg';
import warningIcon from '../../assets/images/icons/warning.svg';

const Profile: React.FC = () => {
  return (
    <Container>
      <Header showBackground title="Meu Perfil">
        <AvatarContainer>
          <div>
            <img
              src="https://avatars1.githubusercontent.com/u/59237399?s=460&u=8df812cfa0cfe0373e62e95831ff7721d431e6a0&v=4"
              alt="avatar"
              className="avatar-img"
            />
            <button type="button">
              <img src={photoIcon} alt="edit-avatar" />
            </button>
          </div>
          <h2>Guilherme Weissheimer</h2>
          <span>Matemática</span>
        </AvatarContainer>
      </Header>

      <Content>
        <form action="">
          <fieldset>
            <legend>Seus dados</legend>
            <NameWrapper>
              <CustomInput name="name" label="Nome" />
              <CustomInput name="lastname" label="Sobrenome" />
            </NameWrapper>

            <ContactWrapper>
              <CustomInput name="email" label="E-mail" />
              <CustomInput name="whatsapp" label="Whatsapp" />
            </ContactWrapper>

            <CustomInput name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <ClassWrapper>
              <CustomInput name="subject" label="Matéria" />
              <CustomInput name="cost" label="Custo da sua hora por aula" />
            </ClassWrapper>
          </fieldset>

          <fieldset>
            <legend>Horários disponíveis</legend>
            <ScheduleWrapper>
              <CustomInput name="weekDay" label="Dia da semana" />
              <CustomInput name="from" label="Das" />
              <CustomInput name="to" label="Até" />
            </ScheduleWrapper>
          </fieldset>

          <FormFooter>
            <div>
              <img src={warningIcon} alt="warning" />
              <FooterTextWrapper>
                <strong>Importante!</strong>
                <span>Preencha todos os dados corretamente.</span>
              </FooterTextWrapper>
            </div>
            <button type="submit">Salvar cadastro</button>
          </FormFooter>
        </form>
      </Content>
    </Container>
  );
};

export default Profile;
