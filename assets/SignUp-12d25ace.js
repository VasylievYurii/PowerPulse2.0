import{r,c as i,u as S,j as e,a2 as y,a3 as g,a as f,L as v}from"./index-86c0bd04.js";import{S as b,a as w,b as T,W as k}from"./WelcomeStats-0beb8215.js";import{c as I,a as n,e as E,f as L}from"./index.esm-5a3a955a.js";import{W,I as l,a as c,S as d,E as m,v as $,L as N,b as q,c as F,B as P,T as C,P as U,d as B,N as A}from"./SignUp.styled-196e9d03.js";const D=I().shape({name:n().min(2,"Too Short! Must be minimum 6 symbols").max(50,"Too Long! 50 symbols - is maximum.").required("Name is required"),email:n().email("Invalid email. Here is an example: example@mail.com").required("Email is required"),password:n().min(6,"Too Short! Must be minimum 6 symbols").max(50,"Too Long! 50 symbols - is maximum.").required("Password is required")});function H(a){let t;return(a==="admin"||a==="god")&&(t="Nice try!"),t}const M=a=>{g.info(a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},O={name:"",email:"",password:""},R=()=>{const[a,t]=r.useState(`${i}#icon-eye`),[p,h]=r.useState("password");r.useState("red");const x=S(),u=(s,o)=>{x(y(s)),o.resetForm(),M("You have been sent a verification email. Follow the instructions in the email.")},j=()=>{p==="password"?(h("text"),t(`${i}#icon-eye-off`)):(h("password"),t(`${i}#icon-eye`))};return e.jsx(E,{initialValues:O,validationSchema:D,onSubmit:u,children:({errors:s,touched:o})=>e.jsxs(L,{autoComplete:"off",children:[e.jsxs(W,{children:[e.jsxs("div",{children:[e.jsx(l,{type:"text",name:"name",placeholder:"Name",validate:H}),s.name&&o.name?e.jsxs(c,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-checkbox`})}),e.jsx(m,{children:s.name})]}):null]}),e.jsxs("div",{children:[e.jsx(l,{type:"text",name:"email",validate:$,placeholder:"Email"}),s.email&&o.email?e.jsxs(c,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-checkbox`})}),e.jsx(m,{children:s.email})]}):null]}),e.jsxs("div",{children:[e.jsxs(N,{children:[e.jsx(l,{type:p,name:"password",placeholder:"Password"}),e.jsx(q,{children:e.jsx(F,{onClick:j,children:e.jsx("use",{href:a})})})]}),s.password&&o.password?e.jsxs(c,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-checkbox`})}),e.jsx(m,{children:s.password})]}):null]})]}),e.jsx(P,{type:"submit",children:"Sign Up"})]})})},G=()=>e.jsxs(b,{children:[e.jsxs(w,{children:[e.jsx(f,{to:"/welcome",children:e.jsx(v,{})}),e.jsxs(T,{children:[e.jsx(C,{children:"Sign Up"}),e.jsx(U,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(R,{}),e.jsxs(B,{children:["Already have an account?"," ",e.jsx(A,{to:"/signin",children:"Sign In"})]})]})]}),e.jsx(k,{})]});export{G as default};