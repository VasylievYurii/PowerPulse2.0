import{s,j as e,Q as m,c as g,b,R as v,u as y,r as o,S as w,a as k,T as E}from"./index-22ed33f1.js";import{S,T}from"./TitlePage-1a513025.js";import{B as z}from"./BasicModalWindow-217779de.js";const I=s.h3`
  color: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,l=({children:r})=>e.jsx(I,{children:r}),W=s.ul`
  display: flex;
  gap: 28px;
`,C=s.button``,x=s(m)`
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
`,d=s.div`
  display: flex;
  gap: 4px;
`,p=s.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
`,h=s.p`
  color: rgba(239, 237, 232, 1);
  font-size: 12px;
  font-weight: 400;
`,B=s.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`,L=s.div`
  display: flex;
  gap: 175px;
  margin-bottom: 36px;
`,M=s.p`
  color: rgba(230, 83, 60, 1);
  font-size: 14px;
  font-weight: 400;
`,N=s.p`
  color: rgba(239, 237, 232, 1);
  font-size: 20px;
  font-weight: 400;
`,O=s.div`
  padding: 16px;
  width: 335px;
  height: 141px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
`,R=s.svg`
  width: 24px;
  height: 24px;
  fill: rgba(239, 237, 232, 1);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 50%;
  background: rgba(239, 160, 130, 1);
  padding-top: 3px;
  padding-left: 2px;
`,$=s.div`
  display: flex;
  gap: 16px;
`,A=s.div`
  display: flex;
  gap: 8px;
`,P=s.svg`
  padding-top: 3px;
  width: 20px;
  height: 20px;
`,U=({calories:r,target:t,NameBodyPart:i,equipment:n})=>e.jsxs(O,{children:[e.jsxs(L,{children:[e.jsx("p",{children:"WORKOUT"}),e.jsxs(A,{children:[e.jsx(M,{children:"Start"}),e.jsx(P,{children:e.jsx("use",{href:`${g}#icon-arrow`,height:24,width:24})})]})]}),e.jsxs($,{children:[e.jsx(R,{children:e.jsx("use",{href:`${g}#icon-run`,height:17,width:17})}),e.jsx(N,{children:n})]}),e.jsxs(B,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Burned calories:"}),e.jsx(h,{children:r})]}),e.jsxs(d,{children:[e.jsx(p,{children:"Body part:"}),e.jsx(h,{children:i})]}),e.jsxs(d,{children:[e.jsx(p,{children:"Target:"}),e.jsx(h,{children:t})]})]})]}),q=s.div`
  padding-top: 48px;
  padding-bottom: 48px;
`,G=s.h1`
  color: var(--color-text);
  font-size: 24px;
  margin-bottom: 16px;
  margin-top: 27px;
`,H=s(m)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`,_=s.button`
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
`,u=s.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;

  > span {
    color: var(--color-main-one);
  }
`,D=s.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`,F=s.svg`
  stroke: var(--color-text);
  width: 16px;
  height: 16px;
  margin-left: 6px;
`,K=s.img`
  width: 118px;
  height: 73px;
  margin: 0 auto;
`,Q="/PowerPulse2.0/assets/thumb_up_color-00c95acb.png",V=({onClick:r})=>{const t=()=>{r()};return e.jsxs(q,{children:[e.jsx(K,{src:Q,alt:"Thumb up"}),e.jsx(G,{children:"Well done"}),e.jsxs(D,{children:[e.jsxs(u,{children:["Your time: ",e.jsx("span",{children:"3 minutes"})]}),e.jsxs(u,{children:["Burned calories: ",e.jsx("span",{children:"250"})]})]}),e.jsx(_,{onClick:t,children:"Next Exercise"}),e.jsxs(H,{to:"/diary",children:["To the diary",e.jsx(F,{children:e.jsx("use",{href:`${g}#icon-arrow`})})]})]})},Y=()=>{var j;b(a=>a.exercises);const r=v(),t=y(),i=o.useRef(((j=r.state)==null?void 0:j.from)??"/"),[n,f]=o.useState(!1),c=()=>{f(a=>!a)};return o.useEffect(()=>{t(w())},[t]),e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsxs(S,{children:[e.jsx(k,{to:i.current,children:e.jsx(C,{children:"Go Back"})}),e.jsx(T,{children:"Exercises"}),e.jsxs(W,{children:[e.jsx("li",{children:e.jsxs(x,{to:"bodyparts",children:[" ",e.jsx(l,{children:"Body parts"})]})}),e.jsx("li",{children:e.jsxs(x,{to:"muscles",children:[" ",e.jsx(l,{children:"Muscles"})]})}),e.jsx("li",{children:e.jsx(x,{to:"equipment",children:e.jsx(l,{children:"Equipment"})})})]}),e.jsxs(o.Suspense,{fallback:e.jsx("p",{children:"Loader"}),children:[e.jsx("button",{onClick:c,children:"Add to diary"}),n&&e.jsx(z,{onClick:c,children:e.jsx(V,{onClick:c})}),e.jsx(E,{})]})]})]})},ee=Y;export{ee as default};
