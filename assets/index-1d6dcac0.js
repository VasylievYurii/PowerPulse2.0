import{s as o,j as e,Q as c,c as p,u as h,r as i,R as m,S as g,T as u}from"./index-95a78aca.js";import{T as j}from"./TitlePage-cb256f78.js";import{B as f}from"./BasicModalWindow-92ed62fe.js";const b=o.h3`
  color: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,s=({children:t})=>e.jsx(b,{children:t}),y=o.div`
  padding-top: 48px;
  padding-bottom: 48px;
`,v=o.h1`
  color: var(--color-text);
  font-size: 24px;
  margin-bottom: 16px;
  margin-top: 27px;
`,E=o(c)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`,k=o.button`
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
`,n=o.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;

  > span {
    color: var(--color-main-one);
  }
`,w=o.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`,S=o.svg`
  stroke: rgba(239, 237, 232, 0.3);
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,T=o.img`
  width: 118px;
  height: 73px;
  margin: 0 auto;
`,C="/PowerPulse2.0/assets/thumb_up_color-00c95acb.png",z=({onClick:t})=>{const r=()=>{t()};return e.jsxs(y,{children:[e.jsx(T,{src:C,alt:"Thumb up",loading:"lazy"}),e.jsx(v,{children:"Well done"}),e.jsxs(w,{children:[e.jsxs(n,{children:["Your time: ",e.jsx("span",{children:"3 minutes"})]}),e.jsxs(n,{children:["Burned calories: ",e.jsx("span",{children:"250"})]})]}),e.jsx(k,{onClick:r,children:"Next Exercise"}),e.jsxs(E,{to:"/diary",children:[e.jsx(n,{children:"To the diary"}),e.jsx(S,{children:e.jsx("use",{href:`${p}#icon-arrow`})})]})]})},M=o.ul`
  display: flex;
  justify-content: end;
  gap: 28px;
`,l=o(c)`
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
`,B=()=>{const t=h(),[r,x]=i.useState(!1),a=()=>{x(d=>!d)};return i.useEffect(()=>{t(m())},[t]),e.jsxs(g,{children:[e.jsx(j,{children:"Exercises"}),e.jsxs(M,{children:[e.jsx("li",{children:e.jsx(l,{to:"bodyparts",children:e.jsx(s,{children:"Body parts"})})}),e.jsx("li",{children:e.jsx(l,{to:"muscles",children:e.jsx(s,{children:"Muscles"})})}),e.jsx("li",{children:e.jsx(l,{to:"equipment",children:e.jsx(s,{children:"Equipment"})})})]}),e.jsxs(i.Suspense,{fallback:e.jsx("p",{children:"Loader"}),children:[r&&e.jsx(f,{onClick:a,children:e.jsx(z,{onClick:a})}),e.jsx(u,{})]})]})},O=B;export{O as default};
