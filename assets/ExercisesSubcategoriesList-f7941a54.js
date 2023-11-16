import{s as i,j as t,P as p}from"./index-147422ff.js";const x=i.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`,c=i.a`
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
`,j=({exePerPage:o,totalExe:s,paginate:e})=>{const a=[];for(let r=1;r<=Math.ceil(s/o);r++)a.push(r);return t.jsx("div",{style:{marginLeft:"auto",marginRight:"auto"},children:t.jsx(x,{children:a.map(r=>t.jsx("div",{children:t.jsx(c,{href:"#",onClick:()=>e(r)})},r))})})},d=i.div`
  width: 768px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 70px;
`,g=i.div`
  position: relative;
  width: 224px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`,l=i.img`
  width: 224px;
  height: 206px;
  opacity: 0.3;
  border-radius: 12px;
`,h=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
`,m=i.p`
  margin-bottom: 2px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  text-align: center;
`,u=i.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.4);
  text-align: center;
`,b=({fig:o,nameImg:s,category:e})=>t.jsxs(g,{children:[t.jsx(l,{src:o}),t.jsxs(h,{children:[t.jsx(m,{children:s}),t.jsx(u,{children:e})]})]}),v=({arr:o})=>{const s=e=>e&&e[0].toUpperCase()+e.slice(1);return t.jsx(d,{children:o.map(({name:e,imgURL:a,_id:r,filter:n})=>t.jsx(p,{to:`/exercises/part/${n}/${e}`,children:t.jsx(b,{fig:a,nameImg:s(e),category:n})},r))})};export{v as E,j as P};
