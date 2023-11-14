import{s as i,j as t}from"./index-65859e47.js";const d=i.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`,e=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 375px;
  margin: 0 auto;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  padding-bottom: 40px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    flex-direction: row;
  }
`;function a({children:n}){return t.jsx(d,{children:t.jsx(e,{children:n})})}export{a as S};
