import{r as o,a as t,u as y,j as e,ak as f,al as w,am as v,b,L as k,aj as h}from"./index-63ef9b5a.js";import{S as C,a as I,b as B,W as E}from"./WelcomeStats-98a7389e.js";import{c as F,a as c,e as $,f as T}from"./index.esm-6d7ce8a1.js";import{W,L as d,I as p,v as L,a as m,S as x,E as u,b as P,c as D,B as R,T as q,P as O,d as U,N}from"./SignUp.styled-14d19ba1.js";const H=F().shape({email:c().email("Invalid email").required("Required!"),password:c().min(6,"Too Short!").required("Required!")}),A={email:"",password:""},Q=()=>{const[i,l]=o.useState(`${t}#icon-eye-off`),[n,r]=o.useState("password");o.useState("");const S=y(),j=(s,a)=>{S(f(s)),a.resetForm()},g=()=>{n==="password"?(r("text"),l(`${t}#icon-eye`)):(r("password"),l(`${t}#icon-eye-off`))};return e.jsx($,{initialValues:A,validationSchema:H,onSubmit:j,children:({errors:s,touched:a})=>e.jsxs(T,{autoComplete:"off",children:[e.jsxs(W,{children:[e.jsxs("div",{children:[e.jsx(d,{children:e.jsx(p,{border:s.email&&a.email&&"1px solid #D80027"||!s.email&&a.email&&"1px solid #3CBF61",type:"text",name:"email",validate:L,placeholder:"Email"})}),s.email&&a.email||!s.email&&a.email?e.jsxs(m,{children:[e.jsx(x,{fill:!s.email&&a.email?"#3CBF61":null,children:e.jsx("use",{href:`${t}#icon-checkbox`})}),e.jsx(u,{color:!s.email&&a.email?"#3CBF61":null,children:s.email?s.email:"Success email"})]}):null]}),e.jsxs("div",{children:[e.jsxs(d,{children:[e.jsx(p,{border:s.password&&a.password&&"1px solid #D80027"||!s.password&&a.password&&"1px solid #3CBF61",type:n,name:"password",placeholder:"Password"}),e.jsx(P,{children:e.jsx(D,{onClick:g,children:e.jsx("use",{href:i})})})]}),s.password&&a.password||!s.password&&a.password?e.jsxs(m,{children:[e.jsx(x,{fill:!s.password&&a.password?"#3CBF61":null,children:e.jsx("use",{href:`${t}#icon-checkbox`})}),e.jsx(u,{color:!s.password&&a.password?"#3CBF61":null,children:s.password?s.password:"Success password"})]}):null]})]}),e.jsx(R,{type:"submit",children:"Sign In"})]})})},V=i=>{h.error(i,{position:"top-center",autoClose:7e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},z=i=>{h.success(i,{position:"top-center",autoClose:7e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},G=w.create({baseURL:"https://powerpulse-t5-backend.onrender.com/api/"}),J=async i=>{try{const{data:l}=await G.get(`auth/verify/${i}`);z(`${l.message}! Use your credentials to login`)}catch(l){V(`Error when verifyin email: ${l.response.data}`)}},Z=()=>{const{verificationToken:i}=v();return i&&J(i),e.jsxs(C,{children:[e.jsxs(I,{children:[e.jsx(b,{to:"/welcome",children:e.jsx(k,{})}),e.jsxs(B,{children:[e.jsx(q,{children:"Sign In"}),e.jsx(O,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(Q,{}),e.jsxs(U,{$margin:!0,children:["Don't have an account?"," ",e.jsx(N,{to:"/signup",children:" Sign Up"})]})]})]}),e.jsx(E,{})]})};export{Z as default};
