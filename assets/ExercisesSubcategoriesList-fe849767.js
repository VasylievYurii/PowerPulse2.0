import{s as a,j as t,aj as p}from"./index-2769b58b.js";const d=a.div`
  display: flex;
  gap: 8px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 6em;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 40px;
  }
`,x=a.a`
  cursor: pointer;
  width: 12px;
  height: 12px;

  background: rgba(239, 237, 232, 0.1);
  border: ${r=>r.isactive?"1px solid rgba(230, 83, 60, 1)":""};

  border-radius: 50%;
  display: flex;
  position: relative;

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    background: ${r=>r.isactive?"#E6533C":"1px solid rgba(230, 83, 60, 1)"};

    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: opacity 0.2s;
  }

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
`,w=({exePerPage:r,totalExe:n,paginate:i,currentPage:s})=>{const o=[];for(let e=1;e<=Math.ceil(n/r);e++)o.push(e);return t.jsx("div",{style:{marginLeft:"auto",marginRight:"auto"},children:t.jsx(d,{children:o.map(e=>t.jsx("div",{children:t.jsx(x,{href:"#",onClick:()=>i(e),isactive:e===s?1:0})},e))})})},c=a.div`
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
`,g=a.div`
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
`,h=a.img`
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
`,l=a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
`,m=a.p`
  margin-bottom: 2px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  text-align: center;
`,b=a.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.4);
  text-align: center;
`,u=({fig:r,nameImg:n,category:i})=>t.jsxs(g,{children:[t.jsx(h,{src:r}),t.jsxs(l,{children:[t.jsx(m,{children:n}),t.jsx(b,{children:i})]})]}),j=({arr:r})=>{const n=i=>i&&i[0].toUpperCase()+i.slice(1);return t.jsx(c,{children:r.map(({name:i,imgURL:s,_id:o,filter:e})=>t.jsx(p,{to:`/exercises/${e}/${i}`,children:t.jsx(u,{fig:s,nameImg:n(i),category:e})},o))})};export{j as E,w as P};
