import{f as J,s as r,r as x,j as e,a as s,u as E,T as K,d as u,U as B,b as N,V as $,W as ee,X as q,Y as te,Z as ie,$ as re,a0 as ne,a1 as C,a2 as oe,a3 as ae,a4 as se,S as de}from"./index-fe2588ea.js";import{T as ce}from"./TitlePage-4972a02b.js";import{b as le,c as pe,t as xe}from"./react-datepicker-303ea979.js";import{f as I}from"./createClass-f345634e.js";const he=J`

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
    transition: background-color 0.3s var(--timing-function) !important;
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

`,me=r.button`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-right: 20px;
`,ge=r.div`
  display: flex;
  justify-content: end !important;
  align-items: center;
`,M=r.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s var(--timing-function);
  &:hover {
    stroke: var(--color-main-two);
  }
`,we=r.svg`
  width: 24px;
  height: 24px;
  stroke: var(--color-main-two);
  fill: transparent;
`,ue=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,L=r.svg`
  width: 8px;
  height: 8px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s var(--timing-function);
  &:hover {
    stroke: white;
  }
`,fe=r.p`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`,R=r.button`
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: background-color 0.3s var(--timing-function);
  cursor: pointer;
  &:hover {
    background-color: var(--color-main-one);
  }
`,je=({onDateChange:t})=>{const[n,c]=x.useState(new Date),l=x.forwardRef(({value:a,onClick:p},i)=>e.jsxs(ge,{children:[e.jsxs(me,{onClick:p,ref:i,children:[I(n,"dd/MM/yyyy"),e.jsx(we,{onClick:p,ref:i,children:e.jsx("use",{href:`${s}#icon-calendar`})})]}),e.jsx(M,{onClick:()=>d(le(n,1)),children:e.jsx("use",{href:`${s}#icon-left`})}),e.jsx(M,{onClick:()=>d(pe(n,1)),children:e.jsx("use",{href:`${s}#icon-right`})})]})),d=a=>{c(a),t&&t(a)},w=({date:a,decreaseMonth:p,increaseMonth:i})=>e.jsxs(ue,{children:[e.jsx(R,{onClick:p,children:e.jsx(L,{children:e.jsx("use",{href:`${s}#icon-left`})})}),e.jsx(fe,{children:I(a,"MMMM yyyy")}),e.jsx(R,{onClick:i,children:e.jsx(L,{children:e.jsx("use",{href:`${s}#icon-right`})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(xe,{minDate:new Date("10/10/2023"),maxDate:new Date,selected:n,onChange:a=>{c(a),t(a)},customInput:e.jsx(l,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:a=>a.substr(0,2),renderCustomHeader:a=>e.jsx(w,{...a})}),e.jsx(he,{})]})},ye=r.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,be=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,ke=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`,H=r.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 335px;
  max-height: ${t=>t.height||"826px"};
  padding: 16px 8px 16px 16px;
  /* margin-bottom: 40px; */
  gap: 22px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  color: var(--color-text);

  @media screen and (min-width: 768px) {
    min-height: 236px;
    height: 236px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`,A=r.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

    @media screen and (min-width: 1440px) {
    margin-right: 8px;
  }
`,F=r.h3`
  color: rgba(239, 237, 232, 0.5);
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
`,V=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-main-one);
  font-weight: 500;
  line-height: 1.29;
  font-size: 14px;
  margin-right: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Y=r.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: var(--color-main-one);
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,z=r.ul`
    display: flex;
    gap: 8px;
    line-height: 1.5;
    margin-bottom: -8px;
    color: var(--color-main-two);
 
  @media screen and (min-width: 1440px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`,o=r.li`
  display: inline-block;
  width: ${t=>t.width||"100%"};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,G=r.ul`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-right: 8px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    padding-right: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    padding-right: 0px;

    /* padding-right: 16px; */
  }
`,O=r.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`,h=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-basis: calc((100% - 2*16px) / 3);

  @media screen and (min-width: 768px) {
    flex-basis: auto;
  }
`,m=r.h4`
  max-width: ${t=>t.size||"inherit"};
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  color: var(--color-main-two);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    display: none;
  }
`,g=r.div`
  display: ${t=>t.display||"inline-block"};
  gap: 8px;
  width: ${t=>t.width||"100%"};
  /* min-width: 59px; */
  max-width: ${t=>t.$maxwidth||"100%"};;
  height: 38px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.29;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: none;
    height: 40px;
    padding: 8px 14px;
    line-height: 1.5;
    font-size: 16px;
  }
`,Q=r.div`
  position: relative;
  display: flex;
  padding-right: 28px;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    gap: 8px;
  }
`,U=r.button`
  position: absolute;
  right: 0;
  bottom: 9px;
  padding: 0;
  line-height: 0;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    bottom: 10px;
  }
`,X=r.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--color-main-two);
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,Z=r.p`
  margin: auto;
  display: block;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`,ve=r.div`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${t=>t.color==="false"?"var(--color-approved-two)":"var(--color-wrong-two)"};
`,_e=({meal:t})=>{let{_id:n,product:{title:c,category:{name:l},groupBloodNotAllowed:d},profile:{blood:w},calories:a,weight:p}=t;const[i,y]=x.useState(window.innerWidth),f=()=>y(window.innerWidth);x.useEffect(()=>(window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)),[]);const j=E(),b=k=>{j(K(k))};return e.jsxs(O,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Title"}),e.jsx(g,{width:i<1440&&i>=768?"204px":i>=1440?"212px":"100%",children:c})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Category"}),e.jsx(g,{width:i<1440&&i>=768?"128px":i>=1440?"166px":"100%",children:l})]}),e.jsxs(Q,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Calories"}),e.jsx(g,{$maxwidth:"81px",width:i<1440&&i>=768?"90px":i>=1440?"105px":"100%",children:a})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Weight"}),e.jsx(g,{$maxwidth:"80px",width:i<1440&&i>=768?"90px":i>=1440?"105px":"100%",children:p})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Recommend"}),e.jsxs(g,{$maxwidth:"76px",display:"flex",width:i<1440&&i>=768?"80px":i>=1440?"110px":"100%",children:[e.jsx(ve,{color:`${d[w]}`}),d[w]?"No":"Yes"]})]}),e.jsx(U,{type:"button",onClick:()=>b(n),children:e.jsx(X,{children:e.jsx("use",{href:`${s}#icon-trash`})})})]})]},n)},De=()=>{const t=u(B);return e.jsxs(H,{children:[e.jsxs(A,{children:[e.jsx(F,{children:"Products"}),e.jsx(N,{to:"/products",children:e.jsxs(V,{children:["Add product",e.jsx(Y,{children:e.jsx("use",{href:`${s}#icon-arrow`})})]})})]}),t.length!==0?e.jsxs(e.Fragment,{children:[e.jsx($,{minWidth:768,maxWidth:1439,children:e.jsxs(z,{children:[e.jsx(o,{width:"206px",children:"Title"}),e.jsx(o,{width:"130px",children:"Category"}),e.jsx(o,{width:"92px",children:"Calories"}),e.jsx(o,{width:"92px",children:"Weight"}),e.jsx(o,{width:"82px",children:"Recommend"})]})}),e.jsx($,{minWidth:1440,children:e.jsxs(z,{children:[e.jsx(o,{width:"212px",children:"Title"}),e.jsx(o,{width:"166px",children:"Category"}),e.jsx(o,{width:"105px",children:"Calories"}),e.jsx(o,{width:"105px",children:"Weight"}),e.jsx(o,{width:"110px",children:"Recommend"})]})}),e.jsxs(G,{children:[" ",t.map(n=>e.jsx(_e,{meal:n},n._id))," "]})]}):e.jsx(Z,{children:"Not found products"})]})},$e=({workout:t})=>{let{_id:n,burnedCalories:c,time:l,exercise_id:{bodyPart:d,equipment:w,name:a,target:p}}=t;const[i,y]=x.useState(window.innerWidth),f=()=>y(window.innerWidth);x.useEffect(()=>(window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)),[]);const j=E(),b=k=>{j(ee(k))};return e.jsxs(O,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Body Part"}),e.jsx(g,{width:i<1440&&i>=768?"90px":i>=1440?"115px":"100%",children:d})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Equipment"}),e.jsx(g,{width:i<1440&&i>=768?"132px":i>=1440?"157px":"100%",children:w})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Name"}),e.jsx(g,{width:i<1440&&i>=768?"128px":i>=1440?"131px":"100%",children:a})]}),e.jsxs(Q,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Target"}),e.jsx(g,{$maxwidth:"81px",width:i<1440&&i>=768?"84px":i>=1440?"106px":"100%",children:p})]}),e.jsxs(h,{children:[e.jsx(m,{size:"80px",children:"Burned Calories"}),e.jsx(g,{$maxwidth:"80px",width:i<1440&&i>=768?"78px":i>=1440?"91px":"100%",children:c})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Time"}),e.jsx(g,{$maxwidth:"76px",width:i<1440&&i>=768?"72px":i>=1440?"82px":"100%",children:l})]}),e.jsx(U,{type:"button",onClick:()=>b(n),children:e.jsx(X,{children:e.jsx("use",{href:`${s}#icon-trash`})})})]})]},n)},We=()=>{const t=u(q),[n,c]=x.useState(window.innerWidth),l=()=>c(window.innerWidth);return x.useEffect(()=>(window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[]),e.jsxs(H,{height:"1066px",children:[e.jsxs(A,{children:[e.jsx(F,{children:"Exercises"}),e.jsx(N,{to:"/exercises",children:e.jsxs(V,{children:["Add exercise",e.jsx(Y,{children:e.jsx("use",{href:`${s}#icon-arrow`})})]})})]}),t.length!==0?e.jsxs(e.Fragment,{children:[e.jsx($,{minWidth:768,maxWidth:1439,children:e.jsxs(z,{children:[e.jsx(o,{width:"90px",children:"Body Part"}),e.jsx(o,{width:"132px",children:"Equipment"}),e.jsx(o,{width:"128px",children:"Name"}),e.jsx(o,{width:"84px",children:"Target"}),e.jsx(o,{width:"78px",children:"Burned Calories"}),e.jsx(o,{width:"72px",children:"Time"})]})}),e.jsx($,{minWidth:1440,children:e.jsxs(z,{children:[e.jsx(o,{width:"115px",children:"Body Part"}),e.jsx(o,{width:"157px",children:"Equipment"}),e.jsx(o,{width:"131px",children:"Name"}),e.jsx(o,{width:"106px",children:"Target"}),e.jsx(o,{width:"91px",children:"Burned Calories"}),e.jsx(o,{width:"82px",children:"Time"})]})}),e.jsxs(G,{children:[" ",t.map(d=>e.jsx($e,{workout:d},d._id))," "]})]}):e.jsx(Z,{children:"Not found exercises"})]})},Te=r.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
  }
`,Ce=r.ul`
  display: flex;
  column-gap: 13px;
  row-gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    width: 593px;
    height: 250px;
    flex-direction: column;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
    height: 100%;
    flex-direction: row;
    gap: 16px;
  }
`,v=r.li`
position: relative;
  width: 159px;
  flex-basis: calc((100% - 1*13px) / 2);
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px;
  color: var(--color-text);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;
  border-radius: 12px;
  border: ${t=>t.$border?`1px solid ${t.$border}`:"1px solid rgba(239, 237, 232, 0.20)"};
  background: ${t=>t.color||"rgba(239, 237, 232, 0.05)"};

  @media screen and (min-width: 768px) {
    flex-basis: auto;
    width: 187px;
    height: 116px;
    padding: 18px;
    font-size: 24px;
    line-height: 1.33;
  }
`,_=r.h3`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${t=>t.color||"rgba(239, 237, 232, 0.40)"};
  font-weight: 400;
  line-height: 1.33;
  font-size: 12px;
  font-style: normal;
  margin: 0;

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
`,ze=r.p`
    font-size: 12px;
    font-weight: 400;
`,Ie=r.div`
  display: flex;
  gap: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    width: 593px;
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,D=r.svg`
  width: ${t=>t.size||"20px"};
  height: ${t=>t.size||"20px"};
  fill: ${t=>t.fill||"none"};
  stroke: ${t=>t.stroke||"var(--color-text)"};
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,Ee=r.svg`
  fill: var(--color-main-two);
  stroke: var(--color-text);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--color-main-two);
`,Se=r.div`
  display: block;
  width: 24px;
  height: 24px;
`,P=()=>{const t=u(te),n=u(ie),c=u(re),{targetBmr:l,targetTime:d}=u(ne),w=u(B),a=u(q),p=Math.round(l),i=Math.round(w.reduce((W,T)=>W+T.calories,0)),y=Math.round(a.reduce((W,T)=>W+T.burnedCalories,0)),f=a.reduce((W,T)=>W+T.time,0),j=p-i+y,b=d-f;let k="rgba(239, 237, 232, 0.20)",S="rgba(239, 237, 232, 0.20)";return j<0&&(k="var(--color-wrong-two)",S="var(--color-approved-one)"),e.jsxs(Te,{children:[e.jsxs(Ce,{children:[e.jsxs(v,{color:"var(--color-main-one)",children:[e.jsxs(_,{color:"rgba(239, 237, 232, 0.80)",children:[e.jsx(D,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-food`})}),"Daily calorie intake"]}),t?e.jsx(C,{color:"var(--color-text)"}):p!==0?p:e.jsx(ze,{children:"Please enter your details in the profile"})]}),e.jsxs(v,{color:"var(--color-main-one)",children:[e.jsxs(_,{color:"rgba(239, 237, 232, 0.80)",children:[e.jsx(D,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-dumbbell`})}),"Daily norm of sports"]}),d," min"]}),e.jsxs(v,{children:[e.jsxs(_,{children:[e.jsx(D,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-apple`})}),"Calories consumed"]}),n?e.jsx(C,{}):i]}),e.jsxs(v,{children:[e.jsxs(_,{children:[e.jsx(D,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-calories`})}),"Calories burned"]}),c?e.jsx(C,{}):y]}),e.jsxs(v,{$border:k,children:[e.jsxs(_,{children:[e.jsx(D,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-bubble`})}),"The rest of the calories"]}),n||c?e.jsx(C,{}):j]}),e.jsxs(v,{$border:S,children:[e.jsxs(_,{children:[e.jsx(D,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-run`})}),"The rest of sports"]}),c?e.jsx(C,{}):j<0?`+ ${b}`:b," ","min"]})]}),e.jsxs(Ie,{children:[e.jsx(Se,{children:e.jsx(Ee,{children:e.jsx("use",{href:`${s}#icon-exclamation`})})}),"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."]})]})},Be=()=>{const t=E(),[n,c]=x.useState(I(new Date,"yyyy-MM-dd")),l=d=>{const w=d.toISOString();c(w)};return x.useEffect(()=>{t(oe(n))},[n]),x.useEffect(()=>{t(ae(n))},[n]),x.useEffect(()=>{t(se())},[]),e.jsxs(de,{children:[e.jsxs(ye,{children:[e.jsx(ce,{children:"Diary"}),e.jsx(je,{onDateChange:l})]}),e.jsx($,{maxWidth:765,children:e.jsx(P,{})}),e.jsxs(ke,{children:[e.jsxs(be,{children:[e.jsx(De,{}),e.jsx(We,{})]}),e.jsx($,{minWidth:768,children:e.jsx(P,{})})]})]})};export{Be as default};
