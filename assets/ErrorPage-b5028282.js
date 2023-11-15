import{a,u as s,j as e,R as d,S as r,c as p,l as c,T as h}from"./index-7e9e4693.js";import{n as t}from"./emotion-styled.browser.esm-6d2752d9.js";import{S as x}from"./SectionTemplateNoAuth-7147f12a.js";const l=t.div`
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
`,m=t.div`
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
`,g=t.div`
  margin-top: auto;
  margin-bottom: auto;
`,u=t.h1`
  font-size: 66px;
  line-height: 1;
  letter-spacing: 0.66px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: calc(150 / 160);
    letter-spacing: 1.6px;
  }
`,w=t.p`
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
`,f=t(a)`
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
`;const b=({onClick:i})=>{const n=s(),o=()=>{n(c()),i()};return e.jsxs(d,{to:"/welcome",onClick:o,children:[e.jsx("span",{children:"Logout"}),e.jsx(r,{children:e.jsx("use",{href:`${p}#icon-logout`})})]})},y=()=>{const i=h(),n=()=>{i("/")};return console.log("404"),e.jsxs(x,{children:[" ",e.jsxs(l,{children:[e.jsx(f,{to:"/"}),e.jsx(m,{children:e.jsxs(g,{children:[e.jsx(u,{children:"404"}),e.jsx(w,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(b,{className:"Button",text:"Go Home",type:"button",onClick:n})]})})]})]})};export{y as default};
