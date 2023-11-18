import{k as zt,r as h,E as Ut,m as Nt,n as _t,_ as C,o as Wt,p as ae,q as S,t as Gt,v as X,u as ut,w as st,x as Yt,b as pe,y as qt,j as E,c as ie,s as B,a as Xt,B as Kt,z as Zt,A as Jt,C as Qt,S as en,d as tn}from"./index-602b9983.js";import{_ as lt,a as nn,b as rn,c as on,d as an,e as un}from"./createSuper-1c070b2d.js";import{T as sn}from"./TitlePage-1fb1b6fb.js";function ln(n,t){if(n==null)return{};var i={},r=Object.keys(n),e,a;for(a=0;a<r.length;a++)e=r[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}var x=function(t,i){var r=arguments;if(i==null||!zt.call(i,"css"))return h.createElement.apply(void 0,r);var e=r.length,a=new Array(e);a[0]=Ut,a[1]=Nt(t,i);for(var u=2;u<e;u++)a[u]=r[u];return h.createElement.apply(null,a)};function Me(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return _t(t)}var cn=function(){var t=Me.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function dn(n){if(Array.isArray(n))return n}function pn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,e,a,u,l=[],o=!0,s=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;o=!1}else for(;!(o=(r=a.call(i)).done)&&(l.push(r.value),l.length!==t);o=!0);}catch(c){s=!0,e=c}finally{try{if(!o&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw e}}return l}}function fn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(n,t){return dn(n)||pn(n,t)||lt(n,t)||fn()}function K(n,t){if(n==null)return{};var i=ln(n,t),r,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var hn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function vn(n){var t=n.defaultInputValue,i=t===void 0?"":t,r=n.defaultMenuIsOpen,e=r===void 0?!1:r,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,o=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,m=n.onMenuOpen,v=n.value,b=K(n,hn),f=h.useState(l!==void 0?l:i),p=q(f,2),g=p[0],y=p[1],w=h.useState(o!==void 0?o:e),D=q(w,2),O=D[0],I=D[1],A=h.useState(v!==void 0?v:u),F=q(A,2),M=F[0],T=F[1],H=h.useCallback(function(j,Z){typeof s=="function"&&s(j,Z),T(j)},[s]),k=h.useCallback(function(j,Z){var J;typeof c=="function"&&(J=c(j,Z)),y(J!==void 0?J:j)},[c]),_=h.useCallback(function(){typeof m=="function"&&m(),I(!0)},[m]),W=h.useCallback(function(){typeof d=="function"&&d(),I(!1)},[d]),R=l!==void 0?l:g,P=o!==void 0?o:O,N=v!==void 0?v:M;return C(C({},b),{},{inputValue:R,menuIsOpen:P,onChange:H,onInputChange:k,onMenuClose:W,onMenuOpen:_,value:N})}function mn(n){if(Array.isArray(n))return nn(n)}function gn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function bn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(n){return mn(n)||gn(n)||lt(n)||bn()}function En(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const xn=Math.min,Cn=Math.max,fe=Math.round,ue=Math.floor,he=n=>({x:n,y:n});function Sn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function ct(n){return pt(n)?(n.nodeName||"").toLowerCase():"#document"}function U(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function dt(n){var t;return(t=(pt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function pt(n){return n instanceof Node||n instanceof U(n).Node}function Oe(n){return n instanceof Element||n instanceof U(n).Element}function Pe(n){return n instanceof HTMLElement||n instanceof U(n).HTMLElement}function je(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof U(n).ShadowRoot}function ft(n){const{overflow:t,overflowX:i,overflowY:r,display:e}=Le(n);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!["inline","contents"].includes(e)}function Fn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function yn(n){return["html","body","#document"].includes(ct(n))}function Le(n){return U(n).getComputedStyle(n)}function wn(n){if(ct(n)==="html")return n;const t=n.assignedSlot||n.parentNode||je(n)&&n.host||dt(n);return je(t)?t.host:t}function ht(n){const t=wn(n);return yn(t)?n.ownerDocument?n.ownerDocument.body:n.body:Pe(t)&&ft(t)?t:ht(t)}function ve(n,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=ht(n),a=e===((r=n.ownerDocument)==null?void 0:r.body),u=U(e);return a?t.concat(u,u.visualViewport||[],ft(e)?e:[],u.frameElement&&i?ve(u.frameElement):[]):t.concat(e,ve(e,[],i))}function Dn(n){const t=Le(n);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const e=Pe(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:r,l=fe(i)!==a||fe(r)!==u;return l&&(i=a,r=u),{width:i,height:r,$:l}}function Re(n){return Oe(n)?n:n.contextElement}function xe(n){const t=Re(n);if(!Pe(t))return he(1);const i=t.getBoundingClientRect(),{width:r,height:e,$:a}=Dn(t);let u=(a?fe(i.width):i.width)/r,l=(a?fe(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const On=he(0);function In(n){const t=U(n);return!Fn()||!t.visualViewport?On:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function An(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==U(n)?!1:t}function ze(n,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=Re(n);let u=he(1);t&&(r?Oe(r)&&(u=xe(r)):u=xe(n));const l=An(a,i,r)?In(a):he(0);let o=(e.left+l.x)/u.x,s=(e.top+l.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const m=U(a),v=r&&Oe(r)?U(r):r;let b=m.frameElement;for(;b&&r&&v!==m;){const f=xe(b),p=b.getBoundingClientRect(),g=Le(b),y=p.left+(b.clientLeft+parseFloat(g.paddingLeft))*f.x,w=p.top+(b.clientTop+parseFloat(g.paddingTop))*f.y;o*=f.x,s*=f.y,c*=f.x,d*=f.y,o+=y,s+=w,b=U(b).frameElement}}return Sn({width:c,height:d,x:o,y:s})}function Mn(n,t){let i=null,r;const e=dt(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function u(l,o){l===void 0&&(l=!1),o===void 0&&(o=1),a();const{left:s,top:c,width:d,height:m}=n.getBoundingClientRect();if(l||t(),!d||!m)return;const v=ue(c),b=ue(e.clientWidth-(s+d)),f=ue(e.clientHeight-(c+m)),p=ue(s),y={rootMargin:-v+"px "+-b+"px "+-f+"px "+-p+"px",threshold:Cn(0,xn(1,o))||1};let w=!0;function D(O){const I=O[0].intersectionRatio;if(I!==o){if(!w)return u();I?u(!1,I):r=setTimeout(()=>{u(!1,1e-7)},100)}w=!1}try{i=new IntersectionObserver(D,{...y,root:e.ownerDocument})}catch{i=new IntersectionObserver(D,y)}i.observe(n)}return u(!0),a}function Vn(n,t,i,r){r===void 0&&(r={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,s=Re(n),c=e||a?[...s?ve(s):[],...ve(t)]:[];c.forEach(g=>{e&&g.addEventListener("scroll",i,{passive:!0}),a&&g.addEventListener("resize",i)});const d=s&&l?Mn(s,i):null;let m=-1,v=null;u&&(v=new ResizeObserver(g=>{let[y]=g;y&&y.target===s&&v&&(v.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{v&&v.observe(t)})),i()}),s&&!o&&v.observe(s),v.observe(t));let b,f=o?ze(n):null;o&&p();function p(){const g=ze(n);f&&(g.x!==f.x||g.y!==f.y||g.width!==f.width||g.height!==f.height)&&i(),f=g,b=requestAnimationFrame(p)}return i(),()=>{c.forEach(g=>{e&&g.removeEventListener("scroll",i),a&&g.removeEventListener("resize",i)}),d&&d(),v&&v.disconnect(),v=null,o&&cancelAnimationFrame(b)}}var Ie=h.useLayoutEffect,Pn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],me=function(){};function Ln(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function Rn(n,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),e=2;e<i;e++)r[e-2]=arguments[e];var a=[].concat(r);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(Ln(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Ue=function(t){return Nn(t)?t.filter(Boolean):Wt(t)==="object"&&t!==null?[t]:[]},vt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=K(t,Pn);return C({},i)},V=function(t,i,r){var e=t.cx,a=t.getStyles,u=t.getClassNames,l=t.className;return{css:a(i,t),className:e(r??{},u(i,t),l)}};function Ee(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Tn(n){return Ee(n)?window.innerHeight:n.clientHeight}function mt(n){return Ee(n)?window.pageYOffset:n.scrollTop}function ge(n,t){if(Ee(n)){window.scrollTo(0,t);return}n.scrollTop=t}function kn(n){var t=getComputedStyle(n),i=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Bn(n,t,i,r){return i*((n=n/r-1)*n*n+1)+t}function se(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:me,e=mt(n),a=t-e,u=10,l=0;function o(){l+=u;var s=Bn(l,e,a,i);ge(n,s),l<i?window.requestAnimationFrame(o):r(n)}o()}function Ne(n,t){var i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),e=t.offsetHeight/3;r.bottom+e>i.bottom?ge(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):r.top-e<i.top&&ge(n,Math.max(t.offsetTop-e,0))}function Hn(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function _e(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function $n(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var gt=!1,jn={get passive(){return gt=!0}},le=typeof window<"u"?window:{};le.addEventListener&&le.removeEventListener&&(le.addEventListener("p",me,jn),le.removeEventListener("p",me,!1));var zn=gt;function Un(n){return n!=null}function Nn(n){return Array.isArray(n)}function ce(n,t,i){return n?t:i}var _n=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),e=1;e<i;e++)r[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var l=q(u,1),o=l[0];return!r.includes(o)});return a.reduce(function(u,l){var o=q(l,2),s=o[0],c=o[1];return u[s]=c,u},{})},Wn=["children","innerProps"],Gn=["children","innerProps"];function Yn(n){var t=n.maxHeight,i=n.menuEl,r=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,o=kn(i),s={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return s;var c=o.getBoundingClientRect(),d=c.height,m=i.getBoundingClientRect(),v=m.bottom,b=m.height,f=m.top,p=i.offsetParent.getBoundingClientRect(),g=p.top,y=u?window.innerHeight:Tn(o),w=mt(o),D=parseInt(getComputedStyle(i).marginBottom,10),O=parseInt(getComputedStyle(i).marginTop,10),I=g-O,A=y-f,F=I+w,M=d-w-f,T=v-y+w+D,H=w+f-O,k=160;switch(e){case"auto":case"bottom":if(A>=b)return{placement:"bottom",maxHeight:t};if(M>=b&&!u)return a&&se(o,T,k),{placement:"bottom",maxHeight:t};if(!u&&M>=r||u&&A>=r){a&&se(o,T,k);var _=u?A-D:M-D;return{placement:"bottom",maxHeight:_}}if(e==="auto"||u){var W=t,R=u?I:F;return R>=r&&(W=Math.min(R-D-l,t)),{placement:"top",maxHeight:W}}if(e==="bottom")return a&&ge(o,T),{placement:"bottom",maxHeight:t};break;case"top":if(I>=b)return{placement:"top",maxHeight:t};if(F>=b&&!u)return a&&se(o,H,k),{placement:"top",maxHeight:t};if(!u&&F>=r||u&&I>=r){var P=t;return(!u&&F>=r||u&&I>=r)&&(P=u?I-O:F-O),a&&se(o,H,k),{placement:"top",maxHeight:P}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function qn(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var bt=function(t){return t==="auto"?"bottom":t},Xn=function(t,i){var r,e=t.placement,a=t.theme,u=a.borderRadius,l=a.spacing,o=a.colors;return C((r={label:"menu"},ae(r,qn(e),"100%"),ae(r,"position","absolute"),ae(r,"width","100%"),ae(r,"zIndex",1),r),i?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Et=h.createContext(null),Kn=function(t){var i=t.children,r=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,l=t.menuShouldScrollIntoView,o=t.theme,s=h.useContext(Et)||{},c=s.setPortalPlacement,d=h.useRef(null),m=h.useState(e),v=q(m,2),b=v[0],f=v[1],p=h.useState(null),g=q(p,2),y=g[0],w=g[1],D=o.spacing.controlHeight;return Ie(function(){var O=d.current;if(O){var I=u==="fixed",A=l&&!I,F=Yn({maxHeight:e,menuEl:O,minHeight:r,placement:a,shouldScroll:A,isFixedPosition:I,controlHeight:D});f(F.maxHeight),w(F.placement),c==null||c(F.placement)}},[e,a,u,l,r,c,D]),i({ref:d,placerProps:C(C({},t),{},{placement:y||bt(a),maxHeight:b})})},Zn=function(t){var i=t.children,r=t.innerRef,e=t.innerProps;return x("div",S({},V(t,"menu",{menu:!0}),{ref:r},e),i)},Jn=Zn,Qn=function(t,i){var r=t.maxHeight,e=t.theme.spacing.baseUnit;return C({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},ei=function(t){var i=t.children,r=t.innerProps,e=t.innerRef,a=t.isMulti;return x("div",S({},V(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},r),i)},xt=function(t,i){var r=t.theme,e=r.spacing.baseUnit,a=r.colors;return C({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},ti=xt,ni=xt,ii=function(t){var i=t.children,r=i===void 0?"No options":i,e=t.innerProps,a=K(t,Wn);return x("div",S({},V(C(C({},a),{},{children:r,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),r)},ri=function(t){var i=t.children,r=i===void 0?"Loading...":i,e=t.innerProps,a=K(t,Gn);return x("div",S({},V(C(C({},a),{},{children:r,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),r)},oi=function(t){var i=t.rect,r=t.offset,e=t.position;return{left:i.left,position:e,top:r,width:i.width,zIndex:1}},ai=function(t){var i=t.appendTo,r=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,l=t.menuPosition,o=h.useRef(null),s=h.useRef(null),c=h.useState(bt(u)),d=q(c,2),m=d[0],v=d[1],b=h.useMemo(function(){return{setPortalPlacement:v}},[]),f=h.useState(null),p=q(f,2),g=p[0],y=p[1],w=h.useCallback(function(){if(e){var A=Hn(e),F=l==="fixed"?0:window.pageYOffset,M=A[m]+F;(M!==(g==null?void 0:g.offset)||A.left!==(g==null?void 0:g.rect.left)||A.width!==(g==null?void 0:g.rect.width))&&y({offset:M,rect:A})}},[e,l,m,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);Ie(function(){w()},[w]);var D=h.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&o.current&&(s.current=Vn(e,o.current,w,{elementResize:"ResizeObserver"in window}))},[e,w]);Ie(function(){D()},[D]);var O=h.useCallback(function(A){o.current=A,D()},[D]);if(!i&&l!=="fixed"||!g)return null;var I=x("div",S({ref:O},V(C(C({},t),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),a),r);return x(Et.Provider,{value:b},i?Gt.createPortal(I,i):I)},ui=function(t){var i=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},si=function(t){var i=t.children,r=t.innerProps,e=t.isDisabled,a=t.isRtl;return x("div",S({},V(t,"container",{"--is-disabled":e,"--is-rtl":a}),r),i)},li=function(t,i){var r=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return C({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},ci=function(t){var i=t.children,r=t.innerProps,e=t.isMulti,a=t.hasValue;return x("div",S({},V(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),r),i)},di=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},pi=function(t){var i=t.children,r=t.innerProps;return x("div",S({},V(t,"indicatorsContainer",{indicators:!0}),r),i)},We,fi=["size"],hi=["innerProps","isRtl","size"],vi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ct=function(t){var i=t.size,r=K(t,fi);return x("svg",S({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:vi},r))},Te=function(t){return x(Ct,S({size:20},t),x("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},St=function(t){return x(Ct,S({size:20},t),x("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Ft=function(t,i){var r=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?u.neutral60:u.neutral20,padding:a*2,":hover":{color:r?u.neutral80:u.neutral40}})},mi=Ft,gi=function(t){var i=t.children,r=t.innerProps;return x("div",S({},V(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||x(St,null))},bi=Ft,Ei=function(t){var i=t.children,r=t.innerProps;return x("div",S({},V(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||x(Te,null))},xi=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Ci=function(t){var i=t.innerProps;return x("span",S({},i,V(t,"indicatorSeparator",{"indicator-separator":!0})))},Si=cn(We||(We=En([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Fi=function(t,i){var r=t.isFocused,e=t.size,a=t.theme,u=a.colors,l=a.spacing.baseUnit;return C({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?u.neutral60:u.neutral20,padding:l*2})},Ce=function(t){var i=t.delay,r=t.offset;return x("span",{css:Me({animation:"".concat(Si," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},yi=function(t){var i=t.innerProps,r=t.isRtl,e=t.size,a=e===void 0?4:e,u=K(t,hi);return x("div",S({},V(C(C({},u),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),x(Ce,{delay:0,offset:r}),x(Ce,{delay:160,offset:!0}),x(Ce,{delay:320,offset:!r}))},wi=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,l=a.borderRadius,o=a.spacing;return C({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:e?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Di=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,l=t.menuIsOpen;return x("div",S({ref:a},V(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":e,"control--menu-is-open":l}),u,{"aria-disabled":r||void 0}),i)},Oi=Di,Ii=["data"],Ai=function(t,i){var r=t.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Mi=function(t){var i=t.children,r=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,l=t.headingProps,o=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return x("div",S({},V(t,"group",{group:!0}),o),x(u,S({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:r}),s),x("div",null,i))},Vi=function(t,i){var r=t.theme,e=r.colors,a=r.spacing;return C({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Pi=function(t){var i=vt(t);i.data;var r=K(i,Ii);return x("div",S({},V(t,"groupHeading",{"group-heading":!0}),r))},Li=Mi,Ri=["innerRef","isDisabled","isHidden","inputClassName"],Ti=function(t,i){var r=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,l=a.colors;return C(C({visibility:r?"hidden":"visible",transform:e?"translateZ(0)":""},ki),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},yt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},ki={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":C({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},yt)},Bi=function(t){return C({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},yt)},Hi=function(t){var i=t.cx,r=t.value,e=vt(t),a=e.innerRef,u=e.isDisabled,l=e.isHidden,o=e.inputClassName,s=K(e,Ri);return x("div",S({},V(t,"input",{"input-container":!0}),{"data-value":r||""}),x("input",S({className:i({input:!0},o),ref:a,style:Bi(l),disabled:u},s)))},$i=Hi,ji=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors;return C({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},zi=function(t,i){var r=t.theme,e=r.borderRadius,a=r.colors,u=t.cropWithEllipsis;return C({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Ui=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors,l=t.isFocused;return C({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},wt=function(t){var i=t.children,r=t.innerProps;return x("div",r,i)},Ni=wt,_i=wt;function Wi(n){var t=n.children,i=n.innerProps;return x("div",S({role:"button"},i),t||x(Te,{size:14}))}var Gi=function(t){var i=t.children,r=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,l=t.removeProps,o=t.selectProps,s=r.Container,c=r.Label,d=r.Remove;return x(s,{data:e,innerProps:C(C({},V(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},x(c,{data:e,innerProps:C({},V(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},i),x(d,{data:e,innerProps:C(C({},V(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:o}))},Yi=Gi,qi=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,l=u.spacing,o=u.colors;return C({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?o.primary:e?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},Xi=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,l=t.innerProps;return x("div",S({},V(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":r},l),i)},Ki=Xi,Zi=function(t,i){var r=t.theme,e=r.spacing,a=r.colors;return C({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},Ji=function(t){var i=t.children,r=t.innerProps;return x("div",S({},V(t,"placeholder",{placeholder:!0}),r),i)},Qi=Ji,er=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return C({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},tr=function(t){var i=t.children,r=t.isDisabled,e=t.innerProps;return x("div",S({},V(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),e),i)},nr=tr,ir={ClearIndicator:Ei,Control:Oi,DropdownIndicator:gi,DownChevron:St,CrossIcon:Te,Group:Li,GroupHeading:Pi,IndicatorsContainer:pi,IndicatorSeparator:Ci,Input:$i,LoadingIndicator:yi,Menu:Jn,MenuList:ei,MenuPortal:ai,LoadingMessage:ri,NoOptionsMessage:ii,MultiValue:Yi,MultiValueContainer:Ni,MultiValueLabel:_i,MultiValueRemove:Wi,Option:Ki,Placeholder:Qi,SelectContainer:si,SingleValue:nr,ValueContainer:ci},rr=function(t){return C(C({},ir),t.components)},Ge=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function or(n,t){return!!(n===t||Ge(n)&&Ge(t))}function ar(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!or(n[i],t[i]))return!1;return!0}function ur(n,t){t===void 0&&(t=ar);var i=null;function r(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return r.clear=function(){i=null},r}var sr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},lr=function(t){return x("span",S({css:sr},t))},Ye=lr,cr={guidance:function(t){var i=t.isSearchable,r=t.isMulti,e=t.tabSelectsValue,a=t.context,u=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,r=t.label,e=r===void 0?"":r,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,r=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,l=t.selectValue,o=t.isDisabled,s=t.isSelected,c=t.isAppleDevice,d=function(f,p){return f&&f.length?"".concat(f.indexOf(p)+1," of ").concat(f.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,r),".");if(i==="menu"&&c){var m=o?" disabled":"",v="".concat(s?" selected":"").concat(m);return"".concat(u).concat(v,", ").concat(d(e,r),".")}return""},onFilter:function(t){var i=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},dr=function(t){var i=t.ariaSelection,r=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,l=t.selectValue,o=t.selectProps,s=t.id,c=t.isAppleDevice,d=o.ariaLiveMessages,m=o.getOptionLabel,v=o.inputValue,b=o.isMulti,f=o.isOptionDisabled,p=o.isSearchable,g=o.menuIsOpen,y=o.options,w=o.screenReaderStatus,D=o.tabSelectsValue,O=o.isLoading,I=o["aria-label"],A=o["aria-live"],F=h.useMemo(function(){return C(C({},cr),d||{})},[d]),M=h.useMemo(function(){var R="";if(i&&F.onChange){var P=i.option,N=i.options,j=i.removedValue,Z=i.removedValues,J=i.value,re=function(Y){return Array.isArray(Y)?null:Y},L=j||P||re(J),$=L?m(L):"",G=N||Z||void 0,Q=G?G.map(m):[],z=C({isDisabled:L&&f(L,l),label:$,labels:Q},i);R=F.onChange(z)}return R},[i,F,f,l,m]),T=h.useMemo(function(){var R="",P=r||e,N=!!(r&&l&&l.includes(r));if(P&&F.onFocus){var j={focused:P,label:m(P),isDisabled:f(P,l),isSelected:N,options:a,context:P===r?"menu":"value",selectValue:l,isAppleDevice:c};R=F.onFocus(j)}return R},[r,e,m,f,F,a,l,c]),H=h.useMemo(function(){var R="";if(g&&y.length&&!O&&F.onFilter){var P=w({count:a.length});R=F.onFilter({inputValue:v,resultsMessage:P})}return R},[a,v,g,F,y,w,O]),k=(i==null?void 0:i.action)==="initial-input-focus",_=h.useMemo(function(){var R="";if(F.guidance){var P=e?"value":g?"menu":"input";R=F.guidance({"aria-label":I,context:P,isDisabled:r&&f(r,l),isMulti:b,isSearchable:p,tabSelectsValue:D,isInitialFocus:k})}return R},[I,r,e,b,f,p,g,F,l,D,k]),W=x(h.Fragment,null,x("span",{id:"aria-selection"},M),x("span",{id:"aria-focused"},T),x("span",{id:"aria-results"},H),x("span",{id:"aria-guidance"},_));return x(h.Fragment,null,x(Ye,{id:s},k&&W),x(Ye,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!k&&W))},pr=dr,Ae=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],fr=new RegExp("["+Ae.map(function(n){return n.letters}).join("")+"]","g"),Dt={};for(var Se=0;Se<Ae.length;Se++)for(var Fe=Ae[Se],ye=0;ye<Fe.letters.length;ye++)Dt[Fe.letters[ye]]=Fe.base;var Ot=function(t){return t.replace(fr,function(i){return Dt[i]})},hr=ur(Ot),qe=function(t){return t.replace(/^\s+|\s+$/g,"")},vr=function(t){return"".concat(t.label," ").concat(t.value)},mr=function(t){return function(i,r){if(i.data.__isNew__)return!0;var e=C({ignoreCase:!0,ignoreAccents:!0,stringify:vr,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,l=e.stringify,o=e.trim,s=e.matchFrom,c=o?qe(r):r,d=o?qe(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=hr(c),d=Ot(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},gr=["innerRef"];function br(n){var t=n.innerRef,i=K(n,gr),r=_n(i,"onExited","in","enter","exit","appear");return x("input",S({ref:t},r,{css:Me({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Er=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function xr(n){var t=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=h.useRef(!1),l=h.useRef(!1),o=h.useRef(0),s=h.useRef(null),c=h.useCallback(function(p,g){if(s.current!==null){var y=s.current,w=y.scrollTop,D=y.scrollHeight,O=y.clientHeight,I=s.current,A=g>0,F=D-O-w,M=!1;F>g&&u.current&&(r&&r(p),u.current=!1),A&&l.current&&(a&&a(p),l.current=!1),A&&g>F?(i&&!u.current&&i(p),I.scrollTop=D,M=!0,u.current=!0):!A&&-g>w&&(e&&!l.current&&e(p),I.scrollTop=0,M=!0,l.current=!0),M&&Er(p)}},[i,r,e,a]),d=h.useCallback(function(p){c(p,p.deltaY)},[c]),m=h.useCallback(function(p){o.current=p.changedTouches[0].clientY},[]),v=h.useCallback(function(p){var g=o.current-p.changedTouches[0].clientY;c(p,g)},[c]),b=h.useCallback(function(p){if(p){var g=zn?{passive:!1}:!1;p.addEventListener("wheel",d,g),p.addEventListener("touchstart",m,g),p.addEventListener("touchmove",v,g)}},[v,m,d]),f=h.useCallback(function(p){p&&(p.removeEventListener("wheel",d,!1),p.removeEventListener("touchstart",m,!1),p.removeEventListener("touchmove",v,!1))},[v,m,d]);return h.useEffect(function(){if(t){var p=s.current;return b(p),function(){f(p)}}},[t,b,f]),function(p){s.current=p}}var Xe=["boxSizing","height","overflow","paddingRight","position"],Ke={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ze(n){n.preventDefault()}function Je(n){n.stopPropagation()}function Qe(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function et(){return"ontouchstart"in window||navigator.maxTouchPoints}var tt=!!(typeof window<"u"&&window.document&&window.document.createElement),ne=0,te={capture:!1,passive:!1};function Cr(n){var t=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,e=h.useRef({}),a=h.useRef(null),u=h.useCallback(function(o){if(tt){var s=document.body,c=s&&s.style;if(r&&Xe.forEach(function(b){var f=c&&c[b];e.current[b]=f}),r&&ne<1){var d=parseInt(e.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,v=window.innerWidth-m+d||0;Object.keys(Ke).forEach(function(b){var f=Ke[b];c&&(c[b]=f)}),c&&(c.paddingRight="".concat(v,"px"))}s&&et()&&(s.addEventListener("touchmove",Ze,te),o&&(o.addEventListener("touchstart",Qe,te),o.addEventListener("touchmove",Je,te))),ne+=1}},[r]),l=h.useCallback(function(o){if(tt){var s=document.body,c=s&&s.style;ne=Math.max(ne-1,0),r&&ne<1&&Xe.forEach(function(d){var m=e.current[d];c&&(c[d]=m)}),s&&et()&&(s.removeEventListener("touchmove",Ze,te),o&&(o.removeEventListener("touchstart",Qe,te),o.removeEventListener("touchmove",Je,te)))}},[r]);return h.useEffect(function(){if(t){var o=a.current;return u(o),function(){l(o)}}},[t,u,l]),function(o){a.current=o}}var Sr=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Fr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function yr(n){var t=n.children,i=n.lockEnabled,r=n.captureEnabled,e=r===void 0?!0:r,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,o=n.onTopLeave,s=xr({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:o}),c=Cr({isEnabled:i}),d=function(v){s(v),c(v)};return x(h.Fragment,null,i&&x("div",{onClick:Sr,css:Fr}),t(d))}var wr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Dr=function(t){var i=t.name,r=t.onFocus;return x("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:wr,value:"",onChange:function(){}})},Or=Dr;function ke(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function Ir(){return ke(/^iPhone/i)}function It(){return ke(/^Mac/i)}function Ar(){return ke(/^iPad/i)||It()&&navigator.maxTouchPoints>1}function Mr(){return Ir()||Ar()}function Vr(){return It()||Mr()}var Pr=function(t){return t.label},Lr=function(t){return t.label},Rr=function(t){return t.value},Tr=function(t){return!!t.isDisabled},kr={clearIndicator:bi,container:ui,control:wi,dropdownIndicator:mi,group:Ai,groupHeading:Vi,indicatorsContainer:di,indicatorSeparator:xi,input:Ti,loadingIndicator:Fi,loadingMessage:ni,menu:Xn,menuList:Qn,menuPortal:oi,multiValue:ji,multiValueLabel:zi,multiValueRemove:Ui,noOptionsMessage:ti,option:qi,placeholder:Zi,singleValue:er,valueContainer:li},Br={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Hr=4,At=4,$r=38,jr=At*2,zr={baseUnit:At,controlHeight:$r,menuGutter:jr},we={borderRadius:Hr,colors:Br,spacing:zr},Ur={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:_e(),captureMenuScroll:!_e(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:mr(),formatGroupLabel:Pr,getOptionLabel:Lr,getOptionValue:Rr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Tr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!$n(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function nt(n,t,i,r){var e=Pt(n,t,i),a=Lt(n,t,i),u=Vt(n,t),l=be(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:l,index:r}}function de(n,t){return n.options.map(function(i,r){if("options"in i){var e=i.options.map(function(u,l){return nt(n,u,t,l)}).filter(function(u){return rt(n,u)});return e.length>0?{type:"group",data:i,options:e,index:r}:void 0}var a=nt(n,i,t,r);return rt(n,a)?a:void 0}).filter(Un)}function Mt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,Ve(i.options.map(function(r){return r.data}))):t.push(i.data),t},[])}function it(n,t){return n.reduce(function(i,r){return r.type==="group"?i.push.apply(i,Ve(r.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(r.index,"-").concat(e.index)}}))):i.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),i},[])}function Nr(n,t){return Mt(de(n,t))}function rt(n,t){var i=n.inputValue,r=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,l=t.value;return(!Tt(n)||!a)&&Rt(n,{label:u,value:l,data:e},r)}function _r(n,t){var i=n.focusedValue,r=n.selectValue,e=r.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function Wr(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var De=function(t,i){var r,e=(r=t.find(function(a){return a.data===i}))===null||r===void 0?void 0:r.id;return e||null},Vt=function(t,i){return t.getOptionLabel(i)},be=function(t,i){return t.getOptionValue(i)};function Pt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function Lt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var r=be(n,t);return i.some(function(e){return be(n,e)===r})}function Rt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Tt=function(t){var i=t.hideSelectedOptions,r=t.isMulti;return i===void 0?r:i},Gr=1,kt=function(n){rn(i,n);var t=on(i);function i(r){var e;if(an(this,i),e=t.call(this,r),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=Vr(),e.controlRef=null,e.getControlRef=function(o){e.controlRef=o},e.focusedOptionRef=null,e.getFocusedOptionRef=function(o){e.focusedOptionRef=o},e.menuListRef=null,e.getMenuListRef=function(o){e.menuListRef=o},e.inputRef=null,e.getInputRef=function(o){e.inputRef=o},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(o,s){var c=e.props,d=c.onChange,m=c.name;s.name=m,e.ariaOnChange(o,s),d(o,s)},e.setValue=function(o,s,c){var d=e.props,m=d.closeMenuOnSelect,v=d.isMulti,b=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:b}),m&&(e.setState({inputIsHiddenAfterUpdate:!v}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(o,{action:s,option:c})},e.selectOption=function(o){var s=e.props,c=s.blurInputOnSelect,d=s.isMulti,m=s.name,v=e.state.selectValue,b=d&&e.isOptionSelected(o,v),f=e.isOptionDisabled(o,v);if(b){var p=e.getOptionValue(o);e.setValue(v.filter(function(g){return e.getOptionValue(g)!==p}),"deselect-option",o)}else if(!f)d?e.setValue([].concat(Ve(v),[o]),"select-option",o):e.setValue(o,"select-option");else{e.ariaOnChange(o,{action:"select-option",option:o,name:m});return}c&&e.blurInput()},e.removeValue=function(o){var s=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(o),m=c.filter(function(b){return e.getOptionValue(b)!==d}),v=ce(s,m,m[0]||null);e.onChange(v,{action:"remove-value",removedValue:o}),e.focusInput()},e.clearValue=function(){var o=e.state.selectValue;e.onChange(ce(e.props.isMulti,[],null),{action:"clear",removedValues:o})},e.popValue=function(){var o=e.props.isMulti,s=e.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),m=ce(o,d,d[0]||null);e.onChange(m,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(o){return De(e.state.focusableOptionsWithIds,o)},e.getFocusableOptionsWithIds=function(){return it(de(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return Rn.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(o){return Vt(e.props,o)},e.getOptionValue=function(o){return be(e.props,o)},e.getStyles=function(o,s){var c=e.props.unstyled,d=kr[o](s,c);d.boxSizing="border-box";var m=e.props.styles[o];return m?m(d,s):d},e.getClassNames=function(o,s){var c,d;return(c=(d=e.props.classNames)[o])===null||c===void 0?void 0:c.call(d,s)},e.getElementId=function(o){return"".concat(e.state.instancePrefix,"-").concat(o)},e.getComponents=function(){return rr(e.props)},e.buildCategorizedOptions=function(){return de(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return Mt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(o,s){e.setState({ariaSelection:C({value:o},s)})},e.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(o){e.blockOptionHover=!1},e.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},e.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!e.props.isDisabled){var s=e.props,c=s.isMulti,d=s.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),o.preventDefault()}},e.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(e.clearValue(),o.preventDefault(),e.openAfterFocus=!1,o.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(o){typeof e.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ee(o.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(o)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(o){var s=o.touches,c=s&&s.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(o){var s=o.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),m=Math.abs(c.clientY-e.initialTouchY),v=5;e.userIsDragging=d>v||m>v}},e.onTouchEnd=function(o){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(o.target)&&e.menuListRef&&!e.menuListRef.contains(o.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(o){e.userIsDragging||e.onControlMouseDown(o)},e.onClearIndicatorTouchEnd=function(o){e.userIsDragging||e.onClearIndicatorMouseDown(o)},e.onDropdownIndicatorTouchEnd=function(o){e.userIsDragging||e.onDropdownIndicatorMouseDown(o)},e.handleInputChange=function(o){var s=e.props.inputValue,c=o.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(o){e.props.onFocus&&e.props.onFocus(o),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(o){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(o),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(o){if(!(e.blockOptionHover||e.state.focusedOption===o)){var s=e.getFocusableOptions(),c=s.indexOf(o);e.setState({focusedOption:o,focusedOptionId:c>-1?e.getFocusedOptionId(o):null})}},e.shouldHideSelectedOptions=function(){return Tt(e.props)},e.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),e.focus()},e.onKeyDown=function(o){var s=e.props,c=s.isMulti,d=s.backspaceRemovesValue,m=s.escapeClearsValue,v=s.inputValue,b=s.isClearable,f=s.isDisabled,p=s.menuIsOpen,g=s.onKeyDown,y=s.tabSelectsValue,w=s.openMenuOnFocus,D=e.state,O=D.focusedOption,I=D.focusedValue,A=D.selectValue;if(!f&&!(typeof g=="function"&&(g(o),o.defaultPrevented))){switch(e.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||v)return;e.focusValue("previous");break;case"ArrowRight":if(!c||v)return;e.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(I)e.removeValue(I);else{if(!d)return;c?e.popValue():b&&e.clearValue()}break;case"Tab":if(e.isComposing||o.shiftKey||!p||!y||!O||w&&e.isOptionSelected(O,A))return;e.selectOption(O);break;case"Enter":if(o.keyCode===229)break;if(p){if(!O||e.isComposing)return;e.selectOption(O);break}return;case"Escape":p?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:v}),e.onMenuClose()):b&&m&&e.clearValue();break;case" ":if(v)return;if(!p){e.openMenu("first");break}if(!O)return;e.selectOption(O);break;case"ArrowUp":p?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":p?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!p)return;e.focusOption("pageup");break;case"PageDown":if(!p)return;e.focusOption("pagedown");break;case"Home":if(!p)return;e.focusOption("first");break;case"End":if(!p)return;e.focusOption("last");break;default:return}o.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++Gr),e.state.selectValue=Ue(r.value),r.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=u[l],e.state.focusedOptionId=De(a,u[l])}return e}return un(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ne(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&e.isDisabled||o&&l&&!e.menuIsOpen)&&this.focusInput(),o&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ne(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,l=u.selectValue,o=u.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(l);l||(o=-1);var s=u.length-1,c=-1;if(u.length){switch(e){case"previous":o===0?c=0:o===-1?c=s:c=o-1;break;case"next":o>-1&&o<s&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,s=l.indexOf(u);u||(s=-1),e==="up"?o=s>0?s-1:l.length-1:e==="down"?o=(s+1)%l.length:e==="pageup"?(o=s-a,o<0&&(o=0)):e==="pagedown"?(o=s+a,o>l.length-1&&(o=l.length-1)):e==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(we):C(C({},we),this.props.theme):we}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,o=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,v=d.isRtl,b=d.options,f=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:l,getValue:o,hasValue:f,isMulti:m,isRtl:v,options:b,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Pt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return Lt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Rt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,l=e.inputId,o=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,m=e.required,v=this.getComponents(),b=v.Input,f=this.state,p=f.inputIsHidden,g=f.ariaSelection,y=this.commonProps,w=l||this.getElementId("input"),D=C(C(C({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?h.createElement(b,S({},y,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:a,isHidden:p,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:o},D)):h.createElement(br,S({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:me,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},D))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,m=this.commonProps,v=this.props,b=v.controlShouldRenderValue,f=v.isDisabled,p=v.isMulti,g=v.inputValue,y=v.placeholder,w=this.state,D=w.selectValue,O=w.focusedValue,I=w.isFocused;if(!this.hasValue()||!b)return g?null:h.createElement(d,S({},m,{key:"placeholder",isDisabled:f,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),y);if(p)return D.map(function(F,M){var T=F===O,H="".concat(e.getOptionLabel(F),"-").concat(e.getOptionValue(F));return h.createElement(u,S({},m,{components:{Container:l,Label:o,Remove:s},isFocused:T,isDisabled:f,key:H,index:M,removeProps:{onClick:function(){return e.removeValue(F)},onTouchEnd:function(){return e.removeValue(F)},onMouseDown:function(_){_.preventDefault()}},data:F}),e.formatOptionLabel(F,"value"))});if(g)return null;var A=D[0];return h.createElement(c,S({},m,{data:A,isDisabled:f}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(a,S({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return h.createElement(a,S({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused;return h.createElement(u,S({},l,{isDisabled:o,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(a,S({},u,{innerProps:s,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,o=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,m=a.NoOptionsMessage,v=a.Option,b=this.commonProps,f=this.state.focusedOption,p=this.props,g=p.captureMenuScroll,y=p.inputValue,w=p.isLoading,D=p.loadingMessage,O=p.minMenuHeight,I=p.maxMenuHeight,A=p.menuIsOpen,F=p.menuPlacement,M=p.menuPosition,T=p.menuPortalTarget,H=p.menuShouldBlockScroll,k=p.menuShouldScrollIntoView,_=p.noOptionsMessage,W=p.onMenuScrollToTop,R=p.onMenuScrollToBottom;if(!A)return null;var P=function($,G){var Q=$.type,z=$.data,ee=$.isDisabled,Y=$.isSelected,oe=$.label,Ht=$.value,Be=f===z,He=ee?void 0:function(){return e.onOptionHover(z)},$t=ee?void 0:function(){return e.selectOption(z)},$e="".concat(e.getElementId("option"),"-").concat(G),jt={id:$e,onClick:$t,onMouseMove:He,onMouseOver:He,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:Y};return h.createElement(v,S({},b,{innerProps:jt,data:z,isDisabled:ee,isSelected:Y,key:$e,label:oe,type:Q,value:Ht,isFocused:Be,innerRef:Be?e.getFocusedOptionRef:void 0}),e.formatOptionLabel($.data,"menu"))},N;if(this.hasOptions())N=this.getCategorizedOptions().map(function(L){if(L.type==="group"){var $=L.data,G=L.options,Q=L.index,z="".concat(e.getElementId("group"),"-").concat(Q),ee="".concat(z,"-heading");return h.createElement(u,S({},b,{key:z,data:$,options:G,Heading:l,headingProps:{id:ee,data:L.data},label:e.formatGroupLabel(L.data)}),L.options.map(function(Y){return P(Y,"".concat(Q,"-").concat(Y.index))}))}else if(L.type==="option")return P(L,"".concat(L.index))});else if(w){var j=D({inputValue:y});if(j===null)return null;N=h.createElement(d,b,j)}else{var Z=_({inputValue:y});if(Z===null)return null;N=h.createElement(m,b,Z)}var J={minMenuHeight:O,maxMenuHeight:I,menuPlacement:F,menuPosition:M,menuShouldScrollIntoView:k},re=h.createElement(Kn,S({},b,J),function(L){var $=L.ref,G=L.placerProps,Q=G.placement,z=G.maxHeight;return h.createElement(o,S({},b,J,{innerRef:$,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:w,placement:Q}),h.createElement(yr,{captureEnabled:g,onTopArrive:W,onBottomArrive:R,lockEnabled:H},function(ee){return h.createElement(s,S({},b,{innerRef:function(oe){e.getMenuListRef(oe),ee(oe)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:e.getElementId("listbox")},isLoading:w,maxHeight:z,focusedOption:f}),N)}))});return T||M==="fixed"?h.createElement(c,S({},b,{appendTo:T,controlElement:this.controlRef,menuPlacement:F,menuPosition:M}),re):re}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,l=a.isDisabled,o=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return h.createElement(Or,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(o)if(u){var m=d.map(function(f){return e.getOptionValue(f)}).join(u);return h.createElement("input",{name:s,type:"hidden",value:m})}else{var v=d.length>0?d.map(function(f,p){return h.createElement("input",{key:"i-".concat(p),name:s,type:"hidden",value:e.getOptionValue(f)})}):h.createElement("input",{name:s,type:"hidden",value:""});return h.createElement("div",null,v)}else{var b=d[0]?this.getOptionValue(d[0]):"";return h.createElement("input",{name:s,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return h.createElement(pr,S({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:o,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,l=e.SelectContainer,o=e.ValueContainer,s=this.props,c=s.className,d=s.id,m=s.isDisabled,v=s.menuIsOpen,b=this.state.isFocused,f=this.commonProps=this.getCommonProps();return h.createElement(l,S({},f,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:b}),this.renderLiveRegion(),h.createElement(a,S({},f,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:b,menuIsOpen:v}),h.createElement(o,S({},f,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),h.createElement(u,S({},f,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,m=a.instancePrefix,v=e.options,b=e.value,f=e.menuIsOpen,p=e.inputValue,g=e.isMulti,y=Ue(b),w={};if(u&&(b!==u.value||v!==u.options||f!==u.menuIsOpen||p!==u.inputValue)){var D=f?Nr(e,y):[],O=f?it(de(e,y),"".concat(m,"-option")):[],I=l?_r(a,y):null,A=Wr(a,D),F=De(O,A);w={selectValue:y,focusedOption:A,focusedOptionId:F,focusableOptionsWithIds:O,focusedValue:I,clearFocusValueOnUpdate:!1}}var M=o!=null&&e!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},T=s,H=c&&d;return c&&!H&&(T={value:ce(g,y,y[0]||null),options:y,action:"initial-input-focus"},H=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),C(C(C({},w),M),{},{prevProps:e,ariaSelection:T,prevWasFocused:H})}}]),i}(h.Component);kt.defaultProps=Ur;var Yr=h.forwardRef(function(n,t){var i=vn(n);return h.createElement(kt,S({ref:t},i))}),ot=Yr;const Bt={option:(n,t)=>({...n,fontSize:"14px",height:"52px",color:t.isSelected?"#E6533C":"#EFEDE8",backgroundColor:(t.isSelected||t.isFocused,"rgba(28, 28, 28, 1)"),padding:"14px 32px 14px 14px"}),singleValue:n=>({...n,color:"#EFEDE8"}),menu:n=>({...n,backgroundColor:"rgba(28, 28, 28, 1)"}),indicatorSeparator:n=>({...n,backgroundColor:"transparent"}),dropdownIndicator:n=>({...n,color:"#EFEDE8"}),container:(n,t)=>({...n,border:`1px solid ${t.isFocused?"#E6533C":"rgba(239, 237, 232, 0.3)"}`,borderRadius:"12px",outline:"none"}),menuList:n=>({...n,overflowY:"auto",marginTop:"14px",marginRight:"7px","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb":{background:"rgba(239, 237, 232, 0.10)",borderRadius:"12px"}}),placeholder:n=>({...n,fontSize:"14px",lineHeight:"1.28",margin:"0",padding:"0"})},qr={...Bt,control:(n,t)=>({...n,background:"transparent",borderRadius:"12px",border:`${t.isFocused?"#E6533C":"rgba(239, 237, 232, 0.3)"}`,"&:hover":{border:"1px solid #E6533C"},appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 335px)":{width:"146px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"192px",height:"52px",fontSize:"16px",lineHeight:"1.5"},"@media screen and (max-width: 1439px)":{}})},Xr={...Bt,control:(n,t)=>({...n,background:"transparent",borderRadius:"12px",border:`${t.isFocused?"#E6533C":"rgba(239, 237, 232, 0.3)"}`,"&:hover":{border:"1px solid #E6533C"},appearance:"none",WebkitAppearance:"none",MozAppearance:"none",width:"173px",height:"46px",fontSize:"14px",lineHeight:"1.28","@media screen and (min-width: 768px)":{width:"204px",height:"52px",fontSize:"16px",lineHeight:"1.5"},"@media screen and (min-width: 1440px)":{}})},Kr=X.label`
  position: relative;
`,Zr=X.div`
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
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 28px;
  }
`,Jr=X.input`
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
`,Qr=X.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 14px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,eo=X.svg`
  stroke: var(--color-text);
  fill: transparent;
  width: 18px;
  height: 18px;
  transition: stroke 0.3s var(--timing-function);

  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,to=X.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 40px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,no=X.svg`
  stroke: var(--color-main-one);
  width: 18px;
  height: 18px;
`,io=X.div`
  display: flex;
  gap: 16px;
`,at=[{value:"all",label:"All"},{value:"true",label:"Recommended "},{value:"false",label:"Not recommended"}],ro=()=>{const[n,t]=h.useState(""),[i,r]=h.useState({value:"all",label:"All categories"}),[e,a]=h.useState(at[0]),u=ut();h.useEffect(()=>{u(st({recommended:e.value,category:i.value,query:n}))},[e,i,n,u]),h.useEffect(()=>{u(Yt())},[u]);const l=f=>`${f[0].toUpperCase()}${f.slice(1)}`,o=pe(qt),s=[{value:"all",label:"All categories"},...o.map(({_id:f,name:p})=>({value:f,label:l(p)}))],c=f=>{const{value:p}=f.target;t(p),console.log("setQuery.value",n)},d=f=>{f.preventDefault();const p=f.target.elements[0].value;t(p)},m=()=>{t("")},v=f=>{r(f)},b=f=>{a(f)};return E.jsx(E.Fragment,{children:E.jsxs(Zr,{children:[E.jsx("form",{onSubmit:d,children:E.jsxs(Kr,{children:[E.jsx(Jr,{type:"text",name:"productsSearch",placeholder:"Search",value:n,onChange:c}),n&&E.jsx(to,{type:"button",onClick:m,children:E.jsx(no,{children:E.jsx("use",{href:ie+"#icon-cross"})})}),E.jsx(Qr,{type:"submit",children:E.jsx(eo,{children:E.jsx("use",{href:ie+"#icon-search"})})})]})}),E.jsxs(io,{children:[E.jsx(ot,{styles:qr,value:i,onChange:v,options:s,placeholder:"Categories",theme:f=>({...f,colors:{...f.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})}),E.jsx(ot,{styles:Xr,value:e,onChange:b,options:at,theme:f=>({...f,colors:{...f.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})})]})]})})},oo=B.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,ao=B.img`
    width: 123px;
    height: 84px;
`,uo=B.h2`
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
`,so=B.p`
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
`,lo=B.button`
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
`,co=B(Xt)`
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
`,po=({calories:n,onClick:t})=>{const i=()=>{t()};return E.jsxs(oo,{children:[E.jsx(ao,{src:"",alt:""}),E.jsx(uo,{children:"Well done"}),E.jsxs(so,{children:["Calories: ",E.jsx("span",{children:n})]}),E.jsx(lo,{type:"button",onClick:i,children:"Next product"}),E.jsxs(co,{to:"/diary",children:[E.jsx("span",{children:"To the dairy"}),E.jsx("svg",{children:E.jsx("use",{href:`${ie}#icon-arrow`})})]})]})},fo=B.li`
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
`,ho=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,vo=B.div`
  padding: 5px 7.5px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  > p {
    margin: 0;
    font-weight: 700;
  }
`,mo=B.div`
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
`,go=B.button`
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
`,bo=B.div`
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
`,Eo=B.div`
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
`,xo=B.ul`
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
`,Co=B.p`
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
`,So=({title:n,calories:t,category:i,weight:r,recommended:e})=>{const[a,u]=h.useState(!1),l=()=>{u(o=>!o)};return E.jsxs(fo,{children:[a&&E.jsx(Kt,{onClick:l,children:E.jsx(po,{calories:t,onClick:l})}),E.jsxs("section",{children:[E.jsxs(ho,{children:[E.jsx(vo,{children:E.jsx("p",{children:"DIET"})}),E.jsxs(mo,{children:[E.jsx("div",{}),E.jsx("p",{children:e?"Recommended":"Not recommended"}),E.jsxs(go,{type:"button",onClick:l,children:[E.jsx("span",{children:"Add"}),E.jsx("svg",{children:E.jsx("use",{href:`${ie}#icon-next`})})]})]})]}),E.jsxs(bo,{children:[E.jsx(Eo,{children:E.jsx("svg",{children:E.jsx("use",{href:`${ie}#icon-run`})})}),E.jsx("h2",{children:n})]}),E.jsxs(xo,{children:[E.jsx("li",{children:E.jsxs("p",{children:["Calories:",E.jsx("span",{children:t})]})}),E.jsx("li",{children:E.jsxs(Co,{children:["Category:",E.jsx("span",{children:i})]})}),E.jsx("li",{children:E.jsxs("p",{children:["Weight:",E.jsx("span",{children:r})]})})]})]})]})},Fo=B.ul`
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
`,yo=!1,wo=n=>`${n[0].toUpperCase()}${n.slice(1)}`,Do=()=>{const n=ut(),t=pe(Zt);return h.useEffect(()=>{n(st())},[n]),E.jsx(Fo,{children:t.map(i=>E.jsx(So,{title:i.title,calories:i.calories,category:wo(i.category.name),weight:i.weight,recommended:yo},i._id))})},Oo=X.div`
  position: relative;
`,Vo=()=>{const n=pe(Jt),t=pe(Qt);return E.jsxs(en,{children:[E.jsx(sn,{children:"Products"}),E.jsxs(Oo,{children:[E.jsx(ro,{}),n&&!t&&E.jsx(tn,{}),E.jsx(Do,{})]})]})};export{Vo as default};
