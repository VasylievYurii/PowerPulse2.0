import{n as l,c as s,s as y,j as p}from"./index-2f69e982.js";function u(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function j(t,e){if(t){if(typeof t=="string")return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function P(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},i(t,e)}function w(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},f(t)}function b(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){if(e&&(s(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}function d(t){var e=b();return function(){var n=f(t),o;if(e){var a=f(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return h(this,o)}}const O=y.h2`
color: var(--color-text);
font-size: 24px;
font-weight: 700;
line-height: 1.17;
`,m=({children:t})=>p.jsx(O,{children:t});export{m as T,j as _,u as a,w as b,d as c,v as d,P as e,_ as f};
