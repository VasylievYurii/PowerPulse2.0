import{s as i,r as o,u as F,b as v,j as e,c,a as L,d as $,e as z,l as C,g as T,f as E,h as P}from"./index-094429ac.js";import{S as R,T as B}from"./TitlePage-a911d479.js";import{c as O,a as k,b as h,d as H,F as D,e as Y,f as M}from"./index.esm-97d4c1ab.js";import"./emotion-styled.browser.esm-321706ac.js";const V=i.div`
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
`,G=i.div`
  border: 1px solid rgba(230, 83, 60, 1);
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,J=i.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,K=i.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,Q=i.input`
  visibility: hidden;
`,X=i.label`
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
`,Z=i.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,_=i.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,ee=i.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,ie=i.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,te=i.div`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,se=i.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,ae=i.div`
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
`,re=i.p`
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
`,ne=i.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,de=i.div`
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
`,oe=i.div`
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
`;const ce=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,xe=()=>{const[r,n]=o.useState(),[s,b]=o.useState("0"),[t,l]=o.useState("0"),[w,g]=o.useState("Hello user!"),[j,p]=o.useState(!1),y=F(),{userData:m}=v(u=>u.auth);o.useEffect(()=>{m&&(g(m.name),n(m.avatarURL))},[m]);const f=new FileReader;f.onloadend=()=>{n(f.result)};const A=async u=>{u.preventDefault();const W=u.target.files[0];f.readAsDataURL(W),p(!0),y(z(W)),p(!1)},N=()=>{y(C())};return e.jsxs(oe,{children:[e.jsx(Q,{id:"file-loader",type:"file",onChange:A}),e.jsxs(Z,{children:[e.jsx(G,{children:r?e.jsx(J,{src:`https://powerpulse-t5-backend.onrender.com/${r}`,sizes:"90px"}):e.jsx(K,{children:e.jsx("use",{href:`${c}#icon-user`})})}),e.jsx(X,{htmlFor:"file-loader",children:e.jsx(_,{children:e.jsx("use",{href:`${c}#icon-plus`})})})]}),e.jsxs(te,{children:[e.jsx(ie,{children:w}),e.jsx(ee,{children:"User"})]}),e.jsxs(V,{children:[e.jsxs(U,{children:[e.jsxs(q,{children:[e.jsx(S,{children:e.jsx("use",{href:`${c}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(I,{children:s})]}),e.jsxs(U,{children:[e.jsxs(q,{children:[e.jsx(S,{children:e.jsx("use",{href:`${c}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(I,{children:[t," min"]})]})]}),e.jsxs(ae,{children:[e.jsx(se,{children:e.jsx("use",{href:`${c}#icon-exclamation`})}),e.jsx(re,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(de,{onClick:N,children:[e.jsx(L,{to:"/welcome",children:e.jsx(le,{children:"Logout"})}),e.jsx(ne,{onClick:N,children:e.jsx("use",{href:`${c}#icon-logout`})})]}),j&&e.jsx($,{})]})},he=O().shape({name:k().required("Name is required"),height:h().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:h().min(35,"Current weight must be at least 35 kg").required("Current weight is required"),desiredWeight:h().min(35,"Desired weight must be at least 35 kg").required("Desired weight is required"),birthday:H().required("Birthday is required").test("is-adult","You must be 18 years or older",function(r){return new Date().getFullYear()-new Date(r).getFullYear()>=18}),blood:h().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:k().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:h().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")});const a=({name:r,value:n,text:s})=>e.jsxs("label",{className:"radio-label",children:[e.jsx(D,{className:"radio-input",type:"radio",name:r,value:n}),e.jsx("span",{className:"custom-radio"}),e.jsx("p",{className:"radio-text",children:s})]}),pe=()=>e.jsxs("div",{children:[e.jsx("p",{className:"text-blood",children:"Blood"}),e.jsxs("div",{className:"content-blood-gender",children:[e.jsxs("div",{className:"content-blood",children:[e.jsx(a,{name:"blood",value:"1",text:"1"}),e.jsx(a,{name:"blood",value:"2",text:"2"}),e.jsx(a,{name:"blood",value:"3",text:"3"}),e.jsx(a,{name:"blood",value:"4",text:"4"})]}),e.jsxs("div",{className:"content-gender",children:[e.jsx(a,{name:"sex",value:"male",text:"Male"}),e.jsx(a,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs("div",{className:"lifestyle-btn",children:[e.jsx(a,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(a,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(a,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(a,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(a,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]}),me=()=>e.jsxs("div",{className:"contant-useForm",children:[e.jsx("p",{className:"text-info",children:"Basic info"}),e.jsxs("div",{className:"login-email",children:[e.jsx("label",{children:e.jsx(x,{type:"text",name:"name",className:"login-email-input"})}),e.jsx("label",{children:e.jsx(x,{type:"email",name:"email",className:"login-email-input"})})]}),e.jsxs("div",{className:"tablet-input",children:[e.jsxs("div",{className:"heigh-weight",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-info",children:"Height"}),e.jsx("label",{children:e.jsx(x,{name:"height",className:"wh-input"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-info",children:"Current Weight"}),e.jsx("label",{children:e.jsx(x,{type:"text",name:"currentWeight",className:"wh-input"})})]})]}),e.jsxs("div",{className:"heigh-weight",children:[e.jsxs("label",{children:[e.jsx("p",{className:"text-info",children:"Desired Weight"}),e.jsx(x,{type:"text",name:"desiredWeight",className:"wh-input"})]}),e.jsxs("label",{children:[e.jsx("p",{className:"calendar",children:"Calendar"}),e.jsx(x,{type:"text",name:"birthday",className:"wh-input datepicker"})]})]})]})]}),x=i(D)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`,d={name:"",email:"",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"2004-11-14"},ue=()=>{const r=F(),{userData:n}=v(t=>t.auth),{profile:s}=v(t=>t.profile);o.useEffect(()=>{n&&(r(T()),d.name=n.name,d.email=n.email,s&&(d.height=s.height,d.currentWeight=s.currentWeight,d.desiredWeight=s.desiredWeight,d.blood=s.blood,d.sex=s.sex,d.levelActivity=s.levelActivity,d.birthday=s.birthday))},[n]);const b=t=>{const{name:l,email:w,...g}=t,j={name:l},p={...g};r(E(j)),r(P(p))};return e.jsx(Y,{initialValues:d,onSubmit:b,validationSchema:he,children:({errors:t,touched:l})=>e.jsxs(M,{autoComplete:"off",className:"formik",children:[t.email&&l.email&&e.jsx("div",{className:"error-mess",children:t.email}),t.height&&l.height&&e.jsx("div",{className:"error-mess",children:t.height}),t.currentWeight&&l.currentWeight&&e.jsx("div",{className:"error-mess",children:t.currentWeight}),t.desiredWeight&&l.desiredWeight&&e.jsx("div",{className:"error-mess",children:t.desiredWeight}),e.jsx(me,{}),e.jsx(pe,{}),e.jsx("button",{type:"submit",className:"submit-btn",children:"Save"})]})})},be=()=>e.jsxs(R,{children:[e.jsx(B,{children:"Profile Settings"}),e.jsxs(ce,{children:[e.jsx(xe,{}),e.jsx(ue,{})]})]});export{be as default};
