import{s as p,r as c,b as P,u as l,$ as E,j as t}from"./index-ad108fae.js";import{E as f,P as h}from"./ExercisesSubcategoriesList-4de8a2d9.js";const m=p.div``,j=()=>{const[o,i]=c.useState(1),{bodyparts:r}=P(e=>e.exercises),a=l();c.useEffect(()=>{a(E())},[a]);function s(){let e;return window.matchMedia("(min-width: 1440px)").matches?e=10:e=9,e}const n=o*s(),x=n-s(),u=r.length;function d(){return r.slice(x,n)}const g=e=>i(e);return t.jsxs(t.Fragment,{children:[t.jsx(f,{arr:d()}),t.jsx(m,{children:u!==s()&&t.jsx(h,{exePerPage:s(),paginate:g,totalExe:r.length})})]})},w=j;export{w as default};
