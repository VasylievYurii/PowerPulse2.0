import{s as n,j as s,y as l,r,u as x,z as h,a as e,O as p}from"./index-6acb7ccd.js";import{S as d,T as j}from"./TitlePage-3faf7bf1.js";import"./emotion-styled.browser.esm-d6b44482.js";const u=n.h3`
  color: var(--color-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,c=({children:t})=>s.jsx(u,{children:t}),m=n.ul`
  display: flex;
  gap: 28px;
`,f=n.button``,E=()=>{var o;const t=l(),a=r.useRef(((o=t.state)==null?void 0:o.from)??"/"),i=x();return r.useEffect(()=>{i(h())},[i]),s.jsx(s.Fragment,{children:s.jsxs(d,{children:[s.jsx(e,{to:a.current,children:s.jsx(f,{children:"Go Back"})}),s.jsx(j,{children:"Exercises"}),s.jsxs(m,{children:[s.jsx("li",{children:s.jsxs(e,{to:"bodyparts",children:[" ",s.jsx(c,{children:"Body parts"})]})}),s.jsx("li",{children:s.jsxs(e,{to:"muscles",children:[" ",s.jsx(c,{children:"Muscles"})]})}),s.jsx("li",{children:s.jsx(e,{to:"equipment",children:s.jsx(c,{children:"Equipment"})})})]}),s.jsx(r.Suspense,{fallback:s.jsx("p",{children:"Loader"}),children:s.jsx(p,{})})]})})},b=E;export{b as default};
