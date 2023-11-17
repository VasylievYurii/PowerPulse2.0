import{s as i,j as t,Q as c}from"./index-b8198c9e.js";const x=i.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`,d=i.a`
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
`,v=({exePerPage:o,totalExe:s,paginate:e})=>{const a=[];for(let r=1;r<=Math.ceil(s/o);r++)a.push(r);return t.jsx("div",{style:{marginLeft:"auto",marginRight:"auto"},children:t.jsx(x,{children:a.map(r=>t.jsx("div",{children:t.jsx(d,{href:"#",onClick:()=>e(r)})},r))})})},g=i.div`
  width: 768px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 70px;
`,l=i.div`
  position: relative;
  width: 224px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`,h=i.img`
  width: 224px;
  height: 206px;
  opacity: 0.3;
  border-radius: 12px;
`,m=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
`,u=i.p`
  margin-bottom: 2px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  text-align: center;
`,f=i.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.4);
  text-align: center;
`,b=({fig:o,nameImg:s,category:e})=>t.jsxs(l,{children:[t.jsx(h,{src:o}),t.jsxs(m,{children:[t.jsx(u,{children:s}),t.jsx(f,{children:e})]})]}),w=({arr:o})=>{const s=e=>e&&e[0].toUpperCase()+e.slice(1);return t.jsx(g,{children:o.map(({name:e,imgURL:a,_id:r,filter:n})=>{const p=n.toLowerCase().replace(/\s/g,"");return t.jsx(c,{to:`/exercises/${p}/${e}`,children:t.jsx(b,{fig:a,nameImg:s(e),category:n})},r)})})};export{w as E,v as P};
