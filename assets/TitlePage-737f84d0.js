import{j as n,s as i}from"./index-c42c58ce.js";import{n as e}from"./emotion-styled.browser.esm-48d8374f.js";const o="/PowerPulse2.0/assets/products-desktop-75c3a380.jpg",d="/PowerPulse2.0/assets/products-desktop@2x-aa965045.jpg",a=e.section`
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 1440px) {
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    background-image: url(${o});

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${d});
    }
  }
`,p=e.div`
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
`;function x({children:t}){return n.jsx(a,{children:n.jsx(p,{children:t})})}const s=i.h2`
    color: var(--color-text);
    font-size: 24px;
    font-weight: 700;
    line-height: 1.17;
    margin: 0;

    @media screen and (min-width: 768px) {
        font-size: 32px;
        line-height: 1.38;
    }
`,c=({children:t})=>n.jsx(s,{children:t});export{x as S,c as T};
