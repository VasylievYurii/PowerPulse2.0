import{r as o,e as r,a as g,j as e,l as f,d as I,L as w,k as b}from"./index-ff0c76f4.js";import{S as v}from"./SectionTemplateNoAuth-3b9b80ee.js";import{c as $,a as d,F as T,b as W}from"./index.esm-e0985133.js";import{W as k,L as c,I as m,a as p,S as x,E as h,b as E,c as L,B as F,T as q,P as C,d as P,N as R}from"./SignUp.styled-516dc253.js";import{S as B,a as A,W as D}from"./WelcomeStats-74c4b1b5.js";const N=$().shape({email:d().email("Invalid email").required("Required!"),password:d().min(6,"Too Short!").required("Required!")});function z(t){let s;return t?/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(t)||(s="Invalid email address"):s="Required",s}const U={email:"",password:""},Z=()=>{const[t,s]=o.useState(`${r}#icon-eye`),[n,l]=o.useState("password"),[S,_]=o.useState(""),j=g(),u=(a,i)=>{j(f(a)),i.resetForm()},y=()=>{n==="password"?(l("text"),s(`${r}#icon-eye-off`)):(l("password"),s(`${r}#icon-eye`))};return e.jsx(T,{initialValues:U,validationSchema:N,onSubmit:u,children:({errors:a,touched:i})=>e.jsxs(W,{autoComplete:"off",children:[e.jsxs(k,{children:[e.jsxs("div",{children:[e.jsx(c,{children:e.jsx(m,{type:"text",name:"email",validate:z,placeholder:"Email",$border_color:S})}),a.email&&i.email?e.jsxs(p,{children:[e.jsx(x,{children:e.jsx("use",{href:`${r}#icon-checkbox`})}),e.jsx(h,{children:a.email})]}):null]}),e.jsxs("div",{children:[e.jsxs(c,{children:[e.jsx(m,{type:n,name:"password",placeholder:"Password"}),e.jsx(E,{children:e.jsx(L,{onClick:y,children:e.jsx("use",{href:t})})})]}),a.password&&i.password?e.jsxs(p,{children:[e.jsx(x,{children:e.jsx("use",{href:`${r}#icon-checkbox`})}),e.jsx(h,{children:a.password})]}):null]})]}),e.jsx(F,{type:"submit",children:"Sign In"})]})})},M=()=>e.jsxs(v,{children:[e.jsxs(B,{children:[e.jsx(I,{to:"/welcome",children:e.jsx(w,{})}),e.jsxs(A,{children:[e.jsx(q,{children:"Sign In"}),e.jsx(C,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(Z,{}),e.jsxs(P,{$margin:!0,children:["Don't have an account?"," ",e.jsx(R,{to:"/signup",children:" Sign Up"})]}),e.jsx(b,{})]})]}),e.jsx(D,{})]});export{M as default};
