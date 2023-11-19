import{s as r,j as i,a4 as p}from"./index-1278a2d3.js";const d=r.div`
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
`,b=({exePerPage:n,totalExe:a,paginate:t})=>{const o=[];for(let e=1;e<=Math.ceil(a/n);e++)o.push(e);return i.jsx("div",{style:{marginLeft:"auto",marginRight:"auto"},children:i.jsx(d,{children:o.map(e=>i.jsx("div",{children:i.jsx(x,{href:"#",onClick:()=>t(e)})},e))})})},c=r.div`
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
`,f=({fig:n,nameImg:a,category:t})=>i.jsxs(g,{children:[i.jsx(h,{src:n}),i.jsxs(l,{children:[i.jsx(m,{children:a}),i.jsx(u,{children:t})]})]}),j=({arr:n})=>{const a=t=>t&&t[0].toUpperCase()+t.slice(1);return i.jsx(c,{children:n.map(({name:t,imgURL:o,_id:e,filter:s})=>i.jsx(p,{to:`/exercises/${s}/${t}`,children:i.jsx(f,{fig:o,nameImg:a(t),category:s})},e))})};export{j as E,b as P};
