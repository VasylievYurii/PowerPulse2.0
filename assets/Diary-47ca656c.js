import{f as J,s as r,r as p,j as e,a as d,u as C,U as K,d as u,V as R,b as P,W as Q,X as B,Y as ee,Z as te,$ as ie,a0 as re,a1 as $,a2 as ne,a3 as oe,a4 as ae,S as se}from"./index-6b3631c6.js";import{T as de}from"./TitlePage-967e625f.js";import{b as ce,c as le,t as pe}from"./react-datepicker-2fe29744.js";import{f as W}from"./createClass-229a2629.js";const xe=J`

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

`,he=r.button`
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
`,me=r.div`
  display: flex;
  justify-content: end !important;
  align-items: center;
`,E=r.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s var(--timing-function);
  &:hover {
    stroke: var(--color-main-two);
  }
`,ge=r.svg`
  width: 24px;
  height: 24px;
  stroke: var(--color-main-two);
  fill: transparent;
`,we=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,S=r.svg`
  width: 8px;
  height: 8px;
  stroke: var(--color-text);
  fill: transparent;
  cursor: pointer;
  transition: stroke 0.3s var(--timing-function);
  &:hover {
    stroke: white;
  }
`,ue=r.p`
  color: var(--color-text);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`,L=r.button`
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
`,fe=({onDateChange:i})=>{const[t,a]=p.useState(new Date),s=p.forwardRef(({value:n,onClick:c},l)=>e.jsxs(me,{children:[e.jsxs(he,{onClick:c,ref:l,children:[W(t,"dd/MM/yyyy"),e.jsx(ge,{onClick:c,ref:l,children:e.jsx("use",{href:`${d}#icon-calendar`})})]}),e.jsx(E,{onClick:()=>o(ce(t,1)),children:e.jsx("use",{href:`${d}#icon-left`})}),e.jsx(E,{onClick:()=>o(le(t,1)),children:e.jsx("use",{href:`${d}#icon-right`})})]})),o=n=>{a(n),i&&i(n)},w=({date:n,decreaseMonth:c,increaseMonth:l})=>e.jsxs(we,{children:[e.jsx(L,{onClick:c,children:e.jsx(S,{children:e.jsx("use",{href:`${d}#icon-left`})})}),e.jsx(ue,{children:W(n,"MMMM yyyy")}),e.jsx(L,{onClick:l,children:e.jsx(S,{children:e.jsx("use",{href:`${d}#icon-right`})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(pe,{minDate:new Date("10/10/2023"),maxDate:new Date,selected:t,onChange:n=>{a(n),i(n)},customInput:e.jsx(s,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:n=>n.substr(0,2),renderCustomHeader:n=>e.jsx(w,{...n})}),e.jsx(xe,{})]})},je=r.div`
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
`,ye=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`,N=r.section`
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
`,H=r.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

    @media screen and (min-width: 1440px) {
    margin-right: 8px;
  }
`,q=r.h3`
  color: rgba(239, 237, 232, 0.5);
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
`,A=r.div`
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
`,F=r.svg`
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
`,V=r.ul`
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
`,x=r.li`
  display: inline-block;
  width: ${i=>i.width||"100%"};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Y=r.ul`
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
`,G=r.li`
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
`,g=r.div`
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
`,O=r.div`
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
`,ke=r.div`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${i=>i.color==="false"?"var(--color-approved-two)":"var(--color-wrong-two)"};
`,ve=({meal:i,points:t})=>{let{_id:a,product:{title:s,category:{name:o},groupBloodNotAllowed:w},profile:{blood:n},calories:c,weight:l}=i;const j=C(),v=f=>{j(K(f))};return e.jsxs(G,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Title"}),e.jsx(g,{width:t<1440&&t>=768?"204px":t>=1440?"212px":"100%",children:s})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Category"}),e.jsx(g,{width:t<1440&&t>=768?"128px":t>=1440?"166px":"100%",children:o})]}),e.jsxs(O,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Calories"}),e.jsx(g,{$maxwidth:"81px",width:t<1440&&t>=768?"90px":t>=1440?"105px":"100%",children:c})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Weight"}),e.jsx(g,{$maxwidth:"80px",width:t<1440&&t>=768?"90px":t>=1440?"105px":"100%",children:l})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Recommend"}),e.jsxs(g,{$maxwidth:"76px",display:"flex",width:t<1440&&t>=768?"80px":t>=1440?"110px":"100%",children:[e.jsx(ke,{color:`${w[n]}`}),w[n]?"No":"Yes"]})]}),e.jsx(U,{type:"button",onClick:()=>v(a),children:e.jsx(X,{children:e.jsx("use",{href:`${d}#icon-trash`})})})]})]},a)},_e=()=>{const i=u(R),[t,a]=p.useState(window.innerWidth),s=()=>a(window.innerWidth);return p.useEffect(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),e.jsxs(N,{children:[e.jsxs(H,{children:[e.jsx(q,{children:"Products"}),e.jsx(P,{to:"/products",children:e.jsxs(A,{children:["Add product",e.jsx(F,{children:e.jsx("use",{href:`${d}#icon-arrow`})})]})})]}),i.length!==0?e.jsxs(e.Fragment,{children:[e.jsxs(V,{children:[e.jsx(x,{width:t<1440?"206px":"212px",children:"Title"}),e.jsx(x,{width:t<1440?"130px":"166px",children:"Category"}),e.jsx(x,{width:t<1440?"92px":"105px",children:"Calories"}),e.jsx(x,{width:t<1440?"92px":"105px",children:"Weight"}),e.jsx(x,{width:t<1440?"82px":"110px",children:"Recommend"})]}),e.jsxs(Y,{children:[" ",i.map(o=>e.jsx(ve,{meal:o,points:t},o._id))," "]})]}):e.jsx(Z,{children:"Not found products"})]})},De=({workout:i,points:t})=>{let{_id:a,burnedCalories:s,time:o,exercise_id:{bodyPart:w,equipment:n,name:c,target:l}}=i;const j=C(),v=f=>{j(Q(f))};return e.jsxs(G,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Body Part"}),e.jsx(g,{width:t<1440&&t>=768?"90px":t>=1440?"115px":"100%",children:w})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Equipment"}),e.jsx(g,{width:t<1440&&t>=768?"132px":t>=1440?"157px":"100%",children:n})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Name"}),e.jsx(g,{width:t<1440&&t>=768?"128px":t>=1440?"131px":"100%",children:c})]}),e.jsxs(O,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Target"}),e.jsx(g,{$maxwidth:"81px",width:t<1440&&t>=768?"84px":t>=1440?"106px":"100%",children:l})]}),e.jsxs(h,{children:[e.jsx(m,{size:"80px",children:"Burned Calories"}),e.jsx(g,{$maxwidth:"80px",width:t<1440&&t>=768?"78px":t>=1440?"91px":"100%",children:s})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Time"}),e.jsx(g,{$maxwidth:"76px",width:t<1440&&t>=768?"72px":t>=1440?"82px":"100%",children:o})]}),e.jsx(U,{type:"button",onClick:()=>v(a),children:e.jsx(X,{children:e.jsx("use",{href:`${d}#icon-trash`})})})]})]},a)},$e=()=>{const i=u(B),[t,a]=p.useState(window.innerWidth),s=()=>a(window.innerWidth);return p.useEffect(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),e.jsxs(N,{height:"1066px",children:[e.jsxs(H,{children:[e.jsx(q,{children:"Exercises"}),e.jsx(P,{to:"/exercises",children:e.jsxs(A,{children:["Add exercise",e.jsx(F,{children:e.jsx("use",{href:`${d}#icon-arrow`})})]})})]}),i.length!==0?e.jsxs(e.Fragment,{children:[e.jsxs(V,{children:[e.jsx(x,{width:t<1440?"90px":"115px",children:"Body Part"}),e.jsx(x,{width:t<1440?"132px":"157px",children:"Equipment"}),e.jsx(x,{width:t<1440?"128px":"131px",children:"Name"}),e.jsx(x,{width:t<1440?"84px":"106px",children:"Target"}),e.jsx(x,{width:t<1440?"78px":"91px",children:"Burned Calories"}),e.jsx(x,{width:t<1440?"72px":"82px",children:"Time"})]}),e.jsxs(Y,{children:[" ",i.map(o=>e.jsx(De,{workout:o,points:t},o._id))," "]})]}):e.jsx(Z,{children:"Not found exercises"})]})},We=r.section`
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
`,b=r.li`
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
`,y=r.h3`
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
`,Te=r.p`
    font-size: 12px;
    font-weight: 400;
`,ze=r.div`
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
`,Ie=r.svg`
  fill: var(--color-main-two);
  stroke: var(--color-text);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--color-main-two);
`,Ee=r.div`
  display: block;
  width: 24px;
  height: 24px;
`,M=()=>{const i=u(ee),t=u(te),a=u(ie),{targetBmr:s,targetTime:o}=u(re),w=u(R),n=u(B),c=Math.round(s),l=Math.round(w.reduce((_,D)=>_+D.calories,0)),j=Math.round(n.reduce((_,D)=>_+D.burnedCalories,0)),v=n.reduce((_,D)=>_+D.time,0),f=c-l+j,T=o-v;let z="rgba(239, 237, 232, 0.20)",I="rgba(239, 237, 232, 0.20)";return f<0&&(z="var(--color-wrong-two)",I="var(--color-approved-one)"),e.jsxs(We,{children:[e.jsxs(Ce,{children:[e.jsxs(b,{color:"var(--color-main-one)",children:[e.jsxs(y,{color:"rgba(239, 237, 232, 0.80)",children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-food`})}),"Daily calorie intake"]}),i?e.jsx($,{color:"var(--color-text)"}):c!==0?c:e.jsx(Te,{children:"Please enter your details in the profile"})]}),e.jsxs(b,{color:"var(--color-main-one)",children:[e.jsxs(y,{color:"rgba(239, 237, 232, 0.80)",children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-dumbbell`})}),"Daily norm of sports"]}),o," min"]}),e.jsxs(b,{children:[e.jsxs(y,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-apple`})}),"Calories consumed"]}),t?e.jsx($,{}):l]}),e.jsxs(b,{children:[e.jsxs(y,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-calories`})}),"Calories burned"]}),a?e.jsx($,{}):j]}),e.jsxs(b,{$border:z,children:[e.jsxs(y,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-bubble`})}),"The rest of the calories"]}),t||a?e.jsx($,{}):f]}),e.jsxs(b,{$border:I,children:[e.jsxs(y,{children:[e.jsx(k,{fill:"var(--color-main-two)",stroke:"var(--color-main-two)",children:e.jsx("use",{href:`${d}#icon-run`})}),"The rest of sports"]}),a?e.jsx($,{}):f<0?`+ ${T}`:T," ","min"]})]}),e.jsxs(ze,{children:[e.jsx(Ee,{children:e.jsx(Ie,{children:e.jsx("use",{href:`${d}#icon-exclamation`})})}),"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."]})]})},Pe=()=>{const i=C(),[t,a]=p.useState(window.innerWidth),s=()=>a(window.innerWidth);p.useEffect(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]);const[o,w]=p.useState(W(new Date,"yyyy-MM-dd")),n=c=>{const l=c.toISOString();w(l)};return p.useEffect(()=>{i(ne(o))},[o]),p.useEffect(()=>{i(oe(o))},[o]),p.useEffect(()=>{i(ae())},[]),e.jsxs(se,{children:[e.jsxs(je,{children:[e.jsx(de,{children:"Diary"}),e.jsx(fe,{onDateChange:n})]}),t>=768||e.jsx(M,{}),e.jsxs(ye,{children:[e.jsxs(be,{children:[e.jsx(_e,{}),e.jsx($e,{})]}),t<768||e.jsx(M,{})]})]})};export{Pe as default};
