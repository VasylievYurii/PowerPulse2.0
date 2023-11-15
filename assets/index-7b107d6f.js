import{s as o,j as s,b as p,C as h,r,u as d,D as j,a as e,O as u}from"./index-094429ac.js";import{S as m,T as f}from"./TitlePage-a911d479.js";import{E}from"./ExercisesItem-f5f31ad1.js";import"./emotion-styled.browser.esm-321706ac.js";const g=o.h3`
  color: var(--color-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,c=({children:t})=>s.jsx(g,{children:t}),k=o.ul`
  display: flex;
  gap: 28px;
`,b=o.button``,y=()=>{var i;const{array:t}=p(x=>x.exercises),a=h(),l=r.useRef(((i=a.state)==null?void 0:i.from)??"/"),n=d();return r.useEffect(()=>{n(j())},[n]),console.log("arr",t),s.jsxs(s.Fragment,{children:[s.jsx(E,{}),s.jsxs(m,{children:[s.jsx(e,{to:l.current,children:s.jsx(b,{children:"Go Back"})}),s.jsx(f,{children:"Exercises"}),s.jsxs(k,{children:[s.jsx("li",{children:s.jsxs(e,{to:"bodyparts",children:[" ",s.jsx(c,{children:"Body parts"})]})}),s.jsx("li",{children:s.jsxs(e,{to:"muscles",children:[" ",s.jsx(c,{children:"Muscles"})]})}),s.jsx("li",{children:s.jsx(e,{to:"equipment",children:s.jsx(c,{children:"Equipment"})})})]}),s.jsx(r.Suspense,{fallback:s.jsx("p",{children:"Loader"}),children:s.jsx(u,{})})]})]})},B=y;export{B as default};
