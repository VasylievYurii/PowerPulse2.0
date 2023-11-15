import{s,j as e,c as h,N as v,b as w,r as t,C as y,u as E,D as S,a as o,O as k}from"./index-1cbf4c27.js";import{S as T,T as I}from"./TitlePage-68406b2a.js";import{B as W}from"./BasicModalWindow-7ba233e4.js";import"./emotion-styled.browser.esm-c81bf6b6.js";const z=s.h3`
  color: var(--color-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,x=({children:r})=>e.jsx(z,{children:r}),B=s.ul`
  display: flex;
  gap: 28px;
`,C=s.button``,l=s.div`
  display: flex;
  gap: 4px;
`,d=s.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
`,p=s.p`
  color: rgba(239, 237, 232, 1);
  font-size: 12px;
  font-weight: 400;
`,M=s.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`,L=s.div`
  display: flex;
  gap: 175px;
  margin-bottom: 36px;
`,N=s.p`
  color: rgba(230, 83, 60, 1);
  font-size: 14px;
  font-weight: 400;
`,O=s.p`
  color: rgba(239, 237, 232, 1);
  font-size: 20px;
  font-weight: 400;
`,$=s.div`
  padding: 16px;
  width: 335px;
  height: 141px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
`,A=s.svg`
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
`,q=s.div`
  display: flex;
  gap: 8px;
`,D=s.svg`
  padding-top: 3px;
  width: 20px;
  height: 20px;
`,G=({calories:r,target:n,NameBodyPart:i,equipment:a})=>e.jsxs($,{children:[e.jsxs(L,{children:[e.jsx("p",{children:"WORKOUT"}),e.jsxs(q,{children:[e.jsx(N,{children:"Start"}),e.jsx(D,{children:e.jsx("use",{href:`${h}#icon-arrow`,height:24,width:24})})]})]}),e.jsxs(R,{children:[e.jsx(A,{children:e.jsx("use",{href:`${h}#icon-run`,height:17,width:17})}),e.jsx(O,{children:a})]}),e.jsxs(M,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Burned calories:"}),e.jsx(p,{children:r})]}),e.jsxs(l,{children:[e.jsx(d,{children:"Body part:"}),e.jsx(p,{children:i})]}),e.jsxs(l,{children:[e.jsx(d,{children:"Target:"}),e.jsx(p,{children:n})]})]})]}),H=s.div`
padding-top: 48px;
padding-bottom: 48px;
`,U=s.h1`
color: var(--color-text);
font-size: 24px;
margin-bottom: 16px;
margin-top: 27px;
`,_=s(v)`
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
line-height: 1.28;
`,F=s.button`
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
`,m=s.p`
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
line-height: 1.28;

>span{
    color: var(--color-main-one);
}

`,K=s.div`
display: flex;
gap: 4px;
flex-direction: column;
`,P=s.svg`
stroke: var(--color-text);
width: 16px;
height: 16px;
margin-left: 6px;
`,V=s.img`
width: 118px;
`,Y=({toggleModal:r})=>e.jsxs(H,{children:[e.jsx(V,{src:"../../assets/thumb_up_color.png",alt:"Thumb up"}),e.jsx(U,{children:"Well done"}),e.jsxs(K,{children:[e.jsxs(m,{children:["Your time: ",e.jsx("span",{children:"3 minutes"})]}),e.jsxs(m,{children:["Burned calories: ",e.jsx("span",{children:"250"})]})]}),e.jsx(F,{onClick:r,children:"Next Exercise"}),e.jsxs(_,{to:"/diary",children:["To the diary",e.jsx(P,{children:e.jsx("use",{href:`${h}#icon-arrow`})})]})]}),J=()=>{var u;const{array:r}=w(c=>c.exercises),[n,i]=t.useState(!1),a=y(),g=E(),f=t.useRef(((u=a.state)==null?void 0:u.from)??"/"),[Q,b]=t.useState(!1),j=()=>{b(c=>!c)};return t.useEffect(()=>{g(S())},[g]),console.log("arr",r),e.jsxs(e.Fragment,{children:[e.jsx(G,{}),e.jsxs(T,{children:[e.jsx(o,{to:f.current,children:e.jsx(C,{children:"Go Back"})}),e.jsx(I,{children:"Exercises"}),e.jsxs(B,{children:[e.jsx("li",{children:e.jsxs(o,{to:"bodyparts",children:[" ",e.jsx(x,{children:"Body parts"})]})}),e.jsx("li",{children:e.jsxs(o,{to:"muscles",children:[" ",e.jsx(x,{children:"Muscles"})]})}),e.jsx("li",{children:e.jsx(o,{to:"equipment",children:e.jsx(x,{children:"Equipment"})})})]}),e.jsxs(t.Suspense,{fallback:e.jsx("p",{children:"Loader"}),children:[e.jsx("button",{onClick:()=>{i(!0)},children:"Add to diary"}),n&&e.jsx(W,{onClick:j,children:e.jsx(Y,{toggleModal:j})}),e.jsx(k,{})]})]})]})},re=J;export{re as default};
