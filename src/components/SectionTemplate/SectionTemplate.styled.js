import styled from '@emotion/styled';
import productsDesktop from '../../assets/backgroundImages/products-desktop.jpg';
import productsDesktop2x from '../../assets/backgroundImages/products-desktop@2x.jpg';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 1440px) {
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    background-image: ${(props) =>
      props.pathname === '/products' ? `url(${productsDesktop})` : 'none'};
    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: ${(props) =>
        props.pathname === '/products' ? `url(${productsDesktop2x})` : 'none'};
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
