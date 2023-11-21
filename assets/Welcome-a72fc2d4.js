import{s as e,j as o,L as t,a as r,b as n}from"./index-183fb21e.js";import{S as s,a,b as p,W as d}from"./WelcomeStats-48dae178.js";const l=e.h1`
  width: 335px;
  margin-bottom: 40px;
  font-size: 38px;
  font-weight: 500;
  line-height: 1.05; /* 105.263% */
  letter-spacing: 0.38px;

  @media screen and (min-width: 768px) {
    width: 598px;
    margin-bottom: 64px;
    font-size: 70px;
    line-height: 1.11; /* 111.429% */
    letter-spacing: 0.7px;
  }
  > span {
    position: relative;
    z-index: 1;
  }
`,c=e.svg`
  position: absolute;
  width: 98px;
  height: 98px;
  left: 0;
  top: 0;
  transform: translate(-5%, -26%);
  fill: transparent;
  stroke: var(--color-main-one);
  z-index: -1;
  @media screen and (min-width: 768px) {
    width: 185px;
    height: 185px;
  }
`,x=e.div`
  display: flex;
  gap: 14px;
  /* margin-bottom: 231px; */

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,i=e.button`
  display: block;
  min-width: 136px;
  padding: 12px 40px;
  text-align: center;
  font-size: 16px;
  color: var(--color-text);
  border-radius: 12px;
  cursor: pointer;
  transition: border 0.3s var(--timing-function);

  @media screen and (min-width: 768px) {
    min-width: 190px;
    padding: 16px 60px;
    font-size: 20px;
  }
`,m=e(i)`
  background-color: var(--color-main-one);
  border: 1px solid var(--color-main-one);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }
`,h=e(i)`
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);

  &:hover,
  &:focus {
    border: 1px solid var(--color-main-one);
  }
`,b=()=>o.jsxs(s,{children:[o.jsxs(a,{children:[o.jsx(t,{}),o.jsxs(p,{children:[o.jsxs(l,{children:["Transforming your"," ",o.jsxs("span",{children:["body",o.jsx(c,{children:o.jsx("use",{href:`${r}#icon-line`})})," "]}),"shape with Power Pulse"]}),o.jsxs(x,{children:[o.jsx(n,{to:"/signup",children:o.jsx(m,{children:"Sign Up"})}),o.jsx(n,{to:"/signin",children:o.jsx(h,{children:"Sign In"})})]})]})]}),o.jsx(d,{})]});export{b as default};
