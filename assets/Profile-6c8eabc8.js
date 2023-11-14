import{s as i,r as l,u as $,b as w,j as e,c as d,d as z}from"./index-4fb91ca7.js";import{S as A}from"./SectionTemplate-0b7d218d.js";import{F as y,c as R,a as m,b as c,d as D,e as q,f as L}from"./index.esm-351fca41.js";import"./emotion-styled.browser.esm-d3bec035.js";const C=i.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,u=i.div`
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
`,j=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,v=i.svg`
  width: 20px;
  height: 20px;
  fill: rgba(239, 137, 100, 1);
`,f=i.use`
  font-size: 18px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
`,E=i.div`
  border: 1px solid rgba(230, 83, 60, 1);
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,T=i.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,P=i.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,B=i.input`
  visibility: hidden;
`,M=i.label`
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
`,V=i.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,H=i.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,G=i.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,J=i.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,K=i.div`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,O=i.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,Q=i.div`
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
`,X=i.p`
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
`,Y=i.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,Z=i.div`
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
`,_=i.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,ee=i.div`
  @media screen and (min-width: 768px) {
    width: 439px;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 49px;
    border-left: 3px solid rgba(239, 237, 232, 0.2);
  }
`,ie=i.h2`
  font-size: 24px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
  }
`,te=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,se=()=>{const[a,n]=l.useState(),[t,r]=l.useState("0"),[N,W]=l.useState("0"),[k,U]=l.useState("Anna Rybachok"),S=$(),{userData:x}=w(p=>p.auth);l.useEffect(()=>{x&&(U(x.name),n(x.avatarURL))},[x]);const h=new FileReader;h.onloadend=()=>{n(h.result)};const F=async p=>{p.preventDefault();const g=p.target.files[0];h.readAsDataURL(g),S(z(g))},I=()=>{console.log("logout"),r(105),W(200)};return e.jsxs(ee,{children:[e.jsx(B,{id:"file-loader",type:"file",onChange:F}),e.jsxs(V,{children:[e.jsx(E,{children:a?e.jsx(T,{src:`https://powerpulse-t5-backend.onrender.com/${a}`,sizes:"90px"}):e.jsx(P,{children:e.jsx("use",{href:`${d}#icon-user`})})}),e.jsx(M,{htmlFor:"file-loader",children:e.jsx(H,{children:e.jsx("use",{href:`${d}#icon-plus`})})})]}),e.jsxs(K,{children:[e.jsx(J,{children:k}),e.jsx(G,{children:"User"})]}),e.jsxs(C,{children:[e.jsxs(u,{children:[e.jsxs(j,{children:[e.jsx(v,{children:e.jsx("use",{href:`${d}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(f,{children:t})]}),e.jsxs(u,{children:[e.jsxs(j,{children:[e.jsx(v,{children:e.jsx("use",{href:`${d}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(f,{children:[N," min"]})]})]}),e.jsxs(Q,{children:[e.jsx(O,{children:e.jsx("use",{href:`${d}#icon-exclamation`})}),e.jsx(X,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(Z,{children:[e.jsx(_,{children:"Logout"}),e.jsx(Y,{onClick:I,children:e.jsx("use",{href:`${d}#icon-logout`})})]})]})};const s=({name:a,value:n,text:t})=>e.jsxs("label",{className:"radio-label",children:[e.jsx(y,{className:"radio-input",type:"radio",name:a,value:n}),e.jsx("span",{className:"custom-radio"}),e.jsx("p",{className:"radio-text",children:t})]}),ae=()=>e.jsxs("div",{children:[e.jsx("p",{className:"text-blood",children:"Blood"}),e.jsxs("div",{className:"content-blood-gender",children:[e.jsxs("div",{className:"content-blood",children:[e.jsx(s,{name:"blood",value:"1",text:"1"}),e.jsx(s,{name:"blood",value:"2",text:"2"}),e.jsx(s,{name:"blood",value:"3",text:"3"}),e.jsx(s,{name:"blood",value:"4",text:"4"})]}),e.jsxs("div",{className:"content-gender",children:[e.jsx(s,{name:"sex",value:"male",text:"Male"}),e.jsx(s,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs("div",{className:"lifestyle-btn",children:[e.jsx(s,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(s,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(s,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(s,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(s,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]}),ne=()=>e.jsxs("div",{className:"contant-useForm",children:[e.jsx("p",{className:"text-info",children:"Basic info"}),e.jsxs("div",{className:"login-email",children:[e.jsx("label",{children:e.jsx(o,{type:"text",name:"login",className:"login-email-input"})}),e.jsx("label",{children:e.jsx(o,{type:"email",name:"email",className:"login-email-input"})})]}),e.jsxs("div",{className:"tablet-input",children:[e.jsxs("div",{className:"heigh-weight",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-info",children:"Height"}),e.jsx("label",{children:e.jsx(o,{name:"height",className:"wh-input"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-info",children:"Current Weight"}),e.jsx("label",{children:e.jsx(o,{type:"text",name:"currentWeight",className:"wh-input"})})]})]}),e.jsxs("div",{className:"heigh-weight",children:[e.jsxs("label",{children:[e.jsx("p",{className:"text-info",children:"Desired Weight"}),e.jsx(o,{type:"text",name:"desiredWeight",className:"wh-input"})]}),e.jsxs("label",{children:[e.jsx("p",{className:"calendar",children:"Calendar"}),e.jsx(o,{type:"text",name:"birthday",className:"wh-input datepicker"})]})]})]})]}),o=i(y)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`;let re=R({login:m().required(),email:m().email(),sex:m().required(),blood:c().required().positive().integer(),height:c().required().positive().integer().min(150),levelActivity:c().required().positive().integer(),currentWeight:c().required().positive().integer().min(35),desiredWeight:c().required().positive().integer().min(35),birthday:D().default(()=>new Date)});const b={login:"Anna Rybachok",email:"annarybachok@gmail.com",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"05.05.2020"},de=()=>{const{userData:a}=w(t=>t.auth);l.useEffect(()=>{a&&(b.email=a.email)},[a]);const n=t=>{console.log(t),console.log(t.login)};return e.jsx("div",{children:e.jsx(q,{initialValues:b,onSubmit:n,validationSchema:re,children:({errors:t,touched:r})=>e.jsxs(L,{autoComplete:"off",className:"formik",children:[t.email&&r.email&&e.jsx("div",{className:"error-mess",children:t.email}),t.height&&r.height&&e.jsx("div",{className:"error-mess",children:t.height}),t.currentWeight&&r.currentWeight&&e.jsx("div",{className:"error-mess",children:t.currentWeight}),t.desiredWeight&&r.desiredWeight&&e.jsx("div",{className:"error-mess",children:t.desiredWeight}),e.jsx(ne,{}),e.jsx(ae,{}),e.jsx("button",{type:"submit",className:"submit-btn",children:"Save"})]})})})},pe=()=>e.jsxs(A,{children:[e.jsx(ie,{children:"Profile Settings"}),e.jsxs(te,{children:[e.jsx(se,{}),e.jsx(de,{})]})]});export{pe as default};
