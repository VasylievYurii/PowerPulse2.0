import{u as d,r as c,d as E,af as P,j as s,a1 as f}from"./index-bbec9c4d.js";import{E as m,P as p}from"./ExercisesSubcategoriesList-2b1a4fe6.js";const h=()=>{const r=d(),[i,o]=c.useState(1),{muscles:a,isLoading:u}=E(e=>e.exercises);c.useEffect(()=>{r(P())},[r]);function t(){let e;return window.matchMedia("(min-width: 1440px)").matches?e=10:e=9,e}const n=i*t(),x=n-t();function g(){return a.slice(x,n)}const l=e=>o(e);return s.jsxs(s.Fragment,{children:[u&&s.jsx(f,{}),s.jsx(m,{arr:g()}),s.jsx(p,{exePerPage:t(),totalExe:a.length,paginate:l})]})},w=h;export{w as default};
