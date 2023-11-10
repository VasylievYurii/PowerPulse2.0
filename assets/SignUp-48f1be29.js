import{j as e,c as t}from"./index-58fda8bc.js";import{S as o}from"./SectionTemplate-6a8bac47.js";import{c as m,a as l,e as d,f as c,F as r}from"./index.esm-f62b51ea.js";import{u as p}from"./useDispatch-3a575dc9.js";import"./emotion-styled.browser.esm-b1be2967.js";const h=m().shape({name:l().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:l().email("Invalid email").required("Required"),password:l().min(6,"Too Short!").required("Required")});function u(n){let s;return n?/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(n)||(s="Invalid email address"):s="Required",s}const x={name:"",email:"",password:""},j=()=>{const n=p(),s=(i,a)=>{console.log("values",i),console.log("actions",a),n(t(i)),a.resetForm()};return e.jsx(d,{initialValues:x,validationSchema:h,onSubmit:s,children:({errors:i,touched:a})=>e.jsxs(c,{autoComplete:"off",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Name "}),e.jsx(r,{type:"text",name:"name"}),i.name&&a.name?e.jsx("div",{children:i.name}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email "}),e.jsx(r,{type:"text",name:"email",validate:u}),i.email&&a.email?e.jsx("div",{children:i.email}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",children:"Password "}),e.jsx(r,{type:"text",name:"password"}),i.password&&a.password?e.jsx("div",{children:i.password}):null]}),e.jsx("button",{type:"submit",children:"Sign Up"})]})})},F=()=>e.jsxs(o,{children:[e.jsx("h1",{children:"Sign Up"}),e.jsx("p",{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(j,{}),e.jsx("p",{children:"Already have an account? Sign In"})]});export{F as default};
