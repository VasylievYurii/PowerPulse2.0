import{s as n,j as o,L as e,a as i}from"./index-653a0c87.js";import{S as t}from"./SectionTemplate-4f62f499.js";import{W as s}from"./WelcomeStats-e3184c05.js";import"./emotion-styled.browser.esm-bf83a8f6.js";const a=n.h1`
  width: 335px;
  margin-bottom: 40px;
  font-size: 38px;
  font-weight: 500;
  line-height: 1.05; /* 105.263% */
  letter-spacing: 0.38px;

  @media screen and (min-width: 768px) {
    width: 598px;
    font-size: 70px;
    line-height: 1.11; /* 111.429% */
    letter-spacing: 0.7px;
  }
`,p=n.div`
  display: flex;
  gap: 14px;
  margin-bottom: 231px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,r=n.button`
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
`,d=n(r)`
  background-color: var(--color-main-one);
  border: 1px solid var(--color-main-one);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }
`,c=n(r)`
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);

  &:hover,
  &:focus {
    border: 1px solid var(--color-main-one);
  }
`,h=()=>o.jsxs(t,{children:[o.jsx(e,{}),o.jsx(a,{children:"Transforming your body shape with Power Pulse"}),o.jsxs(p,{children:[o.jsx(i,{to:"/signup",children:o.jsx(d,{children:"Sign Up"})}),o.jsx(i,{to:"/signin",children:o.jsx(c,{children:"Sign In"})})]}),o.jsx(s,{})]});export{h as default};
