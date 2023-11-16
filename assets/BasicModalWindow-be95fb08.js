import{q as d,s as n,r as c,j as o,c as l}from"./index-e7f1c172.js";const p=({children:t})=>{const e=document.getElementById("portal-root");return e?d.createPortal(t,e):(console.error("Portal root element not found. Please create a div with id='portal-root' in your HTML."),null)},x=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  min-width: 335px;
  min-height: 384px;
  background-color: var(--color-back-one);
  border: 1px solid #efede833;
  border-radius: 12px;
`,h=n.svg`
  position: absolute;
  cursor: pointer;
  width: 22px;
  height: 22px;
  stroke: var(--color-text);
  top: 14px;
  right: 14px;
`,u=n.div`
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`,f=n.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: #04040466;
`,w=({onClick:t,children:e})=>{const s=r=>{r.code==="Escape"&&t()},a=()=>{t()},i=r=>{r.currentTarget===r.target&&t()};return c.useEffect(()=>(window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)})),o.jsx(p,{children:o.jsx(f,{onClick:i,children:o.jsxs(x,{children:[o.jsx(h,{onClick:a,children:o.jsx("use",{href:`${l}#icon-cross`})}),o.jsx(u,{children:e})]})})})};export{w as B};
