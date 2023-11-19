import{f as K,s as r,r as p,j as e,c as s,u as C,I as Q,b as D,J as I,a as S,K as V,M,N as Y,O as U,P as X,Q as Z,S as ee,R as te}from"./index-d8340683.js";import{T as ie}from"./TitlePage-02d9bfe5.js";import{b as re,c as ne,t as oe}from"./react-datepicker-50049d34.js";import{f as $}from"./createClass-82f1f5f4.js";const ae=K`

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

`,se=r.button`
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
`,de=r.div`
  display: flex;
  justify-content: end !important;
  align-items: center;
`,T=r.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s var(--timing-function);
  &:hover {
    stroke: var(--color-main-two);
  }
`,ce=r.svg`
  width: 24px;
  height: 24px;
  stroke: var(--color-main-two);
  fill: transparent;
`,le=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,z=r.svg`
  width: 8px;
  height: 8px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s var(--timing-function);
  &:hover {
    stroke: white;
  }
`,pe=r.p`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`,W=r.div`
  width: 18px;
  height: 18px;
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.3s var(--timing-function);
  &:hover {
    background-color: var(--color-main-one);
  }
`,xe=({onDateChange:i})=>{const[t,d]=p.useState(new Date),a=p.forwardRef(({value:o,onClick:l},c)=>e.jsxs(de,{children:[e.jsxs(se,{onClick:l,ref:c,children:[$(t,"dd/MM/yyyy"),e.jsx(ce,{onClick:l,ref:c,children:e.jsx("use",{href:`${s}#icon-calendar`})})]}),e.jsx(T,{onClick:()=>n(re(t,1)),children:e.jsx("use",{href:`${s}#icon-left`})}),e.jsx(T,{onClick:()=>n(ne(t,1)),children:e.jsx("use",{href:`${s}#icon-right`})})]})),n=o=>{d(o),i&&i(o)},x=({date:o,decreaseMonth:l,increaseMonth:c})=>e.jsxs(le,{children:[e.jsx(W,{children:e.jsx(z,{onClick:l,children:e.jsx("use",{href:`${s}#icon-left`})})}),e.jsx(pe,{children:$(o,"MMMM yyyy")}),e.jsx(W,{children:e.jsx(z,{onClick:c,children:e.jsx("use",{href:`${s}#icon-right`})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(oe,{selected:t,onChange:o=>{i(o)},customInput:e.jsx(a,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:o=>o.substr(0,2),renderCustomHeader:o=>e.jsx(x,{...o})}),e.jsx(ae,{})]})},he=r.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,me=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,ge=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`,R=r.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 335px;
  max-height: ${i=>i.height||"826px"};
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
`,P=r.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,L=r.h3`
  color: rgba(239, 237, 232, 0.5);
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
`,B=r.div`
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
`,N=r.svg`
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
`,H=r.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
    line-height: 1.5;
    margin-bottom: -8px;
    color: var(--color-main-two);
  }
  @media screen and (min-width: 1440px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`,h=r.li`
  display: inline-block;
  width: ${i=>i.width||"100%"};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,q=r.ul`
  width: 100%;
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
    padding-right: 16px;
  }
`,A=r.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`,m=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-basis: calc((100% - 2*16px) / 3);

  @media screen and (min-width: 768px) {
    flex-basis: auto;
  }
`,g=r.h4`
  max-width: ${i=>i.size||"inherit"};
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
`,w=r.div`
  display: ${i=>i.display||"inline-block"};
  gap: 8px;
  width: ${i=>i.width||"100%"};
  /* min-width: 59px; */
  max-width: ${i=>i.$maxwidth||"100%"};;
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
`,F=r.div`
  position: relative;
  display: flex;
  padding-right: 28px;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    gap: 8px;
  }
`,O=r.button`
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
`,G=r.svg`
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
`,J=r.p`
  margin: auto;
  display: block;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`,we=r.div`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${i=>i.color?"var(--color-approved-two)":"var(--color-wrong-two)"};
`,fe=({meal:i,points:t})=>{let{_id:d,product:{title:a,category:{name:n},groupBloodNotAllowed:x},profile:{blood:o},calories:l,weight:c}=i;const f=C(),u=j=>{f(Q(j))};return e.jsxs(A,{children:[e.jsxs(m,{children:[e.jsx(g,{children:"Title"}),e.jsx(w,{width:t<1440&&t>=768?"204px":t>=1440?"212px":"100%",children:a})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Category"}),e.jsx(w,{width:t<1440&&t>=768?"128px":t>=1440?"166px":"100%",children:n})]}),e.jsxs(F,{children:[e.jsxs(m,{children:[e.jsx(g,{children:"Calories"}),e.jsx(w,{$maxwidth:"81px",width:t<1440&&t>=768?"90px":t>=1440?"105px":"100%",children:l})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Weight"}),e.jsx(w,{$maxwidth:"80px",width:t<1440&&t>=768?"90px":t>=1440?"105px":"100%",children:c})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Recommend"}),e.jsxs(w,{$maxwidth:"76px",display:"flex",width:t<1440&&t>=768?"80px":t>=1440?"110px":"100%",children:[e.jsx(we,{color:`${x[o]}`}),x[o]?"Yes":"No"]})]}),e.jsx(O,{type:"button",onClick:()=>u(d),children:e.jsx(G,{children:e.jsx("use",{href:`${s}#icon-trash`})})})]})]},d)},ue=()=>{const i=D(I),[t,d]=p.useState(window.innerWidth),a=()=>d(window.innerWidth);return p.useEffect(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),e.jsxs(R,{children:[e.jsxs(P,{children:[e.jsx(L,{children:"Products"}),e.jsx(S,{to:"/products",children:e.jsxs(B,{children:["Add product",e.jsx(N,{children:e.jsx("use",{href:`${s}#icon-arrow`})})]})})]}),i.length!==0?e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[e.jsx(h,{width:t<1440?"206px":"212px",children:"Title"}),e.jsx(h,{width:t<1440?"130px":"166px",children:"Category"}),e.jsx(h,{width:t<1440?"92px":"105px",children:"Calories"}),e.jsx(h,{width:t<1440?"92px":"105px",children:"Weight"}),e.jsx(h,{width:t<1440?"82px":"110px",children:"Recommend"})]}),e.jsxs(q,{children:[" ",i.map(n=>e.jsx(fe,{meal:n,points:t},n._id))," "]})]}):e.jsx(J,{children:"Not found products"})]})},je=({workout:i,points:t})=>{let{_id:d,burnedCalories:a,time:n,exercise_id:{bodyPart:x,equipment:o,name:l,target:c}}=i;const f=C(),u=j=>{f(V(j))};return e.jsxs(A,{children:[e.jsxs(m,{children:[e.jsx(g,{children:"Body Part"}),e.jsx(w,{width:t<1440&&t>=768?"90px":t>=1440?"115px":"100%",children:x})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Equipment"}),e.jsx(w,{width:t<1440&&t>=768?"132px":t>=1440?"157px":"100%",children:o})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Name"}),e.jsx(w,{width:t<1440&&t>=768?"128px":t>=1440?"131px":"100%",children:l})]}),e.jsxs(F,{children:[e.jsxs(m,{children:[e.jsx(g,{children:"Target"}),e.jsx(w,{$maxwidth:"81px",width:t<1440&&t>=768?"84px":t>=1440?"106px":"100%",children:c})]}),e.jsxs(m,{children:[e.jsx(g,{size:"80px",children:"Burned Calories"}),e.jsx(w,{$maxwidth:"80px",width:t<1440&&t>=768?"78px":t>=1440?"91px":"100%",children:a})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Time"}),e.jsx(w,{$maxwidth:"76px",width:t<1440&&t>=768?"72px":t>=1440?"82px":"100%",children:n})]}),e.jsx(O,{type:"button",onClick:()=>u(d),children:e.jsx(G,{children:e.jsx("use",{href:`${s}#icon-trash`})})})]})]},d)},ye=()=>{const i=D(M),[t,d]=p.useState(window.innerWidth),a=()=>d(window.innerWidth);return p.useEffect(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),e.jsxs(R,{height:"1066px",children:[e.jsxs(P,{children:[e.jsx(L,{children:"Exercises"}),e.jsx(S,{to:"/exercises",children:e.jsxs(B,{children:["Add exercise",e.jsx(N,{children:e.jsx("use",{href:`${s}#icon-arrow`})})]})})]}),i.length!==0?e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[e.jsx(h,{width:t<1440?"90px":"115px",children:"Body Part"}),e.jsx(h,{width:t<1440?"132px":"157px",children:"Equipment"}),e.jsx(h,{width:t<1440?"128px":"131px",children:"Name"}),e.jsx(h,{width:t<1440?"84px":"106px",children:"Target"}),e.jsx(h,{width:t<1440?"78px":"91px",children:"Burned Calories"}),e.jsx(h,{width:t<1440?"72px":"82px",children:"Time"})]}),e.jsxs(q,{children:[" ",i.map(n=>e.jsx(je,{workout:n,points:t},n._id))," "]})]}):e.jsx(J,{children:"Not found exercises"})]})},be=r.section`
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
`,ke=r.ul`
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
`,y=r.li`
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
  border: ${i=>i.$border?`1px solid ${i.$border}`:"1px solid rgba(239, 237, 232, 0.20)"};
  background: ${i=>i.color||"rgba(239, 237, 232, 0.05)"};

  @media screen and (min-width: 768px) {
    flex-basis: auto;
    width: 187px;
    height: 116px;
    padding: 18px;
    font-size: 24px;
    line-height: 1.33;
  }
`,b=r.h3`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${i=>i.color||"rgba(239, 237, 232, 0.40)"};
  font-weight: 400;
  line-height: 1.33;
  font-size: 12px;
  font-style: normal;
  margin: 0;

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
`,ve=r.p`
    font-size: 12px;
    font-weight: 400;
`,_e=r.div`
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
`,k=r.svg`
  width: ${i=>i.size||"20px"};
  height: ${i=>i.size||"20px"};
  fill: ${i=>i.fill||"none"};
  stroke: ${i=>i.stroke||"var(--color-text)"};
  display: inline-block;
  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,De=r.svg`
  fill: var(--color-main-two);
  stroke: var(--color-text);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--color-main-two);
`,$e=r.div`
  display: block;
  width: 24px;
  height: 24px;
`,E=()=>{const{targetBmr:i,targetTime:t}=D(Y),d=D(I),a=D(M),n=Math.round(i),x=Math.round(d.reduce((v,_)=>v+_.calories,0)),o=Math.round(a.reduce((v,_)=>v+_.burnedCalories,0)),l=a.reduce((v,_)=>v+_.time,0),c=n-x+o,f=t-l;let u="rgba(239, 237, 232, 0.20)",j="rgba(239, 237, 232, 0.20)";return c<0&&(u="var(--color-wrong-two)",j="var(--color-approved-one)"),e.jsxs(be,{children:[e.jsxs(ke,{children:[e.jsxs(y,{color:"var(--color-main-one)",children:[e.jsxs(b,{color:"rgba(239, 237, 232, 0.80)",children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-food`})}),"Daily calorie intake"]}),n!==0?n:e.jsx(ve,{children:"Please enter your details in the profile"})]}),e.jsxs(y,{color:"var(--color-main-one)",children:[e.jsxs(b,{color:"rgba(239, 237, 232, 0.80)",children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-dumbbell`})}),"Daily norm of sports"]}),t," min"]}),e.jsxs(y,{children:[e.jsxs(b,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-apple`})}),"Calories consumed"]}),x]}),e.jsxs(y,{children:[e.jsxs(b,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-calories`})}),"Calories burned"]}),o]}),e.jsxs(y,{$border:u,children:[e.jsxs(b,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-bubble`})}),"The rest of the calories"]}),c]}),e.jsxs(y,{$border:j,children:[e.jsxs(b,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${s}#icon-run`})}),"The rest of sports"]}),c<0?`+ ${f}`:f," min"]})]}),e.jsxs(_e,{children:[e.jsx($e,{children:e.jsx(De,{children:e.jsx("use",{href:`${s}#icon-exclamation`})})}),"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."]})]})},Ee=()=>{const i=C(),[t,d]=p.useState(window.innerWidth),a=()=>d(window.innerWidth);p.useEffect(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]);const[n,x]=p.useState($(new Date,"yyyy-MM-dd")),o=l=>{const c=l.toISOString();x(c)};return p.useEffect(()=>{i(U(n))},[n]),p.useEffect(()=>{i(X(n))},[n]),p.useEffect(()=>{i(Z())},[]),e.jsxs(ee,{children:[e.jsxs(he,{children:[e.jsx(ie,{children:"Diary"}),e.jsx(xe,{onDateChange:o})]}),t>=768||e.jsx(E,{}),e.jsxs(ge,{children:[e.jsxs(me,{children:[e.jsx(ue,{}),e.jsx(ye,{})]}),t<768||e.jsx(E,{})]}),e.jsx(te,{})]})};export{Ee as default};
