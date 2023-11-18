import{s as t,u as F,b as y,r as d,j as e,c,a as B,d as $,e as P,l as H,g as O,f as Y,h as G,S as M}from"./index-8744f8e7.js";import{c as N,a as q,b as p,d as V,F as f,e as J,f as K}from"./index.esm-43dcb73f.js";import{T as Q}from"./TitlePage-0f4e796e.js";const X=t.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,S=t.div`
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
`,C=t.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,L=t.svg`
  width: 20px;
  height: 20px;
  fill: rgba(239, 137, 100, 1);
`,D=t.span`
  font-size: 18px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
`,Z=t.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,_=t.img`
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
`,ee=t.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  border: 1px solid var(--color-main-one);
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,te=t.input`
  visibility: hidden;
`,ie=t.label`
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
`,ne=t.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,re=t.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,se=t.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,ae=t.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,oe=t.div`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,de=t.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,le=t.div`
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
`,xe=t.p`
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
`,ce=t.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,pe=t.div`
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
`,he=t.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,me=t.div`
  @media screen and (min-width: 768px) {
    width: 439px;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 49px;
    border-left: 3px solid rgba(239, 237, 232, 0.2);
  }
`;t.h2`
  font-size: 24px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
  }
`;const ge=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,ue=()=>{const s=F(),{userData:r}=y(m=>m.auth),[n,x]=d.useState(),[i,l]=d.useState("0"),[W,k]=d.useState("0"),[b,j]=d.useState("Hello user!"),[R,w]=d.useState(!1);d.useEffect(()=>{r&&(j(r.name),x(r.avatarURL))},[r]);const v=new FileReader;v.onloadend=()=>{x(v.result)};const A=async m=>{m.preventDefault();const z=m.target.files[0];v.readAsDataURL(z),w(!0);try{s(P(z))}catch(I){I.response&&I.response.status===404&&x(null)}w(!1)},U=()=>{s(H())};return e.jsxs(me,{children:[e.jsx(te,{id:"file-loader",type:"file",onChange:A}),e.jsxs(ne,{children:[e.jsx(Z,{children:n?e.jsx(_,{src:`https://powerpulse-t5-backend.onrender.com/${n}`,sizes:"90px",onError:()=>{x(null),w(!1)},loading:"lazy"}):e.jsx(ee,{children:e.jsx("use",{href:`${c}#icon-user`})})}),e.jsx(ie,{htmlFor:"file-loader",children:e.jsx(re,{children:e.jsx("use",{href:`${c}#icon-plus`})})})]}),e.jsxs(oe,{children:[e.jsx(ae,{children:b}),e.jsx(se,{children:"User"})]}),e.jsxs(X,{children:[e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsx(L,{children:e.jsx("use",{href:`${c}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(D,{children:i})]}),e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsx(L,{children:e.jsx("use",{href:`${c}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(D,{children:[W," min"]})]})]}),e.jsxs(le,{children:[e.jsx(de,{children:e.jsx("use",{href:`${c}#icon-exclamation`})}),e.jsx(xe,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(pe,{onClick:U,children:[e.jsx(B,{to:"/welcome",children:e.jsx(he,{children:"Logout"})}),e.jsx(ce,{onClick:U,children:e.jsx("use",{href:`${c}#icon-logout`})})]}),R&&e.jsx($,{})]})},fe=N().shape({name:q().required("Name is required"),height:p().min(150,"Height must be at least 150 cm").max(300,"Height must be no more than 300 cm").required("Height is required"),currentWeight:p().min(35,"Current weight must be at least 35 kg").max(300,"Current weight must be no more than 300 kg").required("Current weight is required"),desiredWeight:p().min(35,"Desired weight must be at least 35 kg").max(120,"Desired weight should be no more than 120 kg").required("Desired weight is required"),birthday:V().required("Birthday is required").test("is-adult","You must be 18 years or older",function(s){return new Date().getFullYear()-new Date(s).getFullYear()>=18}),blood:p().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:q().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:p().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),be=t.label`
  display: flex;
  color: #efede8;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  margin-right: 5px;
  align-items: center;

  margin-bottom: 8px;
`,je=t.p`
  display: flex;
  padding-left: 2px;
  margin: 0;
  color: rgba(239, 237, 232, 1);
  max-width: 305px;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    padding-left: 2px;
    margin: 0;
    justify-content: end;
    max-width: 500px;
    align-items: center;
  }
`,we=t(f)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;

  left: -5px;
  border: 2px solid #999;
  transition: 0.2s all linear;
  outline: none;

  margin: 0;
  position: relative;
  visibility: hidden;
  &:checked + span {
    border: 2px solid #ef8964;
  }
  &:checked + span:after {
    opacity: 1;
  }
`,ve=t.span`
  left: -4px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 2px solid #9a9a9a;
  border-radius: 50%;
  display: flex;
  position: relative;
  &::after {
    content: '';
    width: 12px;
    height: 12px;
    background: #ef8964;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s;
  }
`,a=({name:s,value:r,text:n})=>e.jsxs(be,{children:[e.jsx(we,{type:"radio",name:s,value:r}),e.jsx(ve,{}),e.jsx(je,{children:n})]}),ye=t.p`
  color: #efede880;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 4px;
  text-align: start;
  margin-top: 20px;
`,We=t.div`
  display: flex;
  margin-bottom: 32px;
  gap: 20px;
  max-width: 335px;
  padding: 0;
  text-align: start;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,ke=t.div`
  display: flex;
  max-width: 220px;
  text-align: start;
  align-self: center;
`,Ue=t.div`
  display: flex;
`,ze=t.div`
  max-width: 340px;
  text-align: start;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    text-align: start;
  }
`,Ie=()=>e.jsxs("div",{children:[e.jsx(ye,{children:"Blood"}),e.jsxs(We,{children:[e.jsxs(ke,{children:[e.jsx(a,{name:"blood",value:"1",text:"1"}),e.jsx(a,{name:"blood",value:"2",text:"2"}),e.jsx(a,{name:"blood",value:"3",text:"3"}),e.jsx(a,{name:"blood",value:"4",text:"4"})]}),e.jsxs(Ue,{children:[e.jsx(a,{name:"sex",value:"male",text:"Male"}),e.jsx(a,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs(ze,{children:[e.jsx(a,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(a,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(a,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(a,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(a,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]});t(f)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`;const g=t(f)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
  width: 140px;
  padding-left: 14px;
  font-size: 14px;
  height: 46px;
  @media screen and (min-width: 768px) {
    width: 163px;
    height: 52px;
  }
`,E=t(f)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
  width: 315px;
  padding-left: 14px;
  font-size: 14px;
  height: 46px;
  @media screen and (min-width: 768px) {
    width: 341px;
    height: 52px;
  }
`,qe=t.div`
  margin-top: 18px;
`,h=t.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`,Se=t.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Ce=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`,T=t.div`
  display: flex;
  gap: 14px;
  margin-top: 14px;
  margin-bottom: 14px;
`,Le=()=>e.jsxs(qe,{children:[e.jsx(h,{children:"Basic info"}),e.jsxs(Se,{children:[e.jsx("label",{children:e.jsx(E,{type:"text",name:"name"})}),e.jsx("label",{children:e.jsx(E,{type:"email",name:"email"})})]}),e.jsxs(Ce,{children:[e.jsxs(T,{children:[e.jsxs("div",{children:[e.jsx(h,{children:"Height"}),e.jsx("label",{children:e.jsx(g,{name:"height"})})]}),e.jsxs("div",{children:[e.jsx(h,{children:"Current Weight"}),e.jsx("label",{children:e.jsx(g,{type:"text",name:"currentWeight"})})]})]}),e.jsxs(T,{children:[e.jsxs("label",{children:[e.jsx(h,{children:"Desired Weight"}),e.jsx(g,{type:"text",name:"desiredWeight"})]}),e.jsxs("label",{children:[e.jsx(h,{children:"Date of birth"}),e.jsx(g,{type:"text",name:"birthday"})]})]})]})]}),u=t.div`
  font-size: 10px;
  color: #e6533c;
`,De=t.button`
  display: flex;
  align-items: center;
  margin-top: 40px;
  width: 115px;
  height: 42px;
  justify-content: center;
  background-color: #e6533c;
  border-radius: 12px;
  color: #efede8;
  border-width: 0;
`,o={name:"",email:"",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"2004-11-14"},Ee=()=>{const s=F(),{userData:r}=y(i=>i.auth),{profile:n}=y(i=>i.profile);d.useEffect(()=>{s(O())},[s]),d.useEffect(()=>{r&&(o.name=r.name,o.email=r.email),n&&(o.height=n.height,o.currentWeight=n.currentWeight,o.desiredWeight=n.desiredWeight,o.blood=n.blood,o.sex=n.sex,o.levelActivity=n.levelActivity,o.birthday=n.birthday)},[r,n]);const x=i=>{const{name:l,email:W,...k}=i,b={name:l},j={...k};s(Y(b)),s(G(j))};return e.jsx(J,{initialValues:o,onSubmit:x,validationSchema:fe,children:({errors:i,touched:l})=>e.jsxs(K,{autoComplete:"off",children:[i.email&&l.email&&e.jsx(u,{children:i.email}),i.height&&l.height&&e.jsx(u,{children:i.height}),i.currentWeight&&l.currentWeight&&e.jsx(u,{children:i.currentWeight}),i.desiredWeight&&l.desiredWeight&&e.jsx(u,{children:i.desiredWeight}),e.jsx(Le,{}),e.jsx(Ie,{}),e.jsx(De,{type:"submit",children:"Save"})]})})},Ae=()=>e.jsxs(M,{children:[e.jsx(Q,{children:"Profile Settings"}),e.jsxs(ge,{children:[e.jsx(ue,{}),e.jsx(Ee,{})]})]});export{Ae as default};
