import{o as _t,r as h,E as Wt,p as Gt,q as Yt,_ as C,t as qt,v as ue,w as S,x as Kt,y as N,u as Me,z as lt,A as Xt,c as ie,B as Jt,j as m,d as re,s as M,C as Zt,D as Qt,a as en,F as tn,G as ze,H as nn,I as rn,J as on,S as an,K as un}from"./index-30b45571.js";import{_ as ct,a as sn,b as ln,c as cn,d as dn,e as pn,f as fn}from"./createClass-6a13647a.js";import{T as hn}from"./TitlePage-bcd30645.js";import{F as mn,E as vn,c as gn,b as bn,e as xn,f as En}from"./index.esm-1c4360a6.js";function Cn(n,t){if(n==null)return{};var i={},r=Object.keys(n),e,a;for(a=0;a<r.length;a++)e=r[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}var E=function(t,i){var r=arguments;if(i==null||!_t.call(i,"css"))return h.createElement.apply(void 0,r);var e=r.length,a=new Array(e);a[0]=Wt,a[1]=Gt(t,i);for(var u=2;u<e;u++)a[u]=r[u];return h.createElement.apply(null,a)};function Ve(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return Yt(t)}var Sn=function(){var t=Ve.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Fn(n){if(Array.isArray(n))return n}function wn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,e,a,u,l=[],o=!0,s=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;o=!1}else for(;!(o=(r=a.call(i)).done)&&(l.push(r.value),l.length!==t);o=!0);}catch(c){s=!0,e=c}finally{try{if(!o&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw e}}return l}}function yn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(n,t){return Fn(n)||wn(n,t)||ct(n,t)||yn()}function X(n,t){if(n==null)return{};var i=Cn(n,t),r,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var Dn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function On(n){var t=n.defaultInputValue,i=t===void 0?"":t,r=n.defaultMenuIsOpen,e=r===void 0?!1:r,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,o=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,v=n.onMenuOpen,b=n.value,x=X(n,Dn),p=h.useState(l!==void 0?l:i),f=K(p,2),g=f[0],w=f[1],y=h.useState(o!==void 0?o:e),D=K(y,2),O=D[0],I=D[1],A=h.useState(b!==void 0?b:u),F=K(A,2),V=F[0],T=F[1],H=h.useCallback(function($,J){typeof s=="function"&&s($,J),T($)},[s]),B=h.useCallback(function($,J){var Z;typeof c=="function"&&(Z=c($,J)),w(Z!==void 0?Z:$)},[c]),W=h.useCallback(function(){typeof v=="function"&&v(),I(!0)},[v]),G=h.useCallback(function(){typeof d=="function"&&d(),I(!1)},[d]),k=l!==void 0?l:g,L=o!==void 0?o:O,_=b!==void 0?b:V;return C(C({},x),{},{inputValue:k,menuIsOpen:L,onChange:H,onInputChange:B,onMenuClose:G,onMenuOpen:W,value:_})}function In(n){if(Array.isArray(n))return sn(n)}function An(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Mn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(n){return In(n)||An(n)||ct(n)||Mn()}function Vn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Pn=Math.min,Ln=Math.max,fe=Math.round,se=Math.floor,he=n=>({x:n,y:n});function Rn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function dt(n){return ft(n)?(n.nodeName||"").toLowerCase():"#document"}function U(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function pt(n){var t;return(t=(ft(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function ft(n){return n instanceof Node||n instanceof U(n).Node}function Oe(n){return n instanceof Element||n instanceof U(n).Element}function Le(n){return n instanceof HTMLElement||n instanceof U(n).HTMLElement}function Ue(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof U(n).ShadowRoot}function ht(n){const{overflow:t,overflowX:i,overflowY:r,display:e}=Re(n);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!["inline","contents"].includes(e)}function kn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Tn(n){return["html","body","#document"].includes(dt(n))}function Re(n){return U(n).getComputedStyle(n)}function Bn(n){if(dt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ue(n)&&n.host||pt(n);return Ue(t)?t.host:t}function mt(n){const t=Bn(n);return Tn(t)?n.ownerDocument?n.ownerDocument.body:n.body:Le(t)&&ht(t)?t:mt(t)}function me(n,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=mt(n),a=e===((r=n.ownerDocument)==null?void 0:r.body),u=U(e);return a?t.concat(u,u.visualViewport||[],ht(e)?e:[],u.frameElement&&i?me(u.frameElement):[]):t.concat(e,me(e,[],i))}function Hn(n){const t=Re(n);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const e=Le(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:r,l=fe(i)!==a||fe(r)!==u;return l&&(i=a,r=u),{width:i,height:r,$:l}}function ke(n){return Oe(n)?n:n.contextElement}function Ee(n){const t=ke(n);if(!Le(t))return he(1);const i=t.getBoundingClientRect(),{width:r,height:e,$:a}=Hn(t);let u=(a?fe(i.width):i.width)/r,l=(a?fe(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const jn=he(0);function $n(n){const t=U(n);return!kn()||!t.visualViewport?jn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function zn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==U(n)?!1:t}function Ne(n,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=ke(n);let u=he(1);t&&(r?Oe(r)&&(u=Ee(r)):u=Ee(n));const l=zn(a,i,r)?$n(a):he(0);let o=(e.left+l.x)/u.x,s=(e.top+l.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const v=U(a),b=r&&Oe(r)?U(r):r;let x=v.frameElement;for(;x&&r&&b!==v;){const p=Ee(x),f=x.getBoundingClientRect(),g=Re(x),w=f.left+(x.clientLeft+parseFloat(g.paddingLeft))*p.x,y=f.top+(x.clientTop+parseFloat(g.paddingTop))*p.y;o*=p.x,s*=p.y,c*=p.x,d*=p.y,o+=w,s+=y,x=U(x).frameElement}}return Rn({width:c,height:d,x:o,y:s})}function Un(n,t){let i=null,r;const e=pt(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function u(l,o){l===void 0&&(l=!1),o===void 0&&(o=1),a();const{left:s,top:c,width:d,height:v}=n.getBoundingClientRect();if(l||t(),!d||!v)return;const b=se(c),x=se(e.clientWidth-(s+d)),p=se(e.clientHeight-(c+v)),f=se(s),w={rootMargin:-b+"px "+-x+"px "+-p+"px "+-f+"px",threshold:Ln(0,Pn(1,o))||1};let y=!0;function D(O){const I=O[0].intersectionRatio;if(I!==o){if(!y)return u();I?u(!1,I):r=setTimeout(()=>{u(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(D,{...w,root:e.ownerDocument})}catch{i=new IntersectionObserver(D,w)}i.observe(n)}return u(!0),a}function Nn(n,t,i,r){r===void 0&&(r={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,s=ke(n),c=e||a?[...s?me(s):[],...me(t)]:[];c.forEach(g=>{e&&g.addEventListener("scroll",i,{passive:!0}),a&&g.addEventListener("resize",i)});const d=s&&l?Un(s,i):null;let v=-1,b=null;u&&(b=new ResizeObserver(g=>{let[w]=g;w&&w.target===s&&b&&(b.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{b&&b.observe(t)})),i()}),s&&!o&&b.observe(s),b.observe(t));let x,p=o?Ne(n):null;o&&f();function f(){const g=Ne(n);p&&(g.x!==p.x||g.y!==p.y||g.width!==p.width||g.height!==p.height)&&i(),p=g,x=requestAnimationFrame(f)}return i(),()=>{c.forEach(g=>{e&&g.removeEventListener("scroll",i),a&&g.removeEventListener("resize",i)}),d&&d(),b&&b.disconnect(),b=null,o&&cancelAnimationFrame(x)}}var Ie=h.useLayoutEffect,_n=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function Wn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function Gn(n,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),e=2;e<i;e++)r[e-2]=arguments[e];var a=[].concat(r);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(Wn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var _e=function(t){return ti(t)?t.filter(Boolean):qt(t)==="object"&&t!==null?[t]:[]},vt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=X(t,_n);return C({},i)},P=function(t,i,r){var e=t.cx,a=t.getStyles,u=t.getClassNames,l=t.className;return{css:a(i,t),className:e(r??{},u(i,t),l)}};function xe(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Yn(n){return xe(n)?window.innerHeight:n.clientHeight}function gt(n){return xe(n)?window.pageYOffset:n.scrollTop}function ge(n,t){if(xe(n)){window.scrollTo(0,t);return}n.scrollTop=t}function qn(n){var t=getComputedStyle(n),i=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Kn(n,t,i,r){return i*((n=n/r-1)*n*n+1)+t}function le(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,e=gt(n),a=t-e,u=10,l=0;function o(){l+=u;var s=Kn(l,e,a,i);ge(n,s),l<i?window.requestAnimationFrame(o):r(n)}o()}function We(n,t){var i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),e=t.offsetHeight/3;r.bottom+e>i.bottom?ge(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):r.top-e<i.top&&ge(n,Math.max(t.offsetTop-e,0))}function Xn(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ge(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Jn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var bt=!1,Zn={get passive(){return bt=!0}},ce=typeof window<"u"?window:{};ce.addEventListener&&ce.removeEventListener&&(ce.addEventListener("p",ve,Zn),ce.removeEventListener("p",ve,!1));var Qn=bt;function ei(n){return n!=null}function ti(n){return Array.isArray(n)}function de(n,t,i){return n?t:i}var ni=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),e=1;e<i;e++)r[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var l=K(u,1),o=l[0];return!r.includes(o)});return a.reduce(function(u,l){var o=K(l,2),s=o[0],c=o[1];return u[s]=c,u},{})},ii=["children","innerProps"],ri=["children","innerProps"];function oi(n){var t=n.maxHeight,i=n.menuEl,r=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,o=qn(i),s={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return s;var c=o.getBoundingClientRect(),d=c.height,v=i.getBoundingClientRect(),b=v.bottom,x=v.height,p=v.top,f=i.offsetParent.getBoundingClientRect(),g=f.top,w=u?window.innerHeight:Yn(o),y=gt(o),D=parseInt(getComputedStyle(i).marginBottom,10),O=parseInt(getComputedStyle(i).marginTop,10),I=g-O,A=w-p,F=I+y,V=d-y-p,T=b-w+y+D,H=y+p-O,B=160;switch(e){case"auto":case"bottom":if(A>=x)return{placement:"bottom",maxHeight:t};if(V>=x&&!u)return a&&le(o,T,B),{placement:"bottom",maxHeight:t};if(!u&&V>=r||u&&A>=r){a&&le(o,T,B);var W=u?A-D:V-D;return{placement:"bottom",maxHeight:W}}if(e==="auto"||u){var G=t,k=u?I:F;return k>=r&&(G=Math.min(k-D-l,t)),{placement:"top",maxHeight:G}}if(e==="bottom")return a&&ge(o,T),{placement:"bottom",maxHeight:t};break;case"top":if(I>=x)return{placement:"top",maxHeight:t};if(F>=x&&!u)return a&&le(o,H,B),{placement:"top",maxHeight:t};if(!u&&F>=r||u&&I>=r){var L=t;return(!u&&F>=r||u&&I>=r)&&(L=u?I-O:F-O),a&&le(o,H,B),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function ai(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var xt=function(t){return t==="auto"?"bottom":t},ui=function(t,i){var r,e=t.placement,a=t.theme,u=a.borderRadius,l=a.spacing,o=a.colors;return C((r={label:"menu"},ue(r,ai(e),"100%"),ue(r,"position","absolute"),ue(r,"width","100%"),ue(r,"zIndex",1),r),i?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Et=h.createContext(null),si=function(t){var i=t.children,r=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,l=t.menuShouldScrollIntoView,o=t.theme,s=h.useContext(Et)||{},c=s.setPortalPlacement,d=h.useRef(null),v=h.useState(e),b=K(v,2),x=b[0],p=b[1],f=h.useState(null),g=K(f,2),w=g[0],y=g[1],D=o.spacing.controlHeight;return Ie(function(){var O=d.current;if(O){var I=u==="fixed",A=l&&!I,F=oi({maxHeight:e,menuEl:O,minHeight:r,placement:a,shouldScroll:A,isFixedPosition:I,controlHeight:D});p(F.maxHeight),y(F.placement),c==null||c(F.placement)}},[e,a,u,l,r,c,D]),i({ref:d,placerProps:C(C({},t),{},{placement:w||xt(a),maxHeight:x})})},li=function(t){var i=t.children,r=t.innerRef,e=t.innerProps;return E("div",S({},P(t,"menu",{menu:!0}),{ref:r},e),i)},ci=li,di=function(t,i){var r=t.maxHeight,e=t.theme.spacing.baseUnit;return C({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},pi=function(t){var i=t.children,r=t.innerProps,e=t.innerRef,a=t.isMulti;return E("div",S({},P(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},r),i)},Ct=function(t,i){var r=t.theme,e=r.spacing.baseUnit,a=r.colors;return C({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},fi=Ct,hi=Ct,mi=function(t){var i=t.children,r=i===void 0?"No options":i,e=t.innerProps,a=X(t,ii);return E("div",S({},P(C(C({},a),{},{children:r,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),r)},vi=function(t){var i=t.children,r=i===void 0?"Loading...":i,e=t.innerProps,a=X(t,ri);return E("div",S({},P(C(C({},a),{},{children:r,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),r)},gi=function(t){var i=t.rect,r=t.offset,e=t.position;return{left:i.left,position:e,top:r,width:i.width,zIndex:1}},bi=function(t){var i=t.appendTo,r=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,l=t.menuPosition,o=h.useRef(null),s=h.useRef(null),c=h.useState(xt(u)),d=K(c,2),v=d[0],b=d[1],x=h.useMemo(function(){return{setPortalPlacement:b}},[]),p=h.useState(null),f=K(p,2),g=f[0],w=f[1],y=h.useCallback(function(){if(e){var A=Xn(e),F=l==="fixed"?0:window.pageYOffset,V=A[v]+F;(V!==(g==null?void 0:g.offset)||A.left!==(g==null?void 0:g.rect.left)||A.width!==(g==null?void 0:g.rect.width))&&w({offset:V,rect:A})}},[e,l,v,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);Ie(function(){y()},[y]);var D=h.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&o.current&&(s.current=Nn(e,o.current,y,{elementResize:"ResizeObserver"in window}))},[e,y]);Ie(function(){D()},[D]);var O=h.useCallback(function(A){o.current=A,D()},[D]);if(!i&&l!=="fixed"||!g)return null;var I=E("div",S({ref:O},P(C(C({},t),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),a),r);return E(Et.Provider,{value:x},i?Kt.createPortal(I,i):I)},xi=function(t){var i=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},Ei=function(t){var i=t.children,r=t.innerProps,e=t.isDisabled,a=t.isRtl;return E("div",S({},P(t,"container",{"--is-disabled":e,"--is-rtl":a}),r),i)},Ci=function(t,i){var r=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return C({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Si=function(t){var i=t.children,r=t.innerProps,e=t.isMulti,a=t.hasValue;return E("div",S({},P(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),r),i)},Fi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},wi=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"indicatorsContainer",{indicators:!0}),r),i)},Ye,yi=["size"],Di=["innerProps","isRtl","size"],Oi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},St=function(t){var i=t.size,r=X(t,yi);return E("svg",S({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Oi},r))},Te=function(t){return E(St,S({size:20},t),E("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ft=function(t){return E(St,S({size:20},t),E("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},wt=function(t,i){var r=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?u.neutral60:u.neutral20,padding:a*2,":hover":{color:r?u.neutral80:u.neutral40}})},Ii=wt,Ai=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||E(Ft,null))},Mi=wt,Vi=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||E(Te,null))},Pi=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Li=function(t){var i=t.innerProps;return E("span",S({},i,P(t,"indicatorSeparator",{"indicator-separator":!0})))},Ri=Sn(Ye||(Ye=Vn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),ki=function(t,i){var r=t.isFocused,e=t.size,a=t.theme,u=a.colors,l=a.spacing.baseUnit;return C({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?u.neutral60:u.neutral20,padding:l*2})},Ce=function(t){var i=t.delay,r=t.offset;return E("span",{css:Ve({animation:"".concat(Ri," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Ti=function(t){var i=t.innerProps,r=t.isRtl,e=t.size,a=e===void 0?4:e,u=X(t,Di);return E("div",S({},P(C(C({},u),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),E(Ce,{delay:0,offset:r}),E(Ce,{delay:160,offset:!0}),E(Ce,{delay:320,offset:!r}))},Bi=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,l=a.borderRadius,o=a.spacing;return C({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:e?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Hi=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,l=t.menuIsOpen;return E("div",S({ref:a},P(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":e,"control--menu-is-open":l}),u,{"aria-disabled":r||void 0}),i)},ji=Hi,$i=["data"],zi=function(t,i){var r=t.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Ui=function(t){var i=t.children,r=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,l=t.headingProps,o=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return E("div",S({},P(t,"group",{group:!0}),o),E(u,S({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:r}),s),E("div",null,i))},Ni=function(t,i){var r=t.theme,e=r.colors,a=r.spacing;return C({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},_i=function(t){var i=vt(t);i.data;var r=X(i,$i);return E("div",S({},P(t,"groupHeading",{"group-heading":!0}),r))},Wi=Ui,Gi=["innerRef","isDisabled","isHidden","inputClassName"],Yi=function(t,i){var r=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,l=a.colors;return C(C({visibility:r?"hidden":"visible",transform:e?"translateZ(0)":""},qi),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},yt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},qi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":C({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},yt)},Ki=function(t){return C({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},yt)},Xi=function(t){var i=t.cx,r=t.value,e=vt(t),a=e.innerRef,u=e.isDisabled,l=e.isHidden,o=e.inputClassName,s=X(e,Gi);return E("div",S({},P(t,"input",{"input-container":!0}),{"data-value":r||""}),E("input",S({className:i({input:!0},o),ref:a,style:Ki(l),disabled:u},s)))},Ji=Xi,Zi=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors;return C({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},Qi=function(t,i){var r=t.theme,e=r.borderRadius,a=r.colors,u=t.cropWithEllipsis;return C({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},er=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors,l=t.isFocused;return C({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Dt=function(t){var i=t.children,r=t.innerProps;return E("div",r,i)},tr=Dt,nr=Dt;function ir(n){var t=n.children,i=n.innerProps;return E("div",S({role:"button"},i),t||E(Te,{size:14}))}var rr=function(t){var i=t.children,r=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,l=t.removeProps,o=t.selectProps,s=r.Container,c=r.Label,d=r.Remove;return E(s,{data:e,innerProps:C(C({},P(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},E(c,{data:e,innerProps:C({},P(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},i),E(d,{data:e,innerProps:C(C({},P(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:o}))},or=rr,ar=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,l=u.spacing,o=u.colors;return C({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?o.primary:e?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},ur=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,l=t.innerProps;return E("div",S({},P(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":r},l),i)},sr=ur,lr=function(t,i){var r=t.theme,e=r.spacing,a=r.colors;return C({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},cr=function(t){var i=t.children,r=t.innerProps;return E("div",S({},P(t,"placeholder",{placeholder:!0}),r),i)},dr=cr,pr=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return C({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},fr=function(t){var i=t.children,r=t.isDisabled,e=t.innerProps;return E("div",S({},P(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),e),i)},hr=fr,mr={ClearIndicator:Vi,Control:ji,DropdownIndicator:Ai,DownChevron:Ft,CrossIcon:Te,Group:Wi,GroupHeading:_i,IndicatorsContainer:wi,IndicatorSeparator:Li,Input:Ji,LoadingIndicator:Ti,Menu:ci,MenuList:pi,MenuPortal:bi,LoadingMessage:vi,NoOptionsMessage:mi,MultiValue:or,MultiValueContainer:tr,MultiValueLabel:nr,MultiValueRemove:ir,Option:sr,Placeholder:dr,SelectContainer:Ei,SingleValue:hr,ValueContainer:Si},vr=function(t){return C(C({},mr),t.components)},qe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function gr(n,t){return!!(n===t||qe(n)&&qe(t))}function br(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!gr(n[i],t[i]))return!1;return!0}function xr(n,t){t===void 0&&(t=br);var i=null;function r(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return r.clear=function(){i=null},r}var Er={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Cr=function(t){return E("span",S({css:Er},t))},Ke=Cr,Sr={guidance:function(t){var i=t.isSearchable,r=t.isMulti,e=t.tabSelectsValue,a=t.context,u=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,r=t.label,e=r===void 0?"":r,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,r=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,l=t.selectValue,o=t.isDisabled,s=t.isSelected,c=t.isAppleDevice,d=function(p,f){return p&&p.length?"".concat(p.indexOf(f)+1," of ").concat(p.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,r),".");if(i==="menu"&&c){var v=o?" disabled":"",b="".concat(s?" selected":"").concat(v);return"".concat(u).concat(b,", ").concat(d(e,r),".")}return""},onFilter:function(t){var i=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},Fr=function(t){var i=t.ariaSelection,r=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,l=t.selectValue,o=t.selectProps,s=t.id,c=t.isAppleDevice,d=o.ariaLiveMessages,v=o.getOptionLabel,b=o.inputValue,x=o.isMulti,p=o.isOptionDisabled,f=o.isSearchable,g=o.menuIsOpen,w=o.options,y=o.screenReaderStatus,D=o.tabSelectsValue,O=o.isLoading,I=o["aria-label"],A=o["aria-live"],F=h.useMemo(function(){return C(C({},Sr),d||{})},[d]),V=h.useMemo(function(){var k="";if(i&&F.onChange){var L=i.option,_=i.options,$=i.removedValue,J=i.removedValues,Z=i.value,oe=function(q){return Array.isArray(q)?null:q},R=$||L||oe(Z),j=R?v(R):"",Y=_||J||void 0,Q=Y?Y.map(v):[],z=C({isDisabled:R&&p(R,l),label:j,labels:Q},i);k=F.onChange(z)}return k},[i,F,p,l,v]),T=h.useMemo(function(){var k="",L=r||e,_=!!(r&&l&&l.includes(r));if(L&&F.onFocus){var $={focused:L,label:v(L),isDisabled:p(L,l),isSelected:_,options:a,context:L===r?"menu":"value",selectValue:l,isAppleDevice:c};k=F.onFocus($)}return k},[r,e,v,p,F,a,l,c]),H=h.useMemo(function(){var k="";if(g&&w.length&&!O&&F.onFilter){var L=y({count:a.length});k=F.onFilter({inputValue:b,resultsMessage:L})}return k},[a,b,g,F,w,y,O]),B=(i==null?void 0:i.action)==="initial-input-focus",W=h.useMemo(function(){var k="";if(F.guidance){var L=e?"value":g?"menu":"input";k=F.guidance({"aria-label":I,context:L,isDisabled:r&&p(r,l),isMulti:x,isSearchable:f,tabSelectsValue:D,isInitialFocus:B})}return k},[I,r,e,x,p,f,g,F,l,D,B]),G=E(h.Fragment,null,E("span",{id:"aria-selection"},V),E("span",{id:"aria-focused"},T),E("span",{id:"aria-results"},H),E("span",{id:"aria-guidance"},W));return E(h.Fragment,null,E(Ke,{id:s},B&&G),E(Ke,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!B&&G))},wr=Fr,Ae=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],yr=new RegExp("["+Ae.map(function(n){return n.letters}).join("")+"]","g"),Ot={};for(var Se=0;Se<Ae.length;Se++)for(var Fe=Ae[Se],we=0;we<Fe.letters.length;we++)Ot[Fe.letters[we]]=Fe.base;var It=function(t){return t.replace(yr,function(i){return Ot[i]})},Dr=xr(It),Xe=function(t){return t.replace(/^\s+|\s+$/g,"")},Or=function(t){return"".concat(t.label," ").concat(t.value)},Ir=function(t){return function(i,r){if(i.data.__isNew__)return!0;var e=C({ignoreCase:!0,ignoreAccents:!0,stringify:Or,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,l=e.stringify,o=e.trim,s=e.matchFrom,c=o?Xe(r):r,d=o?Xe(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Dr(c),d=It(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Ar=["innerRef"];function Mr(n){var t=n.innerRef,i=X(n,Ar),r=ni(i,"onExited","in","enter","exit","appear");return E("input",S({ref:t},r,{css:Ve({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Vr=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Pr(n){var t=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=h.useRef(!1),l=h.useRef(!1),o=h.useRef(0),s=h.useRef(null),c=h.useCallback(function(f,g){if(s.current!==null){var w=s.current,y=w.scrollTop,D=w.scrollHeight,O=w.clientHeight,I=s.current,A=g>0,F=D-O-y,V=!1;F>g&&u.current&&(r&&r(f),u.current=!1),A&&l.current&&(a&&a(f),l.current=!1),A&&g>F?(i&&!u.current&&i(f),I.scrollTop=D,V=!0,u.current=!0):!A&&-g>y&&(e&&!l.current&&e(f),I.scrollTop=0,V=!0,l.current=!0),V&&Vr(f)}},[i,r,e,a]),d=h.useCallback(function(f){c(f,f.deltaY)},[c]),v=h.useCallback(function(f){o.current=f.changedTouches[0].clientY},[]),b=h.useCallback(function(f){var g=o.current-f.changedTouches[0].clientY;c(f,g)},[c]),x=h.useCallback(function(f){if(f){var g=Qn?{passive:!1}:!1;f.addEventListener("wheel",d,g),f.addEventListener("touchstart",v,g),f.addEventListener("touchmove",b,g)}},[b,v,d]),p=h.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",v,!1),f.removeEventListener("touchmove",b,!1))},[b,v,d]);return h.useEffect(function(){if(t){var f=s.current;return x(f),function(){p(f)}}},[t,x,p]),function(f){s.current=f}}var Je=["boxSizing","height","overflow","paddingRight","position"],Ze={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Qe(n){n.preventDefault()}function et(n){n.stopPropagation()}function tt(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function nt(){return"ontouchstart"in window||navigator.maxTouchPoints}var it=!!(typeof window<"u"&&window.document&&window.document.createElement),ne=0,te={capture:!1,passive:!1};function Lr(n){var t=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,e=h.useRef({}),a=h.useRef(null),u=h.useCallback(function(o){if(it){var s=document.body,c=s&&s.style;if(r&&Je.forEach(function(x){var p=c&&c[x];e.current[x]=p}),r&&ne<1){var d=parseInt(e.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,b=window.innerWidth-v+d||0;Object.keys(Ze).forEach(function(x){var p=Ze[x];c&&(c[x]=p)}),c&&(c.paddingRight="".concat(b,"px"))}s&&nt()&&(s.addEventListener("touchmove",Qe,te),o&&(o.addEventListener("touchstart",tt,te),o.addEventListener("touchmove",et,te))),ne+=1}},[r]),l=h.useCallback(function(o){if(it){var s=document.body,c=s&&s.style;ne=Math.max(ne-1,0),r&&ne<1&&Je.forEach(function(d){var v=e.current[d];c&&(c[d]=v)}),s&&nt()&&(s.removeEventListener("touchmove",Qe,te),o&&(o.removeEventListener("touchstart",tt,te),o.removeEventListener("touchmove",et,te)))}},[r]);return h.useEffect(function(){if(t){var o=a.current;return u(o),function(){l(o)}}},[t,u,l]),function(o){a.current=o}}var Rr=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},kr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Tr(n){var t=n.children,i=n.lockEnabled,r=n.captureEnabled,e=r===void 0?!0:r,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,o=n.onTopLeave,s=Pr({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:o}),c=Lr({isEnabled:i}),d=function(b){s(b),c(b)};return E(h.Fragment,null,i&&E("div",{onClick:Rr,css:kr}),t(d))}var Br={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Hr=function(t){var i=t.name,r=t.onFocus;return E("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Br,value:"",onChange:function(){}})},jr=Hr;function Be(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function $r(){return Be(/^iPhone/i)}function At(){return Be(/^Mac/i)}function zr(){return Be(/^iPad/i)||At()&&navigator.maxTouchPoints>1}function Ur(){return $r()||zr()}function Nr(){return At()||Ur()}var _r=function(t){return t.label},Wr=function(t){return t.label},Gr=function(t){return t.value},Yr=function(t){return!!t.isDisabled},qr={clearIndicator:Mi,container:xi,control:Bi,dropdownIndicator:Ii,group:zi,groupHeading:Ni,indicatorsContainer:Fi,indicatorSeparator:Pi,input:Yi,loadingIndicator:ki,loadingMessage:hi,menu:ui,menuList:di,menuPortal:gi,multiValue:Zi,multiValueLabel:Qi,multiValueRemove:er,noOptionsMessage:fi,option:ar,placeholder:lr,singleValue:pr,valueContainer:Ci},Kr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Xr=4,Mt=4,Jr=38,Zr=Mt*2,Qr={baseUnit:Mt,controlHeight:Jr,menuGutter:Zr},ye={borderRadius:Xr,colors:Kr,spacing:Qr},eo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ge(),captureMenuScroll:!Ge(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Ir(),formatGroupLabel:_r,getOptionLabel:Wr,getOptionValue:Gr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Yr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Jn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function rt(n,t,i,r){var e=Lt(n,t,i),a=Rt(n,t,i),u=Pt(n,t),l=be(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:l,index:r}}function pe(n,t){return n.options.map(function(i,r){if("options"in i){var e=i.options.map(function(u,l){return rt(n,u,t,l)}).filter(function(u){return at(n,u)});return e.length>0?{type:"group",data:i,options:e,index:r}:void 0}var a=rt(n,i,t,r);return at(n,a)?a:void 0}).filter(ei)}function Vt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,Pe(i.options.map(function(r){return r.data}))):t.push(i.data),t},[])}function ot(n,t){return n.reduce(function(i,r){return r.type==="group"?i.push.apply(i,Pe(r.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(r.index,"-").concat(e.index)}}))):i.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),i},[])}function to(n,t){return Vt(pe(n,t))}function at(n,t){var i=n.inputValue,r=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,l=t.value;return(!Tt(n)||!a)&&kt(n,{label:u,value:l,data:e},r)}function no(n,t){var i=n.focusedValue,r=n.selectValue,e=r.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function io(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var De=function(t,i){var r,e=(r=t.find(function(a){return a.data===i}))===null||r===void 0?void 0:r.id;return e||null},Pt=function(t,i){return t.getOptionLabel(i)},be=function(t,i){return t.getOptionValue(i)};function Lt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function Rt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var r=be(n,t);return i.some(function(e){return be(n,e)===r})}function kt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Tt=function(t){var i=t.hideSelectedOptions,r=t.isMulti;return i===void 0?r:i},ro=1,Bt=function(n){ln(i,n);var t=cn(i);function i(r){var e;if(dn(this,i),e=t.call(this,r),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=Nr(),e.controlRef=null,e.getControlRef=function(o){e.controlRef=o},e.focusedOptionRef=null,e.getFocusedOptionRef=function(o){e.focusedOptionRef=o},e.menuListRef=null,e.getMenuListRef=function(o){e.menuListRef=o},e.inputRef=null,e.getInputRef=function(o){e.inputRef=o},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(o,s){var c=e.props,d=c.onChange,v=c.name;s.name=v,e.ariaOnChange(o,s),d(o,s)},e.setValue=function(o,s,c){var d=e.props,v=d.closeMenuOnSelect,b=d.isMulti,x=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:x}),v&&(e.setState({inputIsHiddenAfterUpdate:!b}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(o,{action:s,option:c})},e.selectOption=function(o){var s=e.props,c=s.blurInputOnSelect,d=s.isMulti,v=s.name,b=e.state.selectValue,x=d&&e.isOptionSelected(o,b),p=e.isOptionDisabled(o,b);if(x){var f=e.getOptionValue(o);e.setValue(b.filter(function(g){return e.getOptionValue(g)!==f}),"deselect-option",o)}else if(!p)d?e.setValue([].concat(Pe(b),[o]),"select-option",o):e.setValue(o,"select-option");else{e.ariaOnChange(o,{action:"select-option",option:o,name:v});return}c&&e.blurInput()},e.removeValue=function(o){var s=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(o),v=c.filter(function(x){return e.getOptionValue(x)!==d}),b=de(s,v,v[0]||null);e.onChange(b,{action:"remove-value",removedValue:o}),e.focusInput()},e.clearValue=function(){var o=e.state.selectValue;e.onChange(de(e.props.isMulti,[],null),{action:"clear",removedValues:o})},e.popValue=function(){var o=e.props.isMulti,s=e.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),v=de(o,d,d[0]||null);e.onChange(v,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(o){return De(e.state.focusableOptionsWithIds,o)},e.getFocusableOptionsWithIds=function(){return ot(pe(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return Gn.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(o){return Pt(e.props,o)},e.getOptionValue=function(o){return be(e.props,o)},e.getStyles=function(o,s){var c=e.props.unstyled,d=qr[o](s,c);d.boxSizing="border-box";var v=e.props.styles[o];return v?v(d,s):d},e.getClassNames=function(o,s){var c,d;return(c=(d=e.props.classNames)[o])===null||c===void 0?void 0:c.call(d,s)},e.getElementId=function(o){return"".concat(e.state.instancePrefix,"-").concat(o)},e.getComponents=function(){return vr(e.props)},e.buildCategorizedOptions=function(){return pe(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return Vt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(o,s){e.setState({ariaSelection:C({value:o},s)})},e.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(o){e.blockOptionHover=!1},e.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},e.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!e.props.isDisabled){var s=e.props,c=s.isMulti,d=s.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),o.preventDefault()}},e.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(e.clearValue(),o.preventDefault(),e.openAfterFocus=!1,o.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(o){typeof e.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&xe(o.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(o)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(o){var s=o.touches,c=s&&s.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(o){var s=o.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),v=Math.abs(c.clientY-e.initialTouchY),b=5;e.userIsDragging=d>b||v>b}},e.onTouchEnd=function(o){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(o.target)&&e.menuListRef&&!e.menuListRef.contains(o.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(o){e.userIsDragging||e.onControlMouseDown(o)},e.onClearIndicatorTouchEnd=function(o){e.userIsDragging||e.onClearIndicatorMouseDown(o)},e.onDropdownIndicatorTouchEnd=function(o){e.userIsDragging||e.onDropdownIndicatorMouseDown(o)},e.handleInputChange=function(o){var s=e.props.inputValue,c=o.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(o){e.props.onFocus&&e.props.onFocus(o),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(o){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(o),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(o){if(!(e.blockOptionHover||e.state.focusedOption===o)){var s=e.getFocusableOptions(),c=s.indexOf(o);e.setState({focusedOption:o,focusedOptionId:c>-1?e.getFocusedOptionId(o):null})}},e.shouldHideSelectedOptions=function(){return Tt(e.props)},e.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),e.focus()},e.onKeyDown=function(o){var s=e.props,c=s.isMulti,d=s.backspaceRemovesValue,v=s.escapeClearsValue,b=s.inputValue,x=s.isClearable,p=s.isDisabled,f=s.menuIsOpen,g=s.onKeyDown,w=s.tabSelectsValue,y=s.openMenuOnFocus,D=e.state,O=D.focusedOption,I=D.focusedValue,A=D.selectValue;if(!p&&!(typeof g=="function"&&(g(o),o.defaultPrevented))){switch(e.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||b)return;e.focusValue("previous");break;case"ArrowRight":if(!c||b)return;e.focusValue("next");break;case"Delete":case"Backspace":if(b)return;if(I)e.removeValue(I);else{if(!d)return;c?e.popValue():x&&e.clearValue()}break;case"Tab":if(e.isComposing||o.shiftKey||!f||!w||!O||y&&e.isOptionSelected(O,A))return;e.selectOption(O);break;case"Enter":if(o.keyCode===229)break;if(f){if(!O||e.isComposing)return;e.selectOption(O);break}return;case"Escape":f?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:b}),e.onMenuClose()):x&&v&&e.clearValue();break;case" ":if(b)return;if(!f){e.openMenu("first");break}if(!O)return;e.selectOption(O);break;case"ArrowUp":f?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":f?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!f)return;e.focusOption("pageup");break;case"PageDown":if(!f)return;e.focusOption("pagedown");break;case"Home":if(!f)return;e.focusOption("first");break;case"End":if(!f)return;e.focusOption("last");break;default:return}o.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++ro),e.state.selectValue=_e(r.value),r.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=u[l],e.state.focusedOptionId=De(a,u[l])}return e}return pn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&We(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&e.isDisabled||o&&l&&!e.menuIsOpen)&&this.focusInput(),o&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(We(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,l=u.selectValue,o=u.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(l);l||(o=-1);var s=u.length-1,c=-1;if(u.length){switch(e){case"previous":o===0?c=0:o===-1?c=s:c=o-1;break;case"next":o>-1&&o<s&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,s=l.indexOf(u);u||(s=-1),e==="up"?o=s>0?s-1:l.length-1:e==="down"?o=(s+1)%l.length:e==="pageup"?(o=s-a,o<0&&(o=0)):e==="pagedown"?(o=s+a,o>l.length-1&&(o=l.length-1)):e==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ye):C(C({},ye),this.props.theme):ye}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,o=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,b=d.isRtl,x=d.options,p=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:l,getValue:o,hasValue:p,isMulti:v,isRtl:b,options:x,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Lt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return Rt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return kt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,l=e.inputId,o=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,v=e.required,b=this.getComponents(),x=b.Input,p=this.state,f=p.inputIsHidden,g=p.ariaSelection,w=this.commonProps,y=l||this.getElementId("input"),D=C(C(C({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?h.createElement(x,S({},w,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:o},D)):h.createElement(Mr,S({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},D))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,b=this.props,x=b.controlShouldRenderValue,p=b.isDisabled,f=b.isMulti,g=b.inputValue,w=b.placeholder,y=this.state,D=y.selectValue,O=y.focusedValue,I=y.isFocused;if(!this.hasValue()||!x)return g?null:h.createElement(d,S({},v,{key:"placeholder",isDisabled:p,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),w);if(f)return D.map(function(F,V){var T=F===O,H="".concat(e.getOptionLabel(F),"-").concat(e.getOptionValue(F));return h.createElement(u,S({},v,{components:{Container:l,Label:o,Remove:s},isFocused:T,isDisabled:p,key:H,index:V,removeProps:{onClick:function(){return e.removeValue(F)},onTouchEnd:function(){return e.removeValue(F)},onMouseDown:function(W){W.preventDefault()}},data:F}),e.formatOptionLabel(F,"value"))});if(g)return null;var A=D[0];return h.createElement(c,S({},v,{data:A,isDisabled:p}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(a,S({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return h.createElement(a,S({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused;return h.createElement(u,S({},l,{isDisabled:o,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(a,S({},u,{innerProps:s,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,o=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,b=a.Option,x=this.commonProps,p=this.state.focusedOption,f=this.props,g=f.captureMenuScroll,w=f.inputValue,y=f.isLoading,D=f.loadingMessage,O=f.minMenuHeight,I=f.maxMenuHeight,A=f.menuIsOpen,F=f.menuPlacement,V=f.menuPosition,T=f.menuPortalTarget,H=f.menuShouldBlockScroll,B=f.menuShouldScrollIntoView,W=f.noOptionsMessage,G=f.onMenuScrollToTop,k=f.onMenuScrollToBottom;if(!A)return null;var L=function(j,Y){var Q=j.type,z=j.data,ee=j.isDisabled,q=j.isSelected,ae=j.label,zt=j.value,He=p===z,je=ee?void 0:function(){return e.onOptionHover(z)},Ut=ee?void 0:function(){return e.selectOption(z)},$e="".concat(e.getElementId("option"),"-").concat(Y),Nt={id:$e,onClick:Ut,onMouseMove:je,onMouseOver:je,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:q};return h.createElement(b,S({},x,{innerProps:Nt,data:z,isDisabled:ee,isSelected:q,key:$e,label:ae,type:Q,value:zt,isFocused:He,innerRef:He?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(j.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var j=R.data,Y=R.options,Q=R.index,z="".concat(e.getElementId("group"),"-").concat(Q),ee="".concat(z,"-heading");return h.createElement(u,S({},x,{key:z,data:j,options:Y,Heading:l,headingProps:{id:ee,data:R.data},label:e.formatGroupLabel(R.data)}),R.options.map(function(q){return L(q,"".concat(Q,"-").concat(q.index))}))}else if(R.type==="option")return L(R,"".concat(R.index))});else if(y){var $=D({inputValue:w});if($===null)return null;_=h.createElement(d,x,$)}else{var J=W({inputValue:w});if(J===null)return null;_=h.createElement(v,x,J)}var Z={minMenuHeight:O,maxMenuHeight:I,menuPlacement:F,menuPosition:V,menuShouldScrollIntoView:B},oe=h.createElement(si,S({},x,Z),function(R){var j=R.ref,Y=R.placerProps,Q=Y.placement,z=Y.maxHeight;return h.createElement(o,S({},x,Z,{innerRef:j,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:y,placement:Q}),h.createElement(Tr,{captureEnabled:g,onTopArrive:G,onBottomArrive:k,lockEnabled:H},function(ee){return h.createElement(s,S({},x,{innerRef:function(ae){e.getMenuListRef(ae),ee(ae)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:e.getElementId("listbox")},isLoading:y,maxHeight:z,focusedOption:p}),_)}))});return T||V==="fixed"?h.createElement(c,S({},x,{appendTo:T,controlElement:this.controlRef,menuPlacement:F,menuPosition:V}),oe):oe}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,l=a.isDisabled,o=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return h.createElement(jr,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(o)if(u){var v=d.map(function(p){return e.getOptionValue(p)}).join(u);return h.createElement("input",{name:s,type:"hidden",value:v})}else{var b=d.length>0?d.map(function(p,f){return h.createElement("input",{key:"i-".concat(f),name:s,type:"hidden",value:e.getOptionValue(p)})}):h.createElement("input",{name:s,type:"hidden",value:""});return h.createElement("div",null,b)}else{var x=d[0]?this.getOptionValue(d[0]):"";return h.createElement("input",{name:s,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return h.createElement(wr,S({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:o,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,l=e.SelectContainer,o=e.ValueContainer,s=this.props,c=s.className,d=s.id,v=s.isDisabled,b=s.menuIsOpen,x=this.state.isFocused,p=this.commonProps=this.getCommonProps();return h.createElement(l,S({},p,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:x}),this.renderLiveRegion(),h.createElement(a,S({},p,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:x,menuIsOpen:b}),h.createElement(o,S({},p,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),h.createElement(u,S({},p,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=a.instancePrefix,b=e.options,x=e.value,p=e.menuIsOpen,f=e.inputValue,g=e.isMulti,w=_e(x),y={};if(u&&(x!==u.value||b!==u.options||p!==u.menuIsOpen||f!==u.inputValue)){var D=p?to(e,w):[],O=p?ot(pe(e,w),"".concat(v,"-option")):[],I=l?no(a,w):null,A=io(a,D),F=De(O,A);y={selectValue:w,focusedOption:A,focusedOptionId:F,focusableOptionsWithIds:O,focusedValue:I,clearFocusValueOnUpdate:!1}}var V=o!=null&&e!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},T=s,H=c&&d;return c&&!H&&(T={value:de(g,w,w[0]||null),options:w,action:"initial-input-focus"},H=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),C(C(C({},y),V),{},{prevProps:e,ariaSelection:T,prevWasFocused:H})}}]),i}(h.Component);Bt.defaultProps=eo;var oo=h.forwardRef(function(n,t){var i=On(n);return h.createElement(Bt,S({ref:t},i))}),ut=oo;const Ht={option:(n,t)=>({...n,padding:"8px 0",fontSize:"14px",color:t.isSelected?"#E6533C":"#EFEDE8",backgroundColor:t.isSelected?"rgba(28, 28, 28, 1)":t.isFocused?"rgba(239, 237, 232, 0.10)":"rgba(28, 28, 28, 1)",cursor:"pointer"}),singleValue:n=>({...n,color:"#EFEDE8"}),menu:n=>({...n,backgroundColor:"rgba(28, 28, 28, 1)",padding:"6px 5px 14px 14px"}),indicatorSeparator:n=>({...n,backgroundColor:"transparent"}),dropdownIndicator:n=>({...n,color:"#EFEDE8"}),container:(n,t)=>({...n,border:`1px solid ${t.isFocused?"#E6533C":"rgba(239, 237, 232, 0.3)"}`,"&:hover":{border:"1px solid #E6533C"},borderRadius:"12px",outline:"none"}),menuList:n=>({...n,overflowY:"auto",marginTop:"14px",marginRight:"7px","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb":{background:"rgba(239, 237, 232, 0.10)",borderRadius:"12px"}}),placeholder:n=>({...n,fontSize:"14px",lineHeight:"1.28",margin:"0",padding:"0"})},ao={...Ht,control:n=>({...n,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"146px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"192px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},uo={...Ht,control:n=>({...n,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"173px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"204px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},so=N.label`
  position: relative;
`,lo=N.div`
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
`,co=N.input`
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
`,po=N.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 14px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,fo=N.svg`
  stroke: var(--color-text);
  fill: transparent;
  width: 18px;
  height: 18px;
  transition: stroke 0.3s var(--timing-function);

  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,ho=N.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 40px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,mo=N.svg`
  stroke: var(--color-main-one);
  width: 18px;
  height: 18px;
`,vo=N.div`
  display: flex;
  gap: 16px;
`,st=[{value:"all",label:"All"},{value:"true",label:"Recommended "},{value:"false",label:"Not recommended"}],go=()=>{const[n,t]=h.useState(""),[i,r]=h.useState({value:"all",label:"All categories"}),[e,a]=h.useState(st[0]),u=Me();h.useEffect(()=>{u(lt({recommended:e.value,category:i.value,query:n}))},[e,i,n,u]),h.useEffect(()=>{u(Xt())},[u]);const l=p=>`${p[0].toUpperCase()}${p.slice(1)}`,o=ie(Jt),s=[{value:"all",label:"All categories"},...o.map(({_id:p,name:f})=>({value:p,label:l(f)}))],c=p=>{const{value:f}=p.target;t(f)},d=p=>{p.preventDefault();const f=p.target.elements[0].value;t(f)},v=()=>{t("")},b=p=>{r(p)},x=p=>{a(p)};return m.jsx(m.Fragment,{children:m.jsxs(lo,{children:[m.jsx("form",{onSubmit:d,children:m.jsxs(so,{children:[m.jsx(co,{type:"text",name:"productsSearch",placeholder:"Search",value:n,onChange:c}),n&&m.jsx(ho,{type:"button",onClick:v,children:m.jsx(mo,{children:m.jsx("use",{href:re+"#icon-cross"})})}),m.jsx(po,{type:"submit",children:m.jsx(fo,{children:m.jsx("use",{href:re+"#icon-search"})})})]})}),m.jsxs(vo,{children:[m.jsx(ut,{styles:ao,value:i,onChange:b,options:s,placeholder:"Categories",theme:p=>({...p,colors:{...p.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})}),m.jsx(ut,{styles:uo,value:e,onChange:x,options:st,theme:p=>({...p,colors:{...p.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})})]})]})})},bo=M.div`
  padding: 38px 22px;
`,xo=M.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,jt=M(mn)`
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
`,Eo=M(jt)`
  color: rgba(239, 237, 232, 0.3);
  border: 1px solid var(--color-main-one);

  @media screen and (min-width: 768px) {
    width: 244px;
  }
`,Co=M.label`
  display: block;
  position: relative;
`,So=M(jt)`
  @media screen and (min-width: 768px) {
    width: 155px;
  }
`,Fo=M.span`
  position: absolute;
  top: 50%;
  right: 14px;
  color: rgba(239, 237, 232, 0.4);
  transform: translate(0, -50%);
  /* color:; */
`,wo=M.p`
  margin-bottom: 24px;
  text-align: left;
  line-height: 1.5; /* 150% */
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,yo=M.span`
  color: var(--color-text);
`,Do=M.div`
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
`,Oo=M($t)`
  background-color: var(--color-main-one);
  border: 1px solid var(--color-main-one);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }
`,Io=M($t)`
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
`,Ao=M(vn)`
color: var(--color-wrong-one);
margin-top: 4px;
line-height: 1.5;
letter-spacing: 0.12px;
`,Mo=({id:n,title:t,calories:i,onClick:r,onClickSuccess:e})=>{const[a,u]=h.useState(0),l=Me(),o={product_id:n,date:fn(new Date,"yyyy-MM-dd"),weight:""},s=gn().shape({weight:bn().max(700,"Weight should be no more than 700 grams").required().positive()}),c=x=>{const p=i*x/100;return parseFloat(p)},d=(x,p)=>{const f=x.target.value,g=c(f);u(g),p("weight",Number(f)),p("calories",g)},v=(x,p)=>{e(),l(Qt(x)),p.resetForm(),r()},b=()=>{r()};return m.jsxs(m.Fragment,{children:[m.jsx(Zt,{}),m.jsx(xn,{initialValues:o,validationSchema:s,onSubmit:v,children:({values:x,setFieldValue:p})=>m.jsx(En,{autoComplete:"off",children:m.jsxs(bo,{children:[m.jsxs(xo,{children:[m.jsx("div",{children:m.jsx("label",{htmlFor:"product",children:m.jsx(Eo,{name:"product",type:"text",value:t,readOnly:!0})})}),m.jsx("div",{children:m.jsxs(Co,{htmlFor:"weight",children:[m.jsx(So,{name:"weight",type:"text",onChange:f=>d(f,p),onKeyPress:f=>{/^[0-9\b]+$/.test(f.key)||f.preventDefault()},value:x.weight}),m.jsx(Fo,{children:"grams"}),m.jsx(Ao,{name:"weight",component:"p"})]})})]}),m.jsxs(wo,{children:["Calories: ",m.jsx(yo,{children:a})]}),m.jsxs(Do,{children:[m.jsx(Oo,{type:"submit",children:"Add to diary"}),m.jsx(Io,{type:"button",onClick:b,children:"Cancel"})]})]})})})]})},Vo=M.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Po=M.img`
  width: 123px;
  height: 84px;
  margin-top: 48px;

`,Lo=M.h2`
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
`,Ro=M.p`
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
`,ko=M.button`
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
`,To=M(en)`
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
`,Bo="/PowerPulse2.0/assets/avocado-d29ef327.png",Ho=({onClick:n})=>{const t=ie(tn);return m.jsxs(Vo,{children:[m.jsx(Po,{src:Bo,alt:"avocado",loading:"lazy"}),m.jsx(Lo,{children:"Well done"}),m.jsxs(Ro,{children:["Calories: ",m.jsx("span",{children:t==null?void 0:t.calories})]}),m.jsx(ko,{type:"button",onClick:()=>n(),children:"Next product"}),m.jsxs(To,{to:"/diary",children:[m.jsx("span",{children:"To the dairy"}),m.jsx("svg",{children:m.jsx("use",{href:`${re}#icon-arrow`})})]})]})},jo=M.li`
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
`,$o=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,zo=M.div`
  padding: 5px 7.5px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  > p {
    margin: 0;
    font-weight: 700;
  }
`,Uo=M.div`
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
`,No=M.button`
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
`,_o=M.div`
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
`,Wo=M.div`
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
`,Go=M.ul`
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
`,Yo=M.p`
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
`,qo=({id:n,title:t,calories:i,category:r,weight:e,recommended:a})=>{const[u,l]=h.useState(!1),[o,s]=h.useState(!1),c=()=>{l(v=>!v)},d=()=>{s(v=>!v)};return m.jsxs(jo,{children:[u&&m.jsx(ze,{onClick:c,children:m.jsx(Mo,{id:n,title:t,calories:i,onClick:c,onClickSuccess:d})}),o&&m.jsx(ze,{onClick:d,children:m.jsx(Ho,{onClick:d})}),m.jsxs("section",{children:[m.jsxs($o,{children:[m.jsx(zo,{children:m.jsx("p",{children:"DIET"})}),m.jsxs(Uo,{children:[m.jsx("div",{}),m.jsx("p",{children:a?"Recommended":"Not recommended"}),m.jsxs(No,{type:"button",onClick:c,children:[m.jsx("span",{children:"Add"}),m.jsx("svg",{children:m.jsx("use",{href:`${re}#icon-next`})})]})]})]}),m.jsxs(_o,{children:[m.jsx(Wo,{children:m.jsx("svg",{children:m.jsx("use",{href:`${re}#icon-run`})})}),m.jsx("h2",{children:t})]}),m.jsxs(Go,{children:[m.jsx("li",{children:m.jsxs("p",{children:["Calories:",m.jsx("span",{children:i})]})}),m.jsx("li",{children:m.jsxs(Yo,{children:["Category:",m.jsx("span",{children:r})]})}),m.jsx("li",{children:m.jsxs("p",{children:["Weight:",m.jsx("span",{children:e})]})})]})]})]},n)},Ko=M.ul`
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
`,Xo=!1,Jo=n=>`${n[0].toUpperCase()}${n.slice(1)}`,Zo=()=>{const n=Me(),t=ie(nn);return h.useEffect(()=>{n(lt())},[n]),m.jsx(Ko,{children:t.map(i=>m.jsx(qo,{id:i._id,title:i.title,calories:i.calories,category:Jo(i.category.name),weight:i.weight,recommended:Xo},i._id))})},Qo=N.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,ea=N.div`
  position: relative;
`,ta=N.span`
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
`,aa=()=>{const n=ie(rn),t=ie(on);return m.jsx(an,{children:m.jsxs(ea,{children:[m.jsx(ta,{children:"Filters"}),m.jsx(Qo,{children:m.jsx(hn,{children:"Products"})}),m.jsx(go,{}),n&&!t&&m.jsx(un,{}),m.jsx(Zo,{})]})})};export{aa as default};
