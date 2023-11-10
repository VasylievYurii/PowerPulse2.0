import{s,j as e,l}from"./index-58fda8bc.js";import{S as d}from"./SectionTemplate-6a8bac47.js";import{c,a as t,e as m,f as p,F as n}from"./index.esm-f62b51ea.js";import{u as x}from"./useDispatch-3a575dc9.js";import"./emotion-styled.browser.esm-b1be2967.js";const u=s.button`
  display: block;
  padding: 12px 40px;
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

  &:hover {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }
`,h=c().shape({email:t().email("Invalid email").required("Required"),password:t().min(6,"Too Short!").required("Required")});function j(r){let o;return r?/^[\w-.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(r)||(o="Invalid email address"):o="Required",o}const v={email:"",password:""},f=()=>{const r=x(),o=(i,a)=>{r(l(i)),a.resetForm()};return e.jsx(m,{initialValues:v,validationSchema:h,onSubmit:o,children:({errors:i,touched:a})=>e.jsxs(p,{autoComplete:"off",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email "}),e.jsx(n,{type:"text",name:"email",validate:j}),i.email&&a.email?e.jsx("div",{children:i.email}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",children:"Password "}),e.jsx(n,{type:"text",name:"password"}),i.password&&a.password?e.jsx("div",{children:i.password}):null]}),e.jsx(u,{type:"submit",children:"Sign In"})]})})},y=()=>e.jsxs(d,{children:[e.jsx("h1",{children:"Sign In"}),e.jsx("div",{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(f,{}),e.jsx("p",{children:"Don’t have an account? Sign Up"})]});export{y as default};
