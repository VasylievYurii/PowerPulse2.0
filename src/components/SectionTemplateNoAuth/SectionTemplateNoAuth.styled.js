import styled from 'styled-components';
import welcomeDesktop from '../../assets/backgroundImages/welcome-desktop.jpg';
import welcomeDesktop2x from '../../assets/backgroundImages/welcome-desktop@2x.jpg';
import welcomeTablet from '../../assets/backgroundImages/welcome-tablet.jpg';
import welcomeTablet2x from '../../assets/backgroundImages/welcome-tablet@2x.jpg';
import welcomeMobile from '../../assets/backgroundImages/welcome-mobile.jpg';
import welcomeMobile2x from '../../assets/backgroundImages/welcome-mobile@2x.jpg';

export const SectionNoAuth = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  background-image: url(${welcomeMobile});

  @media only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${welcomeMobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${welcomeTablet});

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${welcomeTablet2x});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${welcomeDesktop});

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${welcomeDesktop2x});
    }
  }
`;

export const ContainerNoAuth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 375px;
  margin: 0 auto;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  padding-bottom: 40px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    flex-direction: row;
  }
`;
