import{s as o,j as e,P as x,c as m,Q as g,r as s,a as u,R as j}from"./index-3305c68b.js";import{S as f,T as b}from"./TitlePage-07fb642a.js";import{B as k}from"./BasicModalWindow-255a715d.js";const v=o.h3`
  color: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,i=({children:t})=>e.jsx(v,{children:t}),y=o.ul`
  display: flex;
  gap: 28px;
`,E=o.button``,c=o(x)`
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
`,w=o.div`
  padding-top: 48px;
  padding-bottom: 48px;
`,S=o.h1`
  color: var(--color-text);
  font-size: 24px;
  margin-bottom: 16px;
  margin-top: 27px;
`,C=o(x)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`,T=o.button`
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
`,a=o.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;

  > span {
    color: var(--color-main-one);
  }
`,z=o.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`,B=o.svg`
  stroke: var(--color-text);
  width: 16px;
  height: 16px;
  margin-left: 6px;
`,L=o.img`
  width: 118px;
  height: 73px;
  margin: 0 auto;
`,M="/PowerPulse2.0/assets/thumb_up_color-4c14e30e.png",P=({onClick:t})=>{const r=()=>{t()};return e.jsxs(w,{children:[e.jsx(L,{src:M,alt:"Thumb up"}),e.jsx(S,{children:"Well done"}),e.jsxs(z,{children:[e.jsxs(a,{children:["Your time: ",e.jsx("span",{children:"3 minutes"})]}),e.jsxs(a,{children:["Burned calories: ",e.jsx("span",{children:"250"})]})]}),e.jsx(T,{onClick:r,children:"Next Exercise"}),e.jsxs(C,{to:"/diary",children:[e.jsx("span",{children:" To the diary"}),e.jsx(B,{children:e.jsx("use",{href:`${m}#icon-arrow`})})]})]})},W=()=>{var l;const t=g(),r=s.useRef(((l=t.state)==null?void 0:l.from)??"/"),[d,p]=s.useState(!1),n=()=>{p(h=>!h)};return e.jsxs(e.Fragment,{children:[e.jsx(ExercisesItem,{}),e.jsxs(f,{children:[e.jsx(u,{to:r.current,children:e.jsx(E,{children:"Go Back"})}),e.jsx(b,{children:"Exercises"}),e.jsxs(y,{children:[e.jsx("li",{children:e.jsxs(c,{to:"bodyparts",children:[" ",e.jsx(i,{children:"Body parts"})]})}),e.jsx("li",{children:e.jsxs(c,{to:"muscles",children:[" ",e.jsx(i,{children:"Muscles"})]})}),e.jsx("li",{children:e.jsx(c,{to:"equipment",children:e.jsx(i,{children:"Equipment"})})})]}),e.jsxs(s.Suspense,{fallback:e.jsx("p",{children:"Loader"}),children:[e.jsx("button",{onClick:n,children:"Add to diary"}),d&&e.jsx(k,{onClick:n,children:e.jsx(P,{onClick:n})}),e.jsx(j,{})]})]})]})},O=W;export{O as default};
