import{s as r,j as e,a,d,u as x,b as p,g as h}from"./index-c8d8a70a.js";import{u as l}from"./useDispatch-d3c00dd3.js";import{S as g}from"./SectionTemplate-9dd4cfb9.js";import{T as u}from"./TitlePage-1c377bf3.js";import"./emotion-styled.browser.esm-be433e81.js";const m=r.section`
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
  width: ${i=>i.size||"20px"};
  height: ${i=>i.size||"20px"};
  fill: ${i=>i.color||"none"};
  stroke: ${i=>i.stroke||"var(--color-back-two)"};
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
background: ${i=>i.color||"var(--color-back-two)"};
`,T=r.button`
position: absolute;
right: 0;
bottom: 9px;
padding: 0;
  background-color: transparent;
  border: none;
`,$=r.svg`
  width: ${i=>i.size||"20px"};
  height: ${i=>i.size||"20px"};
  fill: ${i=>i.color||"none"};
  stroke: ${i=>i.stroke||"var(--color-back-two)"};
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,z=()=>{const i=l(),n=c=>{i(d(c))};return e.jsxs(w,{children:[e.jsxs(o,{children:[e.jsx(t,{children:"Title"}),e.jsx(s,{children:"Bread Hercules grain"})]}),e.jsxs(o,{children:[e.jsx(t,{children:"Category"}),e.jsx(s,{children:"Flour"})]}),e.jsxs(v,{children:[e.jsxs(o,{children:[e.jsx(t,{children:"Calories"}),e.jsx(s,{children:"100"})]}),e.jsxs(o,{children:[e.jsx(t,{children:"Weight"}),e.jsx(s,{children:"500"})]}),e.jsxs(o,{children:[e.jsx(t,{children:"Recommend"}),e.jsxs(s,{children:[e.jsx(D,{}),"fff"]})]}),e.jsx(T,{type:"button",onClick:()=>n(id),children:e.jsx($,{stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${a}#icon-trash`})})})]})]})},P=i=>i.diary.meals,C=()=>{const i=x(P);return console.log(i),e.jsxs(m,{children:[e.jsxs(b,{children:[e.jsx(j,{children:"Products"}),e.jsx(p,{to:"/products",children:e.jsxs(f,{children:["Add product",e.jsx(y,{size:"16px",stroke:"var(--color-main-one)",children:e.jsx("use",{href:`${a}#icon-next`})})]})})]}),e.jsx(k,{children:e.jsx(z,{})})]})},L=()=>{const i=l(),n=c=>{i(h(c))};return e.jsxs(g,{children:[e.jsx(u,{children:"Diary"}),e.jsx("button",{type:"button",onClick:()=>n("2023-10-10T00:00:00.000+00:00"),children:"GetMeal"}),e.jsx(C,{})]})};export{L as default};
