import{b as d,V as x,j as s,W as o,X as h,Y as j,Z as p,$ as a,a0 as u,a1 as m,a2 as E,c as S,r as c,S as y,a3 as T,a4 as i,a5 as t,a6 as b}from"./index-7058c543.js";import{T as C}from"./TitlePage-040f572b.js";import{B as g}from"./BasicModalWindow-71ecce0d.js";const f="/PowerPulse2.0/assets/thumb_up_color-00c95acb.png",M=({onClick:l})=>{const e=d(x),r=()=>{l()};return s.jsxs(o,{children:[s.jsx(h,{src:f,alt:"Thumb up",loading:"lazy"}),s.jsx(j,{children:"Well done"}),s.jsxs(p,{children:[s.jsxs(a,{children:["Your time: ",s.jsxs("span",{children:[e==null?void 0:e.time," minutes"]})]}),s.jsxs(a,{children:["Burned calories: ",s.jsx("span",{children:e==null?void 0:e.burnedCalories})]})]}),s.jsx(u,{onClick:r,children:"Next Exercise"}),s.jsxs(m,{to:"/diary",children:[s.jsx(a,{children:"To the diary"}),s.jsx(E,{children:s.jsx("use",{href:`${S}#icon-arrow`})})]})]})},k=()=>{const[l,e]=c.useState(!1),r=()=>{e(n=>!n)};return s.jsxs(y,{children:[s.jsx(C,{children:"Exercises"}),s.jsxs(T,{children:[s.jsx("li",{children:s.jsx(i,{to:"bodyparts",children:s.jsx(t,{children:"Body parts"})})}),s.jsx("li",{children:s.jsx(i,{to:"muscles",children:s.jsx(t,{children:"Muscles"})})}),s.jsx("li",{children:s.jsx(i,{to:"equipment",children:s.jsx(t,{children:"Equipment"})})})]}),s.jsxs(c.Suspense,{fallback:s.jsx("p",{children:"Loader"}),children:[l&&s.jsx(g,{onClick:r,children:s.jsx(M,{onClick:r})}),s.jsx(b,{})]})]})},L=k;export{L as default};
