import{r as n,u as E,a as p,g as P,j as s}from"./index-ff0c76f4.js";import{E as d,P as l}from"./ExercisesSubcategoriesList-98d305d5.js";const f=()=>{const[c,x]=n.useState(1),{bodyparts:t}=E(e=>e.exercises),a=p();n.useEffect(()=>{a(P())},[a]),console.log("bod",t);const r=9,o=c*r,i=o-r;function u(){return t.slice(i,o)}const g=e=>x(e);return s.jsxs(s.Fragment,{children:[s.jsx(d,{arr:u()}),s.jsx(l,{exePerPage:r,paginate:g,totalExe:t.length})]})},y=f;export{y as B};
