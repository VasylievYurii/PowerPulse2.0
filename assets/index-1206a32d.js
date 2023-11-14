import{s as n,j as s,w as l,r as c,a as e,O as a}from"./index-a1e800b4.js";import{S as x}from"./SectionTemplate-0d467b4b.js";import{T as p}from"./TitlePage-d4b32899.js";import"./emotion-styled.browser.esm-795b9ed4.js";const h=n.h3`
  color: var(--color-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,r=({children:t})=>s.jsx(h,{children:t}),d=n.ul`
  display: flex;
  gap: 28px;
`,j=n.button``,m=()=>{var o;const t=l(),i=c.useRef(((o=t.state)==null?void 0:o.from)??"/");return s.jsxs(x,{children:[s.jsx(e,{to:i.current,children:s.jsx(j,{children:"Go Back"})}),s.jsx(p,{children:"Exercises"}),s.jsxs(d,{children:[s.jsx("li",{children:s.jsxs(e,{to:"bodyparts",children:[" ",s.jsx(r,{children:"Body parts"})]})}),s.jsx("li",{children:s.jsxs(e,{to:"muscles",children:[" ",s.jsx(r,{children:"Muscles"})]})}),s.jsx("li",{children:s.jsx(e,{to:"equipment",children:s.jsx(r,{children:"Equipment"})})})]}),s.jsx(c.Suspense,{fallback:s.jsx("p",{children:"Loader"}),children:s.jsx(a,{})})]})},b=m;export{b as default};
