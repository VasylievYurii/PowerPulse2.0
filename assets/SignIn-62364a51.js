import{j as e,l as o}from"./index-7a93abdc.js";import{S as d}from"./SectionTemplate-182b095e.js";import{c as m,a as r,e as c,f as p}from"./index.esm-b5e71c05.js";import{u,W as h,I as l,E as n,B as S,T as x,P as j,a as f,N as y}from"./SignUp.styled-5c14f072.js";import"./emotion-styled.browser.esm-2ee97d85.js";const g=m().shape({email:r().email("Invalid email").required("Required"),password:r().min(6,"Too Short!").required("Required")});function v(s){let i;return s?/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(s)||(i="Invalid email address"):i="Required",i}const w={email:"",password:""},I=()=>{const s=u(),i=(a,t)=>{s(o(a)),t.resetForm()};return e.jsx(c,{initialValues:w,validationSchema:g,onSubmit:i,children:({errors:a,touched:t})=>e.jsxs(p,{autoComplete:"off",children:[e.jsxs(h,{children:[e.jsxs("div",{children:[e.jsx(l,{type:"text",name:"email",validate:v,placeholder:"Email"}),a.email&&t.email?e.jsx(n,{children:a.email}):null]}),e.jsxs("div",{children:[e.jsx(l,{type:"text",name:"password",placeholder:"Password"}),a.password&&t.password?e.jsx(n,{children:a.password}):null]})]}),e.jsx(S,{type:"submit",children:"Sign In"})]})})},b=()=>e.jsxs(d,{children:[e.jsx(x,{children:"Sign In"}),e.jsx(j,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(I,{}),e.jsxs(f,{children:["Don’t have an account?"," ",e.jsx(y,{to:"/signup",children:" Sign Up"})]})]});export{b as default};
