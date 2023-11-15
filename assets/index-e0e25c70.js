import{s,j as e,c as h,b as g,C as f,r as x,u,D as m,a as i,O as b}from"./index-fc1258a4.js";import{S as E,T as w}from"./TitlePage-02aa2652.js";import"./emotion-styled.browser.esm-7fd80208.js";const y=s.h3`
  color: var(--color-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,o=({children:r})=>e.jsx(y,{children:r}),v=s.ul`
  display: flex;
  gap: 28px;
`,I=s.button``,a=s.div`
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
`,S=s.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`,T=s.div`
  display: flex;
  gap: 175px;
  margin-bottom: 36px;
`,W=s.p`
  color: rgba(230, 83, 60, 1);
  font-size: 14px;
  font-weight: 400;
`,k=s.p`
  color: rgba(239, 237, 232, 1);
  font-size: 20px;
  font-weight: 400;
`,z=s.div`
  padding: 16px;
  width: 335px;
  height: 141px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
`,B=s.svg`
  width: 24px;
  height: 24px;
  fill: rgba(239, 237, 232, 1);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 50%;
  background: rgba(239, 160, 130, 1);
  padding-top: 3px;
  padding-left: 2px;
`,C=s.div`
  display: flex;
  gap: 16px;
`,L=s.div`
  display: flex;
  gap: 8px;
`,O=s.svg`
  padding-top: 3px;
  width: 20px;
  height: 20px;
`,R=({calories:r,target:n,NameBodyPart:c,equipment:t})=>e.jsxs(z,{children:[e.jsxs(T,{children:[e.jsx("p",{children:"WORKOUT"}),e.jsxs(L,{children:[e.jsx(W,{children:"Start"}),e.jsx(O,{children:e.jsx("use",{href:`${h}#icon-arrow`,height:24,width:24})})]})]}),e.jsxs(C,{children:[e.jsx(B,{children:e.jsx("use",{href:`${h}#icon-run`,height:17,width:17})}),e.jsx(k,{children:t})]}),e.jsxs(S,{children:[e.jsxs(a,{children:[e.jsx(d,{children:"Burned calories:"}),e.jsx(p,{children:r})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Body part:"}),e.jsx(p,{children:c})]}),e.jsxs(a,{children:[e.jsx(d,{children:"Target:"}),e.jsx(p,{children:n})]})]})]}),$=()=>{var l;const{array:r}=g(j=>j.exercises),n=f(),c=x.useRef(((l=n.state)==null?void 0:l.from)??"/"),t=u();return x.useEffect(()=>{t(m())},[t]),console.log("arr",r),e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsxs(E,{children:[e.jsx(i,{to:c.current,children:e.jsx(I,{children:"Go Back"})}),e.jsx(w,{children:"Exercises"}),e.jsxs(v,{children:[e.jsx("li",{children:e.jsxs(i,{to:"bodyparts",children:[" ",e.jsx(o,{children:"Body parts"})]})}),e.jsx("li",{children:e.jsxs(i,{to:"muscles",children:[" ",e.jsx(o,{children:"Muscles"})]})}),e.jsx("li",{children:e.jsx(i,{to:"equipment",children:e.jsx(o,{children:"Equipment"})})})]}),e.jsx(x.Suspense,{fallback:e.jsx("p",{children:"Loader"}),children:e.jsx(b,{})})]})]})},H=$;export{H as default};
