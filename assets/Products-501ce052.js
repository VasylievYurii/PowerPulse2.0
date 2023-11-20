import{o as _t,r as m,E as Wt,p as Gt,q as Yt,_ as C,t as qt,v as ue,w as S,x as Kt,y as _,c as z,z as st,A as lt,u as Me,B as Xt,C as Qt,j as h,d as re,D as Jt,F as Zt,G as en,H as tn,s as M,I as nn,J as rn,a as on,K as an,M as ze,N as un,O as sn,P as ln,Q as cn,R as dn,T as pn,U as fn,S as hn,V as mn}from"./index-a736caeb.js";import{_ as ct,a as vn,b as gn,c as bn,d as xn,e as En,f as Cn}from"./createClass-b78e781d.js";import{T as Sn}from"./TitlePage-f9a12e05.js";import{F as Fn,E as wn,c as yn,b as On,e as Dn,f as In}from"./index.esm-ac99d79b.js";function An(n,t){if(n==null)return{};var i={},r=Object.keys(n),e,a;for(a=0;a<r.length;a++)e=r[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}var E=function(t,i){var r=arguments;if(i==null||!_t.call(i,"css"))return m.createElement.apply(void 0,r);var e=r.length,a=new Array(e);a[0]=Wt,a[1]=Gt(t,i);for(var u=2;u<e;u++)a[u]=r[u];return m.createElement.apply(null,a)};function Ve(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return Yt(t)}var Mn=function(){var t=Ve.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Vn(n){if(Array.isArray(n))return n}function Pn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,e,a,u,l=[],o=!0,s=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;o=!1}else for(;!(o=(r=a.call(i)).done)&&(l.push(r.value),l.length!==t);o=!0);}catch(c){s=!0,e=c}finally{try{if(!o&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw e}}return l}}function Ln(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,t){return Vn(n)||Pn(n,t)||ct(n,t)||Ln()}function Q(n,t){if(n==null)return{};var i=An(n,t),r,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var Rn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function kn(n){var t=n.defaultInputValue,i=t===void 0?"":t,r=n.defaultMenuIsOpen,e=r===void 0?!1:r,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,o=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,v=n.onMenuOpen,p=n.value,g=Q(n,Rn),b=m.useState(l!==void 0?l:i),f=X(b,2),x=f[0],w=f[1],y=m.useState(o!==void 0?o:e),O=X(y,2),D=O[0],I=O[1],A=m.useState(p!==void 0?p:u),F=X(A,2),V=F[0],T=F[1],H=m.useCallback(function($,J){typeof s=="function"&&s($,J),T($)},[s]),B=m.useCallback(function($,J){var Z;typeof c=="function"&&(Z=c($,J)),w(Z!==void 0?Z:$)},[c]),G=m.useCallback(function(){typeof v=="function"&&v(),I(!0)},[v]),Y=m.useCallback(function(){typeof d=="function"&&d(),I(!1)},[d]),k=l!==void 0?l:x,L=o!==void 0?o:D,W=p!==void 0?p:V;return C(C({},g),{},{inputValue:k,menuIsOpen:L,onChange:H,onInputChange:B,onMenuClose:Y,onMenuOpen:G,value:W})}function Tn(n){if(Array.isArray(n))return vn(n)}function Bn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Hn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(n){return Tn(n)||Bn(n)||ct(n)||Hn()}function jn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const $n=Math.min,zn=Math.max,fe=Math.round,se=Math.floor,he=n=>({x:n,y:n});function Un(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function dt(n){return ft(n)?(n.nodeName||"").toLowerCase():"#document"}function N(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function pt(n){var t;return(t=(ft(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function ft(n){return n instanceof Node||n instanceof N(n).Node}function De(n){return n instanceof Element||n instanceof N(n).Element}function Le(n){return n instanceof HTMLElement||n instanceof N(n).HTMLElement}function Ue(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof N(n).ShadowRoot}function ht(n){const{overflow:t,overflowX:i,overflowY:r,display:e}=Re(n);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!["inline","contents"].includes(e)}function Nn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function _n(n){return["html","body","#document"].includes(dt(n))}function Re(n){return N(n).getComputedStyle(n)}function Wn(n){if(dt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ue(n)&&n.host||pt(n);return Ue(t)?t.host:t}function mt(n){const t=Wn(n);return _n(t)?n.ownerDocument?n.ownerDocument.body:n.body:Le(t)&&ht(t)?t:mt(t)}function me(n,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=mt(n),a=e===((r=n.ownerDocument)==null?void 0:r.body),u=N(e);return a?t.concat(u,u.visualViewport||[],ht(e)?e:[],u.frameElement&&i?me(u.frameElement):[]):t.concat(e,me(e,[],i))}function Gn(n){const t=Re(n);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const e=Le(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:r,l=fe(i)!==a||fe(r)!==u;return l&&(i=a,r=u),{width:i,height:r,$:l}}function ke(n){return De(n)?n:n.contextElement}function Ee(n){const t=ke(n);if(!Le(t))return he(1);const i=t.getBoundingClientRect(),{width:r,height:e,$:a}=Gn(t);let u=(a?fe(i.width):i.width)/r,l=(a?fe(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const Yn=he(0);function qn(n){const t=N(n);return!Nn()||!t.visualViewport?Yn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Kn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==N(n)?!1:t}function Ne(n,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=ke(n);let u=he(1);t&&(r?De(r)&&(u=Ee(r)):u=Ee(n));const l=Kn(a,i,r)?qn(a):he(0);let o=(e.left+l.x)/u.x,s=(e.top+l.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const v=N(a),p=r&&De(r)?N(r):r;let g=v.frameElement;for(;g&&r&&p!==v;){const b=Ee(g),f=g.getBoundingClientRect(),x=Re(g),w=f.left+(g.clientLeft+parseFloat(x.paddingLeft))*b.x,y=f.top+(g.clientTop+parseFloat(x.paddingTop))*b.y;o*=b.x,s*=b.y,c*=b.x,d*=b.y,o+=w,s+=y,g=N(g).frameElement}}return Un({width:c,height:d,x:o,y:s})}function Xn(n,t){let i=null,r;const e=pt(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function u(l,o){l===void 0&&(l=!1),o===void 0&&(o=1),a();const{left:s,top:c,width:d,height:v}=n.getBoundingClientRect();if(l||t(),!d||!v)return;const p=se(c),g=se(e.clientWidth-(s+d)),b=se(e.clientHeight-(c+v)),f=se(s),w={rootMargin:-p+"px "+-g+"px "+-b+"px "+-f+"px",threshold:zn(0,$n(1,o))||1};let y=!0;function O(D){const I=D[0].intersectionRatio;if(I!==o){if(!y)return u();I?u(!1,I):r=setTimeout(()=>{u(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(O,{...w,root:e.ownerDocument})}catch{i=new IntersectionObserver(O,w)}i.observe(n)}return u(!0),a}function Qn(n,t,i,r){r===void 0&&(r={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,s=ke(n),c=e||a?[...s?me(s):[],...me(t)]:[];c.forEach(x=>{e&&x.addEventListener("scroll",i,{passive:!0}),a&&x.addEventListener("resize",i)});const d=s&&l?Xn(s,i):null;let v=-1,p=null;u&&(p=new ResizeObserver(x=>{let[w]=x;w&&w.target===s&&p&&(p.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{p&&p.observe(t)})),i()}),s&&!o&&p.observe(s),p.observe(t));let g,b=o?Ne(n):null;o&&f();function f(){const x=Ne(n);b&&(x.x!==b.x||x.y!==b.y||x.width!==b.width||x.height!==b.height)&&i(),b=x,g=requestAnimationFrame(f)}return i(),()=>{c.forEach(x=>{e&&x.removeEventListener("scroll",i),a&&x.removeEventListener("resize",i)}),d&&d(),p&&p.disconnect(),p=null,o&&cancelAnimationFrame(g)}}var Ie=m.useLayoutEffect,Jn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function Zn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function ei(n,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),e=2;e<i;e++)r[e-2]=arguments[e];var a=[].concat(r);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(Zn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var _e=function(t){return li(t)?t.filter(Boolean):qt(t)==="object"&&t!==null?[t]:[]},vt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=Q(t,Jn);return C({},i)},P=function(t,i,r){var e=t.cx,a=t.getStyles,u=t.getClassNames,l=t.className;return{css:a(i,t),className:e(r??{},u(i,t),l)}};function xe(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function ti(n){return xe(n)?window.innerHeight:n.clientHeight}function gt(n){return xe(n)?window.pageYOffset:n.scrollTop}function ge(n,t){if(xe(n)){window.scrollTo(0,t);return}n.scrollTop=t}function ni(n){var t=getComputedStyle(n),i=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function ii(n,t,i,r){return i*((n=n/r-1)*n*n+1)+t}function le(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,e=gt(n),a=t-e,u=10,l=0;function o(){l+=u;var s=ii(l,e,a,i);ge(n,s),l<i?window.requestAnimationFrame(o):r(n)}o()}function We(n,t){var i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),e=t.offsetHeight/3;r.bottom+e>i.bottom?ge(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):r.top-e<i.top&&ge(n,Math.max(t.offsetTop-e,0))}function ri(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ge(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function oi(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var bt=!1,ai={get passive(){return bt=!0}},ce=typeof window<"u"?window:{};ce.addEventListener&&ce.removeEventListener&&(ce.addEventListener("p",ve,ai),ce.removeEventListener("p",ve,!1));var ui=bt;function si(n){return n!=null}function li(n){return Array.isArray(n)}function de(n,t,i){return n?t:i}var ci=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),e=1;e<i;e++)r[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var l=X(u,1),o=l[0];return!r.includes(o)});return a.reduce(function(u,l){var o=X(l,2),s=o[0],c=o[1];return u[s]=c,u},{})},di=["children","innerProps"],pi=["children","innerProps"];function fi(n){var t=n.maxHeight,i=n.menuEl,r=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,o=ni(i),s={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return s;var c=o.getBoundingClientRect(),d=c.height,v=i.getBoundingClientRect(),p=v.bottom,g=v.height,b=v.top,f=i.offsetParent.getBoundingClientRect(),x=f.top,w=u?window.innerHeight:ti(o),y=gt(o),O=parseInt(getComputedStyle(i).marginBottom,10),D=parseInt(getComputedStyle(i).marginTop,10),I=x-D,A=w-b,F=I+y,V=d-y-b,T=p-w+y+O,H=y+b-D,B=160;switch(e){case"auto":case"bottom":if(A>=g)return{placement:"bottom",maxHeight:t};if(V>=g&&!u)return a&&le(o,T,B),{placement:"bottom",maxHeight:t};if(!u&&V>=r||u&&A>=r){a&&le(o,T,B);var G=u?A-O:V-O;return{placement:"bottom",maxHeight:G}}if(e==="auto"||u){var Y=t,k=u?I:F;return k>=r&&(Y=Math.min(k-O-l,t)),{placement:"top",maxHeight:Y}}if(e==="bottom")return a&&ge(o,T),{placement:"bottom",maxHeight:t};break;case"top":if(I>=g)return{placement:"top",maxHeight:t};if(F>=g&&!u)return a&&le(o,H,B),{placement:"top",maxHeight:t};if(!u&&F>=r||u&&I>=r){var L=t;return(!u&&F>=r||u&&I>=r)&&(L=u?I-D:F-D),a&&le(o,H,B),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function hi(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var xt=function(t){return t==="auto"?"bottom":t},mi=function(t,i){var r,e=t.placement,a=t.theme,u=a.borderRadius,l=a.spacing,o=a.colors;return C((r={label:"menu"},ue(r,hi(e),"100%"),ue(r,"position","absolute"),ue(r,"width","100%"),ue(r,"zIndex",1),r),i?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Et=m.createContext(null),vi=function(t){var i=t.children,r=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,l=t.menuShouldScrollIntoView,o=t.theme,s=m.useContext(Et)||{},c=s.setPortalPlacement,d=m.useRef(null),v=m.useState(e),p=X(v,2),g=p[0],b=p[1],f=m.useState(null),x=X(f,2),w=x[0],y=x[1],O=o.spacing.controlHeight;return Ie(function(){var D=d.current;if(D){var I=u==="fixed",A=l&&!I,F=fi({maxHeight:e,menuEl:D,minHeight:r,placement:a,shouldScroll:A,isFixedPosition:I,controlHeight:O});b(F.maxHeight),y(F.placement),c==null||c(F.placement)}},[e,a,u,l,r,c,O]),i({ref:d,placerProps:C(C({},t),{},{placement:w||xt(a),maxHeight:g})})},gi=function(t){var i=t.children,r=t.innerRef,e=t.innerProps;return E("div",S({},P(t,"menu",{menu:!0}),{ref:r},e),i)},bi=gi,xi=function(t,i){var r=t.maxHeight,e=t.theme.spacing.baseUnit;return C({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},Ei=function(t){var i=t.children,r=t.innerProps,e=t.innerRef,a=t.isMulti;return E("div",S({},P(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},r),i)},Ct=function(t,i){var r=t.theme,e=r.spacing.baseUnit,a=r.colors;return C({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},Ci=Ct,Si=Ct,Fi=function(t){var i=t.children,r=i===void 0?"No options":i,e=t.innerProps,a=Q(t,di);return E("div",S({},P(C(C({},a),{},{children:r,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),r)},wi=function(t){var i=t.children,r=i===void 0?"Loading...":i,e=t.innerProps,a=Q(t,pi);return E("div",S({},P(C(C({},a),{},{children:r,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),r)},yi=function(t){var i=t.rect,r=t.offset,e=t.position;return{left:i.left,position:e,top:r,width:i.width,zIndex:1}},Oi=function(t){var i=t.appendTo,r=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,l=t.menuPosition,o=m.useRef(null),s=m.useRef(null),c=m.useState(xt(u)),d=X(c,2),v=d[0],p=d[1],g=m.useMemo(function(){return{setPortalPlacement:p}},[]),b=m.useState(null),f=X(b,2),x=f[0],w=f[1],y=m.useCallback(function(){if(e){var A=ri(e),F=l==="fixed"?0:window.pageYOffset,V=A[v]+F;(V!==(x==null?void 0:x.offset)||A.left!==(x==null?void 0:x.rect.left)||A.width!==(x==null?void 0:x.rect.width))&&w({offset:V,rect:A})}},[e,l,v,x==null?void 0:x.offset,x==null?void 0:x.rect.left,x==null?void 0:x.rect.width]);Ie(function(){y()},[y]);var O=m.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&o.current&&(s.current=Qn(e,o.current,y,{elementResize:"ResizeObserver"in window}))},[e,y]);Ie(function(){O()},[O]);var D=m.useCallback(function(A){o.current=A,O()},[O]);if(!i&&l!=="fixed"||!x)return null;var I=E("div",S({ref:D},P(C(C({},t),{},{offset:x.offset,position:l,rect:x.rect}),"menuPortal",{"menu-portal":!0}),a),r);return E(Et.Provider,{value:g},i?Kt.createPortal(I,i):I)},Di=function(t){var i=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},Ii=function(t){var i=t.children,r=t.innerProps,e=t.isDisabled,a=t.isRtl;return E("div",S({},P(t,"container",{"--is-disabled":e,"--is-rtl":a}),r),i)},Ai=function(t,i){var r=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return C({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Mi=function(t){var i=t.children,r=t.innerProps,e=t.isMulti,a=t.hasValue;return E("div",S({},P(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),r),i)},Vi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Pi=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"indicatorsContainer",{indicators:!0}),r),i)},Ye,Li=["size"],Ri=["innerProps","isRtl","size"],ki={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},St=function(t){var i=t.size,r=Q(t,Li);return E("svg",S({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:ki},r))},Te=function(t){return E(St,S({size:20},t),E("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ft=function(t){return E(St,S({size:20},t),E("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},wt=function(t,i){var r=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?u.neutral60:u.neutral20,padding:a*2,":hover":{color:r?u.neutral80:u.neutral40}})},Ti=wt,Bi=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||E(Ft,null))},Hi=wt,ji=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||E(Te,null))},$i=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},zi=function(t){var i=t.innerProps;return E("span",S({},i,P(t,"indicatorSeparator",{"indicator-separator":!0})))},Ui=Mn(Ye||(Ye=jn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ni=function(t,i){var r=t.isFocused,e=t.size,a=t.theme,u=a.colors,l=a.spacing.baseUnit;return C({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?u.neutral60:u.neutral20,padding:l*2})},Ce=function(t){var i=t.delay,r=t.offset;return E("span",{css:Ve({animation:"".concat(Ui," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},_i=function(t){var i=t.innerProps,r=t.isRtl,e=t.size,a=e===void 0?4:e,u=Q(t,Ri);return E("div",S({},P(C(C({},u),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),E(Ce,{delay:0,offset:r}),E(Ce,{delay:160,offset:!0}),E(Ce,{delay:320,offset:!r}))},Wi=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,l=a.borderRadius,o=a.spacing;return C({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:e?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Gi=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,l=t.menuIsOpen;return E("div",S({ref:a},P(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":e,"control--menu-is-open":l}),u,{"aria-disabled":r||void 0}),i)},Yi=Gi,qi=["data"],Ki=function(t,i){var r=t.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Xi=function(t){var i=t.children,r=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,l=t.headingProps,o=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return E("div",S({},P(t,"group",{group:!0}),o),E(u,S({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:r}),s),E("div",null,i))},Qi=function(t,i){var r=t.theme,e=r.colors,a=r.spacing;return C({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Ji=function(t){var i=vt(t);i.data;var r=Q(i,qi);return E("div",S({},P(t,"groupHeading",{"group-heading":!0}),r))},Zi=Xi,er=["innerRef","isDisabled","isHidden","inputClassName"],tr=function(t,i){var r=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,l=a.colors;return C(C({visibility:r?"hidden":"visible",transform:e?"translateZ(0)":""},nr),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},yt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},nr={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":C({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},yt)},ir=function(t){return C({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},yt)},rr=function(t){var i=t.cx,r=t.value,e=vt(t),a=e.innerRef,u=e.isDisabled,l=e.isHidden,o=e.inputClassName,s=Q(e,er);return E("div",S({},P(t,"input",{"input-container":!0}),{"data-value":r||""}),E("input",S({className:i({input:!0},o),ref:a,style:ir(l),disabled:u},s)))},or=rr,ar=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors;return C({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},ur=function(t,i){var r=t.theme,e=r.borderRadius,a=r.colors,u=t.cropWithEllipsis;return C({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},sr=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors,l=t.isFocused;return C({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Ot=function(t){var i=t.children,r=t.innerProps;return E("div",r,i)},lr=Ot,cr=Ot;function dr(n){var t=n.children,i=n.innerProps;return E("div",S({role:"button"},i),t||E(Te,{size:14}))}var pr=function(t){var i=t.children,r=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,l=t.removeProps,o=t.selectProps,s=r.Container,c=r.Label,d=r.Remove;return E(s,{data:e,innerProps:C(C({},P(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},E(c,{data:e,innerProps:C({},P(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},i),E(d,{data:e,innerProps:C(C({},P(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:o}))},fr=pr,hr=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,l=u.spacing,o=u.colors;return C({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?o.primary:e?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},mr=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,l=t.innerProps;return E("div",S({},P(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":r},l),i)},vr=mr,gr=function(t,i){var r=t.theme,e=r.spacing,a=r.colors;return C({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},br=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"placeholder",{placeholder:!0}),r),i)},xr=br,Er=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return C({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Cr=function(t){var i=t.children,r=t.isDisabled,e=t.innerProps;return E("div",S({},P(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),e),i)},Sr=Cr,Fr={ClearIndicator:ji,Control:Yi,DropdownIndicator:Bi,DownChevron:Ft,CrossIcon:Te,Group:Zi,GroupHeading:Ji,IndicatorsContainer:Pi,IndicatorSeparator:zi,Input:or,LoadingIndicator:_i,Menu:bi,MenuList:Ei,MenuPortal:Oi,LoadingMessage:wi,NoOptionsMessage:Fi,MultiValue:fr,MultiValueContainer:lr,MultiValueLabel:cr,MultiValueRemove:dr,Option:vr,Placeholder:xr,SelectContainer:Ii,SingleValue:Sr,ValueContainer:Mi},wr=function(t){return C(C({},Fr),t.components)},qe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function yr(n,t){return!!(n===t||qe(n)&&qe(t))}function Or(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!yr(n[i],t[i]))return!1;return!0}function Dr(n,t){t===void 0&&(t=Or);var i=null;function r(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return r.clear=function(){i=null},r}var Ir={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Ar=function(t){return E("span",S({css:Ir},t))},Ke=Ar,Mr={guidance:function(t){var i=t.isSearchable,r=t.isMulti,e=t.tabSelectsValue,a=t.context,u=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,r=t.label,e=r===void 0?"":r,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,r=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,l=t.selectValue,o=t.isDisabled,s=t.isSelected,c=t.isAppleDevice,d=function(b,f){return b&&b.length?"".concat(b.indexOf(f)+1," of ").concat(b.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,r),".");if(i==="menu"&&c){var v=o?" disabled":"",p="".concat(s?" selected":"").concat(v);return"".concat(u).concat(p,", ").concat(d(e,r),".")}return""},onFilter:function(t){var i=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},Vr=function(t){var i=t.ariaSelection,r=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,l=t.selectValue,o=t.selectProps,s=t.id,c=t.isAppleDevice,d=o.ariaLiveMessages,v=o.getOptionLabel,p=o.inputValue,g=o.isMulti,b=o.isOptionDisabled,f=o.isSearchable,x=o.menuIsOpen,w=o.options,y=o.screenReaderStatus,O=o.tabSelectsValue,D=o.isLoading,I=o["aria-label"],A=o["aria-live"],F=m.useMemo(function(){return C(C({},Mr),d||{})},[d]),V=m.useMemo(function(){var k="";if(i&&F.onChange){var L=i.option,W=i.options,$=i.removedValue,J=i.removedValues,Z=i.value,oe=function(K){return Array.isArray(K)?null:K},R=$||L||oe(Z),j=R?v(R):"",q=W||J||void 0,ee=q?q.map(v):[],U=C({isDisabled:R&&b(R,l),label:j,labels:ee},i);k=F.onChange(U)}return k},[i,F,b,l,v]),T=m.useMemo(function(){var k="",L=r||e,W=!!(r&&l&&l.includes(r));if(L&&F.onFocus){var $={focused:L,label:v(L),isDisabled:b(L,l),isSelected:W,options:a,context:L===r?"menu":"value",selectValue:l,isAppleDevice:c};k=F.onFocus($)}return k},[r,e,v,b,F,a,l,c]),H=m.useMemo(function(){var k="";if(x&&w.length&&!D&&F.onFilter){var L=y({count:a.length});k=F.onFilter({inputValue:p,resultsMessage:L})}return k},[a,p,x,F,w,y,D]),B=(i==null?void 0:i.action)==="initial-input-focus",G=m.useMemo(function(){var k="";if(F.guidance){var L=e?"value":x?"menu":"input";k=F.guidance({"aria-label":I,context:L,isDisabled:r&&b(r,l),isMulti:g,isSearchable:f,tabSelectsValue:O,isInitialFocus:B})}return k},[I,r,e,g,b,f,x,F,l,O,B]),Y=E(m.Fragment,null,E("span",{id:"aria-selection"},V),E("span",{id:"aria-focused"},T),E("span",{id:"aria-results"},H),E("span",{id:"aria-guidance"},G));return E(m.Fragment,null,E(Ke,{id:s},B&&Y),E(Ke,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!B&&Y))},Pr=Vr,Ae=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Lr=new RegExp("["+Ae.map(function(n){return n.letters}).join("")+"]","g"),Dt={};for(var Se=0;Se<Ae.length;Se++)for(var Fe=Ae[Se],we=0;we<Fe.letters.length;we++)Dt[Fe.letters[we]]=Fe.base;var It=function(t){return t.replace(Lr,function(i){return Dt[i]})},Rr=Dr(It),Xe=function(t){return t.replace(/^\s+|\s+$/g,"")},kr=function(t){return"".concat(t.label," ").concat(t.value)},Tr=function(t){return function(i,r){if(i.data.__isNew__)return!0;var e=C({ignoreCase:!0,ignoreAccents:!0,stringify:kr,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,l=e.stringify,o=e.trim,s=e.matchFrom,c=o?Xe(r):r,d=o?Xe(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Rr(c),d=It(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Br=["innerRef"];function Hr(n){var t=n.innerRef,i=Q(n,Br),r=ci(i,"onExited","in","enter","exit","appear");return E("input",S({ref:t},r,{css:Ve({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var jr=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function $r(n){var t=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=m.useRef(!1),l=m.useRef(!1),o=m.useRef(0),s=m.useRef(null),c=m.useCallback(function(f,x){if(s.current!==null){var w=s.current,y=w.scrollTop,O=w.scrollHeight,D=w.clientHeight,I=s.current,A=x>0,F=O-D-y,V=!1;F>x&&u.current&&(r&&r(f),u.current=!1),A&&l.current&&(a&&a(f),l.current=!1),A&&x>F?(i&&!u.current&&i(f),I.scrollTop=O,V=!0,u.current=!0):!A&&-x>y&&(e&&!l.current&&e(f),I.scrollTop=0,V=!0,l.current=!0),V&&jr(f)}},[i,r,e,a]),d=m.useCallback(function(f){c(f,f.deltaY)},[c]),v=m.useCallback(function(f){o.current=f.changedTouches[0].clientY},[]),p=m.useCallback(function(f){var x=o.current-f.changedTouches[0].clientY;c(f,x)},[c]),g=m.useCallback(function(f){if(f){var x=ui?{passive:!1}:!1;f.addEventListener("wheel",d,x),f.addEventListener("touchstart",v,x),f.addEventListener("touchmove",p,x)}},[p,v,d]),b=m.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",v,!1),f.removeEventListener("touchmove",p,!1))},[p,v,d]);return m.useEffect(function(){if(t){var f=s.current;return g(f),function(){b(f)}}},[t,g,b]),function(f){s.current=f}}var Qe=["boxSizing","height","overflow","paddingRight","position"],Je={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ze(n){n.preventDefault()}function et(n){n.stopPropagation()}function tt(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function nt(){return"ontouchstart"in window||navigator.maxTouchPoints}var it=!!(typeof window<"u"&&window.document&&window.document.createElement),ie=0,ne={capture:!1,passive:!1};function zr(n){var t=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,e=m.useRef({}),a=m.useRef(null),u=m.useCallback(function(o){if(it){var s=document.body,c=s&&s.style;if(r&&Qe.forEach(function(g){var b=c&&c[g];e.current[g]=b}),r&&ie<1){var d=parseInt(e.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,p=window.innerWidth-v+d||0;Object.keys(Je).forEach(function(g){var b=Je[g];c&&(c[g]=b)}),c&&(c.paddingRight="".concat(p,"px"))}s&&nt()&&(s.addEventListener("touchmove",Ze,ne),o&&(o.addEventListener("touchstart",tt,ne),o.addEventListener("touchmove",et,ne))),ie+=1}},[r]),l=m.useCallback(function(o){if(it){var s=document.body,c=s&&s.style;ie=Math.max(ie-1,0),r&&ie<1&&Qe.forEach(function(d){var v=e.current[d];c&&(c[d]=v)}),s&&nt()&&(s.removeEventListener("touchmove",Ze,ne),o&&(o.removeEventListener("touchstart",tt,ne),o.removeEventListener("touchmove",et,ne)))}},[r]);return m.useEffect(function(){if(t){var o=a.current;return u(o),function(){l(o)}}},[t,u,l]),function(o){a.current=o}}var Ur=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Nr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function _r(n){var t=n.children,i=n.lockEnabled,r=n.captureEnabled,e=r===void 0?!0:r,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,o=n.onTopLeave,s=$r({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:o}),c=zr({isEnabled:i}),d=function(p){s(p),c(p)};return E(m.Fragment,null,i&&E("div",{onClick:Ur,css:Nr}),t(d))}var Wr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Gr=function(t){var i=t.name,r=t.onFocus;return E("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Wr,value:"",onChange:function(){}})},Yr=Gr;function Be(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function qr(){return Be(/^iPhone/i)}function At(){return Be(/^Mac/i)}function Kr(){return Be(/^iPad/i)||At()&&navigator.maxTouchPoints>1}function Xr(){return qr()||Kr()}function Qr(){return At()||Xr()}var Jr=function(t){return t.label},Zr=function(t){return t.label},eo=function(t){return t.value},to=function(t){return!!t.isDisabled},no={clearIndicator:Hi,container:Di,control:Wi,dropdownIndicator:Ti,group:Ki,groupHeading:Qi,indicatorsContainer:Vi,indicatorSeparator:$i,input:tr,loadingIndicator:Ni,loadingMessage:Si,menu:mi,menuList:xi,menuPortal:yi,multiValue:ar,multiValueLabel:ur,multiValueRemove:sr,noOptionsMessage:Ci,option:hr,placeholder:gr,singleValue:Er,valueContainer:Ai},io={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},ro=4,Mt=4,oo=38,ao=Mt*2,uo={baseUnit:Mt,controlHeight:oo,menuGutter:ao},ye={borderRadius:ro,colors:io,spacing:uo},so={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ge(),captureMenuScroll:!Ge(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Tr(),formatGroupLabel:Jr,getOptionLabel:Zr,getOptionValue:eo,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:to,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!oi(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function rt(n,t,i,r){var e=Lt(n,t,i),a=Rt(n,t,i),u=Pt(n,t),l=be(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:l,index:r}}function pe(n,t){return n.options.map(function(i,r){if("options"in i){var e=i.options.map(function(u,l){return rt(n,u,t,l)}).filter(function(u){return at(n,u)});return e.length>0?{type:"group",data:i,options:e,index:r}:void 0}var a=rt(n,i,t,r);return at(n,a)?a:void 0}).filter(si)}function Vt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,Pe(i.options.map(function(r){return r.data}))):t.push(i.data),t},[])}function ot(n,t){return n.reduce(function(i,r){return r.type==="group"?i.push.apply(i,Pe(r.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(r.index,"-").concat(e.index)}}))):i.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),i},[])}function lo(n,t){return Vt(pe(n,t))}function at(n,t){var i=n.inputValue,r=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,l=t.value;return(!Tt(n)||!a)&&kt(n,{label:u,value:l,data:e},r)}function co(n,t){var i=n.focusedValue,r=n.selectValue,e=r.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function po(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Oe=function(t,i){var r,e=(r=t.find(function(a){return a.data===i}))===null||r===void 0?void 0:r.id;return e||null},Pt=function(t,i){return t.getOptionLabel(i)},be=function(t,i){return t.getOptionValue(i)};function Lt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function Rt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var r=be(n,t);return i.some(function(e){return be(n,e)===r})}function kt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Tt=function(t){var i=t.hideSelectedOptions,r=t.isMulti;return i===void 0?r:i},fo=1,Bt=function(n){gn(i,n);var t=bn(i);function i(r){var e;if(xn(this,i),e=t.call(this,r),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=Qr(),e.controlRef=null,e.getControlRef=function(o){e.controlRef=o},e.focusedOptionRef=null,e.getFocusedOptionRef=function(o){e.focusedOptionRef=o},e.menuListRef=null,e.getMenuListRef=function(o){e.menuListRef=o},e.inputRef=null,e.getInputRef=function(o){e.inputRef=o},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(o,s){var c=e.props,d=c.onChange,v=c.name;s.name=v,e.ariaOnChange(o,s),d(o,s)},e.setValue=function(o,s,c){var d=e.props,v=d.closeMenuOnSelect,p=d.isMulti,g=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:g}),v&&(e.setState({inputIsHiddenAfterUpdate:!p}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(o,{action:s,option:c})},e.selectOption=function(o){var s=e.props,c=s.blurInputOnSelect,d=s.isMulti,v=s.name,p=e.state.selectValue,g=d&&e.isOptionSelected(o,p),b=e.isOptionDisabled(o,p);if(g){var f=e.getOptionValue(o);e.setValue(p.filter(function(x){return e.getOptionValue(x)!==f}),"deselect-option",o)}else if(!b)d?e.setValue([].concat(Pe(p),[o]),"select-option",o):e.setValue(o,"select-option");else{e.ariaOnChange(o,{action:"select-option",option:o,name:v});return}c&&e.blurInput()},e.removeValue=function(o){var s=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(o),v=c.filter(function(g){return e.getOptionValue(g)!==d}),p=de(s,v,v[0]||null);e.onChange(p,{action:"remove-value",removedValue:o}),e.focusInput()},e.clearValue=function(){var o=e.state.selectValue;e.onChange(de(e.props.isMulti,[],null),{action:"clear",removedValues:o})},e.popValue=function(){var o=e.props.isMulti,s=e.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),v=de(o,d,d[0]||null);e.onChange(v,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(o){return Oe(e.state.focusableOptionsWithIds,o)},e.getFocusableOptionsWithIds=function(){return ot(pe(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return ei.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(o){return Pt(e.props,o)},e.getOptionValue=function(o){return be(e.props,o)},e.getStyles=function(o,s){var c=e.props.unstyled,d=no[o](s,c);d.boxSizing="border-box";var v=e.props.styles[o];return v?v(d,s):d},e.getClassNames=function(o,s){var c,d;return(c=(d=e.props.classNames)[o])===null||c===void 0?void 0:c.call(d,s)},e.getElementId=function(o){return"".concat(e.state.instancePrefix,"-").concat(o)},e.getComponents=function(){return wr(e.props)},e.buildCategorizedOptions=function(){return pe(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return Vt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(o,s){e.setState({ariaSelection:C({value:o},s)})},e.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(o){e.blockOptionHover=!1},e.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},e.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!e.props.isDisabled){var s=e.props,c=s.isMulti,d=s.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),o.preventDefault()}},e.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(e.clearValue(),o.preventDefault(),e.openAfterFocus=!1,o.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(o){typeof e.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&xe(o.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(o)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(o){var s=o.touches,c=s&&s.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(o){var s=o.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),v=Math.abs(c.clientY-e.initialTouchY),p=5;e.userIsDragging=d>p||v>p}},e.onTouchEnd=function(o){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(o.target)&&e.menuListRef&&!e.menuListRef.contains(o.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(o){e.userIsDragging||e.onControlMouseDown(o)},e.onClearIndicatorTouchEnd=function(o){e.userIsDragging||e.onClearIndicatorMouseDown(o)},e.onDropdownIndicatorTouchEnd=function(o){e.userIsDragging||e.onDropdownIndicatorMouseDown(o)},e.handleInputChange=function(o){var s=e.props.inputValue,c=o.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(o){e.props.onFocus&&e.props.onFocus(o),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(o){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(o),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(o){if(!(e.blockOptionHover||e.state.focusedOption===o)){var s=e.getFocusableOptions(),c=s.indexOf(o);e.setState({focusedOption:o,focusedOptionId:c>-1?e.getFocusedOptionId(o):null})}},e.shouldHideSelectedOptions=function(){return Tt(e.props)},e.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),e.focus()},e.onKeyDown=function(o){var s=e.props,c=s.isMulti,d=s.backspaceRemovesValue,v=s.escapeClearsValue,p=s.inputValue,g=s.isClearable,b=s.isDisabled,f=s.menuIsOpen,x=s.onKeyDown,w=s.tabSelectsValue,y=s.openMenuOnFocus,O=e.state,D=O.focusedOption,I=O.focusedValue,A=O.selectValue;if(!b&&!(typeof x=="function"&&(x(o),o.defaultPrevented))){switch(e.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||p)return;e.focusValue("previous");break;case"ArrowRight":if(!c||p)return;e.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(I)e.removeValue(I);else{if(!d)return;c?e.popValue():g&&e.clearValue()}break;case"Tab":if(e.isComposing||o.shiftKey||!f||!w||!D||y&&e.isOptionSelected(D,A))return;e.selectOption(D);break;case"Enter":if(o.keyCode===229)break;if(f){if(!D||e.isComposing)return;e.selectOption(D);break}return;case"Escape":f?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:p}),e.onMenuClose()):g&&v&&e.clearValue();break;case" ":if(p)return;if(!f){e.openMenu("first");break}if(!D)return;e.selectOption(D);break;case"ArrowUp":f?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":f?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!f)return;e.focusOption("pageup");break;case"PageDown":if(!f)return;e.focusOption("pagedown");break;case"Home":if(!f)return;e.focusOption("first");break;case"End":if(!f)return;e.focusOption("last");break;default:return}o.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++fo),e.state.selectValue=_e(r.value),r.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=u[l],e.state.focusedOptionId=Oe(a,u[l])}return e}return En(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&We(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&e.isDisabled||o&&l&&!e.menuIsOpen)&&this.focusInput(),o&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(We(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,l=u.selectValue,o=u.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(l);l||(o=-1);var s=u.length-1,c=-1;if(u.length){switch(e){case"previous":o===0?c=0:o===-1?c=s:c=o-1;break;case"next":o>-1&&o<s&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,s=l.indexOf(u);u||(s=-1),e==="up"?o=s>0?s-1:l.length-1:e==="down"?o=(s+1)%l.length:e==="pageup"?(o=s-a,o<0&&(o=0)):e==="pagedown"?(o=s+a,o>l.length-1&&(o=l.length-1)):e==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ye):C(C({},ye),this.props.theme):ye}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,o=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,p=d.isRtl,g=d.options,b=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:l,getValue:o,hasValue:b,isMulti:v,isRtl:p,options:g,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Lt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return Rt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return kt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,l=e.inputId,o=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,v=e.required,p=this.getComponents(),g=p.Input,b=this.state,f=b.inputIsHidden,x=b.ariaSelection,w=this.commonProps,y=l||this.getElementId("input"),O=C(C(C({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(x==null?void 0:x.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?m.createElement(g,S({},w,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:o},O)):m.createElement(Hr,S({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,p=this.props,g=p.controlShouldRenderValue,b=p.isDisabled,f=p.isMulti,x=p.inputValue,w=p.placeholder,y=this.state,O=y.selectValue,D=y.focusedValue,I=y.isFocused;if(!this.hasValue()||!g)return x?null:m.createElement(d,S({},v,{key:"placeholder",isDisabled:b,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),w);if(f)return O.map(function(F,V){var T=F===D,H="".concat(e.getOptionLabel(F),"-").concat(e.getOptionValue(F));return m.createElement(u,S({},v,{components:{Container:l,Label:o,Remove:s},isFocused:T,isDisabled:b,key:H,index:V,removeProps:{onClick:function(){return e.removeValue(F)},onTouchEnd:function(){return e.removeValue(F)},onMouseDown:function(G){G.preventDefault()}},data:F}),e.formatOptionLabel(F,"value"))});if(x)return null;var A=O[0];return m.createElement(c,S({},v,{data:A,isDisabled:b}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(a,S({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return m.createElement(a,S({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused;return m.createElement(u,S({},l,{isDisabled:o,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(a,S({},u,{innerProps:s,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,o=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,p=a.Option,g=this.commonProps,b=this.state.focusedOption,f=this.props,x=f.captureMenuScroll,w=f.inputValue,y=f.isLoading,O=f.loadingMessage,D=f.minMenuHeight,I=f.maxMenuHeight,A=f.menuIsOpen,F=f.menuPlacement,V=f.menuPosition,T=f.menuPortalTarget,H=f.menuShouldBlockScroll,B=f.menuShouldScrollIntoView,G=f.noOptionsMessage,Y=f.onMenuScrollToTop,k=f.onMenuScrollToBottom;if(!A)return null;var L=function(j,q){var ee=j.type,U=j.data,te=j.isDisabled,K=j.isSelected,ae=j.label,zt=j.value,He=b===U,je=te?void 0:function(){return e.onOptionHover(U)},Ut=te?void 0:function(){return e.selectOption(U)},$e="".concat(e.getElementId("option"),"-").concat(q),Nt={id:$e,onClick:Ut,onMouseMove:je,onMouseOver:je,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:K};return m.createElement(p,S({},g,{innerProps:Nt,data:U,isDisabled:te,isSelected:K,key:$e,label:ae,type:ee,value:zt,isFocused:He,innerRef:He?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(j.data,"menu"))},W;if(this.hasOptions())W=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var j=R.data,q=R.options,ee=R.index,U="".concat(e.getElementId("group"),"-").concat(ee),te="".concat(U,"-heading");return m.createElement(u,S({},g,{key:U,data:j,options:q,Heading:l,headingProps:{id:te,data:R.data},label:e.formatGroupLabel(R.data)}),R.options.map(function(K){return L(K,"".concat(ee,"-").concat(K.index))}))}else if(R.type==="option")return L(R,"".concat(R.index))});else if(y){var $=O({inputValue:w});if($===null)return null;W=m.createElement(d,g,$)}else{var J=G({inputValue:w});if(J===null)return null;W=m.createElement(v,g,J)}var Z={minMenuHeight:D,maxMenuHeight:I,menuPlacement:F,menuPosition:V,menuShouldScrollIntoView:B},oe=m.createElement(vi,S({},g,Z),function(R){var j=R.ref,q=R.placerProps,ee=q.placement,U=q.maxHeight;return m.createElement(o,S({},g,Z,{innerRef:j,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:y,placement:ee}),m.createElement(_r,{captureEnabled:x,onTopArrive:Y,onBottomArrive:k,lockEnabled:H},function(te){return m.createElement(s,S({},g,{innerRef:function(ae){e.getMenuListRef(ae),te(ae)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:e.getElementId("listbox")},isLoading:y,maxHeight:U,focusedOption:b}),W)}))});return T||V==="fixed"?m.createElement(c,S({},g,{appendTo:T,controlElement:this.controlRef,menuPlacement:F,menuPosition:V}),oe):oe}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,l=a.isDisabled,o=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return m.createElement(Yr,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(o)if(u){var v=d.map(function(b){return e.getOptionValue(b)}).join(u);return m.createElement("input",{name:s,type:"hidden",value:v})}else{var p=d.length>0?d.map(function(b,f){return m.createElement("input",{key:"i-".concat(f),name:s,type:"hidden",value:e.getOptionValue(b)})}):m.createElement("input",{name:s,type:"hidden",value:""});return m.createElement("div",null,p)}else{var g=d[0]?this.getOptionValue(d[0]):"";return m.createElement("input",{name:s,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return m.createElement(Pr,S({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:o,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,l=e.SelectContainer,o=e.ValueContainer,s=this.props,c=s.className,d=s.id,v=s.isDisabled,p=s.menuIsOpen,g=this.state.isFocused,b=this.commonProps=this.getCommonProps();return m.createElement(l,S({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:g}),this.renderLiveRegion(),m.createElement(a,S({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:g,menuIsOpen:p}),m.createElement(o,S({},b,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),m.createElement(u,S({},b,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=a.instancePrefix,p=e.options,g=e.value,b=e.menuIsOpen,f=e.inputValue,x=e.isMulti,w=_e(g),y={};if(u&&(g!==u.value||p!==u.options||b!==u.menuIsOpen||f!==u.inputValue)){var O=b?lo(e,w):[],D=b?ot(pe(e,w),"".concat(v,"-option")):[],I=l?co(a,w):null,A=po(a,O),F=Oe(D,A);y={selectValue:w,focusedOption:A,focusedOptionId:F,focusableOptionsWithIds:D,focusedValue:I,clearFocusValueOnUpdate:!1}}var V=o!=null&&e!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},T=s,H=c&&d;return c&&!H&&(T={value:de(x,w,w[0]||null),options:w,action:"initial-input-focus"},H=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),C(C(C({},y),V),{},{prevProps:e,ariaSelection:T,prevWasFocused:H})}}]),i}(m.Component);Bt.defaultProps=so;var ho=m.forwardRef(function(n,t){var i=kn(n);return m.createElement(Bt,S({ref:t},i))}),ut=ho;const Ht={option:(n,t)=>({...n,padding:"8px 0",fontSize:"14px",color:t.isSelected?"#E6533C":"#EFEDE8",backgroundColor:t.isSelected?"rgba(28, 28, 28, 1)":t.isFocused?"rgba(239, 237, 232, 0.10)":"rgba(28, 28, 28, 1)",cursor:"pointer"}),singleValue:n=>({...n,color:"#EFEDE8"}),menu:n=>({...n,backgroundColor:"rgba(28, 28, 28, 1)",padding:"6px 5px 14px 14px"}),indicatorSeparator:n=>({...n,backgroundColor:"transparent"}),dropdownIndicator:n=>({...n,color:"#EFEDE8"}),container:(n,t)=>({...n,border:`1px solid ${t.isFocused?"#E6533C":"rgba(239, 237, 232, 0.3)"}`,"&:hover":{border:"1px solid #E6533C"},borderRadius:"12px",outline:"none"}),menuList:n=>({...n,overflowY:"auto",marginTop:"14px",marginRight:"7px","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb":{background:"rgba(239, 237, 232, 0.10)",borderRadius:"12px"}}),placeholder:n=>({...n,fontSize:"14px",lineHeight:"1.28",margin:"0",padding:"0"})},mo={...Ht,control:n=>({...n,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"146px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"192px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},vo={...Ht,control:n=>({...n,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"173px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"204px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},go=_.label`
  position: relative;
`,bo=_.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: -6px;
    right: 0;

    align-items: center;
    justify-content: flex-end;
    margin-bottom: 28px;
  }
`,xo=_.input`
  width: 100%;

  padding: 14px;
  border-radius: 12px;
  top: calc(50% - 16px / 2);
  right: 14px;
  width: 270px;
  background-color: transparent;
  color: var(--color-text);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 14px;
  transition: border-color 0.3s var(--timing-function);

  @media screen and (min-width: 375px) {
    box-sizing: border-box;
    width: 335px;
    height: 46px;
    padding: 14px;
    padding-right: 68px;
    background-color: transparent;
    color: var(--color-text);
    font-size: 14px;
    line-height: 1.28;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    height: 52px;
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-main-one);
  }

  &::placeholder {
    color: var(--color-text);
  }
`,Eo=_.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 14px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,Co=_.svg`
  stroke: var(--color-text);
  fill: transparent;
  width: 18px;
  height: 18px;
  transition: stroke 0.3s var(--timing-function);

  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,So=_.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 40px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,Fo=_.svg`
  stroke: var(--color-main-one);
  width: 18px;
  height: 18px;
`,wo=_.div`
  display: flex;
  gap: 16px;
`,yo=()=>{const[n,t]=m.useState(""),i=z(st),r=z(lt),e=Me();m.useEffect(()=>{e(Xt())},[e]);const a=p=>`${p[0].toUpperCase()}${p.slice(1)}`,u=z(Qt),l=[{value:"all",label:"All categories"},...u.map(({_id:p,name:g})=>({value:p,label:a(g)}))],o=p=>{const{value:g}=p.target;t(g),console.log("inputQuery.value",n)},s=p=>{p.preventDefault();const g=p.target.elements[0].value;e(Zt(g))},c=()=>{t("")},d=p=>{e(en(p))},v=p=>{e(tn(p))};return h.jsx(h.Fragment,{children:h.jsxs(bo,{children:[h.jsx("form",{onSubmit:s,children:h.jsxs(go,{children:[h.jsx(xo,{type:"text",name:"productsSearch",placeholder:"Search",value:n,onChange:o}),n&&h.jsx(So,{type:"button",onClick:c,children:h.jsx(Fo,{children:h.jsx("use",{href:re+"#icon-cross"})})}),h.jsx(Eo,{type:"submit",children:h.jsx(Co,{children:h.jsx("use",{href:re+"#icon-search"})})})]})}),h.jsxs(wo,{children:[h.jsx(ut,{styles:mo,value:i,onChange:d,options:l,placeholder:"Categories",theme:p=>({...p,colors:{...p.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})}),h.jsx(ut,{styles:vo,value:r,onChange:v,options:Jt,theme:p=>({...p,colors:{...p.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})})]})]})})},Oo=M.div`
  padding: 38px 22px;
`,Do=M.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,jt=M(Fn)`
  box-sizing: border-box;

  width: 100%;
  padding: 8px 14px;
  background-color: transparent;
  font-size: 14px;
  line-height: 1.28; /* 128.571% */
  color: var(--color-text);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: border-color 0.3s var(--timing-function);

  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-main-one);
  }

  &::placeholder {
    color: var(--color-text);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5; /* 150% */
  }
`,Io=M(jt)`
  color: rgba(239, 237, 232, 0.3);
  border: 1px solid var(--color-main-one);

  @media screen and (min-width: 768px) {
    width: 244px;
  }
`,Ao=M.label`
  display: block;
  position: relative;
`,Mo=M(jt)`
  @media screen and (min-width: 768px) {
    width: 155px;
  }
`,Vo=M.span`
  position: absolute;
  top: 50%;
  right: 14px;
  color: rgba(239, 237, 232, 0.4);
  transform: translate(0, -50%);
  /* color:; */
`,Po=M.p`
  margin-bottom: 24px;
  text-align: left;
  line-height: 1.5; /* 150% */
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,Lo=M.span`
  color: var(--color-text);
`,Ro=M.div`
  display: flex;
  gap: 14px;
`,$t=M.button`
  display: block;

  padding: 12px 32px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  color: var(--color-text);
  border-radius: 12px;
  cursor: pointer;
  transition: border 0.3s var(--timing-function);

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
  }
`,ko=M($t)`
  background-color: var(--color-main-one);
  border: 1px solid var(--color-main-one);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }
`,To=M($t)`
  width: 121px;
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);

  &:hover,
  &:focus {
    border: 1px solid var(--color-main-one);
  }

  @media screen and (min-width: 768px) {
    width: 142px;
  }
`,Bo=M(wn)`
color: var(--color-wrong-one);
margin-top: 4px;
line-height: 1.5;
letter-spacing: 0.12px;
`,Ho=({id:n,title:t,calories:i,onClick:r,onClickSuccess:e})=>{const[a,u]=m.useState(0),l=Me(),o={product_id:n,date:Cn(new Date,"yyyy-MM-dd"),weight:""},s=yn().shape({weight:On().max(700,"Weight should be no more than 700 grams").required().positive()}),c=g=>{const b=i*g/100;return parseFloat(b)},d=(g,b)=>{const f=g.target.value,x=c(f);u(x),b("weight",Number(f)),b("calories",x)},v=(g,b)=>{e(),l(rn(g)),b.resetForm(),r()},p=()=>{r()};return h.jsxs(h.Fragment,{children:[h.jsx(nn,{}),h.jsx(Dn,{initialValues:o,validationSchema:s,onSubmit:v,children:({values:g,setFieldValue:b})=>h.jsx(In,{autoComplete:"off",children:h.jsxs(Oo,{children:[h.jsxs(Do,{children:[h.jsx("div",{children:h.jsx("label",{htmlFor:"product",children:h.jsx(Io,{name:"product",type:"text",value:t,readOnly:!0})})}),h.jsx("div",{children:h.jsxs(Ao,{htmlFor:"weight",children:[h.jsx(Mo,{name:"weight",type:"text",onChange:f=>d(f,b),onKeyPress:f=>{/^[0-9\b]+$/.test(f.key)||f.preventDefault()},value:g.weight}),h.jsx(Vo,{children:"grams"}),h.jsx(Bo,{name:"weight",component:"p"})]})})]}),h.jsxs(Po,{children:["Calories: ",h.jsx(Lo,{children:a})]}),h.jsxs(Ro,{children:[h.jsx(ko,{type:"submit",children:"Add to diary"}),h.jsx(To,{type:"button",onClick:p,children:"Cancel"})]})]})})})]})},jo=M.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,$o=M.img`
  width: 123px;
  height: 84px;
  margin-top: 48px;

`,zo=M.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--color-text);

  margin-top: 16px;

  @media screen and (min-width: 768px) {
    text-align: center;
    margin-top: 32px;
  }
`,Uo=M.p`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: #efede84d;

  margin-top: 16px;

  > span {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--color-main-one);
  }
`,No=M.button`
  width: 157px;
  height: 42px;
  padding: 12px 32px 12px 32px;
  border-radius: 12px;
  border: none;
  gap: 10px;

  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--color-text);
  background-color: var(--color-main-one);

  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    line-height: 24px;
    height: 52px;
    padding: 14px 32px 14px 32px;
  }
`,_o=M(on)`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 8px;
  padding: 0;
  margin-top: 16px;

  > span {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #efede84d;
  }

  > svg {
    width: 16px;
    height: 16px;
    stroke: #efede84d;
  }
`,Wo="/PowerPulse2.0/assets/avocado-d29ef327.png",Go=({onClick:n})=>{const t=z(an);return h.jsxs(jo,{children:[h.jsx($o,{src:Wo,alt:"avocado",loading:"lazy"}),h.jsx(zo,{children:"Well done"}),h.jsxs(Uo,{children:["Calories: ",h.jsx("span",{children:t==null?void 0:t.calories})]}),h.jsx(No,{type:"button",onClick:()=>n(),children:"Next product"}),h.jsxs(_o,{to:"/diary",children:[h.jsx("span",{children:"To the dairy"}),h.jsx("svg",{children:h.jsx("use",{href:`${re}#icon-arrow`})})]})]})},Yo=M.li`
  min-width: 280px;
  padding: 15px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 34px) / 2);
  }

  @media screen and (min-width: 1440px) {
    /* width: 405px; */
    width: calc((100% - 40px) / 2);
  }
`,qo=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ko=M.div`
  padding: 5px 7.5px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  > p {
    margin: 0;
    font-weight: 700;
  }
`,Xo=M.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > div {
    background-color: ${n=>n.isrecommended?"var(--color-approved-two)":"var(--color-wrong-two)"};
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

  > p {
    padding-right: 8px;
    margin: 0;
    line-height: 1.5;
  }
`,Qo=M.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;

  > span {
    font-size: 14px;
    line-height: 1.3;
    color: var(--color-main-one);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  > svg {
    width: 16px;
    height: 16px;
    stroke: var(--color-main-one);
  }
`,Jo=M.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 8px;
  margin-right: 5px;

  @media screen and (min-width: 768px) {
    margin-top: 27px;
  }

  > h2 {
    margin: 0;
    width: 100%;
    height: 24px;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (min-width: 768px) {
      height: 32px;
      font-size: 24px;
      line-height: 1.3;
    }
  }

  > h2::first-letter {
    text-transform: uppercase;
  }
`,Zo=M.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: var(--color-main-three);
  border-radius: 50%;
  flex-shrink: 0;

  > svg {
    width: 14px;
    height: 16px;
    fill: var(--color-text);
  }
`,ea=M.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-right: 10px;

  p {
    margin: 0;
    line-height: 1.5;
    color: rgba(239, 237, 232, 0.4);

    > span {
      margin-left: 4px;
      color: var(--color-text);
    }
  }
`,ta=M.p`
  display: flex;
  span {
    width: 100%;
    height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */

    /* @media screen and (min-width: 1440px) {
      width: 146px;
    } */
  }
`,na=({id:n,title:t,calories:i,category:r,weight:e,recommended:a})=>{const[u,l]=m.useState(!1),[o,s]=m.useState(!1),c=()=>{l(v=>!v)},d=()=>{s(v=>!v)};return h.jsxs(Yo,{children:[u&&h.jsx(ze,{onClick:c,children:h.jsx(Ho,{id:n,title:t,calories:i,onClick:c,onClickSuccess:d})}),o&&h.jsx(ze,{onClick:d,children:h.jsx(Go,{onClick:d})}),h.jsxs("section",{children:[h.jsxs(qo,{children:[h.jsx(Ko,{children:h.jsx("p",{children:"DIET"})}),h.jsxs(Xo,{children:[h.jsx("div",{}),h.jsx("p",{children:a?"Recommended":"Not recommended"}),h.jsxs(Qo,{type:"button",onClick:c,children:[h.jsx("span",{children:"Add"}),h.jsx("svg",{children:h.jsx("use",{href:`${re}#icon-arrow`})})]})]})]}),h.jsxs(Jo,{children:[h.jsx(Zo,{children:h.jsx("svg",{children:h.jsx("use",{href:`${re}#icon-run`})})}),h.jsx("h2",{children:t})]}),h.jsxs(ea,{children:[h.jsx("li",{children:h.jsxs("p",{children:["Calories:",h.jsx("span",{children:i})]})}),h.jsx("li",{children:h.jsxs(ta,{children:["Category:",h.jsx("span",{children:r})]})}),h.jsx("li",{children:h.jsxs("p",{children:["Weight:",h.jsx("span",{children:e})]})})]})]})]},n)},ia=M.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;
    width: 704px;
    max-height: 660px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-main-two);
      border-radius: 12px;
      /* height: 20px; */
    }
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    max-height: 487px;
  }
`,ra=n=>`${n[0].toUpperCase()}${n.slice(1)}`,oa=()=>{const n=Me(),t=z(un),i=z(st),r=z(lt),e=z(sn),a=z(ln);return z(cn),m.useEffect(()=>{n(dn({recommended:r.value,category:i.value,query:t}))},[r,i,t,n]),h.jsx(ia,{children:a.map(u=>h.jsx(na,{id:u._id,title:u.title,calories:u.calories,category:ra(u.category.name),weight:u.weight,recommended:e?!u.groupBloodNotAllowed[e]:!1},u._id))})},aa=_.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,ua=_.div`
  position: relative;
`,sa=_.span`
  @media screen and (max-width: 1439px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: -32px;
    right: 0px;
    margin-bottom: 8px;
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28;
  }
`,fa=()=>{const n=z(pn),t=z(fn);return h.jsx(hn,{children:h.jsxs(ua,{children:[h.jsx(sa,{children:"Filters"}),h.jsx(aa,{children:h.jsx(Sn,{children:"Products"})}),h.jsx(yo,{}),n&&!t&&h.jsx(mn,{}),h.jsx(oa,{})]})})};export{fa as default};
