import{s as i,a as Q,b as Z,u as Y,c as S,r as h,g as ee,j as e,d as g,e as te,l as re,f as ie,h as k,i as ne,k as ae,m as oe,n as se,S as de}from"./index-30b45571.js";import{c as ce,a as C,b,d as le,F as T,e as pe,f as xe}from"./index.esm-1c4360a6.js";import{s as he,g as z,t as me,a as ge}from"./react-datepicker-93929f50.js";import{f as J}from"./createClass-6a13647a.js";import{T as ue}from"./TitlePage-bcd30645.js";const fe=i.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,F=i.div`
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
`,O=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,E=i.svg`
  width: 20px;
  height: 20px;
  fill: rgba(239, 137, 100, 1);
`,A=i.span`
  font-size: 18px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
`,be=i.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,ye=i.img`
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
`,ve=i.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  border: 1px solid var(--color-main-one);
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,je=i.input`
  visibility: hidden;
`,we=i.label`
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
`,ke=i.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,_e=i.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,Se=i.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,Te=i.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,$e=i.div`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,Ie=i.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,We=i.div`
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
`,Re=i.p`
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
`,Ce=i.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,ze=i(Q)`
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
`,Fe=i.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,Oe=i.div`
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
`;const Ee=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,Ae=i(Z)``,De=()=>{const t=Y(),{userData:r}=S(s=>s.auth),{target:n}=S(s=>s.profile),[a,d]=h.useState(r.avatarURL??null),[p,u]=h.useState("Hello user!"),[o,c]=h.useState(!1);h.useEffect(()=>{r&&(u(r.name),d(r.avatarURL))},[r]),h.useEffect(()=>{t(ee())},[t]);const m=new FileReader;m.onloadend=()=>{d(m.result)};const j=async s=>{s.preventDefault();const w=s.target.files[0];m.readAsDataURL(w),c(!0);try{await t(te(w))}catch(R){R.response&&R.response.status===404&&d(null)}finally{c(!1)}},f=()=>{t(re())};return e.jsxs(Oe,{children:[e.jsx(je,{id:"file-loader",type:"file",onChange:j}),e.jsxs(ke,{children:[e.jsxs(be,{children:[a&&!o?e.jsx(ye,{src:`https://powerpulse-t5-backend.onrender.com/${a}`,sizes:"90px",loading:"lazy"}):null,a&&o?e.jsx(ve,{children:e.jsx("use",{href:`${g}#icon-user`})}):null,o&&e.jsx(Ae,{})]}),e.jsx(we,{htmlFor:"file-loader",children:e.jsx(_e,{children:e.jsx("use",{href:`${g}#icon-plus`})})})]}),e.jsxs($e,{children:[e.jsx(Te,{children:p}),e.jsx(Se,{children:"User"})]}),e.jsxs(fe,{children:[e.jsxs(F,{children:[e.jsxs(O,{children:[e.jsx(E,{children:e.jsx("use",{href:`${g}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(A,{children:Math.round(n.targetBmr)??"0"})]}),e.jsxs(F,{children:[e.jsxs(O,{children:[e.jsx(E,{children:e.jsx("use",{href:`${g}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(A,{children:[n.targetTime??"0"," min"]})]})]}),e.jsxs(We,{children:[e.jsx(Ie,{children:e.jsx("use",{href:`${g}#icon-exclamation`})}),e.jsx(Re,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(ze,{to:"/welcome",onClick:f,children:[e.jsx(Fe,{children:"Logout"}),e.jsx(Ce,{children:e.jsx("use",{href:`${g}#icon-logout`})})]})]})},Le=ce().shape({name:C().required("Name is required"),height:b().min(150,"Height must be at least 150 cm").max(300,"Height must be no more than 300 cm").required("Height is required"),currentWeight:b().min(35,"Current weight must be at least 35 kg").max(300,"Current weight must be no more than 300 kg").required("Current weight is required"),desiredWeight:b().min(35,"Desired weight must be at least 35 kg").max(120,"Desired weight should be no more than 120 kg").required("Desired weight is required"),birthday:le().required("Birthday is required").test("is-adult","You must be 18 years or older",function(t){return new Date().getFullYear()-new Date(t).getFullYear()>=18}),blood:b().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:C().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:b().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),Ue=i.label`
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
`,qe=i.p`
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
`,Me=i(T)`
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
`,Be=i.span`
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
`,l=({name:t,value:r,text:n})=>e.jsxs(Ue,{children:[e.jsx(Me,{type:"radio",name:t,value:r}),e.jsx(Be,{}),e.jsx(qe,{children:n})]}),Ne=i.p`
  color: #efede880;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 4px;
  text-align: start;
  margin-top: 20px;
`,Ge=i.div`
  display: flex;
  margin-bottom: 32px;
  gap: 20px;
  max-width: 335px;
  padding: 0;
  text-align: start;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,Pe=i.div`
  display: flex;
  max-width: 220px;
  text-align: start;
  align-self: center;
`,He=i.div`
  display: flex;
`,Ye=i.div`
  max-width: 340px;
  text-align: start;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    text-align: start;
  }
`,Je=()=>e.jsxs("div",{children:[e.jsx(Ne,{children:"Blood"}),e.jsxs(Ge,{children:[e.jsxs(Pe,{children:[e.jsx(l,{name:"blood",value:"1",text:"1"}),e.jsx(l,{name:"blood",value:"2",text:"2"}),e.jsx(l,{name:"blood",value:"3",text:"3"}),e.jsx(l,{name:"blood",value:"4",text:"4"})]}),e.jsxs(He,{children:[e.jsx(l,{name:"sex",value:"male",text:"Male"}),e.jsx(l,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs(Ye,{children:[e.jsx(l,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(l,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(l,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(l,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(l,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]});i(T)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`;const $=i(T)`
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
`,D=i(T)`
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
`,Xe=i.div`
  margin-top: 18px;
`,y=i.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`,Ve=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Ke=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`,L=i.div`
  display: flex;
  gap: 14px;
  margin-top: 14px;
  margin-bottom: 14px;
`,Qe=ie`

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
`,Ze=i.button`
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
`,et=i.div`
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
`;const tt=i.svg`
  width: 18px;
  height: 18px;
  stroke: var(--color-text);
  fill: transparent;
`,rt=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,U=i.svg`
  width: 8px;
  height: 8px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s var(--timing-function);
  &:hover {
    stroke: white;
  }
`,it=i.p`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`,q=i.div`
  width: 18px;
  height: 18px;
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.3s var(--timing-function);
  &:hover {
    background-color: var(--color-main-one);
  }
`;var nt=Math.ceil,at=Math.max;function ot(t,r,n,a){for(var d=-1,p=at(nt((r-t)/(n||1)),0),u=Array(p);p--;)u[a?p:++d]=t,t+=n;return u}var st=ot;function dt(t,r){return t===r||t!==t&&r!==r}var ct=dt,lt=typeof k=="object"&&k&&k.Object===Object&&k,pt=lt,xt=pt,ht=typeof self=="object"&&self&&self.Object===Object&&self,mt=xt||ht||Function("return this")(),gt=mt,ut=gt,ft=ut.Symbol,X=ft,M=X,V=Object.prototype,bt=V.hasOwnProperty,yt=V.toString,v=M?M.toStringTag:void 0;function vt(t){var r=bt.call(t,v),n=t[v];try{t[v]=void 0;var a=!0}catch{}var d=yt.call(t);return a&&(r?t[v]=n:delete t[v]),d}var jt=vt,wt=Object.prototype,kt=wt.toString;function _t(t){return kt.call(t)}var St=_t,B=X,Tt=jt,$t=St,It="[object Null]",Wt="[object Undefined]",N=B?B.toStringTag:void 0;function Rt(t){return t==null?t===void 0?Wt:It:N&&N in Object(t)?Tt(t):$t(t)}var K=Rt;function Ct(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var W=Ct,zt=K,Ft=W,Ot="[object AsyncFunction]",Et="[object Function]",At="[object GeneratorFunction]",Dt="[object Proxy]";function Lt(t){if(!Ft(t))return!1;var r=zt(t);return r==Et||r==At||r==Ot||r==Dt}var Ut=Lt,qt=9007199254740991;function Mt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=qt}var Bt=Mt,Nt=Ut,Gt=Bt;function Pt(t){return t!=null&&Gt(t.length)&&!Nt(t)}var Ht=Pt,Yt=9007199254740991,Jt=/^(?:0|[1-9]\d*)$/;function Xt(t,r){var n=typeof t;return r=r??Yt,!!r&&(n=="number"||n!="symbol"&&Jt.test(t))&&t>-1&&t%1==0&&t<r}var Vt=Xt,Kt=ct,Qt=Ht,Zt=Vt,er=W;function tr(t,r,n){if(!er(n))return!1;var a=typeof r;return(a=="number"?Qt(n)&&Zt(r,n.length):a=="string"&&r in n)?Kt(n[r],t):!1}var rr=tr,ir=/\s/;function nr(t){for(var r=t.length;r--&&ir.test(t.charAt(r)););return r}var ar=nr,or=ar,sr=/^\s+/;function dr(t){return t&&t.slice(0,or(t)+1).replace(sr,"")}var cr=dr;function lr(t){return t!=null&&typeof t=="object"}var pr=lr,xr=K,hr=pr,mr="[object Symbol]";function gr(t){return typeof t=="symbol"||hr(t)&&xr(t)==mr}var ur=gr,fr=cr,G=W,br=ur,P=0/0,yr=/^[-+]0x[0-9a-f]+$/i,vr=/^0b[01]+$/i,jr=/^0o[0-7]+$/i,wr=parseInt;function kr(t){if(typeof t=="number")return t;if(br(t))return P;if(G(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=G(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=fr(t);var n=vr.test(t);return n||jr.test(t)?wr(t.slice(2),n?2:8):yr.test(t)?P:+t}var _r=kr,Sr=_r,H=1/0,Tr=17976931348623157e292;function $r(t){if(!t)return t===0?t:0;if(t=Sr(t),t===H||t===-H){var r=t<0?-1:1;return r*Tr}return t===t?t:0}var Ir=$r,Wr=st,Rr=rr,I=Ir;function Cr(t){return function(r,n,a){return a&&typeof a!="number"&&Rr(r,n,a)&&(n=a=void 0),r=I(r),n===void 0?(n=r,r=0):n=I(n),a=a===void 0?r<n?1:-1:I(a),Wr(r,n,a,t)}}var zr=Cr,Fr=zr,Or=Fr(),Er=Or;const Ar=ne(Er),Dr=({onDateChange:t})=>{const[r,n]=h.useState(he(new Date,18)),a=Ar(18,z(new Date)+0,1),d=["January","February","March","April","May","June","July","August","September","October","November","December"],p=h.forwardRef(({value:o,onClick:c},m)=>e.jsx(et,{children:e.jsxs(Ze,{onClick:c,ref:m,children:[J(r,"dd.MM.yyyy"),e.jsx(tt,{onClick:c,ref:m,children:e.jsx("use",{href:`${g}#icon-calendar`})})]})})),u=({date:o,decreaseMonth:c,increaseMonth:m,changeYear:j,changeMonth:f})=>e.jsxs(rt,{children:[e.jsxs(q,{children:[" ",e.jsx(U,{onClick:c,children:e.jsx("use",{href:`${g}#icon-left`})})]}),e.jsxs(it,{children:[e.jsx("select",{className:"custom-select-style",value:d[ge(o)],onChange:({target:{value:s}})=>f(d.indexOf(s)),children:d.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsx("select",{className:"custom-select-style",value:z(o),onChange:({target:{value:s}})=>j(s),children:a.map(s=>e.jsx("option",{value:s,children:s},s))})]}),e.jsx(q,{children:e.jsx(U,{onClick:m,children:e.jsx("use",{href:`${g}#icon-right`})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(me,{selected:r,onChange:o=>{n(o),t(o)},customInput:e.jsx(p,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:o=>o.substr(0,2),renderCustomHeader:o=>e.jsx(u,{...o})}),e.jsx(Qe,{})]})},_=i.div`
  font-size: 10px;
  color: #e6533c;
  margin-top: 4px;
`,Lr=i.button`
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
`,Ur=({onDateChange:t,errors:r,touched:n})=>e.jsxs(Xe,{children:[e.jsx(y,{children:"Basic info"}),e.jsxs(Ve,{children:[e.jsx("label",{children:e.jsx(D,{type:"text",name:"name"})}),e.jsxs("label",{children:[e.jsx(D,{type:"email",name:"email"}),r.email&&n.email&&e.jsx(_,{children:r.email})]})]}),e.jsxs(Ke,{children:[e.jsxs(L,{children:[e.jsxs("div",{children:[e.jsx(y,{children:"Height"}),e.jsxs("label",{children:[e.jsx($,{name:"height"}),r.height&&n.height&&e.jsx(_,{children:r.height})]})]}),e.jsxs("div",{children:[e.jsx(y,{children:"Current Weight"}),e.jsxs("label",{children:[e.jsx($,{type:"text",name:"currentWeight"}),r.currentWeight&&n.currentWeight&&e.jsx(_,{children:r.currentWeight})]})]})]}),e.jsxs(L,{children:[e.jsxs("label",{children:[e.jsx(y,{children:"Desired Weight"}),e.jsx($,{type:"text",name:"desiredWeight"}),r.desiredWeight&&n.desiredWeight&&e.jsx(_,{children:r.desiredWeight})]}),e.jsxs("label",{children:[e.jsx(y,{children:"Date of birth"}),e.jsx(Dr,{name:"birthday",onDateChange:t})]})]})]})]}),x={name:"",email:"",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"2004-11-14"},qr=()=>{const t=Y(),{userData:r}=S(o=>o.auth),{profile:n}=S(o=>o.profile),[a,d]=h.useState("2004-11-14");h.useEffect(()=>{t(ae())},[t]),h.useEffect(()=>{r&&(x.name=r.name,x.email=r.email),n&&(x.height=n.height,x.currentWeight=n.currentWeight,x.desiredWeight=n.desiredWeight,x.blood=String(n.blood),x.sex=n.sex,x.levelActivity=String(n.levelActivity),x.birthday=n.birthday,d(n.birthday))},[r,n,a]);const p=o=>{const{name:c,email:m,birthday:j,...f}=o,s={name:c},w={birthday:a,...f};t(oe(s)),t(se(w))},u=o=>{let c=J(o,"yyyy-dd-MM");d(c)};return e.jsx(pe,{initialValues:x,onSubmit:p,validationSchema:Le,enableReinitialize:!0,children:({errors:o,touched:c})=>e.jsxs(xe,{autoComplete:"off",children:[e.jsx(Ur,{onDateChange:u,errors:o,touched:c}),e.jsx(Je,{}),e.jsx(Lr,{type:"submit",children:"Save"})]})})},Hr=()=>e.jsxs(de,{children:[e.jsx(ue,{children:"Profile Settings"}),e.jsxs(Ee,{children:[e.jsx(De,{}),e.jsx(qr,{})]})]});export{Hr as default};
