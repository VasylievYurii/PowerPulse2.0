import{s as i,j as e,Q as c}from"./index-0de86a50.js";const x=i.div`
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
`,w=({exePerPage:o,totalExe:a,paginate:t})=>{const n=[];for(let r=1;r<=Math.ceil(a/o);r++)n.push(r);return e.jsx("div",{style:{marginLeft:"auto",marginRight:"auto"},children:e.jsx(x,{children:n.map(r=>e.jsx("div",{children:e.jsx(d,{href:"#",onClick:()=>t(r)})},r))})})},g=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
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
`,b=({fig:o,nameImg:a,category:t})=>e.jsxs(l,{children:[e.jsx(h,{src:o}),e.jsxs(m,{children:[e.jsx(u,{children:a}),e.jsx(f,{children:t})]})]}),v=({arr:o})=>{const a=t=>t&&t[0].toUpperCase()+t.slice(1);return e.jsx(g,{children:o.map(({name:t,imgURL:n,_id:r,filter:s})=>{const p=s.toLowerCase().replace(/\s/g,"");return e.jsx(c,{to:`/exercises/${p}/${t}`,children:e.jsx(b,{fig:n,nameImg:a(t),category:s})},r)})})};export{v as E,w as P};
