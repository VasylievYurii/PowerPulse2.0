import{r as o,c as i,u as S,j as e,Y as y,Z as g,a as f,L as v,$ as b}from"./index-ef62d420.js";import{S as w,a as T,b as k,W as I}from"./WelcomeStats-a499ccca.js";import{c as E,a as n,e as $,f as L}from"./index.esm-d9b7eb9e.js";import{W,I as l,a as c,S as d,E as m,v as N,L as q,b as F,c as P,B as C,T as U,P as B,d as A,N as D}from"./SignUp.styled-b4ca4774.js";const H=E().shape({name:n().min(2,"Too Short! Must be minimum 6 symbols").max(50,"Too Long! 50 symbols - is maximum.").required("Name is required"),email:n().email("Invalid email. Here is an example: example@mail.com").required("Email is required"),password:n().min(6,"Too Short! Must be minimum 6 symbols").required("Password is required")});function M(a){let t;return(a==="admin"||a==="god")&&(t="Nice try!"),t}const O=a=>{g.info(a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},R={name:"",email:"",password:""},Y=()=>{const[a,t]=o.useState(`${i}#icon-eye`),[p,h]=o.useState("password");o.useState("red");const x=S(),u=(s,r)=>{x(y(s)),r.resetForm(),O("You have been sent a verification email. Follow the instructions in the email.")},j=()=>{p==="password"?(h("text"),t(`${i}#icon-eye-off`)):(h("password"),t(`${i}#icon-eye`))};return e.jsx($,{initialValues:R,validationSchema:H,onSubmit:u,children:({errors:s,touched:r})=>e.jsxs(L,{autoComplete:"off",children:[e.jsxs(W,{children:[e.jsxs("div",{children:[e.jsx(l,{type:"text",name:"name",placeholder:"Name",validate:M}),s.name&&r.name?e.jsxs(c,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-checkbox`})}),e.jsx(m,{children:s.name})]}):null]}),e.jsxs("div",{children:[e.jsx(l,{type:"text",name:"email",validate:N,placeholder:"Email"}),s.email&&r.email?e.jsxs(c,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-checkbox`})}),e.jsx(m,{children:s.email})]}):null]}),e.jsxs("div",{children:[e.jsxs(q,{children:[e.jsx(l,{type:p,name:"password",placeholder:"Password"}),e.jsx(F,{children:e.jsx(P,{onClick:j,children:e.jsx("use",{href:a})})})]}),s.password&&r.password?e.jsxs(c,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-checkbox`})}),e.jsx(m,{children:s.password})]}):null]})]}),e.jsx(C,{type:"submit",children:"Sign Up"})]})})},G=()=>e.jsxs(w,{children:[e.jsxs(T,{children:[e.jsx(f,{to:"/welcome",children:e.jsx(v,{})}),e.jsxs(k,{children:[e.jsx(U,{children:"Sign Up"}),e.jsx(B,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(Y,{}),e.jsx(b,{}),e.jsxs(A,{children:["Already have an account?"," ",e.jsx(D,{to:"/signin",children:"Sign In"})]})]})]}),e.jsx(I,{})]});export{G as default};