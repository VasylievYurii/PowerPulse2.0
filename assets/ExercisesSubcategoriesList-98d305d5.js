import{s as r,j as t,N as p}from"./index-ff0c76f4.js";const x=r.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`,d=r.a`
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
`,j=({exePerPage:a,totalExe:o,paginate:e})=>{const s=[];for(let i=1;i<=Math.ceil(o/a);i++)s.push(i);return t.jsx("div",{style:{marginLeft:"auto",marginRight:"auto"},children:t.jsx(x,{children:s.map(i=>t.jsx("div",{children:t.jsx(d,{href:"#",onClick:()=>e(i)})},i))})})},c=r.div`
  width: 335px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 70px;
  @media screen and (min-width: 768px) {
    width: 768px;
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
`,h=r.img`
  width: 335px;
  height: 206px;
  opacity: 0.3;
  border-radius: 12px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 224px;
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
`,b=({fig:a,nameImg:o,category:e})=>t.jsxs(g,{children:[t.jsx(h,{src:a}),t.jsxs(l,{children:[t.jsx(m,{children:o}),t.jsx(u,{children:e})]})]}),w=({arr:a})=>{const o=e=>e&&e[0].toUpperCase()+e.slice(1);return t.jsx(c,{children:a.map(({name:e,imgURL:s,_id:i,filter:n})=>t.jsx(p,{to:`/exercises/part/${n}/${e}`,children:t.jsx(b,{fig:s,nameImg:o(e),category:n})},i))})};export{w as E,j as P};
