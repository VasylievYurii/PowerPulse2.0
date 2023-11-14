import{j as t}from"./index-690cb328.js";import{n}from"./emotion-styled.browser.esm-ef11709b.js";const d="/PowerPulse2.0/assets/products-desktop-75c3a380.jpg",e="/PowerPulse2.0/assets/products-desktop@2x-aa965045.jpg",p=n.section`
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 1440px) {
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    background-image: url(${d});

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${e});
    }
  }
`,o=n.div`
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
`;function s({children:i}){return t.jsx(p,{children:t.jsx(o,{children:i})})}export{s as S};
