import{s,j as e,c as g,P as f,b,r as o,Q as v,u as y,R as w,a as i,S as E}from"./index-987f8abe.js";import{S,T as k}from"./TitlePage-f0accbc1.js";import{B as T}from"./BasicModalWindow-df66cb93.js";const I=s.h3`
  color: var(--color-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,l=({children:r})=>e.jsx(I,{children:r}),W=s.ul`
  display: flex;
  gap: 28px;
`,z=s.button``,d=s.div`
  display: flex;
  gap: 4px;
`,p=s.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
`,h=s.p`
  color: rgba(239, 237, 232, 1);
  font-size: 12px;
  font-weight: 400;
`,C=s.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`,B=s.div`
  display: flex;
  gap: 175px;
  margin-bottom: 36px;
`,L=s.p`
  color: rgba(230, 83, 60, 1);
  font-size: 14px;
  font-weight: 400;
`,M=s.p`
  color: rgba(239, 237, 232, 1);
  font-size: 20px;
  font-weight: 400;
`,N=s.div`
  padding: 16px;
  width: 335px;
  height: 141px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
`,O=s.svg`
  width: 24px;
  height: 24px;
  fill: rgba(239, 237, 232, 1);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 50%;
  background: rgba(239, 160, 130, 1);
  padding-top: 3px;
  padding-left: 2px;
`,R=s.div`
  display: flex;
  gap: 16px;
`,$=s.div`
  display: flex;
  gap: 8px;
`,A=s.svg`
  padding-top: 3px;
  width: 20px;
  height: 20px;
`,q=({calories:r,target:t,NameBodyPart:n,equipment:c})=>e.jsxs(N,{children:[e.jsxs(B,{children:[e.jsx("p",{children:"WORKOUT"}),e.jsxs($,{children:[e.jsx(L,{children:"Start"}),e.jsx(A,{children:e.jsx("use",{href:`${g}#icon-arrow`,height:24,width:24})})]})]}),e.jsxs(R,{children:[e.jsx(O,{children:e.jsx("use",{href:`${g}#icon-run`,height:17,width:17})}),e.jsx(M,{children:c})]}),e.jsxs(C,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Burned calories:"}),e.jsx(h,{children:r})]}),e.jsxs(d,{children:[e.jsx(p,{children:"Body part:"}),e.jsx(h,{children:n})]}),e.jsxs(d,{children:[e.jsx(p,{children:"Target:"}),e.jsx(h,{children:t})]})]})]}),G=s.div`
padding-top: 48px;
padding-bottom: 48px;
`,H=s.h1`
color: var(--color-text);
font-size: 24px;
margin-bottom: 16px;
margin-top: 27px;
`,P=s(f)`
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
line-height: 1.28;
`,U=s.button`
 display: block;
  padding: 12px 32px;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--color-main-one);
  border-radius: 12px;
  border: 1px solid var(--color-main-one);
  cursor: pointer;
  transition: border 0.3s var(--timing-function);

  &:hover, &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }

  @media screen and (min-width: 768px){
    font-size: 16px;
    line-height: 1.5;
    padding: 14px 32px;
    margin-top: 32px;
  }
`,u=s.p`
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
line-height: 1.28;

>span{
    color: var(--color-main-one);
}

`,_=s.div`
display: flex;
gap: 4px;
flex-direction: column;
`,D=s.svg`
stroke: var(--color-text);
width: 16px;
height: 16px;
margin-left: 6px;
`,F=s.img`
width: 118px;
`,K=({onClick:r})=>{const t=()=>{r()};return e.jsxs(G,{children:[e.jsx(F,{src:"../../assets/thumb_up_color.png",alt:"Thumb up"}),e.jsx(H,{children:"Well done"}),e.jsxs(_,{children:[e.jsxs(u,{children:["Your time: ",e.jsx("span",{children:"3 minutes"})]}),e.jsxs(u,{children:["Burned calories: ",e.jsx("span",{children:"250"})]})]}),e.jsx(U,{onClick:t,children:"Next Exercise"}),e.jsxs(P,{to:"/diary",children:["To the diary",e.jsx(D,{children:e.jsx("use",{href:`${g}#icon-arrow`})})]})]})},Q=()=>{var j;b(x=>x.exercises),o.useState(!1);const r=v(),t=y(),n=o.useRef(((j=r.state)==null?void 0:j.from)??"/"),[c,m]=o.useState(!1),a=()=>{m(x=>!x)};return o.useEffect(()=>{t(w())},[t]),e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs(S,{children:[e.jsx(i,{to:n.current,children:e.jsx(z,{children:"Go Back"})}),e.jsx(k,{children:"Exercises"}),e.jsxs(W,{children:[e.jsx("li",{children:e.jsxs(i,{to:"bodyparts",children:[" ",e.jsx(l,{children:"Body parts"})]})}),e.jsx("li",{children:e.jsxs(i,{to:"muscles",children:[" ",e.jsx(l,{children:"Muscles"})]})}),e.jsx("li",{children:e.jsx(i,{to:"equipment",children:e.jsx(l,{children:"Equipment"})})})]}),e.jsxs(o.Suspense,{fallback:e.jsx("p",{children:"Loader"}),children:[e.jsx("button",{onClick:a,children:"Add to diary"}),c&&e.jsx(T,{onClick:a,children:e.jsx(K,{onClick:a})}),e.jsx(E,{})]})]})]})},X=Q;export{X as default};
