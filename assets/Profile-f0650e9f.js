import{s as i,u as D,b,r as o,j as e,c as x,a as C,d as L,e as $,l as E,g as T,f as P,h as R,S as B}from"./index-39e9d848.js";import{c as O,a as k,b as p,d as H,F,e as Y,f as M}from"./index.esm-6b1b747d.js";import{T as V}from"./TitlePage-0c98f304.js";const G=i.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,U=i.div`
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
`,q=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,S=i.svg`
  width: 20px;
  height: 20px;
  fill: rgba(239, 137, 100, 1);
`,I=i.span`
  font-size: 18px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
`,J=i.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,K=i.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  object-fit: cover;
  border: 1px solid var(--color-main-one);
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,Q=i.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  border: 1px solid var(--color-main-one);
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,X=i.input`
  visibility: hidden;
`,Z=i.label`
  border: 0px solid rgba(230, 83, 60, 1);
  border-radius: 50%;
  padding: 0;
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,_=i.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,ee=i.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,ie=i.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,te=i.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,se=i.div`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,ae=i.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,re=i.div`
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
`,ne=i.p`
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
`,de=i.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,oe=i.div`
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
`,le=i.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,ce=i.div`
  @media screen and (min-width: 768px) {
    width: 439px;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 49px;
    border-left: 3px solid rgba(239, 237, 232, 0.2);
  }
`;i.h2`
  font-size: 24px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
  }
`;const xe=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,he=()=>{const r=D(),{userData:a}=b(m=>m.auth),[s,c]=o.useState(),[t,l]=o.useState("0"),[v,w]=o.useState("0"),[u,g]=o.useState("Hello user!"),[z,j]=o.useState(!1);o.useEffect(()=>{a&&(g(a.name),c(a.avatarURL))},[a]);const f=new FileReader;f.onloadend=()=>{c(f.result)};const A=async m=>{m.preventDefault();const N=m.target.files[0];f.readAsDataURL(N),j(!0);try{r($(N))}catch(W){W.response&&W.response.status===404&&c(null)}j(!1)},y=()=>{r(E())};return e.jsxs(ce,{children:[e.jsx(X,{id:"file-loader",type:"file",onChange:A}),e.jsxs(_,{children:[e.jsx(J,{children:s?e.jsx(K,{src:`https://powerpulse-t5-backend.onrender.com/${s}`,sizes:"90px",onError:()=>{c(null),j(!1)},loading:"lazy"}):e.jsx(Q,{children:e.jsx("use",{href:`${x}#icon-user`})})}),e.jsx(Z,{htmlFor:"file-loader",children:e.jsx(ee,{children:e.jsx("use",{href:`${x}#icon-plus`})})})]}),e.jsxs(se,{children:[e.jsx(te,{children:u}),e.jsx(ie,{children:"User"})]}),e.jsxs(G,{children:[e.jsxs(U,{children:[e.jsxs(q,{children:[e.jsx(S,{children:e.jsx("use",{href:`${x}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(I,{children:t})]}),e.jsxs(U,{children:[e.jsxs(q,{children:[e.jsx(S,{children:e.jsx("use",{href:`${x}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(I,{children:[v," min"]})]})]}),e.jsxs(re,{children:[e.jsx(ae,{children:e.jsx("use",{href:`${x}#icon-exclamation`})}),e.jsx(ne,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(oe,{onClick:y,children:[e.jsx(C,{to:"/welcome",children:e.jsx(le,{children:"Logout"})}),e.jsx(de,{onClick:y,children:e.jsx("use",{href:`${x}#icon-logout`})})]}),z&&e.jsx(L,{})]})},pe=O().shape({name:k().required("Name is required"),height:p().min(150,"Height must be at least 150 cm").max(300,"Height must be no more than 300 cm").required("Height is required"),currentWeight:p().min(35,"Current weight must be at least 35 kg").max(300,"Current weight must be no more than 300 kg").required("Current weight is required"),desiredWeight:p().min(35,"Desired weight must be at least 35 kg").max(120,"Desired weight should be no more than 120 kg").required("Desired weight is required"),birthday:H().required("Birthday is required").test("is-adult","You must be 18 years or older",function(r){return new Date().getFullYear()-new Date(r).getFullYear()>=18}),blood:p().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:k().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:p().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")});const n=({name:r,value:a,text:s})=>e.jsxs("label",{className:"radio-label",children:[e.jsx(F,{className:"radio-input",type:"radio",name:r,value:a}),e.jsx("span",{className:"custom-radio"}),e.jsx("p",{className:"radio-text",children:s})]}),me=()=>e.jsxs("div",{children:[e.jsx("p",{className:"text-blood",children:"Blood"}),e.jsxs("div",{className:"content-blood-gender",children:[e.jsxs("div",{className:"content-blood",children:[e.jsx(n,{name:"blood",value:"1",text:"1"}),e.jsx(n,{name:"blood",value:"2",text:"2"}),e.jsx(n,{name:"blood",value:"3",text:"3"}),e.jsx(n,{name:"blood",value:"4",text:"4"})]}),e.jsxs("div",{className:"content-gender",children:[e.jsx(n,{name:"sex",value:"male",text:"Male"}),e.jsx(n,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs("div",{className:"lifestyle-btn",children:[e.jsx(n,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(n,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(n,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(n,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(n,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]}),ue=()=>e.jsxs("div",{className:"contant-useForm",children:[e.jsx("p",{className:"text-info",children:"Basic info"}),e.jsxs("div",{className:"login-email",children:[e.jsx("label",{children:e.jsx(h,{type:"text",name:"name",className:"login-email-input"})}),e.jsx("label",{children:e.jsx(h,{type:"email",name:"email",className:"login-email-input"})})]}),e.jsxs("div",{className:"tablet-input",children:[e.jsxs("div",{className:"heigh-weight",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-info",children:"Height"}),e.jsx("label",{children:e.jsx(h,{name:"height",className:"wh-input"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-info",children:"Current Weight"}),e.jsx("label",{children:e.jsx(h,{type:"text",name:"currentWeight",className:"wh-input"})})]})]}),e.jsxs("div",{className:"heigh-weight",children:[e.jsxs("label",{children:[e.jsx("p",{className:"text-info",children:"Desired Weight"}),e.jsx(h,{type:"text",name:"desiredWeight",className:"wh-input"})]}),e.jsxs("label",{children:[e.jsx("p",{className:"calendar",children:"Calendar"}),e.jsx(h,{type:"text",name:"birthday",className:"wh-input datepicker"})]})]})]})]}),h=i(F)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`,d={name:"",email:"",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"2004-11-14"},ge=()=>{const r=D(),{userData:a}=b(t=>t.auth),{profile:s}=b(t=>t.profile);o.useEffect(()=>{r(T())},[r]),o.useEffect(()=>{a&&(d.name=a.name,d.email=a.email),s&&(d.height=s.height,d.currentWeight=s.currentWeight,d.desiredWeight=s.desiredWeight,d.blood=s.blood,d.sex=s.sex,d.levelActivity=s.levelActivity,d.birthday=s.birthday)},[a,s]);const c=t=>{const{name:l,email:v,...w}=t,u={name:l},g={...w};r(P(u)),r(R(g))};return e.jsx(Y,{initialValues:d,onSubmit:c,validationSchema:pe,children:({errors:t,touched:l})=>e.jsxs(M,{autoComplete:"off",className:"formik",children:[t.email&&l.email&&e.jsx("div",{className:"error-mess",children:t.email}),t.height&&l.height&&e.jsx("div",{className:"error-mess",children:t.height}),t.currentWeight&&l.currentWeight&&e.jsx("div",{className:"error-mess",children:t.currentWeight}),t.desiredWeight&&l.desiredWeight&&e.jsx("div",{className:"error-mess",children:t.desiredWeight}),e.jsx(ue,{}),e.jsx(me,{}),e.jsx("button",{type:"submit",className:"submit-btn",children:"Save"})]})})},ve=()=>e.jsxs(B,{children:[e.jsx(V,{children:"Profile Settings"}),e.jsxs(xe,{children:[e.jsx(he,{}),e.jsx(ge,{})]})]});export{ve as default};
