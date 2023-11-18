import{s as n,j as o,L as r,a as e}from"./index-d1ec7669.js";import{S as t,a as s,b as a,W as p}from"./WelcomeStats-e2a17db2.js";const d=n.h1`
  /* width: 335px; */
  /* margin-bottom: 40px; */
  font-size: 38px;
  font-weight: 500;
  line-height: 1.05; /* 105.263% */
  letter-spacing: 0.38px;

  @media screen and (min-width: 768px) {
    /* width: 598px; */
    margin-bottom: 64px;
    font-size: 70px;
    line-height: 1.11; /* 111.429% */
    letter-spacing: 0.7px;
  }
`,c=n.div`
  display: flex;
  gap: 14px;
  /* margin-bottom: 231px; */

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,i=n.button`
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
`,x=n(i)`
  background-color: var(--color-main-one);
  border: 1px solid var(--color-main-one);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }
`,l=n(i)`
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);

  &:hover,
  &:focus {
    border: 1px solid var(--color-main-one);
  }
`,g=()=>o.jsxs(t,{children:[o.jsxs(s,{children:[o.jsx(r,{}),o.jsxs(a,{children:[o.jsx(d,{children:"Transforming your body shape with Power Pulse"}),o.jsxs(c,{children:[o.jsx(e,{to:"/signup",children:o.jsx(x,{children:"Sign Up"})}),o.jsx(e,{to:"/signin",children:o.jsx(l,{children:"Sign In"})})]})]})]}),o.jsx(p,{})]});export{g as default};
