import{s as i,b as ie,c as ne,u as K,d as T,r as l,g as ae,j as e,a as m,e as oe,l as se,f as de,h as _,i as ce,k as le,Q as pe,m as xe,n as he,S as me}from"./index-70ab3176.js";import{c as ge,a as A,b as j,d as ue,F as $,e as fe,f as be}from"./index.esm-9fffc1e6.js";import{s as ye,g as D,t as ve,a as je}from"./react-datepicker-1fe4e61c.js";import{f as Z}from"./createClass-4c75803e.js";import{T as we}from"./TitlePage-d3408d96.js";const ke=i.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,L=i.div`
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
`,U=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,q=i.svg`
  width: 20px;
  height: 20px;
  fill: rgba(239, 137, 100, 1);
`,M=i.span`
  font-size: 18px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
`,_e=i.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,Se=i.img`
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
`,Te=i.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  border: 1px solid var(--color-main-one);
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,$e=i.input`
  visibility: hidden;
`,Ie=i.label`
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
`,We=i.div`
  position: relative;
  background-color: transparent;
  border: 0px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`,Ce=i.svg`
  width: 22px;
  height: 22px;
  fill: rgba(239, 137, 100, 1);
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,Re=i.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,Fe=i.p`
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
`,ze=i.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,Ee=i.div`
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
`,Ae=i.p`
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
`,De=i.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,Le=i(ie)`
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
`,Ue=i.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,qe=i.div`
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
`;const Me=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,Be=i(ne)``,Ne=()=>{const t=K(),{userData:r}=T(b=>b.auth),{target:n,profile:a}=T(b=>b.profile),[d,p]=l.useState(r.avatarURL??null),[g,c]=l.useState("Hello user!"),[u,o]=l.useState("0"),[f,y]=l.useState("0"),[s,I]=l.useState(!1);console.log("targ",n),l.useEffect(()=>{r&&(c(r.name),p(r.avatarURL))},[r]),l.useEffect(()=>{t(ae()),a&&(o(Math.round(a.bmr)),y(n.targetTime))},[t,a]);const v=new FileReader;v.onloadend=()=>{p(v.result)};const W=async b=>{b.preventDefault();const z=b.target.files[0];v.readAsDataURL(z),I(!0);try{await t(oe(z))}catch(E){E.response&&E.response.status===404&&p(null)}finally{I(!1)}},C=()=>{t(se())};return e.jsxs(qe,{children:[e.jsx($e,{id:"file-loader",type:"file",onChange:W}),e.jsxs(We,{children:[e.jsxs(_e,{children:[d&&!s?e.jsx(Se,{src:d,sizes:"90px",loading:"lazy"}):null,d&&s?e.jsx(Te,{children:e.jsx("use",{href:`${m}#icon-user`})}):null,s&&e.jsx(Be,{})]}),e.jsx(Ie,{htmlFor:"file-loader",children:e.jsx(Ce,{children:e.jsx("use",{href:`${m}#icon-plus`})})})]}),e.jsxs(Oe,{children:[e.jsx(Fe,{children:g}),e.jsx(Re,{children:"User"})]}),e.jsxs(ke,{children:[e.jsxs(L,{children:[e.jsxs(U,{children:[e.jsx(q,{children:e.jsx("use",{href:`${m}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(M,{children:u})]}),e.jsxs(L,{children:[e.jsxs(U,{children:[e.jsx(q,{children:e.jsx("use",{href:`${m}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(M,{children:[f," min"]})]})]}),e.jsxs(Ee,{children:[e.jsx(ze,{children:e.jsx("use",{href:`${m}#icon-exclamation`})}),e.jsx(Ae,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(Le,{to:"/welcome",onClick:C,children:[e.jsx(Ue,{children:"Logout"}),e.jsx(De,{children:e.jsx("use",{href:`${m}#icon-logout`})})]})]})},Ge=ge().shape({name:A().required("Name is required"),height:j().min(150,"Height must be at least 150 cm").max(300,"Height must be no more than 300 cm").required("Height is required"),currentWeight:j().min(35,"Current weight must be at least 35 kg").max(300,"Current weight must be no more than 300 kg").required("Current weight is required"),desiredWeight:j().min(35,"Desired weight must be at least 35 kg").max(120,"Desired weight should be no more than 120 kg").required("Desired weight is required"),birthday:ue().required("Birthday is required").test("is-adult","You must be 18 years or older",function(t){return new Date().getFullYear()-new Date(t).getFullYear()>=18}),blood:j().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:A().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:j().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),Pe=i.label`
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
`,He=i.p`
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
`,Ye=i($)`
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
`,Je=i.span`
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
`,x=({name:t,value:r,text:n})=>e.jsxs(Pe,{children:[e.jsx(Ye,{type:"radio",name:t,value:r}),e.jsx(Je,{}),e.jsx(He,{children:n})]}),Xe=i.p`
  color: #efede880;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 4px;
  text-align: start;
  margin-top: 20px;
`,Ve=i.div`
  display: flex;
  margin-bottom: 32px;
  gap: 20px;
  max-width: 335px;
  padding: 0;
  text-align: start;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,Qe=i.div`
  display: flex;
  max-width: 220px;
  text-align: start;
  align-self: center;
`,Ke=i.div`
  display: flex;
`,Ze=i.div`
  max-width: 340px;
  text-align: start;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    text-align: start;
  }
`,et=()=>e.jsxs("div",{children:[e.jsx(Xe,{children:"Blood"}),e.jsxs(Ve,{children:[e.jsxs(Qe,{children:[e.jsx(x,{name:"blood",value:"1",text:"1"}),e.jsx(x,{name:"blood",value:"2",text:"2"}),e.jsx(x,{name:"blood",value:"3",text:"3"}),e.jsx(x,{name:"blood",value:"4",text:"4"})]}),e.jsxs(Ke,{children:[e.jsx(x,{name:"sex",value:"male",text:"Male"}),e.jsx(x,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs(Ze,{children:[e.jsx(x,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(x,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(x,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(x,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(x,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]});i($)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`;const R=i($)`
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
`,B=i($)`
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
`,tt=i.div`
  margin-top: 18px;
`,w=i.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`,rt=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,it=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`,N=i.div`
  display: flex;
  gap: 14px;
  margin-top: 14px;
  margin-bottom: 14px;
`,nt=de`

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
`,at=i.button`
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
`,ot=i.div`
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
`;const st=i.svg`
  width: 18px;
  height: 18px;
  stroke: var(--color-text);
  fill: transparent;
`,dt=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,G=i.svg`
  width: 8px;
  height: 8px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s var(--timing-function);
  &:hover {
    stroke: white;
  }
`,ct=i.p`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`,P=i.div`
  width: 18px;
  height: 18px;
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.3s var(--timing-function);
  &:hover {
    background-color: var(--color-main-one);
  }
`;var lt=Math.ceil,pt=Math.max;function xt(t,r,n,a){for(var d=-1,p=pt(lt((r-t)/(n||1)),0),g=Array(p);p--;)g[a?p:++d]=t,t+=n;return g}var ht=xt;function mt(t,r){return t===r||t!==t&&r!==r}var gt=mt,ut=typeof _=="object"&&_&&_.Object===Object&&_,ft=ut,bt=ft,yt=typeof self=="object"&&self&&self.Object===Object&&self,vt=bt||yt||Function("return this")(),jt=vt,wt=jt,kt=wt.Symbol,ee=kt,H=ee,te=Object.prototype,_t=te.hasOwnProperty,St=te.toString,k=H?H.toStringTag:void 0;function Tt(t){var r=_t.call(t,k),n=t[k];try{t[k]=void 0;var a=!0}catch{}var d=St.call(t);return a&&(r?t[k]=n:delete t[k]),d}var $t=Tt,It=Object.prototype,Wt=It.toString;function Ct(t){return Wt.call(t)}var Rt=Ct,Y=ee,Ft=$t,Ot=Rt,zt="[object Null]",Et="[object Undefined]",J=Y?Y.toStringTag:void 0;function At(t){return t==null?t===void 0?Et:zt:J&&J in Object(t)?Ft(t):Ot(t)}var re=At;function Dt(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var O=Dt,Lt=re,Ut=O,qt="[object AsyncFunction]",Mt="[object Function]",Bt="[object GeneratorFunction]",Nt="[object Proxy]";function Gt(t){if(!Ut(t))return!1;var r=Lt(t);return r==Mt||r==Bt||r==qt||r==Nt}var Pt=Gt,Ht=9007199254740991;function Yt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Ht}var Jt=Yt,Xt=Pt,Vt=Jt;function Qt(t){return t!=null&&Vt(t.length)&&!Xt(t)}var Kt=Qt,Zt=9007199254740991,er=/^(?:0|[1-9]\d*)$/;function tr(t,r){var n=typeof t;return r=r??Zt,!!r&&(n=="number"||n!="symbol"&&er.test(t))&&t>-1&&t%1==0&&t<r}var rr=tr,ir=gt,nr=Kt,ar=rr,or=O;function sr(t,r,n){if(!or(n))return!1;var a=typeof r;return(a=="number"?nr(n)&&ar(r,n.length):a=="string"&&r in n)?ir(n[r],t):!1}var dr=sr,cr=/\s/;function lr(t){for(var r=t.length;r--&&cr.test(t.charAt(r)););return r}var pr=lr,xr=pr,hr=/^\s+/;function mr(t){return t&&t.slice(0,xr(t)+1).replace(hr,"")}var gr=mr;function ur(t){return t!=null&&typeof t=="object"}var fr=ur,br=re,yr=fr,vr="[object Symbol]";function jr(t){return typeof t=="symbol"||yr(t)&&br(t)==vr}var wr=jr,kr=gr,X=O,_r=wr,V=0/0,Sr=/^[-+]0x[0-9a-f]+$/i,Tr=/^0b[01]+$/i,$r=/^0o[0-7]+$/i,Ir=parseInt;function Wr(t){if(typeof t=="number")return t;if(_r(t))return V;if(X(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=X(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=kr(t);var n=Tr.test(t);return n||$r.test(t)?Ir(t.slice(2),n?2:8):Sr.test(t)?V:+t}var Cr=Wr,Rr=Cr,Q=1/0,Fr=17976931348623157e292;function Or(t){if(!t)return t===0?t:0;if(t=Rr(t),t===Q||t===-Q){var r=t<0?-1:1;return r*Fr}return t===t?t:0}var zr=Or,Er=ht,Ar=dr,F=zr;function Dr(t){return function(r,n,a){return a&&typeof a!="number"&&Ar(r,n,a)&&(n=a=void 0),r=F(r),n===void 0?(n=r,r=0):n=F(n),a=a===void 0?r<n?1:-1:F(a),Er(r,n,a,t)}}var Lr=Dr,Ur=Lr,qr=Ur(),Mr=qr;const Br=ce(Mr),Nr=({onDateChange:t})=>{const[r,n]=l.useState(ye(new Date,18)),a=Br(18,D(new Date)+0,1),d=["January","February","March","April","May","June","July","August","September","October","November","December"],p=l.forwardRef(({value:c,onClick:u},o)=>e.jsx(ot,{children:e.jsxs(at,{onClick:u,ref:o,children:[Z(r,"dd.MM.yyyy"),e.jsx(st,{onClick:u,ref:o,children:e.jsx("use",{href:`${m}#icon-calendar`})})]})})),g=({date:c,decreaseMonth:u,increaseMonth:o,changeYear:f,changeMonth:y})=>e.jsxs(dt,{children:[e.jsxs(P,{children:[" ",e.jsx(G,{onClick:u,children:e.jsx("use",{href:`${m}#icon-left`})})]}),e.jsxs(ct,{children:[e.jsx("select",{className:"custom-select-style",value:d[je(c)],onChange:({target:{value:s}})=>y(d.indexOf(s)),children:d.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsx("select",{className:"custom-select-style",value:D(c),onChange:({target:{value:s}})=>f(s),children:a.map(s=>e.jsx("option",{value:s,children:s},s))})]}),e.jsx(P,{children:e.jsx(G,{onClick:o,children:e.jsx("use",{href:`${m}#icon-right`})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(ve,{selected:r,onChange:c=>{n(c),t(c)},customInput:e.jsx(p,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:c=>c.substr(0,2),renderCustomHeader:c=>e.jsx(g,{...c})}),e.jsx(nt,{})]})},S=i.div`
  font-size: 10px;
  color: #e6533c;
  margin-top: 4px;
  max-width: 146px;
`,Gr=i.button`
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
`;const Pr=({onDateChange:t,errors:r,touched:n})=>e.jsxs(tt,{children:[e.jsx(w,{children:"Basic info"}),e.jsxs(rt,{children:[e.jsx("label",{children:e.jsx(B,{type:"text",name:"name"})}),e.jsxs("label",{children:[e.jsx(B,{type:"email",name:"email"}),r.email&&n.email&&e.jsx(S,{children:r.email})]})]}),e.jsxs(it,{children:[e.jsxs(N,{children:[e.jsxs("div",{children:[e.jsx(w,{children:"Height"}),e.jsxs("label",{children:[e.jsx(R,{name:"height"}),r.height&&n.height&&e.jsx(S,{children:r.height})]})]}),e.jsxs("div",{children:[e.jsx(w,{children:"Current Weight"}),e.jsxs("label",{children:[e.jsx(R,{type:"text",name:"currentWeight"}),r.currentWeight&&n.currentWeight&&e.jsx(S,{children:r.currentWeight})]})]})]}),e.jsxs(N,{children:[e.jsxs("label",{children:[e.jsx(w,{children:"Desired Weight"}),e.jsx(R,{type:"text",name:"desiredWeight"}),r.desiredWeight&&n.desiredWeight&&e.jsx(S,{children:r.desiredWeight})]}),e.jsxs("label",{children:[e.jsx(w,{children:"Date of birth"}),e.jsx(Nr,{name:"birthday",onDateChange:t})]})]})]})]}),Hr=t=>{pe.info(t,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,type:"success",theme:"dark"})},h={name:"",email:"",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"2004-11-14"},Yr=()=>{const t=K(),{userData:r}=T(o=>o.auth),{profile:n}=T(o=>o.profile),[a,d]=l.useState("2004-11-14"),[p,g]=l.useState(!1);console.log("prof",n),l.useEffect(()=>{t(le())},[t]),l.useEffect(()=>{r&&(h.name=r.name,h.email=r.email),n&&(h.height=n.height,h.currentWeight=n.currentWeight,h.desiredWeight=n.desiredWeight,h.blood=String(n.blood),h.sex=n.sex,h.levelActivity=String(n.levelActivity),h.birthday=n.birthday,d(n.birthday))},[r,n,a]),l.useEffect(()=>{p&&Hr("The form has been submitted successfully!")},[p]);const c=(o,f)=>{console.log("val",o);const{name:y,email:s,birthday:I,...v}=o,W={name:y},C={birthday:a,...v};t(xe(W)),t(he(C)),g(!0)},u=o=>{let f=Z(o,"yyyy-dd-MM");d(f)};return e.jsx(fe,{initialValues:h,onSubmit:c,validationSchema:Ge,enableReinitialize:!0,children:({errors:o,touched:f})=>e.jsxs(be,{autoComplete:"off",children:[e.jsx(Pr,{onDateChange:u,errors:o,touched:f}),e.jsx(et,{}),e.jsx(Gr,{type:"submit",children:"Save"})]})})},Zr=()=>e.jsxs(me,{children:[e.jsx(we,{children:"Profile Settings"}),e.jsxs(Me,{children:[e.jsx(Ne,{}),e.jsx(Yr,{})]})]});export{Zr as default};
