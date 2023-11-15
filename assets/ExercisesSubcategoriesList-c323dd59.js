import{s as i,j as t}from"./index-c42c58ce.js";const p=i.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`,x=i.a`
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
`,b=({exePerPage:o,totalExe:a,paginate:e})=>{const s=[];for(let r=1;r<=Math.ceil(a/o);r++)s.push(r);return t.jsx("div",{style:{marginLeft:"auto",marginRight:"auto"},children:t.jsx(p,{children:s.map(r=>t.jsx("div",{children:t.jsx(x,{href:"#",onClick:()=>e(r)})},r))})})},c=i.div`
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
`,d=i.img`
  width: 224px;
  height: 206px;
  opacity: 0.3;
  border-radius: 12px;
`,l=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
`,h=i.p`
  margin-bottom: 2px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  text-align: center;
`,m=i.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.4);
  text-align: center;
`,u=({fig:o,nameImg:a,category:e})=>t.jsxs(g,{children:[t.jsx(d,{src:o}),t.jsxs(l,{children:[t.jsx(h,{children:a}),t.jsx(m,{children:e})]})]}),j=({arr:o})=>{const a=e=>e&&e[0].toUpperCase()+e.slice(1);return t.jsx(c,{children:o.map(({name:e,imgURL:s,_id:r,filter:n})=>t.jsx(u,{fig:s,nameImg:a(e),category:n},r))})};export{j as E,b as P};
