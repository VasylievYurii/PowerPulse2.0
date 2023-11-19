import styled from '@emotion/styled';
import productsDesktop from '../../assets/backgroundImages/products-desktop.jpg';
import productsDesktop2x from '../../assets/backgroundImages/products-desktop@2x.jpg';
import welcomeDesktop from '../../assets/backgroundImages/welcome-png.png';
import welcomeDesktop2x from '../../assets/backgroundImages/welcome-png@2x.png';

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 1440px) {
    background-repeat: no-repeat;
    background-position: right bottom;
    background-position-y: calc(100% + 50px);
    background-size: contain;
    background-image: ${(props) =>
      props.pathname.includes('exercises/Equipment') ||
      props.pathname.includes('/exercises/Muscles') ||
      props.pathname.includes('exercises/Body')
        ? `url(${welcomeDesktop})`
        : props.pathname === '/products'
        ? `url(${productsDesktop})`
        : 'none'};
    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: ${(props) =>
        props.pathname === '/products'
          ? `url(${productsDesktop2x})`
          : props.pathname.includes('exercises/Equipment') ||
            props.pathname.includes('/exercises/Muscles') ||
            props.pathname.includes('exercises/Body')
          ? `url(${welcomeDesktop2x})`
          : 'none'};
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
