import{r as p,R as e,s as t,N as x}from"./index-7a93abdc.js";import{F as c}from"./index.esm-b5e71c05.js";function a(o=e){return function(){return p.useContext(o)}}const d=a();function s(o=e){const n=o===e?d:a(o);return function(){const{store:i}=n();return i}}const l=s();function m(o=e){const n=o===e?l:s(o);return function(){return n().dispatch}}const h=m(),f=t(c)`
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
/* margin-bottom: 18px; */
color: var(--color-text);
background-color: transparent;
transition: border 0.3s var(--timing-function);

&:hover {
    border: 1px solid var(--color-main-one)
}

@media screen and (min-width: 768px){
    font-size: 16px;
    line-height: 1.5;
    max-width: 364px;
    height: 52px;
}
`,b=t.div`
color: var(--color-wrong-one);
margin-top: 4px;
margin-left: 4px;
line-height: 1.5;
letter-spacing: 0.12px;
`,v=t.div`
display: flex;
flex-direction: column;
gap: 18px;

@media screen and (min-width: 768px){
    gap: 20px;
}
`,w=t.button`
  display: block;
  padding: 12px 40px;
  margin-top: 28px;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
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
`,S=t.h1`
font-size: 24px;
line-height: 1.16;
color: var(--color-text);
margin-bottom: 14px;

@media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 16px;
}
`,y=t.p`
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
`,k=t(x)`
line-height: 1.5;
color:  var(--color-text);
text-decoration: underline;
`,z=t.p`
line-height: 1.5;
color: rgba(239, 237, 232, 0.60);
margin-top: 12px;
margin-bottom: 0;

@media screen and (min-width: 768px){
    margin-left: 10px;
}
`;export{w as B,b as E,f as I,k as N,y as P,S as T,v as W,z as a,h as u};
