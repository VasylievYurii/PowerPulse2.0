import{s as e,j as t,u as m,d as g,r as n,ao as u,a as o,a3 as w}from"./index-c785df60.js";const f=e.div`
  display: flex;
  flex-direction: column;
  /* min-height: 40%; */
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 598px;
  }
  @media screen and (min-width: 1440px) {
    /* height: auto;
    gap: 20%; */
    justify-content: start;
  }
`,L=({children:i})=>t.jsx(f,{children:i}),j=e.div`
  display: flex;
  flex-direction: column;
  padding-top: 90px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 151px;
  }

  /* gap: 40px; */
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
`,R=({children:i})=>t.jsx(j,{children:i}),b=e.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 15px;
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
`,S=e.div`
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
`,c=e.div`
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
`,v=e(c)`
  margin-bottom: 4px;
  width: 20px;
  height: 20px;
  padding: 4px;
  background-color: var(--color-main-three);
`,p=e.svg`
  width: 12px;
  height: 12px;
  fill: #efede8;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,y=e.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`,W=e.p`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`,k=e.p`
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`,r=e.p`
  font-size: 16px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.65);
`,C=e.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 230px;
  height: 230px;
  @media screen and (orientation: portrait) {
    /* position: relative; */
  }
  @media screen and (min-width: 768px) {
    width: 405px;
    height: 262px;
  }

  @media screen and (min-width: 1440px) {
    width: 638px;
    height: 245px;
    right: 2%;
    bottom: 20%;
  }
`,z=e.div`
  display: flex;
  justify-content: end;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`,T=({children:i})=>t.jsx(z,{children:i}),V=()=>{const i=m(),{statistics:a}=g(l=>l.statistics),[s,x]=n.useState({}),[h,d]=n.useState(!1);return n.useEffect(()=>{a&&x(a)},[a]),n.useEffect(()=>{d(!0),i(u()),d(!1)},[i]),t.jsxs(T,{children:[t.jsxs(C,{children:[t.jsxs(b,{children:[t.jsx(c,{children:t.jsx(p,{children:t.jsx("use",{href:`${o}#icon-play`})})}),t.jsxs("div",{children:[t.jsx(W,{children:s.videoCount}),t.jsx(r,{children:"Video tutorial"})]})]}),t.jsxs(S,{children:[t.jsx(v,{children:t.jsx(p,{children:t.jsx("use",{href:`${o}#icon-run`})})}),t.jsxs(y,{children:[t.jsx(k,{children:(Math.round(s.burnedCaloriesSum)/1e3).toFixed(1)??"0"}),t.jsx(r,{children:"kcal"})]})]})]}),h&&t.jsx(w,{})]})};export{L as S,V as W,R as a};
