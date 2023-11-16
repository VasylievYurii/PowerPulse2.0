import{s as o,Q as i}from"./index-561527fa.js";import{F as t}from"./index.esm-e6df24c0.js";const a=o(t)`
font-size: 14px;
line-height: 18px;
max-width: 335px;
width: 100%;
height: 46px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.30);
padding-top: 14px;
padding-bottom: 14px;
padding-left: 14px;
align-items: center;
color: var(--color-text);
background-color: transparent;
transition: border 0.3s var(--timing-function);
/* border-color: ${r=>r.$border_color}; */
&:invalid {
    border: 2px solid var(--color-wrong-one);
}
&:required {
    border: 1px solid var(--color-wrong-one);
}
/* &:valid{
    border: 1px solid var(--color-approved-one);
} */
&:hover, &:focus {
    border: 1px solid var(--color-main-one)
}

@media screen and (min-width: 768px){
    font-size: 16px;
    line-height: 1.5;
    max-width: 364px;
    height: 52px;
}
`,p=o.div`
color: var(--color-wrong-one);
margin-top: 4px;
/* margin-left: 4px; */
line-height: 1.5;
letter-spacing: 0.12px;
`,d=o.div`
display: flex;
flex-direction: column;
gap: 18px;

@media screen and (min-width: 768px){
    gap: 20px;
}
`,l=o.svg`
width: 20px;
height: 20px;
stroke: var(--color-text);
 
`,x=o.svg`
width: 16px;
height: 16px;
margin-top: 4px;
fill: var(--color-wrong-one);
`,s=o.div`
display: flex;
gap: 4px;
`,c=o.label`
position: relative;
`,g=o.div`
position: absolute;
 display: flex; 
 top: calc(50% - 20px / 2);
align-items: center;
right: 14px;
`,m=o.button`
  display: block;
  padding: 12px 40px;
  margin-top: 28px;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
  background-color: var(--color-main-one);
  border-radius: 12px;
  border: 1px solid var(--color-main-one);
  cursor: pointer;
  transition: border 0.3s var(--timing-function);

  &:hover, &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }

  @media screen and (min-width: 768px){
    font-size: 20px;
    line-height: 1.2;
    padding: 16px 60px;
    margin-top: 64px;
  }
`,h=o.h1`
font-size: 24px;
line-height: 1.16;
color: var(--color-text);
margin-bottom: 14px;

@media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 16px;
}
`,v=o.p`
font-size: 14px;
line-height: 1.28;
color: rgba(239, 237, 232, 0.30);
margin-bottom: 28px;

@media screen and (min-width: 768px){
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
    max-width: 496px;
}
`,b=o(i)`
line-height: 1.5;
color:  var(--color-text);
text-decoration: underline;
`,f=o.p`
line-height: 1.5;
color: rgba(239, 237, 232, 0.60);
margin-top: 12px;
margin-bottom: ${r=>r.$margin?"121px":"35px"};


@media screen and (min-width: 768px){
    margin-left: 10px;
    margin-bottom: ${r=>r.$margin?"135px":"39px"};
}
`;export{m as B,p as E,a as I,c as L,b as N,v as P,x as S,h as T,d as W,s as a,g as b,l as c,f as d};
