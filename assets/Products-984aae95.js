import{r as d,j as e,a as s}from"./index-e7854b5f.js";import{S as p}from"./SectionTemplate-5a254b3c.js";import{n as r}from"./emotion-styled.browser.esm-d12d3c04.js";import{T as x}from"./TitlePage-48305540.js";const h=r.label`
  position: relative;
`,u=r.input`
  width: 100%;

  padding: 14px;
  border-radius: 12px;
  top: calc(50% - 16px / 2);
  right: 14px;
  width: 270px;
  background-color: transparent;
  color: var(--color-text);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 14px;
  transition: border-color 0.3s var(--timing-function);

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
`,g=r.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 14px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,m=r.svg`
  stroke: var(--color-text);
  width: 18px;
  height: 18px;
  transition: stroke 0.3s var(--timing-function);

  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,b=r.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 40px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,v=r.svg`
  stroke: var(--color-main-one);
  width: 18px;
  height: 18px;
`,j=()=>{const[i,o]=d.useState(""),a=t=>{const{value:n}=t.target;o(n)},c=t=>{t.preventDefault();const n=t.target.elements[0].value;o(n)},l=()=>{o("")};return e.jsx(e.Fragment,{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("form",{onSubmit:c,children:e.jsxs(h,{children:[e.jsx(u,{type:"text",name:"productsSearch",placeholder:"Search",value:i,onChange:a}),i&&e.jsx(b,{type:"button",onClick:l,children:e.jsx(v,{children:e.jsx("use",{href:s+"#icon-cross"})})}),e.jsx(g,{type:"submit",children:e.jsx(m,{children:e.jsx("use",{href:s+"#icon-search"})})})]})})}),e.jsx("li",{children:e.jsx("div",{})}),e.jsx("li",{children:e.jsx("div",{})})]})})},y=()=>e.jsxs(p,{children:[e.jsx(x,{children:"Products page"}),e.jsx(j,{})]});export{y as default};
