import{s as o,ai as e}from"./index-183fb21e.js";import{F as r}from"./index.esm-32e6db1a.js";const p=o(r)`
  font-size: 14px;
  line-height: 18px;
  max-width: 335px;
  width: 100%;
  height: 46px;
  border-radius: 12px;
  border: ${i=>i.border||"1px solid rgba(239, 237, 232, 0.3)"};
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 14px;
  align-items: center;
  color: var(--color-text);
  background-color: transparent;
  transition: border 0.3s var(--timing-function);
  /* &:valid{
    border: 1px solid var(--color-approved-one);
} */
  &:hover,
  &:focus {
    /* border: 1px solid var(--color-main-one); */
    outline: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    max-width: 364px;
    height: 52px;
  }
`,l=o.div`
  color: ${i=>i.color||"var(--color-wrong-one)"};
  margin-top: 4px;
  /* margin-left: 4px; */
  line-height: 1.5;
  letter-spacing: 0.12px;
`,d=o.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,s=o.svg`
  width: 20px;
  height: 20px;
  stroke: var(--color-text);
  cursor: pointer;
`,x=o.svg`
  width: 16px;
  height: 16px;
  margin-top: 4px;
  fill: ${i=>i.fill||"var(--color-wrong-one)"};
`,c=o.div`
  display: flex;
  gap: 4px;
`,g=o.label`
  position: relative;
`,m=o.div`
  position: absolute;
  display: flex;
  top: calc(50% - 20px / 2);
  align-items: center;
  right: 14px;
`,h=o.button`
  display: block;
  padding: 12px 40px;
  margin-top: 28px;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
  background-color: var(--color-main-one);
  border-radius: 12px;
  border: 1px solid var(--color-main-one);
  cursor: pointer;
  transition: border 0.3s var(--timing-function);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
    padding: 16px 60px;
    margin-top: 64px;
  }
`;function v(i){let t;return i?/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(i)||(t="Invalid email address"):t="Required",t}const b=o.h1`
  font-size: 24px;
  line-height: 1.16;
  color: var(--color-text);
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 16px;
  }
`,f=o.p`
  font-size: 14px;
  line-height: 1.28;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
    max-width: 496px;
  }
`,u=o(e)`
  line-height: 1.5;
  color: var(--color-text);
  text-decoration: underline;
`,w=o.p`
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
  margin-top: 12px;
  /* margin-bottom: ${i=>i.$margin?"121px":"35px"}; */

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    /* margin-bottom: ${i=>i.$margin?"135px":"39px"}; */
  }
`;export{h as B,l as E,p as I,g as L,u as N,f as P,x as S,b as T,d as W,c as a,m as b,s as c,w as d,v};
