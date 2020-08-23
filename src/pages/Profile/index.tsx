import React from 'react';

import Header from '../../components/Header';

import {
  Container,
  AvatarContainer,
  Content,
  CustomInput,
  FlexRow,
} from './styles';

import photoIcon from '../../assets/images/icons/photo.svg';

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
            <FlexRow>
              <CustomInput name="name" label="Nome" />
              <CustomInput name="lastname" label="Sobrenome" />
            </FlexRow>

            <FlexRow>
              <CustomInput name="email" label="E-mail" />
              <CustomInput name="whatsapp" label="Whatsapp" />
            </FlexRow>

            <FlexRow>
              <CustomInput name="bio" label="Biografia" />
            </FlexRow>
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <FlexRow>
              <CustomInput name="name" label="Matéria" />
              <CustomInput name="lastname" label="Sobrenome" />
            </FlexRow>
          </fieldset>
        </form>
      </Content>
    </Container>
  );
};

export default Profile;
