import{s as P,r as c,d as l,u as E,af as f,j as s,a2 as h}from"./index-ef60ecdd.js";import{E as m,P as j}from"./ExercisesSubcategoriesList-200b3006.js";const y=P.div``,w=()=>{const[a,i]=c.useState(1),{bodyparts:r,isLoading:x}=l(e=>e.exercises),n=E();c.useEffect(()=>{n(f())},[n]);function t(){let e;return window.matchMedia("(min-width: 1440px)").matches?e=10:e=9,e}const o=a*t(),d=o-t(),u=r.length;function g(){return r.slice(d,o)}const p=e=>i(e);return s.jsxs(s.Fragment,{children:[x&&s.jsx(h,{}),s.jsx(m,{arr:g()}),s.jsx(y,{children:u!==t()&&s.jsx(j,{exePerPage:t(),paginate:p,totalExe:r.length,currentPage:a})})]})},S=w;export{S as default};
