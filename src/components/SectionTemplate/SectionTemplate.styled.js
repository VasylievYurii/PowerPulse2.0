import styled from '@emotion/styled';
import productsDesktop from '../../assets/backgroundImages/products-desktop.jpg';
import productsDesktop2x from '../../assets/backgroundImages/products-desktop@2x.jpg';
import welcomeDesktop from '../../assets/backgroundImages/welcome-png.png';
import welcomeDesktop2x from '../../assets/backgroundImages/welcome-png@2x.png';

const getBackgroundImage = (pathname) => {
  if (
    pathname.includes('exercises/Equipment') ||
    pathname.includes('/exercises/Muscles') ||
    pathname.includes('exercises/Body')
  ) {
    return `url(${welcomeDesktop})`;
  } else if (pathname === '/products') {
    return `url(${productsDesktop})`;
  } else {
    return 'none';
  }
};

const getHighResBackgroundImage = (pathname) => {
  if (pathname === '/products') {
    return `url(${productsDesktop2x})`;
  } else if (
    pathname.includes('exercises/Equipment') ||
    pathname.includes('/exercises/Muscles') ||
    pathname.includes('exercises/Body')
  ) {
    return `url(${welcomeDesktop2x})`;
  } else {
    return 'none';
  }
};

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 1440px) {
    background-repeat: no-repeat;
    background-position: right bottom;
    /* background-position-y: calc(100% + 50px); */
    background-size: contain;
    background-image: ${(props) => getBackgroundImage(props.pathname)};

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: ${(props) => getHighResBackgroundImage(props.pathname)};
    }
  }
`;

export const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    padding-right: 96px;
  }
`;
