import{s,j as e,r as p,u as d,a as u,p as h}from"./index-802c7bf2.js";const m=s.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`,f=s.a`
  cursor: pointer;
  width: 12px;
  height: 12px;
  background: rgba(239, 237, 232, 0.1);
  border-radius: 50%;
  display: flex;
  position: relative;

  &:hover {
    border: 1px solid rgba(230, 83, 60, 1);
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      background: rgba(230, 83, 60, 1);
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 1;
      transition: opacity 0.2s;
    }
  }
`,b=({exePerPage:a,totalExe:n,paginate:t})=>{const i=[];for(let r=1;r<=Math.ceil(n/a);r++)i.push(r);return e.jsx("div",{style:{marginLeft:"auto",marginRight:"auto"},children:e.jsx(m,{children:i.map(r=>e.jsx("div",{children:e.jsx(f,{href:"#",onClick:()=>t(r)})},r))})})},j=s.div`
  width: 768px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 70px;
`,E=s.div`
  position: relative;
  width: 224px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`,y=s.img`
  width: 224px;
  height: 206px;
  opacity: 0.3;
  border-radius: 12px;
`,P=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
`,v=s.p`
  margin-bottom: 2px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  text-align: center;
`,w=s.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.4);
  text-align: center;
`,I=({fig:a,nameImg:n,category:t})=>e.jsxs(E,{children:[e.jsx(y,{src:a}),e.jsxs(P,{children:[e.jsx(v,{children:n}),e.jsx(w,{children:t})]})]}),C=()=>{const[a,n]=p.useState(1),{muscles:t}=d(c=>c.exercises),i=u();p.useEffect(()=>{i(h())},[i]),console.log("bod",t);const r=9,o=a*r,x=o-r;function g(){return t.slice(x,o)}const l=c=>n(c);return e.jsxs(e.Fragment,{children:[e.jsx(M,{arr:g()}),e.jsx(b,{exePerPage:r,totalExe:t.length,paginate:l})]})},z=C,M=({arr:a})=>{function n(t){return t&&t[0].toUpperCase()+t.slice(1)}return e.jsx(j,{children:a.map(({name:t,imgURL:i,_id:r,filter:o})=>e.jsx(I,{fig:i,nameImg:n(t),category:o},r))})};export{M as E,z as M,b as P};
