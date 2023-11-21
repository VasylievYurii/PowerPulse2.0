import{o as Wt,r as m,E as _t,p as Gt,q as Yt,_ as C,t as qt,v as ue,w as S,x as Kt,y as W,d as U,z as st,A as lt,u as Me,B as Xt,C as Qt,j as h,a as re,D as Jt,F as Zt,G as en,H as tn,s as A,I as nn,b as rn,J as on,K as ze,M as an,N as un,O as sn,P as ln,R as cn,T as dn,S as pn}from"./index-a265c336.js";import{_ as ct,a as fn,b as hn,c as mn,d as vn,e as gn,f as bn}from"./createClass-8963bec4.js";import{T as xn}from"./TitlePage-f5bac531.js";import{F as En,E as Cn,c as Sn,b as Fn,e as wn,f as yn}from"./index.esm-aee7dcf0.js";function On(n,t){if(n==null)return{};var i={},r=Object.keys(n),e,a;for(a=0;a<r.length;a++)e=r[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}var E=function(t,i){var r=arguments;if(i==null||!Wt.call(i,"css"))return m.createElement.apply(void 0,r);var e=r.length,a=new Array(e);a[0]=_t,a[1]=Gt(t,i);for(var u=2;u<e;u++)a[u]=r[u];return m.createElement.apply(null,a)};function Ve(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return Yt(t)}var Dn=function(){var t=Ve.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function In(n){if(Array.isArray(n))return n}function An(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,e,a,u,l=[],o=!0,s=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;o=!1}else for(;!(o=(r=a.call(i)).done)&&(l.push(r.value),l.length!==t);o=!0);}catch(c){s=!0,e=c}finally{try{if(!o&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw e}}return l}}function Mn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,t){return In(n)||An(n,t)||ct(n,t)||Mn()}function Q(n,t){if(n==null)return{};var i=On(n,t),r,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var Vn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Pn(n){var t=n.defaultInputValue,i=t===void 0?"":t,r=n.defaultMenuIsOpen,e=r===void 0?!1:r,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,o=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,v=n.onMenuOpen,p=n.value,g=Q(n,Vn),x=m.useState(l!==void 0?l:i),f=X(x,2),b=f[0],F=f[1],y=m.useState(o!==void 0?o:e),O=X(y,2),D=O[0],I=O[1],M=m.useState(p!==void 0?p:u),w=X(M,2),V=w[0],T=w[1],j=m.useCallback(function($,J){typeof s=="function"&&s($,J),T($)},[s]),B=m.useCallback(function($,J){var Z;typeof c=="function"&&(Z=c($,J)),F(Z!==void 0?Z:$)},[c]),G=m.useCallback(function(){typeof v=="function"&&v(),I(!0)},[v]),Y=m.useCallback(function(){typeof d=="function"&&d(),I(!1)},[d]),k=l!==void 0?l:b,L=o!==void 0?o:D,_=p!==void 0?p:V;return C(C({},g),{},{inputValue:k,menuIsOpen:L,onChange:j,onInputChange:B,onMenuClose:Y,onMenuOpen:G,value:_})}function Ln(n){if(Array.isArray(n))return fn(n)}function Rn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function kn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(n){return Ln(n)||Rn(n)||ct(n)||kn()}function Tn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Bn=Math.min,jn=Math.max,fe=Math.round,se=Math.floor,he=n=>({x:n,y:n});function Hn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function dt(n){return ft(n)?(n.nodeName||"").toLowerCase():"#document"}function N(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function pt(n){var t;return(t=(ft(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function ft(n){return n instanceof Node||n instanceof N(n).Node}function De(n){return n instanceof Element||n instanceof N(n).Element}function Le(n){return n instanceof HTMLElement||n instanceof N(n).HTMLElement}function Ue(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof N(n).ShadowRoot}function ht(n){const{overflow:t,overflowX:i,overflowY:r,display:e}=Re(n);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!["inline","contents"].includes(e)}function $n(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function zn(n){return["html","body","#document"].includes(dt(n))}function Re(n){return N(n).getComputedStyle(n)}function Un(n){if(dt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ue(n)&&n.host||pt(n);return Ue(t)?t.host:t}function mt(n){const t=Un(n);return zn(t)?n.ownerDocument?n.ownerDocument.body:n.body:Le(t)&&ht(t)?t:mt(t)}function me(n,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=mt(n),a=e===((r=n.ownerDocument)==null?void 0:r.body),u=N(e);return a?t.concat(u,u.visualViewport||[],ht(e)?e:[],u.frameElement&&i?me(u.frameElement):[]):t.concat(e,me(e,[],i))}function Nn(n){const t=Re(n);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const e=Le(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:r,l=fe(i)!==a||fe(r)!==u;return l&&(i=a,r=u),{width:i,height:r,$:l}}function ke(n){return De(n)?n:n.contextElement}function Ee(n){const t=ke(n);if(!Le(t))return he(1);const i=t.getBoundingClientRect(),{width:r,height:e,$:a}=Nn(t);let u=(a?fe(i.width):i.width)/r,l=(a?fe(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const Wn=he(0);function _n(n){const t=N(n);return!$n()||!t.visualViewport?Wn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Gn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==N(n)?!1:t}function Ne(n,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=ke(n);let u=he(1);t&&(r?De(r)&&(u=Ee(r)):u=Ee(n));const l=Gn(a,i,r)?_n(a):he(0);let o=(e.left+l.x)/u.x,s=(e.top+l.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const v=N(a),p=r&&De(r)?N(r):r;let g=v.frameElement;for(;g&&r&&p!==v;){const x=Ee(g),f=g.getBoundingClientRect(),b=Re(g),F=f.left+(g.clientLeft+parseFloat(b.paddingLeft))*x.x,y=f.top+(g.clientTop+parseFloat(b.paddingTop))*x.y;o*=x.x,s*=x.y,c*=x.x,d*=x.y,o+=F,s+=y,g=N(g).frameElement}}return Hn({width:c,height:d,x:o,y:s})}function Yn(n,t){let i=null,r;const e=pt(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function u(l,o){l===void 0&&(l=!1),o===void 0&&(o=1),a();const{left:s,top:c,width:d,height:v}=n.getBoundingClientRect();if(l||t(),!d||!v)return;const p=se(c),g=se(e.clientWidth-(s+d)),x=se(e.clientHeight-(c+v)),f=se(s),F={rootMargin:-p+"px "+-g+"px "+-x+"px "+-f+"px",threshold:jn(0,Bn(1,o))||1};let y=!0;function O(D){const I=D[0].intersectionRatio;if(I!==o){if(!y)return u();I?u(!1,I):r=setTimeout(()=>{u(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(O,{...F,root:e.ownerDocument})}catch{i=new IntersectionObserver(O,F)}i.observe(n)}return u(!0),a}function qn(n,t,i,r){r===void 0&&(r={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,s=ke(n),c=e||a?[...s?me(s):[],...me(t)]:[];c.forEach(b=>{e&&b.addEventListener("scroll",i,{passive:!0}),a&&b.addEventListener("resize",i)});const d=s&&l?Yn(s,i):null;let v=-1,p=null;u&&(p=new ResizeObserver(b=>{let[F]=b;F&&F.target===s&&p&&(p.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{p&&p.observe(t)})),i()}),s&&!o&&p.observe(s),p.observe(t));let g,x=o?Ne(n):null;o&&f();function f(){const b=Ne(n);x&&(b.x!==x.x||b.y!==x.y||b.width!==x.width||b.height!==x.height)&&i(),x=b,g=requestAnimationFrame(f)}return i(),()=>{c.forEach(b=>{e&&b.removeEventListener("scroll",i),a&&b.removeEventListener("resize",i)}),d&&d(),p&&p.disconnect(),p=null,o&&cancelAnimationFrame(g)}}var Ie=m.useLayoutEffect,Kn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function Xn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function Qn(n,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),e=2;e<i;e++)r[e-2]=arguments[e];var a=[].concat(r);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(Xn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var We=function(t){return ai(t)?t.filter(Boolean):qt(t)==="object"&&t!==null?[t]:[]},vt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=Q(t,Kn);return C({},i)},P=function(t,i,r){var e=t.cx,a=t.getStyles,u=t.getClassNames,l=t.className;return{css:a(i,t),className:e(r??{},u(i,t),l)}};function xe(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Jn(n){return xe(n)?window.innerHeight:n.clientHeight}function gt(n){return xe(n)?window.pageYOffset:n.scrollTop}function ge(n,t){if(xe(n)){window.scrollTo(0,t);return}n.scrollTop=t}function Zn(n){var t=getComputedStyle(n),i=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function ei(n,t,i,r){return i*((n=n/r-1)*n*n+1)+t}function le(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,e=gt(n),a=t-e,u=10,l=0;function o(){l+=u;var s=ei(l,e,a,i);ge(n,s),l<i?window.requestAnimationFrame(o):r(n)}o()}function _e(n,t){var i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),e=t.offsetHeight/3;r.bottom+e>i.bottom?ge(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):r.top-e<i.top&&ge(n,Math.max(t.offsetTop-e,0))}function ti(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ge(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function ni(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var bt=!1,ii={get passive(){return bt=!0}},ce=typeof window<"u"?window:{};ce.addEventListener&&ce.removeEventListener&&(ce.addEventListener("p",ve,ii),ce.removeEventListener("p",ve,!1));var ri=bt;function oi(n){return n!=null}function ai(n){return Array.isArray(n)}function de(n,t,i){return n?t:i}var ui=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),e=1;e<i;e++)r[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var l=X(u,1),o=l[0];return!r.includes(o)});return a.reduce(function(u,l){var o=X(l,2),s=o[0],c=o[1];return u[s]=c,u},{})},si=["children","innerProps"],li=["children","innerProps"];function ci(n){var t=n.maxHeight,i=n.menuEl,r=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,o=Zn(i),s={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return s;var c=o.getBoundingClientRect(),d=c.height,v=i.getBoundingClientRect(),p=v.bottom,g=v.height,x=v.top,f=i.offsetParent.getBoundingClientRect(),b=f.top,F=u?window.innerHeight:Jn(o),y=gt(o),O=parseInt(getComputedStyle(i).marginBottom,10),D=parseInt(getComputedStyle(i).marginTop,10),I=b-D,M=F-x,w=I+y,V=d-y-x,T=p-F+y+O,j=y+x-D,B=160;switch(e){case"auto":case"bottom":if(M>=g)return{placement:"bottom",maxHeight:t};if(V>=g&&!u)return a&&le(o,T,B),{placement:"bottom",maxHeight:t};if(!u&&V>=r||u&&M>=r){a&&le(o,T,B);var G=u?M-O:V-O;return{placement:"bottom",maxHeight:G}}if(e==="auto"||u){var Y=t,k=u?I:w;return k>=r&&(Y=Math.min(k-O-l,t)),{placement:"top",maxHeight:Y}}if(e==="bottom")return a&&ge(o,T),{placement:"bottom",maxHeight:t};break;case"top":if(I>=g)return{placement:"top",maxHeight:t};if(w>=g&&!u)return a&&le(o,j,B),{placement:"top",maxHeight:t};if(!u&&w>=r||u&&I>=r){var L=t;return(!u&&w>=r||u&&I>=r)&&(L=u?I-D:w-D),a&&le(o,j,B),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function di(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var xt=function(t){return t==="auto"?"bottom":t},pi=function(t,i){var r,e=t.placement,a=t.theme,u=a.borderRadius,l=a.spacing,o=a.colors;return C((r={label:"menu"},ue(r,di(e),"100%"),ue(r,"position","absolute"),ue(r,"width","100%"),ue(r,"zIndex",1),r),i?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Et=m.createContext(null),fi=function(t){var i=t.children,r=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,l=t.menuShouldScrollIntoView,o=t.theme,s=m.useContext(Et)||{},c=s.setPortalPlacement,d=m.useRef(null),v=m.useState(e),p=X(v,2),g=p[0],x=p[1],f=m.useState(null),b=X(f,2),F=b[0],y=b[1],O=o.spacing.controlHeight;return Ie(function(){var D=d.current;if(D){var I=u==="fixed",M=l&&!I,w=ci({maxHeight:e,menuEl:D,minHeight:r,placement:a,shouldScroll:M,isFixedPosition:I,controlHeight:O});x(w.maxHeight),y(w.placement),c==null||c(w.placement)}},[e,a,u,l,r,c,O]),i({ref:d,placerProps:C(C({},t),{},{placement:F||xt(a),maxHeight:g})})},hi=function(t){var i=t.children,r=t.innerRef,e=t.innerProps;return E("div",S({},P(t,"menu",{menu:!0}),{ref:r},e),i)},mi=hi,vi=function(t,i){var r=t.maxHeight,e=t.theme.spacing.baseUnit;return C({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},gi=function(t){var i=t.children,r=t.innerProps,e=t.innerRef,a=t.isMulti;return E("div",S({},P(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},r),i)},Ct=function(t,i){var r=t.theme,e=r.spacing.baseUnit,a=r.colors;return C({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},bi=Ct,xi=Ct,Ei=function(t){var i=t.children,r=i===void 0?"No options":i,e=t.innerProps,a=Q(t,si);return E("div",S({},P(C(C({},a),{},{children:r,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),r)},Ci=function(t){var i=t.children,r=i===void 0?"Loading...":i,e=t.innerProps,a=Q(t,li);return E("div",S({},P(C(C({},a),{},{children:r,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),r)},Si=function(t){var i=t.rect,r=t.offset,e=t.position;return{left:i.left,position:e,top:r,width:i.width,zIndex:1}},Fi=function(t){var i=t.appendTo,r=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,l=t.menuPosition,o=m.useRef(null),s=m.useRef(null),c=m.useState(xt(u)),d=X(c,2),v=d[0],p=d[1],g=m.useMemo(function(){return{setPortalPlacement:p}},[]),x=m.useState(null),f=X(x,2),b=f[0],F=f[1],y=m.useCallback(function(){if(e){var M=ti(e),w=l==="fixed"?0:window.pageYOffset,V=M[v]+w;(V!==(b==null?void 0:b.offset)||M.left!==(b==null?void 0:b.rect.left)||M.width!==(b==null?void 0:b.rect.width))&&F({offset:V,rect:M})}},[e,l,v,b==null?void 0:b.offset,b==null?void 0:b.rect.left,b==null?void 0:b.rect.width]);Ie(function(){y()},[y]);var O=m.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&o.current&&(s.current=qn(e,o.current,y,{elementResize:"ResizeObserver"in window}))},[e,y]);Ie(function(){O()},[O]);var D=m.useCallback(function(M){o.current=M,O()},[O]);if(!i&&l!=="fixed"||!b)return null;var I=E("div",S({ref:D},P(C(C({},t),{},{offset:b.offset,position:l,rect:b.rect}),"menuPortal",{"menu-portal":!0}),a),r);return E(Et.Provider,{value:g},i?Kt.createPortal(I,i):I)},wi=function(t){var i=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},yi=function(t){var i=t.children,r=t.innerProps,e=t.isDisabled,a=t.isRtl;return E("div",S({},P(t,"container",{"--is-disabled":e,"--is-rtl":a}),r),i)},Oi=function(t,i){var r=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return C({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Di=function(t){var i=t.children,r=t.innerProps,e=t.isMulti,a=t.hasValue;return E("div",S({},P(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),r),i)},Ii=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Ai=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"indicatorsContainer",{indicators:!0}),r),i)},Ye,Mi=["size"],Vi=["innerProps","isRtl","size"],Pi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},St=function(t){var i=t.size,r=Q(t,Mi);return E("svg",S({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Pi},r))},Te=function(t){return E(St,S({size:20},t),E("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ft=function(t){return E(St,S({size:20},t),E("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},wt=function(t,i){var r=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?u.neutral60:u.neutral20,padding:a*2,":hover":{color:r?u.neutral80:u.neutral40}})},Li=wt,Ri=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||E(Ft,null))},ki=wt,Ti=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||E(Te,null))},Bi=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},ji=function(t){var i=t.innerProps;return E("span",S({},i,P(t,"indicatorSeparator",{"indicator-separator":!0})))},Hi=Dn(Ye||(Ye=Tn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),$i=function(t,i){var r=t.isFocused,e=t.size,a=t.theme,u=a.colors,l=a.spacing.baseUnit;return C({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?u.neutral60:u.neutral20,padding:l*2})},Ce=function(t){var i=t.delay,r=t.offset;return E("span",{css:Ve({animation:"".concat(Hi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},zi=function(t){var i=t.innerProps,r=t.isRtl,e=t.size,a=e===void 0?4:e,u=Q(t,Vi);return E("div",S({},P(C(C({},u),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),E(Ce,{delay:0,offset:r}),E(Ce,{delay:160,offset:!0}),E(Ce,{delay:320,offset:!r}))},Ui=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,l=a.borderRadius,o=a.spacing;return C({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:e?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Ni=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,l=t.menuIsOpen;return E("div",S({ref:a},P(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":e,"control--menu-is-open":l}),u,{"aria-disabled":r||void 0}),i)},Wi=Ni,_i=["data"],Gi=function(t,i){var r=t.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Yi=function(t){var i=t.children,r=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,l=t.headingProps,o=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return E("div",S({},P(t,"group",{group:!0}),o),E(u,S({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:r}),s),E("div",null,i))},qi=function(t,i){var r=t.theme,e=r.colors,a=r.spacing;return C({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Ki=function(t){var i=vt(t);i.data;var r=Q(i,_i);return E("div",S({},P(t,"groupHeading",{"group-heading":!0}),r))},Xi=Yi,Qi=["innerRef","isDisabled","isHidden","inputClassName"],Ji=function(t,i){var r=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,l=a.colors;return C(C({visibility:r?"hidden":"visible",transform:e?"translateZ(0)":""},Zi),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},yt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Zi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":C({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},yt)},er=function(t){return C({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},yt)},tr=function(t){var i=t.cx,r=t.value,e=vt(t),a=e.innerRef,u=e.isDisabled,l=e.isHidden,o=e.inputClassName,s=Q(e,Qi);return E("div",S({},P(t,"input",{"input-container":!0}),{"data-value":r||""}),E("input",S({className:i({input:!0},o),ref:a,style:er(l),disabled:u},s)))},nr=tr,ir=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors;return C({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},rr=function(t,i){var r=t.theme,e=r.borderRadius,a=r.colors,u=t.cropWithEllipsis;return C({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},or=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors,l=t.isFocused;return C({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Ot=function(t){var i=t.children,r=t.innerProps;return E("div",r,i)},ar=Ot,ur=Ot;function sr(n){var t=n.children,i=n.innerProps;return E("div",S({role:"button"},i),t||E(Te,{size:14}))}var lr=function(t){var i=t.children,r=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,l=t.removeProps,o=t.selectProps,s=r.Container,c=r.Label,d=r.Remove;return E(s,{data:e,innerProps:C(C({},P(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},E(c,{data:e,innerProps:C({},P(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},i),E(d,{data:e,innerProps:C(C({},P(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:o}))},cr=lr,dr=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,l=u.spacing,o=u.colors;return C({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?o.primary:e?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},pr=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,l=t.innerProps;return E("div",S({},P(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":r},l),i)},fr=pr,hr=function(t,i){var r=t.theme,e=r.spacing,a=r.colors;return C({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},mr=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"placeholder",{placeholder:!0}),r),i)},vr=mr,gr=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return C({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},br=function(t){var i=t.children,r=t.isDisabled,e=t.innerProps;return E("div",S({},P(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),e),i)},xr=br,Er={ClearIndicator:Ti,Control:Wi,DropdownIndicator:Ri,DownChevron:Ft,CrossIcon:Te,Group:Xi,GroupHeading:Ki,IndicatorsContainer:Ai,IndicatorSeparator:ji,Input:nr,LoadingIndicator:zi,Menu:mi,MenuList:gi,MenuPortal:Fi,LoadingMessage:Ci,NoOptionsMessage:Ei,MultiValue:cr,MultiValueContainer:ar,MultiValueLabel:ur,MultiValueRemove:sr,Option:fr,Placeholder:vr,SelectContainer:yi,SingleValue:xr,ValueContainer:Di},Cr=function(t){return C(C({},Er),t.components)},qe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Sr(n,t){return!!(n===t||qe(n)&&qe(t))}function Fr(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!Sr(n[i],t[i]))return!1;return!0}function wr(n,t){t===void 0&&(t=Fr);var i=null;function r(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return r.clear=function(){i=null},r}var yr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Or=function(t){return E("span",S({css:yr},t))},Ke=Or,Dr={guidance:function(t){var i=t.isSearchable,r=t.isMulti,e=t.tabSelectsValue,a=t.context,u=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,r=t.label,e=r===void 0?"":r,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,r=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,l=t.selectValue,o=t.isDisabled,s=t.isSelected,c=t.isAppleDevice,d=function(x,f){return x&&x.length?"".concat(x.indexOf(f)+1," of ").concat(x.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,r),".");if(i==="menu"&&c){var v=o?" disabled":"",p="".concat(s?" selected":"").concat(v);return"".concat(u).concat(p,", ").concat(d(e,r),".")}return""},onFilter:function(t){var i=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},Ir=function(t){var i=t.ariaSelection,r=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,l=t.selectValue,o=t.selectProps,s=t.id,c=t.isAppleDevice,d=o.ariaLiveMessages,v=o.getOptionLabel,p=o.inputValue,g=o.isMulti,x=o.isOptionDisabled,f=o.isSearchable,b=o.menuIsOpen,F=o.options,y=o.screenReaderStatus,O=o.tabSelectsValue,D=o.isLoading,I=o["aria-label"],M=o["aria-live"],w=m.useMemo(function(){return C(C({},Dr),d||{})},[d]),V=m.useMemo(function(){var k="";if(i&&w.onChange){var L=i.option,_=i.options,$=i.removedValue,J=i.removedValues,Z=i.value,oe=function(K){return Array.isArray(K)?null:K},R=$||L||oe(Z),H=R?v(R):"",q=_||J||void 0,ee=q?q.map(v):[],z=C({isDisabled:R&&x(R,l),label:H,labels:ee},i);k=w.onChange(z)}return k},[i,w,x,l,v]),T=m.useMemo(function(){var k="",L=r||e,_=!!(r&&l&&l.includes(r));if(L&&w.onFocus){var $={focused:L,label:v(L),isDisabled:x(L,l),isSelected:_,options:a,context:L===r?"menu":"value",selectValue:l,isAppleDevice:c};k=w.onFocus($)}return k},[r,e,v,x,w,a,l,c]),j=m.useMemo(function(){var k="";if(b&&F.length&&!D&&w.onFilter){var L=y({count:a.length});k=w.onFilter({inputValue:p,resultsMessage:L})}return k},[a,p,b,w,F,y,D]),B=(i==null?void 0:i.action)==="initial-input-focus",G=m.useMemo(function(){var k="";if(w.guidance){var L=e?"value":b?"menu":"input";k=w.guidance({"aria-label":I,context:L,isDisabled:r&&x(r,l),isMulti:g,isSearchable:f,tabSelectsValue:O,isInitialFocus:B})}return k},[I,r,e,g,x,f,b,w,l,O,B]),Y=E(m.Fragment,null,E("span",{id:"aria-selection"},V),E("span",{id:"aria-focused"},T),E("span",{id:"aria-results"},j),E("span",{id:"aria-guidance"},G));return E(m.Fragment,null,E(Ke,{id:s},B&&Y),E(Ke,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!B&&Y))},Ar=Ir,Ae=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Mr=new RegExp("["+Ae.map(function(n){return n.letters}).join("")+"]","g"),Dt={};for(var Se=0;Se<Ae.length;Se++)for(var Fe=Ae[Se],we=0;we<Fe.letters.length;we++)Dt[Fe.letters[we]]=Fe.base;var It=function(t){return t.replace(Mr,function(i){return Dt[i]})},Vr=wr(It),Xe=function(t){return t.replace(/^\s+|\s+$/g,"")},Pr=function(t){return"".concat(t.label," ").concat(t.value)},Lr=function(t){return function(i,r){if(i.data.__isNew__)return!0;var e=C({ignoreCase:!0,ignoreAccents:!0,stringify:Pr,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,l=e.stringify,o=e.trim,s=e.matchFrom,c=o?Xe(r):r,d=o?Xe(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Vr(c),d=It(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Rr=["innerRef"];function kr(n){var t=n.innerRef,i=Q(n,Rr),r=ui(i,"onExited","in","enter","exit","appear");return E("input",S({ref:t},r,{css:Ve({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Tr=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Br(n){var t=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=m.useRef(!1),l=m.useRef(!1),o=m.useRef(0),s=m.useRef(null),c=m.useCallback(function(f,b){if(s.current!==null){var F=s.current,y=F.scrollTop,O=F.scrollHeight,D=F.clientHeight,I=s.current,M=b>0,w=O-D-y,V=!1;w>b&&u.current&&(r&&r(f),u.current=!1),M&&l.current&&(a&&a(f),l.current=!1),M&&b>w?(i&&!u.current&&i(f),I.scrollTop=O,V=!0,u.current=!0):!M&&-b>y&&(e&&!l.current&&e(f),I.scrollTop=0,V=!0,l.current=!0),V&&Tr(f)}},[i,r,e,a]),d=m.useCallback(function(f){c(f,f.deltaY)},[c]),v=m.useCallback(function(f){o.current=f.changedTouches[0].clientY},[]),p=m.useCallback(function(f){var b=o.current-f.changedTouches[0].clientY;c(f,b)},[c]),g=m.useCallback(function(f){if(f){var b=ri?{passive:!1}:!1;f.addEventListener("wheel",d,b),f.addEventListener("touchstart",v,b),f.addEventListener("touchmove",p,b)}},[p,v,d]),x=m.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",v,!1),f.removeEventListener("touchmove",p,!1))},[p,v,d]);return m.useEffect(function(){if(t){var f=s.current;return g(f),function(){x(f)}}},[t,g,x]),function(f){s.current=f}}var Qe=["boxSizing","height","overflow","paddingRight","position"],Je={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ze(n){n.preventDefault()}function et(n){n.stopPropagation()}function tt(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function nt(){return"ontouchstart"in window||navigator.maxTouchPoints}var it=!!(typeof window<"u"&&window.document&&window.document.createElement),ie=0,ne={capture:!1,passive:!1};function jr(n){var t=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,e=m.useRef({}),a=m.useRef(null),u=m.useCallback(function(o){if(it){var s=document.body,c=s&&s.style;if(r&&Qe.forEach(function(g){var x=c&&c[g];e.current[g]=x}),r&&ie<1){var d=parseInt(e.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,p=window.innerWidth-v+d||0;Object.keys(Je).forEach(function(g){var x=Je[g];c&&(c[g]=x)}),c&&(c.paddingRight="".concat(p,"px"))}s&&nt()&&(s.addEventListener("touchmove",Ze,ne),o&&(o.addEventListener("touchstart",tt,ne),o.addEventListener("touchmove",et,ne))),ie+=1}},[r]),l=m.useCallback(function(o){if(it){var s=document.body,c=s&&s.style;ie=Math.max(ie-1,0),r&&ie<1&&Qe.forEach(function(d){var v=e.current[d];c&&(c[d]=v)}),s&&nt()&&(s.removeEventListener("touchmove",Ze,ne),o&&(o.removeEventListener("touchstart",tt,ne),o.removeEventListener("touchmove",et,ne)))}},[r]);return m.useEffect(function(){if(t){var o=a.current;return u(o),function(){l(o)}}},[t,u,l]),function(o){a.current=o}}var Hr=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},$r={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function zr(n){var t=n.children,i=n.lockEnabled,r=n.captureEnabled,e=r===void 0?!0:r,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,o=n.onTopLeave,s=Br({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:o}),c=jr({isEnabled:i}),d=function(p){s(p),c(p)};return E(m.Fragment,null,i&&E("div",{onClick:Hr,css:$r}),t(d))}var Ur={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Nr=function(t){var i=t.name,r=t.onFocus;return E("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Ur,value:"",onChange:function(){}})},Wr=Nr;function Be(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function _r(){return Be(/^iPhone/i)}function At(){return Be(/^Mac/i)}function Gr(){return Be(/^iPad/i)||At()&&navigator.maxTouchPoints>1}function Yr(){return _r()||Gr()}function qr(){return At()||Yr()}var Kr=function(t){return t.label},Xr=function(t){return t.label},Qr=function(t){return t.value},Jr=function(t){return!!t.isDisabled},Zr={clearIndicator:ki,container:wi,control:Ui,dropdownIndicator:Li,group:Gi,groupHeading:qi,indicatorsContainer:Ii,indicatorSeparator:Bi,input:Ji,loadingIndicator:$i,loadingMessage:xi,menu:pi,menuList:vi,menuPortal:Si,multiValue:ir,multiValueLabel:rr,multiValueRemove:or,noOptionsMessage:bi,option:dr,placeholder:hr,singleValue:gr,valueContainer:Oi},eo={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},to=4,Mt=4,no=38,io=Mt*2,ro={baseUnit:Mt,controlHeight:no,menuGutter:io},ye={borderRadius:to,colors:eo,spacing:ro},oo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ge(),captureMenuScroll:!Ge(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Lr(),formatGroupLabel:Kr,getOptionLabel:Xr,getOptionValue:Qr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Jr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!ni(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function rt(n,t,i,r){var e=Lt(n,t,i),a=Rt(n,t,i),u=Pt(n,t),l=be(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:l,index:r}}function pe(n,t){return n.options.map(function(i,r){if("options"in i){var e=i.options.map(function(u,l){return rt(n,u,t,l)}).filter(function(u){return at(n,u)});return e.length>0?{type:"group",data:i,options:e,index:r}:void 0}var a=rt(n,i,t,r);return at(n,a)?a:void 0}).filter(oi)}function Vt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,Pe(i.options.map(function(r){return r.data}))):t.push(i.data),t},[])}function ot(n,t){return n.reduce(function(i,r){return r.type==="group"?i.push.apply(i,Pe(r.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(r.index,"-").concat(e.index)}}))):i.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),i},[])}function ao(n,t){return Vt(pe(n,t))}function at(n,t){var i=n.inputValue,r=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,l=t.value;return(!Tt(n)||!a)&&kt(n,{label:u,value:l,data:e},r)}function uo(n,t){var i=n.focusedValue,r=n.selectValue,e=r.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function so(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Oe=function(t,i){var r,e=(r=t.find(function(a){return a.data===i}))===null||r===void 0?void 0:r.id;return e||null},Pt=function(t,i){return t.getOptionLabel(i)},be=function(t,i){return t.getOptionValue(i)};function Lt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function Rt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var r=be(n,t);return i.some(function(e){return be(n,e)===r})}function kt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Tt=function(t){var i=t.hideSelectedOptions,r=t.isMulti;return i===void 0?r:i},lo=1,Bt=function(n){hn(i,n);var t=mn(i);function i(r){var e;if(vn(this,i),e=t.call(this,r),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=qr(),e.controlRef=null,e.getControlRef=function(o){e.controlRef=o},e.focusedOptionRef=null,e.getFocusedOptionRef=function(o){e.focusedOptionRef=o},e.menuListRef=null,e.getMenuListRef=function(o){e.menuListRef=o},e.inputRef=null,e.getInputRef=function(o){e.inputRef=o},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(o,s){var c=e.props,d=c.onChange,v=c.name;s.name=v,e.ariaOnChange(o,s),d(o,s)},e.setValue=function(o,s,c){var d=e.props,v=d.closeMenuOnSelect,p=d.isMulti,g=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:g}),v&&(e.setState({inputIsHiddenAfterUpdate:!p}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(o,{action:s,option:c})},e.selectOption=function(o){var s=e.props,c=s.blurInputOnSelect,d=s.isMulti,v=s.name,p=e.state.selectValue,g=d&&e.isOptionSelected(o,p),x=e.isOptionDisabled(o,p);if(g){var f=e.getOptionValue(o);e.setValue(p.filter(function(b){return e.getOptionValue(b)!==f}),"deselect-option",o)}else if(!x)d?e.setValue([].concat(Pe(p),[o]),"select-option",o):e.setValue(o,"select-option");else{e.ariaOnChange(o,{action:"select-option",option:o,name:v});return}c&&e.blurInput()},e.removeValue=function(o){var s=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(o),v=c.filter(function(g){return e.getOptionValue(g)!==d}),p=de(s,v,v[0]||null);e.onChange(p,{action:"remove-value",removedValue:o}),e.focusInput()},e.clearValue=function(){var o=e.state.selectValue;e.onChange(de(e.props.isMulti,[],null),{action:"clear",removedValues:o})},e.popValue=function(){var o=e.props.isMulti,s=e.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),v=de(o,d,d[0]||null);e.onChange(v,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(o){return Oe(e.state.focusableOptionsWithIds,o)},e.getFocusableOptionsWithIds=function(){return ot(pe(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return Qn.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(o){return Pt(e.props,o)},e.getOptionValue=function(o){return be(e.props,o)},e.getStyles=function(o,s){var c=e.props.unstyled,d=Zr[o](s,c);d.boxSizing="border-box";var v=e.props.styles[o];return v?v(d,s):d},e.getClassNames=function(o,s){var c,d;return(c=(d=e.props.classNames)[o])===null||c===void 0?void 0:c.call(d,s)},e.getElementId=function(o){return"".concat(e.state.instancePrefix,"-").concat(o)},e.getComponents=function(){return Cr(e.props)},e.buildCategorizedOptions=function(){return pe(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return Vt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(o,s){e.setState({ariaSelection:C({value:o},s)})},e.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(o){e.blockOptionHover=!1},e.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},e.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!e.props.isDisabled){var s=e.props,c=s.isMulti,d=s.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),o.preventDefault()}},e.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(e.clearValue(),o.preventDefault(),e.openAfterFocus=!1,o.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(o){typeof e.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&xe(o.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(o)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(o){var s=o.touches,c=s&&s.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(o){var s=o.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),v=Math.abs(c.clientY-e.initialTouchY),p=5;e.userIsDragging=d>p||v>p}},e.onTouchEnd=function(o){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(o.target)&&e.menuListRef&&!e.menuListRef.contains(o.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(o){e.userIsDragging||e.onControlMouseDown(o)},e.onClearIndicatorTouchEnd=function(o){e.userIsDragging||e.onClearIndicatorMouseDown(o)},e.onDropdownIndicatorTouchEnd=function(o){e.userIsDragging||e.onDropdownIndicatorMouseDown(o)},e.handleInputChange=function(o){var s=e.props.inputValue,c=o.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(o){e.props.onFocus&&e.props.onFocus(o),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(o){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(o),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(o){if(!(e.blockOptionHover||e.state.focusedOption===o)){var s=e.getFocusableOptions(),c=s.indexOf(o);e.setState({focusedOption:o,focusedOptionId:c>-1?e.getFocusedOptionId(o):null})}},e.shouldHideSelectedOptions=function(){return Tt(e.props)},e.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),e.focus()},e.onKeyDown=function(o){var s=e.props,c=s.isMulti,d=s.backspaceRemovesValue,v=s.escapeClearsValue,p=s.inputValue,g=s.isClearable,x=s.isDisabled,f=s.menuIsOpen,b=s.onKeyDown,F=s.tabSelectsValue,y=s.openMenuOnFocus,O=e.state,D=O.focusedOption,I=O.focusedValue,M=O.selectValue;if(!x&&!(typeof b=="function"&&(b(o),o.defaultPrevented))){switch(e.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||p)return;e.focusValue("previous");break;case"ArrowRight":if(!c||p)return;e.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(I)e.removeValue(I);else{if(!d)return;c?e.popValue():g&&e.clearValue()}break;case"Tab":if(e.isComposing||o.shiftKey||!f||!F||!D||y&&e.isOptionSelected(D,M))return;e.selectOption(D);break;case"Enter":if(o.keyCode===229)break;if(f){if(!D||e.isComposing)return;e.selectOption(D);break}return;case"Escape":f?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:p}),e.onMenuClose()):g&&v&&e.clearValue();break;case" ":if(p)return;if(!f){e.openMenu("first");break}if(!D)return;e.selectOption(D);break;case"ArrowUp":f?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":f?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!f)return;e.focusOption("pageup");break;case"PageDown":if(!f)return;e.focusOption("pagedown");break;case"Home":if(!f)return;e.focusOption("first");break;case"End":if(!f)return;e.focusOption("last");break;default:return}o.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++lo),e.state.selectValue=We(r.value),r.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=u[l],e.state.focusedOptionId=Oe(a,u[l])}return e}return gn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&_e(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&e.isDisabled||o&&l&&!e.menuIsOpen)&&this.focusInput(),o&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(_e(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,l=u.selectValue,o=u.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(l);l||(o=-1);var s=u.length-1,c=-1;if(u.length){switch(e){case"previous":o===0?c=0:o===-1?c=s:c=o-1;break;case"next":o>-1&&o<s&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,s=l.indexOf(u);u||(s=-1),e==="up"?o=s>0?s-1:l.length-1:e==="down"?o=(s+1)%l.length:e==="pageup"?(o=s-a,o<0&&(o=0)):e==="pagedown"?(o=s+a,o>l.length-1&&(o=l.length-1)):e==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ye):C(C({},ye),this.props.theme):ye}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,o=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,p=d.isRtl,g=d.options,x=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:l,getValue:o,hasValue:x,isMulti:v,isRtl:p,options:g,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Lt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return Rt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return kt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,l=e.inputId,o=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,v=e.required,p=this.getComponents(),g=p.Input,x=this.state,f=x.inputIsHidden,b=x.ariaSelection,F=this.commonProps,y=l||this.getElementId("input"),O=C(C(C({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(b==null?void 0:b.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?m.createElement(g,S({},F,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:o},O)):m.createElement(kr,S({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,p=this.props,g=p.controlShouldRenderValue,x=p.isDisabled,f=p.isMulti,b=p.inputValue,F=p.placeholder,y=this.state,O=y.selectValue,D=y.focusedValue,I=y.isFocused;if(!this.hasValue()||!g)return b?null:m.createElement(d,S({},v,{key:"placeholder",isDisabled:x,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),F);if(f)return O.map(function(w,V){var T=w===D,j="".concat(e.getOptionLabel(w),"-").concat(e.getOptionValue(w));return m.createElement(u,S({},v,{components:{Container:l,Label:o,Remove:s},isFocused:T,isDisabled:x,key:j,index:V,removeProps:{onClick:function(){return e.removeValue(w)},onTouchEnd:function(){return e.removeValue(w)},onMouseDown:function(G){G.preventDefault()}},data:w}),e.formatOptionLabel(w,"value"))});if(b)return null;var M=O[0];return m.createElement(c,S({},v,{data:M,isDisabled:x}),this.formatOptionLabel(M,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(a,S({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return m.createElement(a,S({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused;return m.createElement(u,S({},l,{isDisabled:o,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(a,S({},u,{innerProps:s,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,o=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,p=a.Option,g=this.commonProps,x=this.state.focusedOption,f=this.props,b=f.captureMenuScroll,F=f.inputValue,y=f.isLoading,O=f.loadingMessage,D=f.minMenuHeight,I=f.maxMenuHeight,M=f.menuIsOpen,w=f.menuPlacement,V=f.menuPosition,T=f.menuPortalTarget,j=f.menuShouldBlockScroll,B=f.menuShouldScrollIntoView,G=f.noOptionsMessage,Y=f.onMenuScrollToTop,k=f.onMenuScrollToBottom;if(!M)return null;var L=function(H,q){var ee=H.type,z=H.data,te=H.isDisabled,K=H.isSelected,ae=H.label,zt=H.value,je=x===z,He=te?void 0:function(){return e.onOptionHover(z)},Ut=te?void 0:function(){return e.selectOption(z)},$e="".concat(e.getElementId("option"),"-").concat(q),Nt={id:$e,onClick:Ut,onMouseMove:He,onMouseOver:He,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:K};return m.createElement(p,S({},g,{innerProps:Nt,data:z,isDisabled:te,isSelected:K,key:$e,label:ae,type:ee,value:zt,isFocused:je,innerRef:je?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(H.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var H=R.data,q=R.options,ee=R.index,z="".concat(e.getElementId("group"),"-").concat(ee),te="".concat(z,"-heading");return m.createElement(u,S({},g,{key:z,data:H,options:q,Heading:l,headingProps:{id:te,data:R.data},label:e.formatGroupLabel(R.data)}),R.options.map(function(K){return L(K,"".concat(ee,"-").concat(K.index))}))}else if(R.type==="option")return L(R,"".concat(R.index))});else if(y){var $=O({inputValue:F});if($===null)return null;_=m.createElement(d,g,$)}else{var J=G({inputValue:F});if(J===null)return null;_=m.createElement(v,g,J)}var Z={minMenuHeight:D,maxMenuHeight:I,menuPlacement:w,menuPosition:V,menuShouldScrollIntoView:B},oe=m.createElement(fi,S({},g,Z),function(R){var H=R.ref,q=R.placerProps,ee=q.placement,z=q.maxHeight;return m.createElement(o,S({},g,Z,{innerRef:H,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:y,placement:ee}),m.createElement(zr,{captureEnabled:b,onTopArrive:Y,onBottomArrive:k,lockEnabled:j},function(te){return m.createElement(s,S({},g,{innerRef:function(ae){e.getMenuListRef(ae),te(ae)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:e.getElementId("listbox")},isLoading:y,maxHeight:z,focusedOption:x}),_)}))});return T||V==="fixed"?m.createElement(c,S({},g,{appendTo:T,controlElement:this.controlRef,menuPlacement:w,menuPosition:V}),oe):oe}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,l=a.isDisabled,o=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return m.createElement(Wr,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(o)if(u){var v=d.map(function(x){return e.getOptionValue(x)}).join(u);return m.createElement("input",{name:s,type:"hidden",value:v})}else{var p=d.length>0?d.map(function(x,f){return m.createElement("input",{key:"i-".concat(f),name:s,type:"hidden",value:e.getOptionValue(x)})}):m.createElement("input",{name:s,type:"hidden",value:""});return m.createElement("div",null,p)}else{var g=d[0]?this.getOptionValue(d[0]):"";return m.createElement("input",{name:s,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return m.createElement(Ar,S({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:o,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,l=e.SelectContainer,o=e.ValueContainer,s=this.props,c=s.className,d=s.id,v=s.isDisabled,p=s.menuIsOpen,g=this.state.isFocused,x=this.commonProps=this.getCommonProps();return m.createElement(l,S({},x,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:g}),this.renderLiveRegion(),m.createElement(a,S({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:g,menuIsOpen:p}),m.createElement(o,S({},x,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),m.createElement(u,S({},x,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=a.instancePrefix,p=e.options,g=e.value,x=e.menuIsOpen,f=e.inputValue,b=e.isMulti,F=We(g),y={};if(u&&(g!==u.value||p!==u.options||x!==u.menuIsOpen||f!==u.inputValue)){var O=x?ao(e,F):[],D=x?ot(pe(e,F),"".concat(v,"-option")):[],I=l?uo(a,F):null,M=so(a,O),w=Oe(D,M);y={selectValue:F,focusedOption:M,focusedOptionId:w,focusableOptionsWithIds:D,focusedValue:I,clearFocusValueOnUpdate:!1}}var V=o!=null&&e!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},T=s,j=c&&d;return c&&!j&&(T={value:de(b,F,F[0]||null),options:F,action:"initial-input-focus"},j=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),C(C(C({},y),V),{},{prevProps:e,ariaSelection:T,prevWasFocused:j})}}]),i}(m.Component);Bt.defaultProps=oo;var co=m.forwardRef(function(n,t){var i=Pn(n);return m.createElement(Bt,S({ref:t},i))}),ut=co;const jt={option:(n,t)=>({...n,padding:"8px 0",fontSize:"14px",color:t.isSelected?"#E6533C":"#EFEDE8",backgroundColor:t.isSelected?"rgba(28, 28, 28, 1)":t.isFocused?"rgba(239, 237, 232, 0.10)":"rgba(28, 28, 28, 1)",cursor:"pointer"}),singleValue:n=>({...n,color:"#EFEDE8"}),menu:n=>({...n,backgroundColor:"rgba(28, 28, 28, 1)",padding:"6px 5px 14px 14px"}),indicatorSeparator:n=>({...n,backgroundColor:"transparent"}),dropdownIndicator:n=>({...n,color:"#EFEDE8"}),container:(n,t)=>({...n,border:`1px solid ${t.isFocused?"#E6533C":"rgba(239, 237, 232, 0.3)"}`,"&:hover":{border:"1px solid #E6533C"},borderRadius:"12px",outline:"none"}),menuList:n=>({...n,overflowY:"auto",marginTop:"14px",marginRight:"7px","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb":{background:"rgba(239, 237, 232, 0.10)",borderRadius:"12px"}}),placeholder:n=>({...n,fontSize:"14px",lineHeight:"1.28",margin:"0",padding:"0"})},po={...jt,control:n=>({...n,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"146px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"192px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},fo={...jt,control:n=>({...n,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"173px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"204px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},ho=W.label`
  position: relative;
`,mo=W.div`
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
`,vo=W.input`
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
`,go=W.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 14px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,bo=W.svg`
  stroke: var(--color-text);
  fill: transparent;
  width: 18px;
  height: 18px;
  transition: stroke 0.3s var(--timing-function);

  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,xo=W.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 40px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,Eo=W.svg`
  stroke: var(--color-main-one);
  width: 18px;
  height: 18px;
`,Co=W.div`
  display: flex;
  gap: 16px;
`,So=()=>{const[n,t]=m.useState(""),i=U(st),r=U(lt),e=Me();m.useEffect(()=>{e(Xt())},[e]);const a=p=>`${p[0].toUpperCase()}${p.slice(1)}`,u=U(Qt),l=[{value:"all",label:"All categories"},...u.map(({_id:p,name:g})=>({value:p,label:a(g)}))],o=p=>{const{value:g}=p.target;t(g)},s=p=>{p.preventDefault();const g=p.target.elements[0].value;e(Zt(g))},c=()=>{t("")},d=p=>{e(en(p))},v=p=>{e(tn(p))};return h.jsx(h.Fragment,{children:h.jsxs(mo,{children:[h.jsx("form",{onSubmit:s,children:h.jsxs(ho,{children:[h.jsx(vo,{type:"text",name:"productsSearch",placeholder:"Search",value:n,onChange:o}),n&&h.jsx(xo,{type:"button",onClick:c,children:h.jsx(Eo,{children:h.jsx("use",{href:re+"#icon-cross"})})}),h.jsx(go,{type:"submit",children:h.jsx(bo,{children:h.jsx("use",{href:re+"#icon-search"})})})]})}),h.jsxs(Co,{children:[h.jsx(ut,{styles:po,value:i,onChange:d,options:l,placeholder:"Categories",theme:p=>({...p,colors:{...p.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})}),h.jsx(ut,{styles:fo,value:r,onChange:v,options:Jt,theme:p=>({...p,colors:{...p.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})})]})]})})},Fo=A.div`
  padding: 38px 22px;
`,wo=A.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Ht=A(En)`
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
`,yo=A(Ht)`
  color: rgba(239, 237, 232, 0.3);
  border: 1px solid var(--color-main-one);

  @media screen and (min-width: 768px) {
    width: 244px;
  }
`,Oo=A.label`
  display: block;
  position: relative;
`,Do=A(Ht)`
border: ${n=>n.border||"1px solid var(--color-main-one)"};
  @media screen and (min-width: 768px) {
    width: 155px;
  }
`,Io=A.span`
  position: absolute;
  top: 50%;
  right: 14px;
  color: rgba(239, 237, 232, 0.4);
  transform: translate(0, -50%);
  /* color:; */
  display: flex;
  align-items: center;
`,Ao=A.p`
  margin-bottom: 24px;
  text-align: left;
  line-height: 1.5; /* 150% */
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,Mo=A.span`
  color: var(--color-text);
`,Vo=A.div`
  display: flex;
  gap: 14px;
`,$t=A.button`
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
`,Po=A($t)`
  background-color: var(--color-main-one);
  border: 1px solid var(--color-main-one);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }
`,Lo=A($t)`
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
`,Ro=A(Cn)`
color: var(--color-wrong-one);
margin-top: 4px;
line-height: 1.5;
letter-spacing: 0.12px;
@media screen and (min-width: 768px) {
width: 155px;
}

`,ko=({id:n,title:t,calories:i,onClick:r,onClickSuccess:e})=>{const[a,u]=m.useState(0),l=Me(),o={product_id:n,date:bn(new Date,"yyyy-MM-dd"),weight:""},s=Sn().shape({weight:Fn().max(700,"Weight should not exceed 700 grams").required("Weight is required").positive("Weight must be above zero")}),c=g=>{const x=i*g/100;return parseFloat(x)},d=(g,x)=>{const f=g.target.value,b=c(f);u(b),x("weight",Number(f)),x("calories",b)},v=(g,x)=>{e(),l(nn(g)),x.resetForm(),r()},p=()=>{r()};return h.jsx(h.Fragment,{children:h.jsx(wn,{initialValues:o,validationSchema:s,onSubmit:v,children:({values:g,errors:x,touched:f,setFieldValue:b})=>h.jsx(yn,{autoComplete:"off",children:h.jsxs(Fo,{children:[h.jsxs(wo,{children:[h.jsx("div",{children:h.jsx("label",{htmlFor:"product",children:h.jsx(yo,{name:"product",type:"text",value:t,readOnly:!0})})}),h.jsxs("div",{children:[h.jsxs(Oo,{htmlFor:"weight",children:[h.jsx(Do,{name:"weight",type:"text",onChange:F=>d(F,b),onKeyPress:F=>{/^[0-9\b]+$/.test(F.key)||F.preventDefault()},value:g.weight,border:x.weight&&f.weight&&"1px solid #D80027"}),h.jsx(Io,{children:"grams"})]}),h.jsx(Ro,{name:"weight",component:"p"})]})]}),h.jsxs(Ao,{children:["Calories: ",h.jsx(Mo,{children:a})]}),h.jsxs(Vo,{children:[h.jsx(Po,{type:"submit",children:"Add to diary"}),h.jsx(Lo,{type:"button",onClick:p,children:"Cancel"})]})]})})})})},To=A.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Bo=A.img`
  width: 123px;
  height: 84px;
  margin-top: 48px;

`,jo=A.h2`
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
`,Ho=A.p`
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
`,$o=A.button`
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
`,zo=A(rn)`
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
`,Uo="/PowerPulse2.0/assets/avocado-d29ef327.png",No=({onClick:n})=>{const t=U(on);return h.jsxs(To,{children:[h.jsx(Bo,{src:Uo,alt:"avocado",loading:"lazy"}),h.jsx(jo,{children:"Well done"}),h.jsxs(Ho,{children:["Calories: ",h.jsx("span",{children:t==null?void 0:t.calories})]}),h.jsx($o,{type:"button",onClick:()=>n(),children:"Next product"}),h.jsxs(zo,{to:"/diary",children:[h.jsx("span",{children:"To the dairy"}),h.jsx("svg",{children:h.jsx("use",{href:`${re}#icon-arrow`})})]})]})},Wo=A.li`
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
`,_o=A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Go=A.div`
  padding: 5px 7.5px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  > p {
    margin: 0;
    font-weight: 700;
  }
`,Yo=A.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > div {
    background-color: ${n=>n.color==="true"?"var(--color-approved-two)":"var(--color-wrong-two)"};
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
`,qo=A.button`
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
`,Ko=A.div`
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
`,Xo=A.div`
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
`,Qo=A.ul`
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
`,Jo=A.p`
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
`,Zo=({id:n,title:t,calories:i,category:r,weight:e,recommended:a})=>{const[u,l]=m.useState(!1),[o,s]=m.useState(!1),c=()=>{l(v=>!v)},d=()=>{s(v=>!v)};return h.jsxs(Wo,{children:[u&&h.jsx(ze,{onClick:c,children:h.jsx(ko,{id:n,title:t,calories:i,onClick:c,onClickSuccess:d})}),o&&h.jsx(ze,{onClick:d,children:h.jsx(No,{onClick:d})}),h.jsxs("section",{children:[h.jsxs(_o,{children:[h.jsx(Go,{children:h.jsx("p",{children:"DIET"})}),h.jsxs(Yo,{color:`${a}`,children:[h.jsx("div",{}),h.jsx("p",{children:a?"Recommended":"Not recommended"}),h.jsxs(qo,{type:"button",onClick:c,children:[h.jsx("span",{children:"Add"}),h.jsx("svg",{children:h.jsx("use",{href:`${re}#icon-arrow`})})]})]})]}),h.jsxs(Ko,{children:[h.jsx(Xo,{children:h.jsx("svg",{children:h.jsx("use",{href:`${re}#icon-run`})})}),h.jsx("h2",{children:t})]}),h.jsxs(Qo,{children:[h.jsx("li",{children:h.jsxs("p",{children:["Calories:",h.jsx("span",{children:i})]})}),h.jsx("li",{children:h.jsxs(Jo,{children:["Category:",h.jsx("span",{children:r})]})}),h.jsx("li",{children:h.jsxs("p",{children:["Weight:",h.jsx("span",{children:e})]})})]})]})]},n)},ea=A.div`
  @media screen and (min-width: 375px) {
    display: inline-block;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 92px;
  }
`,ta=A.p`
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 375px) {
    display: inline-block;
    width: 335px;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28;
  }

  @media screen and (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    line-height: 1.5;
  }
`,na=A.span`
  color: var(--color-main-one);

  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 1.28;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,ia=A.p`
  color: var(--color-main-one);

  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 1.28;
  }

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 16px;
    line-height: 1.5;
  }
`,ra=()=>h.jsxs(ea,{children:[h.jsxs(ta,{children:[h.jsx(na,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),h.jsx(ia,{children:"Try changing the search parameters."})]}),oa=A.ul`
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
`,aa=n=>`${n[0].toUpperCase()}${n.slice(1)}`,ua=()=>{const n=Me(),t=U(an),i=U(st),r=U(lt),e=U(un),a=U(sn);U(ln);const u=U(cn);return m.useEffect(()=>{n(dn({recommended:r.value,category:i.value,query:t}))},[r,i,t,n]),h.jsxs(h.Fragment,{children:[a.length>0&&h.jsx(oa,{children:a.map(l=>h.jsx(Zo,{id:l._id,title:l.title,calories:l.calories,category:aa(l.category.name),weight:l.weight,recommended:e?!l.groupBloodNotAllowed[e]:!1},l._id))}),a.length===0&&!u&&h.jsx(ra,{})]})},sa=W.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,la=W.div`
  position: relative;
`,ca=W.span`
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
`,ma=()=>h.jsx(pn,{children:h.jsxs(la,{children:[h.jsx(ca,{children:"Filters"}),h.jsx(sa,{children:h.jsx(xn,{children:"Products"})}),h.jsx(So,{}),h.jsx(ua,{})]})});export{ma as default};
