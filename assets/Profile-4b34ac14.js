import{s as i,u as H,b as T,r as h,g as K,j as e,c as g,a as Q,d as Z,e as ee,l as te,f as re,h as k,i as ie,k as ne,m as ae,n as oe,S as se}from"./index-c7cc0105.js";import{c as de,a as C,b,d as ce,F as S,e as le,f as pe}from"./index.esm-8a1204e6.js";import{s as xe,g as z,t as he,a as me}from"./react-datepicker-99d0ef82.js";import{f as Y}from"./createClass-a1712b9e.js";import{T as ge}from"./TitlePage-7c7bd4f1.js";const fe=i.div`
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
`,ue=i.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,be=i.img`
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
`,ye=i.svg`
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
`,ve=i.label`
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
`,we=i.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,ke=i.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,_e=i.p`
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
`,Se=i.div`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,$e=i.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,Ie=i.div`
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
`,We=i.p`
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
`,Re=i.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,Ce=i.div`
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
`,ze=i.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,Fe=i.div`
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
`;const Oe=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,Ee=()=>{const t=H(),{userData:r}=T(s=>s.auth),{target:n}=T(s=>s.profile),[o,c]=h.useState(),[p,f]=h.useState("Hello user!"),[a,d]=h.useState(!1);h.useEffect(()=>{r&&f(r.name)},[r]),h.useEffect(()=>{t(K())},[t]);const m=new FileReader;m.onloadend=()=>{c(m.result)};const v=async s=>{s.preventDefault();const w=s.target.files[0];m.readAsDataURL(w),d(!0);try{t(ee(w))}catch(R){R.response&&R.response.status===404&&c(null)}d(!1)},u=()=>{t(te())};return e.jsxs(Fe,{children:[e.jsx(je,{id:"file-loader",type:"file",onChange:v}),e.jsxs(we,{children:[e.jsx(ue,{children:o?e.jsx(be,{src:o||`https://powerpulse-t5-backend.onrender.com/${r.avatarURL}`,sizes:"90px",onError:()=>{c(null),d(!1)},loading:"lazy"}):e.jsx(ye,{children:e.jsx("use",{href:`${g}#icon-user`})})}),e.jsx(ve,{htmlFor:"file-loader",children:e.jsx(ke,{children:e.jsx("use",{href:`${g}#icon-plus`})})})]}),e.jsxs(Se,{children:[e.jsx(Te,{children:p}),e.jsx(_e,{children:"User"})]}),e.jsxs(fe,{children:[e.jsxs(F,{children:[e.jsxs(O,{children:[e.jsx(E,{children:e.jsx("use",{href:`${g}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(D,{children:Math.round(n.targetBmr)??"0"})]}),e.jsxs(F,{children:[e.jsxs(O,{children:[e.jsx(E,{children:e.jsx("use",{href:`${g}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(D,{children:[n.targetTime??"0"," min"]})]})]}),e.jsxs(Ie,{children:[e.jsx($e,{children:e.jsx("use",{href:`${g}#icon-exclamation`})}),e.jsx(We,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(Ce,{onClick:u,children:[e.jsx(Q,{to:"/welcome",children:e.jsx(ze,{children:"Logout"})}),e.jsx(Re,{onClick:u,children:e.jsx("use",{href:`${g}#icon-logout`})})]}),a&&e.jsx(Z,{})]})},De=de().shape({name:C().required("Name is required"),height:b().min(150,"Height must be at least 150 cm").max(300,"Height must be no more than 300 cm").required("Height is required"),currentWeight:b().min(35,"Current weight must be at least 35 kg").max(300,"Current weight must be no more than 300 kg").required("Current weight is required"),desiredWeight:b().min(35,"Desired weight must be at least 35 kg").max(120,"Desired weight should be no more than 120 kg").required("Desired weight is required"),birthday:ce().required("Birthday is required").test("is-adult","You must be 18 years or older",function(t){return new Date().getFullYear()-new Date(t).getFullYear()>=18}),blood:b().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:C().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:b().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),Ae=i.label`
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
`,Ue=i(S)`
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
`,qe=i.span`
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
`,l=({name:t,value:r,text:n})=>e.jsxs(Ae,{children:[e.jsx(Ue,{type:"radio",name:t,value:r}),e.jsx(qe,{}),e.jsx(Le,{children:n})]}),Me=i.p`
  color: #efede880;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 4px;
  text-align: start;
  margin-top: 20px;
`,Be=i.div`
  display: flex;
  margin-bottom: 32px;
  gap: 20px;
  max-width: 335px;
  padding: 0;
  text-align: start;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,Ne=i.div`
  display: flex;
  max-width: 220px;
  text-align: start;
  align-self: center;
`,Ge=i.div`
  display: flex;
`,Pe=i.div`
  max-width: 340px;
  text-align: start;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    text-align: start;
  }
`,He=()=>e.jsxs("div",{children:[e.jsx(Me,{children:"Blood"}),e.jsxs(Be,{children:[e.jsxs(Ne,{children:[e.jsx(l,{name:"blood",value:"1",text:"1"}),e.jsx(l,{name:"blood",value:"2",text:"2"}),e.jsx(l,{name:"blood",value:"3",text:"3"}),e.jsx(l,{name:"blood",value:"4",text:"4"})]}),e.jsxs(Ge,{children:[e.jsx(l,{name:"sex",value:"male",text:"Male"}),e.jsx(l,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs(Pe,{children:[e.jsx(l,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(l,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(l,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(l,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(l,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]});i(S)`
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
`,A=i(S)`
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
`,Ye=i.div`
  margin-top: 18px;
`,y=i.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`,Je=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Xe=i.div`
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
`,Ve=re`

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
`,Ke=i.button`
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
`,Qe=i.div`
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
`;const Ze=i.svg`
  width: 18px;
  height: 18px;
  stroke: var(--color-text);
  fill: transparent;
`,et=i.div`
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
`,tt=i.p`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;var rt=Math.ceil,it=Math.max;function nt(t,r,n,o){for(var c=-1,p=it(rt((r-t)/(n||1)),0),f=Array(p);p--;)f[o?p:++c]=t,t+=n;return f}var at=nt;function ot(t,r){return t===r||t!==t&&r!==r}var st=ot,dt=typeof k=="object"&&k&&k.Object===Object&&k,ct=dt,lt=ct,pt=typeof self=="object"&&self&&self.Object===Object&&self,xt=lt||pt||Function("return this")(),ht=xt,mt=ht,gt=mt.Symbol,J=gt,q=J,X=Object.prototype,ft=X.hasOwnProperty,ut=X.toString,j=q?q.toStringTag:void 0;function bt(t){var r=ft.call(t,j),n=t[j];try{t[j]=void 0;var o=!0}catch{}var c=ut.call(t);return o&&(r?t[j]=n:delete t[j]),c}var yt=bt,jt=Object.prototype,vt=jt.toString;function wt(t){return vt.call(t)}var kt=wt,M=J,_t=yt,Tt=kt,St="[object Null]",$t="[object Undefined]",B=M?M.toStringTag:void 0;function It(t){return t==null?t===void 0?$t:St:B&&B in Object(t)?_t(t):Tt(t)}var V=It;function Wt(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var W=Wt,Rt=V,Ct=W,zt="[object AsyncFunction]",Ft="[object Function]",Ot="[object GeneratorFunction]",Et="[object Proxy]";function Dt(t){if(!Ct(t))return!1;var r=Rt(t);return r==Ft||r==Ot||r==zt||r==Et}var At=Dt,Lt=9007199254740991;function Ut(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Lt}var qt=Ut,Mt=At,Bt=qt;function Nt(t){return t!=null&&Bt(t.length)&&!Mt(t)}var Gt=Nt,Pt=9007199254740991,Ht=/^(?:0|[1-9]\d*)$/;function Yt(t,r){var n=typeof t;return r=r??Pt,!!r&&(n=="number"||n!="symbol"&&Ht.test(t))&&t>-1&&t%1==0&&t<r}var Jt=Yt,Xt=st,Vt=Gt,Kt=Jt,Qt=W;function Zt(t,r,n){if(!Qt(n))return!1;var o=typeof r;return(o=="number"?Vt(n)&&Kt(r,n.length):o=="string"&&r in n)?Xt(n[r],t):!1}var er=Zt,tr=/\s/;function rr(t){for(var r=t.length;r--&&tr.test(t.charAt(r)););return r}var ir=rr,nr=ir,ar=/^\s+/;function or(t){return t&&t.slice(0,nr(t)+1).replace(ar,"")}var sr=or;function dr(t){return t!=null&&typeof t=="object"}var cr=dr,lr=V,pr=cr,xr="[object Symbol]";function hr(t){return typeof t=="symbol"||pr(t)&&lr(t)==xr}var mr=hr,gr=sr,N=W,fr=mr,G=0/0,ur=/^[-+]0x[0-9a-f]+$/i,br=/^0b[01]+$/i,yr=/^0o[0-7]+$/i,jr=parseInt;function vr(t){if(typeof t=="number")return t;if(fr(t))return G;if(N(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=N(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=gr(t);var n=br.test(t);return n||yr.test(t)?jr(t.slice(2),n?2:8):ur.test(t)?G:+t}var wr=vr,kr=wr,P=1/0,_r=17976931348623157e292;function Tr(t){if(!t)return t===0?t:0;if(t=kr(t),t===P||t===-P){var r=t<0?-1:1;return r*_r}return t===t?t:0}var Sr=Tr,$r=at,Ir=er,I=Sr;function Wr(t){return function(r,n,o){return o&&typeof o!="number"&&Ir(r,n,o)&&(n=o=void 0),r=I(r),n===void 0?(n=r,r=0):n=I(n),o=o===void 0?r<n?1:-1:I(o),$r(r,n,o,t)}}var Rr=Wr,Cr=Rr,zr=Cr(),Fr=zr;const Or=ie(Fr),Er=({onDateChange:t})=>{const[r,n]=h.useState(xe(new Date,18)),o=Or(18,z(new Date)+0,1),c=["January","February","March","April","May","June","July","August","September","October","November","December"],p=h.forwardRef(({value:a,onClick:d},m)=>e.jsx(Qe,{children:e.jsxs(Ke,{onClick:d,ref:m,children:[Y(r,"dd.MM.yyyy"),e.jsx(Ze,{onClick:d,ref:m,children:e.jsx("use",{href:`${g}#icon-calendar`})})]})})),f=({date:a,decreaseMonth:d,increaseMonth:m,changeYear:v,changeMonth:u})=>e.jsxs(et,{children:[e.jsx(U,{onClick:d,children:e.jsx("use",{href:`${g}#icon-left`})}),e.jsxs(tt,{children:[e.jsx("select",{className:"custom-select-style",value:c[me(a)],onChange:({target:{value:s}})=>u(c.indexOf(s)),children:c.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsx("select",{className:"custom-select-style",value:z(a),onChange:({target:{value:s}})=>v(s),children:o.map(s=>e.jsx("option",{value:s,children:s},s))})]}),e.jsx(U,{onClick:m,children:e.jsx("use",{href:`${g}#icon-right`})})]});return e.jsxs(e.Fragment,{children:[e.jsx(he,{selected:r,onChange:a=>{n(a),t(a)},customInput:e.jsx(p,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:a=>a.substr(0,2),renderCustomHeader:a=>e.jsx(f,{...a})}),e.jsx(Ve,{})]})},Dr=({onDateChange:t})=>e.jsxs(Ye,{children:[e.jsx(y,{children:"Basic info"}),e.jsxs(Je,{children:[e.jsx("label",{children:e.jsx(A,{type:"text",name:"name"})}),e.jsx("label",{children:e.jsx(A,{type:"email",name:"email"})})]}),e.jsxs(Xe,{children:[e.jsxs(L,{children:[e.jsxs("div",{children:[e.jsx(y,{children:"Height"}),e.jsx("label",{children:e.jsx($,{name:"height"})})]}),e.jsxs("div",{children:[e.jsx(y,{children:"Current Weight"}),e.jsx("label",{children:e.jsx($,{type:"text",name:"currentWeight"})})]})]}),e.jsxs(L,{children:[e.jsxs("label",{children:[e.jsx(y,{children:"Desired Weight"}),e.jsx($,{type:"text",name:"desiredWeight"})]}),e.jsxs("label",{children:[e.jsx(y,{children:"Date of birth"}),e.jsx(Er,{name:"birthday",onDateChange:t})]})]})]})]}),_=i.div`
  font-size: 10px;
  color: #e6533c;
`,Ar=i.button`
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
`,x={name:"",email:"",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"2004-11-14"},Lr=()=>{const t=H(),{userData:r}=T(a=>a.auth),{profile:n}=T(a=>a.profile),[o,c]=h.useState("2004-11-14");h.useEffect(()=>{t(ne())},[t]),h.useEffect(()=>{r&&(x.name=r.name,x.email=r.email),n&&(x.height=n.height,x.currentWeight=n.currentWeight,x.desiredWeight=n.desiredWeight,x.blood=String(n.blood),x.sex=n.sex,x.levelActivity=String(n.levelActivity),x.birthday=n.birthday,c(n.birthday))},[r,n,o]);const p=a=>{const{name:d,email:m,birthday:v,...u}=a,s={name:d},w={birthday:o,...u};t(ae(s)),t(oe(w))},f=a=>{let d=Y(a,"yyyy-dd-MM");c(d)};return e.jsx(le,{initialValues:x,onSubmit:p,validationSchema:De,enableReinitialize:!0,children:({errors:a,touched:d})=>e.jsxs(pe,{autoComplete:"off",children:[a.email&&d.email&&e.jsx(_,{children:a.email}),a.height&&d.height&&e.jsx(_,{children:a.height}),a.currentWeight&&d.currentWeight&&e.jsx(_,{children:a.currentWeight}),a.desiredWeight&&d.desiredWeight&&e.jsx(_,{children:a.desiredWeight}),e.jsx(Dr,{onDateChange:f}),e.jsx(He,{}),e.jsx(Ar,{type:"submit",children:"Save"})]})})},Gr=()=>e.jsxs(se,{children:[e.jsx(ge,{children:"Profile Settings"}),e.jsxs(Oe,{children:[e.jsx(Ee,{}),e.jsx(Lr,{})]})]});export{Gr as default};
