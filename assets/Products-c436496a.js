import{r as d,s,a,j as o,b as c}from"./index-69535aba.js";import{S as p}from"./SectionTemplate-aba7b931.js";import"./emotion-styled.browser.esm-7618cdb1.js";const x=({children:t})=>{const e=document.getElementById("portal-root");return e?d.createPortal(t,e):(console.error("Portal root element not found. Please create a div with id='portal-root' in your HTML."),null)},h=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  /* z-index: 100; */
  transform: translate(-50%, -50%);
  padding: 10px;
  min-width: 335px;
  min-height: 384px;
  background-color: var(--color-back-one);
  border: 1px solid #efede833;
  border-radius: 12px;
`,u=s.svg`
  position: absolute;
  width: 22px;
  height: 22px;
  stroke: var(--color-text);
  top: 14px;
  right: 14px;
`,m=s.div`
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`,f=s.div`
  position: fixed;
  top: 0;
  /* right: 0;
  bottom: 0; */
  left: 0;

  width: 100vw;
  height: 100vh;

  /* overflow: auto;

  z-index: 10; */

  background-color: #04040466;
  /* 
  opacity: 1;
  scale: 1;
  visibility: visible;

  filter: blur(0);

  transition:
    opacity 250ms linear,
    scale 250ms linear,
    visibility 250ms linear; */
`,v=({onClick:t,children:e})=>{const r=i=>{i.code==="Escape"&&t()},n=()=>{t()},l=i=>{i.currentTarget===i.target&&t()};return a.useEffect(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)})),o.jsx(x,{children:o.jsx(f,{onClick:l,children:o.jsxs(h,{children:[o.jsx(u,{onClick:n,children:o.jsx("use",{href:`${c}#icon-cross`})}),o.jsx(m,{children:e})]})})})},g=()=>{const[t,e]=a.useState(!1),r=()=>{e(n=>!n)};return o.jsxs("div",{children:[o.jsx("div",{children:t&&o.jsx(v,{onClick:r,children:"This is modal"})}),o.jsx("button",{onClick:r})]})},k=()=>o.jsxs(p,{children:[o.jsx("p",{children:"Products page"}),o.jsx(g,{children:a.Children})]});export{k as default};
