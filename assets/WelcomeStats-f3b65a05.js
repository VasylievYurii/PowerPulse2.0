import{s as e,j as i,c as n}from"./index-13f107bf.js";const p=e.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 598px;
  }
  @media screen and (min-width: 1440px) {
    height: auto;
    gap: 20%;
    justify-content: start;
  }
`,j=({children:t})=>i.jsx(p,{children:t}),r=e.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* @media (orientation: landscape) {
    transform: scale(0.7);
  }

  @media (min-width: 769px) and (orientation: landscape) {
    transform: scale(0.8);
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    transform: scale(0.9);
  }

  @media (min-width: 1440) and (orientation: landscape) {
    transform: scale(1);
  } */
`,b=({children:t})=>i.jsx(r,{children:t}),s=e.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  gap: 8px;
  width: 146px;
  height: 66px;
  padding: 14px 18px;
  border-radius: 12px;
  background: var(--color-back-two);

  @media screen and (min-width: 768px) {
    gap: 12px;
    width: 206px;
    height: 96px;
  }
  @media screen and (min-width: 1440px) {
    width: 206px;
    height: 96px;
  }
`,x=e.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 119px;
  height: 76px;
  padding: 14px 18px;
  border-radius: 12px;
  background: var(--color-main-two);

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
  }
  @media screen and (min-width: 1440px) {
    width: 180px;
    height: 110px;
  }
`,o=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 9px;
  background-color: var(--color-main-two);
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,c=e(o)`
  margin-bottom: 4px;
  width: 20px;
  height: 20px;
  padding: 4px;
  background-color: var(--color-main-three);
`,a=e.svg`
  width: 12px;
  height: 12px;
  fill: #efede8;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,h=e.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`,l=e.p`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`,m=e.p`
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`,d=e.p`
  font-size: 12px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.65);
`,g=e.div`
  position: absolute;
  width: 212px;
  height: 230px;
  @media screen and (orientation: portrait) {
    position: relative;
  }
  @media screen and (min-width: 768px) {
    width: 405px;
    height: 262px;
  }

  @media screen and (min-width: 1440px) {
    width: 638px;
    height: 245px;
    right: 0;
    bottom: 20%;
  }
`,w=e.div`
  display: flex;
  justify-content: end;
  position: relative;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`,f=({children:t})=>i.jsx(w,{children:t}),v=()=>i.jsx(f,{children:i.jsxs(g,{children:[i.jsxs(s,{children:[i.jsx(o,{children:i.jsx(a,{children:i.jsx("use",{href:`${n}#icon-play`})})}),i.jsxs("div",{children:[i.jsx(l,{children:"350+"}),i.jsx(d,{children:"Video tutorial"})]})]}),i.jsxs(x,{children:[i.jsx(c,{children:i.jsx(a,{children:i.jsx("use",{href:`${n}#icon-run`})})}),i.jsxs(h,{children:[i.jsx(m,{children:"500"}),i.jsx(d,{children:"cal"})]})]})]})});export{j as S,v as W,b as a};
