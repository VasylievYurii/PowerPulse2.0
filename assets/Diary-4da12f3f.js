import{f as V,s as r,r as p,j as e,d,u as C,W as X,c as D,X as S,a as I,Y as Z,Z as M,$ as J,a0 as K,a1 as Q,a2 as U,S as ee}from"./index-4d287675.js";import{T as te}from"./TitlePage-48c53ce1.js";import{b as ie,c as re,t as ne}from"./react-datepicker-43a0ff2a.js";import{f as $}from"./createClass-f410952a.js";const oe=V`

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

`,ae=r.button`
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
`,se=r.div`
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
`,de=r.svg`
  width: 24px;
  height: 24px;
  stroke: var(--color-main-two);
  fill: transparent;
`,ce=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,W=r.svg`
  width: 8px;
  height: 8px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s var(--timing-function);
  &:hover {
    stroke: white;
  }
`,le=r.p`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`,z=r.button`
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
`,pe=({onDateChange:i})=>{const[t,s]=p.useState(new Date),a=p.forwardRef(({value:n,onClick:l},c)=>e.jsxs(se,{children:[e.jsxs(ae,{onClick:l,ref:c,children:[$(t,"dd/MM/yyyy"),e.jsx(de,{onClick:l,ref:c,children:e.jsx("use",{href:`${d}#icon-calendar`})})]}),e.jsx(T,{onClick:()=>o(ie(t,1)),children:e.jsx("use",{href:`${d}#icon-left`})}),e.jsx(T,{onClick:()=>o(re(t,1)),children:e.jsx("use",{href:`${d}#icon-right`})})]})),o=n=>{s(n),i&&i(n)},x=({date:n,decreaseMonth:l,increaseMonth:c})=>e.jsxs(ce,{children:[e.jsx(z,{onClick:l,children:e.jsx(W,{children:e.jsx("use",{href:`${d}#icon-left`})})}),e.jsx(le,{children:$(n,"MMMM yyyy")}),e.jsx(z,{onClick:c,children:e.jsx(W,{children:e.jsx("use",{href:`${d}#icon-right`})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(ne,{maxDate:new Date,selected:t,onChange:n=>{s(n),i(n)},customInput:e.jsx(a,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:n=>n.substr(0,2),renderCustomHeader:n=>e.jsx(x,{...n})}),e.jsx(oe,{})]})},xe=r.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,he=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,me=r.div`
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
`,Y=r.button`
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
`,O=r.p`
  margin: auto;
  display: block;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`,ge=r.div`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${i=>i.color==="true"?"var(--color-approved-two)":"var(--color-wrong-two)"};
`,we=({meal:i,points:t})=>{let{_id:s,product:{title:a,category:{name:o},groupBloodNotAllowed:x},profile:{blood:n},calories:l,weight:c}=i;const u=C(),f=j=>{u(X(j))};return e.jsxs(A,{children:[e.jsxs(m,{children:[e.jsx(g,{children:"Title"}),e.jsx(w,{width:t<1440&&t>=768?"204px":t>=1440?"212px":"100%",children:a})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Category"}),e.jsx(w,{width:t<1440&&t>=768?"128px":t>=1440?"166px":"100%",children:o})]}),e.jsxs(F,{children:[e.jsxs(m,{children:[e.jsx(g,{children:"Calories"}),e.jsx(w,{$maxwidth:"81px",width:t<1440&&t>=768?"90px":t>=1440?"105px":"100%",children:l})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Weight"}),e.jsx(w,{$maxwidth:"80px",width:t<1440&&t>=768?"90px":t>=1440?"105px":"100%",children:c})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Recommend"}),e.jsxs(w,{$maxwidth:"76px",display:"flex",width:t<1440&&t>=768?"80px":t>=1440?"110px":"100%",children:[e.jsx(ge,{color:`${x[n]}`}),x[n]?"Yes":"No"]})]}),e.jsx(Y,{type:"button",onClick:()=>f(s),children:e.jsx(G,{children:e.jsx("use",{href:`${d}#icon-trash`})})})]})]},s)},ue=()=>{const i=D(S),[t,s]=p.useState(window.innerWidth),a=()=>s(window.innerWidth);return p.useEffect(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),e.jsxs(R,{children:[e.jsxs(P,{children:[e.jsx(L,{children:"Products"}),e.jsx(I,{to:"/products",children:e.jsxs(B,{children:["Add product",e.jsx(N,{children:e.jsx("use",{href:`${d}#icon-arrow`})})]})})]}),i.length!==0?e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[e.jsx(h,{width:t<1440?"206px":"212px",children:"Title"}),e.jsx(h,{width:t<1440?"130px":"166px",children:"Category"}),e.jsx(h,{width:t<1440?"92px":"105px",children:"Calories"}),e.jsx(h,{width:t<1440?"92px":"105px",children:"Weight"}),e.jsx(h,{width:t<1440?"82px":"110px",children:"Recommend"})]}),e.jsxs(q,{children:[" ",i.map(o=>e.jsx(we,{meal:o,points:t},o._id))," "]})]}):e.jsx(O,{children:"Not found products"})]})},fe=({workout:i,points:t})=>{let{_id:s,burnedCalories:a,time:o,exercise_id:{bodyPart:x,equipment:n,name:l,target:c}}=i;const u=C(),f=j=>{u(Z(j))};return e.jsxs(A,{children:[e.jsxs(m,{children:[e.jsx(g,{children:"Body Part"}),e.jsx(w,{width:t<1440&&t>=768?"90px":t>=1440?"115px":"100%",children:x})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Equipment"}),e.jsx(w,{width:t<1440&&t>=768?"132px":t>=1440?"157px":"100%",children:n})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Name"}),e.jsx(w,{width:t<1440&&t>=768?"128px":t>=1440?"131px":"100%",children:l})]}),e.jsxs(F,{children:[e.jsxs(m,{children:[e.jsx(g,{children:"Target"}),e.jsx(w,{$maxwidth:"81px",width:t<1440&&t>=768?"84px":t>=1440?"106px":"100%",children:c})]}),e.jsxs(m,{children:[e.jsx(g,{size:"80px",children:"Burned Calories"}),e.jsx(w,{$maxwidth:"80px",width:t<1440&&t>=768?"78px":t>=1440?"91px":"100%",children:a})]}),e.jsxs(m,{children:[e.jsx(g,{children:"Time"}),e.jsx(w,{$maxwidth:"76px",width:t<1440&&t>=768?"72px":t>=1440?"82px":"100%",children:o})]}),e.jsx(Y,{type:"button",onClick:()=>f(s),children:e.jsx(G,{children:e.jsx("use",{href:`${d}#icon-trash`})})})]})]},s)},je=()=>{const i=D(M),[t,s]=p.useState(window.innerWidth),a=()=>s(window.innerWidth);return p.useEffect(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),e.jsxs(R,{height:"1066px",children:[e.jsxs(P,{children:[e.jsx(L,{children:"Exercises"}),e.jsx(I,{to:"/exercises",children:e.jsxs(B,{children:["Add exercise",e.jsx(N,{children:e.jsx("use",{href:`${d}#icon-arrow`})})]})})]}),i.length!==0?e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[e.jsx(h,{width:t<1440?"90px":"115px",children:"Body Part"}),e.jsx(h,{width:t<1440?"132px":"157px",children:"Equipment"}),e.jsx(h,{width:t<1440?"128px":"131px",children:"Name"}),e.jsx(h,{width:t<1440?"84px":"106px",children:"Target"}),e.jsx(h,{width:t<1440?"78px":"91px",children:"Burned Calories"}),e.jsx(h,{width:t<1440?"72px":"82px",children:"Time"})]}),e.jsxs(q,{children:[" ",i.map(o=>e.jsx(fe,{workout:o,points:t},o._id))," "]})]}):e.jsx(O,{children:"Not found exercises"})]})},ye=r.section`
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
`,be=r.ul`
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
`,ke=r.p`
    font-size: 12px;
    font-weight: 400;
`,ve=r.div`
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
`,_e=r.svg`
  fill: var(--color-main-two);
  stroke: var(--color-text);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--color-main-two);
`,De=r.div`
  display: block;
  width: 24px;
  height: 24px;
`,E=()=>{const{targetBmr:i,targetTime:t}=D(J),s=D(S),a=D(M),o=Math.round(i),x=Math.round(s.reduce((v,_)=>v+_.calories,0)),n=Math.round(a.reduce((v,_)=>v+_.burnedCalories,0)),l=a.reduce((v,_)=>v+_.time,0),c=o-x+n,u=t-l;let f="rgba(239, 237, 232, 0.20)",j="rgba(239, 237, 232, 0.20)";return c<0&&(f="var(--color-wrong-two)",j="var(--color-approved-one)"),e.jsxs(ye,{children:[e.jsxs(be,{children:[e.jsxs(y,{color:"var(--color-main-one)",children:[e.jsxs(b,{color:"rgba(239, 237, 232, 0.80)",children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-food`})}),"Daily calorie intake"]}),o!==0?o:e.jsx(ke,{children:"Please enter your details in the profile"})]}),e.jsxs(y,{color:"var(--color-main-one)",children:[e.jsxs(b,{color:"rgba(239, 237, 232, 0.80)",children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-dumbbell`})}),"Daily norm of sports"]}),t," min"]}),e.jsxs(y,{children:[e.jsxs(b,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-apple`})}),"Calories consumed"]}),x]}),e.jsxs(y,{children:[e.jsxs(b,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-calories`})}),"Calories burned"]}),n]}),e.jsxs(y,{$border:f,children:[e.jsxs(b,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-bubble`})}),"The rest of the calories"]}),c]}),e.jsxs(y,{$border:j,children:[e.jsxs(b,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-run`})}),"The rest of sports"]}),c<0?`+ ${u}`:u," min"]})]}),e.jsxs(ve,{children:[e.jsx(De,{children:e.jsx(_e,{children:e.jsx("use",{href:`${d}#icon-exclamation`})})}),"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."]})]})},ze=()=>{const i=C(),[t,s]=p.useState(window.innerWidth),a=()=>s(window.innerWidth);p.useEffect(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]);const[o,x]=p.useState($(new Date,"yyyy-MM-dd")),n=l=>{const c=l.toISOString();x(c)};return p.useEffect(()=>{i(K(o))},[o]),p.useEffect(()=>{i(Q(o))},[o]),p.useEffect(()=>{i(U())},[]),e.jsxs(ee,{children:[e.jsxs(xe,{children:[e.jsx(te,{children:"Diary"}),e.jsx(pe,{onDateChange:n})]}),t>=768||e.jsx(E,{}),e.jsxs(me,{children:[e.jsxs(he,{children:[e.jsx(ue,{}),e.jsx(je,{})]}),t<768||e.jsx(E,{})]})]})};export{ze as default};
