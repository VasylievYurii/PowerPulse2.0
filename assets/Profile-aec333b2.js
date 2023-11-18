import{s as t,u as E,b as j,r as l,g as S,j as e,c,a as F,d as A,e as B,l as $,f as P,h as H,i as O,S as M}from"./index-7c2c8f97.js";import{c as Y,a as z,b as m,d as G,F as w,e as N,f as V}from"./index.esm-b2ab5f14.js";import{T as J}from"./TitlePage-e3df1509.js";const K=t.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,I=t.div`
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
`,q=t.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,L=t.svg`
  width: 20px;
  height: 20px;
  fill: rgba(239, 137, 100, 1);
`,T=t.span`
  font-size: 18px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
`,Q=t.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,X=t.img`
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
`,Z=t.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  border: 1px solid var(--color-main-one);
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,_=t.input`
  visibility: hidden;
`,ee=t.label`
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
`,te=t.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,ie=t.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,re=t.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,ne=t.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,se=t.div`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,ae=t.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,oe=t.div`
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
`,de=t.p`
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
`,le=t.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,xe=t.div`
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
`,ce=t.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,pe=t.div`
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
`;const he=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,me=()=>{const s=E(),{userData:n}=j(x=>x.auth),{target:r}=j(x=>x.profile),[u,i]=l.useState(),[d,y]=l.useState("Hello user!"),[v,p]=l.useState(!1);l.useEffect(()=>{n&&y(n.name),n.avatarURL&&i()},[n]),l.useEffect(()=>{s(S())},[s]);const h=new FileReader;h.onloadend=()=>{i(h.result)};const R=async x=>{x.preventDefault();const k=x.target.files[0];h.readAsDataURL(k),p(!0);try{s(B(k))}catch(U){U.response&&U.response.status===404&&i(null)}p(!1)},W=()=>{s($())};return e.jsxs(pe,{children:[e.jsx(_,{id:"file-loader",type:"file",onChange:R}),e.jsxs(te,{children:[e.jsx(Q,{children:u||n.avatarURL?e.jsx(X,{src:u||`https://powerpulse-t5-backend.onrender.com/${n.avatarURL}`,sizes:"90px",onError:()=>{i(null),p(!1)},loading:"lazy"}):e.jsx(Z,{children:e.jsx("use",{href:`${c}#icon-user`})})}),e.jsx(ee,{htmlFor:"file-loader",children:e.jsx(ie,{children:e.jsx("use",{href:`${c}#icon-plus`})})})]}),e.jsxs(se,{children:[e.jsx(ne,{children:d}),e.jsx(re,{children:"User"})]}),e.jsxs(K,{children:[e.jsxs(I,{children:[e.jsxs(q,{children:[e.jsx(L,{children:e.jsx("use",{href:`${c}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(T,{children:Math.round(r.targetBmr)??"0"})]}),e.jsxs(I,{children:[e.jsxs(q,{children:[e.jsx(L,{children:e.jsx("use",{href:`${c}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(T,{children:[r.targetTime??"0"," min"]})]})]}),e.jsxs(oe,{children:[e.jsx(ae,{children:e.jsx("use",{href:`${c}#icon-exclamation`})}),e.jsx(de,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(xe,{onClick:W,children:[e.jsx(F,{to:"/welcome",children:e.jsx(ce,{children:"Logout"})}),e.jsx(le,{onClick:W,children:e.jsx("use",{href:`${c}#icon-logout`})})]}),v&&e.jsx(A,{})]})},ge=Y().shape({name:z().required("Name is required"),height:m().min(150,"Height must be at least 150 cm").max(300,"Height must be no more than 300 cm").required("Height is required"),currentWeight:m().min(35,"Current weight must be at least 35 kg").max(300,"Current weight must be no more than 300 kg").required("Current weight is required"),desiredWeight:m().min(35,"Desired weight must be at least 35 kg").max(120,"Desired weight should be no more than 120 kg").required("Desired weight is required"),birthday:G().required("Birthday is required").test("is-adult","You must be 18 years or older",function(s){return new Date().getFullYear()-new Date(s).getFullYear()>=18}),blood:m().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:z().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:m().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),ue=t.label`
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
`,fe=t.p`
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
`,be=t(w)`
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
`,je=t.span`
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
`,a=({name:s,value:n,text:r})=>e.jsxs(ue,{children:[e.jsx(be,{type:"radio",name:s,value:n}),e.jsx(je,{}),e.jsx(fe,{children:r})]}),we=t.p`
  color: #efede880;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 4px;
  text-align: start;
  margin-top: 20px;
`,ve=t.div`
  display: flex;
  margin-bottom: 32px;
  gap: 20px;
  max-width: 335px;
  padding: 0;
  text-align: start;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,ye=t.div`
  display: flex;
  max-width: 220px;
  text-align: start;
  align-self: center;
`,We=t.div`
  display: flex;
`,ke=t.div`
  max-width: 340px;
  text-align: start;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    text-align: start;
  }
`,Ue=()=>e.jsxs("div",{children:[e.jsx(we,{children:"Blood"}),e.jsxs(ve,{children:[e.jsxs(ye,{children:[e.jsx(a,{name:"blood",value:"1",text:"1"}),e.jsx(a,{name:"blood",value:"2",text:"2"}),e.jsx(a,{name:"blood",value:"3",text:"3"}),e.jsx(a,{name:"blood",value:"4",text:"4"})]}),e.jsxs(We,{children:[e.jsx(a,{name:"sex",value:"male",text:"Male"}),e.jsx(a,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs(ke,{children:[e.jsx(a,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(a,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(a,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(a,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(a,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]});t(w)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`;const f=t(w)`
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
`,C=t(w)`
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
`,ze=t.div`
  margin-top: 18px;
`,g=t.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`,Ie=t.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,qe=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`,D=t.div`
  display: flex;
  gap: 14px;
  margin-top: 14px;
  margin-bottom: 14px;
`,Le=()=>e.jsxs(ze,{children:[e.jsx(g,{children:"Basic info"}),e.jsxs(Ie,{children:[e.jsx("label",{children:e.jsx(C,{type:"text",name:"name"})}),e.jsx("label",{children:e.jsx(C,{type:"email",name:"email"})})]}),e.jsxs(qe,{children:[e.jsxs(D,{children:[e.jsxs("div",{children:[e.jsx(g,{children:"Height"}),e.jsx("label",{children:e.jsx(f,{name:"height"})})]}),e.jsxs("div",{children:[e.jsx(g,{children:"Current Weight"}),e.jsx("label",{children:e.jsx(f,{type:"text",name:"currentWeight"})})]})]}),e.jsxs(D,{children:[e.jsxs("label",{children:[e.jsx(g,{children:"Desired Weight"}),e.jsx(f,{type:"text",name:"desiredWeight"})]}),e.jsxs("label",{children:[e.jsx(g,{children:"Date of birth"}),e.jsx(f,{type:"text",name:"birthday"})]})]})]})]}),b=t.div`
  font-size: 10px;
  color: #e6533c;
`,Te=t.button`
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
`,o={name:"",email:"",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"2004-11-14"},Ce=()=>{const s=E(),{userData:n}=j(i=>i.auth),{profile:r}=j(i=>i.profile);l.useEffect(()=>{s(P())},[s]),l.useEffect(()=>{n&&(o.name=n.name,o.email=n.email),r&&(o.height=r.height,o.currentWeight=r.currentWeight,o.desiredWeight=r.desiredWeight,o.blood=r.blood,o.sex=r.sex,o.levelActivity=r.levelActivity,o.birthday=r.birthday)},[n,r]);const u=i=>{const{name:d,email:y,...v}=i,p={name:d},h={...v};s(H(p)),s(O(h))};return e.jsx(N,{initialValues:o,onSubmit:u,validationSchema:ge,children:({errors:i,touched:d})=>e.jsxs(V,{autoComplete:"off",children:[i.email&&d.email&&e.jsx(b,{children:i.email}),i.height&&d.height&&e.jsx(b,{children:i.height}),i.currentWeight&&d.currentWeight&&e.jsx(b,{children:i.currentWeight}),i.desiredWeight&&d.desiredWeight&&e.jsx(b,{children:i.desiredWeight}),e.jsx(Le,{}),e.jsx(Ue,{}),e.jsx(Te,{type:"submit",children:"Save"})]})})},Se=()=>e.jsxs(M,{children:[e.jsx(J,{children:"Profile Settings"}),e.jsxs(he,{children:[e.jsx(me,{}),e.jsx(Ce,{})]})]});export{Se as default};
