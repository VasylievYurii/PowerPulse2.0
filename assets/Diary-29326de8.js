import{s as r,j as i,a,h as d,u as x,b as p,i as h}from"./index-1283803e.js";import{u as l}from"./useDispatch-877edadc.js";import{S as u}from"./SectionTemplate-3b566380.js";import{T as g}from"./TitlePage-45e34449.js";import"./emotion-styled.browser.esm-bb38a343.js";const m=r.section`
  width: 100%;
  display: flex;
  flex-direction: column;
height: 824px;
padding: 16px 8px 16px 16px;
align-items: center;
gap: 22px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background: rgba(239, 237, 232, 0.05);
color: var(--color-main-two);
`,b=r.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`,j=r.h3`
color: rgba(239, 237, 232, 0.50);
margin: 0;
font-weight: 400;
font-size: 14px;
line-height: 1.29;
`,f=r.div`
display: flex;
gap: 8px;
color: var(--color-main-one);
font-weight: 500;
line-height: 1.29;
font-size: 14px;
`,y=r.svg`
  width: ${e=>e.size||"20px"};
  height: ${e=>e.size||"20px"};
  fill: ${e=>e.color||"none"};
  stroke: ${e=>e.stroke||"var(--color-back-two)"};
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,k=r.ul`
width: 100%;
display: flex;
flex-direction: column;
gap: 40px;
padding-right: 8px;
overflow-y: auto;
&::-webkit-scrollbar {
    width: 6px;
  };
&::-webkit-scrollbar-track {
  background-color: none;
};
&::-webkit-scrollbar-thumb {
  background-color: rgba(239, 237, 232, 0.10);
      border-radius: 12px;
}
`,w=r.li`
display: flex;
flex-direction: column;
gap: 16px;
`,o=r.div`
display: flex;
flex-direction: column;
gap: 8px;
`,t=r.h4`
font-weight: 400;
line-height: 1.5;
margin: 0;
`,s=r.div`
display: flex;
gap: 8px;
width: 100%;
min-width: 59px;
height: 38px;
padding: 10px 14px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.30);
color: var(--color-text);
font-size: 14px;
line-height: 1,29;

@media screen and (min-width: 375px) {
min-width: 80px;
  }
`,v=r.div`
position: relative;
display: flex;
/* width: 223px; */
padding-right: 28px;
justify-content: space-between;
gap: 16px;
align-items: center;
`,D=r.div`
display: block;
width: 14px;
height: 14px;
border-radius: 10px;
background: ${e=>e.color||"var(--color-back-two)"};
`,T=r.button`
position: absolute;
right: 0;
bottom: 9px;
padding: 0;
  background-color: transparent;
  border: none;
`,$=r.svg`
  width: ${e=>e.size||"20px"};
  height: ${e=>e.size||"20px"};
  fill: ${e=>e.color||"none"};
  stroke: ${e=>e.stroke||"var(--color-back-two)"};
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,z=()=>{const e=l(),n=c=>{e(d(c))};return i.jsxs(w,{children:[i.jsxs(o,{children:[i.jsx(t,{children:"Title"}),i.jsx(s,{children:"Bread Hercules grain"})]}),i.jsxs(o,{children:[i.jsx(t,{children:"Category"}),i.jsx(s,{children:"Flour"})]}),i.jsxs(v,{children:[i.jsxs(o,{children:[i.jsx(t,{children:"Calories"}),i.jsx(s,{children:"100"})]}),i.jsxs(o,{children:[i.jsx(t,{children:"Weight"}),i.jsx(s,{children:"500"})]}),i.jsxs(o,{children:[i.jsx(t,{children:"Recommend"}),i.jsxs(s,{children:[i.jsx(D,{}),"fff"]})]}),i.jsx(T,{type:"button",onClick:()=>n(id),children:i.jsx($,{stroke:"var(--color-main-two)",children:i.jsx("use",{href:`${a}#icon-trash`})})})]})]})},P=e=>e.diary.meals,C=()=>{const e=x(P);return console.log(e),i.jsxs(m,{children:[i.jsxs(b,{children:[i.jsx(j,{children:"Products"}),i.jsx(p,{to:"/products",children:i.jsxs(f,{children:["Add product",i.jsx(y,{size:"16px",stroke:"var(--color-main-one)",children:i.jsx("use",{href:`${a}#icon-next`})})]})})]}),i.jsx(k,{children:i.jsx(z,{})})]})},L=()=>{const e=l(),n=c=>{e(h(c))};return i.jsxs(u,{children:[i.jsx(g,{children:"Diary"}),i.jsx("button",{type:"button",onClick:()=>n("2023-10-10T00:00:00.000+00:00"),children:"GetMeal"}),i.jsx(C,{})]})};export{L as default};
