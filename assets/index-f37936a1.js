import{s as i,j as e,R as a,r,S as d,B as x,T as p,U as h}from"./index-8744f8e7.js";import{T as j}from"./TitlePage-0f4e796e.js";const u=i.h3`
  color: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,t=({children:s})=>e.jsx(u,{children:s}),m=i.ul`
  display: flex;
  justify-content: end;
  gap: 28px;
`,o=i(a)`
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
`,f=()=>{const[s,l]=r.useState(!1),n=()=>{l(c=>!c)};return e.jsxs(d,{children:[e.jsx(j,{children:"Exercises"}),e.jsxs(m,{children:[e.jsx("li",{children:e.jsx(o,{to:"bodyparts",children:e.jsx(t,{children:"Body parts"})})}),e.jsx("li",{children:e.jsx(o,{to:"muscles",children:e.jsx(t,{children:"Muscles"})})}),e.jsx("li",{children:e.jsx(o,{to:"equipment",children:e.jsx(t,{children:"Equipment"})})})]}),e.jsxs(r.Suspense,{fallback:e.jsx("p",{children:"Loader"}),children:[s&&e.jsx(x,{onClick:n,children:e.jsx(p,{onClick:n})}),e.jsx(h,{})]})]})},k=f;export{k as default};
