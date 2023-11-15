import{s as o,j as e}from"./index-7e9e4693.js";const t="/PowerPulse2.0/assets/welcome-desktop-273a83a8.jpg",i="/PowerPulse2.0/assets/welcome-desktop@2x-902fa55c.jpg",a="/PowerPulse2.0/assets/welcome-tablet-35c3dbb9.jpg",d="/PowerPulse2.0/assets/welcome-tablet@2x-e852773e.jpg",s="/PowerPulse2.0/assets/welcome-mobile-6771fa4f.jpg",p="/PowerPulse2.0/assets/welcome-mobile@2x-ec2a5429.jpg",r=o.section`
  margin: 0 auto;
  width: 100%;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  background-image: url(${s});

  @media only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${p});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${a});

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${d});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${t});
    height: 100vh;
    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${i});
    }
  }
`,l=o.div`
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
`;function m({children:n}){return e.jsx(r,{children:e.jsx(l,{children:n})})}export{m as S};
