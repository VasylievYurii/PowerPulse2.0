import{r as i,c as a,u as g,j as e,a3 as f,a as v,L as I}from"./index-602b9983.js";import{S as w,a as b,b as T,W}from"./WelcomeStats-55b94951.js";import{c as $,a as n,e as E,f as k}from"./index.esm-fccd7e96.js";import{W as L,L as c,I as d,v as C,a as p,S as m,E as x,b as F,c as P,B as q,T as R,P as B,d as D,N}from"./SignUp.styled-7456a020.js";const U=$().shape({email:n().email("Invalid email").required("Required!"),password:n().min(6,"Too Short!").required("Required!")}),V={email:"",password:""},A=()=>{const[h,r]=i.useState(`${a}#icon-eye`),[o,l]=i.useState("password"),[S,_]=i.useState(""),j=g(),u=(s,t)=>{j(f(s)),t.resetForm()},y=()=>{o==="password"?(l("text"),r(`${a}#icon-eye-off`)):(l("password"),r(`${a}#icon-eye`))};return e.jsx(E,{initialValues:V,validationSchema:U,onSubmit:u,children:({errors:s,touched:t})=>e.jsxs(k,{autoComplete:"off",children:[e.jsxs(L,{children:[e.jsxs("div",{children:[e.jsx(c,{children:e.jsx(d,{type:"text",name:"email",validate:C,placeholder:"Email",$border_color:S})}),s.email&&t.email?e.jsxs(p,{children:[e.jsx(m,{children:e.jsx("use",{href:`${a}#icon-checkbox`})}),e.jsx(x,{children:s.email})]}):null]}),e.jsxs("div",{children:[e.jsxs(c,{children:[e.jsx(d,{type:o,name:"password",placeholder:"Password"}),e.jsx(F,{children:e.jsx(P,{onClick:y,children:e.jsx("use",{href:h})})})]}),s.password&&t.password?e.jsxs(p,{children:[e.jsx(m,{children:e.jsx("use",{href:`${a}#icon-checkbox`})}),e.jsx(x,{children:s.password})]}):null]})]}),e.jsx(q,{type:"submit",children:"Sign In"})]})})},K=()=>e.jsxs(w,{children:[e.jsxs(b,{children:[e.jsx(v,{to:"/welcome",children:e.jsx(I,{})}),e.jsxs(T,{children:[e.jsx(R,{children:"Sign In"}),e.jsx(B,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(A,{}),e.jsxs(D,{$margin:!0,children:["Don't have an account?"," ",e.jsx(N,{to:"/signup",children:" Sign Up"})]})]})]}),e.jsx(W,{})]});export{K as default};
