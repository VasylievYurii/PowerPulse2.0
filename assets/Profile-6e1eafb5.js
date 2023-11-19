import{s as i,u as H,b as T,r as h,g as K,j as e,c as g,a as Q,d as Z,e as ee,l as te,f as re,h as k,i as ie,k as ne,m as ae,n as oe,S as se}from"./index-7058c543.js";import{c as de,a as C,b,d as ce,F as S,e as le,f as pe}from"./index.esm-ffd5380f.js";import{g as z,t as xe,a as he}from"./react-datepicker-d2ccc240.js";import{f as Y}from"./createClass-81d60a9a.js";import{T as me}from"./TitlePage-040f572b.js";const ge=i.div`
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
`,D=i.span`
  font-size: 18px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
`,fe=i.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,ue=i.img`
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
`,be=i.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  border: 1px solid var(--color-main-one);
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,ye=i.input`
  visibility: hidden;
`,je=i.label`
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
`,ve=i.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,we=i.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,ke=i.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,_e=i.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Te=i.div`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,Se=i.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,$e=i.div`
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
`,Ie=i.p`
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
`,We=i.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,Re=i.div`
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
`,Ce=i.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,ze=i.div`
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
`;const Fe=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,Oe=()=>{const t=H(),{userData:r}=T(s=>s.auth),{target:n}=T(s=>s.profile),[o,c]=h.useState(),[p,f]=h.useState("Hello user!"),[a,d]=h.useState(!1);h.useEffect(()=>{r&&f(r.name),r.avatarURL&&c()},[r]),h.useEffect(()=>{t(K())},[t]);const m=new FileReader;m.onloadend=()=>{c(m.result)};const v=async s=>{s.preventDefault();const w=s.target.files[0];m.readAsDataURL(w),d(!0);try{t(ee(w))}catch(R){R.response&&R.response.status===404&&c(null)}d(!1)},u=()=>{t(te())};return e.jsxs(ze,{children:[e.jsx(ye,{id:"file-loader",type:"file",onChange:v}),e.jsxs(ve,{children:[e.jsx(fe,{children:o||r.avatarURL?e.jsx(ue,{src:o||`https://powerpulse-t5-backend.onrender.com/${r.avatarURL}`,sizes:"90px",onError:()=>{c(null),d(!1)},loading:"lazy"}):e.jsx(be,{children:e.jsx("use",{href:`${g}#icon-user`})})}),e.jsx(je,{htmlFor:"file-loader",children:e.jsx(we,{children:e.jsx("use",{href:`${g}#icon-plus`})})})]}),e.jsxs(Te,{children:[e.jsx(_e,{children:p}),e.jsx(ke,{children:"User"})]}),e.jsxs(ge,{children:[e.jsxs(F,{children:[e.jsxs(O,{children:[e.jsx(E,{children:e.jsx("use",{href:`${g}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(D,{children:Math.round(n.targetBmr)??"0"})]}),e.jsxs(F,{children:[e.jsxs(O,{children:[e.jsx(E,{children:e.jsx("use",{href:`${g}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(D,{children:[n.targetTime??"0"," min"]})]})]}),e.jsxs($e,{children:[e.jsx(Se,{children:e.jsx("use",{href:`${g}#icon-exclamation`})}),e.jsx(Ie,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(Re,{onClick:u,children:[e.jsx(Q,{to:"/welcome",children:e.jsx(Ce,{children:"Logout"})}),e.jsx(We,{onClick:u,children:e.jsx("use",{href:`${g}#icon-logout`})})]}),a&&e.jsx(Z,{})]})},Ee=de().shape({name:C().required("Name is required"),height:b().min(150,"Height must be at least 150 cm").max(300,"Height must be no more than 300 cm").required("Height is required"),currentWeight:b().min(35,"Current weight must be at least 35 kg").max(300,"Current weight must be no more than 300 kg").required("Current weight is required"),desiredWeight:b().min(35,"Desired weight must be at least 35 kg").max(120,"Desired weight should be no more than 120 kg").required("Desired weight is required"),birthday:ce().required("Birthday is required").test("is-adult","You must be 18 years or older",function(t){return new Date().getFullYear()-new Date(t).getFullYear()>=18}),blood:b().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:C().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:b().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),De=i.label`
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
`,Le=i.p`
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
`,Ae=i(S)`
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
`,Ue=i.span`
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
`,l=({name:t,value:r,text:n})=>e.jsxs(De,{children:[e.jsx(Ae,{type:"radio",name:t,value:r}),e.jsx(Ue,{}),e.jsx(Le,{children:n})]}),qe=i.p`
  color: #efede880;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 4px;
  text-align: start;
  margin-top: 20px;
`,Me=i.div`
  display: flex;
  margin-bottom: 32px;
  gap: 20px;
  max-width: 335px;
  padding: 0;
  text-align: start;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,Be=i.div`
  display: flex;
  max-width: 220px;
  text-align: start;
  align-self: center;
`,Ne=i.div`
  display: flex;
`,Ge=i.div`
  max-width: 340px;
  text-align: start;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    text-align: start;
  }
`,Pe=()=>e.jsxs("div",{children:[e.jsx(qe,{children:"Blood"}),e.jsxs(Me,{children:[e.jsxs(Be,{children:[e.jsx(l,{name:"blood",value:"1",text:"1"}),e.jsx(l,{name:"blood",value:"2",text:"2"}),e.jsx(l,{name:"blood",value:"3",text:"3"}),e.jsx(l,{name:"blood",value:"4",text:"4"})]}),e.jsxs(Ne,{children:[e.jsx(l,{name:"sex",value:"male",text:"Male"}),e.jsx(l,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs(Ge,{children:[e.jsx(l,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(l,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(l,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(l,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(l,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]});i(S)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`;const $=i(S)`
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
`,L=i(S)`
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
`,He=i.div`
  margin-top: 18px;
`,y=i.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`,Ye=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Je=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`,A=i.div`
  display: flex;
  gap: 14px;
  margin-top: 14px;
  margin-bottom: 14px;
`,Xe=re`

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
  color: var(--color-text);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
   background-image: none;
   cursor: pointer;
   color: #EFEDE8;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
}

select.custom-select-style option{
  background-color: var(--color-main-two);
  
}
`,Ve=i.button`
  color: var(--color-text);
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  /* gap: 8px; */
  /* margin-right: 20px; */
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`,Ke=i.div`
  display: flex;
  justify-content: space-between;
  /* justify-content: end !important; */
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
  cursor: pointer;
  &:hover {
    stroke: var(--color-main-two);
  }
`;const Qe=i.svg`
  width: 18px;
  height: 18px;
  stroke: var(--color-text);
  fill: transparent;
`,Ze=i.div`
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
  &:hover {
    stroke: white;
  }
`,et=i.p`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;var tt=Math.ceil,rt=Math.max;function it(t,r,n,o){for(var c=-1,p=rt(tt((r-t)/(n||1)),0),f=Array(p);p--;)f[o?p:++c]=t,t+=n;return f}var nt=it;function at(t,r){return t===r||t!==t&&r!==r}var ot=at,st=typeof k=="object"&&k&&k.Object===Object&&k,dt=st,ct=dt,lt=typeof self=="object"&&self&&self.Object===Object&&self,pt=ct||lt||Function("return this")(),xt=pt,ht=xt,mt=ht.Symbol,J=mt,q=J,X=Object.prototype,gt=X.hasOwnProperty,ft=X.toString,j=q?q.toStringTag:void 0;function ut(t){var r=gt.call(t,j),n=t[j];try{t[j]=void 0;var o=!0}catch{}var c=ft.call(t);return o&&(r?t[j]=n:delete t[j]),c}var bt=ut,yt=Object.prototype,jt=yt.toString;function vt(t){return jt.call(t)}var wt=vt,M=J,kt=bt,_t=wt,Tt="[object Null]",St="[object Undefined]",B=M?M.toStringTag:void 0;function $t(t){return t==null?t===void 0?St:Tt:B&&B in Object(t)?kt(t):_t(t)}var V=$t;function It(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var W=It,Wt=V,Rt=W,Ct="[object AsyncFunction]",zt="[object Function]",Ft="[object GeneratorFunction]",Ot="[object Proxy]";function Et(t){if(!Rt(t))return!1;var r=Wt(t);return r==zt||r==Ft||r==Ct||r==Ot}var Dt=Et,Lt=9007199254740991;function At(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Lt}var Ut=At,qt=Dt,Mt=Ut;function Bt(t){return t!=null&&Mt(t.length)&&!qt(t)}var Nt=Bt,Gt=9007199254740991,Pt=/^(?:0|[1-9]\d*)$/;function Ht(t,r){var n=typeof t;return r=r??Gt,!!r&&(n=="number"||n!="symbol"&&Pt.test(t))&&t>-1&&t%1==0&&t<r}var Yt=Ht,Jt=ot,Xt=Nt,Vt=Yt,Kt=W;function Qt(t,r,n){if(!Kt(n))return!1;var o=typeof r;return(o=="number"?Xt(n)&&Vt(r,n.length):o=="string"&&r in n)?Jt(n[r],t):!1}var Zt=Qt,er=/\s/;function tr(t){for(var r=t.length;r--&&er.test(t.charAt(r)););return r}var rr=tr,ir=rr,nr=/^\s+/;function ar(t){return t&&t.slice(0,ir(t)+1).replace(nr,"")}var or=ar;function sr(t){return t!=null&&typeof t=="object"}var dr=sr,cr=V,lr=dr,pr="[object Symbol]";function xr(t){return typeof t=="symbol"||lr(t)&&cr(t)==pr}var hr=xr,mr=or,N=W,gr=hr,G=0/0,fr=/^[-+]0x[0-9a-f]+$/i,ur=/^0b[01]+$/i,br=/^0o[0-7]+$/i,yr=parseInt;function jr(t){if(typeof t=="number")return t;if(gr(t))return G;if(N(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=N(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=mr(t);var n=ur.test(t);return n||br.test(t)?yr(t.slice(2),n?2:8):fr.test(t)?G:+t}var vr=jr,wr=vr,P=1/0,kr=17976931348623157e292;function _r(t){if(!t)return t===0?t:0;if(t=wr(t),t===P||t===-P){var r=t<0?-1:1;return r*kr}return t===t?t:0}var Tr=_r,Sr=nt,$r=Zt,I=Tr;function Ir(t){return function(r,n,o){return o&&typeof o!="number"&&$r(r,n,o)&&(n=o=void 0),r=I(r),n===void 0?(n=r,r=0):n=I(n),o=o===void 0?r<n?1:-1:I(o),Sr(r,n,o,t)}}var Wr=Ir,Rr=Wr,Cr=Rr(),zr=Cr;const Fr=ie(zr),Or=({onDateChange:t})=>{const[r,n]=h.useState(new Date),o=Fr(1923,z(new Date)+0,1),c=["January","February","March","April","May","June","July","August","September","October","November","December"],p=h.forwardRef(({value:a,onClick:d},m)=>e.jsx(Ke,{children:e.jsxs(Ve,{onClick:d,ref:m,children:[Y(r,"dd.MM.yyyy"),e.jsx(Qe,{onClick:d,ref:m,children:e.jsx("use",{href:`${g}#icon-calendar`})})]})})),f=({date:a,decreaseMonth:d,increaseMonth:m,changeYear:v,changeMonth:u})=>e.jsxs(Ze,{children:[e.jsx(U,{onClick:d,children:e.jsx("use",{href:`${g}#icon-left`})}),e.jsxs(et,{children:[e.jsx("select",{className:"custom-select-style",value:c[he(a)],onChange:({target:{value:s}})=>u(c.indexOf(s)),children:c.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsx("select",{className:"custom-select-style",value:z(a),onChange:({target:{value:s}})=>v(s),children:o.map(s=>e.jsx("option",{value:s,children:s},s))})]}),e.jsx(U,{onClick:m,children:e.jsx("use",{href:`${g}#icon-right`})})]});return e.jsxs(e.Fragment,{children:[e.jsx(xe,{selected:r,onChange:a=>{n(a),t(a)},customInput:e.jsx(p,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:a=>a.substr(0,2),renderCustomHeader:a=>e.jsx(f,{...a})}),e.jsx(Xe,{})]})},Er=({onDateChange:t})=>e.jsxs(He,{children:[e.jsx(y,{children:"Basic info"}),e.jsxs(Ye,{children:[e.jsx("label",{children:e.jsx(L,{type:"text",name:"name"})}),e.jsx("label",{children:e.jsx(L,{type:"email",name:"email"})})]}),e.jsxs(Je,{children:[e.jsxs(A,{children:[e.jsxs("div",{children:[e.jsx(y,{children:"Height"}),e.jsx("label",{children:e.jsx($,{name:"height"})})]}),e.jsxs("div",{children:[e.jsx(y,{children:"Current Weight"}),e.jsx("label",{children:e.jsx($,{type:"text",name:"currentWeight"})})]})]}),e.jsxs(A,{children:[e.jsxs("label",{children:[e.jsx(y,{children:"Desired Weight"}),e.jsx($,{type:"text",name:"desiredWeight"})]}),e.jsxs("label",{children:[e.jsx(y,{children:"Date of birth"}),e.jsx(Or,{name:"birthday",onDateChange:t})]})]})]})]}),_=i.div`
  font-size: 10px;
  color: #e6533c;
`,Dr=i.button`
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
`,x={name:"",email:"",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"2004-11-14"},Lr=()=>{const t=H(),{userData:r}=T(a=>a.auth),{profile:n}=T(a=>a.profile),[o,c]=h.useState("2004-11-14");h.useEffect(()=>{t(ne())},[t]),h.useEffect(()=>{r&&(x.name=r.name,x.email=r.email),n&&(x.height=n.height,x.currentWeight=n.currentWeight,x.desiredWeight=n.desiredWeight,x.blood=String(n.blood),x.sex=n.sex,x.levelActivity=String(n.levelActivity),x.birthday=n.birthday,c(n.birthday))},[r,n,o]);const p=a=>{const{name:d,email:m,birthday:v,...u}=a,s={name:d},w={birthday:o,...u};t(ae(s)),t(oe(w))},f=a=>{let d=Y(a,"yyyy-dd-MM");c(d)};return e.jsx(le,{initialValues:x,onSubmit:p,validationSchema:Ee,enableReinitialize:!0,children:({errors:a,touched:d})=>e.jsxs(pe,{autoComplete:"off",children:[a.email&&d.email&&e.jsx(_,{children:a.email}),a.height&&d.height&&e.jsx(_,{children:a.height}),a.currentWeight&&d.currentWeight&&e.jsx(_,{children:a.currentWeight}),a.desiredWeight&&d.desiredWeight&&e.jsx(_,{children:a.desiredWeight}),e.jsx(Er,{onDateChange:f}),e.jsx(Pe,{}),e.jsx(Dr,{type:"submit",children:"Save"})]})})},Nr=()=>e.jsxs(se,{children:[e.jsx(me,{children:"Profile Settings"}),e.jsxs(Fe,{children:[e.jsx(Oe,{}),e.jsx(Lr,{})]})]});export{Nr as default};
