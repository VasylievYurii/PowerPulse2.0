import{s as r,r as l,j as e,a as i}from"./index-2451c343.js";import{S as p}from"./SectionTemplate-181451fb.js";import"./emotion-styled.browser.esm-45ff11c2.js";const x=r.label`
  position: relative;
`,h=r.input`
  width: 100%;
  

  padding: 14px;
  border-radius: 12px;
  top: calc(50% - 16px / 2);
  right: 14px; */
  width: 270px;
  background-color: transparent;
  color: var(--color-text);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 14px;

  @media screen and (min-width: 375px) {
    box-sizing: border-box;
    width: 335px;
    height: 46px;
    padding: 14px;
    padding-right: 68px;
    background-color: transparent;
    color: var(--color-text);
    font-size: 14px;
    line-height: 18px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    height: 52px;

  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    outline: none;
   border-color: var(--color-main-one);
  }

  &::placeholder {
    color: var(--color-text);
  }
`,u=r.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 14px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,g=r.svg`
  stroke: var(--color-main-one);
  width: 18px;
  height: 18px;
`,b=r.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 40px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,m=r.svg`
  stroke: var(--color-main-one);
  width: 18px;
  height: 18px;
`,j=()=>{const[s,o]=l.useState(""),a=t=>{const{value:n}=t.target;o(n)},c=t=>{t.preventDefault();const n=t.target.elements[0].value;o(n)},d=()=>{o("")};return e.jsx(e.Fragment,{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("form",{onSubmit:c,children:e.jsxs(x,{children:[e.jsx(h,{type:"text",name:"productsSearch",placeholder:"Search",value:s,onChange:a}),s&&e.jsx(b,{type:"button",onClick:d,children:e.jsx(m,{children:e.jsx("use",{href:i+"#icon-cross"})})}),e.jsx(u,{type:"submit",children:e.jsx(g,{children:e.jsx("use",{href:i+"#icon-search"})})})]})})}),e.jsx("li",{children:e.jsx("div",{})}),e.jsx("li",{children:e.jsx("div",{})})]})})},w=()=>e.jsxs(p,{children:[e.jsx("p",{children:"Products page"}),e.jsx(j,{})]});export{w as default};
