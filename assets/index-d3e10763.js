import{s as o,j as e,Q as d,c as u,b as g,R as j,u as f,r,S as b,T as k,a as v,U as y}from"./index-03e35c6b.js";import{S as E,T as S}from"./TitlePage-acfc71fd.js";import{B as w}from"./BasicModalWindow-d422ea68.js";const T=o.h3`
  color: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,c=({children:t})=>e.jsx(T,{children:t}),C=o.ul`
  display: flex;
  gap: 28px;
`,z=o.button``,a=o(d)`
  position: relative;
  display: block;
  color: rgba(239, 237, 232, 0.4);

  &.active {
    color: var(--color-text);

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background-color: var(--color-main-one);
      border-radius: 2px;
    }
  }
`,B=o.div`
  padding-top: 48px;
  padding-bottom: 48px;
`,L=o.h1`
  color: var(--color-text);
  font-size: 24px;
  margin-bottom: 16px;
  margin-top: 27px;
`,M=o(d)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`,W=o.button`
  display: block;
  padding: 12px 32px;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
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
    font-size: 16px;
    line-height: 1.5;
    padding: 14px 32px;
    margin-top: 32px;
  }
`,x=o.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;

  > span {
    color: var(--color-main-one);
  }
`,A=o.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`,I=o.svg`
  stroke: var(--color-text);
  width: 16px;
  height: 16px;
  margin-left: 6px;
`,N=o.img`
  width: 118px;
  height: 73px;
  margin: 0 auto;
`,O="/PowerPulse2.0/assets/thumb_up_color-00c95acb.png",P=({onClick:t})=>{const s=()=>{t()};return e.jsxs(B,{children:[e.jsx(N,{src:O,alt:"Thumb up"}),e.jsx(L,{children:"Well done"}),e.jsxs(A,{children:[e.jsxs(x,{children:["Your time: ",e.jsx("span",{children:"3 minutes"})]}),e.jsxs(x,{children:["Burned calories: ",e.jsx("span",{children:"250"})]})]}),e.jsx(W,{onClick:s,children:"Next Exercise"}),e.jsxs(M,{to:"/diary",children:["To the diary",e.jsx(I,{children:e.jsx("use",{href:`${u}#icon-arrow`})})]})]})},R=()=>{var l;g(n=>n.exercises);const t=j(),s=f(),p=r.useRef(((l=t.state)==null?void 0:l.from)??"/"),[h,m]=r.useState(!1),i=()=>{m(n=>!n)};return r.useEffect(()=>{s(b())},[s]),e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsxs(E,{children:[e.jsx(v,{to:p.current,children:e.jsx(z,{children:"Go Back"})}),e.jsx(S,{children:"Exercises"}),e.jsxs(C,{children:[e.jsx("li",{children:e.jsxs(a,{to:"bodyparts",children:[" ",e.jsx(c,{children:"Body parts"})]})}),e.jsx("li",{children:e.jsxs(a,{to:"muscles",children:[" ",e.jsx(c,{children:"Muscles"})]})}),e.jsx("li",{children:e.jsx(a,{to:"equipment",children:e.jsx(c,{children:"Equipment"})})})]}),e.jsxs(r.Suspense,{fallback:e.jsx("p",{children:"Loader"}),children:[e.jsx("button",{onClick:i,children:"Add to diary"}),h&&e.jsx(w,{onClick:i,children:e.jsx(P,{onClick:i})}),e.jsx(y,{})]})]})]})},_=R;export{_ as default};
