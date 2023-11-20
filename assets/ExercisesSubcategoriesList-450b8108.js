import{s as r,j as e,ae as p}from"./index-ab09653e.js";const d=r.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  width: 6em;
`,x=r.a`
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
`,b=({exePerPage:n,totalExe:a,paginate:i})=>{const o=[];for(let t=1;t<=Math.ceil(a/n);t++)o.push(t);return e.jsx("div",{style:{marginLeft:"auto",marginRight:"auto"},children:e.jsx(d,{children:o.map(t=>e.jsx("div",{children:e.jsx(x,{href:"#",onClick:()=>i(t)})},t))})})},c=r.div`
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
    width: 1300px;
  }
`,g=r.div`
  position: relative;
  width: 335px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`,h=r.img`
  width: 335px;
  height: 206px;
  opacity: 0.3;
  border-radius: 12px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`,l=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
`,m=r.p`
  margin-bottom: 2px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  text-align: center;
`,u=r.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.4);
  text-align: center;
`,f=({fig:n,nameImg:a,category:i})=>e.jsxs(g,{children:[e.jsx(h,{src:n}),e.jsxs(l,{children:[e.jsx(m,{children:a}),e.jsx(u,{children:i})]})]}),j=({arr:n})=>{const a=i=>i&&i[0].toUpperCase()+i.slice(1);return e.jsx(c,{children:n.map(({name:i,imgURL:o,_id:t,filter:s})=>e.jsx(p,{to:`/exercises/${s}/${i}`,children:e.jsx(f,{fig:o,nameImg:a(i),category:s})},t))})};export{j as E,b as P};
