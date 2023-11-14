import{s as i,r as n,u as A,b as y,j as e,c as d,d as L,e as R}from"./index-d60d8388.js";import{S as D}from"./SectionTemplate-ed1684f9.js";import{F as N,c as q,a as m,b as c,d as C,e as E,f as T}from"./index.esm-f742a218.js";import"./emotion-styled.browser.esm-0dd176f7.js";const P=i.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,j=i.div`
  width: 157px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);
  color: rgba(239, 237, 232, 0.8);
  @media screen and (min-width: 768px) {
    width: 214px;
    height: 108px;
  }
`,f=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,v=i.svg`
  width: 20px;
  height: 20px;
  fill: rgba(239, 137, 100, 1);
`,b=i.use`
  font-size: 18px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
`,B=i.div`
  border: 1px solid rgba(230, 83, 60, 1);
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,M=i.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,V=i.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,H=i.input`
  visibility: hidden;
`,G=i.label`
  border: 0px solid rgba(230, 83, 60, 1);
  border-radius: 50%;
  padding: 0;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 47%;
  bottom: -9px;
  align-items: center;
  display: flex;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    left: 47%;
    bottom: -13px;
  }
`,J=i.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,K=i.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,O=i.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,Q=i.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,X=i.div`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,Y=i.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,Z=i.div`
  display: flex;
  width: 335px;
  gap: 8px;
  margin-bottom: 40px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    width: 420px;
  }
  @media screen and (min-width: 1440px) {
    width: 439px;
  }
`,_=i.p`
  width: 303px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.3);
  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 1440px) {
    width: 360px;
  }
`,ee=i.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,ie=i.div`
  display: flex;
  gap: 4px;
  height: 21px;
  align-items: center;
  justify-content: end;
  width: 335px;
  @media screen and (min-width: 768px) {
    width: 460px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,te=i.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,se=i.div`
  @media screen and (min-width: 768px) {
    width: 439px;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 49px;
    border-left: 3px solid rgba(239, 237, 232, 0.2);
  }
`,ae=i.h2`
  font-size: 24px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
  }
`,ne=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,re=()=>{const[a,r]=n.useState(),[t,o]=n.useState("0"),[W,k]=n.useState("0"),[U,S]=n.useState("Anna Rybachok"),[F,g]=n.useState(!1),I=A(),{userData:x}=y(p=>p.auth);n.useEffect(()=>{x&&(S(x.name),r(x.avatarURL))},[x]);const h=new FileReader;h.onloadend=()=>{r(h.result)};const $=async p=>{p.preventDefault();const u=p.target.files[0];h.readAsDataURL(u),g(!0),await I(R(u)),g(!1)},z=()=>{console.log("logout"),o(105),k(200)};return e.jsxs(se,{children:[e.jsx(H,{id:"file-loader",type:"file",onChange:$}),e.jsxs(J,{children:[e.jsx(B,{children:a?e.jsx(M,{src:`https://powerpulse-t5-backend.onrender.com/${a}`,sizes:"90px"}):e.jsx(V,{children:e.jsx("use",{href:`${d}#icon-user`})})}),e.jsx(G,{htmlFor:"file-loader",children:e.jsx(K,{children:e.jsx("use",{href:`${d}#icon-plus`})})})]}),e.jsxs(X,{children:[e.jsx(Q,{children:U}),e.jsx(O,{children:"User"})]}),e.jsxs(P,{children:[e.jsxs(j,{children:[e.jsxs(f,{children:[e.jsx(v,{children:e.jsx("use",{href:`${d}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(b,{children:t})]}),e.jsxs(j,{children:[e.jsxs(f,{children:[e.jsx(v,{children:e.jsx("use",{href:`${d}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(b,{children:[W," min"]})]})]}),e.jsxs(Z,{children:[e.jsx(Y,{children:e.jsx("use",{href:`${d}#icon-exclamation`})}),e.jsx(_,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(ie,{children:[e.jsx(te,{children:"Logout"}),e.jsx(ee,{onClick:z,children:e.jsx("use",{href:`${d}#icon-logout`})})]}),F&&e.jsx(L,{})]})};const s=({name:a,value:r,text:t})=>e.jsxs("label",{className:"radio-label",children:[e.jsx(N,{className:"radio-input",type:"radio",name:a,value:r}),e.jsx("span",{className:"custom-radio"}),e.jsx("p",{className:"radio-text",children:t})]}),oe=()=>e.jsxs("div",{children:[e.jsx("p",{className:"text-blood",children:"Blood"}),e.jsxs("div",{className:"content-blood-gender",children:[e.jsxs("div",{className:"content-blood",children:[e.jsx(s,{name:"blood",value:"1",text:"1"}),e.jsx(s,{name:"blood",value:"2",text:"2"}),e.jsx(s,{name:"blood",value:"3",text:"3"}),e.jsx(s,{name:"blood",value:"4",text:"4"})]}),e.jsxs("div",{className:"content-gender",children:[e.jsx(s,{name:"sex",value:"male",text:"Male"}),e.jsx(s,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs("div",{className:"lifestyle-btn",children:[e.jsx(s,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(s,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(s,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(s,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(s,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]}),de=()=>e.jsxs("div",{className:"contant-useForm",children:[e.jsx("p",{className:"text-info",children:"Basic info"}),e.jsxs("div",{className:"login-email",children:[e.jsx("label",{children:e.jsx(l,{type:"text",name:"login",className:"login-email-input"})}),e.jsx("label",{children:e.jsx(l,{type:"email",name:"email",className:"login-email-input"})})]}),e.jsxs("div",{className:"tablet-input",children:[e.jsxs("div",{className:"heigh-weight",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-info",children:"Height"}),e.jsx("label",{children:e.jsx(l,{name:"height",className:"wh-input"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-info",children:"Current Weight"}),e.jsx("label",{children:e.jsx(l,{type:"text",name:"currentWeight",className:"wh-input"})})]})]}),e.jsxs("div",{className:"heigh-weight",children:[e.jsxs("label",{children:[e.jsx("p",{className:"text-info",children:"Desired Weight"}),e.jsx(l,{type:"text",name:"desiredWeight",className:"wh-input"})]}),e.jsxs("label",{children:[e.jsx("p",{className:"calendar",children:"Calendar"}),e.jsx(l,{type:"text",name:"birthday",className:"wh-input datepicker"})]})]})]})]}),l=i(N)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`;let le=q({login:m().required(),email:m().email(),sex:m().required(),blood:c().required().positive().integer(),height:c().required().positive().integer().min(150),levelActivity:c().required().positive().integer(),currentWeight:c().required().positive().integer().min(35),desiredWeight:c().required().positive().integer().min(35),birthday:C().default(()=>new Date)});const w={login:"Anna Rybachok",email:"annarybachok@gmail.com",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"05.05.2020"},ce=()=>{const{userData:a}=y(t=>t.auth);n.useEffect(()=>{a&&(w.email=a.email)},[a]);const r=t=>{console.log(t),console.log(t.login)};return e.jsx("div",{children:e.jsx(E,{initialValues:w,onSubmit:r,validationSchema:le,children:({errors:t,touched:o})=>e.jsxs(T,{autoComplete:"off",className:"formik",children:[t.email&&o.email&&e.jsx("div",{className:"error-mess",children:t.email}),t.height&&o.height&&e.jsx("div",{className:"error-mess",children:t.height}),t.currentWeight&&o.currentWeight&&e.jsx("div",{className:"error-mess",children:t.currentWeight}),t.desiredWeight&&o.desiredWeight&&e.jsx("div",{className:"error-mess",children:t.desiredWeight}),e.jsx(de,{}),e.jsx(oe,{}),e.jsx("button",{type:"submit",className:"submit-btn",children:"Save"})]})})})},ge=()=>e.jsxs(D,{children:[e.jsx(ae,{children:"Profile Settings"}),e.jsxs(ne,{children:[e.jsx(re,{}),e.jsx(ce,{})]})]});export{ge as default};
