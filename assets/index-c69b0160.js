import{u as E,r as c,c as g,ag as m,j as t}from"./index-e00e1147.js";import{E as P,P as f}from"./ExercisesSubcategoriesList-b97e33f9.js";const l=()=>{const r=E(),[i,o]=c.useState(1),{equipment:n}=g(e=>e.exercises);c.useEffect(()=>{r(m())},[r]);function s(){let e;return window.matchMedia("(min-width: 1440px)").matches?e=10:e=9,e}const a=i*s(),u=a-s();function x(){return n.slice(u,a)}const p=e=>o(e);return t.jsxs(t.Fragment,{children:[t.jsx(P,{arr:x()}),t.jsx(f,{exePerPage:s(),totalExe:n.length,paginate:p})]})},j=l;export{j as default};
