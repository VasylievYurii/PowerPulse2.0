import{s as i,b as te,c as re,u as O,d as T,r as p,g as X,j as e,a as f,e as ie,l as ne,f as ae,h as _,i as oe,k as se,Q as de,m as ce,n as le,o as pe}from"./index-c56250ac.js";import{c as xe,a as F,b as v,d as he,F as I,e as me,f as ge}from"./index.esm-01c85ec7.js";import{s as ue,g as z,t as fe,a as be}from"./react-datepicker-661f8511.js";import{f as ye}from"./createClass-e197c65f.js";import{T as ve}from"./TitlePage-f43d0cf8.js";const je=i.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,E=i.div`
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
`,D=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,L=i.svg`
  width: 20px;
  height: 20px;
  fill: rgba(239, 137, 100, 1);
`,A=i.span`
  font-size: 18px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
`,we=i.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,ke=i.img`
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
`,_e=i.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  border: 1px solid var(--color-main-one);
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,Se=i.input`
  visibility: hidden;
`,Te=i.label`
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
`,Ie=i.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,$e=i.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,We=i.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,Ce=i.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Oe=i.div`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,Re=i.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,Fe=i.div`
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
`,ze=i.p`
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
`,Ee=i.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,De=i(te)`
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
`,Le=i.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,Ae=i.div`
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
`;const Ue=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,qe=i(re)``,Be=({bmr:t,time:r})=>{const n=O(),{userData:a}=T(y=>y.auth),[o,s]=p.useState(a.avatarURL??null),[x,l]=p.useState("Hello user!"),[m,u]=p.useState(!1);p.useEffect(()=>{a&&(l(a.name),s(a.avatarURL))},[a]),p.useEffect(()=>{n(X())},[n]);const d=new FileReader;d.onloadend=()=>{s(d.result)};const b=async y=>{y.preventDefault();const $=y.target.files[0];d.readAsDataURL($),u(!0);try{await n(ie($))}catch(k){k.response&&k.response.status===404&&s(null)}finally{u(!1)}},c=()=>{n(ne())};return e.jsxs(Ae,{children:[e.jsx(Se,{id:"file-loader",type:"file",onChange:b}),e.jsxs(Ie,{children:[e.jsxs(we,{children:[o&&!m?e.jsx(ke,{src:o,sizes:"90px",loading:"lazy"}):null,o&&m?e.jsx(_e,{children:e.jsx("use",{href:`${f}#icon-user`})}):null,m&&e.jsx(qe,{})]}),e.jsx(Te,{htmlFor:"file-loader",children:e.jsx($e,{children:e.jsx("use",{href:`${f}#icon-plus`})})})]}),e.jsxs(Oe,{children:[e.jsx(Ce,{children:x}),e.jsx(We,{children:"User"})]}),e.jsxs(je,{children:[e.jsxs(E,{children:[e.jsxs(D,{children:[e.jsx(L,{children:e.jsx("use",{href:`${f}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(A,{children:Math.round(t)})]}),e.jsxs(E,{children:[e.jsxs(D,{children:[e.jsx(L,{children:e.jsx("use",{href:`${f}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(A,{children:[r," min"]})]})]}),e.jsxs(Fe,{children:[e.jsx(Re,{children:e.jsx("use",{href:`${f}#icon-exclamation`})}),e.jsx(ze,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(De,{to:"/welcome",onClick:c,children:[e.jsx(Le,{children:"Logout"}),e.jsx(Ee,{children:e.jsx("use",{href:`${f}#icon-logout`})})]})]})},Me=xe().shape({name:F().required("Name is required"),height:v().min(150,"Height must be at least 150 cm").max(300,"Height must be no more than 300 cm").required("Height is required"),currentWeight:v().min(35,"Current weight must be at least 35 kg").max(300,"Current weight must be no more than 300 kg").required("Current weight is required"),desiredWeight:v().min(35,"Desired weight must be at least 35 kg").max(120,"Desired weight should be no more than 120 kg").required("Desired weight is required"),birthday:he().required("Birthday is required").test("is-adult","You must be 18 years or older",function(t){return new Date().getFullYear()-new Date(t).getFullYear()>=18}),blood:v().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:F().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:v().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),Ne=i.label`
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
`,Ge=i.p`
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
`,Pe=i(I)`
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
`,He=i.span`
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
`,h=({name:t,value:r,text:n})=>e.jsxs(Ne,{children:[e.jsx(Pe,{type:"radio",name:t,value:r}),e.jsx(He,{}),e.jsx(Ge,{children:n})]}),Ye=i.p`
  color: #efede880;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 4px;
  text-align: start;
  margin-top: 20px;
`,Je=i.div`
  display: flex;
  margin-bottom: 32px;
  gap: 20px;
  max-width: 335px;
  padding: 0;
  text-align: start;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,Xe=i.div`
  display: flex;
  max-width: 220px;
  text-align: start;
  align-self: center;
`,Ve=i.div`
  display: flex;
`,Qe=i.div`
  max-width: 340px;
  text-align: start;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    text-align: start;
  }
`,Ke=()=>e.jsxs("div",{children:[e.jsx(Ye,{children:"Blood"}),e.jsxs(Je,{children:[e.jsxs(Xe,{children:[e.jsx(h,{name:"blood",value:"1",text:"1"}),e.jsx(h,{name:"blood",value:"2",text:"2"}),e.jsx(h,{name:"blood",value:"3",text:"3"}),e.jsx(h,{name:"blood",value:"4",text:"4"})]}),e.jsxs(Ve,{children:[e.jsx(h,{name:"sex",value:"male",text:"Male"}),e.jsx(h,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs(Qe,{children:[e.jsx(h,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(h,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(h,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(h,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(h,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]});i(I)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`;const W=i(I)`
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
`,U=i(I)`
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
`,Ze=i.div`
  margin-top: 18px;
`,j=i.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`,et=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,tt=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`,q=i.div`
  display: flex;
  gap: 14px;
  margin-top: 14px;
  margin-bottom: 14px;
`,rt=ae`

  .react-datepicker__wrapper {
    position: relative;
  }

  .react-datepicker {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 215px; 
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: var(--color-main-two) !important;
    font-family: Roboto;
    border-radius: 8px;
    font-size: 14px !important;
    border: none !important;
    z-index: 2 !important;
  }

  .react-datepicker__month-container {
    box-sizing: border-box;
    width: 100% !important;
    margin: 0 !important;
  }

  .react-datepicker__month {
  margin: 0 !important;
  text-align: center;
  }

  .react-datepicker__header {
    position: relative;
    width: 100% !important;
    background-color: var(--color-main-two) !important;
  }

  .react-datepicker__day-names {
    display: flex;
    width: 100% !important;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    background-color: var(--color-main-two) !important;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }

  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
  }

  .react-datepicker__current-month {
    font-family: Roboto;
    font-style: normal;
    text-align: center;
    color: var(--color-text) !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    line-height: normal !important;
    letter-spacing: -0.32px !important;
    margin:0px !important;
    margin-bottom: 14px !important;
  }

  .react-datepicker__day-name {
    color: rgba(239, 237, 232, 0.50)  !important;
    font-family: Roboto;
    font-size: 14px !important;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px !important;
  }

  .react-datepicker__navigation {
    margin-top: 7px;
    color: white;
  }

  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
    color: red !important;
  }

  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }

  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }

  .react-datepicker__week {
    display: flex;
    align-items: center;
    color: var(--color-text) !important;
    width: 100% !important;
  }

  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 32px;
    border-radius: 50% !important;
    text-align: center;
    color: var(--color-text) !important;
    font-family: Roboto;
    font-size: 14px !important;
    font-style: normal;
    font-weight: 400 ;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  .react-datepicker__month {
    display: flex;
    width: 100% !important;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 11px;
    margin: 0;
  }

  .react-datepicker__day--selected {
    background-color: black !important;
    color:#3e85f3;
    font-size: 14px;
  }

  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: black !important;
  }

  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: black !important;
    color:#3e85f3;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }

  .react-datepicker__day--weekend {
    opacity: 100%;
  }

  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 50%;
  }

  /* .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  } */

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
  color: #000;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0 !important;
  }

  .react-datepicker__tab-loop {
      position: absolute;
      top: 0;
  }
    
  .react-datepicker__triangle {
      display: none !important;
  }

  .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
  background-color: transparent !important;
  }

  .react-datepicker__day--outside-month{
  display: none !;
  }

.custom-select-style{
  font-family: Roboto;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: var(--color-text);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
   background-image: none;
   cursor: pointer;
   color: #EFEDE8;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
   transition: background-color 0.3s var(--timing-function);
   outline: none;
}

.custom-select-style:hover{
  background-color: var(--color-main-one);
  outline: none;
}

select.custom-select-style option{
  background-color: var(--color-main-two);
  
}
`,it=i.button`
  color: var(--color-text);
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`,nt=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
  min-width: 140px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  height: 46px;
  border: 2px solid rgba(239, 237, 232, 0.3);
  @media screen and (min-width: 768px) {
    min-width: 163px;
    height: 52px;
  }
`;i.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-text);
  fill: transparent;
  transition: stroke 0.3s var(--timing-function);
  cursor: pointer;
  &:hover {
    stroke: var(--color-main-two);
  }
`;const at=i.svg`
  width: 18px;
  height: 18px;
  stroke: var(--color-text);
  fill: transparent;
`,ot=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,B=i.svg`
  width: 8px;
  height: 8px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s var(--timing-function);
  &:hover {
    stroke: white;
  }
`,st=i.p`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`,M=i.div`
  width: 18px;
  height: 18px;
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.3s var(--timing-function);
  &:hover {
    background-color: var(--color-main-one);
  }
`;var dt=Math.ceil,ct=Math.max;function lt(t,r,n,a){for(var o=-1,s=ct(dt((r-t)/(n||1)),0),x=Array(s);s--;)x[a?s:++o]=t,t+=n;return x}var pt=lt;function xt(t,r){return t===r||t!==t&&r!==r}var ht=xt,mt=typeof _=="object"&&_&&_.Object===Object&&_,gt=mt,ut=gt,ft=typeof self=="object"&&self&&self.Object===Object&&self,bt=ut||ft||Function("return this")(),yt=bt,vt=yt,jt=vt.Symbol,V=jt,N=V,Q=Object.prototype,wt=Q.hasOwnProperty,kt=Q.toString,w=N?N.toStringTag:void 0;function _t(t){var r=wt.call(t,w),n=t[w];try{t[w]=void 0;var a=!0}catch{}var o=kt.call(t);return a&&(r?t[w]=n:delete t[w]),o}var St=_t,Tt=Object.prototype,It=Tt.toString;function $t(t){return It.call(t)}var Wt=$t,G=V,Ct=St,Ot=Wt,Rt="[object Null]",Ft="[object Undefined]",P=G?G.toStringTag:void 0;function zt(t){return t==null?t===void 0?Ft:Rt:P&&P in Object(t)?Ct(t):Ot(t)}var K=zt;function Et(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var R=Et,Dt=K,Lt=R,At="[object AsyncFunction]",Ut="[object Function]",qt="[object GeneratorFunction]",Bt="[object Proxy]";function Mt(t){if(!Lt(t))return!1;var r=Dt(t);return r==Ut||r==qt||r==At||r==Bt}var Nt=Mt,Gt=9007199254740991;function Pt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Gt}var Ht=Pt,Yt=Nt,Jt=Ht;function Xt(t){return t!=null&&Jt(t.length)&&!Yt(t)}var Vt=Xt,Qt=9007199254740991,Kt=/^(?:0|[1-9]\d*)$/;function Zt(t,r){var n=typeof t;return r=r??Qt,!!r&&(n=="number"||n!="symbol"&&Kt.test(t))&&t>-1&&t%1==0&&t<r}var er=Zt,tr=ht,rr=Vt,ir=er,nr=R;function ar(t,r,n){if(!nr(n))return!1;var a=typeof r;return(a=="number"?rr(n)&&ir(r,n.length):a=="string"&&r in n)?tr(n[r],t):!1}var or=ar,sr=/\s/;function dr(t){for(var r=t.length;r--&&sr.test(t.charAt(r)););return r}var cr=dr,lr=cr,pr=/^\s+/;function xr(t){return t&&t.slice(0,lr(t)+1).replace(pr,"")}var hr=xr;function mr(t){return t!=null&&typeof t=="object"}var gr=mr,ur=K,fr=gr,br="[object Symbol]";function yr(t){return typeof t=="symbol"||fr(t)&&ur(t)==br}var vr=yr,jr=hr,H=R,wr=vr,Y=0/0,kr=/^[-+]0x[0-9a-f]+$/i,_r=/^0b[01]+$/i,Sr=/^0o[0-7]+$/i,Tr=parseInt;function Ir(t){if(typeof t=="number")return t;if(wr(t))return Y;if(H(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=H(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=jr(t);var n=_r.test(t);return n||Sr.test(t)?Tr(t.slice(2),n?2:8):kr.test(t)?Y:+t}var $r=Ir,Wr=$r,J=1/0,Cr=17976931348623157e292;function Or(t){if(!t)return t===0?t:0;if(t=Wr(t),t===J||t===-J){var r=t<0?-1:1;return r*Cr}return t===t?t:0}var Rr=Or,Fr=pt,zr=or,C=Rr;function Er(t){return function(r,n,a){return a&&typeof a!="number"&&zr(r,n,a)&&(n=a=void 0),r=C(r),n===void 0?(n=r,r=0):n=C(n),a=a===void 0?r<n?1:-1:C(a),Fr(r,n,a,t)}}var Dr=Er,Lr=Dr,Ar=Lr(),Ur=Ar;const qr=oe(Ur),Br=({onDateChange:t})=>{const[r,n]=p.useState(ue(new Date,18)),a=qr(18,z(new Date)+0,1),o=["January","February","March","April","May","June","July","August","September","October","November","December"],s=p.forwardRef(({value:l,onClick:m},u)=>e.jsx(nt,{children:e.jsxs(it,{onClick:m,ref:u,children:[ye(r,"dd.MM.yyyy"),e.jsx(at,{onClick:m,ref:u,children:e.jsx("use",{href:`${f}#icon-calendar`})})]})})),x=({date:l,decreaseMonth:m,increaseMonth:u,changeYear:d,changeMonth:b})=>e.jsxs(ot,{children:[e.jsxs(M,{children:[" ",e.jsx(B,{onClick:m,children:e.jsx("use",{href:`${f}#icon-left`})})]}),e.jsxs(st,{children:[e.jsx("select",{className:"custom-select-style",value:o[be(l)],onChange:({target:{value:c}})=>b(o.indexOf(c)),children:o.map(c=>e.jsx("option",{value:c,children:c},c))}),e.jsx("select",{className:"custom-select-style",value:z(l),onChange:({target:{value:c}})=>d(c),children:a.map(c=>e.jsx("option",{value:c,children:c},c))})]}),e.jsx(M,{children:e.jsx(B,{onClick:u,children:e.jsx("use",{href:`${f}#icon-right`})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(fe,{selected:r,onChange:l=>{n(l),t(l)},customInput:e.jsx(s,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:l=>l.substr(0,2),renderCustomHeader:l=>e.jsx(x,{...l})}),e.jsx(rt,{})]})},S=i.div`
  font-size: 10px;
  color: #e6533c;
  margin-top: 4px;
  max-width: 146px;
`,Mr=i.button`
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

  &:hover {
    background-color: var(--color-main-two);
  }
`;i.div`
  margin-top: 15px;
`;const Nr=({onDateChange:t,errors:r,touched:n})=>e.jsxs(Ze,{children:[e.jsx(j,{children:"Basic info"}),e.jsxs(et,{children:[e.jsx("label",{children:e.jsx(U,{type:"text",name:"name"})}),e.jsxs("label",{children:[e.jsx(U,{type:"email",name:"email"}),r.email&&n.email&&e.jsx(S,{children:r.email})]})]}),e.jsxs(tt,{children:[e.jsxs(q,{children:[e.jsxs("div",{children:[e.jsx(j,{children:"Height"}),e.jsxs("label",{children:[e.jsx(W,{name:"height"}),r.height&&n.height&&e.jsx(S,{children:r.height})]})]}),e.jsxs("div",{children:[e.jsx(j,{children:"Current Weight"}),e.jsxs("label",{children:[e.jsx(W,{type:"text",name:"currentWeight"}),r.currentWeight&&n.currentWeight&&e.jsx(S,{children:r.currentWeight})]})]})]}),e.jsxs(q,{children:[e.jsxs("label",{children:[e.jsx(j,{children:"Desired Weight"}),e.jsx(W,{type:"text",name:"desiredWeight"}),r.desiredWeight&&n.desiredWeight&&e.jsx(S,{children:r.desiredWeight})]}),e.jsxs("label",{children:[e.jsx(j,{children:"Date of birth"}),e.jsx(Br,{name:"birthday",onDateChange:t})]})]})]})]}),Gr=t=>{de.info(t,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,type:"success",theme:"dark"})},g={name:"",email:"",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"2004-11-14"},Pr=({onClick:t})=>{const r=O(),{userData:n}=T(d=>d.auth),{profile:a}=T(d=>d.profile),[o,s]=p.useState("2004-11-14"),[x,l]=p.useState(!1);p.useEffect(()=>{r(se())},[r]),p.useEffect(()=>{n&&(g.name=n.name,g.email=n.email),a&&(g.height=a.height,g.currentWeight=a.currentWeight,g.desiredWeight=a.desiredWeight,g.blood=String(a.blood),g.sex=a.sex,g.levelActivity=String(a.levelActivity),g.birthday=a.birthday,s(a.birthday))},[n,a,o]),p.useEffect(()=>{x&&Gr("The form has been submitted successfully!")},[x]);const m=(d,b)=>{const{name:c,email:y,birthday:$,...k}=d,Z={name:c},ee={birthday:o,...k};r(ce(Z)),r(le(ee)),l(!0)},u=d=>{const b=d.toISOString();s(b)};return e.jsx(me,{initialValues:g,onSubmit:m,validationSchema:Me,enableReinitialize:!0,children:({errors:d,touched:b})=>e.jsxs(ge,{autoComplete:"off",children:[e.jsx(Nr,{onDateChange:u,errors:d,touched:b}),e.jsx(Ke,{}),e.jsx(Mr,{type:"submit",onClick:t,children:"Save"})]})})},Qr=()=>{const t=O(),{targetBmr:r=0,targetTime:n=110}=T(x=>x.profile.target),[a,o]=p.useState(!1);p.useEffect(()=>{(async()=>{await t(X()),o(!1)})()},[t,a]);const s=()=>{o(!0)};return e.jsxs(pe,{children:[e.jsx(ve,{children:"Profile Settings"}),e.jsxs(Ue,{children:[e.jsx(Be,{bmr:r,time:n}),e.jsx(Pr,{onClick:s})]})]})};export{Qr as default};
