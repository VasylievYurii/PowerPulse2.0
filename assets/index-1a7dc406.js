import{s as o,j as e,N as x,e as f,u as m,q as u,a as b,r as p,t as w,d as j,O as v}from"./index-ff0c76f4.js";import{B as y}from"./BodyParts-9dcafd1d.js";import{S as k,T as E}from"./TitlePage-07ad3c23.js";import{B as S}from"./BasicModalWindow-c1e6cdd0.js";import"./ExercisesSubcategoriesList-98d305d5.js";const z=o.h3`
  color: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,n=({children:t})=>e.jsx(z,{children:t}),C=o.ul`
  display: flex;
  gap: 28px;
`,T=o.button``,a=o(x)`
  position: relative;
  display: block;
  color: rgba(239, 237, 232, 0.4);

  &.active {
    color: var(--color-text);

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background-color: var(--color-main-one);
      border-radius: 2px;
    }
  }
`;o.div`
  display: flex;
  gap: 4px;
  height: 18px;
`;o.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
  width: 86px;
`;o.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
  width: 55px;
`;o.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
  width: 37px;
`;o.p`
  color: rgba(239, 237, 232, 1);
  font-size: 12px;
  font-weight: 400;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;o.p`
  color: rgba(239, 237, 232, 1);
  font-size: 12px;
  font-weight: 400;
  display: ${t=>t.display||"inline-block"};
  width: ${t=>t.width||"32px"};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;o.div`
  display: flex;
  gap: 16px;

  width: 295px;
  height: 40px;
`;o.div`
  display: flex;
  gap: 175px;
  margin-bottom: 36px;
`;o.p`
  color: rgba(230, 83, 60, 1);
  font-size: 14px;
  font-weight: 400;
`;o.p`
  color: rgba(239, 237, 232, 1);
  font-size: 20px;
  font-weight: 400;
  display: ${t=>t.display||"inline-block"};
  width: ${t=>t.width||"263px"};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;o.div`
  padding: 16px;
  width: 335px;
  height: 141px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
`;o.svg`
  width: 24px;
  height: 24px;
  fill: rgba(239, 237, 232, 1);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 50%;
  background: rgba(239, 160, 130, 1);
  padding-top: 3px;
  padding-left: 2px;
`;o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`;o.div`
  display: flex;
  gap: 8px;
`;o.svg`
  padding-top: 3px;
  width: 20px;
  height: 20px;
`;const B=o.div`
padding-top: 48px;
padding-bottom: 48px;
`,L=o.h1`
color: var(--color-text);
font-size: 24px;
margin-bottom: 16px;
margin-top: 27px;
`,M=o(x)`
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
line-height: 1.28;
`,$=o.button`
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
`,d=o.p`
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
line-height: 1.28;

>span{
    color: var(--color-main-one);
}

`,N=o.div`
display: flex;
gap: 4px;
flex-direction: column;
`,O=o.svg`
stroke: var(--color-text);
width: 16px;
height: 16px;
margin-left: 6px;
`,W=o.img`
width: 118px;
`,q=({onClick:t})=>{const i=()=>{t()};return e.jsxs(B,{children:[e.jsx(W,{src:"../../assets/thumb_up_color.png",alt:"Thumb up"}),e.jsx(L,{children:"Well done"}),e.jsxs(N,{children:[e.jsxs(d,{children:["Your time: ",e.jsx("span",{children:"3 minutes"})]}),e.jsxs(d,{children:["Burned calories: ",e.jsx("span",{children:"250"})]})]}),e.jsx($,{onClick:i,children:"Next Exercise"}),e.jsxs(M,{to:"/diary",children:["To the diary",e.jsx(O,{children:e.jsx("use",{href:`${f}#icon-arrow`})})]})]})},A=()=>{var l;m(s=>s.exercises),useState(!1);const t=u(),i=b(),c=p.useRef(((l=t.state)==null?void 0:l.from)??"/"),[h,g]=useState(!1),r=()=>{g(s=>!s)};return useEffect(()=>{i(w())},[i]),e.jsx(e.Fragment,{children:e.jsxs(k,{children:[e.jsx(j,{to:c.current,children:e.jsx(T,{children:"Go Back"})}),e.jsx(E,{children:"Exercises"}),e.jsxs(C,{children:[e.jsx("li",{children:e.jsxs(a,{to:"bodyparts",children:[" ",e.jsx(n,{children:"Body parts"})]})}),e.jsx("li",{children:e.jsxs(a,{to:"muscles",children:[" ",e.jsx(n,{children:"Muscles"})]})}),e.jsx("li",{children:e.jsx(a,{to:"equipment",children:e.jsx(n,{children:"Equipment"})})})]}),e.jsxs(p.Suspense,{fallback:e.jsx("p",{children:"Loader"}),children:[e.jsx("button",{onClick:r,children:"Add to diary"}),h&&e.jsx(S,{onClick:r,children:e.jsx(q,{onClick:r})}),e.jsx(v,{})]}),e.jsx(y,{})]})})},D=A;export{D as default};
