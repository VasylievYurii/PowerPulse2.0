import{o as Wt,r as m,E as Gt,p as Yt,q as qt,_ as C,t as Kt,v as oe,w as S,x as Xt,y as N,u as Me,z as ct,A as Zt,b as de,B as Jt,j as E,c as pe,s as M,C as Qt,D as en,F as tn,G as nn,H as rn,S as on,d as an}from"./index-bae7a722.js";import{_ as dt,a as un,b as sn,c as ln,d as cn,e as dn,f as pn}from"./createClass-95edb997.js";import{T as fn}from"./TitlePage-0edad67e.js";import{F as hn,c as mn,a as ze,b as Ue,e as vn,f as gn,E as bn}from"./index.esm-4ebdb5df.js";function En(n,t){if(n==null)return{};var i={},r=Object.keys(n),e,a;for(a=0;a<r.length;a++)e=r[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}var x=function(t,i){var r=arguments;if(i==null||!Wt.call(i,"css"))return m.createElement.apply(void 0,r);var e=r.length,a=new Array(e);a[0]=Gt,a[1]=Yt(t,i);for(var u=2;u<e;u++)a[u]=r[u];return m.createElement.apply(null,a)};function Ve(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return qt(t)}var xn=function(){var t=Ve.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Cn(n){if(Array.isArray(n))return n}function Sn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,e,a,u,l=[],o=!0,s=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;o=!1}else for(;!(o=(r=a.call(i)).done)&&(l.push(r.value),l.length!==t);o=!0);}catch(c){s=!0,e=c}finally{try{if(!o&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw e}}return l}}function Fn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(n,t){return Cn(n)||Sn(n,t)||dt(n,t)||Fn()}function X(n,t){if(n==null)return{};var i=En(n,t),r,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var wn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function yn(n){var t=n.defaultInputValue,i=t===void 0?"":t,r=n.defaultMenuIsOpen,e=r===void 0?!1:r,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,o=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,v=n.onMenuOpen,h=n.value,g=X(n,wn),p=m.useState(l!==void 0?l:i),f=K(p,2),b=f[0],w=f[1],y=m.useState(o!==void 0?o:e),O=K(y,2),D=O[0],I=O[1],A=m.useState(h!==void 0?h:u),F=K(A,2),V=F[0],T=F[1],H=m.useCallback(function(j,Z){typeof s=="function"&&s(j,Z),T(j)},[s]),B=m.useCallback(function(j,Z){var J;typeof c=="function"&&(J=c(j,Z)),w(J!==void 0?J:j)},[c]),W=m.useCallback(function(){typeof v=="function"&&v(),I(!0)},[v]),G=m.useCallback(function(){typeof d=="function"&&d(),I(!1)},[d]),k=l!==void 0?l:b,L=o!==void 0?o:D,_=h!==void 0?h:V;return C(C({},g),{},{inputValue:k,menuIsOpen:L,onChange:H,onInputChange:B,onMenuClose:G,onMenuOpen:W,value:_})}function On(n){if(Array.isArray(n))return un(n)}function Dn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function In(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(n){return On(n)||Dn(n)||dt(n)||In()}function An(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Mn=Math.min,Vn=Math.max,fe=Math.round,ae=Math.floor,he=n=>({x:n,y:n});function Pn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function pt(n){return ht(n)?(n.nodeName||"").toLowerCase():"#document"}function U(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function ft(n){var t;return(t=(ht(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function ht(n){return n instanceof Node||n instanceof U(n).Node}function De(n){return n instanceof Element||n instanceof U(n).Element}function Le(n){return n instanceof HTMLElement||n instanceof U(n).HTMLElement}function Ne(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof U(n).ShadowRoot}function mt(n){const{overflow:t,overflowX:i,overflowY:r,display:e}=Re(n);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!["inline","contents"].includes(e)}function Ln(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Rn(n){return["html","body","#document"].includes(pt(n))}function Re(n){return U(n).getComputedStyle(n)}function kn(n){if(pt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ne(n)&&n.host||ft(n);return Ne(t)?t.host:t}function vt(n){const t=kn(n);return Rn(t)?n.ownerDocument?n.ownerDocument.body:n.body:Le(t)&&mt(t)?t:vt(t)}function me(n,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=vt(n),a=e===((r=n.ownerDocument)==null?void 0:r.body),u=U(e);return a?t.concat(u,u.visualViewport||[],mt(e)?e:[],u.frameElement&&i?me(u.frameElement):[]):t.concat(e,me(e,[],i))}function Tn(n){const t=Re(n);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const e=Le(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:r,l=fe(i)!==a||fe(r)!==u;return l&&(i=a,r=u),{width:i,height:r,$:l}}function ke(n){return De(n)?n:n.contextElement}function xe(n){const t=ke(n);if(!Le(t))return he(1);const i=t.getBoundingClientRect(),{width:r,height:e,$:a}=Tn(t);let u=(a?fe(i.width):i.width)/r,l=(a?fe(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const Bn=he(0);function Hn(n){const t=U(n);return!Ln()||!t.visualViewport?Bn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function $n(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==U(n)?!1:t}function _e(n,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=ke(n);let u=he(1);t&&(r?De(r)&&(u=xe(r)):u=xe(n));const l=$n(a,i,r)?Hn(a):he(0);let o=(e.left+l.x)/u.x,s=(e.top+l.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const v=U(a),h=r&&De(r)?U(r):r;let g=v.frameElement;for(;g&&r&&h!==v;){const p=xe(g),f=g.getBoundingClientRect(),b=Re(g),w=f.left+(g.clientLeft+parseFloat(b.paddingLeft))*p.x,y=f.top+(g.clientTop+parseFloat(b.paddingTop))*p.y;o*=p.x,s*=p.y,c*=p.x,d*=p.y,o+=w,s+=y,g=U(g).frameElement}}return Pn({width:c,height:d,x:o,y:s})}function jn(n,t){let i=null,r;const e=ft(n);function a(){clearTimeout(r),i&&i.disconnect(),i=null}function u(l,o){l===void 0&&(l=!1),o===void 0&&(o=1),a();const{left:s,top:c,width:d,height:v}=n.getBoundingClientRect();if(l||t(),!d||!v)return;const h=ae(c),g=ae(e.clientWidth-(s+d)),p=ae(e.clientHeight-(c+v)),f=ae(s),w={rootMargin:-h+"px "+-g+"px "+-p+"px "+-f+"px",threshold:Vn(0,Mn(1,o))||1};let y=!0;function O(D){const I=D[0].intersectionRatio;if(I!==o){if(!y)return u();I?u(!1,I):r=setTimeout(()=>{u(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(O,{...w,root:e.ownerDocument})}catch{i=new IntersectionObserver(O,w)}i.observe(n)}return u(!0),a}function zn(n,t,i,r){r===void 0&&(r={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,s=ke(n),c=e||a?[...s?me(s):[],...me(t)]:[];c.forEach(b=>{e&&b.addEventListener("scroll",i,{passive:!0}),a&&b.addEventListener("resize",i)});const d=s&&l?jn(s,i):null;let v=-1,h=null;u&&(h=new ResizeObserver(b=>{let[w]=b;w&&w.target===s&&h&&(h.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{h&&h.observe(t)})),i()}),s&&!o&&h.observe(s),h.observe(t));let g,p=o?_e(n):null;o&&f();function f(){const b=_e(n);p&&(b.x!==p.x||b.y!==p.y||b.width!==p.width||b.height!==p.height)&&i(),p=b,g=requestAnimationFrame(f)}return i(),()=>{c.forEach(b=>{e&&b.removeEventListener("scroll",i),a&&b.removeEventListener("resize",i)}),d&&d(),h&&h.disconnect(),h=null,o&&cancelAnimationFrame(g)}}var Ie=m.useLayoutEffect,Un=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function Nn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function _n(n,t){for(var i=arguments.length,r=new Array(i>2?i-2:0),e=2;e<i;e++)r[e-2]=arguments[e];var a=[].concat(r);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat(Nn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var We=function(t){return Qn(t)?t.filter(Boolean):Kt(t)==="object"&&t!==null?[t]:[]},gt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=X(t,Un);return C({},i)},P=function(t,i,r){var e=t.cx,a=t.getStyles,u=t.getClassNames,l=t.className;return{css:a(i,t),className:e(r??{},u(i,t),l)}};function Ee(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Wn(n){return Ee(n)?window.innerHeight:n.clientHeight}function bt(n){return Ee(n)?window.pageYOffset:n.scrollTop}function ge(n,t){if(Ee(n)){window.scrollTo(0,t);return}n.scrollTop=t}function Gn(n){var t=getComputedStyle(n),i=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Yn(n,t,i,r){return i*((n=n/r-1)*n*n+1)+t}function ue(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,e=bt(n),a=t-e,u=10,l=0;function o(){l+=u;var s=Yn(l,e,a,i);ge(n,s),l<i?window.requestAnimationFrame(o):r(n)}o()}function Ge(n,t){var i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),e=t.offsetHeight/3;r.bottom+e>i.bottom?ge(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):r.top-e<i.top&&ge(n,Math.max(t.offsetTop-e,0))}function qn(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ye(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Kn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Et=!1,Xn={get passive(){return Et=!0}},se=typeof window<"u"?window:{};se.addEventListener&&se.removeEventListener&&(se.addEventListener("p",ve,Xn),se.removeEventListener("p",ve,!1));var Zn=Et;function Jn(n){return n!=null}function Qn(n){return Array.isArray(n)}function le(n,t,i){return n?t:i}var ei=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),e=1;e<i;e++)r[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var l=K(u,1),o=l[0];return!r.includes(o)});return a.reduce(function(u,l){var o=K(l,2),s=o[0],c=o[1];return u[s]=c,u},{})},ti=["children","innerProps"],ni=["children","innerProps"];function ii(n){var t=n.maxHeight,i=n.menuEl,r=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,o=Gn(i),s={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return s;var c=o.getBoundingClientRect(),d=c.height,v=i.getBoundingClientRect(),h=v.bottom,g=v.height,p=v.top,f=i.offsetParent.getBoundingClientRect(),b=f.top,w=u?window.innerHeight:Wn(o),y=bt(o),O=parseInt(getComputedStyle(i).marginBottom,10),D=parseInt(getComputedStyle(i).marginTop,10),I=b-D,A=w-p,F=I+y,V=d-y-p,T=h-w+y+O,H=y+p-D,B=160;switch(e){case"auto":case"bottom":if(A>=g)return{placement:"bottom",maxHeight:t};if(V>=g&&!u)return a&&ue(o,T,B),{placement:"bottom",maxHeight:t};if(!u&&V>=r||u&&A>=r){a&&ue(o,T,B);var W=u?A-O:V-O;return{placement:"bottom",maxHeight:W}}if(e==="auto"||u){var G=t,k=u?I:F;return k>=r&&(G=Math.min(k-O-l,t)),{placement:"top",maxHeight:G}}if(e==="bottom")return a&&ge(o,T),{placement:"bottom",maxHeight:t};break;case"top":if(I>=g)return{placement:"top",maxHeight:t};if(F>=g&&!u)return a&&ue(o,H,B),{placement:"top",maxHeight:t};if(!u&&F>=r||u&&I>=r){var L=t;return(!u&&F>=r||u&&I>=r)&&(L=u?I-D:F-D),a&&ue(o,H,B),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function ri(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var xt=function(t){return t==="auto"?"bottom":t},oi=function(t,i){var r,e=t.placement,a=t.theme,u=a.borderRadius,l=a.spacing,o=a.colors;return C((r={label:"menu"},oe(r,ri(e),"100%"),oe(r,"position","absolute"),oe(r,"width","100%"),oe(r,"zIndex",1),r),i?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Ct=m.createContext(null),ai=function(t){var i=t.children,r=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,l=t.menuShouldScrollIntoView,o=t.theme,s=m.useContext(Ct)||{},c=s.setPortalPlacement,d=m.useRef(null),v=m.useState(e),h=K(v,2),g=h[0],p=h[1],f=m.useState(null),b=K(f,2),w=b[0],y=b[1],O=o.spacing.controlHeight;return Ie(function(){var D=d.current;if(D){var I=u==="fixed",A=l&&!I,F=ii({maxHeight:e,menuEl:D,minHeight:r,placement:a,shouldScroll:A,isFixedPosition:I,controlHeight:O});p(F.maxHeight),y(F.placement),c==null||c(F.placement)}},[e,a,u,l,r,c,O]),i({ref:d,placerProps:C(C({},t),{},{placement:w||xt(a),maxHeight:g})})},ui=function(t){var i=t.children,r=t.innerRef,e=t.innerProps;return x("div",S({},P(t,"menu",{menu:!0}),{ref:r},e),i)},si=ui,li=function(t,i){var r=t.maxHeight,e=t.theme.spacing.baseUnit;return C({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},ci=function(t){var i=t.children,r=t.innerProps,e=t.innerRef,a=t.isMulti;return x("div",S({},P(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},r),i)},St=function(t,i){var r=t.theme,e=r.spacing.baseUnit,a=r.colors;return C({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},di=St,pi=St,fi=function(t){var i=t.children,r=i===void 0?"No options":i,e=t.innerProps,a=X(t,ti);return x("div",S({},P(C(C({},a),{},{children:r,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),r)},hi=function(t){var i=t.children,r=i===void 0?"Loading...":i,e=t.innerProps,a=X(t,ni);return x("div",S({},P(C(C({},a),{},{children:r,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),r)},mi=function(t){var i=t.rect,r=t.offset,e=t.position;return{left:i.left,position:e,top:r,width:i.width,zIndex:1}},vi=function(t){var i=t.appendTo,r=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,l=t.menuPosition,o=m.useRef(null),s=m.useRef(null),c=m.useState(xt(u)),d=K(c,2),v=d[0],h=d[1],g=m.useMemo(function(){return{setPortalPlacement:h}},[]),p=m.useState(null),f=K(p,2),b=f[0],w=f[1],y=m.useCallback(function(){if(e){var A=qn(e),F=l==="fixed"?0:window.pageYOffset,V=A[v]+F;(V!==(b==null?void 0:b.offset)||A.left!==(b==null?void 0:b.rect.left)||A.width!==(b==null?void 0:b.rect.width))&&w({offset:V,rect:A})}},[e,l,v,b==null?void 0:b.offset,b==null?void 0:b.rect.left,b==null?void 0:b.rect.width]);Ie(function(){y()},[y]);var O=m.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&o.current&&(s.current=zn(e,o.current,y,{elementResize:"ResizeObserver"in window}))},[e,y]);Ie(function(){O()},[O]);var D=m.useCallback(function(A){o.current=A,O()},[O]);if(!i&&l!=="fixed"||!b)return null;var I=x("div",S({ref:D},P(C(C({},t),{},{offset:b.offset,position:l,rect:b.rect}),"menuPortal",{"menu-portal":!0}),a),r);return x(Ct.Provider,{value:g},i?Xt.createPortal(I,i):I)},gi=function(t){var i=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},bi=function(t){var i=t.children,r=t.innerProps,e=t.isDisabled,a=t.isRtl;return x("div",S({},P(t,"container",{"--is-disabled":e,"--is-rtl":a}),r),i)},Ei=function(t,i){var r=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return C({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},xi=function(t){var i=t.children,r=t.innerProps,e=t.isMulti,a=t.hasValue;return x("div",S({},P(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),r),i)},Ci=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Si=function(t){var i=t.children,r=t.innerProps;return x("div",S({},P(t,"indicatorsContainer",{indicators:!0}),r),i)},qe,Fi=["size"],wi=["innerProps","isRtl","size"],yi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ft=function(t){var i=t.size,r=X(t,Fi);return x("svg",S({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:yi},r))},Te=function(t){return x(Ft,S({size:20},t),x("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},wt=function(t){return x(Ft,S({size:20},t),x("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},yt=function(t,i){var r=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:r?u.neutral60:u.neutral20,padding:a*2,":hover":{color:r?u.neutral80:u.neutral40}})},Oi=yt,Di=function(t){var i=t.children,r=t.innerProps;return x("div",S({},P(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),i||x(wt,null))},Ii=yt,Ai=function(t){var i=t.children,r=t.innerProps;return x("div",S({},P(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),i||x(Te,null))},Mi=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return C({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:r?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Vi=function(t){var i=t.innerProps;return x("span",S({},i,P(t,"indicatorSeparator",{"indicator-separator":!0})))},Pi=xn(qe||(qe=An([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Li=function(t,i){var r=t.isFocused,e=t.size,a=t.theme,u=a.colors,l=a.spacing.baseUnit;return C({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:r?u.neutral60:u.neutral20,padding:l*2})},Ce=function(t){var i=t.delay,r=t.offset;return x("span",{css:Ve({animation:"".concat(Pi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Ri=function(t){var i=t.innerProps,r=t.isRtl,e=t.size,a=e===void 0?4:e,u=X(t,wi);return x("div",S({},P(C(C({},u),{},{innerProps:i,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),x(Ce,{delay:0,offset:r}),x(Ce,{delay:160,offset:!0}),x(Ce,{delay:320,offset:!r}))},ki=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,l=a.borderRadius,o=a.spacing;return C({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:r?u.neutral5:u.neutral0,borderColor:r?u.neutral10:e?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Ti=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,l=t.menuIsOpen;return x("div",S({ref:a},P(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":e,"control--menu-is-open":l}),u,{"aria-disabled":r||void 0}),i)},Bi=Ti,Hi=["data"],$i=function(t,i){var r=t.theme.spacing;return i?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},ji=function(t){var i=t.children,r=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,l=t.headingProps,o=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return x("div",S({},P(t,"group",{group:!0}),o),x(u,S({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:r}),s),x("div",null,i))},zi=function(t,i){var r=t.theme,e=r.colors,a=r.spacing;return C({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Ui=function(t){var i=gt(t);i.data;var r=X(i,Hi);return x("div",S({},P(t,"groupHeading",{"group-heading":!0}),r))},Ni=ji,_i=["innerRef","isDisabled","isHidden","inputClassName"],Wi=function(t,i){var r=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,l=a.colors;return C(C({visibility:r?"hidden":"visible",transform:e?"translateZ(0)":""},Gi),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Ot={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Gi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":C({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Ot)},Yi=function(t){return C({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Ot)},qi=function(t){var i=t.cx,r=t.value,e=gt(t),a=e.innerRef,u=e.isDisabled,l=e.isHidden,o=e.inputClassName,s=X(e,_i);return x("div",S({},P(t,"input",{"input-container":!0}),{"data-value":r||""}),x("input",S({className:i({input:!0},o),ref:a,style:Yi(l),disabled:u},s)))},Ki=qi,Xi=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors;return C({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},Zi=function(t,i){var r=t.theme,e=r.borderRadius,a=r.colors,u=t.cropWithEllipsis;return C({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Ji=function(t,i){var r=t.theme,e=r.spacing,a=r.borderRadius,u=r.colors,l=t.isFocused;return C({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Dt=function(t){var i=t.children,r=t.innerProps;return x("div",r,i)},Qi=Dt,er=Dt;function tr(n){var t=n.children,i=n.innerProps;return x("div",S({role:"button"},i),t||x(Te,{size:14}))}var nr=function(t){var i=t.children,r=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,l=t.removeProps,o=t.selectProps,s=r.Container,c=r.Label,d=r.Remove;return x(s,{data:e,innerProps:C(C({},P(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},x(c,{data:e,innerProps:C({},P(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},i),x(d,{data:e,innerProps:C(C({},P(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:o}))},ir=nr,rr=function(t,i){var r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,l=u.spacing,o=u.colors;return C({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?o.primary:e?o.primary25:"transparent",color:r?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?o.primary:o.primary50}})},or=function(t){var i=t.children,r=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,l=t.innerProps;return x("div",S({},P(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":r},l),i)},ar=or,ur=function(t,i){var r=t.theme,e=r.spacing,a=r.colors;return C({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},sr=function(t){var i=t.children,r=t.innerProps;return x("div",S({},P(t,"placeholder",{placeholder:!0}),r),i)},lr=sr,cr=function(t,i){var r=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return C({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:r?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},dr=function(t){var i=t.children,r=t.isDisabled,e=t.innerProps;return x("div",S({},P(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),e),i)},pr=dr,fr={ClearIndicator:Ai,Control:Bi,DropdownIndicator:Di,DownChevron:wt,CrossIcon:Te,Group:Ni,GroupHeading:Ui,IndicatorsContainer:Si,IndicatorSeparator:Vi,Input:Ki,LoadingIndicator:Ri,Menu:si,MenuList:ci,MenuPortal:vi,LoadingMessage:hi,NoOptionsMessage:fi,MultiValue:ir,MultiValueContainer:Qi,MultiValueLabel:er,MultiValueRemove:tr,Option:ar,Placeholder:lr,SelectContainer:bi,SingleValue:pr,ValueContainer:xi},hr=function(t){return C(C({},fr),t.components)},Ke=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function mr(n,t){return!!(n===t||Ke(n)&&Ke(t))}function vr(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!mr(n[i],t[i]))return!1;return!0}function gr(n,t){t===void 0&&(t=vr);var i=null;function r(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return r.clear=function(){i=null},r}var br={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Er=function(t){return x("span",S({css:br},t))},Xe=Er,xr={guidance:function(t){var i=t.isSearchable,r=t.isMulti,e=t.tabSelectsValue,a=t.context,u=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,r=t.label,e=r===void 0?"":r,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,r=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,l=t.selectValue,o=t.isDisabled,s=t.isSelected,c=t.isAppleDevice,d=function(p,f){return p&&p.length?"".concat(p.indexOf(f)+1," of ").concat(p.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,r),".");if(i==="menu"&&c){var v=o?" disabled":"",h="".concat(s?" selected":"").concat(v);return"".concat(u).concat(h,", ").concat(d(e,r),".")}return""},onFilter:function(t){var i=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(i?" for search term "+i:"",".")}},Cr=function(t){var i=t.ariaSelection,r=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,l=t.selectValue,o=t.selectProps,s=t.id,c=t.isAppleDevice,d=o.ariaLiveMessages,v=o.getOptionLabel,h=o.inputValue,g=o.isMulti,p=o.isOptionDisabled,f=o.isSearchable,b=o.menuIsOpen,w=o.options,y=o.screenReaderStatus,O=o.tabSelectsValue,D=o.isLoading,I=o["aria-label"],A=o["aria-live"],F=m.useMemo(function(){return C(C({},xr),d||{})},[d]),V=m.useMemo(function(){var k="";if(i&&F.onChange){var L=i.option,_=i.options,j=i.removedValue,Z=i.removedValues,J=i.value,ie=function(q){return Array.isArray(q)?null:q},R=j||L||ie(J),$=R?v(R):"",Y=_||Z||void 0,Q=Y?Y.map(v):[],z=C({isDisabled:R&&p(R,l),label:$,labels:Q},i);k=F.onChange(z)}return k},[i,F,p,l,v]),T=m.useMemo(function(){var k="",L=r||e,_=!!(r&&l&&l.includes(r));if(L&&F.onFocus){var j={focused:L,label:v(L),isDisabled:p(L,l),isSelected:_,options:a,context:L===r?"menu":"value",selectValue:l,isAppleDevice:c};k=F.onFocus(j)}return k},[r,e,v,p,F,a,l,c]),H=m.useMemo(function(){var k="";if(b&&w.length&&!D&&F.onFilter){var L=y({count:a.length});k=F.onFilter({inputValue:h,resultsMessage:L})}return k},[a,h,b,F,w,y,D]),B=(i==null?void 0:i.action)==="initial-input-focus",W=m.useMemo(function(){var k="";if(F.guidance){var L=e?"value":b?"menu":"input";k=F.guidance({"aria-label":I,context:L,isDisabled:r&&p(r,l),isMulti:g,isSearchable:f,tabSelectsValue:O,isInitialFocus:B})}return k},[I,r,e,g,p,f,b,F,l,O,B]),G=x(m.Fragment,null,x("span",{id:"aria-selection"},V),x("span",{id:"aria-focused"},T),x("span",{id:"aria-results"},H),x("span",{id:"aria-guidance"},W));return x(m.Fragment,null,x(Xe,{id:s},B&&G),x(Xe,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!B&&G))},Sr=Cr,Ae=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Fr=new RegExp("["+Ae.map(function(n){return n.letters}).join("")+"]","g"),It={};for(var Se=0;Se<Ae.length;Se++)for(var Fe=Ae[Se],we=0;we<Fe.letters.length;we++)It[Fe.letters[we]]=Fe.base;var At=function(t){return t.replace(Fr,function(i){return It[i]})},wr=gr(At),Ze=function(t){return t.replace(/^\s+|\s+$/g,"")},yr=function(t){return"".concat(t.label," ").concat(t.value)},Or=function(t){return function(i,r){if(i.data.__isNew__)return!0;var e=C({ignoreCase:!0,ignoreAccents:!0,stringify:yr,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,l=e.stringify,o=e.trim,s=e.matchFrom,c=o?Ze(r):r,d=o?Ze(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=wr(c),d=At(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Dr=["innerRef"];function Ir(n){var t=n.innerRef,i=X(n,Dr),r=ei(i,"onExited","in","enter","exit","appear");return x("input",S({ref:t},r,{css:Ve({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Ar=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Mr(n){var t=n.isEnabled,i=n.onBottomArrive,r=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=m.useRef(!1),l=m.useRef(!1),o=m.useRef(0),s=m.useRef(null),c=m.useCallback(function(f,b){if(s.current!==null){var w=s.current,y=w.scrollTop,O=w.scrollHeight,D=w.clientHeight,I=s.current,A=b>0,F=O-D-y,V=!1;F>b&&u.current&&(r&&r(f),u.current=!1),A&&l.current&&(a&&a(f),l.current=!1),A&&b>F?(i&&!u.current&&i(f),I.scrollTop=O,V=!0,u.current=!0):!A&&-b>y&&(e&&!l.current&&e(f),I.scrollTop=0,V=!0,l.current=!0),V&&Ar(f)}},[i,r,e,a]),d=m.useCallback(function(f){c(f,f.deltaY)},[c]),v=m.useCallback(function(f){o.current=f.changedTouches[0].clientY},[]),h=m.useCallback(function(f){var b=o.current-f.changedTouches[0].clientY;c(f,b)},[c]),g=m.useCallback(function(f){if(f){var b=Zn?{passive:!1}:!1;f.addEventListener("wheel",d,b),f.addEventListener("touchstart",v,b),f.addEventListener("touchmove",h,b)}},[h,v,d]),p=m.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",v,!1),f.removeEventListener("touchmove",h,!1))},[h,v,d]);return m.useEffect(function(){if(t){var f=s.current;return g(f),function(){p(f)}}},[t,g,p]),function(f){s.current=f}}var Je=["boxSizing","height","overflow","paddingRight","position"],Qe={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function et(n){n.preventDefault()}function tt(n){n.stopPropagation()}function nt(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function it(){return"ontouchstart"in window||navigator.maxTouchPoints}var rt=!!(typeof window<"u"&&window.document&&window.document.createElement),ne=0,te={capture:!1,passive:!1};function Vr(n){var t=n.isEnabled,i=n.accountForScrollbars,r=i===void 0?!0:i,e=m.useRef({}),a=m.useRef(null),u=m.useCallback(function(o){if(rt){var s=document.body,c=s&&s.style;if(r&&Je.forEach(function(g){var p=c&&c[g];e.current[g]=p}),r&&ne<1){var d=parseInt(e.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,h=window.innerWidth-v+d||0;Object.keys(Qe).forEach(function(g){var p=Qe[g];c&&(c[g]=p)}),c&&(c.paddingRight="".concat(h,"px"))}s&&it()&&(s.addEventListener("touchmove",et,te),o&&(o.addEventListener("touchstart",nt,te),o.addEventListener("touchmove",tt,te))),ne+=1}},[r]),l=m.useCallback(function(o){if(rt){var s=document.body,c=s&&s.style;ne=Math.max(ne-1,0),r&&ne<1&&Je.forEach(function(d){var v=e.current[d];c&&(c[d]=v)}),s&&it()&&(s.removeEventListener("touchmove",et,te),o&&(o.removeEventListener("touchstart",nt,te),o.removeEventListener("touchmove",tt,te)))}},[r]);return m.useEffect(function(){if(t){var o=a.current;return u(o),function(){l(o)}}},[t,u,l]),function(o){a.current=o}}var Pr=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Lr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Rr(n){var t=n.children,i=n.lockEnabled,r=n.captureEnabled,e=r===void 0?!0:r,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,o=n.onTopLeave,s=Mr({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:o}),c=Vr({isEnabled:i}),d=function(h){s(h),c(h)};return x(m.Fragment,null,i&&x("div",{onClick:Pr,css:Lr}),t(d))}var kr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Tr=function(t){var i=t.name,r=t.onFocus;return x("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:kr,value:"",onChange:function(){}})},Br=Tr;function Be(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function Hr(){return Be(/^iPhone/i)}function Mt(){return Be(/^Mac/i)}function $r(){return Be(/^iPad/i)||Mt()&&navigator.maxTouchPoints>1}function jr(){return Hr()||$r()}function zr(){return Mt()||jr()}var Ur=function(t){return t.label},Nr=function(t){return t.label},_r=function(t){return t.value},Wr=function(t){return!!t.isDisabled},Gr={clearIndicator:Ii,container:gi,control:ki,dropdownIndicator:Oi,group:$i,groupHeading:zi,indicatorsContainer:Ci,indicatorSeparator:Mi,input:Wi,loadingIndicator:Li,loadingMessage:pi,menu:oi,menuList:li,menuPortal:mi,multiValue:Xi,multiValueLabel:Zi,multiValueRemove:Ji,noOptionsMessage:di,option:rr,placeholder:ur,singleValue:cr,valueContainer:Ei},Yr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},qr=4,Vt=4,Kr=38,Xr=Vt*2,Zr={baseUnit:Vt,controlHeight:Kr,menuGutter:Xr},ye={borderRadius:qr,colors:Yr,spacing:Zr},Jr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ye(),captureMenuScroll:!Ye(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Or(),formatGroupLabel:Ur,getOptionLabel:Nr,getOptionValue:_r,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Wr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Kn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function ot(n,t,i,r){var e=Rt(n,t,i),a=kt(n,t,i),u=Lt(n,t),l=be(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:l,index:r}}function ce(n,t){return n.options.map(function(i,r){if("options"in i){var e=i.options.map(function(u,l){return ot(n,u,t,l)}).filter(function(u){return ut(n,u)});return e.length>0?{type:"group",data:i,options:e,index:r}:void 0}var a=ot(n,i,t,r);return ut(n,a)?a:void 0}).filter(Jn)}function Pt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,Pe(i.options.map(function(r){return r.data}))):t.push(i.data),t},[])}function at(n,t){return n.reduce(function(i,r){return r.type==="group"?i.push.apply(i,Pe(r.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(r.index,"-").concat(e.index)}}))):i.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),i},[])}function Qr(n,t){return Pt(ce(n,t))}function ut(n,t){var i=n.inputValue,r=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,l=t.value;return(!Bt(n)||!a)&&Tt(n,{label:u,value:l,data:e},r)}function eo(n,t){var i=n.focusedValue,r=n.selectValue,e=r.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function to(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Oe=function(t,i){var r,e=(r=t.find(function(a){return a.data===i}))===null||r===void 0?void 0:r.id;return e||null},Lt=function(t,i){return t.getOptionLabel(i)},be=function(t,i){return t.getOptionValue(i)};function Rt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function kt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var r=be(n,t);return i.some(function(e){return be(n,e)===r})}function Tt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Bt=function(t){var i=t.hideSelectedOptions,r=t.isMulti;return i===void 0?r:i},no=1,Ht=function(n){sn(i,n);var t=ln(i);function i(r){var e;if(cn(this,i),e=t.call(this,r),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=zr(),e.controlRef=null,e.getControlRef=function(o){e.controlRef=o},e.focusedOptionRef=null,e.getFocusedOptionRef=function(o){e.focusedOptionRef=o},e.menuListRef=null,e.getMenuListRef=function(o){e.menuListRef=o},e.inputRef=null,e.getInputRef=function(o){e.inputRef=o},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(o,s){var c=e.props,d=c.onChange,v=c.name;s.name=v,e.ariaOnChange(o,s),d(o,s)},e.setValue=function(o,s,c){var d=e.props,v=d.closeMenuOnSelect,h=d.isMulti,g=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:g}),v&&(e.setState({inputIsHiddenAfterUpdate:!h}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(o,{action:s,option:c})},e.selectOption=function(o){var s=e.props,c=s.blurInputOnSelect,d=s.isMulti,v=s.name,h=e.state.selectValue,g=d&&e.isOptionSelected(o,h),p=e.isOptionDisabled(o,h);if(g){var f=e.getOptionValue(o);e.setValue(h.filter(function(b){return e.getOptionValue(b)!==f}),"deselect-option",o)}else if(!p)d?e.setValue([].concat(Pe(h),[o]),"select-option",o):e.setValue(o,"select-option");else{e.ariaOnChange(o,{action:"select-option",option:o,name:v});return}c&&e.blurInput()},e.removeValue=function(o){var s=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(o),v=c.filter(function(g){return e.getOptionValue(g)!==d}),h=le(s,v,v[0]||null);e.onChange(h,{action:"remove-value",removedValue:o}),e.focusInput()},e.clearValue=function(){var o=e.state.selectValue;e.onChange(le(e.props.isMulti,[],null),{action:"clear",removedValues:o})},e.popValue=function(){var o=e.props.isMulti,s=e.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),v=le(o,d,d[0]||null);e.onChange(v,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(o){return Oe(e.state.focusableOptionsWithIds,o)},e.getFocusableOptionsWithIds=function(){return at(ce(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return _n.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(o){return Lt(e.props,o)},e.getOptionValue=function(o){return be(e.props,o)},e.getStyles=function(o,s){var c=e.props.unstyled,d=Gr[o](s,c);d.boxSizing="border-box";var v=e.props.styles[o];return v?v(d,s):d},e.getClassNames=function(o,s){var c,d;return(c=(d=e.props.classNames)[o])===null||c===void 0?void 0:c.call(d,s)},e.getElementId=function(o){return"".concat(e.state.instancePrefix,"-").concat(o)},e.getComponents=function(){return hr(e.props)},e.buildCategorizedOptions=function(){return ce(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return Pt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(o,s){e.setState({ariaSelection:C({value:o},s)})},e.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(o){e.blockOptionHover=!1},e.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},e.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!e.props.isDisabled){var s=e.props,c=s.isMulti,d=s.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),o.preventDefault()}},e.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(e.clearValue(),o.preventDefault(),e.openAfterFocus=!1,o.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(o){typeof e.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&Ee(o.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(o)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(o){var s=o.touches,c=s&&s.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(o){var s=o.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),v=Math.abs(c.clientY-e.initialTouchY),h=5;e.userIsDragging=d>h||v>h}},e.onTouchEnd=function(o){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(o.target)&&e.menuListRef&&!e.menuListRef.contains(o.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(o){e.userIsDragging||e.onControlMouseDown(o)},e.onClearIndicatorTouchEnd=function(o){e.userIsDragging||e.onClearIndicatorMouseDown(o)},e.onDropdownIndicatorTouchEnd=function(o){e.userIsDragging||e.onDropdownIndicatorMouseDown(o)},e.handleInputChange=function(o){var s=e.props.inputValue,c=o.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(o){e.props.onFocus&&e.props.onFocus(o),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(o){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(o),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(o){if(!(e.blockOptionHover||e.state.focusedOption===o)){var s=e.getFocusableOptions(),c=s.indexOf(o);e.setState({focusedOption:o,focusedOptionId:c>-1?e.getFocusedOptionId(o):null})}},e.shouldHideSelectedOptions=function(){return Bt(e.props)},e.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),e.focus()},e.onKeyDown=function(o){var s=e.props,c=s.isMulti,d=s.backspaceRemovesValue,v=s.escapeClearsValue,h=s.inputValue,g=s.isClearable,p=s.isDisabled,f=s.menuIsOpen,b=s.onKeyDown,w=s.tabSelectsValue,y=s.openMenuOnFocus,O=e.state,D=O.focusedOption,I=O.focusedValue,A=O.selectValue;if(!p&&!(typeof b=="function"&&(b(o),o.defaultPrevented))){switch(e.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||h)return;e.focusValue("previous");break;case"ArrowRight":if(!c||h)return;e.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(I)e.removeValue(I);else{if(!d)return;c?e.popValue():g&&e.clearValue()}break;case"Tab":if(e.isComposing||o.shiftKey||!f||!w||!D||y&&e.isOptionSelected(D,A))return;e.selectOption(D);break;case"Enter":if(o.keyCode===229)break;if(f){if(!D||e.isComposing)return;e.selectOption(D);break}return;case"Escape":f?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:h}),e.onMenuClose()):g&&v&&e.clearValue();break;case" ":if(h)return;if(!f){e.openMenu("first");break}if(!D)return;e.selectOption(D);break;case"ArrowUp":f?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":f?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!f)return;e.focusOption("pageup");break;case"PageDown":if(!f)return;e.focusOption("pagedown");break;case"Home":if(!f)return;e.focusOption("first");break;case"End":if(!f)return;e.focusOption("last");break;default:return}o.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++no),e.state.selectValue=We(r.value),r.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=u[l],e.state.focusedOptionId=Oe(a,u[l])}return e}return dn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ge(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&e.isDisabled||o&&l&&!e.menuIsOpen)&&this.focusInput(),o&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ge(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,l=u.selectValue,o=u.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(l);l||(o=-1);var s=u.length-1,c=-1;if(u.length){switch(e){case"previous":o===0?c=0:o===-1?c=s:c=o-1;break;case"next":o>-1&&o<s&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,s=l.indexOf(u);u||(s=-1),e==="up"?o=s>0?s-1:l.length-1:e==="down"?o=(s+1)%l.length:e==="pageup"?(o=s-a,o<0&&(o=0)):e==="pagedown"?(o=s+a,o>l.length-1&&(o=l.length-1)):e==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ye):C(C({},ye),this.props.theme):ye}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,o=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,h=d.isRtl,g=d.options,p=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:l,getValue:o,hasValue:p,isMulti:v,isRtl:h,options:g,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return Rt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return kt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Tt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,l=e.inputId,o=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,v=e.required,h=this.getComponents(),g=h.Input,p=this.state,f=p.inputIsHidden,b=p.ariaSelection,w=this.commonProps,y=l||this.getElementId("input"),O=C(C(C({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(b==null?void 0:b.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?m.createElement(g,S({},w,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:o},O)):m.createElement(Ir,S({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,h=this.props,g=h.controlShouldRenderValue,p=h.isDisabled,f=h.isMulti,b=h.inputValue,w=h.placeholder,y=this.state,O=y.selectValue,D=y.focusedValue,I=y.isFocused;if(!this.hasValue()||!g)return b?null:m.createElement(d,S({},v,{key:"placeholder",isDisabled:p,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),w);if(f)return O.map(function(F,V){var T=F===D,H="".concat(e.getOptionLabel(F),"-").concat(e.getOptionValue(F));return m.createElement(u,S({},v,{components:{Container:l,Label:o,Remove:s},isFocused:T,isDisabled:p,key:H,index:V,removeProps:{onClick:function(){return e.removeValue(F)},onTouchEnd:function(){return e.removeValue(F)},onMouseDown:function(W){W.preventDefault()}},data:F}),e.formatOptionLabel(F,"value"))});if(b)return null;var A=O[0];return m.createElement(c,S({},v,{data:A,isDisabled:p}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(a,S({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return m.createElement(a,S({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused;return m.createElement(u,S({},l,{isDisabled:o,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return m.createElement(a,S({},u,{innerProps:s,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,o=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,h=a.Option,g=this.commonProps,p=this.state.focusedOption,f=this.props,b=f.captureMenuScroll,w=f.inputValue,y=f.isLoading,O=f.loadingMessage,D=f.minMenuHeight,I=f.maxMenuHeight,A=f.menuIsOpen,F=f.menuPlacement,V=f.menuPosition,T=f.menuPortalTarget,H=f.menuShouldBlockScroll,B=f.menuShouldScrollIntoView,W=f.noOptionsMessage,G=f.onMenuScrollToTop,k=f.onMenuScrollToBottom;if(!A)return null;var L=function($,Y){var Q=$.type,z=$.data,ee=$.isDisabled,q=$.isSelected,re=$.label,Ut=$.value,He=p===z,$e=ee?void 0:function(){return e.onOptionHover(z)},Nt=ee?void 0:function(){return e.selectOption(z)},je="".concat(e.getElementId("option"),"-").concat(Y),_t={id:je,onClick:Nt,onMouseMove:$e,onMouseOver:$e,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:q};return m.createElement(h,S({},g,{innerProps:_t,data:z,isDisabled:ee,isSelected:q,key:je,label:re,type:Q,value:Ut,isFocused:He,innerRef:He?e.getFocusedOptionRef:void 0}),e.formatOptionLabel($.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var $=R.data,Y=R.options,Q=R.index,z="".concat(e.getElementId("group"),"-").concat(Q),ee="".concat(z,"-heading");return m.createElement(u,S({},g,{key:z,data:$,options:Y,Heading:l,headingProps:{id:ee,data:R.data},label:e.formatGroupLabel(R.data)}),R.options.map(function(q){return L(q,"".concat(Q,"-").concat(q.index))}))}else if(R.type==="option")return L(R,"".concat(R.index))});else if(y){var j=O({inputValue:w});if(j===null)return null;_=m.createElement(d,g,j)}else{var Z=W({inputValue:w});if(Z===null)return null;_=m.createElement(v,g,Z)}var J={minMenuHeight:D,maxMenuHeight:I,menuPlacement:F,menuPosition:V,menuShouldScrollIntoView:B},ie=m.createElement(ai,S({},g,J),function(R){var $=R.ref,Y=R.placerProps,Q=Y.placement,z=Y.maxHeight;return m.createElement(o,S({},g,J,{innerRef:$,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:y,placement:Q}),m.createElement(Rr,{captureEnabled:b,onTopArrive:G,onBottomArrive:k,lockEnabled:H},function(ee){return m.createElement(s,S({},g,{innerRef:function(re){e.getMenuListRef(re),ee(re)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:e.getElementId("listbox")},isLoading:y,maxHeight:z,focusedOption:p}),_)}))});return T||V==="fixed"?m.createElement(c,S({},g,{appendTo:T,controlElement:this.controlRef,menuPlacement:F,menuPosition:V}),ie):ie}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,l=a.isDisabled,o=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return m.createElement(Br,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(o)if(u){var v=d.map(function(p){return e.getOptionValue(p)}).join(u);return m.createElement("input",{name:s,type:"hidden",value:v})}else{var h=d.length>0?d.map(function(p,f){return m.createElement("input",{key:"i-".concat(f),name:s,type:"hidden",value:e.getOptionValue(p)})}):m.createElement("input",{name:s,type:"hidden",value:""});return m.createElement("div",null,h)}else{var g=d[0]?this.getOptionValue(d[0]):"";return m.createElement("input",{name:s,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return m.createElement(Sr,S({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:o,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,l=e.SelectContainer,o=e.ValueContainer,s=this.props,c=s.className,d=s.id,v=s.isDisabled,h=s.menuIsOpen,g=this.state.isFocused,p=this.commonProps=this.getCommonProps();return m.createElement(l,S({},p,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:g}),this.renderLiveRegion(),m.createElement(a,S({},p,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:g,menuIsOpen:h}),m.createElement(o,S({},p,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),m.createElement(u,S({},p,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=a.instancePrefix,h=e.options,g=e.value,p=e.menuIsOpen,f=e.inputValue,b=e.isMulti,w=We(g),y={};if(u&&(g!==u.value||h!==u.options||p!==u.menuIsOpen||f!==u.inputValue)){var O=p?Qr(e,w):[],D=p?at(ce(e,w),"".concat(v,"-option")):[],I=l?eo(a,w):null,A=to(a,O),F=Oe(D,A);y={selectValue:w,focusedOption:A,focusedOptionId:F,focusableOptionsWithIds:D,focusedValue:I,clearFocusValueOnUpdate:!1}}var V=o!=null&&e!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},T=s,H=c&&d;return c&&!H&&(T={value:le(b,w,w[0]||null),options:w,action:"initial-input-focus"},H=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),C(C(C({},y),V),{},{prevProps:e,ariaSelection:T,prevWasFocused:H})}}]),i}(m.Component);Ht.defaultProps=Jr;var io=m.forwardRef(function(n,t){var i=yn(n);return m.createElement(Ht,S({ref:t},i))}),st=io;const $t={option:(n,t)=>({...n,padding:"8px 0",fontSize:"14px",color:t.isSelected?"#E6533C":"#EFEDE8",backgroundColor:t.isSelected?"rgba(28, 28, 28, 1)":t.isFocused?"rgba(239, 237, 232, 0.10)":"rgba(28, 28, 28, 1)",cursor:"pointer"}),singleValue:n=>({...n,color:"#EFEDE8"}),menu:n=>({...n,backgroundColor:"rgba(28, 28, 28, 1)",padding:"6px 5px 14px 14px"}),indicatorSeparator:n=>({...n,backgroundColor:"transparent"}),dropdownIndicator:n=>({...n,color:"#EFEDE8"}),container:(n,t)=>({...n,border:`1px solid ${t.isFocused?"#E6533C":"rgba(239, 237, 232, 0.3)"}`,"&:hover":{border:"1px solid #E6533C"},borderRadius:"12px",outline:"none"}),menuList:n=>({...n,overflowY:"auto",marginTop:"14px",marginRight:"7px","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb":{background:"rgba(239, 237, 232, 0.10)",borderRadius:"12px"}}),placeholder:n=>({...n,fontSize:"14px",lineHeight:"1.28",margin:"0",padding:"0"})},ro={...$t,control:n=>({...n,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"146px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"192px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},oo={...$t,control:n=>({...n,cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none","@media screen and (min-width: 375px)":{width:"173px",height:"46px",fontSize:"14px",lineHeight:"1.28"},"@media screen and (min-width: 768px)":{width:"204px",height:"52px",fontSize:"16px",lineHeight:"1.5"}})},ao=N.label`
  position: relative;
`,uo=N.div`
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
`,so=N.input`
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
`,lo=N.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 14px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,co=N.svg`
  stroke: var(--color-text);
  fill: transparent;
  width: 18px;
  height: 18px;
  transition: stroke 0.3s var(--timing-function);

  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`,po=N.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 40px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
`,fo=N.svg`
  stroke: var(--color-main-one);
  width: 18px;
  height: 18px;
`,ho=N.div`
  display: flex;
  gap: 16px;
`,lt=[{value:"all",label:"All"},{value:"true",label:"Recommended "},{value:"false",label:"Not recommended"}],mo=()=>{const[n,t]=m.useState(""),[i,r]=m.useState({value:"all",label:"All categories"}),[e,a]=m.useState(lt[0]),u=Me();m.useEffect(()=>{u(ct({recommended:e.value,category:i.value,query:n}))},[e,i,n,u]),m.useEffect(()=>{u(Zt())},[u]);const l=p=>`${p[0].toUpperCase()}${p.slice(1)}`,o=de(Jt),s=[{value:"all",label:"All categories"},...o.map(({_id:p,name:f})=>({value:p,label:l(f)}))],c=p=>{const{value:f}=p.target;t(f),console.log("setQuery.value",n)},d=p=>{p.preventDefault();const f=p.target.elements[0].value;t(f)},v=()=>{t("")},h=p=>{r(p)},g=p=>{a(p)};return E.jsx(E.Fragment,{children:E.jsxs(uo,{children:[E.jsx("form",{onSubmit:d,children:E.jsxs(ao,{children:[E.jsx(so,{type:"text",name:"productsSearch",placeholder:"Search",value:n,onChange:c}),n&&E.jsx(po,{type:"button",onClick:v,children:E.jsx(fo,{children:E.jsx("use",{href:pe+"#icon-cross"})})}),E.jsx(lo,{type:"submit",children:E.jsx(co,{children:E.jsx("use",{href:pe+"#icon-search"})})})]})}),E.jsxs(ho,{children:[E.jsx(st,{styles:ro,value:i,onChange:h,options:s,placeholder:"Categories",theme:p=>({...p,colors:{...p.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})}),E.jsx(st,{styles:oo,value:e,onChange:g,options:lt,theme:p=>({...p,colors:{...p.colors,primary50:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral40:"#EFEDE8",neutral20:"transparent",neutral30:"transparent",neutral50:"rgba(239, 237, 232, 1)",neutral80:"rgba(239, 237, 232, 1)"}})})]})]})})},vo=M.div`
  padding: 38px 22px;
`,go=M.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,jt=M(hn)`
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
`,bo=M(jt)`
  color: rgba(239, 237, 232, 0.3);
  border: 1px solid var(--color-main-one);

  @media screen and (min-width: 768px) {
    width: 244px;
  }
`,Eo=M.label`
  display: block;
  position: relative;
`,xo=M(jt)`
  @media screen and (min-width: 768px) {
    width: 155px;
  }
`,Co=M.span`
  position: absolute;
  top: 50%;
  right: 14px;
  color: rgba(239, 237, 232, 0.4);
  transform: translate(0, -50%);
  /* color:; */
`,So=M.p`
  margin-bottom: 24px;
  text-align: left;
  line-height: 1.5; /* 150% */
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,Fo=M.span`
  color: var(--color-text);
`,wo=M.div`
  display: flex;
  gap: 14px;
`,zt=M.button`
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
`,yo=M(zt)`
  background-color: var(--color-main-one);
  border: 1px solid var(--color-main-one);

  &:hover,
  &:focus {
    background-color: var(--color-main-two);
    border: 1px solid var(--color-main-two);
  }
`,Oo=M(zt)`
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
`,Do=({id:n,title:t,calories:i,onClick:r})=>{const[e,a]=m.useState(0),u=Me(),l={product_id:n,date:pn(new Date,"yyyy-MM-dd"),weight:"",calories:0},o=mn().shape({product_id:ze().required(),date:ze().required(),weight:Ue().required().positive(),calories:Ue().required()}),s=h=>{const g=i*h/100;return parseFloat(g)},c=(h,g)=>{const p=h.target.value,f=s(p);a(f),g("weight",Number(p)),g("calories",f)},d=(h,g)=>{console.log(h),delete h.calories,console.log(h),u(Qt(h))},v=()=>{r()};return E.jsx(vn,{initialValues:l,validationSchema:o,onSubmit:d,children:({values:h,setFieldValue:g})=>E.jsx(gn,{autoComplete:"off",children:E.jsxs(vo,{children:[E.jsxs(go,{children:[E.jsx("div",{children:E.jsx("label",{htmlFor:"product",children:E.jsx(bo,{name:"product",type:"text",value:t,readOnly:!0})})}),E.jsx("div",{children:E.jsxs(Eo,{htmlFor:"amount",children:[E.jsx(xo,{name:"amount",type:"text",onChange:p=>c(p,g),onKeyPress:p=>{/^[0-9\b]+$/.test(p.key)||p.preventDefault()},value:h.weight}),E.jsx(Co,{children:"grams"}),E.jsx(bn,{name:"weight",component:"p"})]})})]}),E.jsxs(So,{children:["Calories: ",E.jsx(Fo,{children:e})]}),E.jsxs(wo,{children:[E.jsx(yo,{type:"submit",onClick:d,children:"Add to diary"}),E.jsx(Oo,{type:"button",onClick:v,children:"Cancel"})]})]})})})},Io=M.li`
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
`,Ao=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Mo=M.div`
  padding: 5px 7.5px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  > p {
    margin: 0;
    font-weight: 700;
  }
`,Vo=M.div`
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
`,Po=M.button`
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
`,Lo=M.div`
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
`,Ro=M.div`
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
`,ko=M.ul`
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
`,To=M.p`
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
`,Bo=({id:n,title:t,calories:i,category:r,weight:e,recommended:a})=>{const[u,l]=m.useState(!1),o=()=>{l(s=>!s)};return E.jsxs(Io,{children:[u&&E.jsx(en,{onClick:o,children:E.jsx(Do,{id:n,title:t,calories:i,onClick:o})}),E.jsxs("section",{children:[E.jsxs(Ao,{children:[E.jsx(Mo,{children:E.jsx("p",{children:"DIET"})}),E.jsxs(Vo,{children:[E.jsx("div",{}),E.jsx("p",{children:a?"Recommended":"Not recommended"}),E.jsxs(Po,{type:"button",onClick:o,children:[E.jsx("span",{children:"Add"}),E.jsx("svg",{children:E.jsx("use",{href:`${pe}#icon-next`})})]})]})]}),E.jsxs(Lo,{children:[E.jsx(Ro,{children:E.jsx("svg",{children:E.jsx("use",{href:`${pe}#icon-run`})})}),E.jsx("h2",{children:t})]}),E.jsxs(ko,{children:[E.jsx("li",{children:E.jsxs("p",{children:["Calories:",E.jsx("span",{children:i})]})}),E.jsx("li",{children:E.jsxs(To,{children:["Category:",E.jsx("span",{children:r})]})}),E.jsx("li",{children:E.jsxs("p",{children:["Weight:",E.jsx("span",{children:e})]})})]})]})]},n)},Ho=M.ul`
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
`,$o=!1,jo=n=>`${n[0].toUpperCase()}${n.slice(1)}`,zo=()=>{const n=Me(),t=de(tn);return m.useEffect(()=>{n(ct())},[n]),E.jsx(Ho,{children:t.map(i=>E.jsx(Bo,{id:i._id,title:i.title,calories:i.calories,category:jo(i.category.name),weight:i.weight,recommended:$o},i._id))})},Uo=N.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,No=N.div`
  position: relative;
`,_o=N.span`
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
`,Ko=()=>{const n=de(nn),t=de(rn);return E.jsx(on,{children:E.jsxs(No,{children:[E.jsx(_o,{children:"Filters"}),E.jsx(Uo,{children:E.jsx(fn,{children:"Products"})}),E.jsx(mo,{}),n&&!t&&E.jsx(an,{}),E.jsx(zo,{})]})})};export{Ko as default};
