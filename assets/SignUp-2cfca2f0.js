import{r as o,c as t,u as S,j as e,D as f,Q as y,a as g,L as v,E as b}from"./index-afc7be27.js";import{S as w}from"./SectionTemplateNoAuth-de69ebc4.js";import{c as T,a as n,e as I,f as k}from"./index.esm-3a357934.js";import{W as E,I as l,a as c,S as d,E as m,L as $,b as L,c as W,B as q,T as N,P as F,d as P,N as C}from"./SignUp.styled-bbacea8f.js";import{S as U,a as A,W as B}from"./WelcomeStats-059209d8.js";const D=s=>{y.info(s,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},R=T().shape({name:n().min(2,"Too Short! Must be minimum 6 symbols").max(50,"Too Long! 50 symbols - is maximum.").required("Name is required"),email:n().email("Invalid email. Here is an example: example@mail.com").required("Email is required"),password:n().min(6,"Too Short! Must be minimum 6 symbols").required("Password is required")});function z(s){let a;return s?/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(s)||(a="Invalid email address"):a="Required",a}function H(s){let a;return(s==="admin"||s==="god")&&(a="Nice try!"),a}const M={name:"",email:"",password:""},O=()=>{const[s,a]=o.useState(`${t}#icon-eye`),[p,h]=o.useState("password");o.useState("red");const x=S(),u=(i,r)=>{x(f(i)),r.resetForm(),D("You have been sent a varification email. Follow the istructions in the email.")},j=()=>{p==="password"?(h("text"),a(`${t}#icon-eye-off`)):(h("password"),a(`${t}#icon-eye`))};return e.jsx(I,{initialValues:M,validationSchema:R,onSubmit:u,children:({errors:i,touched:r})=>e.jsxs(k,{autoComplete:"off",children:[e.jsxs(E,{children:[e.jsxs("div",{children:[e.jsx(l,{type:"text",name:"name",placeholder:"Name",validate:H}),i.name&&r.name?e.jsxs(c,{children:[e.jsx(d,{children:e.jsx("use",{href:`${t}#icon-checkbox`})}),e.jsx(m,{children:i.name})]}):null]}),e.jsxs("div",{children:[e.jsx(l,{type:"text",name:"email",validate:z,placeholder:"Email"}),i.email&&r.email?e.jsxs(c,{children:[e.jsx(d,{children:e.jsx("use",{href:`${t}#icon-checkbox`})}),e.jsx(m,{children:i.email})]}):null]}),e.jsxs("div",{children:[e.jsxs($,{children:[e.jsx(l,{type:p,name:"password",placeholder:"Password"}),e.jsx(L,{children:e.jsx(W,{onClick:j,children:e.jsx("use",{href:s})})})]}),i.password&&r.password?e.jsxs(c,{children:[e.jsx(d,{children:e.jsx("use",{href:`${t}#icon-checkbox`})}),e.jsx(m,{children:i.password})]}):null]})]}),e.jsx(q,{type:"submit",children:"Sign Up"})]})})},G=()=>e.jsxs(w,{children:[e.jsxs(U,{children:[e.jsx(g,{to:"/welcome",children:e.jsx(v,{})}),e.jsxs(A,{children:[e.jsx(N,{children:"Sign Up"}),e.jsx(F,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(O,{}),e.jsx(b,{}),e.jsxs(P,{children:["Already have an account?"," ",e.jsx(C,{to:"/signin",children:"Sign In"})]})]})]}),e.jsx(B,{})]});export{G as default};
