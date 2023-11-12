import{a as o,j as e,v as a,w as d,b as s,x as r}from"./index-460f8758.js";import{n as t}from"./emotion-styled.browser.esm-1e32d947.js";const p=t.div`
  position: relative;
  /*  background-image: */
  color: #efede8;
  background-repeat: no-repeat;
  background-position: bottom 0 right -40%;
  margin: 0 auto;
  position: relative;
  /* height: 100vh; */

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
    background-color: rgba(0, 0, 0, 1);
    /* background-image:  */
    background-position: bottom 0 right 0%;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 800px;
    /* background-image:  */
  }
`,c=t.div`
  background: #e6533c;
  max-width: calc(64%);
  height: 100%;
  box-sizing: border-box;
  padding: 24px 20px;
  display: flex;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 420px;
    padding: 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 669px;
    padding: 32px 96px;
  }
`,h=t.div`
  margin-top: auto;
  margin-bottom: auto;
`,x=t.h1`
  font-size: 66px;
  line-height: 1;
  letter-spacing: 0.66px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: calc(150 / 160);
    letter-spacing: 1.6px;
  }
`,l=t.p`
  width: 200px;
  font-size: 14px;
  margin-top: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 356px;
    font-size: 16px;
    margin-top: 28px;
    line-height: calc(24 / 16);
  }

  @media screen and (min-width: 1440px) {
    width: 477px;
  }
`,g=t(o)`
  position: absolute;
  left: 32px;
  top: 32px;

  @media screen and (min-width: 1440px) {
    left: 96px;
  }
`;t.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`;const m=({onClick:i})=>{const n=()=>{i()};return e.jsxs(a,{to:"/welcome",onClick:n,children:[e.jsx("span",{children:"Logout"}),e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-logout`})})]})},b=()=>{const i=r(),n=()=>{i("/")};return console.log("404"),e.jsxs(p,{children:[e.jsx(g,{to:"/"}),e.jsx(c,{children:e.jsxs(h,{children:[e.jsx(x,{children:"404"}),e.jsx(l,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(m,{className:"Button",text:"Go Home",type:"button",onClick:n})]})})]})};export{b as default};
