import{s as t,u as E,b as v,r as l,g as F,j as e,c as x,a as B,d as M,e as $,l as A,f as H,h as P,i as O,k as G,S as Y}from"./index-8040ae22.js";import{c as N,a as S,b as u,d as V,F as k,e as J,f as K}from"./index.esm-0804dfa3.js";import{t as Q}from"./react-datepicker-700a7873.js";import{f as W}from"./createClass-146fb973.js";import{T as X}from"./TitlePage-d8a56afb.js";const Z=t.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,U=t.div`
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
`,D=t.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,I=t.svg`
  width: 20px;
  height: 20px;
  fill: rgba(239, 137, 100, 1);
`,R=t.span`
  font-size: 18px;
  font-weight: 700;
  color: rgba(239, 237, 232, 1);
`,ee=t.div`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,te=t.img`
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
`,ie=t.svg`
  width: 90px;
  height: 90px;
  fill: rgba(239, 237, 232, 0.1);
  border: 1px solid var(--color-main-one);
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,re=t.input`
  visibility: hidden;
`,ae=t.label`
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
`,oe=t.svg`
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
`,de=t.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,ce=t.div`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,le=t.svg`
  width: 24px;
  height: 24px;
  background-color: rgba(239, 137, 100, 1);
  border-radius: 50%;
  stroke: var(--color-text);
`,pe=t.div`
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
`,he=t.svg`
  height: 20px;
  width: 20px;
  stroke: var(--color-main-one);
`,me=t.div`
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
`,ge=t.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
`,ue=t.div`
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
`;const fe=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,be=()=>{const a=E(),{userData:n}=v(m=>m.auth),{target:r}=v(m=>m.profile),[g,p]=l.useState(),[o,h]=l.useState("Hello user!"),[i,s]=l.useState(!1);l.useEffect(()=>{n&&h(n.name),n.avatarURL&&p()},[n]),l.useEffect(()=>{a(F())},[a]);const b=new FileReader;b.onloadend=()=>{p(b.result)};const z=async m=>{m.preventDefault();const w=m.target.files[0];b.readAsDataURL(w),s(!0);try{a($(w))}catch(C){C.response&&C.response.status===404&&p(null)}s(!1)},y=()=>{a(A())};return e.jsxs(ue,{children:[e.jsx(re,{id:"file-loader",type:"file",onChange:z}),e.jsxs(ne,{children:[e.jsx(ee,{children:g||n.avatarURL?e.jsx(te,{src:g||`https://powerpulse-t5-backend.onrender.com/${n.avatarURL}`,sizes:"90px",onError:()=>{p(null),s(!1)},loading:"lazy"}):e.jsx(ie,{children:e.jsx("use",{href:`${x}#icon-user`})})}),e.jsx(ae,{htmlFor:"file-loader",children:e.jsx(oe,{children:e.jsx("use",{href:`${x}#icon-plus`})})})]}),e.jsxs(ce,{children:[e.jsx(de,{children:o}),e.jsx(se,{children:"User"})]}),e.jsxs(Z,{children:[e.jsxs(U,{children:[e.jsxs(D,{children:[e.jsx(I,{children:e.jsx("use",{href:`${x}#icon-food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(R,{children:Math.round(r.targetBmr)??"0"})]}),e.jsxs(U,{children:[e.jsxs(D,{children:[e.jsx(I,{children:e.jsx("use",{href:`${x}#icon-dumbbell`})}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(R,{children:[r.targetTime??"0"," min"]})]})]}),e.jsxs(pe,{children:[e.jsx(le,{children:e.jsx("use",{href:`${x}#icon-exclamation`})}),e.jsx(xe,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(me,{onClick:y,children:[e.jsx(B,{to:"/welcome",children:e.jsx(ge,{children:"Logout"})}),e.jsx(he,{onClick:y,children:e.jsx("use",{href:`${x}#icon-logout`})})]}),i&&e.jsx(M,{})]})},ye=N().shape({name:S().required("Name is required"),height:u().min(150,"Height must be at least 150 cm").max(300,"Height must be no more than 300 cm").required("Height is required"),currentWeight:u().min(35,"Current weight must be at least 35 kg").max(300,"Current weight must be no more than 300 kg").required("Current weight is required"),desiredWeight:u().min(35,"Desired weight must be at least 35 kg").max(120,"Desired weight should be no more than 120 kg").required("Desired weight is required"),birthday:V().required("Birthday is required").test("is-adult","You must be 18 years or older",function(a){return new Date().getFullYear()-new Date(a).getFullYear()>=18}),blood:u().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:S().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:u().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),we=t.label`
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
`,ve=t(k)`
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
`,ke=t.span`
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
`,d=({name:a,value:n,text:r})=>e.jsxs(we,{children:[e.jsx(ve,{type:"radio",name:a,value:n}),e.jsx(ke,{}),e.jsx(je,{children:r})]}),_e=t.p`
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
`,ze=t.div`
  display: flex;
  max-width: 220px;
  text-align: start;
  align-self: center;
`,Ce=t.div`
  display: flex;
`,Se=t.div`
  max-width: 340px;
  text-align: start;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    text-align: start;
  }
`,Ue=()=>e.jsxs("div",{children:[e.jsx(_e,{children:"Blood"}),e.jsxs(We,{children:[e.jsxs(ze,{children:[e.jsx(d,{name:"blood",value:"1",text:"1"}),e.jsx(d,{name:"blood",value:"2",text:"2"}),e.jsx(d,{name:"blood",value:"3",text:"3"}),e.jsx(d,{name:"blood",value:"4",text:"4"})]}),e.jsxs(Ce,{children:[e.jsx(d,{name:"sex",value:"male",text:"Male"}),e.jsx(d,{name:"sex",value:"female",text:"Female"})]})]}),e.jsxs(Se,{children:[e.jsx(d,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(d,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(d,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(d,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(d,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"})]})]});t(k)`
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  background-color: #000;
  color: #efede8;
`;const _=t(k)`
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
`,q=t(k)`
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
`,De=t.div`
  margin-top: 18px;
`,f=t.p`
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
`,Re=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`,L=t.div`
  display: flex;
  gap: 14px;
  margin-top: 14px;
  margin-bottom: 14px;
`,qe=H`

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

`,Le=t.button`
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
`,Te=t.div`
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
`;t.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  &:hover {
    stroke: var(--color-main-two);
  }
`;const Ee=t.svg`
  width: 18px;
  height: 18px;
  stroke: var(--color-text);
  fill: transparent;
`,Fe=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,T=t.svg`
  width: 8px;
  height: 8px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  &:hover {
    stroke: white;
  }
`,Be=t.p`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`,Me=({onDateChange:a})=>{const[n,r]=l.useState(new Date),g=l.forwardRef(({value:o,onClick:h},i)=>e.jsx(Te,{children:e.jsxs(Le,{onClick:h,ref:i,children:[W(n,"dd.MM.yyyy"),e.jsx(Ee,{onClick:h,ref:i,children:e.jsx("use",{href:`${x}#icon-calendar`})})]})})),p=({date:o,decreaseMonth:h,increaseMonth:i})=>e.jsxs(Fe,{children:[e.jsx(T,{onClick:h,children:e.jsx("use",{href:`${x}#icon-left`})}),e.jsx(Be,{children:W(o,"MMMM yyyy")}),e.jsx(T,{onClick:i,children:e.jsx("use",{href:`${x}#icon-right`})})]});return e.jsxs(e.Fragment,{children:[e.jsx(Q,{selected:n,onChange:o=>{r(o),a(o)},customInput:e.jsx(g,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:o=>o.substr(0,2),renderCustomHeader:o=>e.jsx(p,{...o})}),e.jsx(qe,{})]})},$e=({onDateChange:a})=>e.jsxs(De,{children:[e.jsx(f,{children:"Basic info"}),e.jsxs(Ie,{children:[e.jsx("label",{children:e.jsx(q,{type:"text",name:"name"})}),e.jsx("label",{children:e.jsx(q,{type:"email",name:"email"})})]}),e.jsxs(Re,{children:[e.jsxs(L,{children:[e.jsxs("div",{children:[e.jsx(f,{children:"Height"}),e.jsx("label",{children:e.jsx(_,{name:"height"})})]}),e.jsxs("div",{children:[e.jsx(f,{children:"Current Weight"}),e.jsx("label",{children:e.jsx(_,{type:"text",name:"currentWeight"})})]})]}),e.jsxs(L,{children:[e.jsxs("label",{children:[e.jsx(f,{children:"Desired Weight"}),e.jsx(_,{type:"text",name:"desiredWeight"})]}),e.jsxs("label",{children:[e.jsx(f,{children:"Date of birth"}),e.jsx(Me,{name:"birthday",onDateChange:a})]})]})]})]}),j=t.div`
  font-size: 10px;
  color: #e6533c;
`,Ae=t.button`
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
`,c={name:"",email:"",height:0,currentWeight:0,desiredWeight:0,blood:0,sex:"",levelActivity:0,birthday:"2004-11-14"},He=()=>{const a=E(),{userData:n}=v(i=>i.auth),{profile:r}=v(i=>i.profile),[g,p]=l.useState("2004-11-14");l.useEffect(()=>{a(P())},[a]),l.useEffect(()=>{n&&(c.name=n.name,c.email=n.email),r&&(c.height=r.height,c.currentWeight=r.currentWeight,c.desiredWeight=r.desiredWeight,c.blood=String(r.blood),c.sex=r.sex,c.levelActivity=String(r.levelActivity),c.birthday=r.birthday,p(r.birthday))},[n,r,g]);const o=i=>{const{name:s,email:b,birthday:z,...y}=i,m={name:s},w={birthday:g,...y};a(O(m)),a(G(w))},h=i=>{let s=W(i,"yyyy-dd-MM");p(s)};return e.jsx(J,{initialValues:c,onSubmit:o,validationSchema:ye,enableReinitialize:!0,children:({errors:i,touched:s})=>e.jsxs(K,{autoComplete:"off",children:[i.email&&s.email&&e.jsx(j,{children:i.email}),i.height&&s.height&&e.jsx(j,{children:i.height}),i.currentWeight&&s.currentWeight&&e.jsx(j,{children:i.currentWeight}),i.desiredWeight&&s.desiredWeight&&e.jsx(j,{children:i.desiredWeight}),e.jsx($e,{onDateChange:h}),e.jsx(Ue,{}),e.jsx(Ae,{type:"submit",children:"Save"})]})})},Ve=()=>e.jsxs(Y,{children:[e.jsx(X,{children:"Profile Settings"}),e.jsxs(fe,{children:[e.jsx(be,{}),e.jsx(He,{})]})]});export{Ve as default};
