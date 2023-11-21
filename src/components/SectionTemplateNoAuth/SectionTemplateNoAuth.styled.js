import styled from 'styled-components';
import welcomeDesktop from '../../assets/backgroundImages/welcome-desktop.jpg';
import welcomeDesktop2x from '../../assets/backgroundImages/welcome-desktop@2x.jpg';
import welcomeTablet from '../../assets/backgroundImages/welcome-tablet.jpg';
import welcomeTablet2x from '../../assets/backgroundImages/welcome-tablet@2x.jpg';
import welcomeMobile from '../../assets/backgroundImages/welcome-mobile.jpg';
import welcomeMobile2x from '../../assets/backgroundImages/welcome-mobile@2x.jpg';
import signMobile from '../../assets/backgroundImages/sign-mobile.jpg';
import signMobile2x from '../../assets/backgroundImages/sign-mobile@2x.jpg';

const getBackgroundImage = (pathname="", highResolution = false) => {
  if (pathname.includes('/welcome')) {
    return `url(${highResolution ? welcomeMobile2x : welcomeMobile})`;
  } else if (pathname.includes('/signup') || pathname.includes('/signin')) {
    return `url(${highResolution ? signMobile2x : signMobile})`;
  } else {
    return 'none';
  }
};

export const SectionNoAuth = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  width: 100%;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  height: 812px;
  /* padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px; */
  background-image: ${(props) => getBackgroundImage(props.pathname)};

  @media (orientation: portrait) {
    background-repeat: no-repeat;
    background-size: 80%;
  }

  @media only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-repeat: no-repeat;
    background-image: ${(props) => getBackgroundImage(props.pathname, true)};
  }

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-top: 0;
    background-image: url(${welcomeTablet});
    height: 1024px;

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${welcomeTablet2x});
    }
  }

  @media screen and (min-width: 1440px) {
    background-repeat: no-repeat;
    background-image: url(${welcomeDesktop});
    height: 100vh;

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${welcomeDesktop2x});
    }
  }
`;

export const ContainerNoAuth = styled.div`
  height: 100vh;

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
  @media screen and (orientation: portrait) {
    height: 100vh;
  }
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
    height: 100vh;
  }
`;
