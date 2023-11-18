import{i as Nt,r as f,E as zt,k as _t,m as Wt,_ as S,n as Gt,o as ae,p as y,q as Yt,t as ee,u as lt,v as ct,w as qt,b as pe,x as Xt,y as xe,j as x,c as ie,s as B,a as Kt,B as Qt,z as Zt,A as Jt,C as en,S as tn,d as nn}from"./index-b2412a4a.js";import{_ as dt,a as rn,b as on,c as an,d as un,e as sn}from"./createSuper-df9408f4.js";import{T as ln}from"./TitlePage-09e92244.js";function cn(n,t){if(n==null)return{};var i={},r=Object.keys(n),e,a;for(a=0;a<r.length;a++)e=r[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}var C=function(t,i){var r=arguments;if(i==null||!Nt.call(i,"css"))return f.createElement.apply(void 0,r);var e=r.length,a=new Array(e);a[0]=zt,a[1]=_t(t,i);for(var u=2;u<e;u++)a[u]=r[u];return f.createElement.apply(null,a)};function Ve(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return Wt(t)}var dn=function(){var t=Ve.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function pn(n){if(Array.isArray(n))return n}function fn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,e,a,u,l=[],o=!0,s=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;o=!1}else for(;!(o=(r=a.call(i)).done)&&(l.push(r.value),l.length!==t);o=!0);}catch(c){s=!0,e=c}finally{try{if(!o&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw e}}return l}}function hn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(n,t){return pn(n)||fn(n,t)||dt(n,t)||hn()}function X(n,t){if(n==null)return{};var i=cn(n,t),r,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var vn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function mn(n){var t=n.defaultInputValue,i=t===void 0?"":t,r=n.defaultMenuIsOpen,e=r===void 0?!1:r,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,o=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,m=n.onMenuOpen,v=n.value,E=X(n,vn),g=f.useState(l!==void 0?l:i),p=q(g,2),h=p[0],F=p[1],w=f.useState(o!==void 0?o:e),b=q(w,2),D=b[0],I=b[1],A=f.useState(v!==void 0?v:u),O=q(A,2),M=O[0],T=O[1],H=f.useCallback(function(j,K){typeof s=="function"&&s(j,K),T(j)},[s]),k=f.useCallback(function(j,K){var Q;typeof c=="function"&&(Q=c(j,K)),F(Q!==void 0?Q:j)},[c]),_=f.useCallback(function(){typeof m=="function"&&m(),I(!0)},[m]),W=f.useCallback(function(){typeof d=="function"&&d(),I(!1)},[d]),R=l!==void 0?l:h,P=o!==void 0?o:D,z=v!==void 0?v:M;return S(S({},E),{},{inputValue:R,menuIsOpen:P,onChange:H,onInputChange:k,onMenuClose:W,onMenuOpen:_,value:z})}function gn(n){if(Array.isArray(n))return rn(n)}function bn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function En(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(n){return gn(n)||bn(n)||dt(n)||En()}function xn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Cn=Math.min,Sn=Math.max,fe=Math.round,ue=Math.floor,he=n=>({x:n,y:n});function Fn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function pt(n){return ht(n)?(n.nodeName||"").toLowerCase():"#document"}function N(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function ft(n){var t;return(t=(ht(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function ht(n){return n instanceof Node||n instanceof N(n).Node}function Ie(n){return n instanceof Element||n instanceof N(n).Element}function Le(n){return n instanceof HTMLElement||n instanceof N(n).HTMLElement}function Ue(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof N(n).ShadowRoot}function vt(n){const{overflow:t,overflowX:i,overflowY:r,display:e}=Re(n);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!["inline","contents"].includes(e)}function yn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Dn(n){return["html","body","#document"].includes(pt(n))}function Re(n){return N(n).getComputedStyle(n)}function wn(n){if(pt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ue(n)&&n.host||ft(n);return Ue(t)?t.host:t}function mt(n){const t=wn(n);return Dn(t)?n.ownerDocument?n.ownerDocument.body:n.body:Le(t)&&vt(t)?t:mt(t)}function ve(n,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=mt(n),a=e===((r=n.ownerDocument)==null?void 0:r.body),u=N(e);return a?t.concat(u,u.visualViewport||[],vt(e)?e:[],u.frameElement&&i?ve(u.frameElement):[]):t.concat(e,ve(e,[],i))}function On(n){const t=Re(n);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const e=Le(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:r,l=fe(i)!==a||fe(r)!==u;return l&&(i=a,r=u),{width:i,height:r,$:l}}function Te(n){return Ie(n)?n:n.contextElement}function Ce(n){const t=Te(n);if(!Le(t))return he(1);const i=t.getBoundingClientRect(),{width:r,height:e,$:a}=On(t);let u=(a?fe(i.width):i.width)/r,l=(a?fe(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const In=he(0);function An(n){const t=N(n);return!yn()||!t.visualViewport?In:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Mn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==N(n)?!1:t}function Ne(n,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=Te(n);let u=he(1);t&&(r?Ie(r)&&(u=Ce(r)):u=Ce(n));const l=Mn(a,i,r)?An(a):he(0);let o=(e.left+l.x)/u.x,s=(e.top+l.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const m=N(a),v=r&&Ie(r)?N(r):r;let E=m.frameElement;for(;E&&r&&v!==m;){const g=Ce(E),p=E.getBoundingClientRect(),h=Re(E),F=p.left+(E.clientLeft+parseFloat(h.paddingLeft))*g.x,w=p.top+(E.clientTop+parseFloat(h.paddingTop))*g.y;o*=g.x,s*=g.y,c*=g.x,d*=g.y,o+=F,s+=w,E=N(E).frameElement}}return Fn({width:c,height:d,x:o,y:s})}function Vn(n,t){let i=null,r;const e=ft(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function u(l,o){l===void 0&&(l=!1),o===void 0&&(o=1),a();const{left:s,top:c,width:d,height:m}=n.getBoundingClientRect();if(l||t(),!d||!m)return;const v=ue(c),E=ue(e.clientWidth-(s+d)),g=ue(e.clientHeight-(c+m)),p=ue(s),F={rootMargin:-v+"px "+-E+"px "+-g+"px "+-p+"px",threshold:Sn(0,Cn(1,o))||1};let w=!0;function b(D){const I=D[0].intersectionRatio;if(I!==o){if(!w)return u();I?u(!1,I):r=setTimeout(()=>{u(!1,1e-7)},100)}w=!1}try{i=new IntersectionObserver(b,{...F,root:e.ownerDocument})}catch{i=new IntersectionObserver(b,F)}i.observe(n)}return u(!0),a}function Pn(n,t,i,r){r===void 0&&(r={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,s=Te(n),c=e||a?[...s?ve(s):[],...ve(t)]:[];c.forEach(h=>{e&&h.addEventListener("scroll",i,{passive:!0}),a&&h.addEventListener("resize",i)});const d=s&&l?Vn(s,i):null;let m=-1,v=null;u&&(v=new ResizeObserver(h=>{let[F]=h;F&&F.target===s&&v&&(v.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{v&&v.observe(t)})),i()}),s&&!o&&v.observe(s),v.observe(t));let E,g=o?Ne(n):null;o&&p();function p(){const h=Ne(n);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&i(),g=h,E=requestAnimationFrame(p)}return i(),()=>{c.forEach(h=>{e&&h.removeEventListener("scroll",i),a&&h.removeEventListener("resize",i)}),d&&d(),v&&v.disconnect(),v=null,o&&cancelAnimationFrame(E)}}var Ae=f.useLayoutEffect,Ln=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],me=function(){};function Rn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function Tn(n,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),e=2;e<i;e++)r[e-2]=arguments[e];var a=[].concat(r);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(Rn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var ze=function(t){return _n(t)?t.filter(Boolean):Gt(t)==="object"&&t!==null?[t]:[]},gt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=X(t,Ln);return S({},i)},V=function(t,i,r){var e=t.cx,a=t.getStyles,u=t.getClassNames,l=t.className;return{css:a(i,t),className:e(r??{},u(i,t),l)}};function Ee(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function kn(n){return Ee(n)?window.innerHeight:n.clientHeight}function bt(n){return Ee(n)?window.pageYOffset:n.scrollTop}function ge(n,t){if(Ee(n)){window.scrollTo(0,t);return}n.scrollTop=t}function Bn(n){var t=getComputedStyle(n),i=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Hn(n,t,i,r){return i*((n=n/r-1)*n*n+1)+t}function se(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:me,e=bt(n),a=t-e,u=10,l=0;function o(){l+=u;var s=Hn(l,e,a,i);ge(n,s),l<i?window.requestAnimationFrame(o):r(n)}o()}function _e(n,t){var i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),e=t.offsetHeight/3;r.bottom+e>i.bottom?ge(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):r.top-e<i.top&&ge(n,Math.max(t.offsetTop-e,0))}function $n(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function We(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function jn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Et=!1,Un={get passive(){return Et=!0}},le=typeof window<"u"?window:{};le.addEventListener&&le.removeEventListener&&(le.addEventListener("p",me,Un),le.removeEventListener("p",me,!1));var Nn=Et;function zn(n){return n!=null}function _n(n){return Array.isArray(n)}function ce(n,t,i){return n?t:i}var Wn=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),e=1;e<i;e++)r[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var l=q(u,1),o=l[0];return!r.includes(o)});return a.reduce(function(u,l){var o=q(l,2),s=o[0],c=o[1];return u[s]=c,u},{})},Gn=["children","innerProps"],Yn=["children","innerProps"];function qn(n){var t=n.maxHeight,i=n.menuEl,r=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,o=Bn(i),s={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return s;var c=o.getBoundingClientRect(),d=c.height,m=i.getBoundingClientRect(),v=m.bottom,E=m.height,g=m.top,p=i.offsetParent.getBoundingClientRect(),h=p.top,F=u?window.innerHeight:kn(o),w=bt(o),b=parseInt(getComputedStyle(i).marginBottom,10),D=parseInt(getComputedStyle(i).marginTop,10),I=h-D,A=F-g,O=I+w,M=d-w-g,T=v-F+w+b,H=w+g-D,k=160;switch(e){case"auto":case"bottom":if(A>=E)return{placement:"bottom",maxHeight:t};if(M>=E&&!u)return a&&se(o,T,k),{placement:"bottom",maxHeight:t};if(!u&&M>=r||u&&A>=r){a&&se(o,T,k);var _=u?A-b:M-b;return{placement:"bottom",maxHeight:_}}if(e==="auto"||u){var W=t,R=u?I:O;return R>=r&&(W=Math.min(R-b-l,t)),{placement:"top",maxHeight:W}}if(e==="bottom")return a&&ge(o,T),{placement:"bottom",maxHeight:t};break;case"top":if(I>=E)return{placement:"top",maxHeight:t};if(O>=E&&!u)return a&&se(o,H,k),{placement:"top",maxHeight:t};if(!u&&O>=r||u&&I>=r){var P=t;return(!u&&O>=r||u&&I>=r)&&(P=u?I-D:O-D),a&&se(o,H,k),{placement:"top",maxHeight:P}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function Xn(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var xt=function(t){return t==="auto"?"bottom":t},Kn=function(t,i){var r,e=t.placement,a=t.theme,u=a.borderRadius,l=a.spacing,o=a.colors;return S((r={label:"menu"},ae(r,Xn(e),"100%"),ae(r,"position","absolute"),ae(r,"width","100%"),ae(r,"zIndex",1),r),i?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Ct=f.createContext(null),Qn=function(t){var i=t.children,r=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,l=t.menuShouldScrollIntoView,o=t.theme,s=f.useContext(Ct)||{},c=s.setPortalPlacement,d=f.useRef(null),m=f.useState(e),v=q(m,2),E=v[0],g=v[1],p=f.useState(null),h=q(p,2),F=h[0],w=h[1],b=o.spacing.controlHeight;return Ae(function(){var D=d.current;if(D){var I=u==="fixed",A=l&&!I,O=qn({maxHeight:e,menuEl:D,minHeight:r,placement:a,shouldScroll:A,isFixedPosition:I,controlHeight:b});g(O.maxHeight),w(O.placement),c==null||c(O.placement)}},[e,a,u,l,r,c,b]),i({ref:d,placerProps:S(S({},t),{},{placement:F||xt(a),maxHeight:E})})},Zn=function(t){var i=t.children,r=t.innerRef,e=t.innerProps;return C("div",y({},V(t,"menu",{menu:!0}),{ref:r},e),i)},Jn=Zn,ei=function(t,i){var r=t.maxHeight,e=t.theme.spacing.baseUnit;return S({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},ti=function(t){var i=t.children,r=t.innerProps,e=t.innerRef,a=t.isMulti;return C("div",y({},V(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},r),i)},St=function(t,i){var r=t.theme,e=r.spacing.baseUnit,a=r.colors;return S({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},ni=St,ii=St,ri=function(t){var i=t.children,r=i===void 0?"No options":i,e=t.innerProps,a=X(t,Gn);return C("div",y({},V(S(S({},a),{},{children:r,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),r)},oi=function(t){var i=t.children,r=i===void 0?"Loading...":i,e=t.innerProps,a=X(t,Yn);return C("div",y({},V(S(S({},a),{},{children:r,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),r)},ai=function(t){var i=t.rect,r=t.offset,e=t.position;return{left:i.left,position:e,top:r,width:i.width,zIndex:1}},ui=function(t){var i=t.appendTo,r=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,l=t.menuPosition,o=f.useRef(null),s=f.useRef(null),c=f.useState(xt(u)),d=q(c,2),m=d[0],v=d[1],E=f.useMemo(function(){return{setPortalPlacement:v}},[]),g=f.useState(null),p=q(g,2),h=p[0],F=p[1],w=f.useCallback(function(){if(e){var A=$n(e),O=l==="fixed"?0:window.pageYOffset,M=A[m]+O;(M!==(h==null?void 0:h.offset)||A.left!==(h==null?void 0:h.rect.left)||A.width!==(h==null?void 0:h.rect.width))&&F({offset:M,rect:A})}},[e,l,m,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Ae(function(){w()},[w]);var b=f.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&o.current&&(s.current=Pn(e,o.current,w,{elementResize:"ResizeObserver"in window}))},[e,w]);Ae(function(){b()},[b]);var D=f.useCallback(function(A){o.current=A,b()},[b]);if(!i&&l!=="fixed"||!h)return null;var I=C("div",y({ref:D},V(S(S({},t),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),a),r);return C(Ct.Provider,{value:E},i?Yt.createPortal(I,i):I)},si=function(t){var i=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},li=function(t){var i=t.children,r=t.innerProps,e=t.isDisabled,a=t.isRtl;return C("div",y({},V(t,"container",{"--is-disabled":e,"--is-rtl":a}),r),i)},ci=function(t,i){var r=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},di=function(t){var i=t.children,r=t.innerProps,e=t.isMulti,a=t.hasValue;return C("div",y({},V(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),r),i)},pi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},fi=function(t){var i=t.children,r=t.innerProps;return C("div",y({},V(t,"indicatorsContainer",{indicators:!0}),r),i)},Ge,hi=["size"],vi=["innerProps","isRtl","size"],mi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ft=function(t){var i=t.size,r=X(t,hi);return C("svg",y({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:mi},r))},ke=function(t){return C(Ft,y({size:20},t),C("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},yt=function(t){return C(Ft,y({size:20},t),C("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Dt=function(t,i){var r=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?u.neutral60:u.neutral20,padding:a*2,":hover":{color:r?u.neutral80:u.neutral40}})},gi=Dt,bi=function(t){var i=t.children,r=t.innerProps;return C("div",y({},V(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||C(yt,null))},Ei=Dt,xi=function(t){var i=t.children,r=t.innerProps;return C("div",y({},V(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||C(ke,null))},Ci=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Si=function(t){var i=t.innerProps;return C("span",y({},i,V(t,"indicatorSeparator",{"indicator-separator":!0})))},Fi=dn(Ge||(Ge=xn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),yi=function(t,i){var r=t.isFocused,e=t.size,a=t.theme,u=a.colors,l=a.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?u.neutral60:u.neutral20,padding:l*2})},Se=function(t){var i=t.delay,r=t.offset;return C("span",{css:Ve({animation:"".concat(Fi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Di=function(t){var i=t.innerProps,r=t.isRtl,e=t.size,a=e===void 0?4:e,u=X(t,vi);return C("div",y({},V(S(S({},u),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),C(Se,{delay:0,offset:r}),C(Se,{delay:160,offset:!0}),C(Se,{delay:320,offset:!r}))},wi=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,l=a.borderRadius,o=a.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:e?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Oi=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,l=t.menuIsOpen;return C("div",y({ref:a},V(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":e,"control--menu-is-open":l}),u,{"aria-disabled":r||void 0}),i)},Ii=Oi,Ai=["data"],Mi=function(t,i){var r=t.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Vi=function(t){var i=t.children,r=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,l=t.headingProps,o=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return C("div",y({},V(t,"group",{group:!0}),o),C(u,y({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:r}),s),C("div",null,i))},Pi=function(t,i){var r=t.theme,e=r.colors,a=r.spacing;return S({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Li=function(t){var i=gt(t);i.data;var r=X(i,Ai);return C("div",y({},V(t,"groupHeading",{"group-heading":!0}),r))},Ri=Vi,Ti=["innerRef","isDisabled","isHidden","inputClassName"],ki=function(t,i){var r=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,l=a.colors;return S(S({visibility:r?"hidden":"visible",transform:e?"translateZ(0)":""},Bi),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},wt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Bi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},wt)},Hi=function(t){return S({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},wt)},$i=function(t){var i=t.cx,r=t.value,e=gt(t),a=e.innerRef,u=e.isDisabled,l=e.isHidden,o=e.inputClassName,s=X(e,Ti);return C("div",y({},V(t,"input",{"input-container":!0}),{"data-value":r||""}),C("input",y({className:i({input:!0},o),ref:a,style:Hi(l),disabled:u},s)))},ji=$i,Ui=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors;return S({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},Ni=function(t,i){var r=t.theme,e=r.borderRadius,a=r.colors,u=t.cropWithEllipsis;return S({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},zi=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors,l=t.isFocused;return S({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Ot=function(t){var i=t.children,r=t.innerProps;return C("div",r,i)},_i=Ot,Wi=Ot;function Gi(n){var t=n.children,i=n.innerProps;return C("div",y({role:"button"},i),t||C(ke,{size:14}))}var Yi=function(t){var i=t.children,r=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,l=t.removeProps,o=t.selectProps,s=r.Container,c=r.Label,d=r.Remove;return C(s,{data:e,innerProps:S(S({},V(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},C(c,{data:e,innerProps:S({},V(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},i),C(d,{data:e,innerProps:S(S({},V(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:o}))},qi=Yi,Xi=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,l=u.spacing,o=u.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?o.primary:e?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},Ki=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,l=t.innerProps;return C("div",y({},V(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":r},l),i)},Qi=Ki,Zi=function(t,i){var r=t.theme,e=r.spacing,a=r.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},Ji=function(t){var i=t.children,r=t.innerProps;return C("div",y({},V(t,"placeholder",{placeholder:!0}),r),i)},er=Ji,tr=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},nr=function(t){var i=t.children,r=t.isDisabled,e=t.innerProps;return C("div",y({},V(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),e),i)},ir=nr,rr={ClearIndicator:xi,Control:Ii,DropdownIndicator:bi,DownChevron:yt,CrossIcon:ke,Group:Ri,GroupHeading:Li,IndicatorsContainer:fi,IndicatorSeparator:Si,Input:ji,LoadingIndicator:Di,Menu:Jn,MenuList:ti,MenuPortal:ui,LoadingMessage:oi,NoOptionsMessage:ri,MultiValue:qi,MultiValueContainer:_i,MultiValueLabel:Wi,MultiValueRemove:Gi,Option:Qi,Placeholder:er,SelectContainer:li,SingleValue:ir,ValueContainer:di},or=function(t){return S(S({},rr),t.components)},Ye=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ar(n,t){return!!(n===t||Ye(n)&&Ye(t))}function ur(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!ar(n[i],t[i]))return!1;return!0}function sr(n,t){t===void 0&&(t=ur);var i=null;function r(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return r.clear=function(){i=null},r}var lr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},cr=function(t){return C("span",y({css:lr},t))},qe=cr,dr={guidance:function(t){var i=t.isSearchable,r=t.isMulti,e=t.tabSelectsValue,a=t.context,u=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,r=t.label,e=r===void 0?"":r,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,r=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,l=t.selectValue,o=t.isDisabled,s=t.isSelected,c=t.isAppleDevice,d=function(g,p){return g&&g.length?"".concat(g.indexOf(p)+1," of ").concat(g.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,r),".");if(i==="menu"&&c){var m=o?" disabled":"",v="".concat(s?" selected":"").concat(m);return"".concat(u).concat(v,", ").concat(d(e,r),".")}return""},onFilter:function(t){var i=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},pr=function(t){var i=t.ariaSelection,r=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,l=t.selectValue,o=t.selectProps,s=t.id,c=t.isAppleDevice,d=o.ariaLiveMessages,m=o.getOptionLabel,v=o.inputValue,E=o.isMulti,g=o.isOptionDisabled,p=o.isSearchable,h=o.menuIsOpen,F=o.options,w=o.screenReaderStatus,b=o.tabSelectsValue,D=o.isLoading,I=o["aria-label"],A=o["aria-live"],O=f.useMemo(function(){return S(S({},dr),d||{})},[d]),M=f.useMemo(function(){var R="";if(i&&O.onChange){var P=i.option,z=i.options,j=i.removedValue,K=i.removedValues,Q=i.value,re=function(Y){return Array.isArray(Y)?null:Y},L=j||P||re(Q),$=L?m(L):"",G=z||K||void 0,Z=G?G.map(m):[],U=S({isDisabled:L&&g(L,l),label:$,labels:Z},i);R=O.onChange(U)}return R},[i,O,g,l,m]),T=f.useMemo(function(){var R="",P=r||e,z=!!(r&&l&&l.includes(r));if(P&&O.onFocus){var j={focused:P,label:m(P),isDisabled:g(P,l),isSelected:z,options:a,context:P===r?"menu":"value",selectValue:l,isAppleDevice:c};R=O.onFocus(j)}return R},[r,e,m,g,O,a,l,c]),H=f.useMemo(function(){var R="";if(h&&F.length&&!D&&O.onFilter){var P=w({count:a.length});R=O.onFilter({inputValue:v,resultsMessage:P})}return R},[a,v,h,O,F,w,D]),k=(i==null?void 0:i.action)==="initial-input-focus",_=f.useMemo(function(){var R="";if(O.guidance){var P=e?"value":h?"menu":"input";R=O.guidance({"aria-label":I,context:P,isDisabled:r&&g(r,l),isMulti:E,isSearchable:p,tabSelectsValue:b,isInitialFocus:k})}return R},[I,r,e,E,g,p,h,O,l,b,k]),W=C(f.Fragment,null,C("span",{id:"aria-selection"},M),C("span",{id:"aria-focused"},T),C("span",{id:"aria-results"},H),C("span",{id:"aria-guidance"},_));return C(f.Fragment,null,C(qe,{id:s},k&&W),C(qe,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!k&&W))},fr=pr,Me=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],hr=new RegExp("["+Me.map(function(n){return n.letters}).join("")+"]","g"),It={};for(var Fe=0;Fe<Me.length;Fe++)for(var ye=Me[Fe],De=0;De<ye.letters.length;De++)It[ye.letters[De]]=ye.base;var At=function(t){return t.replace(hr,function(i){return It[i]})},vr=sr(At),Xe=function(t){return t.replace(/^\s+|\s+$/g,"")},mr=function(t){return"".concat(t.label," ").concat(t.value)},gr=function(t){return function(i,r){if(i.data.__isNew__)return!0;var e=S({ignoreCase:!0,ignoreAccents:!0,stringify:mr,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,l=e.stringify,o=e.trim,s=e.matchFrom,c=o?Xe(r):r,d=o?Xe(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=vr(c),d=At(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},br=["innerRef"];function Er(n){var t=n.innerRef,i=X(n,br),r=Wn(i,"onExited","in","enter","exit","appear");return C("input",y({ref:t},r,{css:Ve({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var xr=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Cr(n){var t=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=f.useRef(!1),l=f.useRef(!1),o=f.useRef(0),s=f.useRef(null),c=f.useCallback(function(p,h){if(s.current!==null){var F=s.current,w=F.scrollTop,b=F.scrollHeight,D=F.clientHeight,I=s.current,A=h>0,O=b-D-w,M=!1;O>h&&u.current&&(r&&r(p),u.current=!1),A&&l.current&&(a&&a(p),l.current=!1),A&&h>O?(i&&!u.current&&i(p),I.scrollTop=b,M=!0,u.current=!0):!A&&-h>w&&(e&&!l.current&&e(p),I.scrollTop=0,M=!0,l.current=!0),M&&xr(p)}},[i,r,e,a]),d=f.useCallback(function(p){c(p,p.deltaY)},[c]),m=f.useCallback(function(p){o.current=p.changedTouches[0].clientY},[]),v=f.useCallback(function(p){var h=o.current-p.changedTouches[0].clientY;c(p,h)},[c]),E=f.useCallback(function(p){if(p){var h=Nn?{passive:!1}:!1;p.addEventListener("wheel",d,h),p.addEventListener("touchstart",m,h),p.addEventListener("touchmove",v,h)}},[v,m,d]),g=f.useCallback(function(p){p&&(p.removeEventListener("wheel",d,!1),p.removeEventListener("touchstart",m,!1),p.removeEventListener("touchmove",v,!1))},[v,m,d]);return f.useEffect(function(){if(t){var p=s.current;return E(p),function(){g(p)}}},[t,E,g]),function(p){s.current=p}}var Ke=["boxSizing","height","overflow","paddingRight","position"],Qe={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ze(n){n.preventDefault()}function Je(n){n.stopPropagation()}function et(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function tt(){return"ontouchstart"in window||navigator.maxTouchPoints}var nt=!!(typeof window<"u"&&window.document&&window.document.createElement),ne=0,te={capture:!1,passive:!1};function Sr(n){var t=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,e=f.useRef({}),a=f.useRef(null),u=f.useCallback(function(o){if(nt){var s=document.body,c=s&&s.style;if(r&&Ke.forEach(function(E){var g=c&&c[E];e.current[E]=g}),r&&ne<1){var d=parseInt(e.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,v=window.innerWidth-m+d||0;Object.keys(Qe).forEach(function(E){var g=Qe[E];c&&(c[E]=g)}),c&&(c.paddingRight="".concat(v,"px"))}s&&tt()&&(s.addEventListener("touchmove",Ze,te),o&&(o.addEventListener("touchstart",et,te),o.addEventListener("touchmove",Je,te))),ne+=1}},[r]),l=f.useCallback(function(o){if(nt){var s=document.body,c=s&&s.style;ne=Math.max(ne-1,0),r&&ne<1&&Ke.forEach(function(d){var m=e.current[d];c&&(c[d]=m)}),s&&tt()&&(s.removeEventListener("touchmove",Ze,te),o&&(o.removeEventListener("touchstart",et,te),o.removeEventListener("touchmove",Je,te)))}},[r]);return f.useEffect(function(){if(t){var o=a.current;return u(o),function(){l(o)}}},[t,u,l]),function(o){a.current=o}}var Fr=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},yr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Dr(n){var t=n.children,i=n.lockEnabled,r=n.captureEnabled,e=r===void 0?!0:r,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,o=n.onTopLeave,s=Cr({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:o}),c=Sr({isEnabled:i}),d=function(v){s(v),c(v)};return C(f.Fragment,null,i&&C("div",{onClick:Fr,css:yr}),t(d))}var wr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Or=function(t){var i=t.name,r=t.onFocus;return C("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:wr,value:"",onChange:function(){}})},Ir=Or;function Be(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function Ar(){return Be(/^iPhone/i)}function Mt(){return Be(/^Mac/i)}function Mr(){return Be(/^iPad/i)||Mt()&&navigator.maxTouchPoints>1}function Vr(){return Ar()||Mr()}function Pr(){return Mt()||Vr()}var Lr=function(t){return t.label},Rr=function(t){return t.label},Tr=function(t){return t.value},kr=function(t){return!!t.isDisabled},Br={clearIndicator:Ei,container:si,control:wi,dropdownIndicator:gi,group:Mi,groupHeading:Pi,indicatorsContainer:pi,indicatorSeparator:Ci,input:ki,loadingIndicator:yi,loadingMessage:ii,menu:Kn,menuList:ei,menuPortal:ai,multiValue:Ui,multiValueLabel:Ni,multiValueRemove:zi,noOptionsMessage:ni,option:Xi,placeholder:Zi,singleValue:tr,valueContainer:ci},Hr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},$r=4,Vt=4,jr=38,Ur=Vt*2,Nr={baseUnit:Vt,controlHeight:jr,menuGutter:Ur},we={borderRadius:$r,colors:Hr,spacing:Nr},zr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:We(),captureMenuScroll:!We(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:gr(),formatGroupLabel:Lr,getOptionLabel:Rr,getOptionValue:Tr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:kr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!jn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function it(n,t,i,r){var e=Rt(n,t,i),a=Tt(n,t,i),u=Lt(n,t),l=be(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:l,index:r}}function de(n,t){return n.options.map(function(i,r){if("options"in i){var e=i.options.map(function(u,l){return it(n,u,t,l)}).filter(function(u){return ot(n,u)});return e.length>0?{type:"group",data:i,options:e,index:r}:void 0}var a=it(n,i,t,r);return ot(n,a)?a:void 0}).filter(zn)}function Pt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,Pe(i.options.map(function(r){return r.data}))):t.push(i.data),t},[])}function rt(n,t){return n.reduce(function(i,r){return r.type==="group"?i.push.apply(i,Pe(r.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(r.index,"-").concat(e.index)}}))):i.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),i},[])}function _r(n,t){return Pt(de(n,t))}function ot(n,t){var i=n.inputValue,r=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,l=t.value;return(!Bt(n)||!a)&&kt(n,{label:u,value:l,data:e},r)}function Wr(n,t){var i=n.focusedValue,r=n.selectValue,e=r.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function Gr(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Oe=function(t,i){var r,e=(r=t.find(function(a){return a.data===i}))===null||r===void 0?void 0:r.id;return e||null},Lt=function(t,i){return t.getOptionLabel(i)},be=function(t,i){return t.getOptionValue(i)};function Rt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function Tt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var r=be(n,t);return i.some(function(e){return be(n,e)===r})}function kt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Bt=function(t){var i=t.hideSelectedOptions,r=t.isMulti;return i===void 0?r:i},Yr=1,Ht=function(n){on(i,n);var t=an(i);function i(r){var e;if(un(this,i),e=t.call(this,r),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=Pr(),e.controlRef=null,e.getControlRef=function(o){e.controlRef=o},e.focusedOptionRef=null,e.getFocusedOptionRef=function(o){e.focusedOptionRef=o},e.menuListRef=null,e.getMenuListRef=function(o){e.menuListRef=o},e.inputRef=null,e.getInputRef=function(o){e.inputRef=o},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(o,s){var c=e.props,d=c.onChange,m=c.name;s.name=m,e.ariaOnChange(o,s),d(o,s)},e.setValue=function(o,s,c){var d=e.props,m=d.closeMenuOnSelect,v=d.isMulti,E=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:E}),m&&(e.setState({inputIsHiddenAfterUpdate:!v}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(o,{action:s,option:c})},e.selectOption=function(o){var s=e.props,c=s.blurInputOnSelect,d=s.isMulti,m=s.name,v=e.state.selectValue,E=d&&e.isOptionSelected(o,v),g=e.isOptionDisabled(o,v);if(E){var p=e.getOptionValue(o);e.setValue(v.filter(function(h){return e.getOptionValue(h)!==p}),"deselect-option",o)}else if(!g)d?e.setValue([].concat(Pe(v),[o]),"select-option",o):e.setValue(o,"select-option");else{e.ariaOnChange(o,{action:"select-option",option:o,name:m});return}c&&e.blurInput()},e.removeValue=function(o){var s=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(o),m=c.filter(function(E){return e.getOptionValue(E)!==d}),v=ce(s,m,m[0]||null);e.onChange(v,{action:"remove-value",removedValue:o}),e.focusInput()},e.clearValue=function(){var o=e.state.selectValue;e.onChange(ce(e.props.isMulti,[],null),{action:"clear",removedValues:o})},e.popValue=function(){var o=e.props.isMulti,s=e.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),m=ce(o,d,d[0]||null);e.onChange(m,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(o){return Oe(e.state.focusableOptionsWithIds,o)},e.getFocusableOptionsWithIds=function(){return rt(de(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return Tn.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(o){return Lt(e.props,o)},e.getOptionValue=function(o){return be(e.props,o)},e.getStyles=function(o,s){var c=e.props.unstyled,d=Br[o](s,c);d.boxSizing="border-box";var m=e.props.styles[o];return m?m(d,s):d},e.getClassNames=function(o,s){var c,d;return(c=(d=e.props.classNames)[o])===null||c===void 0?void 0:c.call(d,s)},e.getElementId=function(o){return"".concat(e.state.instancePrefix,"-").concat(o)},e.getComponents=function(){return or(e.props)},e.buildCategorizedOptions=function(){return de(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return Pt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(o,s){e.setState({ariaSelection:S({value:o},s)})},e.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(o){e.blockOptionHover=!1},e.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},e.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!e.props.isDisabled){var s=e.props,c=s.isMulti,d=s.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),o.preventDefault()}},e.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(e.clearValue(),o.preventDefault(),e.openAfterFocus=!1,o.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(o){typeof e.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ee(o.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(o)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(o){var s=o.touches,c=s&&s.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(o){var s=o.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),m=Math.abs(c.clientY-e.initialTouchY),v=5;e.userIsDragging=d>v||m>v}},e.onTouchEnd=function(o){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(o.target)&&e.menuListRef&&!e.menuListRef.contains(o.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(o){e.userIsDragging||e.onControlMouseDown(o)},e.onClearIndicatorTouchEnd=function(o){e.userIsDragging||e.onClearIndicatorMouseDown(o)},e.onDropdownIndicatorTouchEnd=function(o){e.userIsDragging||e.onDropdownIndicatorMouseDown(o)},e.handleInputChange=function(o){var s=e.props.inputValue,c=o.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(o){e.props.onFocus&&e.props.onFocus(o),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(o){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(o),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(o){if(!(e.blockOptionHover||e.state.focusedOption===o)){var s=e.getFocusableOptions(),c=s.indexOf(o);e.setState({focusedOption:o,focusedOptionId:c>-1?e.getFocusedOptionId(o):null})}},e.shouldHideSelectedOptions=function(){return Bt(e.props)},e.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),e.focus()},e.onKeyDown=function(o){var s=e.props,c=s.isMulti,d=s.backspaceRemovesValue,m=s.escapeClearsValue,v=s.inputValue,E=s.isClearable,g=s.isDisabled,p=s.menuIsOpen,h=s.onKeyDown,F=s.tabSelectsValue,w=s.openMenuOnFocus,b=e.state,D=b.focusedOption,I=b.focusedValue,A=b.selectValue;if(!g&&!(typeof h=="function"&&(h(o),o.defaultPrevented))){switch(e.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||v)return;e.focusValue("previous");break;case"ArrowRight":if(!c||v)return;e.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(I)e.removeValue(I);else{if(!d)return;c?e.popValue():E&&e.clearValue()}break;case"Tab":if(e.isComposing||o.shiftKey||!p||!F||!D||w&&e.isOptionSelected(D,A))return;e.selectOption(D);break;case"Enter":if(o.keyCode===229)break;if(p){if(!D||e.isComposing)return;e.selectOption(D);break}return;case"Escape":p?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:v}),e.onMenuClose()):E&&m&&e.clearValue();break;case" ":if(v)return;if(!p){e.openMenu("first");break}if(!D)return;e.selectOption(D);break;case"ArrowUp":p?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":p?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!p)return;e.focusOption("pageup");break;case"PageDown":if(!p)return;e.focusOption("pagedown");break;case"Home":if(!p)return;e.focusOption("first");break;case"End":if(!p)return;e.focusOption("last");break;default:return}o.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++Yr),e.state.selectValue=ze(r.value),r.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=u[l],e.state.focusedOptionId=Oe(a,u[l])}return e}return sn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&_e(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&e.isDisabled||o&&l&&!e.menuIsOpen)&&this.focusInput(),o&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(_e(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,l=u.selectValue,o=u.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(l);l||(o=-1);var s=u.length-1,c=-1;if(u.length){switch(e){case"previous":o===0?c=0:o===-1?c=s:c=o-1;break;case"next":o>-1&&o<s&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,s=l.indexOf(u);u||(s=-1),e==="up"?o=s>0?s-1:l.length-1:e==="down"?o=(s+1)%l.length:e==="pageup"?(o=s-a,o<0&&(o=0)):e==="pagedown"?(o=s+a,o>l.length-1&&(o=l.length-1)):e==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(we):S(S({},we),this.props.theme):we}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,o=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,v=d.isRtl,E=d.options,g=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:l,getValue:o,hasValue:g,isMulti:m,isRtl:v,options:E,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Rt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return Tt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return kt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,l=e.inputId,o=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,m=e.required,v=this.getComponents(),E=v.Input,g=this.state,p=g.inputIsHidden,h=g.ariaSelection,F=this.commonProps,w=l||this.getElementId("input"),b=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?f.createElement(E,y({},F,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:a,isHidden:p,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:o},b)):f.createElement(Er,y({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:me,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},b))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,m=this.commonProps,v=this.props,E=v.controlShouldRenderValue,g=v.isDisabled,p=v.isMulti,h=v.inputValue,F=v.placeholder,w=this.state,b=w.selectValue,D=w.focusedValue,I=w.isFocused;if(!this.hasValue()||!E)return h?null:f.createElement(d,y({},m,{key:"placeholder",isDisabled:g,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),F);if(p)return b.map(function(O,M){var T=O===D,H="".concat(e.getOptionLabel(O),"-").concat(e.getOptionValue(O));return f.createElement(u,y({},m,{components:{Container:l,Label:o,Remove:s},isFocused:T,isDisabled:g,key:H,index:M,removeProps:{onClick:function(){return e.removeValue(O)},onTouchEnd:function(){return e.removeValue(O)},onMouseDown:function(_){_.preventDefault()}},data:O}),e.formatOptionLabel(O,"value"))});if(h)return null;var A=b[0];return f.createElement(c,y({},m,{data:A,isDisabled:g}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,y({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return f.createElement(a,y({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused;return f.createElement(u,y({},l,{isDisabled:o,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,y({},u,{innerProps:s,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,o=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,m=a.NoOptionsMessage,v=a.Option,E=this.commonProps,g=this.state.focusedOption,p=this.props,h=p.captureMenuScroll,F=p.inputValue,w=p.isLoading,b=p.loadingMessage,D=p.minMenuHeight,I=p.maxMenuHeight,A=p.menuIsOpen,O=p.menuPlacement,M=p.menuPosition,T=p.menuPortalTarget,H=p.menuShouldBlockScroll,k=p.menuShouldScrollIntoView,_=p.noOptionsMessage,W=p.onMenuScrollToTop,R=p.onMenuScrollToBottom;if(!A)return null;var P=function($,G){var Z=$.type,U=$.data,J=$.isDisabled,Y=$.isSelected,oe=$.label,$t=$.value,He=g===U,$e=J?void 0:function(){return e.onOptionHover(U)},jt=J?void 0:function(){return e.selectOption(U)},je="".concat(e.getElementId("option"),"-").concat(G),Ut={id:je,onClick:jt,onMouseMove:$e,onMouseOver:$e,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:Y};return f.createElement(v,y({},E,{innerProps:Ut,data:U,isDisabled:J,isSelected:Y,key:je,label:oe,type:Z,value:$t,isFocused:He,innerRef:He?e.getFocusedOptionRef:void 0}),e.formatOptionLabel($.data,"menu"))},z;if(this.hasOptions())z=this.getCategorizedOptions().map(function(L){if(L.type==="group"){var $=L.data,G=L.options,Z=L.index,U="".concat(e.getElementId("group"),"-").concat(Z),J="".concat(U,"-heading");return f.createElement(u,y({},E,{key:U,data:$,options:G,Heading:l,headingProps:{id:J,data:L.data},label:e.formatGroupLabel(L.data)}),L.options.map(function(Y){return P(Y,"".concat(Z,"-").concat(Y.index))}))}else if(L.type==="option")return P(L,"".concat(L.index))});else if(w){var j=b({inputValue:F});if(j===null)return null;z=f.createElement(d,E,j)}else{var K=_({inputValue:F});if(K===null)return null;z=f.createElement(m,E,K)}var Q={minMenuHeight:D,maxMenuHeight:I,menuPlacement:O,menuPosition:M,menuShouldScrollIntoView:k},re=f.createElement(Qn,y({},E,Q),function(L){var $=L.ref,G=L.placerProps,Z=G.placement,U=G.maxHeight;return f.createElement(o,y({},E,Q,{innerRef:$,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:w,placement:Z}),f.createElement(Dr,{captureEnabled:h,onTopArrive:W,onBottomArrive:R,lockEnabled:H},function(J){return f.createElement(s,y({},E,{innerRef:function(oe){e.getMenuListRef(oe),J(oe)},innerProps:{role:"listbox","aria-multiselectable":E.isMulti,id:e.getElementId("listbox")},isLoading:w,maxHeight:U,focusedOption:g}),z)}))});return T||M==="fixed"?f.createElement(c,y({},E,{appendTo:T,controlElement:this.controlRef,menuPlacement:O,menuPosition:M}),re):re}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,l=a.isDisabled,o=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return f.createElement(Ir,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(o)if(u){var m=d.map(function(g){return e.getOptionValue(g)}).join(u);return f.createElement("input",{name:s,type:"hidden",value:m})}else{var v=d.length>0?d.map(function(g,p){return f.createElement("input",{key:"i-".concat(p),name:s,type:"hidden",value:e.getOptionValue(g)})}):f.createElement("input",{name:s,type:"hidden",value:""});return f.createElement("div",null,v)}else{var E=d[0]?this.getOptionValue(d[0]):"";return f.createElement("input",{name:s,type:"hidden",value:E})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return f.createElement(fr,y({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:o,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,l=e.SelectContainer,o=e.ValueContainer,s=this.props,c=s.className,d=s.id,m=s.isDisabled,v=s.menuIsOpen,E=this.state.isFocused,g=this.commonProps=this.getCommonProps();return f.createElement(l,y({},g,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:E}),this.renderLiveRegion(),f.createElement(a,y({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:E,menuIsOpen:v}),f.createElement(o,y({},g,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(u,y({},g,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,m=a.instancePrefix,v=e.options,E=e.value,g=e.menuIsOpen,p=e.inputValue,h=e.isMulti,F=ze(E),w={};if(u&&(E!==u.value||v!==u.options||g!==u.menuIsOpen||p!==u.inputValue)){var b=g?_r(e,F):[],D=g?rt(de(e,F),"".concat(m,"-option")):[],I=l?Wr(a,F):null,A=Gr(a,b),O=Oe(D,A);w={selectValue:F,focusedOption:A,focusedOptionId:O,focusableOptionsWithIds:D,focusedValue:I,clearFocusValueOnUpdate:!1}}var M=o!=null&&e!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},T=s,H=c&&d;return c&&!H&&(T={value:ce(h,F,F[0]||null),options:F,action:"initial-input-focus"},H=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),S(S(S({},w),M),{},{prevProps:e,ariaSelection:T,prevWasFocused:H})}}]),i}(f.Component);Ht.defaultProps=zr;var qr=f.forwardRef(function(n,t){var i=mn(n);return f.createElement(Ht,y({ref:t},i))}),at=qr;const Xr=ee.label`
  position: relative;
`,Kr=ee.ul`
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 28px;
  }
`,Qr=ee.input`
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
    line-height: 18px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-main-one);
  }

  &::placeholder {
    color: var(--color-text);
  }
`,Zr=ee.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 14px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,Jr=ee.svg`
  stroke: var(--color-text);
  width: 18px;
  height: 18px;
  transition: stroke 0.3s var(--timing-function);

  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,eo=ee.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 40px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,to=ee.svg`
  stroke: var(--color-main-one);
  width: 18px;
  height: 18px;
`,ut=ee.div`
  @media screen and (min-width: 375px) {
    width: 173px;
  }
  @media screen and (min-width: 768px) {
    width: 204px;
  }
  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`,st=[{value:"all",label:"All"},{value:"true",label:"Recommended "},{value:"false",label:"Not recommended"}],no=()=>{const[n,t]=f.useState(""),[i,r]=f.useState({value:"all",label:"All categories"}),[e,a]=f.useState(st[0]),u=lt();f.useEffect(()=>{u(ct({recommended:e.value,category:i.value,query:n}))},[e,i,n,u]),f.useEffect(()=>{u(qt())},[u]);const l=b=>`${b[0].toUpperCase()}${b.slice(1)}`,o=pe(Xt),s=[{value:"all",label:"All categories"},...o.map(({_id:b,name:D})=>({value:b,label:l(D)}))],c=b=>{const{value:D}=b.target;t(D),console.log("setQuery.value",n)},d=b=>{b.preventDefault();const D=b.target.elements[0].value;t(D)},m=()=>{t("")},v=b=>{r(b)},E=b=>{a(b)},g=xe.useMediaQuery({minWidth:375}),p=xe.useMediaQuery({minWidth:768}),h=xe.useMediaQuery({minWidth:1440});let F="";g?F="46px":F="52px",p?F="52px":F="46px",h?F="52px":F="46px";const w={option:(b,D)=>({...b,fontSize:"14px",height:F,color:D.isSelected?"#E6533C":"#EFEDE8",backgroundColor:(D.isSelected||D.isFocused,"rgba(28, 28, 28, 1)"),padding:"14px"}),control:b=>({...b,background:"transparent",borderRadius:"12px",border:"1px solid rgba(239, 237, 232, 0.3)",height:F,appearance:"none",WebkitAppearance:"none",MozAppearance:"none"}),singleValue:b=>({...b,color:"#EFEDE8"}),menu:b=>({...b,backgroundColor:"rgba(28, 28, 28, 1)",overflowY:"auto"}),indicatorSeparator:b=>({...b,backgroundColor:"transparent"}),dropdownIndicator:b=>({...b,color:"#EFEDE8"}),container:b=>({...b,border:"1px solid rgba(239, 237, 232, 0.30)",borderRadius:"12px",outline:"none"}),menuList:b=>({...b,borderRadius:"12px","::-webkit-scrollbar":{display:"none"}})};return x.jsx(x.Fragment,{children:x.jsxs(Kr,{children:[x.jsx("li",{children:x.jsx("form",{onSubmit:d,children:x.jsxs(Xr,{children:[x.jsx(Qr,{type:"text",name:"productsSearch",placeholder:"Search",value:n,onChange:c}),n&&x.jsx(eo,{type:"button",onClick:m,children:x.jsx(to,{children:x.jsx("use",{href:ie+"#icon-cross"})})}),x.jsx(Zr,{type:"submit",children:x.jsx(Jr,{children:x.jsx("use",{href:ie+"#icon-search"})})})]})})}),x.jsx("li",{children:x.jsx(ut,{children:x.jsx(at,{styles:w,value:i,onChange:v,options:s,placeholder:"Categories",theme:b=>({...b,colors:{...b.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})})})}),x.jsx("li",{children:x.jsx(ut,{children:x.jsx(at,{styles:w,value:e,onChange:E,options:st,theme:b=>({...b,colors:{...b.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})})})})]})})},io=B.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,ro=B.img`
    width: 123px;
    height: 84px;
`,oo=B.h2`
    font-family: Roboto;
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
`,ao=B.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #EFEDE84D;

    margin-top: 16px;

    > span {
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0px;
        text-align: left;
        color: var(--color-main-one);
    }
`,uo=B.button`
    width: 157px;
    height: 42px;
    padding: 12px 32px 12px 32px;
    border-radius: 12px;
    border: none;
    gap: 10px;

    font-family: Roboto;
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
`,so=B(Kt)`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    gap: 8px;
    padding: 0;
    margin-top: 16px;

    > span {
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0px;
        text-align: left;
        color: #EFEDE84D;
    }

    > svg {
        width: 16px;
        height: 16px;
        stroke: #EFEDE84D;
    }
`,lo=({calories:n,onClick:t})=>{const i=()=>{t()};return x.jsxs(io,{children:[x.jsx(ro,{src:"",alt:""}),x.jsx(oo,{children:"Well done"}),x.jsxs(ao,{children:["Calories: ",x.jsx("span",{children:n})]}),x.jsx(uo,{type:"button",onClick:i,children:"Next product"}),x.jsxs(so,{to:"/diary",children:[x.jsx("span",{children:"To the dairy"}),x.jsx("svg",{children:x.jsx("use",{href:`${ie}#icon-arrow`})})]})]})},co=B.li`
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
`,po=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,fo=B.div`
  padding: 5px 7.5px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  > p {
    margin: 0;
    font-weight: 700;
  }
`,ho=B.div`
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
`,vo=B.button`
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
`,mo=B.div`
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
`,go=B.div`
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
`,bo=B.ul`
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
`,Eo=B.p`
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
`,xo=({title:n,calories:t,category:i,weight:r,recommended:e})=>{const[a,u]=f.useState(!1),l=()=>{u(o=>!o)};return x.jsxs(co,{children:[a&&x.jsx(Qt,{onClick:l,children:x.jsx(lo,{calories:t,onClick:l})}),x.jsxs("section",{children:[x.jsxs(po,{children:[x.jsx(fo,{children:x.jsx("p",{children:"DIET"})}),x.jsxs(ho,{children:[x.jsx("div",{}),x.jsx("p",{children:e?"Recommended":"Not recommended"}),x.jsxs(vo,{type:"button",onClick:l,children:[x.jsx("span",{children:"Add"}),x.jsx("svg",{children:x.jsx("use",{href:`${ie}#icon-next`})})]})]})]}),x.jsxs(mo,{children:[x.jsx(go,{children:x.jsx("svg",{children:x.jsx("use",{href:`${ie}#icon-run`})})}),x.jsx("h2",{children:n})]}),x.jsxs(bo,{children:[x.jsx("li",{children:x.jsxs("p",{children:["Calories:",x.jsx("span",{children:t})]})}),x.jsx("li",{children:x.jsxs(Eo,{children:["Category:",x.jsx("span",{children:i})]})}),x.jsx("li",{children:x.jsxs("p",{children:["Weight:",x.jsx("span",{children:r})]})})]})]})]})},Co=B.ul`
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
`,So=!1,Fo=n=>`${n[0].toUpperCase()}${n.slice(1)}`,yo=()=>{const n=lt(),t=pe(Zt);return f.useEffect(()=>{n(ct())},[n]),x.jsx(Co,{children:t.map(i=>x.jsx(xo,{title:i.title,calories:i.calories,category:Fo(i.category.name),weight:i.weight,recommended:So},i._id))})},Io=()=>{const n=pe(Jt),t=pe(en);return x.jsxs(tn,{children:[x.jsx(ln,{children:"Products"}),x.jsx(no,{}),n&&!t&&x.jsx(nn,{}),x.jsx(yo,{})]})};export{Io as default};
