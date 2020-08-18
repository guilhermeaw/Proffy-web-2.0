import React from 'react';

import {
  Container,
  BannerContainer,
  BannerContent,
  BannerHeader,
  Avatar,
  BannerMain,
  LogoContainer,
  Footer,
  FooterContent,
  WelcomeBox,
  MainBox,
  ButtonsContainer,
} from './styles';

import logoutIcon from '../../assets/images/icons/logout.svg';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <BannerContainer>
        <BannerContent>
          <BannerHeader>
            <Avatar>
              <img
                src="https://avatars1.githubusercontent.com/u/59237399?s=460&u=8df812cfa0cfe0373e62e95831ff7721d431e6a0&v=4"
                alt="guilherme"
              />
              <span>Guilherme Weissheimer</span>
            </Avatar>

            <button type="button">
              <img src={logoutIcon} alt="logout" />
            </button>
          </BannerHeader>

          <BannerMain>
            <LogoContainer>
              <img src={logoImg} alt="Proffy" />
              <h2>Sua plataforma de estudos online.</h2>
            </LogoContainer>

            <img src={landingImg} alt="Plataforma de estudos" />
          </BannerMain>
        </BannerContent>
      </BannerContainer>

      <Footer>
        <FooterContent>
          <WelcomeBox>
            <span>Seja bem-vindo.</span>
            <strong>O que deseja fazer?</strong>
          </WelcomeBox>

          <MainBox>
            <div>
              <span>
                Total de 285 conexões <br /> já realizadas
              </span>
              <img src={purpleHeartIcon} alt="heart" />
            </div>

            <ButtonsContainer>
              <button type="button">
                <img src={studyIcon} alt="study" />
                Estudar
              </button>
              <button type="button">
                <img src={giveClassesIcon} alt="give-classes" />
                Dar aulas
              </button>
            </ButtonsContainer>
          </MainBox>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Home;
