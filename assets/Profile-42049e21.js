import{s as i,r as d,j as e,a}from"./index-5de9d894.js";import{S as I}from"./SectionTemplate-52e00399.js";import{F as b,c as A,a as h,b as l,d as R,e as $,f as z}from"./index.esm-24733429.js";import"./emotion-styled.browser.esm-82f5e84b.js";const T=i.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,g=i.div`
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
`,u=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,j=i.svg`
  width: 20px;
  height: 20px;
  fill: rgba(239, 137, 100, 1);
`,v=i.use`
  font-size: 18px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
`,q=i.div`
  border: 1px solid rgba(230, 83, 60, 1);
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,C=i.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,D=i.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,L=i.input`
  visibility: hidden;
`,P=i.label`
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
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    left: 47%;
    bottom: -13px;
  }
`,E=i.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,B=i.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,H=i.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,M=i.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,V=i.div`
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
`,_=i.div`
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
`,G=i.p`
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
`,J=i.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,K=i.div`
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
`,Q=i.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,X=i.div`
  @media screen and (min-width: 768px) {
    width: 439px;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 49px;
    border-left: 3px solid rgba(239, 237, 232, 0.2);
  }
`,Y=i.h2`
  font-size: 24px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
  }
`,Z=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,ee="https://powerpulse-t5-backend.onrender.com/api/users/avatars",ie=()=>{const[o,t]=d.useState(),[n,f]=d.useState(),[w,y]=d.useState("0"),[N,W]=d.useState("0"),[k,oe]=d.useState("Anna Rybachok"),x=new FileReader;x.onloadend=()=>{f(x.result)};const U=async p=>{p.preventDefault();const c=p.target.files[0];t(c),console.log(c),x.readAsDataURL(c);const m=new FormData;m.append("avatar",c);const F=await(await fetch(ee,{method:"PATCH",body:m})).json();console.log(F)},S=()=>{console.log("logout"),y(105),W(200)};return e.jsxs(X,{children:[e.jsx(L,{id:"file-loader",type:"file",onChange:U}),e.jsxs(E,{children:[e.jsx(q,{children:o?e.jsx(C,{src:n,width:"90",height:"90"}):e.jsx(D,{children:e.jsx("use",{href:`${a}#icon-user`})})}),e.jsx(P,{htmlFor:"file-loader",children:e.jsx(B,{children:e.jsx("use",{href:`${a}#icon-plus`})})})]}),e.jsxs(V,{children:[e.jsx(M,{children:k}),e.jsx(H,{children:"User"})]}),e.jsxs(T,{children:[e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(j,{children:e.jsx("use",{href:`${a}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(v,{children:w})]}),e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(j,{children:e.jsx("use",{href:`${a}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(v,{children:[N," min"]})]})]}),e.jsxs(_,{children:[e.jsx(O,{children:e.jsx("use",{href:`${a}#icon-exclamation`})}),e.jsx(G,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(K,{children:[e.jsx(Q,{children:"Logout"}),e.jsx(J,{onClick:S,children:e.jsx("use",{href:`${a}#icon-logout`})})]})]})};const s=({name:o,value:t,text:n})=>e.jsxs("label",{className:"radio-label",children:[e.jsx(b,{className:"radio-input",type:"radio",name:o,value:t}),e.jsx("span",{className:"custom-radio"}),e.jsx("p",{className:"radio-text",children:n})]}),te=()=>e.jsxs("div",{children:[e.jsx("p",{className:"text-blood",children:"Blood"}),e.jsxs("div",{className:"content-blood-gender",children:[e.jsxs("div",{className:"content-blood",children:[e.jsx(s,{name:"blood",value:"1",text:"1"}),e.jsx(s,{name:"blood",value:"2",text:"2"}),e.jsx(s,{name:"blood",value:"3",text:"3"}),e.jsx(s,{name:"blood",value:"4",text:"4"})]}),e.jsxs("div",{className:"content-gender",children:[e.jsx(s,{name:"sex",value:"male",text:"Male"}),e.jsx(s,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs("div",{className:"lifestyle-btn",children:[e.jsx(s,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(s,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(s,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(s,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(s,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]}),se=()=>e.jsxs("div",{className:"contant-useForm",children:[e.jsx("p",{className:"text-info",children:"Basic info"}),e.jsxs("div",{className:"login-email",children:[e.jsx("label",{children:e.jsx(r,{type:"text",name:"login",className:"login-email-input"})}),e.jsx("label",{children:e.jsx(r,{type:"email",name:"email",className:"login-email-input"})})]}),e.jsxs("div",{className:"tablet-input",children:[e.jsxs("div",{className:"heigh-weight",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-info",children:"Height"}),e.jsx("label",{children:e.jsx(r,{name:"height",className:"wh-input"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-info",children:"Current Weight"}),e.jsx("label",{children:e.jsx(r,{type:"text",name:"currentWeight",className:"wh-input"})})]})]}),e.jsxs("div",{className:"heigh-weight",children:[e.jsxs("label",{children:[e.jsx("p",{className:"text-info",children:"Desired Weight"}),e.jsx(r,{type:"text",name:"desiredWeight",className:"wh-input"})]}),e.jsxs("label",{children:[e.jsx("p",{className:"calendar",children:"Calendar"}),e.jsx(r,{type:"text",name:"birthday",className:"wh-input datepicker"})]})]})]})]}),r=i(b)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`;let ne=A({login:h().required(),email:h().email(),sex:h().required(),blood:l().required().positive().integer(),height:l().required().positive().integer().min(150),levelActivity:l().required().positive().integer(),currentWeight:l().required().positive().integer().min(35),desiredWeight:l().required().positive().integer().min(35),birthday:R().default(()=>new Date)});const ae={login:"Anna Rybachok",email:"annarybachok@gmail.com",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"05.05.2020"},re=()=>{const o=t=>{console.log(t),console.log(t.blood)};return e.jsx("div",{children:e.jsx($,{initialValues:ae,onSubmit:o,validationSchema:ne,children:({errors:t,touched:n})=>e.jsxs(z,{autoComplete:"off",className:"formik",children:[t.email&&n.email&&e.jsx("div",{className:"error-mess",children:t.email}),t.height&&n.height&&e.jsx("div",{className:"error-mess",children:t.height}),t.currentWeight&&n.currentWeight&&e.jsx("div",{className:"error-mess",children:t.currentWeight}),t.desiredWeight&&n.desiredWeight&&e.jsx("div",{className:"error-mess",children:t.desiredWeight}),e.jsx(se,{}),e.jsx(te,{}),e.jsx("button",{type:"submit",className:"submit-btn",children:"Save"})]})})})},pe=()=>e.jsxs(I,{children:[e.jsx(Y,{children:"Profile Settings"}),e.jsxs(Z,{children:[e.jsx(ie,{}),e.jsx(re,{})]})]});export{pe as default};
