import{$ as ot,$a as iM,$b as Tp,A as Ap,Aa as St,Ab as ht,Ac as wM,B as g0,Ba as Qt,Bb as lM,Bc as vM,C as Ho,Ca as A0,Cb as dM,Cc as Lp,D as Ae,Da as WD,Db as xa,Dc as yM,E as b0,Ea as Dp,Eb as ri,Ec as Fp,F as es,Fa as GD,Fb as ss,G as is,Ga as Er,Gb as M0,H as Fc,Ha as fi,Hb as Pt,Hc as Ia,I as _0,Ia as iu,Ib as I0,Ic as cs,J as on,Ja as zc,Jb as yt,K as FD,Ka as jc,Kb as qe,Kc as Eo,L as tu,La as $D,Lb as Rt,Lc as Sa,M as qo,Ma as KD,Mb as di,Mc as Dr,N as Wo,Na as YD,Nb as Ge,Nc as CM,O as k0,Oa as QD,Ob as $t,Oc as AM,P as zD,Pa as ZD,Pb as Kt,Q as jD,Qa as XD,Qb as Rn,R as VD,Ra as JD,Rb as H,S as w0,Sa as Pn,Sb as ye,T as xp,Ta as Mp,Tb as Wt,U as ns,Ua as tM,Ub as uM,V as ji,Va as eM,Vb as ne,W as ti,Wa as nu,Wb as oe,X as UD,Xa as q,Xb as re,Y as oi,Ya as j,Yb as $e,Z as Oe,Za as Ca,Zb as pt,_ as On,_a as Vc,_b as as,a as nt,aa as Dt,ab as Ip,ac as Op,b as ze,ba as HD,bb as Sp,bc as S0,c as m0,ca as mt,cb as rs,cc as Pp,d as RD,da as v0,db as x0,dc as Uc,e as Co,ea as Z,eb as Ct,ec as Bp,f as Xd,fa as rt,fb as nM,fc as vi,g as ni,ga as Ep,gb as Aa,gc as hM,h as Ti,ha as y0,hb as E0,hc as se,i as ND,ia as eu,ib as Pe,ic as xo,j as Ao,ja as st,jb as li,jc as mM,k as p0,ka as ut,kb as oM,kc as pM,l as vp,la as Mt,lb as D0,lc as Hc,m as Et,ma as bt,mb as ou,mc as fM,n as xi,na as wa,nb as vt,nc as gM,o as Uo,oa as qD,ob as Zt,oc as Vt,p as zi,pa as va,pb as it,pc as bM,q as xt,qa as Go,qb as Bn,qc as Ea,r as ka,ra as ci,rb as Lt,rc as _M,s as yp,sa as le,sb as sn,sc as kM,t as LD,ta as de,tb as rM,tc as Da,u as Nt,ua as os,ub as He,uc as Rp,v as Lc,va as C0,vb as sM,vc as Np,w as Tn,wa as rn,wb as aM,wc as Yi,x as f0,xa as xr,xb as cM,xc as kn,y as Cp,ya as _n,yb as R,yc as Ma,z as Jd,za as ya,zb as B,zc as jt}from"./chunk-ARPUO74W.js";var So=RD((er,bw)=>{"use strict";(function(c,r){typeof er=="object"&&typeof bw<"u"?bw.exports=r():typeof define=="function"&&define.amd?define(r):(c=typeof globalThis<"u"?globalThis:c||self,c.Sweetalert2=r())})(er,function(){"use strict";function c(T,w,A){if(typeof T=="function"?T===w:T.has(w))return arguments.length<3?w:A;throw new TypeError("Private element is not present on this object")}function r(T,w,A){return w=U(w),Y(T,m()?Reflect.construct(w,A||[],U(T).constructor):w.apply(T,A))}function h(T,w){return T.get(c(T,w))}function a(T,w,A){return T.set(c(T,w),A),A}function l(T,w,A){if(m())return Reflect.construct.apply(null,arguments);var M=[null];M.push.apply(M,w);var F=new(T.bind.apply(T,M));return A&&G(F,A.prototype),F}function m(){try{var T=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(m=function(){return!!T})()}function f(T,w){var A=T==null?null:typeof Symbol<"u"&&T[Symbol.iterator]||T["@@iterator"];if(A!=null){var M,F,X,ft,Jt=[],ie=!0,Je=!1;try{if(X=(A=A.call(T)).next,w===0){if(Object(A)!==A)return;ie=!1}else for(;!(ie=(M=X.call(A)).done)&&(Jt.push(M.value),Jt.length!==w);ie=!0);}catch(fc){Je=!0,F=fc}finally{try{if(!ie&&A.return!=null&&(ft=A.return(),Object(ft)!==ft))return}finally{if(Je)throw F}}return Jt}}function k(T,w){if(typeof T!="object"||!T)return T;var A=T[Symbol.toPrimitive];if(A!==void 0){var M=A.call(T,w||"default");if(typeof M!="object")return M;throw new TypeError("@@toPrimitive must return a primitive value.")}return(w==="string"?String:Number)(T)}function D(T){var w=k(T,"string");return typeof w=="symbol"?w:w+""}function x(T){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},x(T)}function y(T,w){if(!(T instanceof w))throw new TypeError("Cannot call a class as a function")}function I(T,w){for(var A=0;A<w.length;A++){var M=w[A];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(T,D(M.key),M)}}function N(T,w,A){return w&&I(T.prototype,w),A&&I(T,A),Object.defineProperty(T,"prototype",{writable:!1}),T}function z(T,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(w&&w.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),w&&G(T,w)}function U(T){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(A){return A.__proto__||Object.getPrototypeOf(A)},U(T)}function G(T,w){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(M,F){return M.__proto__=F,M},G(T,w)}function K(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function Y(T,w){if(w&&(typeof w=="object"||typeof w=="function"))return w;if(w!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return K(T)}function lt(T,w){for(;!Object.prototype.hasOwnProperty.call(T,w)&&(T=U(T),T!==null););return T}function Ot(){return typeof Reflect<"u"&&Reflect.get?Ot=Reflect.get.bind():Ot=function(w,A,M){var F=lt(w,A);if(F){var X=Object.getOwnPropertyDescriptor(F,A);return X.get?X.get.call(arguments.length<3?w:M):X.value}},Ot.apply(this,arguments)}function qt(T,w){return L(T)||f(T,w)||Ce(T,w)||To()}function _t(T){return kt(T)||gt(T)||Ce(T)||Ze()}function kt(T){if(Array.isArray(T))return We(T)}function L(T){if(Array.isArray(T))return T}function gt(T){if(typeof Symbol<"u"&&T[Symbol.iterator]!=null||T["@@iterator"]!=null)return Array.from(T)}function Ce(T,w){if(T){if(typeof T=="string")return We(T,w);var A=Object.prototype.toString.call(T).slice(8,-1);if(A==="Object"&&T.constructor&&(A=T.constructor.name),A==="Map"||A==="Set")return Array.from(T);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return We(T,w)}}function We(T,w){(w==null||w>T.length)&&(w=T.length);for(var A=0,M=new Array(w);A<w;A++)M[A]=T[A];return M}function Ze(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function To(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uo(T,w){if(w.has(T))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Un(T,w,A){uo(T,w),w.set(T,A)}var Lr=100,Ft={},rh=function(){Ft.previousActiveElement instanceof HTMLElement?(Ft.previousActiveElement.focus(),Ft.previousActiveElement=null):document.body&&document.body.focus()},ve=function(w){return new Promise(function(A){if(!w)return A();var M=window.scrollX,F=window.scrollY;Ft.restoreFocusTimeout=setTimeout(function(){rh(),A()},Lr),window.scrollTo(M,F)})},Ll="swal2-",Fl=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],Q=Fl.reduce(function(T,w){return T[w]=Ll+w,T},{}),zl=["success","warning","info","question","error"],Ts=zl.reduce(function(T,w){return T[w]=Ll+w,T},{}),jl="SweetAlert2:",Os=function(w){return w.charAt(0).toUpperCase()+w.slice(1)},Yt=function(w){console.warn("".concat(jl," ").concat(x(w)==="object"?w.join(" "):w))},Hn=function(w){console.error("".concat(jl," ").concat(w))},Ps=[],qa=function(w){Ps.includes(w)||(Ps.push(w),Yt(w))},Fr=function(w,A){qa('"'.concat(w,'" is deprecated and will be removed in the next major release. Please use "').concat(A,'" instead.'))},Bs=function(w){return typeof w=="function"?w():w},Wa=function(w){return w&&typeof w.toPromise=="function"},ce=function(w){return Wa(w)?w.toPromise():Promise.resolve(w)},Rs=function(w){return w&&Promise.resolve(w)===w},qi=function(){return document.body.querySelector(".".concat(Q.container))},Ns=function(w){var A=qi();return A?A.querySelector(w):null},Wi=function(w){return Ns(".".concat(w))},ke=function(){return Wi(Q.popup)},Ls=function(){return Wi(Q.icon)},Vl=function(){return Wi(Q["icon-content"])},Ei=function(){return Wi(Q.title)},Ri=function(){return Wi(Q["html-container"])},Ul=function(){return Wi(Q.image)},Hl=function(){return Wi(Q["progress-steps"])},Gi=function(){return Wi(Q["validation-message"])},hi=function(){return Ns(".".concat(Q.actions," .").concat(Q.confirm))},nr=function(){return Ns(".".concat(Q.actions," .").concat(Q.cancel))},or=function(){return Ns(".".concat(Q.actions," .").concat(Q.deny))},Bg=function(){return Wi(Q["input-label"])},qn=function(){return Ns(".".concat(Q.loader))},Fs=function(){return Wi(Q.actions)},sh=function(){return Wi(Q.footer)},Ga=function(){return Wi(Q["timer-progress-bar"])},$a=function(){return Wi(Q.close)},Oo=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Ni=function(){var w=ke();if(!w)return[];var A=w.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),M=Array.from(A).sort(function(ft,Jt){var ie=parseInt(ft.getAttribute("tabindex")||"0"),Je=parseInt(Jt.getAttribute("tabindex")||"0");return ie>Je?1:ie<Je?-1:0}),F=w.querySelectorAll(Oo),X=Array.from(F).filter(function(ft){return ft.getAttribute("tabindex")!=="-1"});return _t(new Set(M.concat(X))).filter(function(ft){return ki(ft)})},$i=function(){return An(document.body,Q.shown)&&!An(document.body,Q["toast-shown"])&&!An(document.body,Q["no-backdrop"])},zs=function(){var w=ke();return w?An(w,Q.toast):!1},ln=function(){var w=ke();return w?w.hasAttribute("data-loading"):!1},Ki=function(w,A){if(w.textContent="",A){var M=new DOMParser,F=M.parseFromString(A,"text/html"),X=F.querySelector("head");X&&Array.from(X.childNodes).forEach(function(Jt){w.appendChild(Jt)});var ft=F.querySelector("body");ft&&Array.from(ft.childNodes).forEach(function(Jt){Jt instanceof HTMLVideoElement||Jt instanceof HTMLAudioElement?w.appendChild(Jt.cloneNode(!0)):w.appendChild(Jt)})}},An=function(w,A){if(!A)return!1;for(var M=A.split(/\s+/),F=0;F<M.length;F++)if(!w.classList.contains(M[F]))return!1;return!0},Rg=function(w,A){Array.from(w.classList).forEach(function(M){!Object.values(Q).includes(M)&&!Object.values(Ts).includes(M)&&!Object.values(A.showClass||{}).includes(M)&&w.classList.remove(M)})},dn=function(w,A,M){if(Rg(w,A),A.customClass&&A.customClass[M]){if(typeof A.customClass[M]!="string"&&!A.customClass[M].forEach){Yt("Invalid type of customClass.".concat(M,'! Expected string or iterable object, got "').concat(x(A.customClass[M]),'"'));return}Ut(w,A.customClass[M])}},js=function(w,A){if(!A)return null;switch(A){case"select":case"textarea":case"file":return w.querySelector(".".concat(Q.popup," > .").concat(Q[A]));case"checkbox":return w.querySelector(".".concat(Q.popup," > .").concat(Q.checkbox," input"));case"radio":return w.querySelector(".".concat(Q.popup," > .").concat(Q.radio," input:checked"))||w.querySelector(".".concat(Q.popup," > .").concat(Q.radio," input:first-child"));case"range":return w.querySelector(".".concat(Q.popup," > .").concat(Q.range," input"));default:return w.querySelector(".".concat(Q.popup," > .").concat(Q.input))}},ah=function(w){if(w.focus(),w.type!=="file"){var A=w.value;w.value="",w.value=A}},ch=function(w,A,M){!w||!A||(typeof A=="string"&&(A=A.split(/\s+/).filter(Boolean)),A.forEach(function(F){Array.isArray(w)?w.forEach(function(X){M?X.classList.add(F):X.classList.remove(F)}):M?w.classList.add(F):w.classList.remove(F)}))},Ut=function(w,A){ch(w,A,!0)},Wn=function(w,A){ch(w,A,!1)},un=function(w,A){for(var M=Array.from(w.children),F=0;F<M.length;F++){var X=M[F];if(X instanceof HTMLElement&&An(X,A))return X}},Gn=function(w,A,M){M==="".concat(parseInt(M))&&(M=parseInt(M)),M||parseInt(M)===0?w.style.setProperty(A,typeof M=="number"?"".concat(M,"px"):M):w.style.removeProperty(A)},_i=function(w){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";w&&(w.style.display=A)},Di=function(w){w&&(w.style.display="none")},ql=function(w){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";w&&new MutationObserver(function(){Vs(w,w.innerHTML,A)}).observe(w,{childList:!0,subtree:!0})},lh=function(w,A,M,F){var X=w.querySelector(A);X&&X.style.setProperty(M,F)},Vs=function(w,A){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";A?_i(w,M):Di(w)},ki=function(w){return!!(w&&(w.offsetWidth||w.offsetHeight||w.getClientRects().length))},Ka=function(){return!ki(hi())&&!ki(or())&&!ki(nr())},dh=function(w){return w.scrollHeight>w.clientHeight},uh=function(w){var A=window.getComputedStyle(w),M=parseFloat(A.getPropertyValue("animation-duration")||"0"),F=parseFloat(A.getPropertyValue("transition-duration")||"0");return M>0||F>0},Wl=function(w){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,M=Ga();M&&ki(M)&&(A&&(M.style.transition="none",M.style.width="100%"),setTimeout(function(){M.style.transition="width ".concat(w/1e3,"s linear"),M.style.width="0%"},10))},Ng=function(){var w=Ga();if(w){var A=parseInt(window.getComputedStyle(w).width);w.style.removeProperty("transition"),w.style.width="100%";var M=parseInt(window.getComputedStyle(w).width),F=A/M*100;w.style.width="".concat(F,"%")}},Po=function(){return typeof window>"u"||typeof document>"u"},Gl=`
 <div aria-labelledby="`.concat(Q.title,'" aria-describedby="').concat(Q["html-container"],'" class="').concat(Q.popup,`" tabindex="-1">
   <button type="button" class="`).concat(Q.close,`"></button>
   <ul class="`).concat(Q["progress-steps"],`"></ul>
   <div class="`).concat(Q.icon,`"></div>
   <img class="`).concat(Q.image,`" />
   <h2 class="`).concat(Q.title,'" id="').concat(Q.title,`"></h2>
   <div class="`).concat(Q["html-container"],'" id="').concat(Q["html-container"],`"></div>
   <input class="`).concat(Q.input,'" id="').concat(Q.input,`" />
   <input type="file" class="`).concat(Q.file,`" />
   <div class="`).concat(Q.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(Q.select,'" id="').concat(Q.select,`"></select>
   <div class="`).concat(Q.radio,`"></div>
   <label class="`).concat(Q.checkbox,`">
     <input type="checkbox" id="`).concat(Q.checkbox,`" />
     <span class="`).concat(Q.label,`"></span>
   </label>
   <textarea class="`).concat(Q.textarea,'" id="').concat(Q.textarea,`"></textarea>
   <div class="`).concat(Q["validation-message"],'" id="').concat(Q["validation-message"],`"></div>
   <div class="`).concat(Q.actions,`">
     <div class="`).concat(Q.loader,`"></div>
     <button type="button" class="`).concat(Q.confirm,`"></button>
     <button type="button" class="`).concat(Q.deny,`"></button>
     <button type="button" class="`).concat(Q.cancel,`"></button>
   </div>
   <div class="`).concat(Q.footer,`"></div>
   <div class="`).concat(Q["timer-progress-bar-container"],`">
     <div class="`).concat(Q["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),hh=function(){var w=qi();return w?(w.remove(),Wn([document.documentElement,document.body],[Q["no-backdrop"],Q["toast-shown"],Q["has-column"]]),!0):!1},rr=function(){Ft.currentInstance.resetValidationMessage()},Lg=function(){var w=ke(),A=un(w,Q.input),M=un(w,Q.file),F=w.querySelector(".".concat(Q.range," input")),X=w.querySelector(".".concat(Q.range," output")),ft=un(w,Q.select),Jt=w.querySelector(".".concat(Q.checkbox," input")),ie=un(w,Q.textarea);A.oninput=rr,M.onchange=rr,ft.onchange=rr,Jt.onchange=rr,ie.oninput=rr,F.oninput=function(){rr(),X.value=F.value},F.onchange=function(){rr(),X.value=F.value}},sr=function(w){return typeof w=="string"?document.querySelector(w):w},Fg=function(w){var A=ke();A.setAttribute("role",w.toast?"alert":"dialog"),A.setAttribute("aria-live",w.toast?"polite":"assertive"),w.toast||A.setAttribute("aria-modal","true")},zg=function(w){window.getComputedStyle(w).direction==="rtl"&&Ut(qi(),Q.rtl)},jg=function(w){var A=hh();if(Po()){Hn("SweetAlert2 requires document to initialize");return}var M=document.createElement("div");M.className=Q.container,A&&Ut(M,Q["no-transition"]),Ki(M,Gl);var F=sr(w.target);F.appendChild(M),Fg(w),zg(F),Lg()},$l=function(w,A){w instanceof HTMLElement?A.appendChild(w):x(w)==="object"?Vg(w,A):w&&Ki(A,w)},Vg=function(w,A){w.jquery?Ug(A,w):Ki(A,w.toString())},Ug=function(w,A){if(w.textContent="",0 in A)for(var M=0;M in A;M++)w.appendChild(A[M].cloneNode(!0));else w.appendChild(A.cloneNode(!0))},ar=function(){if(Po())return!1;var T=document.createElement("div");return typeof T.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof T.style.animation<"u"?"animationend":!1}(),Hg=function(w,A){var M=Fs(),F=qn();!M||!F||(!A.showConfirmButton&&!A.showDenyButton&&!A.showCancelButton?Di(M):_i(M),dn(M,A,"actions"),cr(M,F,A),Ki(F,A.loaderHtml||""),dn(F,A,"loader"))};function cr(T,w,A){var M=hi(),F=or(),X=nr();!M||!F||!X||(lr(M,"confirm",A),lr(F,"deny",A),lr(X,"cancel",A),Us(M,F,X,A),A.reverseButtons&&(A.toast?(T.insertBefore(X,M),T.insertBefore(F,M)):(T.insertBefore(X,w),T.insertBefore(F,w),T.insertBefore(M,w))))}function Us(T,w,A,M){if(!M.buttonsStyling){Wn([T,w,A],Q.styled);return}Ut([T,w,A],Q.styled),M.confirmButtonColor&&(T.style.backgroundColor=M.confirmButtonColor,Ut(T,Q["default-outline"])),M.denyButtonColor&&(w.style.backgroundColor=M.denyButtonColor,Ut(w,Q["default-outline"])),M.cancelButtonColor&&(A.style.backgroundColor=M.cancelButtonColor,Ut(A,Q["default-outline"]))}function lr(T,w,A){var M=Os(w);Vs(T,A["show".concat(M,"Button")],"inline-block"),Ki(T,A["".concat(w,"ButtonText")]||""),T.setAttribute("aria-label",A["".concat(w,"ButtonAriaLabel")]||""),T.className=Q[w],dn(T,A,"".concat(w,"Button"))}var qg=function(w,A){var M=$a();M&&(Ki(M,A.closeButtonHtml||""),dn(M,A,"closeButton"),Vs(M,A.showCloseButton),M.setAttribute("aria-label",A.closeButtonAriaLabel||""))},Wg=function(w,A){var M=qi();M&&(Gg(M,A.backdrop),$g(M,A.position),Kg(M,A.grow),dn(M,A,"container"))};function Gg(T,w){typeof w=="string"?T.style.background=w:w||Ut([document.documentElement,document.body],Q["no-backdrop"])}function $g(T,w){w&&(w in Q?Ut(T,Q[w]):(Yt('The "position" parameter is not valid, defaulting to "center"'),Ut(T,Q.center)))}function Kg(T,w){w&&Ut(T,Q["grow-".concat(w)])}var Be={innerParams:new WeakMap,domCache:new WeakMap},Yg=["input","file","range","select","radio","checkbox","textarea"],zr=function(w,A){var M=ke();if(M){var F=Be.innerParams.get(w),X=!F||A.input!==F.input;Yg.forEach(function(ft){var Jt=un(M,Q[ft]);Jt&&(Zg(ft,A.inputAttributes),Jt.className=Q[ft],X&&Di(Jt))}),A.input&&(X&&mh(A),Ya(A))}},mh=function(w){if(w.input){if(!Re[w.input]){Hn("Unexpected type of input! Expected ".concat(Object.keys(Re).join(" | "),', got "').concat(w.input,'"'));return}var A=ph(w.input),M=Re[w.input](A,w);_i(A),w.inputAutoFocus&&setTimeout(function(){ah(M)})}},Qg=function(w){for(var A=0;A<w.attributes.length;A++){var M=w.attributes[A].name;["id","type","value","style"].includes(M)||w.removeAttribute(M)}},Zg=function(w,A){var M=js(ke(),w);if(M){Qg(M);for(var F in A)M.setAttribute(F,A[F])}},Ya=function(w){var A=ph(w.input);x(w.customClass)==="object"&&Ut(A,w.customClass.input)},Kl=function(w,A){(!w.placeholder||A.inputPlaceholder)&&(w.placeholder=A.inputPlaceholder)},Hs=function(w,A,M){if(M.inputLabel){var F=document.createElement("label"),X=Q["input-label"];F.setAttribute("for",w.id),F.className=X,x(M.customClass)==="object"&&Ut(F,M.customClass.inputLabel),F.innerText=M.inputLabel,A.insertAdjacentElement("beforebegin",F)}},ph=function(w){return un(ke(),Q[w]||Q.input)},Qa=function(w,A){["string","number"].includes(x(A))?w.value="".concat(A):Rs(A)||Yt('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(x(A),'"'))},Re={};Re.text=Re.email=Re.password=Re.number=Re.tel=Re.url=Re.search=Re.date=Re["datetime-local"]=Re.time=Re.week=Re.month=function(T,w){return Qa(T,w.inputValue),Hs(T,T,w),Kl(T,w),T.type=w.input,T},Re.file=function(T,w){return Hs(T,T,w),Kl(T,w),T},Re.range=function(T,w){var A=T.querySelector("input"),M=T.querySelector("output");return Qa(A,w.inputValue),A.type=w.input,Qa(M,w.inputValue),Hs(A,T,w),T},Re.select=function(T,w){if(T.textContent="",w.inputPlaceholder){var A=document.createElement("option");Ki(A,w.inputPlaceholder),A.value="",A.disabled=!0,A.selected=!0,T.appendChild(A)}return Hs(T,T,w),T},Re.radio=function(T){return T.textContent="",T},Re.checkbox=function(T,w){var A=js(ke(),"checkbox");A.value="1",A.checked=!!w.inputValue;var M=T.querySelector("span");return Ki(M,w.inputPlaceholder),A},Re.textarea=function(T,w){Qa(T,w.inputValue),Kl(T,w),Hs(T,T,w);var A=function(F){return parseInt(window.getComputedStyle(F).marginLeft)+parseInt(window.getComputedStyle(F).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var M=parseInt(window.getComputedStyle(ke()).width),F=function(){if(document.body.contains(T)){var ft=T.offsetWidth+A(T);ft>M?ke().style.width="".concat(ft,"px"):Gn(ke(),"width",w.width)}};new MutationObserver(F).observe(T,{attributes:!0,attributeFilter:["style"]})}}),T};var Za=function(w,A){var M=Ri();M&&(ql(M),dn(M,A,"htmlContainer"),A.html?($l(A.html,M),_i(M,"block")):A.text?(M.textContent=A.text,_i(M,"block")):Di(M),zr(w,A))},Xg=function(w,A){var M=sh();M&&(ql(M),Vs(M,A.footer,"block"),A.footer&&$l(A.footer,M),dn(M,A,"footer"))},jr=function(w,A){var M=Be.innerParams.get(w),F=Ls();if(F){if(M&&A.icon===M.icon){fh(F,A),dr(F,A);return}if(!A.icon&&!A.iconHtml){Di(F);return}if(A.icon&&Object.keys(Ts).indexOf(A.icon)===-1){Hn('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(A.icon,'"')),Di(F);return}_i(F),fh(F,A),dr(F,A),Ut(F,A.showClass&&A.showClass.icon)}},dr=function(w,A){for(var M=0,F=Object.entries(Ts);M<F.length;M++){var X=qt(F[M],2),ft=X[0],Jt=X[1];A.icon!==ft&&Wn(w,Jt)}Ut(w,A.icon&&Ts[A.icon]),Yl(w,A),Jg(),dn(w,A,"icon")},Jg=function(){var w=ke();if(w)for(var A=window.getComputedStyle(w).getPropertyValue("background-color"),M=w.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),F=0;F<M.length;F++)M[F].style.backgroundColor=A},Xa=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Ja=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,fh=function(w,A){if(!(!A.icon&&!A.iconHtml)){var M=w.innerHTML,F="";if(A.iconHtml)F=ur(A.iconHtml);else if(A.icon==="success")F=Xa,M=M.replace(/ style=".*?"/g,"");else if(A.icon==="error")F=Ja;else if(A.icon){var X={question:"?",warning:"!",info:"i"};F=ur(X[A.icon])}M.trim()!==F.trim()&&Ki(w,F)}},Yl=function(w,A){if(A.iconColor){w.style.color=A.iconColor,w.style.borderColor=A.iconColor;for(var M=0,F=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];M<F.length;M++){var X=F[M];lh(w,X,"background-color",A.iconColor)}lh(w,".swal2-success-ring","border-color",A.iconColor)}},ur=function(w){return'<div class="'.concat(Q["icon-content"],'">').concat(w,"</div>")},tb=function(w,A){var M=Ul();if(M){if(!A.imageUrl){Di(M);return}_i(M,""),M.setAttribute("src",A.imageUrl),M.setAttribute("alt",A.imageAlt||""),Gn(M,"width",A.imageWidth),Gn(M,"height",A.imageHeight),M.className=Q.image,dn(M,A,"image")}},gh=function(w,A){var M=qi(),F=ke();if(!(!M||!F)){if(A.toast){Gn(M,"width",A.width),F.style.width="100%";var X=qn();X&&F.insertBefore(X,Ls())}else Gn(F,"width",A.width);Gn(F,"padding",A.padding),A.color&&(F.style.color=A.color),A.background&&(F.style.background=A.background),Di(Gi()),bh(F,A)}},bh=function(w,A){var M=A.showClass||{};w.className="".concat(Q.popup," ").concat(ki(w)?M.popup:""),A.toast?(Ut([document.documentElement,document.body],Q["toast-shown"]),Ut(w,Q.toast)):Ut(w,Q.modal),dn(w,A,"popup"),typeof A.customClass=="string"&&Ut(w,A.customClass),A.icon&&Ut(w,Q["icon-".concat(A.icon)])},eb=function(w,A){var M=Hl();if(M){var F=A.progressSteps,X=A.currentProgressStep;if(!F||F.length===0||X===void 0){Di(M);return}_i(M),M.textContent="",X>=F.length&&Yt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),F.forEach(function(ft,Jt){var ie=ib(ft);if(M.appendChild(ie),Jt===X&&Ut(ie,Q["active-progress-step"]),Jt!==F.length-1){var Je=tc(A);M.appendChild(Je)}})}},ib=function(w){var A=document.createElement("li");return Ut(A,Q["progress-step"]),Ki(A,w),A},tc=function(w){var A=document.createElement("li");return Ut(A,Q["progress-step-line"]),w.progressStepsDistance&&Gn(A,"width",w.progressStepsDistance),A},nb=function(w,A){var M=Ei();M&&(ql(M),Vs(M,A.title||A.titleText,"block"),A.title&&$l(A.title,M),A.titleText&&(M.innerText=A.titleText),dn(M,A,"title"))},Ql=function(w,A){gh(w,A),Wg(w,A),eb(w,A),jr(w,A),tb(w,A),nb(w,A),qg(w,A),Za(w,A),Hg(w,A),Xg(w,A);var M=ke();typeof A.didRender=="function"&&M&&A.didRender(M)},_h=function(){return ki(ke())},Zl=function(){var w;return(w=hi())===null||w===void 0?void 0:w.click()},qs=function(){var w;return(w=or())===null||w===void 0?void 0:w.click()},ob=function(){var w;return(w=nr())===null||w===void 0?void 0:w.click()},ho=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ec=function(w){w.keydownTarget&&w.keydownHandlerAdded&&(w.keydownTarget.removeEventListener("keydown",w.keydownHandler,{capture:w.keydownListenerCapture}),w.keydownHandlerAdded=!1)},Ve=function(w,A,M){ec(w),A.toast||(w.keydownHandler=function(F){return Ws(A,F,M)},w.keydownTarget=A.keydownListenerCapture?window:ke(),w.keydownListenerCapture=A.keydownListenerCapture,w.keydownTarget.addEventListener("keydown",w.keydownHandler,{capture:w.keydownListenerCapture}),w.keydownHandlerAdded=!0)},Xl=function(w,A){var M,F=Ni();if(F.length){w=w+A,w===F.length?w=0:w===-1&&(w=F.length-1),F[w].focus();return}(M=ke())===null||M===void 0||M.focus()},ic=["ArrowRight","ArrowDown"],kh=["ArrowLeft","ArrowUp"],Ws=function(w,A,M){w&&(A.isComposing||A.keyCode===229||(w.stopKeydownPropagation&&A.stopPropagation(),A.key==="Enter"?Jl(A,w):A.key==="Tab"?Vr(A):[].concat(ic,kh).includes(A.key)?wh(A.key):A.key==="Escape"&&td(A,w,M)))},Jl=function(w,A){if(Bs(A.allowEnterKey)){var M=js(ke(),A.input);if(w.target&&M&&w.target instanceof HTMLElement&&w.target.outerHTML===M.outerHTML){if(["textarea","file"].includes(A.input))return;Zl(),w.preventDefault()}}},Vr=function(w){for(var A=w.target,M=Ni(),F=-1,X=0;X<M.length;X++)if(A===M[X]){F=X;break}w.shiftKey?Xl(F,-1):Xl(F,1),w.stopPropagation(),w.preventDefault()},wh=function(w){var A=Fs(),M=hi(),F=or(),X=nr();if(!(!A||!M||!F||!X)){var ft=[M,F,X];if(!(document.activeElement instanceof HTMLElement&&!ft.includes(document.activeElement))){var Jt=ic.includes(w)?"nextElementSibling":"previousElementSibling",ie=document.activeElement;if(ie){for(var Je=0;Je<A.children.length;Je++){if(ie=ie[Jt],!ie)return;if(ie instanceof HTMLButtonElement&&ki(ie))break}ie instanceof HTMLButtonElement&&ie.focus()}}}},td=function(w,A,M){Bs(A.allowEscapeKey)&&(w.preventDefault(),M(ho.esc))},Ur={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},vh=function(){var w=qi(),A=Array.from(document.body.children);A.forEach(function(M){M.contains(w)||(M.hasAttribute("aria-hidden")&&M.setAttribute("data-previous-aria-hidden",M.getAttribute("aria-hidden")||""),M.setAttribute("aria-hidden","true"))})},yh=function(){var w=Array.from(document.body.children);w.forEach(function(A){A.hasAttribute("data-previous-aria-hidden")?(A.setAttribute("aria-hidden",A.getAttribute("data-previous-aria-hidden")||""),A.removeAttribute("data-previous-aria-hidden")):A.removeAttribute("aria-hidden")})},nc=typeof window<"u"&&!!window.GestureEvent,rb=function(){if(nc&&!An(document.body,Q.iosfix)){var w=document.body.scrollTop;document.body.style.top="".concat(w*-1,"px"),Ut(document.body,Q.iosfix),sb()}},sb=function(){var w=qi();if(w){var A;w.ontouchstart=function(M){A=ab(M)},w.ontouchmove=function(M){A&&(M.preventDefault(),M.stopPropagation())}}},ab=function(w){var A=w.target,M=qi(),F=Ri();return!M||!F||oc(w)||Gs(w)?!1:A===M||!dh(M)&&A instanceof HTMLElement&&A.tagName!=="INPUT"&&A.tagName!=="TEXTAREA"&&!(dh(F)&&F.contains(A))},oc=function(w){return w.touches&&w.touches.length&&w.touches[0].touchType==="stylus"},Gs=function(w){return w.touches&&w.touches.length>1},cb=function(){if(An(document.body,Q.iosfix)){var w=parseInt(document.body.style.top,10);Wn(document.body,Q.iosfix),document.body.style.top="",document.body.scrollTop=w*-1}},lb=function(){var w=document.createElement("div");w.className=Q["scrollbar-measure"],document.body.appendChild(w);var A=w.getBoundingClientRect().width-w.clientWidth;return document.body.removeChild(w),A},Hr=null,db=function(w){Hr===null&&(document.body.scrollHeight>window.innerHeight||w==="scroll")&&(Hr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Hr+lb(),"px"))},qr=function(){Hr!==null&&(document.body.style.paddingRight="".concat(Hr,"px"),Hr=null)};function Ch(T,w,A,M){zs()?Mh(T,M):(ve(A).then(function(){return Mh(T,M)}),ec(Ft)),nc?(w.setAttribute("style","display:none !important"),w.removeAttribute("class"),w.innerHTML=""):w.remove(),$i()&&(qr(),cb(),yh()),Ah()}function Ah(){Wn([document.documentElement,document.body],[Q.shown,Q["height-auto"],Q["no-backdrop"],Q["toast-shown"]])}function mo(T){T=Eh(T);var w=Ur.swalPromiseResolve.get(this),A=xh(this);this.isAwaitingPromise?T.isDismissed||(Wr(this),w(T)):A&&w(T)}var xh=function(w){var A=ke();if(!A)return!1;var M=Be.innerParams.get(w);if(!M||An(A,M.hideClass.popup))return!1;Wn(A,M.showClass.popup),Ut(A,M.hideClass.popup);var F=qi();return Wn(F,M.showClass.backdrop),Ut(F,M.hideClass.backdrop),ub(w,A,M),!0};function ed(T){var w=Ur.swalPromiseReject.get(this);Wr(this),w&&w(T)}var Wr=function(w){w.isAwaitingPromise&&(delete w.isAwaitingPromise,Be.innerParams.get(w)||w._destroy())},Eh=function(w){return typeof w>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},w)},ub=function(w,A,M){var F=qi(),X=ar&&uh(A);typeof M.willClose=="function"&&M.willClose(A),X?Dh(w,A,F,M.returnFocus,M.didClose):Ch(w,F,M.returnFocus,M.didClose)},Dh=function(w,A,M,F,X){ar&&(Ft.swalCloseEventFinishedCallback=Ch.bind(null,w,M,F,X),A.addEventListener(ar,function(ft){ft.target===A&&(Ft.swalCloseEventFinishedCallback(),delete Ft.swalCloseEventFinishedCallback)}))},Mh=function(w,A){setTimeout(function(){typeof A=="function"&&A.bind(w.params)(),w._destroy&&w._destroy()})},hr=function(w){var A=ke();if(A||new Kr,A=ke(),!!A){var M=qn();zs()?Di(Ls()):id(A,w),_i(M),A.setAttribute("data-loading","true"),A.setAttribute("aria-busy","true"),A.focus()}},id=function(w,A){var M=Fs(),F=qn();!M||!F||(!A&&ki(hi())&&(A=hi()),_i(M),A&&(Di(A),F.setAttribute("data-button-to-replace",A.className),M.insertBefore(F,A)),Ut([w,M],Q.loading))},hb=function(w,A){A.input==="select"||A.input==="radio"?nd(w,A):["text","email","number","tel","textarea"].some(function(M){return M===A.input})&&(Wa(A.inputValue)||Rs(A.inputValue))&&(hr(hi()),pb(w,A))},Ih=function(w,A){var M=w.getInput();if(!M)return null;switch(A.input){case"checkbox":return Sh(M);case"radio":return mb(M);case"file":return Th(M);default:return A.inputAutoTrim?M.value.trim():M.value}},Sh=function(w){return w.checked?1:0},mb=function(w){return w.checked?w.value:null},Th=function(w){return w.files&&w.files.length?w.getAttribute("multiple")!==null?w.files:w.files[0]:null},nd=function(w,A){var M=ke();if(M){var F=function(ft){A.input==="select"?od(M,rc(ft),A):A.input==="radio"&&rd(M,rc(ft),A)};Wa(A.inputOptions)||Rs(A.inputOptions)?(hr(hi()),ce(A.inputOptions).then(function(X){w.hideLoading(),F(X)})):x(A.inputOptions)==="object"?F(A.inputOptions):Hn("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(x(A.inputOptions)))}},pb=function(w,A){var M=w.getInput();M&&(Di(M),ce(A.inputValue).then(function(F){M.value=A.input==="number"?"".concat(parseFloat(F)||0):"".concat(F),_i(M),M.focus(),w.hideLoading()}).catch(function(F){Hn("Error in inputValue promise: ".concat(F)),M.value="",_i(M),M.focus(),w.hideLoading()}))};function od(T,w,A){var M=un(T,Q.select);if(M){var F=function(ft,Jt,ie){var Je=document.createElement("option");Je.value=ie,Ki(Je,Jt),Je.selected=sc(ie,A.inputValue),ft.appendChild(Je)};w.forEach(function(X){var ft=X[0],Jt=X[1];if(Array.isArray(Jt)){var ie=document.createElement("optgroup");ie.label=ft,ie.disabled=!1,M.appendChild(ie),Jt.forEach(function(Je){return F(ie,Je[1],Je[0])})}else F(M,Jt,ft)}),M.focus()}}function rd(T,w,A){var M=un(T,Q.radio);if(M){w.forEach(function(X){var ft=X[0],Jt=X[1],ie=document.createElement("input"),Je=document.createElement("label");ie.type="radio",ie.name=Q.radio,ie.value=ft,sc(ft,A.inputValue)&&(ie.checked=!0);var fc=document.createElement("span");Ki(fc,Jt),fc.className=Q.label,Je.appendChild(ie),Je.appendChild(fc),M.appendChild(Je)});var F=M.querySelectorAll("input");F.length&&F[0].focus()}}var rc=function T(w){var A=[];return w instanceof Map?w.forEach(function(M,F){var X=M;x(X)==="object"&&(X=T(X)),A.push([F,X])}):Object.keys(w).forEach(function(M){var F=w[M];x(F)==="object"&&(F=T(F)),A.push([M,F])}),A},sc=function(w,A){return!!A&&A.toString()===w.toString()},$s=void 0,Oh=function(w){var A=Be.innerParams.get(w);w.disableButtons(),A.input?sd(w,"confirm"):cd(w,!0)},Ph=function(w){var A=Be.innerParams.get(w);w.disableButtons(),A.returnInputValueOnDeny?sd(w,"deny"):ad(w,!1)},Bh=function(w,A){w.disableButtons(),A(ho.cancel)},sd=function(w,A){var M=Be.innerParams.get(w);if(!M.input){Hn('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Os(A)));return}var F=w.getInput(),X=Ih(w,M);M.inputValidator?fb(w,X,A):F&&!F.checkValidity()?(w.enableButtons(),w.showValidationMessage(M.validationMessage||F.validationMessage)):A==="deny"?ad(w,X):cd(w,X)},fb=function(w,A,M){var F=Be.innerParams.get(w);w.disableInput();var X=Promise.resolve().then(function(){return ce(F.inputValidator(A,F.validationMessage))});X.then(function(ft){w.enableButtons(),w.enableInput(),ft?w.showValidationMessage(ft):M==="deny"?ad(w,A):cd(w,A)})},ad=function(w,A){var M=Be.innerParams.get(w||$s);if(M.showLoaderOnDeny&&hr(or()),M.preDeny){w.isAwaitingPromise=!0;var F=Promise.resolve().then(function(){return ce(M.preDeny(A,M.validationMessage))});F.then(function(X){X===!1?(w.hideLoading(),Wr(w)):w.close({isDenied:!0,value:typeof X>"u"?A:X})}).catch(function(X){return Nh(w||$s,X)})}else w.close({isDenied:!0,value:A})},Rh=function(w,A){w.close({isConfirmed:!0,value:A})},Nh=function(w,A){w.rejectPromise(A)},cd=function(w,A){var M=Be.innerParams.get(w||$s);if(M.showLoaderOnConfirm&&hr(),M.preConfirm){w.resetValidationMessage(),w.isAwaitingPromise=!0;var F=Promise.resolve().then(function(){return ce(M.preConfirm(A,M.validationMessage))});F.then(function(X){ki(Gi())||X===!1?(w.hideLoading(),Wr(w)):Rh(w,typeof X>"u"?A:X)}).catch(function(X){return Nh(w||$s,X)})}else Rh(w,A)};function $n(){var T=Be.innerParams.get(this);if(T){var w=Be.domCache.get(this);Di(w.loader),zs()?T.icon&&_i(Ls()):Ks(w),Wn([w.popup,w.actions],Q.loading),w.popup.removeAttribute("aria-busy"),w.popup.removeAttribute("data-loading"),w.confirmButton.disabled=!1,w.denyButton.disabled=!1,w.cancelButton.disabled=!1}}var Ks=function(w){var A=w.popup.getElementsByClassName(w.loader.getAttribute("data-button-to-replace"));A.length?_i(A[0],"inline-block"):Ka()&&Di(w.actions)};function Lh(){var T=Be.innerParams.get(this),w=Be.domCache.get(this);return w?js(w.popup,T.input):null}function Fh(T,w,A){var M=Be.domCache.get(T);w.forEach(function(F){M[F].disabled=A})}function Ys(T,w){var A=ke();if(!(!A||!T))if(T.type==="radio")for(var M=A.querySelectorAll('[name="'.concat(Q.radio,'"]')),F=0;F<M.length;F++)M[F].disabled=w;else T.disabled=w}function ac(){Fh(this,["confirmButton","denyButton","cancelButton"],!1)}function zh(){Fh(this,["confirmButton","denyButton","cancelButton"],!0)}function jh(){Ys(this.getInput(),!1)}function Vh(){Ys(this.getInput(),!0)}function ld(T){var w=Be.domCache.get(this),A=Be.innerParams.get(this);Ki(w.validationMessage,T),w.validationMessage.className=Q["validation-message"],A.customClass&&A.customClass.validationMessage&&Ut(w.validationMessage,A.customClass.validationMessage),_i(w.validationMessage);var M=this.getInput();M&&(M.setAttribute("aria-invalid","true"),M.setAttribute("aria-describedby",Q["validation-message"]),ah(M),Ut(M,Q.inputerror))}function dd(){var T=Be.domCache.get(this);T.validationMessage&&Di(T.validationMessage);var w=this.getInput();w&&(w.removeAttribute("aria-invalid"),w.removeAttribute("aria-describedby"),Wn(w,Q.inputerror))}var Gr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Uh=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],gb={},Hh=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],qh=function(w){return Object.prototype.hasOwnProperty.call(Gr,w)},ud=function(w){return Uh.indexOf(w)!==-1},Wh=function(w){return gb[w]},Gh=function(w){qh(w)||Yt('Unknown parameter "'.concat(w,'"'))},bb=function(w){Hh.includes(w)&&Yt('The parameter "'.concat(w,'" is incompatible with toasts'))},_b=function(w){var A=Wh(w);A&&Fr(w,A)},$h=function(w){w.backdrop===!1&&w.allowOutsideClick&&Yt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var A in w)Gh(A),w.toast&&bb(A),_b(A)};function Kh(T){var w=ke(),A=Be.innerParams.get(this);if(!w||An(w,A.hideClass.popup)){Yt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var M=Yh(T),F=Object.assign({},A,M);Ql(this,F),Be.innerParams.set(this,F),Object.defineProperties(this,{params:{value:Object.assign({},this.params,T),writable:!1,enumerable:!0}})}var Yh=function(w){var A={};return Object.keys(w).forEach(function(M){ud(M)?A[M]=w[M]:Yt("Invalid parameter to update: ".concat(M))}),A};function hd(){var T=Be.domCache.get(this),w=Be.innerParams.get(this);if(!w){Me(this);return}T.popup&&Ft.swalCloseEventFinishedCallback&&(Ft.swalCloseEventFinishedCallback(),delete Ft.swalCloseEventFinishedCallback),typeof w.didDestroy=="function"&&w.didDestroy(),Qh(this)}var Qh=function(w){Me(w),delete w.params,delete Ft.keydownHandler,delete Ft.keydownTarget,delete Ft.currentInstance},Me=function(w){w.isAwaitingPromise?(Qs(Be,w),w.isAwaitingPromise=!0):(Qs(Ur,w),Qs(Be,w),delete w.isAwaitingPromise,delete w.disableButtons,delete w.enableButtons,delete w.getInput,delete w.disableInput,delete w.enableInput,delete w.hideLoading,delete w.disableLoading,delete w.showValidationMessage,delete w.resetValidationMessage,delete w.close,delete w.closePopup,delete w.closeModal,delete w.closeToast,delete w.rejectPromise,delete w.update,delete w._destroy)},Qs=function(w,A){for(var M in w)w[M].delete(A)},md=Object.freeze({__proto__:null,_destroy:hd,close:mo,closeModal:mo,closePopup:mo,closeToast:mo,disableButtons:zh,disableInput:Vh,disableLoading:$n,enableButtons:ac,enableInput:jh,getInput:Lh,handleAwaitingPromise:Wr,hideLoading:$n,rejectPromise:ed,resetValidationMessage:dd,showValidationMessage:ld,update:Kh}),mr=function(w,A,M){w.toast?Zh(w,A,M):(Bo(A),lc(A),Jh(w,A,M))},Zh=function(w,A,M){A.popup.onclick=function(){w&&(Xh(w)||w.timer||w.input)||M(ho.close)}},Xh=function(w){return!!(w.showConfirmButton||w.showDenyButton||w.showCancelButton||w.showCloseButton)},cc=!1,Bo=function(w){w.popup.onmousedown=function(){w.container.onmouseup=function(A){w.container.onmouseup=function(){},A.target===w.container&&(cc=!0)}}},lc=function(w){w.container.onmousedown=function(A){A.target===w.container&&A.preventDefault(),w.popup.onmouseup=function(M){w.popup.onmouseup=function(){},(M.target===w.popup||M.target instanceof HTMLElement&&w.popup.contains(M.target))&&(cc=!0)}}},Jh=function(w,A,M){A.container.onclick=function(F){if(cc){cc=!1;return}F.target===A.container&&Bs(w.allowOutsideClick)&&M(ho.backdrop)}},hn=function(w){return x(w)==="object"&&w.jquery},tm=function(w){return w instanceof Element||hn(w)},em=function(w){var A={};return x(w[0])==="object"&&!tm(w[0])?Object.assign(A,w[0]):["title","html","icon"].forEach(function(M,F){var X=w[F];typeof X=="string"||tm(X)?A[M]=X:X!==void 0&&Hn("Unexpected type of ".concat(M,'! Expected "string" or "Element", got ').concat(x(X)))}),A};function pd(){for(var T=this,w=arguments.length,A=new Array(w),M=0;M<w;M++)A[M]=arguments[M];return l(T,A)}function wt(T){var w=function(A){function M(){return y(this,M),r(this,M,arguments)}return z(M,A),N(M,[{key:"_main",value:function(X,ft){return Ot(U(M.prototype),"_main",this).call(this,X,Object.assign({},T,ft))}}])}(this);return w}var im=function(){return Ft.timeout&&Ft.timeout.getTimerLeft()},ei=function(){if(Ft.timeout)return Ng(),Ft.timeout.stop()},Zs=function(){if(Ft.timeout){var w=Ft.timeout.start();return Wl(w),w}},nm=function(){var w=Ft.timeout;return w&&(w.running?ei():Zs())},om=function(w){if(Ft.timeout){var A=Ft.timeout.increase(w);return Wl(A,!0),A}},ee=function(){return!!(Ft.timeout&&Ft.timeout.isRunning())},Xs=!1,dc={};function fd(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";dc[T]=this,Xs||(document.body.addEventListener("click",rm),Xs=!0)}var rm=function(w){for(var A=w.target;A&&A!==document;A=A.parentNode)for(var M in dc){var F=A.getAttribute(M);if(F){dc[M].fire({template:F});return}}},ii=Object.freeze({__proto__:null,argsToParams:em,bindClickHandler:fd,clickCancel:ob,clickConfirm:Zl,clickDeny:qs,enableLoading:hr,fire:pd,getActions:Fs,getCancelButton:nr,getCloseButton:$a,getConfirmButton:hi,getContainer:qi,getDenyButton:or,getFocusableElements:Ni,getFooter:sh,getHtmlContainer:Ri,getIcon:Ls,getIconContent:Vl,getImage:Ul,getInputLabel:Bg,getLoader:qn,getPopup:ke,getProgressSteps:Hl,getTimerLeft:im,getTimerProgressBar:Ga,getTitle:Ei,getValidationMessage:Gi,increaseTimer:om,isDeprecatedParameter:Wh,isLoading:ln,isTimerRunning:ee,isUpdatableParameter:ud,isValidParameter:qh,isVisible:_h,mixin:wt,resumeTimer:Zs,showLoading:hr,stopTimer:ei,toggleTimer:nm}),Js=function(){function T(w,A){y(this,T),this.callback=w,this.remaining=A,this.running=!1,this.start()}return N(T,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(A){var M=this.running;return M&&this.stop(),this.remaining+=A,M&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),gd=["swal-title","swal-html","swal-footer"],po=function(w){var A=typeof w.template=="string"?document.querySelector(w.template):w.template;if(!A)return{};var M=A.content;lm(M);var F=Object.assign(uc(M),sm(M),ta(M),pr(M),am(M),hc(M),cm(M,gd));return F},uc=function(w){var A={},M=Array.from(w.querySelectorAll("swal-param"));return M.forEach(function(F){Ro(F,["name","value"]);var X=F.getAttribute("name"),ft=F.getAttribute("value");typeof Gr[X]=="boolean"?A[X]=ft!=="false":x(Gr[X])==="object"?A[X]=JSON.parse(ft):A[X]=ft}),A},sm=function(w){var A={},M=Array.from(w.querySelectorAll("swal-function-param"));return M.forEach(function(F){var X=F.getAttribute("name"),ft=F.getAttribute("value");A[X]=new Function("return ".concat(ft))()}),A},ta=function(w){var A={},M=Array.from(w.querySelectorAll("swal-button"));return M.forEach(function(F){Ro(F,["type","color","aria-label"]);var X=F.getAttribute("type");A["".concat(X,"ButtonText")]=F.innerHTML,A["show".concat(Os(X),"Button")]=!0,F.hasAttribute("color")&&(A["".concat(X,"ButtonColor")]=F.getAttribute("color")),F.hasAttribute("aria-label")&&(A["".concat(X,"ButtonAriaLabel")]=F.getAttribute("aria-label"))}),A},pr=function(w){var A={},M=w.querySelector("swal-image");return M&&(Ro(M,["src","width","height","alt"]),M.hasAttribute("src")&&(A.imageUrl=M.getAttribute("src")),M.hasAttribute("width")&&(A.imageWidth=M.getAttribute("width")),M.hasAttribute("height")&&(A.imageHeight=M.getAttribute("height")),M.hasAttribute("alt")&&(A.imageAlt=M.getAttribute("alt"))),A},am=function(w){var A={},M=w.querySelector("swal-icon");return M&&(Ro(M,["type","color"]),M.hasAttribute("type")&&(A.icon=M.getAttribute("type")),M.hasAttribute("color")&&(A.iconColor=M.getAttribute("color")),A.iconHtml=M.innerHTML),A},hc=function(w){var A={},M=w.querySelector("swal-input");M&&(Ro(M,["type","label","placeholder","value"]),A.input=M.getAttribute("type")||"text",M.hasAttribute("label")&&(A.inputLabel=M.getAttribute("label")),M.hasAttribute("placeholder")&&(A.inputPlaceholder=M.getAttribute("placeholder")),M.hasAttribute("value")&&(A.inputValue=M.getAttribute("value")));var F=Array.from(w.querySelectorAll("swal-input-option"));return F.length&&(A.inputOptions={},F.forEach(function(X){Ro(X,["value"]);var ft=X.getAttribute("value"),Jt=X.innerHTML;A.inputOptions[ft]=Jt})),A},cm=function(w,A){var M={};for(var F in A){var X=A[F],ft=w.querySelector(X);ft&&(Ro(ft,[]),M[X.replace(/^swal-/,"")]=ft.innerHTML.trim())}return M},lm=function(w){var A=gd.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(w.children).forEach(function(M){var F=M.tagName.toLowerCase();A.includes(F)||Yt("Unrecognized element <".concat(F,">"))})},Ro=function(w,A){Array.from(w.attributes).forEach(function(M){A.indexOf(M.name)===-1&&Yt(['Unrecognized attribute "'.concat(M.name,'" on <').concat(w.tagName.toLowerCase(),">."),"".concat(A.length?"Allowed attributes are: ".concat(A.join(", ")):"To set the value, use HTML within the element.")])})},dm=10,kb=function(w){var A=qi(),M=ke();typeof w.willOpen=="function"&&w.willOpen(M);var F=window.getComputedStyle(document.body),X=F.overflowY;pm(A,M,w),setTimeout(function(){hm(A,M)},dm),$i()&&(mm(A,w.scrollbarPadding,X),vh()),!zs()&&!Ft.previousActiveElement&&(Ft.previousActiveElement=document.activeElement),typeof w.didOpen=="function"&&setTimeout(function(){return w.didOpen(M)}),Wn(A,Q["no-transition"])},um=function T(w){var A=ke();if(!(w.target!==A||!ar)){var M=qi();A.removeEventListener(ar,T),M.style.overflowY="auto"}},hm=function(w,A){ar&&uh(A)?(w.style.overflowY="hidden",A.addEventListener(ar,um)):w.style.overflowY="auto"},mm=function(w,A,M){rb(),A&&M!=="hidden"&&db(M),setTimeout(function(){w.scrollTop=0})},pm=function(w,A,M){Ut(w,M.showClass.backdrop),M.animation?(A.style.setProperty("opacity","0","important"),_i(A,"grid"),setTimeout(function(){Ut(A,M.showClass.popup),A.style.removeProperty("opacity")},dm)):_i(A,"grid"),Ut([document.documentElement,document.body],Q.shown),M.heightAuto&&M.backdrop&&!M.toast&&Ut([document.documentElement,document.body],Q["height-auto"])},mc={email:function(w,A){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(w)?Promise.resolve():Promise.resolve(A||"Invalid email address")},url:function(w,A){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(w)?Promise.resolve():Promise.resolve(A||"Invalid URL")}};function wb(T){T.inputValidator||(T.input==="email"&&(T.inputValidator=mc.email),T.input==="url"&&(T.inputValidator=mc.url))}function fm(T){(!T.target||typeof T.target=="string"&&!document.querySelector(T.target)||typeof T.target!="string"&&!T.target.appendChild)&&(Yt('Target parameter is not valid, defaulting to "body"'),T.target="body")}function vb(T){wb(T),T.showLoaderOnConfirm&&!T.preConfirm&&Yt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),fm(T),typeof T.title=="string"&&(T.title=T.title.split(`
`).join("<br />")),jg(T)}var Kn,ea=new WeakMap,It=function(){function T(){if(y(this,T),Un(this,ea,void 0),!(typeof window>"u")){Kn=this;for(var w=arguments.length,A=new Array(w),M=0;M<w;M++)A[M]=arguments[M];var F=Object.freeze(this.constructor.argsToParams(A));this.params=F,this.isAwaitingPromise=!1,a(ea,this,this._main(Kn.params))}}return N(T,[{key:"_main",value:function(A){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if($h(Object.assign({},M,A)),Ft.currentInstance){var F=Ur.swalPromiseResolve.get(Ft.currentInstance),X=Ft.currentInstance.isAwaitingPromise;Ft.currentInstance._destroy(),X||F({isDismissed:!0}),$i()&&yh()}Ft.currentInstance=Kn;var ft=$r(A,M);vb(ft),Object.freeze(ft),Ft.timeout&&(Ft.timeout.stop(),delete Ft.timeout),clearTimeout(Ft.restoreFocusTimeout);var Jt=ia(Kn);return Ql(Kn,ft),Be.innerParams.set(Kn,ft),yb(Kn,Jt,ft)}},{key:"then",value:function(A){return h(ea,this).then(A)}},{key:"finally",value:function(A){return h(ea,this).finally(A)}}])}(),yb=function(w,A,M){return new Promise(function(F,X){var ft=function(ie){w.close({isDismissed:!0,dismiss:ie})};Ur.swalPromiseResolve.set(w,F),Ur.swalPromiseReject.set(w,X),A.confirmButton.onclick=function(){Oh(w)},A.denyButton.onclick=function(){Ph(w)},A.cancelButton.onclick=function(){Bh(w,ft)},A.closeButton.onclick=function(){ft(ho.close)},mr(M,A,ft),Ve(Ft,M,ft),hb(w,M),kb(M),pc(Ft,M,ft),bd(A,M),setTimeout(function(){A.container.scrollTop=0})})},$r=function(w,A){var M=po(w),F=Object.assign({},Gr,A,M,w);return F.showClass=Object.assign({},Gr.showClass,F.showClass),F.hideClass=Object.assign({},Gr.hideClass,F.hideClass),F.animation===!1&&(F.showClass={backdrop:"swal2-noanimation"},F.hideClass={}),F},ia=function(w){var A={popup:ke(),container:qi(),actions:Fs(),confirmButton:hi(),denyButton:or(),cancelButton:nr(),loader:qn(),closeButton:$a(),validationMessage:Gi(),progressSteps:Hl()};return Be.domCache.set(w,A),A},pc=function(w,A,M){var F=Ga();Di(F),A.timer&&(w.timeout=new Js(function(){M("timer"),delete w.timeout},A.timer),A.timerProgressBar&&(_i(F),dn(F,A,"timerProgressBar"),setTimeout(function(){w.timeout&&w.timeout.running&&Wl(A.timer)})))},bd=function(w,A){if(!A.toast){if(!Bs(A.allowEnterKey)){_d();return}Ie(w,A)||Xl(-1,1)}},Ie=function(w,A){return A.focusDeny&&ki(w.denyButton)?(w.denyButton.focus(),!0):A.focusCancel&&ki(w.cancelButton)?(w.cancelButton.focus(),!0):A.focusConfirm&&ki(w.confirmButton)?(w.confirmButton.focus(),!0):!1},_d=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var kd=new Date,gm=localStorage.getItem("swal-initiation");gm?(kd.getTime()-Date.parse(gm))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var T=document.createElement("audio");T.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",T.loop=!0,document.body.appendChild(T),setTimeout(function(){T.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(kd))}It.prototype.disableButtons=zh,It.prototype.enableButtons=ac,It.prototype.getInput=Lh,It.prototype.disableInput=Vh,It.prototype.enableInput=jh,It.prototype.hideLoading=$n,It.prototype.disableLoading=$n,It.prototype.showValidationMessage=ld,It.prototype.resetValidationMessage=dd,It.prototype.close=mo,It.prototype.closePopup=mo,It.prototype.closeModal=mo,It.prototype.closeToast=mo,It.prototype.rejectPromise=ed,It.prototype.update=Kh,It.prototype._destroy=hd,Object.assign(It,ii),Object.keys(md).forEach(function(T){It[T]=function(){if(Kn&&Kn[T]){var w;return(w=Kn)[T].apply(w,arguments)}return null}}),It.DismissReason=ho,It.version="11.10.8";var Kr=It;return Kr.default=Kr,Kr});typeof er<"u"&&er.Sweetalert2&&(er.swal=er.sweetAlert=er.Swal=er.SweetAlert=er.Sweetalert2);typeof document<"u"&&function(c,r){var h=c.createElement("style");if(c.getElementsByTagName("head")[0].appendChild(h),h.styleSheet)h.styleSheet.disabled||(h.styleSheet.cssText=r);else try{h.innerHTML=r}catch{h.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')});var xO=RD((en,cn)=>{"use strict";(function(c){let r=c.en=c.en||{};r.dictionary=Object.assign(r.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower\u2013roman":"Lower\u2013roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.","Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower\u2013latin list style":"Toggle the lower\u2013latin list style","Toggle the lower\u2013roman list style":"Toggle the lower\u2013roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper\u2013latin list style":"Toggle the upper\u2013latin list style","Toggle the upper\u2013roman list style":"Toggle the upper\u2013roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(c,r){typeof en=="object"&&typeof cn=="object"?cn.exports=r():typeof define=="function"&&define.amd?define([],r):typeof en=="object"?en.ClassicEditor=r():c.ClassicEditor=r()}(self,()=>(()=>{var c={9246:(l,m,f)=>{let k=f(6931),D={};for(let y of Object.keys(k))D[k[y]]=y;let x={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};l.exports=x;for(let y of Object.keys(x)){if(!("channels"in x[y]))throw new Error("missing channels property: "+y);if(!("labels"in x[y]))throw new Error("missing channel labels property: "+y);if(x[y].labels.length!==x[y].channels)throw new Error("channel and label counts mismatch: "+y);let{channels:I,labels:N}=x[y];delete x[y].channels,delete x[y].labels,Object.defineProperty(x[y],"channels",{value:I}),Object.defineProperty(x[y],"labels",{value:N})}x.rgb.hsl=function(y){let I=y[0]/255,N=y[1]/255,z=y[2]/255,U=Math.min(I,N,z),G=Math.max(I,N,z),K=G-U,Y,lt;G===U?Y=0:I===G?Y=(N-z)/K:N===G?Y=2+(z-I)/K:z===G&&(Y=4+(I-N)/K),Y=Math.min(60*Y,360),Y<0&&(Y+=360);let Ot=(U+G)/2;return lt=G===U?0:Ot<=.5?K/(G+U):K/(2-G-U),[Y,100*lt,100*Ot]},x.rgb.hsv=function(y){let I,N,z,U,G,K=y[0]/255,Y=y[1]/255,lt=y[2]/255,Ot=Math.max(K,Y,lt),qt=Ot-Math.min(K,Y,lt),_t=function(kt){return(Ot-kt)/6/qt+.5};return qt===0?(U=0,G=0):(G=qt/Ot,I=_t(K),N=_t(Y),z=_t(lt),K===Ot?U=z-N:Y===Ot?U=.3333333333333333+I-z:lt===Ot&&(U=.6666666666666666+N-I),U<0?U+=1:U>1&&(U-=1)),[360*U,100*G,100*Ot]},x.rgb.hwb=function(y){let I=y[0],N=y[1],z=y[2],U=x.rgb.hsl(y)[0],G=1/255*Math.min(I,Math.min(N,z));return z=1-.00392156862745098*Math.max(I,Math.max(N,z)),[U,100*G,100*z]},x.rgb.cmyk=function(y){let I=y[0]/255,N=y[1]/255,z=y[2]/255,U=Math.min(1-I,1-N,1-z);return[100*((1-I-U)/(1-U)||0),100*((1-N-U)/(1-U)||0),100*((1-z-U)/(1-U)||0),100*U]},x.rgb.keyword=function(y){let I=D[y];if(I)return I;let N,z=1/0;for(let K of Object.keys(k)){let Y=k[K],lt=(G=Y,((U=y)[0]-G[0])**2+(U[1]-G[1])**2+(U[2]-G[2])**2);lt<z&&(z=lt,N=K)}var U,G;return N},x.keyword.rgb=function(y){return k[y]},x.rgb.xyz=function(y){let I=y[0]/255,N=y[1]/255,z=y[2]/255;return I=I>.04045?((I+.055)/1.055)**2.4:I/12.92,N=N>.04045?((N+.055)/1.055)**2.4:N/12.92,z=z>.04045?((z+.055)/1.055)**2.4:z/12.92,[100*(.4124*I+.3576*N+.1805*z),100*(.2126*I+.7152*N+.0722*z),100*(.0193*I+.1192*N+.9505*z)]},x.rgb.lab=function(y){let I=x.rgb.xyz(y),N=I[0],z=I[1],U=I[2];return N/=95.047,z/=100,U/=108.883,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,z=z>.008856?z**.3333333333333333:7.787*z+.13793103448275862,U=U>.008856?U**.3333333333333333:7.787*U+.13793103448275862,[116*z-16,500*(N-z),200*(z-U)]},x.hsl.rgb=function(y){let I=y[0]/360,N=y[1]/100,z=y[2]/100,U,G,K;if(N===0)return K=255*z,[K,K,K];U=z<.5?z*(1+N):z+N-z*N;let Y=2*z-U,lt=[0,0,0];for(let Ot=0;Ot<3;Ot++)G=I+.3333333333333333*-(Ot-1),G<0&&G++,G>1&&G--,K=6*G<1?Y+6*(U-Y)*G:2*G<1?U:3*G<2?Y+(U-Y)*(.6666666666666666-G)*6:Y,lt[Ot]=255*K;return lt},x.hsl.hsv=function(y){let I=y[0],N=y[1]/100,z=y[2]/100,U=N,G=Math.max(z,.01);return z*=2,N*=z<=1?z:2-z,U*=G<=1?G:2-G,[I,100*(z===0?2*U/(G+U):2*N/(z+N)),100*((z+N)/2)]},x.hsv.rgb=function(y){let I=y[0]/60,N=y[1]/100,z=y[2]/100,U=Math.floor(I)%6,G=I-Math.floor(I),K=255*z*(1-N),Y=255*z*(1-N*G),lt=255*z*(1-N*(1-G));switch(z*=255,U){case 0:return[z,lt,K];case 1:return[Y,z,K];case 2:return[K,z,lt];case 3:return[K,Y,z];case 4:return[lt,K,z];case 5:return[z,K,Y]}},x.hsv.hsl=function(y){let I=y[0],N=y[1]/100,z=y[2]/100,U=Math.max(z,.01),G,K;K=(2-N)*z;let Y=(2-N)*U;return G=N*U,G/=Y<=1?Y:2-Y,G=G||0,K/=2,[I,100*G,100*K]},x.hwb.rgb=function(y){let I=y[0]/360,N=y[1]/100,z=y[2]/100,U=N+z,G;U>1&&(N/=U,z/=U);let K=Math.floor(6*I),Y=1-z;G=6*I-K,1&K&&(G=1-G);let lt=N+G*(Y-N),Ot,qt,_t;switch(K){default:case 6:case 0:Ot=Y,qt=lt,_t=N;break;case 1:Ot=lt,qt=Y,_t=N;break;case 2:Ot=N,qt=Y,_t=lt;break;case 3:Ot=N,qt=lt,_t=Y;break;case 4:Ot=lt,qt=N,_t=Y;break;case 5:Ot=Y,qt=N,_t=lt}return[255*Ot,255*qt,255*_t]},x.cmyk.rgb=function(y){let I=y[0]/100,N=y[1]/100,z=y[2]/100,U=y[3]/100;return[255*(1-Math.min(1,I*(1-U)+U)),255*(1-Math.min(1,N*(1-U)+U)),255*(1-Math.min(1,z*(1-U)+U))]},x.xyz.rgb=function(y){let I=y[0]/100,N=y[1]/100,z=y[2]/100,U,G,K;return U=3.2406*I+-1.5372*N+-.4986*z,G=-.9689*I+1.8758*N+.0415*z,K=.0557*I+-.204*N+1.057*z,U=U>.0031308?1.055*U**.4166666666666667-.055:12.92*U,G=G>.0031308?1.055*G**.4166666666666667-.055:12.92*G,K=K>.0031308?1.055*K**.4166666666666667-.055:12.92*K,U=Math.min(Math.max(0,U),1),G=Math.min(Math.max(0,G),1),K=Math.min(Math.max(0,K),1),[255*U,255*G,255*K]},x.xyz.lab=function(y){let I=y[0],N=y[1],z=y[2];return I/=95.047,N/=100,z/=108.883,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,z=z>.008856?z**.3333333333333333:7.787*z+.13793103448275862,[116*N-16,500*(I-N),200*(N-z)]},x.lab.xyz=function(y){let I,N,z;N=(y[0]+16)/116,I=y[1]/500+N,z=N-y[2]/200;let U=N**3,G=I**3,K=z**3;return N=U>.008856?U:(N-.13793103448275862)/7.787,I=G>.008856?G:(I-.13793103448275862)/7.787,z=K>.008856?K:(z-.13793103448275862)/7.787,I*=95.047,N*=100,z*=108.883,[I,N,z]},x.lab.lch=function(y){let I=y[0],N=y[1],z=y[2],U;return U=360*Math.atan2(z,N)/2/Math.PI,U<0&&(U+=360),[I,Math.sqrt(N*N+z*z),U]},x.lch.lab=function(y){let I=y[0],N=y[1],z=y[2]/360*2*Math.PI;return[I,N*Math.cos(z),N*Math.sin(z)]},x.rgb.ansi16=function(y,I=null){let[N,z,U]=y,G=I===null?x.rgb.hsv(y)[2]:I;if(G=Math.round(G/50),G===0)return 30;let K=30+(Math.round(U/255)<<2|Math.round(z/255)<<1|Math.round(N/255));return G===2&&(K+=60),K},x.hsv.ansi16=function(y){return x.rgb.ansi16(x.hsv.rgb(y),y[2])},x.rgb.ansi256=function(y){let I=y[0],N=y[1],z=y[2];return I===N&&N===z?I<8?16:I>248?231:Math.round((I-8)/247*24)+232:16+36*Math.round(I/255*5)+6*Math.round(N/255*5)+Math.round(z/255*5)},x.ansi16.rgb=function(y){let I=y%10;if(I===0||I===7)return y>50&&(I+=3.5),I=I/10.5*255,[I,I,I];let N=.5*(1+~~(y>50));return[(1&I)*N*255,(I>>1&1)*N*255,(I>>2&1)*N*255]},x.ansi256.rgb=function(y){if(y>=232){let N=10*(y-232)+8;return[N,N,N]}let I;return y-=16,[Math.floor(y/36)/5*255,Math.floor((I=y%36)/6)/5*255,I%6/5*255]},x.rgb.hex=function(y){let I=(((255&Math.round(y[0]))<<16)+((255&Math.round(y[1]))<<8)+(255&Math.round(y[2]))).toString(16).toUpperCase();return"000000".substring(I.length)+I},x.hex.rgb=function(y){let I=y.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!I)return[0,0,0];let N=I[0];I[0].length===3&&(N=N.split("").map(U=>U+U).join(""));let z=parseInt(N,16);return[z>>16&255,z>>8&255,255&z]},x.rgb.hcg=function(y){let I=y[0]/255,N=y[1]/255,z=y[2]/255,U=Math.max(Math.max(I,N),z),G=Math.min(Math.min(I,N),z),K=U-G,Y,lt;return Y=K<1?G/(1-K):0,lt=K<=0?0:U===I?(N-z)/K%6:U===N?2+(z-I)/K:4+(I-N)/K,lt/=6,lt%=1,[360*lt,100*K,100*Y]},x.hsl.hcg=function(y){let I=y[1]/100,N=y[2]/100,z=N<.5?2*I*N:2*I*(1-N),U=0;return z<1&&(U=(N-.5*z)/(1-z)),[y[0],100*z,100*U]},x.hsv.hcg=function(y){let I=y[1]/100,N=y[2]/100,z=I*N,U=0;return z<1&&(U=(N-z)/(1-z)),[y[0],100*z,100*U]},x.hcg.rgb=function(y){let I=y[0]/360,N=y[1]/100,z=y[2]/100;if(N===0)return[255*z,255*z,255*z];let U=[0,0,0],G=I%1*6,K=G%1,Y=1-K,lt=0;switch(Math.floor(G)){case 0:U[0]=1,U[1]=K,U[2]=0;break;case 1:U[0]=Y,U[1]=1,U[2]=0;break;case 2:U[0]=0,U[1]=1,U[2]=K;break;case 3:U[0]=0,U[1]=Y,U[2]=1;break;case 4:U[0]=K,U[1]=0,U[2]=1;break;default:U[0]=1,U[1]=0,U[2]=Y}return lt=(1-N)*z,[255*(N*U[0]+lt),255*(N*U[1]+lt),255*(N*U[2]+lt)]},x.hcg.hsv=function(y){let I=y[1]/100,N=I+y[2]/100*(1-I),z=0;return N>0&&(z=I/N),[y[0],100*z,100*N]},x.hcg.hsl=function(y){let I=y[1]/100,N=y[2]/100*(1-I)+.5*I,z=0;return N>0&&N<.5?z=I/(2*N):N>=.5&&N<1&&(z=I/(2*(1-N))),[y[0],100*z,100*N]},x.hcg.hwb=function(y){let I=y[1]/100,N=I+y[2]/100*(1-I);return[y[0],100*(N-I),100*(1-N)]},x.hwb.hcg=function(y){let I=y[1]/100,N=1-y[2]/100,z=N-I,U=0;return z<1&&(U=(N-z)/(1-z)),[y[0],100*z,100*U]},x.apple.rgb=function(y){return[y[0]/65535*255,y[1]/65535*255,y[2]/65535*255]},x.rgb.apple=function(y){return[y[0]/255*65535,y[1]/255*65535,y[2]/255*65535]},x.gray.rgb=function(y){return[y[0]/100*255,y[0]/100*255,y[0]/100*255]},x.gray.hsl=function(y){return[0,0,y[0]]},x.gray.hsv=x.gray.hsl,x.gray.hwb=function(y){return[0,100,y[0]]},x.gray.cmyk=function(y){return[0,0,0,y[0]]},x.gray.lab=function(y){return[y[0],0,0]},x.gray.hex=function(y){let I=255&Math.round(y[0]/100*255),N=((I<<16)+(I<<8)+I).toString(16).toUpperCase();return"000000".substring(N.length)+N},x.rgb.gray=function(y){return[(y[0]+y[1]+y[2])/3/255*100]}},9047:(l,m,f)=>{let k=f(9246),D=f(802),x={};Object.keys(k).forEach(y=>{x[y]={},Object.defineProperty(x[y],"channels",{value:k[y].channels}),Object.defineProperty(x[y],"labels",{value:k[y].labels});let I=D(y);Object.keys(I).forEach(N=>{let z=I[N];x[y][N]=function(U){let G=function(...K){let Y=K[0];if(Y==null)return Y;Y.length>1&&(K=Y);let lt=U(K);if(typeof lt=="object")for(let Ot=lt.length,qt=0;qt<Ot;qt++)lt[qt]=Math.round(lt[qt]);return lt};return"conversion"in U&&(G.conversion=U.conversion),G}(z),x[y][N].raw=function(U){let G=function(...K){let Y=K[0];return Y==null?Y:(Y.length>1&&(K=Y),U(K))};return"conversion"in U&&(G.conversion=U.conversion),G}(z)})}),l.exports=x},802:(l,m,f)=>{let k=f(9246);function D(I){let N=function(){let U={},G=Object.keys(k);for(let K=G.length,Y=0;Y<K;Y++)U[G[Y]]={distance:-1,parent:null};return U}(),z=[I];for(N[I].distance=0;z.length;){let U=z.pop(),G=Object.keys(k[U]);for(let K=G.length,Y=0;Y<K;Y++){let lt=G[Y],Ot=N[lt];Ot.distance===-1&&(Ot.distance=N[U].distance+1,Ot.parent=U,z.unshift(lt))}}return N}function x(I,N){return function(z){return N(I(z))}}function y(I,N){let z=[N[I].parent,I],U=k[N[I].parent][I],G=N[I].parent;for(;N[G].parent;)z.unshift(N[G].parent),U=x(k[N[G].parent][G],U),G=N[G].parent;return U.conversion=z,U}l.exports=function(I){let N=D(I),z={},U=Object.keys(N);for(let G=U.length,K=0;K<G;K++){let Y=U[K];N[Y].parent!==null&&(z[Y]=y(Y,N))}return z}},6931:l=>{"use strict";l.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);let I=y},8708:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);let I=y},1866:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);let I=y},7793:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);let I=y},7388:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let I=y},4098:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);let I=y},8264:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);let I=y},6269:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);let I=y},265:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);let I=y},5247:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);let I=y},3350:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);let I=y},7378:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);let I=y},3469:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);let I=y},6386:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);let I=y},7693:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);let I=y},1559:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);let I=y},2267:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);let I=y},4062:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);let I=y},7719:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);let I=y},8762:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);let I=y},3817:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);let I=y},4808:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);let I=y},1232:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);let I=y},6903:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);let I=y},9968:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);let I=y},7141:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);let I=y},8991:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);let I=y},70:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);let I=y},7048:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);let I=y},5651:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);let I=y},5506:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let I=y},4043:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);let I=y},2655:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);let I=y},5032:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);let I=y},2329:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);let I=y},4143:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);let I=y},8986:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);let I=y},8795:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);let I=y},8137:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);let I=y},1623:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let I=y},5562:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);let I=y},8423:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);let I=y},1801:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}
`],sourceRoot:""}]);let I=y},5727:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let I=y},9715:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD2ID,CCxIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF4ID,CA3IA,wIEGE,qCFwIF,CA3IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAsID,CA5GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIpFD,oDJwFC,CAOA,gLK/FD,kCLiGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC9HA,+CDkIA,CC/HC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CD+GA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC9IC,mDDmJD,CChJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CD+HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);let I=y},4391:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);let I=y},25:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);let I=y},7317:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);let I=y},1905:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);let I=y},6309:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);let I=y},9819:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cAIC,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CExB7C,oCAA8B,CFsB9B,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let I=y},9822:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);let I=y},8149:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let I=y},3629:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let I=y},1792:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let I=y},1666:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);let I=y},8527:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let I=y},1185:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let I=y},7913:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);let I=y},9529:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);let I=y},7621:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);let I=y},253:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let I=y},7801:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);let I=y},4962:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let I=y},5199:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let I=y},497:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);let I=y},4:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);let I=y},3344:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);let I=y},9481:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);let I=y},977:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);let I=y},9108:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let I=y},3710:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let I=y},991:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);let I=y},5380:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let I=y},8298:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let I=y},2722:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);let I=y},8107:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);let I=y},109:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);let I=y},1671:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);let I=y},2710:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);let I=y},9677:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);let I=y},9205:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);z-index:calc(var(--ck-z-dialog) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDTnC,sCACD,CCUC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);let I=y},7676:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);let I=y},695:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);let I=y},4095:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);let I=y},8508:(l,m,f)=>{"use strict";f.d(m,{A:()=>I});var k=f(9372),D=f.n(k),x=f(935),y=f.n(x)()(D());y.push([l.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);let I=y},935:l=>{"use strict";l.exports=function(m){var f=[];return f.toString=function(){return this.map(function(k){var D=m(k);return k[2]?"@media ".concat(k[2]," {").concat(D,"}"):D}).join("")},f.i=function(k,D,x){typeof k=="string"&&(k=[[null,k,""]]);var y={};if(x)for(var I=0;I<this.length;I++){var N=this[I][0];N!=null&&(y[N]=!0)}for(var z=0;z<k.length;z++){var U=[].concat(k[z]);x&&y[U[0]]||(D&&(U[2]?U[2]="".concat(D," and ").concat(U[2]):U[2]=D),f.push(U))}},f}},9372:l=>{"use strict";function m(k,D){return function(x){if(Array.isArray(x))return x}(k)||function(x,y){var I=x&&(typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"]);if(I!=null){var N,z,U=[],G=!0,K=!1;try{for(I=I.call(x);!(G=(N=I.next()).done)&&(U.push(N.value),!y||U.length!==y);G=!0);}catch(Y){K=!0,z=Y}finally{try{G||I.return==null||I.return()}finally{if(K)throw z}}return U}}(k,D)||function(x,y){if(x){if(typeof x=="string")return f(x,y);var I=Object.prototype.toString.call(x).slice(8,-1);if(I==="Object"&&x.constructor&&(I=x.constructor.name),I==="Map"||I==="Set")return Array.from(x);if(I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))return f(x,y)}}(k,D)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function f(k,D){(D==null||D>k.length)&&(D=k.length);for(var x=0,y=new Array(D);x<D;x++)y[x]=k[x];return y}l.exports=function(k){var D=m(k,4),x=D[1],y=D[3];if(!y)return x;if(typeof btoa=="function"){var I=btoa(unescape(encodeURIComponent(JSON.stringify(y)))),N="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(I),z="/*# ".concat(N," */"),U=y.sources.map(function(G){return"/*# sourceURL=".concat(y.sourceRoot||"").concat(G," */")});return[x].concat(U).concat([z]).join(`
`)}return[x].join(`
`)}},2591:(l,m,f)=>{"use strict";var k,D=function(){return k===void 0&&(k=!!(window&&document&&document.all&&!window.atob)),k},x=function(){var _t={};return function(kt){if(_t[kt]===void 0){var L=document.querySelector(kt);if(window.HTMLIFrameElement&&L instanceof window.HTMLIFrameElement)try{L=L.contentDocument.head}catch{L=null}_t[kt]=L}return _t[kt]}}(),y=[];function I(_t){for(var kt=-1,L=0;L<y.length;L++)if(y[L].identifier===_t){kt=L;break}return kt}function N(_t,kt){for(var L={},gt=[],Ce=0;Ce<_t.length;Ce++){var We=_t[Ce],Ze=kt.base?We[0]+kt.base:We[0],To=L[Ze]||0,uo="".concat(Ze," ").concat(To);L[Ze]=To+1;var Un=I(uo),Lr={css:We[1],media:We[2],sourceMap:We[3]};Un!==-1?(y[Un].references++,y[Un].updater(Lr)):y.push({identifier:uo,updater:qt(Lr,kt),references:1}),gt.push(uo)}return gt}function z(_t){var kt=document.createElement("style"),L=_t.attributes||{};if(L.nonce===void 0){var gt=f.nc;gt&&(L.nonce=gt)}if(Object.keys(L).forEach(function(We){kt.setAttribute(We,L[We])}),typeof _t.insert=="function")_t.insert(kt);else{var Ce=x(_t.insert||"head");if(!Ce)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Ce.appendChild(kt)}return kt}var U,G=(U=[],function(_t,kt){return U[_t]=kt,U.filter(Boolean).join(`
`)});function K(_t,kt,L,gt){var Ce=L?"":gt.media?"@media ".concat(gt.media," {").concat(gt.css,"}"):gt.css;if(_t.styleSheet)_t.styleSheet.cssText=G(kt,Ce);else{var We=document.createTextNode(Ce),Ze=_t.childNodes;Ze[kt]&&_t.removeChild(Ze[kt]),Ze.length?_t.insertBefore(We,Ze[kt]):_t.appendChild(We)}}function Y(_t,kt,L){var gt=L.css,Ce=L.media,We=L.sourceMap;if(Ce?_t.setAttribute("media",Ce):_t.removeAttribute("media"),We&&typeof btoa<"u"&&(gt+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(We))))," */")),_t.styleSheet)_t.styleSheet.cssText=gt;else{for(;_t.firstChild;)_t.removeChild(_t.firstChild);_t.appendChild(document.createTextNode(gt))}}var lt=null,Ot=0;function qt(_t,kt){var L,gt,Ce;if(kt.singleton){var We=Ot++;L=lt||(lt=z(kt)),gt=K.bind(null,L,We,!1),Ce=K.bind(null,L,We,!0)}else L=z(kt),gt=Y.bind(null,L,kt),Ce=function(){(function(Ze){if(Ze.parentNode===null)return!1;Ze.parentNode.removeChild(Ze)})(L)};return gt(_t),function(Ze){if(Ze){if(Ze.css===_t.css&&Ze.media===_t.media&&Ze.sourceMap===_t.sourceMap)return;gt(_t=Ze)}else Ce()}}l.exports=function(_t,kt){(kt=kt||{}).singleton||typeof kt.singleton=="boolean"||(kt.singleton=D());var L=N(_t=_t||[],kt);return function(gt){if(gt=gt||[],Object.prototype.toString.call(gt)==="[object Array]"){for(var Ce=0;Ce<L.length;Ce++){var We=I(L[Ce]);y[We].references--}for(var Ze=N(gt,kt),To=0;To<L.length;To++){var uo=I(L[To]);y[uo].references===0&&(y[uo].updater(),y.splice(uo,1))}L=Ze}}}}},r={};function h(l){var m=r[l];if(m!==void 0)return m.exports;var f=r[l]={id:l,exports:{}};return c[l](f,f.exports,h),f.exports}h.n=l=>{var m=l&&l.__esModule?()=>l.default:()=>l;return h.d(m,{a:m}),m},h.d=(l,m)=>{for(var f in m)h.o(m,f)&&!h.o(l,f)&&Object.defineProperty(l,f,{enumerable:!0,get:m[f]})},h.o=(l,m)=>Object.prototype.hasOwnProperty.call(l,m),h.nc=void 0;var a={};return(()=>{"use strict";function l({emitter:n,activator:t,callback:e,contextElements:i}){n.listenTo(document,"mousedown",(o,s)=>{if(!t())return;let d=typeof s.composedPath=="function"?s.composedPath():[],u=typeof i=="function"?i():i;for(let p of u)if(p.contains(s.target)||d.includes(p))return;e()})}function m(n){return class extends n{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...t){super(...t),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function f({view:n}){n.listenTo(n.element,"submit",(t,e)=>{e.preventDefault(),n.fire("submit")},{useCapture:!0})}function k({keystrokeHandler:n,focusTracker:t,gridItems:e,numberOfColumns:i,uiLanguageDirection:o}){let s=typeof i=="number"?()=>i:i;function d(g){return b=>{let _=e.find(E=>E.element===t.focusedElement),v=e.getIndex(_),C=g(v,e);e.get(C).focus(),b.stopPropagation(),b.preventDefault()}}function u(g,b){return g===b-1?0:g+1}function p(g,b){return g===0?b-1:g-1}n.set("arrowright",d((g,b)=>o==="rtl"?p(g,b.length):u(g,b.length))),n.set("arrowleft",d((g,b)=>o==="rtl"?u(g,b.length):p(g,b.length))),n.set("arrowup",d((g,b)=>{let _=g-s();return _<0&&(_=g+s()*Math.floor(b.length/s()),_>b.length-1&&(_-=s())),_})),n.set("arrowdown",d((g,b)=>{let _=g+s();return _>b.length-1&&(_=g%s()),_}))}h.d(a,{default:()=>h0});let D=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var x;let y={isMac:I(D),isWindows:(x=D,x.indexOf("windows")>-1),isGecko:function(n){return!!n.match(/gecko\/\d+/)}(D),isSafari:function(n){return n.indexOf(" applewebkit/")>-1&&n.indexOf("chrome")===-1}(D),isiOS:function(n){return!!n.match(/iphone|ipad/i)||I(n)&&navigator.maxTouchPoints>0}(D),isAndroid:function(n){return n.indexOf("android")>-1}(D),isBlink:function(n){return n.indexOf("chrome/")>-1&&n.indexOf("edge/")<0}(D),features:{isRegExpUnicodePropertySupported:function(){let n=!1;try{n="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return n}()}};function I(n){return n.indexOf("macintosh")>-1}function N(n,t,e,i){e=e||function(p,g){return p===g};let o=Array.isArray(n)?n:Array.prototype.slice.call(n),s=Array.isArray(t)?t:Array.prototype.slice.call(t),d=function(p,g,b){let _=z(p,g,b);if(_===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};let v=U(p,_),C=U(g,_),E=z(v,C,b),S=p.length-E,O=g.length-E;return{firstIndex:_,lastIndexOld:S,lastIndexNew:O}}(o,s,e);return i?function(p,g){let{firstIndex:b,lastIndexOld:_,lastIndexNew:v}=p;if(b===-1)return Array(g).fill("equal");let C=[];return b>0&&(C=C.concat(Array(b).fill("equal"))),v-b>0&&(C=C.concat(Array(v-b).fill("insert"))),_-b>0&&(C=C.concat(Array(_-b).fill("delete"))),v<g&&(C=C.concat(Array(g-v).fill("equal"))),C}(d,s.length):function(p,g){let b=[],{firstIndex:_,lastIndexOld:v,lastIndexNew:C}=g;return C-_>0&&b.push({index:_,type:"insert",values:p.slice(_,C)}),v-_>0&&b.push({index:_+(C-_),type:"delete",howMany:v-_}),b}(s,d)}function z(n,t,e){for(let i=0;i<Math.max(n.length,t.length);i++)if(n[i]===void 0||t[i]===void 0||!e(n[i],t[i]))return i;return-1}function U(n,t){return n.slice(t).reverse()}function G(n,t,e){e=e||function(S,O){return S===O};let i=n.length,o=t.length;if(i>200||o>200||i+o>300)return G.fastDiff(n,t,e,!0);let s,d;if(o<i){let S=n;n=t,t=S,s="delete",d="insert"}else s="insert",d="delete";let u=n.length,p=t.length,g=p-u,b={},_={};function v(S){let O=(_[S-1]!==void 0?_[S-1]:-1)+1,P=_[S+1]!==void 0?_[S+1]:-1,V=O>P?-1:1;b[S+V]&&(b[S]=b[S+V].slice(0)),b[S]||(b[S]=[]),b[S].push(O>P?s:d);let W=Math.max(O,P),J=W-S;for(;J<u&&W<p&&e(n[J],t[W]);)J++,W++,b[S].push("equal");return W}let C,E=0;do{for(C=-E;C<g;C++)_[C]=v(C);for(C=g+E;C>g;C--)_[C]=v(C);_[g]=v(g),E++}while(_[g]!==p);return b[g].slice(1)}G.fastDiff=N;let K=function(){return function n(){n.called=!0}};class Y{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=K(),this.off=K()}}let lt=new Array(256).fill("").map((n,t)=>("0"+t.toString(16)).slice(-2));function Ot(){let n=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,i=4294967296*Math.random()>>>0;return"e"+lt[255&n]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]+lt[255&t]+lt[t>>8&255]+lt[t>>16&255]+lt[t>>24&255]+lt[255&e]+lt[e>>8&255]+lt[e>>16&255]+lt[e>>24&255]+lt[255&i]+lt[i>>8&255]+lt[i>>16&255]+lt[i>>24&255]}let qt={get(n="normal"){return typeof n!="number"?this[n]||this.normal:n},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function _t(n,t){let e=qt.get(t.priority);for(let i=0;i<n.length;i++)if(qt.get(n[i].priority)<e)return void n.splice(i,0,t);n.push(t)}let kt="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class L extends Error{constructor(t,e,i){super(function(o,s){let d=new WeakSet,u=(b,_)=>{if(typeof _=="object"&&_!==null){if(d.has(_))return`[object ${_.constructor.name}]`;d.add(_)}return _},p=s?` ${JSON.stringify(s,u)}`:"",g=We(o);return o+p+g}(t,i)),this.name="CKEditorError",this.context=e,this.data=i}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;let i=new L(t.message,e);throw i.stack=t.stack,i}}function gt(n,t){console.warn(...Ze(n,t))}function Ce(n,t){console.error(...Ze(n,t))}function We(n){return`
Read more: ${kt}#error-${n}`}function Ze(n,t){let e=We(n);return t?[n,t,e]:[n,e]}let To="41.3.1",uo=new Date(2024,3,16);if(globalThis.CKEDITOR_VERSION)throw new L("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=To;let Un=Symbol("listeningTo"),Lr=Symbol("emitterId"),Ft=Symbol("delegations"),rh=ve(Object);function ve(n){return n?class extends n{on(t,e,i){this.listenTo(this,t,e,i)}once(t,e,i){let o=!1;this.listenTo(this,t,(s,...d)=>{o||(o=!0,s.off(),e.call(this,s,...d))},i)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,i,o={}){let s,d;this[Un]||(this[Un]={});let u=this[Un];Fl(t)||Ll(t);let p=Fl(t);(s=u[p])||(s=u[p]={emitter:t,callbacks:{}}),(d=s.callbacks[e])||(d=s.callbacks[e]=[]),d.push(i),function(g,b,_,v,C){b._addEventListener?b._addEventListener(_,v,C):g._addEventListener.call(b,_,v,C)}(this,t,e,i,o)}stopListening(t,e,i){let o=this[Un],s=t&&Fl(t),d=o&&s?o[s]:void 0,u=d&&e?d.callbacks[e]:void 0;if(!(!o||t&&!d||e&&!u))if(i)Os(this,t,e,i),u.indexOf(i)!==-1&&(u.length===1?delete d.callbacks[e]:Os(this,t,e,i));else if(u){for(;i=u.pop();)Os(this,t,e,i);delete d.callbacks[e]}else if(d){for(e in d.callbacks)this.stopListening(t,e);delete o[s]}else{for(s in o)this.stopListening(o[s].emitter);delete this[Un]}}fire(t,...e){try{let i=t instanceof Y?t:new Y(this,t),o=i.name,s=Ts(this,o);if(i.path.push(this),s){let u=[i,...e];s=Array.from(s);for(let p=0;p<s.length&&(s[p].callback.apply(this,u),i.off.called&&(delete i.off.called,this._removeEventListener(o,s[p].callback)),!i.stop.called);p++);}let d=this[Ft];if(d){let u=d.get(o),p=d.get("*");u&&jl(u,i,e),p&&jl(p,i,e)}return i.return}catch(i){L.rethrowUnexpectedError(i,this)}}delegate(...t){return{to:(e,i)=>{this[Ft]||(this[Ft]=new Map),t.forEach(o=>{let s=this[Ft].get(o);s?s.set(e,i):this[Ft].set(o,new Map([[e,i]]))})}}}stopDelegating(t,e){if(this[Ft])if(t)if(e){let i=this[Ft].get(t);i&&i.delete(e)}else this[Ft].delete(t);else this[Ft].clear()}_addEventListener(t,e,i){(function(d,u){let p=Q(d);if(p[u])return;let g=u,b=null,_=[];for(;g!==""&&!p[g];)p[g]={callbacks:[],childEvents:[]},_.push(p[g]),b&&p[g].childEvents.push(b),b=g,g=g.substr(0,g.lastIndexOf(":"));if(g!==""){for(let v of _)v.callbacks=p[g].callbacks.slice();p[g].childEvents.push(b)}})(this,t);let o=zl(this,t),s={callback:e,priority:qt.get(i.priority)};for(let d of o)_t(d,s)}_removeEventListener(t,e){let i=zl(this,t);for(let o of i)for(let s=0;s<o.length;s++)o[s].callback==e&&(o.splice(s,1),s--)}}:rh}function Ll(n,t){n[Lr]||(n[Lr]=t||Ot())}function Fl(n){return n[Lr]}function Q(n){return n._events||Object.defineProperty(n,"_events",{value:{}}),n._events}function zl(n,t){let e=Q(n)[t];if(!e)return[];let i=[e.callbacks];for(let o=0;o<e.childEvents.length;o++){let s=zl(n,e.childEvents[o]);i=i.concat(s)}return i}function Ts(n,t){let e;return n._events&&(e=n._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?Ts(n,t.substr(0,t.lastIndexOf(":"))):null}function jl(n,t,e){for(let[i,o]of n){o?typeof o=="function"&&(o=o(t.name)):o=t.name;let s=new Y(t.source,o);s.path=[...t.path],i.fire(s,...e)}}function Os(n,t,e,i){t._removeEventListener?t._removeEventListener(e,i):n._removeEventListener.call(t,e,i)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(n=>{ve[n]=rh.prototype[n]});let Yt=function(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")},Hn=Symbol("observableProperties"),Ps=Symbol("boundObservables"),qa=Symbol("boundProperties"),Fr=Symbol("decoratedMethods"),Bs=Symbol("decoratedOriginal"),Wa=ce(ve());function ce(n){return n?class extends n{set(t,e){if(Yt(t))return void Object.keys(t).forEach(o=>{this.set(o,t[o])},this);Rs(this);let i=this[Hn];if(t in this&&!i.has(t))throw new L("observable-set-cannot-override",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>i.get(t),set(o){let s=i.get(t),d=this.fire(`set:${t}`,t,o,s);d===void 0&&(d=o),s===d&&i.has(t)||(i.set(t,d),this.fire(`change:${t}`,t,d,s))}}),this[t]=e}bind(...t){if(!t.length||!Wi(t))throw new L("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new L("observable-bind-duplicate-properties",this);Rs(this);let e=this[qa];t.forEach(o=>{if(e.has(o))throw new L("observable-bind-rebind",this)});let i=new Map;return t.forEach(o=>{let s={property:o,to:[]};e.set(o,s),i.set(o,s)}),{to:qi,toMany:Ns,_observable:this,_bindProperties:t,_to:[],_bindings:i}}unbind(...t){if(!this[Hn])return;let e=this[qa],i=this[Ps];if(t.length){if(!Wi(t))throw new L("observable-unbind-wrong-properties",this);t.forEach(o=>{let s=e.get(o);s&&(s.to.forEach(([d,u])=>{let p=i.get(d),g=p[u];g.delete(s),g.size||delete p[u],Object.keys(p).length||(i.delete(d),this.stopListening(d,"change"))}),e.delete(o))})}else i.forEach((o,s)=>{this.stopListening(s,"change")}),i.clear(),e.clear()}decorate(t){Rs(this);let e=this[t];if(!e)throw new L("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,(i,o)=>{i.return=e.apply(this,o)}),this[t]=function(...i){return this.fire(t,i)},this[t][Bs]=e,this[Fr]||(this[Fr]=[]),this[Fr].push(t)}stopListening(t,e,i){if(!t&&this[Fr]){for(let o of this[Fr])this[o]=this[o][Bs];delete this[Fr]}super.stopListening(t,e,i)}}:Wa}function Rs(n){n[Hn]||(Object.defineProperty(n,Hn,{value:new Map}),Object.defineProperty(n,Ps,{value:new Map}),Object.defineProperty(n,qa,{value:new Map}))}function qi(...n){let t=function(...s){if(!s.length)throw new L("observable-bind-to-parse-error",null);let d={to:[]},u;return typeof s[s.length-1]=="function"&&(d.callback=s.pop()),s.forEach(p=>{if(typeof p=="string")u.properties.push(p);else{if(typeof p!="object")throw new L("observable-bind-to-parse-error",null);u={observable:p,properties:[]},d.to.push(u)}}),d}(...n),e=Array.from(this._bindings.keys()),i=e.length;if(!t.callback&&t.to.length>1)throw new L("observable-bind-to-no-callback",this);if(i>1&&t.callback)throw new L("observable-bind-to-extra-callback",this);var o;t.to.forEach(s=>{if(s.properties.length&&s.properties.length!==i)throw new L("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),o=this._observable,this._to.forEach(s=>{let d=o[Ps],u;d.get(s.observable)||o.listenTo(s.observable,"change",(p,g)=>{u=d.get(s.observable)[g],u&&u.forEach(b=>{ke(o,b.property)})})}),function(s){let d;s._bindings.forEach((u,p)=>{s._to.forEach(g=>{d=g.properties[u.callback?0:s._bindProperties.indexOf(p)],u.to.push([g.observable,d]),function(b,_,v,C){let E=b[Ps],S=E.get(v),O=S||{};O[C]||(O[C]=new Set),O[C].add(_),S||E.set(v,O)}(s._observable,u,g.observable,d)})})}(this),this._bindProperties.forEach(s=>{ke(this._observable,s)})}function Ns(n,t,e){if(this._bindings.size>1)throw new L("observable-bind-to-many-not-one-binding",this);this.to(...function(i,o){let s=i.map(d=>[d,o]);return Array.prototype.concat.apply([],s)}(n,t),e)}function Wi(n){return n.every(t=>typeof t=="string")}function ke(n,t){let e=n[qa].get(t),i;e.callback?i=e.callback.apply(n,e.to.map(o=>o[0][o[1]])):(i=e.to[0],i=i[0][i[1]]),Object.prototype.hasOwnProperty.call(n,t)?n[t]=i:n.set(t,i)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(n=>{ce[n]=Wa.prototype[n]});class Ls{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function Vl(n){let t=0;for(let e of n)t++;return t}function Ei(n,t){let e=Math.min(n.length,t.length);for(let i=0;i<e;i++)if(n[i]!=t[i])return i;return n.length==t.length?"same":n.length<t.length?"prefix":"extension"}function Ri(n){return!(!n||!n[Symbol.iterator])}let Ul=typeof global=="object"&&global&&global.Object===Object&&global;var Hl=typeof self=="object"&&self&&self.Object===Object&&self;let Gi=Ul||Hl||Function("return this")(),hi=Gi.Symbol;var nr=Object.prototype,or=nr.hasOwnProperty,Bg=nr.toString,qn=hi?hi.toStringTag:void 0;let Fs=function(n){var t=or.call(n,qn),e=n[qn];try{n[qn]=void 0;var i=!0}catch{}var o=Bg.call(n);return i&&(t?n[qn]=e:delete n[qn]),o};var sh=Object.prototype.toString;let Ga=function(n){return sh.call(n)};var $a=hi?hi.toStringTag:void 0;let Oo=function(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":$a&&$a in Object(n)?Fs(n):Ga(n)},Ni=Array.isArray,$i=function(n){return n!=null&&typeof n=="object"},zs=function(n){return typeof n=="string"||!Ni(n)&&$i(n)&&Oo(n)=="[object String]"};function ln(n,t,e={},i=[]){let o=e&&e.xmlns,s=o?n.createElementNS(o,t):n.createElement(t);for(let d in e)s.setAttribute(d,e[d]);!zs(i)&&Ri(i)||(i=[i]);for(let d of i)zs(d)&&(d=n.createTextNode(d)),s.appendChild(d);return s}let Ki=function(n,t){return function(e){return n(t(e))}},An=Ki(Object.getPrototypeOf,Object);var Rg=Function.prototype,dn=Object.prototype,js=Rg.toString,ah=dn.hasOwnProperty,ch=js.call(Object);let Ut=function(n){if(!$i(n)||Oo(n)!="[object Object]")return!1;var t=An(n);if(t===null)return!0;var e=ah.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&js.call(e)==ch},Wn=function(){this.__data__=[],this.size=0},un=function(n,t){return n===t||n!=n&&t!=t},Gn=function(n,t){for(var e=n.length;e--;)if(un(n[e][0],t))return e;return-1};var _i=Array.prototype.splice;let Di=function(n){var t=this.__data__,e=Gn(t,n);return!(e<0)&&(e==t.length-1?t.pop():_i.call(t,e,1),--this.size,!0)},ql=function(n){var t=this.__data__,e=Gn(t,n);return e<0?void 0:t[e][1]},lh=function(n){return Gn(this.__data__,n)>-1},Vs=function(n,t){var e=this.__data__,i=Gn(e,n);return i<0?(++this.size,e.push([n,t])):e[i][1]=t,this};function ki(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}ki.prototype.clear=Wn,ki.prototype.delete=Di,ki.prototype.get=ql,ki.prototype.has=lh,ki.prototype.set=Vs;let Ka=ki,dh=function(){this.__data__=new Ka,this.size=0},uh=function(n){var t=this.__data__,e=t.delete(n);return this.size=t.size,e},Wl=function(n){return this.__data__.get(n)},Ng=function(n){return this.__data__.has(n)},Po=function(n){if(!Yt(n))return!1;var t=Oo(n);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Gl=Gi["__core-js_shared__"];var hh=function(){var n=/[^.]+$/.exec(Gl&&Gl.keys&&Gl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();let rr=function(n){return!!hh&&hh in n};var Lg=Function.prototype.toString;let sr=function(n){if(n!=null){try{return Lg.call(n)}catch{}try{return n+""}catch{}}return""};var Fg=/^\[object .+?Constructor\]$/,zg=Function.prototype,jg=Object.prototype,$l=zg.toString,Vg=jg.hasOwnProperty,Ug=RegExp("^"+$l.call(Vg).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");let ar=function(n){return!(!Yt(n)||rr(n))&&(Po(n)?Ug:Fg).test(sr(n))},Hg=function(n,t){return n?.[t]},cr=function(n,t){var e=Hg(n,t);return ar(e)?e:void 0},Us=cr(Gi,"Map"),lr=cr(Object,"create"),qg=function(){this.__data__=lr?lr(null):{},this.size=0},Wg=function(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t};var Gg=Object.prototype.hasOwnProperty;let $g=function(n){var t=this.__data__;if(lr){var e=t[n];return e==="__lodash_hash_undefined__"?void 0:e}return Gg.call(t,n)?t[n]:void 0};var Kg=Object.prototype.hasOwnProperty;let Be=function(n){var t=this.__data__;return lr?t[n]!==void 0:Kg.call(t,n)},Yg=function(n,t){var e=this.__data__;return this.size+=this.has(n)?0:1,e[n]=lr&&t===void 0?"__lodash_hash_undefined__":t,this};function zr(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}zr.prototype.clear=qg,zr.prototype.delete=Wg,zr.prototype.get=$g,zr.prototype.has=Be,zr.prototype.set=Yg;let mh=zr,Qg=function(){this.size=0,this.__data__={hash:new mh,map:new(Us||Ka),string:new mh}},Zg=function(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null},Ya=function(n,t){var e=n.__data__;return Zg(t)?e[typeof t=="string"?"string":"hash"]:e.map},Kl=function(n){var t=Ya(this,n).delete(n);return this.size-=t?1:0,t},Hs=function(n){return Ya(this,n).get(n)},ph=function(n){return Ya(this,n).has(n)},Qa=function(n,t){var e=Ya(this,n),i=e.size;return e.set(n,t),this.size+=e.size==i?0:1,this};function Re(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}Re.prototype.clear=Qg,Re.prototype.delete=Kl,Re.prototype.get=Hs,Re.prototype.has=ph,Re.prototype.set=Qa;let Za=Re,Xg=function(n,t){var e=this.__data__;if(e instanceof Ka){var i=e.__data__;if(!Us||i.length<199)return i.push([n,t]),this.size=++e.size,this;e=this.__data__=new Za(i)}return e.set(n,t),this.size=e.size,this};function jr(n){var t=this.__data__=new Ka(n);this.size=t.size}jr.prototype.clear=dh,jr.prototype.delete=uh,jr.prototype.get=Wl,jr.prototype.has=Ng,jr.prototype.set=Xg;let dr=jr,Jg=function(n,t){for(var e=-1,i=n==null?0:n.length;++e<i&&t(n[e],e,n)!==!1;);return n},Xa=function(){try{var n=cr(Object,"defineProperty");return n({},"",{}),n}catch{}}(),Ja=function(n,t,e){t=="__proto__"&&Xa?Xa(n,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):n[t]=e};var fh=Object.prototype.hasOwnProperty;let Yl=function(n,t,e){var i=n[t];fh.call(n,t)&&un(i,e)&&(e!==void 0||t in n)||Ja(n,t,e)},ur=function(n,t,e,i){var o=!e;e||(e={});for(var s=-1,d=t.length;++s<d;){var u=t[s],p=i?i(e[u],n[u],u,e,n):void 0;p===void 0&&(p=n[u]),o?Ja(e,u,p):Yl(e,u,p)}return e},tb=function(n,t){for(var e=-1,i=Array(n);++e<n;)i[e]=t(e);return i},gh=function(n){return $i(n)&&Oo(n)=="[object Arguments]"};var bh=Object.prototype,eb=bh.hasOwnProperty,ib=bh.propertyIsEnumerable;let tc=gh(function(){return arguments}())?gh:function(n){return $i(n)&&eb.call(n,"callee")&&!ib.call(n,"callee")},nb=function(){return!1};var Ql=typeof en=="object"&&en&&!en.nodeType&&en,_h=Ql&&typeof cn=="object"&&cn&&!cn.nodeType&&cn,Zl=_h&&_h.exports===Ql?Gi.Buffer:void 0;let qs=(Zl?Zl.isBuffer:void 0)||nb;var ob=/^(?:0|[1-9]\d*)$/;let ho=function(n,t){var e=typeof n;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&ob.test(n))&&n>-1&&n%1==0&&n<t},ec=function(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=9007199254740991};var Ve={};Ve["[object Float32Array]"]=Ve["[object Float64Array]"]=Ve["[object Int8Array]"]=Ve["[object Int16Array]"]=Ve["[object Int32Array]"]=Ve["[object Uint8Array]"]=Ve["[object Uint8ClampedArray]"]=Ve["[object Uint16Array]"]=Ve["[object Uint32Array]"]=!0,Ve["[object Arguments]"]=Ve["[object Array]"]=Ve["[object ArrayBuffer]"]=Ve["[object Boolean]"]=Ve["[object DataView]"]=Ve["[object Date]"]=Ve["[object Error]"]=Ve["[object Function]"]=Ve["[object Map]"]=Ve["[object Number]"]=Ve["[object Object]"]=Ve["[object RegExp]"]=Ve["[object Set]"]=Ve["[object String]"]=Ve["[object WeakMap]"]=!1;let Xl=function(n){return $i(n)&&ec(n.length)&&!!Ve[Oo(n)]},ic=function(n){return function(t){return n(t)}};var kh=typeof en=="object"&&en&&!en.nodeType&&en,Ws=kh&&typeof cn=="object"&&cn&&!cn.nodeType&&cn,Jl=Ws&&Ws.exports===kh&&Ul.process;let Vr=function(){try{var n=Ws&&Ws.require&&Ws.require("util").types;return n||Jl&&Jl.binding&&Jl.binding("util")}catch{}}();var wh=Vr&&Vr.isTypedArray;let td=wh?ic(wh):Xl;var Ur=Object.prototype.hasOwnProperty;let vh=function(n,t){var e=Ni(n),i=!e&&tc(n),o=!e&&!i&&qs(n),s=!e&&!i&&!o&&td(n),d=e||i||o||s,u=d?tb(n.length,String):[],p=u.length;for(var g in n)!t&&!Ur.call(n,g)||d&&(g=="length"||o&&(g=="offset"||g=="parent")||s&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||ho(g,p))||u.push(g);return u};var yh=Object.prototype;let nc=function(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||yh)},rb=Ki(Object.keys,Object);var sb=Object.prototype.hasOwnProperty;let ab=function(n){if(!nc(n))return rb(n);var t=[];for(var e in Object(n))sb.call(n,e)&&e!="constructor"&&t.push(e);return t},oc=function(n){return n!=null&&ec(n.length)&&!Po(n)},Gs=function(n){return oc(n)?vh(n):ab(n)},cb=function(n,t){return n&&ur(t,Gs(t),n)},lb=function(n){var t=[];if(n!=null)for(var e in Object(n))t.push(e);return t};var Hr=Object.prototype.hasOwnProperty;let db=function(n){if(!Yt(n))return lb(n);var t=nc(n),e=[];for(var i in n)(i!="constructor"||!t&&Hr.call(n,i))&&e.push(i);return e},qr=function(n){return oc(n)?vh(n,!0):db(n)},Ch=function(n,t){return n&&ur(t,qr(t),n)};var Ah=typeof en=="object"&&en&&!en.nodeType&&en,mo=Ah&&typeof cn=="object"&&cn&&!cn.nodeType&&cn,xh=mo&&mo.exports===Ah?Gi.Buffer:void 0,ed=xh?xh.allocUnsafe:void 0;let Wr=function(n,t){if(t)return n.slice();var e=n.length,i=ed?ed(e):new n.constructor(e);return n.copy(i),i},Eh=function(n,t){var e=-1,i=n.length;for(t||(t=Array(i));++e<i;)t[e]=n[e];return t},ub=function(n,t){for(var e=-1,i=n==null?0:n.length,o=0,s=[];++e<i;){var d=n[e];t(d,e,n)&&(s[o++]=d)}return s},Dh=function(){return[]};var Mh=Object.prototype.propertyIsEnumerable,hr=Object.getOwnPropertySymbols;let id=hr?function(n){return n==null?[]:(n=Object(n),ub(hr(n),function(t){return Mh.call(n,t)}))}:Dh,hb=function(n,t){return ur(n,id(n),t)},Ih=function(n,t){for(var e=-1,i=t.length,o=n.length;++e<i;)n[o+e]=t[e];return n},Sh=Object.getOwnPropertySymbols?function(n){for(var t=[];n;)Ih(t,id(n)),n=An(n);return t}:Dh,mb=function(n,t){return ur(n,Sh(n),t)},Th=function(n,t,e){var i=t(n);return Ni(n)?i:Ih(i,e(n))},nd=function(n){return Th(n,Gs,id)},pb=function(n){return Th(n,qr,Sh)},od=cr(Gi,"DataView"),rd=cr(Gi,"Promise"),rc=cr(Gi,"Set"),sc=cr(Gi,"WeakMap");var $s="[object Map]",Oh="[object Promise]",Ph="[object Set]",Bh="[object WeakMap]",sd="[object DataView]",fb=sr(od),ad=sr(Us),Rh=sr(rd),Nh=sr(rc),cd=sr(sc),$n=Oo;(od&&$n(new od(new ArrayBuffer(1)))!=sd||Us&&$n(new Us)!=$s||rd&&$n(rd.resolve())!=Oh||rc&&$n(new rc)!=Ph||sc&&$n(new sc)!=Bh)&&($n=function(n){var t=Oo(n),e=t=="[object Object]"?n.constructor:void 0,i=e?sr(e):"";if(i)switch(i){case fb:return sd;case ad:return $s;case Rh:return Oh;case Nh:return Ph;case cd:return Bh}return t});let Ks=$n;var Lh=Object.prototype.hasOwnProperty;let Fh=function(n){var t=n.length,e=new n.constructor(t);return t&&typeof n[0]=="string"&&Lh.call(n,"index")&&(e.index=n.index,e.input=n.input),e},Ys=Gi.Uint8Array,ac=function(n){var t=new n.constructor(n.byteLength);return new Ys(t).set(new Ys(n)),t},zh=function(n,t){var e=t?ac(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.byteLength)};var jh=/\w*$/;let Vh=function(n){var t=new n.constructor(n.source,jh.exec(n));return t.lastIndex=n.lastIndex,t};var ld=hi?hi.prototype:void 0,dd=ld?ld.valueOf:void 0;let Gr=function(n){return dd?Object(dd.call(n)):{}},Uh=function(n,t){var e=t?ac(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)},gb=function(n,t,e){var i=n.constructor;switch(t){case"[object ArrayBuffer]":return ac(n);case"[object Boolean]":case"[object Date]":return new i(+n);case"[object DataView]":return zh(n,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Uh(n,e);case"[object Map]":case"[object Set]":return new i;case"[object Number]":case"[object String]":return new i(n);case"[object RegExp]":return Vh(n);case"[object Symbol]":return Gr(n)}};var Hh=Object.create;let qh=function(){function n(){}return function(t){if(!Yt(t))return{};if(Hh)return Hh(t);n.prototype=t;var e=new n;return n.prototype=void 0,e}}(),ud=function(n){return typeof n.constructor!="function"||nc(n)?{}:qh(An(n))},Wh=function(n){return $i(n)&&Ks(n)=="[object Map]"};var Gh=Vr&&Vr.isMap;let bb=Gh?ic(Gh):Wh,_b=function(n){return $i(n)&&Ks(n)=="[object Set]"};var $h=Vr&&Vr.isSet;let Kh=$h?ic($h):_b;var Yh="[object Arguments]",hd="[object Function]",Qh="[object Object]",Me={};Me[Yh]=Me["[object Array]"]=Me["[object ArrayBuffer]"]=Me["[object DataView]"]=Me["[object Boolean]"]=Me["[object Date]"]=Me["[object Float32Array]"]=Me["[object Float64Array]"]=Me["[object Int8Array]"]=Me["[object Int16Array]"]=Me["[object Int32Array]"]=Me["[object Map]"]=Me["[object Number]"]=Me[Qh]=Me["[object RegExp]"]=Me["[object Set]"]=Me["[object String]"]=Me["[object Symbol]"]=Me["[object Uint8Array]"]=Me["[object Uint8ClampedArray]"]=Me["[object Uint16Array]"]=Me["[object Uint32Array]"]=!0,Me["[object Error]"]=Me[hd]=Me["[object WeakMap]"]=!1;let Qs=function n(t,e,i,o,s,d){var u,p=1&e,g=2&e,b=4&e;if(i&&(u=s?i(t,o,s,d):i(t)),u!==void 0)return u;if(!Yt(t))return t;var _=Ni(t);if(_){if(u=Fh(t),!p)return Eh(t,u)}else{var v=Ks(t),C=v==hd||v=="[object GeneratorFunction]";if(qs(t))return Wr(t,p);if(v==Qh||v==Yh||C&&!s){if(u=g||C?{}:ud(t),!p)return g?mb(t,Ch(u,t)):hb(t,cb(u,t))}else{if(!Me[v])return s?t:{};u=gb(t,v,p)}}d||(d=new dr);var E=d.get(t);if(E)return E;d.set(t,u),Kh(t)?t.forEach(function(O){u.add(n(O,e,i,O,t,d))}):bb(t)&&t.forEach(function(O,P){u.set(P,n(O,e,i,P,t,d))});var S=_?void 0:(b?g?pb:nd:g?qr:Gs)(t);return Jg(S||t,function(O,P){S&&(O=t[P=O]),Yl(u,P,n(O,e,i,P,t,d))}),u},md=function(n,t){return Qs(n,5,t=typeof t=="function"?t:void 0)},mr=function(n){return $i(n)&&n.nodeType===1&&!Ut(n)};class Zh{constructor(t,e){this._config={},e&&this.define(Xh(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(let t of Object.keys(this._config))yield t}_setToTarget(t,e,i,o=!1){if(Ut(e))return void this._setObjectToTarget(t,e,o);let s=e.split(".");e=s.pop();for(let d of s)Ut(t[d])||(t[d]={}),t=t[d];if(Ut(i))return Ut(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,i,o);o&&t[e]!==void 0||(t[e]=i)}_getFromSource(t,e){let i=e.split(".");e=i.pop();for(let o of i){if(!Ut(t[o])){t=null;break}t=t[o]}return t?Xh(t[e]):void 0}_setObjectToTarget(t,e,i){Object.keys(e).forEach(o=>{this._setToTarget(t,o,e[o],i)})}}function Xh(n){return md(n,cc)}function cc(n){return mr(n)||typeof n=="function"?n:void 0}function Bo(n){if(n){if(n.defaultView)return n instanceof n.defaultView.Document;if(n.ownerDocument&&n.ownerDocument.defaultView)return n instanceof n.ownerDocument.defaultView.Node}return!1}function lc(n){let t=Object.prototype.toString.apply(n);return t=="[object Window]"||t=="[object global]"}let Jh=hn(ve());function hn(n){return n?class extends n{listenTo(t,e,i,o={}){if(Bo(t)||lc(t)){let s={capture:!!o.useCapture,passive:!!o.usePassive},d=this._getProxyEmitter(t,s)||new tm(t,s);this.listenTo(d,e,i,o)}else super.listenTo(t,e,i,o)}stopListening(t,e,i){if(Bo(t)||lc(t)){let o=this._getAllProxyEmitters(t);for(let s of o)this.stopListening(s,e,i)}else super.stopListening(t,e,i)}_getProxyEmitter(t,e){return function(i,o){let s=i[Un];return s&&s[o]?s[o].emitter:null}(this,em(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:Jh}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(n=>{hn[n]=Jh.prototype[n]});class tm extends ve(){constructor(t,e){super(),Ll(this,em(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;let e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,i){this.attach(t),ve().prototype._addEventListener.call(this,t,e,i)}_removeEventListener(t,e){ve().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){let e=i=>{this.fire(t,i)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function em(n,t){let e=function(i){return i["data-ck-expando"]||(i["data-ck-expando"]=Ot())}(n);for(let i of Object.keys(t).sort())t[i]&&(e+="-"+i);return e}let pd;try{pd={window,document}}catch{pd={window:{},document:{}}}let wt=pd;function im(n){let t=n.ownerDocument.defaultView.getComputedStyle(n);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function ei(n){return Object.prototype.toString.call(n)=="[object Text]"}function Zs(n){return Object.prototype.toString.apply(n)=="[object Range]"}function nm(n){return n&&n.parentNode?n.offsetParent===wt.document.body?null:n.offsetParent:null}let om=["top","right","bottom","left","width","height"];class ee{constructor(t){let e=Zs(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),fd(t)||e)if(e){let i=ee.getDomRangeRects(t);Xs(this,ee.getBoundingRect(i))}else Xs(this,t.getBoundingClientRect());else if(lc(t)){let{innerWidth:i,innerHeight:o}=t;Xs(this,{top:0,right:i,bottom:o,left:0,width:i,height:o})}else Xs(this,t)}clone(){return new ee(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){let e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};if(e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0)return null;{let i=new ee(e);return i._source=this._source,i}}getIntersectionArea(t){let e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){let t=this._source,e=this.clone();if(dc(t))return e;let i,o=t,s=t.parentNode||t.commonAncestorContainer;for(;s&&!dc(s);){let u=((d=s)instanceof HTMLElement?d.ownerDocument.defaultView.getComputedStyle(d).overflow:"visible")==="visible";o instanceof HTMLElement&&rm(o)==="absolute"&&(i=o);let p=rm(s);if(u||i&&(p==="relative"&&u||p!=="relative")){o=s,s=s.parentNode;continue}let g=new ee(s),b=e.getIntersection(g);if(!b)return null;b.getArea()<e.getArea()&&(e=b),o=s,s=s.parentNode}var d;return e}isEqual(t){for(let e of om)if(this[e]!==t[e])return!1;return!0}contains(t){let e=this.getIntersection(t);return!(!e||!e.isEqual(t))}toAbsoluteRect(){let{scrollX:t,scrollY:e}=wt.window,i=this.clone().moveBy(t,e);if(fd(i._source)){let o=nm(i._source);o&&function(s,d){let u=new ee(d),p=im(d),g=0,b=0;g-=u.left,b-=u.top,g+=d.scrollLeft,b+=d.scrollTop,g-=p.left,b-=p.top,s.moveBy(g,b)}(i,o)}return i}excludeScrollbarsAndBorders(){let t=this._source,e,i,o;if(lc(t))e=t.innerWidth-t.document.documentElement.clientWidth,i=t.innerHeight-t.document.documentElement.clientHeight,o=t.getComputedStyle(t.document.documentElement).direction;else{let s=im(t);e=t.offsetWidth-t.clientWidth-s.left-s.right,i=t.offsetHeight-t.clientHeight-s.top-s.bottom,o=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,o==="ltr"?this.right-=e:this.left+=e,this.height-=i,this.bottom-=i,this}static getDomRangeRects(t){let e=[],i=Array.from(t.getClientRects());if(i.length)for(let o of i)e.push(new ee(o));else{let o=t.startContainer;ei(o)&&(o=o.parentNode);let s=new ee(o.getBoundingClientRect());s.right=s.left,s.width=0,e.push(s)}return e}static getBoundingRect(t){let e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0},i=0;for(let o of t)i++,e.left=Math.min(e.left,o.left),e.top=Math.min(e.top,o.top),e.right=Math.max(e.right,o.right),e.bottom=Math.max(e.bottom,o.bottom);return i==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new ee(e))}}function Xs(n,t){for(let e of om)n[e]=t[e]}function dc(n){return!!fd(n)&&n===n.ownerDocument.body}function fd(n){return n!==null&&typeof n=="object"&&n.nodeType===1&&typeof n.getBoundingClientRect=="function"}function rm(n){return n instanceof HTMLElement?n.ownerDocument.defaultView.getComputedStyle(n).position:"static"}let ii=class{constructor(n,t){ii._observerInstance||ii._createObserver(),this._element=n,this._callback=t,ii._addElementCallback(n,t),ii._observerInstance.observe(n)}get element(){return this._element}destroy(){ii._deleteElementCallback(this._element,this._callback)}static _addElementCallback(n,t){ii._elementCallbacks||(ii._elementCallbacks=new Map);let e=ii._elementCallbacks.get(n);e||(e=new Set,ii._elementCallbacks.set(n,e)),e.add(t)}static _deleteElementCallback(n,t){let e=ii._getElementCallbacks(n);e&&(e.delete(t),e.size||(ii._elementCallbacks.delete(n),ii._observerInstance.unobserve(n))),ii._elementCallbacks&&!ii._elementCallbacks.size&&(ii._observerInstance=null,ii._elementCallbacks=null)}static _getElementCallbacks(n){return ii._elementCallbacks?ii._elementCallbacks.get(n):null}static _createObserver(){ii._observerInstance=new wt.window.ResizeObserver(n=>{for(let t of n){let e=ii._getElementCallbacks(t.target);if(e)for(let i of e)i(t)}})}},Js=ii;function gd(n,t){n instanceof HTMLTextAreaElement&&(n.value=t),n.innerHTML=t}function po(n){return t=>t+n}function uc(n){let t=0;for(;n.previousSibling;)n=n.previousSibling,t++;return t}function sm(n,t,e){n.insertBefore(e,n.childNodes[t]||null)}function ta(n){return n&&n.nodeType===Node.COMMENT_NODE}function pr(n){return!!(n&&n.getClientRects&&n.getClientRects().length)}Js._observerInstance=null,Js._elementCallbacks=null;var am=Math.pow;function hc({element:n,target:t,positions:e,limiter:i,fitInViewport:o,viewportOffsetConfig:s}){Po(t)&&(t=t()),Po(i)&&(i=i());let d=nm(n),u=function(v){v=Object.assign({top:0,bottom:0,left:0,right:0},v);let C=new ee(wt.window);return C.top+=v.top,C.height-=v.top,C.bottom-=v.bottom,C.height-=v.bottom,C}(s),p=new ee(n),g=cm(t,u),b;if(!g||!u.getIntersection(g))return null;let _={targetRect:g,elementRect:p,positionedElementAncestor:d,viewportRect:u};if(i||o){if(i){let v=cm(i,u);v&&(_.limiterRect=v)}b=function(v,C){let{elementRect:E}=C,S=E.getArea(),O=v.map(W=>new lm(W,C)).filter(W=>!!W.name),P=0,V=null;for(let W of O){let{limiterIntersectionArea:J,viewportIntersectionArea:dt}=W;if(J===S)return W;let Bt=am(dt,2)+am(J,2);Bt>P&&(P=Bt,V=W)}return V}(e,_)}else b=new lm(e[0],_);return b}function cm(n,t){let e=new ee(n).getVisible();return e?e.getIntersection(t):null}class lm{constructor(t,e){let i=t(e.targetRect,e.elementRect,e.viewportRect,e.limiterRect);if(!i)return;let{left:o,top:s,name:d,config:u}=i;this.name=d,this.config=u,this._positioningFunctionCoordinates={left:o,top:s},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){let t=this._options.limiterRect;return t?t.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function Ro(n){let t=n.parentNode;t&&t.removeChild(n)}function dm({window:n,rect:t,alignToTop:e,forceScroll:i,viewportOffset:o}){let s=t.clone().moveBy(0,o.bottom),d=t.clone().moveBy(0,-o.top),u=new ee(n).excludeScrollbarsAndBorders(),p=e&&i,g=[d,s].every(E=>u.contains(E)),{scrollX:b,scrollY:_}=n,v=b,C=_;p?_-=u.top-t.top+o.top:g||(hm(d,u)?_-=u.top-t.top+o.top:um(s,u)&&(_+=e?t.top-u.top-o.top:t.bottom-u.bottom+o.bottom)),g||(mm(t,u)?b-=u.left-t.left+o.left:pm(t,u)&&(b+=t.right-u.right+o.right)),b==v&&_===C||n.scrollTo(b,_)}function kb({parent:n,getRect:t,alignToTop:e,forceScroll:i,ancestorOffset:o=0,limiterElement:s}){let d=mc(n),u=e&&i,p,g,b,_=s||d.document.body;for(;n!=_;)g=t(),p=new ee(n).excludeScrollbarsAndBorders(),b=p.contains(g),u?n.scrollTop-=p.top-g.top+o:b||(hm(g,p)?n.scrollTop-=p.top-g.top+o:um(g,p)&&(n.scrollTop+=e?g.top-p.top-o:g.bottom-p.bottom+o)),b||(mm(g,p)?n.scrollLeft-=p.left-g.left+o:pm(g,p)&&(n.scrollLeft+=g.right-p.right+o)),n=n.parentNode}function um(n,t){return n.bottom>t.bottom}function hm(n,t){return n.top<t.top}function mm(n,t){return n.left<t.left}function pm(n,t){return n.right>t.right}function mc(n){return Zs(n)?n.startContainer.ownerDocument.defaultView:n.ownerDocument.defaultView}function wb(n){if(Zs(n)){let t=n.commonAncestorContainer;return ei(t)&&(t=t.parentNode),t}return n.parentNode}function fm(n,t){let e=mc(n),i=new ee(n);if(e===t)return i;{let o=e;for(;o!=t;){let s=o.frameElement,d=new ee(s).excludeScrollbarsAndBorders();i.moveBy(d.left,d.top),o=o.parent}}return i}let vb={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},Kn={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},ea={37:"\u2190",38:"\u2191",39:"\u2192",40:"\u2193",9:"\u21E5",33:"Page Up",34:"Page Down"},It=function(){let n={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)n[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)n[t-48]=t;for(let t=112;t<=123;t++)n["f"+(t-111)]=t;return Object.assign(n,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),n}(),yb=Object.fromEntries(Object.entries(It).map(([n,t])=>{let e;return e=t in ea?ea[t]:n.charAt(0).toUpperCase()+n.slice(1),[t,e]}));function $r(n){let t;if(typeof n=="string"){if(t=It[n.toLowerCase()],!t)throw new L("keyboard-unknown-key",null,{key:n})}else t=n.keyCode+(n.altKey?It.alt:0)+(n.ctrlKey?It.ctrl:0)+(n.shiftKey?It.shift:0)+(n.metaKey?It.cmd:0);return t}function ia(n){return typeof n=="string"&&(n=function(t){return t.split("+").map(e=>e.trim())}(n)),n.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return $r(e.slice(0,-1));let i=$r(e);return(y.isMac||y.isiOS)&&i==It.ctrl?It.cmd:i}(t):t).reduce((t,e)=>e+t,0)}function pc(n){let t=ia(n);return Object.entries(y.isMac||y.isiOS?vb:Kn).reduce((e,[i,o])=>(t&It[i]&&(t&=~It[i],e+=o),e),"")+(t?yb[t]:"")}function bd(n,t){let e=t==="ltr";switch(n){case It.arrowleft:return e?"left":"right";case It.arrowright:return e?"right":"left";case It.arrowup:return"up";case It.arrowdown:return"down"}}function Ie(n){return Array.isArray(n)?n:[n]}let _d=function(n,t,e){(e!==void 0&&!un(n[t],e)||e===void 0&&!(t in n))&&Ja(n,t,e)},kd=function(n){return function(t,e,i){for(var o=-1,s=Object(t),d=i(t),u=d.length;u--;){var p=d[n?u:++o];if(e(s[p],p,s)===!1)break}return t}}(),gm=function(n){return $i(n)&&oc(n)},Kr=function(n,t){if((t!=="constructor"||typeof n[t]!="function")&&t!="__proto__")return n[t]},T=function(n){return ur(n,qr(n))},w=function(n,t,e,i,o,s,d){var u=Kr(n,e),p=Kr(t,e),g=d.get(p);if(g)_d(n,e,g);else{var b=s?s(u,p,e+"",n,t,d):void 0,_=b===void 0;if(_){var v=Ni(p),C=!v&&qs(p),E=!v&&!C&&td(p);b=p,v||C||E?Ni(u)?b=u:gm(u)?b=Eh(u):C?(_=!1,b=Wr(p,!0)):E?(_=!1,b=Uh(p,!0)):b=[]:Ut(p)||tc(p)?(b=u,tc(u)?b=T(u):Yt(u)&&!Po(u)||(b=ud(p))):_=!1}_&&(d.set(p,b),o(b,p,i,s,d),d.delete(p)),_d(n,e,b)}},A=function n(t,e,i,o,s){t!==e&&kd(e,function(d,u){if(s||(s=new dr),Yt(d))w(t,e,u,i,n,o,s);else{var p=o?o(Kr(t,u),d,u+"",t,e,s):void 0;p===void 0&&(p=d),_d(t,u,p)}},qr)},M=function(n){return n},F=function(n,t,e){switch(e.length){case 0:return n.call(t);case 1:return n.call(t,e[0]);case 2:return n.call(t,e[0],e[1]);case 3:return n.call(t,e[0],e[1],e[2])}return n.apply(t,e)};var X=Math.max;let ft=function(n,t,e){return t=X(t===void 0?n.length-1:t,0),function(){for(var i=arguments,o=-1,s=X(i.length-t,0),d=Array(s);++o<s;)d[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=e(d),F(n,this,u)}},Jt=function(n){return function(){return n}},ie=Xa?function(n,t){return Xa(n,"toString",{configurable:!0,enumerable:!1,value:Jt(t),writable:!0})}:M;var Je=Date.now;let iP=function(n){var t=0,e=0;return function(){var i=Je(),o=16-(i-e);if(e=i,o>0){if(++t>=800)return arguments[0]}else t=0;return n.apply(void 0,arguments)}}(ie),nP=function(n,t){return iP(ft(n,t,M),n+"")},oP=function(n,t,e){if(!Yt(e))return!1;var i=typeof t;return!!(i=="number"?oc(e)&&ho(t,e.length):i=="string"&&t in e)&&un(e[t],n)},Xw=function(n){return nP(function(t,e){var i=-1,o=e.length,s=o>1?e[o-1]:void 0,d=o>2?e[2]:void 0;for(s=n.length>3&&typeof s=="function"?(o--,s):void 0,d&&oP(e[0],e[1],d)&&(s=o<3?void 0:s,o=1),t=Object(t);++i<o;){var u=e[i];u&&n(t,u,i,s)}return t})},Cb=Xw(function(n,t,e){A(n,t,e)});function rP(n,t,e=1,i){if(typeof e!="number")throw new L("translation-service-quantity-not-a-number",null,{quantity:e});let o=i||wt.window.CKEDITOR_TRANSLATIONS,s=function(b){return Object.keys(b).length}(o);s===1&&(n=Object.keys(o)[0]);let d=t.id||t.string;if(s===0||!function(b,_,v){return!!v[b]&&!!v[b].dictionary[_]}(n,d,o))return e!==1?t.plural:t.string;let u=o[n].dictionary,p=o[n].getPluralForm||(b=>b===1?0:1),g=u[d];return typeof g=="string"?g:g[Number(p(e))]}wt.window.CKEDITOR_TRANSLATIONS||(wt.window.CKEDITOR_TRANSLATIONS={});let sP=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function Jw(n){return sP.includes(n)?"rtl":"ltr"}class aP{constructor({uiLanguage:t="en",contentLanguage:e,translations:i}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=Jw(this.uiLanguage),this.contentLanguageDirection=Jw(this.contentLanguage),this.translations=function(o){return Array.isArray(o)?o.reduce((s,d)=>Cb(s,d)):o}(i),this.t=(o,s)=>this._t(o,s)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=Ie(e),typeof t=="string"&&(t={string:t});let i=t.plural?e[0]:1;return function(o,s){return o.replace(/%(\d+)/g,(d,u)=>u<s.length?s[u]:d)}(rP(this.uiLanguage,t,i,this.translations),e)}}class Yn extends ve(){constructor(t={},e={}){super();let i=Ri(t);if(i||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],i)for(let o of t)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new L("collection-add-item-invalid-index",this);let i=0;for(let o of t){let s=this._getItemIdBeforeAdding(o),d=e+i;this._items.splice(d,0,o),this._itemMap.set(s,o),this.fire("add",o,d),i++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new L("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{let e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){let[e,i]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:i}),e}map(t,e){return this._items.map(t,e)}forEach(t,e){this._items.forEach(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);let t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new L("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(i=>new e(i))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(i=>i[e])}}}_setUpBindToBinding(t){let e=this._bindToCollection,i=(o,s,d)=>{let u=e._bindToCollection==this,p=e._bindToInternalToExternalMap.get(s);if(u&&p)this._bindToExternalToInternalMap.set(s,p),this._bindToInternalToExternalMap.set(p,s);else{let g=t(s);if(!g)return void this._skippedIndexesFromExternal.push(d);let b=d;for(let _ of this._skippedIndexesFromExternal)d>_&&b--;for(let _ of e._skippedIndexesFromExternal)b>=_&&b++;this._bindToExternalToInternalMap.set(s,g),this._bindToInternalToExternalMap.set(g,s),this.add(g,b);for(let _=0;_<e._skippedIndexesFromExternal.length;_++)b<=e._skippedIndexesFromExternal[_]&&e._skippedIndexesFromExternal[_]++}};for(let o of e)i(0,o,e.getIndex(o));this.listenTo(e,"add",i),this.listenTo(e,"remove",(o,s,d)=>{let u=this._bindToExternalToInternalMap.get(s);u&&this.remove(u),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((p,g)=>(d<g&&p.push(g-1),d>g&&p.push(g),p),[])})}_getItemIdBeforeAdding(t){let e=this._idProperty,i;if(e in t){if(i=t[e],typeof i!="string")throw new L("collection-add-invalid-id",this);if(this.get(i))throw new L("collection-add-item-already-exists",this)}else t[e]=i=Ot();return i}_remove(t){let e,i,o,s=!1,d=this._idProperty;if(typeof t=="string"?(i=t,o=this._itemMap.get(i),s=!o,o&&(e=this._items.indexOf(o))):typeof t=="number"?(e=t,o=this._items[e],s=!o,o&&(i=o[d])):(o=t,i=o[d],e=this._items.indexOf(o),s=e==-1||!this._itemMap.get(i)),s)throw new L("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(i);let u=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(u),this.fire("remove",o,e),[o,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Mi(n){let t=n.next();return t.done?null:t.value}class Ii extends hn(ce()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new L("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class nn{constructor(){this._listener=new(hn())}listenTo(t){this._listener.listenTo(t,"keydown",(e,i)=>{this._listener.fire("_keydown:"+$r(i),i)})}set(t,e,i={}){let o=ia(t),s=i.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(d,u)=>{e(u,()=>{u.preventDefault(),u.stopPropagation(),d.stop()}),d.return=!0},{priority:s})}press(t){return!!this._listener.fire("_keydown:"+$r(t),t)}stopListening(t){this._listener.stopListening(t)}destroy(){this.stopListening()}}function No(n){return Ri(n)?new Map(n):function(t){let e=new Map;for(let i in t)e.set(i,t[i]);return e}(n)}function Ab(n,t){let e;function i(...o){i.cancel(),e=setTimeout(()=>n(...o),t)}return i.cancel=()=>{clearTimeout(e)},i}function xb(n,t){return!!(e=n.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(i){return!!i&&i.length==1&&/[\udc00-\udfff]/.test(i)}(n.charAt(t));var e}function Eb(n,t){return!!(e=n.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}let cP=function(){let n=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],t=new RegExp("\\p{Regional_Indicator}{2}","u").source,e="(?:"+n.map(i=>i.source).join("|")+")";return new RegExp(`${t}|${e}(?:\u200D${e})*`,"ug")}();function tv(n,t){let e=String(n).matchAll(cP);return Array.from(e).some(i=>i.index<t&&t<i.index+i[0].length)}class et extends ce(){constructor(t){super(),this._disableStack=new Set,this.editor=t,this.set("isEnabled",!0)}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",ev,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",ev),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function ev(n){n.return=!1,n.stop()}class te extends ce(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(t,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",e=>{if(!this.affectsData)return;let i=t.model.document.selection,o=i.getFirstPosition().root.rootName!="$graveyard"&&t.model.canEditAt(i);(t.isReadOnly||this._isEnabledBasedOnSelection&&!o)&&(e.return=!1,e.stop())},{priority:"highest"}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",iv,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",iv),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function iv(n){n.return=!1,n.stop()}class nv extends te{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...t){let e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){_t(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){let t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class ov extends ve(){constructor(t,e=[],i=[]){super(),this._plugins=new Map,this._context=t,this._availablePlugins=new Map;for(let o of e)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(let[o,s]of i)this._contextPlugins.set(o,s),this._contextPlugins.set(s,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(let t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){let e=this._plugins.get(t);if(!e){let i=t;throw typeof t=="function"&&(i=t.pluginName||t.name),new L("plugincollection-plugin-not-loaded",this._context,{plugin:i})}return e}has(t){return this._plugins.has(t)}init(t,e=[],i=[]){let o=this,s=this._context;(function E(S,O=new Set){S.forEach(P=>{p(P)&&(O.has(P)||(O.add(P),P.pluginName&&!o._availablePlugins.has(P.pluginName)&&o._availablePlugins.set(P.pluginName,P),P.requires&&E(P.requires,O)))})})(t),v(t);let d=[...function E(S,O=new Set){return S.map(P=>p(P)?P:o._availablePlugins.get(P)).reduce((P,V)=>O.has(V)?P:(O.add(V),V.requires&&(v(V.requires,V),E(V.requires,O).forEach(W=>P.add(W))),P.add(V)),new Set)}(t.filter(E=>!b(E,e)))];(function(E,S){for(let O of S){if(typeof O!="function")throw new L("plugincollection-replace-plugin-invalid-type",null,{pluginItem:O});let P=O.pluginName;if(!P)throw new L("plugincollection-replace-plugin-missing-name",null,{pluginItem:O});if(O.requires&&O.requires.length)throw new L("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:P});let V=o._availablePlugins.get(P);if(!V)throw new L("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:P});let W=E.indexOf(V);if(W===-1){if(o._contextPlugins.has(V))return;throw new L("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:P})}if(V.requires&&V.requires.length)throw new L("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:P});E.splice(W,1,O),o._availablePlugins.set(P,O)}})(d,i);let u=d.map(E=>{let S=o._contextPlugins.get(E);return S=S||new E(s),o._add(E,S),S});return C(u,"init").then(()=>C(u,"afterInit")).then(()=>u);function p(E){return typeof E=="function"}function g(E){return p(E)&&!!E.isContextPlugin}function b(E,S){return S.some(O=>O===E||_(E)===O||_(O)===E)}function _(E){return p(E)?E.pluginName||E.name:E}function v(E,S=null){E.map(O=>p(O)?O:o._availablePlugins.get(O)||O).forEach(O=>{(function(P,V){if(!p(P))throw V?new L("plugincollection-soft-required",s,{missingPlugin:P,requiredBy:_(V)}):new L("plugincollection-plugin-not-found",s,{plugin:P})})(O,S),function(P,V){if(g(V)&&!g(P))throw new L("plugincollection-context-required",s,{plugin:_(P),requiredBy:_(V)})}(O,S),function(P,V){if(V&&b(P,e))throw new L("plugincollection-required",s,{plugin:_(P),requiredBy:_(V)})}(O,S)})}function C(E,S){return E.reduce((O,P)=>P[S]?o._contextPlugins.has(P)?O:O.then(P[S].bind(P)):O,Promise.resolve())}}destroy(){let t=[];for(let[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);let i=t.pluginName;if(i){if(this._plugins.has(i))throw new L("plugincollection-plugin-name-conflict",null,{pluginName:i,plugin1:this._plugins.get(i).constructor,plugin2:t});this._plugins.set(i,e)}}}var rv=Object.getOwnPropertySymbols,lP=Object.prototype.hasOwnProperty,dP=Object.prototype.propertyIsEnumerable;class sv{constructor(t){this._contextOwner=null;let e=t||{},{translations:i}=e,o=((u,p)=>{var g={};for(var b in u)lP.call(u,b)&&p.indexOf(b)<0&&(g[b]=u[b]);if(u!=null&&rv)for(var b of rv(u))p.indexOf(b)<0&&dP.call(u,b)&&(g[b]=u[b]);return g})(e,["translations"]);this.config=new Zh(o,this.constructor.defaultConfig);let s=this.constructor.builtinPlugins;this.config.define("plugins",s),this.plugins=new ov(this,s);let d=this.config.get("language")||{};this.locale=new aP({uiLanguage:typeof d=="string"?d:d.ui,contentLanguage:this.config.get("language.content"),translations:i}),this.t=this.locale.t,this.editors=new Yn}initPlugins(){let t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(let i of t.concat(e)){if(typeof i!="function")throw new L("context-initplugins-constructor-only",null,{Plugin:i});if(i.isContextPlugin!==!0)throw new L("context-initplugins-invalid-plugin",null,{Plugin:i})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new L("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){let t={};for(let e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{let i=new this(t);e(i.initPlugins().then(()=>i))})}}class bm extends ce(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class uP extends nn{constructor(t){super(),this.editor=t}set(t,e,i={}){if(typeof e=="string"){let o=e;e=(s,d)=>{this.editor.execute(o),d()}}super.set(t,e,i)}}var hP=h(2591),at=h.n(hP),av=h(4098),mP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(av.A,mP),av.A.locals;let _m=new WeakMap,cv=!1;function lv({view:n,element:t,text:e,isDirectHost:i=!0,keepOnFocus:o=!1}){let s=n.document;function d(u){_m.get(s).set(t,{text:u,isDirectHost:i,keepOnFocus:o,hostElement:i?t:null}),n.change(p=>Db(s,p))}_m.has(s)||(_m.set(s,new Map),s.registerPostFixer(u=>Db(s,u)),s.on("change:isComposing",()=>{n.change(u=>Db(s,u))},{priority:"high"})),t.is("editableElement")&&t.on("change:placeholder",(u,p,g)=>{d(g)}),t.placeholder?d(t.placeholder):e&&d(e),e&&function(){cv||gt("enableplaceholder-deprecated-text-option"),cv=!0}()}function pP(n,t){return!t.hasClass("ck-placeholder")&&(n.addClass("ck-placeholder",t),!0)}function fP(n,t){return!!t.hasClass("ck-placeholder")&&(n.removeClass("ck-placeholder",t),!0)}function gP(n,t){if(!n.isAttached()||Array.from(n.getChildren()).some(o=>!o.is("uiElement")))return!1;let e=n.document,i=e.selection.anchor;return(!e.isComposing||!i||i.parent!==n)&&(!!t||!e.isFocused||!!i&&i.parent!==n)}function Db(n,t){let e=_m.get(n),i=[],o=!1;for(let[s,d]of e)d.isDirectHost&&(i.push(s),dv(t,s,d)&&(o=!0));for(let[s,d]of e){if(d.isDirectHost)continue;let u=bP(s);u&&(i.includes(u)||(d.hostElement=u,dv(t,s,d)&&(o=!0)))}return o}function dv(n,t,e){let{text:i,isDirectHost:o,hostElement:s}=e,d=!1;return s.getAttribute("data-placeholder")!==i&&(n.setAttribute("data-placeholder",i,s),d=!0),(o||t.childCount==1)&&gP(s,e.keepOnFocus)?pP(n,s)&&(d=!0):fP(n,s)&&(d=!0),d}function bP(n){if(n.childCount){let t=n.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class na{is(){throw new Error("is() method is abstract")}}let uv=function(n){return Qs(n,4)};class oa extends ve(na){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new L("view-node-not-found-in-parent",this);return t}get nextSibling(){let t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){let t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){let t=[],e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){let e=[],i=t.includeSelf?this:this.parent;for(;i;)e[t.parentFirst?"push":"unshift"](i),i=i.parent;return e}getCommonAncestor(t,e={}){let i=this.getAncestors(e),o=t.getAncestors(e),s=0;for(;i[s]==o[s]&&i[s];)s++;return s===0?null:i[s-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;let e=this.getPath(),i=t.getPath(),o=Ei(e,i);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<i[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){let t=uv(this);return delete t.parent,t}}oa.prototype.is=function(n){return n==="node"||n==="view:node"};class Ne extends oa{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof Ne&&(this===t||this.data===t.data)}_clone(){return new Ne(this.document,this.data)}}Ne.prototype.is=function(n){return n==="$text"||n==="view:$text"||n==="text"||n==="view:text"||n==="node"||n==="view:node"};class Lo extends na{constructor(t,e,i){if(super(),this.textNode=t,e<0||e>t.data.length)throw new L("view-textproxy-wrong-offsetintext",this);if(i<0||e+i>t.data.length)throw new L("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+i),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){let e=[],i=t.includeSelf?this.textNode:this.parent;for(;i!==null;)e[t.parentFirst?"push":"unshift"](i),i=i.parent;return e}}Lo.prototype.is=function(n){return n==="$textProxy"||n==="view:$textProxy"||n==="textProxy"||n==="view:textProxy"};class Fo{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(let e of t)for(let i of this._patterns){let o=hv(e,i);if(o)return{element:e,pattern:i,match:o}}return null}matchAll(...t){let e=[];for(let i of t)for(let o of this._patterns){let s=hv(i,o);s&&e.push({element:i,pattern:o,match:s})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;let t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function hv(n,t){if(typeof t=="function")return t(n);let e={};return t.name&&(e.name=function(i,o){return i instanceof RegExp?!!o.match(i):i===o}(t.name,n.name),!e.name)||t.attributes&&(e.attributes=function(i,o){let s=new Set(o.getAttributeKeys());return Ut(i)?(i.style!==void 0&&gt("matcher-pattern-deprecated-attributes-style-key",i),i.class!==void 0&&gt("matcher-pattern-deprecated-attributes-class-key",i)):(s.delete("style"),s.delete("class")),Mb(i,s,d=>o.getAttribute(d))}(t.attributes,n),!e.attributes)||t.classes&&(e.classes=function(i,o){return Mb(i,o.getClassNames(),()=>{})}(t.classes,n),!e.classes)||t.styles&&(e.styles=function(i,o){return Mb(i,o.getStyleNames(!0),s=>o.getStyle(s))}(t.styles,n),!e.styles)?null:e}function Mb(n,t,e){let i=function(d){return Array.isArray(d)?d.map(u=>Ut(u)?(u.key!==void 0&&u.value!==void 0||gt("matcher-pattern-missing-key-or-value",u),[u.key,u.value]):[u,!0]):Ut(d)?Object.entries(d):[[d,!0]]}(n),o=Array.from(t),s=[];if(i.forEach(([d,u])=>{o.forEach(p=>{(function(g,b){return g===!0||g===b||g instanceof RegExp&&b.match(g)})(d,p)&&function(g,b,_){if(g===!0)return!0;let v=_(b);return g===v||g instanceof RegExp&&!!String(v).match(g)}(u,p,e)&&s.push(p)})}),i.length&&!(s.length<i.length))return s}let km=function(n){return typeof n=="symbol"||$i(n)&&Oo(n)=="[object Symbol]"};var _P=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kP=/^\w*$/;let Ib=function(n,t){if(Ni(n))return!1;var e=typeof n;return!(e!="number"&&e!="symbol"&&e!="boolean"&&n!=null&&!km(n))||kP.test(n)||!_P.test(n)||t!=null&&n in Object(t)};function Sb(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var i=arguments,o=t?t.apply(this,i):i[0],s=e.cache;if(s.has(o))return s.get(o);var d=n.apply(this,i);return e.cache=s.set(o,d)||s,d};return e.cache=new(Sb.Cache||Za),e}Sb.Cache=Za;let wP=Sb,vP=function(n){var t=wP(n,function(i){return e.size===500&&e.clear(),i}),e=t.cache;return t};var yP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,CP=/\\(\\)?/g,AP=vP(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(yP,function(e,i,o,s){t.push(o?s.replace(CP,"$1"):i||e)}),t});let xP=AP,EP=function(n,t){for(var e=-1,i=n==null?0:n.length,o=Array(i);++e<i;)o[e]=t(n[e],e,n);return o};var mv=hi?hi.prototype:void 0,pv=mv?mv.toString:void 0;let DP=function n(t){if(typeof t=="string")return t;if(Ni(t))return EP(t,n)+"";if(km(t))return pv?pv.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},Tb=function(n){return n==null?"":DP(n)},wm=function(n,t){return Ni(n)?n:Ib(n,t)?[n]:xP(Tb(n))},MP=function(n){var t=n==null?0:n.length;return t?n[t-1]:void 0},gc=function(n){if(typeof n=="string"||km(n))return n;var t=n+"";return t=="0"&&1/n==-1/0?"-0":t},Ob=function(n,t){for(var e=0,i=(t=wm(t,n)).length;n!=null&&e<i;)n=n[gc(t[e++])];return e&&e==i?n:void 0},fv=function(n,t,e){var i=-1,o=n.length;t<0&&(t=-t>o?0:o+t),(e=e>o?o:e)<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var s=Array(o);++i<o;)s[i]=n[i+t];return s},IP=function(n,t){return t.length<2?n:Ob(n,fv(t,0,-1))},SP=function(n,t){return t=wm(t,n),(n=IP(n,t))==null||delete n[gc(MP(t))]},TP=function(n,t){return n==null||SP(n,t)},wd=function(n,t,e){var i=n==null?void 0:Ob(n,t);return i===void 0?e:i},OP=function(n,t,e,i){if(!Yt(n))return n;for(var o=-1,s=(t=wm(t,n)).length,d=s-1,u=n;u!=null&&++o<s;){var p=gc(t[o]),g=e;if(p==="__proto__"||p==="constructor"||p==="prototype")return n;if(o!=d){var b=u[p];(g=i?i(b,p,u):void 0)===void 0&&(g=Yt(b)?b:ho(t[o+1])?[]:{})}Yl(u,p,g),u=u[p]}return n},PP=function(n,t,e){return n==null?n:OP(n,t,e)};class Pb{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();let e=function(i){let o=null,s=0,d=0,u=null,p=new Map;if(i==="")return p;i.charAt(i.length-1)!=";"&&(i+=";");for(let g=0;g<i.length;g++){let b=i.charAt(g);if(o===null)switch(b){case":":u||(u=i.substr(s,g-s),d=g+1);break;case'"':case"'":o=b;break;case";":{let _=i.substr(d,g-d);u&&p.set(u.trim(),_.trim()),u=null,s=g+1;break}}else b===o&&(o=null)}return p}(t);for(let[i,o]of e)this._styleProcessor.toNormalizedForm(i,o,this._styles)}has(t){if(this.isEmpty)return!1;let e=this._styleProcessor.getReducedForm(t,this._styles).find(([i])=>i===t);return Array.isArray(e)}set(t,e){if(Yt(t))for(let[i,o]of Object.entries(t))this._styleProcessor.toNormalizedForm(i,o,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){let e=Bb(t);TP(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!Yt(this._styles[t]))return this._styles[t];let e=this._styleProcessor.getReducedForm(t,this._styles).find(([i])=>i===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([e])=>e)}clear(){this._styles={}}getStylesEntries(){let t=[],e=Object.keys(this._styles);for(let i of e)t.push(...this._styleProcessor.getReducedForm(i,this._styles));return t}_cleanEmptyObjectsOnPath(t){let e=t.split(".");if(!(e.length>1))return;let i=e.splice(0,e.length-1).join("."),o=wd(this._styles,i);o&&!Object.keys(o).length&&this.remove(i)}}class BP{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,i){if(Yt(e))Rb(i,Bb(t),e);else if(this._normalizers.has(t)){let o=this._normalizers.get(t),{path:s,value:d}=o(e);Rb(i,s,d)}else Rb(i,t,e)}getNormalized(t,e){if(!t)return Cb({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){let i=this._extractors.get(t);if(typeof i=="string")return wd(e,i);let o=i(t,e);if(o)return o}return wd(e,Bb(t))}getReducedForm(t,e){let i=this.getNormalized(t,e);return i===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(i):[[t,i]]}getStyleNames(t){let e=Array.from(this._consumables.keys()).filter(o=>{let s=this.getNormalized(o,t);return s&&typeof s=="object"?Object.keys(s).length:s}),i=new Set([...e,...Object.keys(t)]);return Array.from(i)}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(let i of e)this._mapStyleNames(i,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function Bb(n){return n.replace("-",".")}function Rb(n,t,e){let i=e;Yt(e)&&(i=Cb({},wd(n,t),e)),PP(n,t,i)}class xn extends oa{constructor(t,e,i,o){if(super(t),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=e,this._attrs=function(s){let d=No(s);for(let[u,p]of d)p===null?d.delete(u):typeof p!="string"&&d.set(u,String(p));return d}(i),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){let s=this._attrs.get("class");gv(this._classes,s),this._attrs.delete("class")}this._styles=new Pb(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*ni(this._attrs.keys())}*getAttributes(){yield*ni(this._attrs.entries()),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){let e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof xn))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(let[e,i]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==i)return!1;for(let e of this._classes)if(!t._classes.has(e))return!1;for(let e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(let e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(let e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){let e=new Fo(...t),i=this.parent;for(;i&&!i.is("documentFragment");){if(e.match(i))return i;i=i.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*ni(this._customProperties.entries())}getIdentity(){let t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),i=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(i==""?"":` ${i}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){let e=[];if(t)for(let o of this.getChildren())e.push(o._clone(t));let i=new this.constructor(this.document,this.name,this._attrs,e);return i._classes=new Set(this._classes),i._styles.set(this._styles.getNormalized()),i._customProperties=new Map(this._customProperties),i.getFillerOffset=this.getFillerOffset,i._unsafeAttributesToRender=this._unsafeAttributesToRender,i}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let i=0,o=function(s,d){return typeof d=="string"?[new Ne(s,d)]:(Ri(d)||(d=[d]),Array.from(d).map(u=>typeof u=="string"?new Ne(s,u):u instanceof Lo?new Ne(s,u.data):u))}(this.document,e);for(let s of o)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(t,0,s),t++,i++;return i}_removeChildren(t,e=1){this._fireChange("children",this);for(let i=t;i<t+e;i++)this._children[i].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){let i=String(e);this._fireChange("attributes",this),t=="class"?gv(this._classes,i):t=="style"?this._styles.setTo(i):this._attrs.set(t,i)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(let e of Ie(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(let e of Ie(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),typeof t!="string"?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(let e of Ie(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function gv(n,t){let e=t.split(/\s+/);n.clear(),e.forEach(i=>n.add(i))}xn.prototype.is=function(n,t){return t?t===this.name&&(n==="element"||n==="view:element"):n==="element"||n==="view:element"||n==="node"||n==="view:node"};class vd extends xn{constructor(t,e,i,o){super(t,e,i,o),this.getFillerOffset=RP}}function RP(){let n=[...this.getChildren()],t=n[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(let e of n)if(!e.is("uiElement"))return null;return this.childCount}vd.prototype.is=function(n,t){return t?t===this.name&&(n==="containerElement"||n==="view:containerElement"||n==="element"||n==="view:element"):n==="containerElement"||n==="view:containerElement"||n==="element"||n==="view:element"||n==="node"||n==="view:node"};class vm extends ce(vd){constructor(t,e,i,o){super(t,e,i,o),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",s=>s&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}vm.prototype.is=function(n,t){return t?t===this.name&&(n==="editableElement"||n==="view:editableElement"||n==="containerElement"||n==="view:containerElement"||n==="element"||n==="view:element"):n==="editableElement"||n==="view:editableElement"||n==="containerElement"||n==="view:containerElement"||n==="element"||n==="view:element"||n==="node"||n==="view:node"};let bv=Symbol("rootName");class _v extends vm{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty(bv)}set rootName(t){this._setCustomProperty(bv,t)}set _name(t){this.name=t}}_v.prototype.is=function(n,t){return t?t===this.name&&(n==="rootElement"||n==="view:rootElement"||n==="editableElement"||n==="view:editableElement"||n==="containerElement"||n==="view:containerElement"||n==="element"||n==="view:element"):n==="rootElement"||n==="view:rootElement"||n==="editableElement"||n==="view:editableElement"||n==="containerElement"||n==="view:containerElement"||n==="element"||n==="view:element"||n==="node"||n==="view:node"};class ra{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new L("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new L("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this._position=ct._createAt(t.startPosition):this._position=ct._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,i;do i=this.position,e=this.next();while(!e.done&&t(e.value));e.done||(this._position=i)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone(),e=this.position,i=t.parent;if(i.parent===null&&t.offset===i.childCount)return{done:!0,value:void 0};if(i===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(i instanceof Ne){if(t.isAtEnd)return this._position=ct._createAfter(i),this._next();o=i.data[t.offset]}else o=i.getChild(t.offset);if(o instanceof xn){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(t))return{done:!0,value:void 0};t.offset++}else t=new ct(o,0);return this._position=t,this._formatReturnValue("elementStart",o,e,t,1)}if(o instanceof Ne){if(this.singleCharacters)return t=new ct(o,0),this._position=t,this._next();let s,d=o.data.length;return o==this._boundaryEndParent?(d=this.boundaries.end.offset,s=new Lo(o,0,d),t=ct._createAfter(s)):(s=new Lo(o,0,o.data.length),t.offset++),this._position=t,this._formatReturnValue("text",s,e,t,d)}if(typeof o=="string"){let s;this.singleCharacters?s=1:s=(i===this._boundaryEndParent?this.boundaries.end.offset:i.data.length)-t.offset;let d=new Lo(i,t.offset,s);return t.offset+=s,this._position=t,this._formatReturnValue("text",d,e,t,s)}return t=ct._createAfter(i),this._position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",i,e,t)}_previous(){let t=this.position.clone(),e=this.position,i=t.parent;if(i.parent===null&&t.offset===0)return{done:!0,value:void 0};if(i==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(i instanceof Ne){if(t.isAtStart)return this._position=ct._createBefore(i),this._previous();o=i.data[t.offset-1]}else o=i.getChild(t.offset-1);if(o instanceof xn)return this.shallow?(t.offset--,this._position=t,this._formatReturnValue("elementStart",o,e,t,1)):(t=new ct(o,o.childCount),this._position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,e,t));if(o instanceof Ne){if(this.singleCharacters)return t=new ct(o,o.data.length),this._position=t,this._previous();let s,d=o.data.length;if(o==this._boundaryStartParent){let u=this.boundaries.start.offset;s=new Lo(o,u,o.data.length-u),d=s.data.length,t=ct._createBefore(s)}else s=new Lo(o,0,o.data.length),t.offset--;return this._position=t,this._formatReturnValue("text",s,e,t,d)}if(typeof o=="string"){let s;if(this.singleCharacters)s=1;else{let u=i===this._boundaryStartParent?this.boundaries.start.offset:0;s=t.offset-u}t.offset-=s;let d=new Lo(i,t.offset,s);return this._position=t,this._formatReturnValue("text",d,e,t,s)}return t=ct._createBefore(i),this._position=t,this._formatReturnValue("elementStart",i,e,t,1)}_formatReturnValue(t,e,i,o,s){return e instanceof Lo&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?i=ct._createAfter(e.textNode):(o=ct._createAfter(e.textNode),this._position=o)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?i=ct._createBefore(e.textNode):(o=ct._createBefore(e.textNode),this._position=o))),{done:!1,value:{type:t,item:e,previousPosition:i,nextPosition:o,length:s}}}}class ct extends na{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){let t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof vm);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){let e=ct._createAt(this),i=e.offset+t;return e.offset=i<0?0:i,e}getLastMatchingPosition(t,e={}){e.startPosition=this;let i=new ra(e);return i.skip(t),i.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){let e=this.getAncestors(),i=t.getAncestors(),o=0;for(;e[o]==i[o]&&e[o];)o++;return o===0?null:e[o-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";let e=this.parent.is("node")?this.parent.getPath():[],i=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),i.push(t.offset);let o=Ei(e,i);switch(o){case"prefix":return"before";case"extension":return"after";default:return e[o]<i[o]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new ra(t)}clone(){return new ct(this.parent,this.offset)}static _createAt(t,e){if(t instanceof ct)return new this(t.parent,t.offset);{let i=t;if(e=="end")e=i.is("$text")?i.data.length:i.childCount;else{if(e=="before")return this._createBefore(i);if(e=="after")return this._createAfter(i);if(e!==0&&!e)throw new L("view-createpositionat-offset-required",i)}return new ct(i,e)}}static _createAfter(t){if(t.is("$textProxy"))return new ct(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new L("view-position-after-root",t,{root:t});return new ct(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new ct(t.textNode,t.offsetInText);if(!t.parent)throw new L("view-position-before-root",t,{root:t});return new ct(t.parent,t.index)}}ct.prototype.is=function(n){return n==="position"||n==="view:position"};class zt extends na{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*ni(new ra({boundaries:this,ignoreElementEnd:!0}))}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(ym,{direction:"backward"}),e=this.end.getLastMatchingPosition(ym);return t.parent.is("$text")&&t.isAtStart&&(t=ct._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=ct._createAfter(e.parent)),new zt(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(ym);if(t.isAfter(this.end)||t.isEqual(this.end))return new zt(t,t);let e=this.end.getLastMatchingPosition(ym,{direction:"backward"}),i=t.nodeAfter,o=e.nodeBefore;return i&&i.is("$text")&&(t=new ct(i,0)),o&&o.is("$text")&&(e=new ct(o,o.data.length)),new zt(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);let i=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return i&&o}getDifference(t){let e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new zt(this.start,t.start)),this.containsPosition(t.end)&&e.push(new zt(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,i=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(i=t.end),new zt(e,i)}return null}getWalker(t={}){return t.boundaries=this,new ra(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new zt(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;let e=new ra(t);for(let i of e)yield i.item}*getPositions(t={}){t.boundaries=this;let e=new ra(t);yield e.position;for(let i of e)yield i.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,i,o){return new this(new ct(t,e),new ct(i,o))}static _createFromPositionAndShift(t,e){let i=t,o=t.getShiftedBy(e);return e>0?new this(i,o):new this(o,i)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){let e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(ct._createBefore(t),e)}}function ym(n){return!(!n.item.is("attributeElement")&&!n.item.is("uiElement"))}zt.prototype.is=function(n){return n==="range"||n==="view:range"};class fo extends ve(na){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;let t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;let t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(let t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(let e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(let e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){let t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){let t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(let e of this._ranges){let i=!1;for(let o of t._ranges)if(e.isEqual(o)){i=!0;break}if(!i)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;let e=Vl(this.getRanges());if(e!=Vl(t.getRanges()))return!1;if(e==0)return!0;for(let i of this.getRanges()){i=i.getTrimmed();let o=!1;for(let s of t.getRanges())if(s=s.getTrimmed(),i.start.isEqual(s.start)&&i.end.isEqual(s.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,i,o]=t;if(typeof i=="object"&&(o=i,i=void 0),e===null)this._setRanges([]),this._setFakeOptions(o);else if(e instanceof fo||e instanceof Nb)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof zt)this._setRanges([e],o&&o.backward),this._setFakeOptions(o);else if(e instanceof ct)this._setRanges([new zt(e)]),this._setFakeOptions(o);else if(e instanceof oa){let s=!!o&&!!o.backward,d;if(i===void 0)throw new L("view-selection-setto-required-second-parameter",this);d=i=="in"?zt._createIn(e):i=="on"?zt._createOn(e):new zt(ct._createAt(e,i)),this._setRanges([d],s),this._setFakeOptions(o)}else{if(!Ri(e))throw new L("view-selection-setto-not-selectable",this);this._setRanges(e,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new L("view-selection-setfocus-no-ranges",this);let i=ct._createAt(t,e);if(i.compareWith(this.focus)=="same")return;let o=this.anchor;this._ranges.pop(),i.compareWith(o)=="before"?this._addRange(new zt(i,o),!0):this._addRange(new zt(o,i)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(let i of t)this._addRange(i);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof zt))throw new L("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(let e of this._ranges)if(t.isIntersecting(e))throw new L("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new zt(t.start,t.end))}}fo.prototype.is=function(n){return n==="selection"||n==="view:selection"};class Nb extends ve(na){constructor(...t){super(),this._selection=new fo,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*ni(this._selection.getRanges())}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}Nb.prototype.is=function(n){return n==="selection"||n=="documentSelection"||n=="view:selection"||n=="view:documentSelection"};class bc extends Y{constructor(t,e,i){super(t,e),this.startRange=i,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}let Lb=Symbol("bubbling contexts");function Fb(n){return class extends n{fire(t,...e){try{let i=t instanceof Y?t:new Y(this,t),o=zb(this);if(!o.size)return;if(yd(i,"capturing",this),_c(o,"$capture",i,...e))return i.return;let s=i.startRange||this.selection.getFirstRange(),d=s?s.getContainedElement():null,u=!!d&&!!kv(o,d),p=d||function(g){if(!g)return null;let b=g.start.parent,_=g.end.parent,v=b.getPath(),C=_.getPath();return v.length>C.length?b:_}(s);if(yd(i,"atTarget",p),!u){if(_c(o,"$text",i,...e))return i.return;yd(i,"bubbling",p)}for(;p;){if(p.is("rootElement")){if(_c(o,"$root",i,...e))return i.return}else if(p.is("element")&&_c(o,p.name,i,...e))return i.return;if(_c(o,p,i,...e))return i.return;p=p.parent,yd(i,"bubbling",p)}return yd(i,"bubbling",this),_c(o,"$document",i,...e),i.return}catch(i){L.rethrowUnexpectedError(i,this)}}_addEventListener(t,e,i){let o=Ie(i.context||"$document"),s=zb(this);for(let d of o){let u=s.get(d);u||(u=new(ve()),s.set(d,u)),this.listenTo(u,t,e,i)}}_removeEventListener(t,e){let i=zb(this);for(let o of i.values())this.stopListening(o,t,e)}}}{let n=Fb(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{Fb[t]=n.prototype[t]})}function yd(n,t,e){n instanceof bc&&(n._eventPhase=t,n._currentTarget=e)}function _c(n,t,e,...i){let o=typeof t=="string"?n.get(t):kv(n,t);return!!o&&(o.fire(e,...i),e.stop.called)}function kv(n,t){for(let[e,i]of n)if(typeof e=="function"&&e(t))return i;return null}function zb(n){return n[Lb]||(n[Lb]=new Map),n[Lb]}class Cm extends Fb(ce()){constructor(t){super(),this._postFixers=new Set,this.selection=new Nb,this.roots=new Yn({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.forEach(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(let i of this._postFixers)if(e=i(t),e)break;while(e)}}class sa extends xn{constructor(t,e,i,o){super(t,e,i,o),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=NP}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new L("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){let e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function NP(){if(jb(this))return null;let n=this.parent;for(;n&&n.is("attributeElement");){if(jb(n)>1)return null;n=n.parent}return!n||jb(n)>1?null:this.childCount}function jb(n){return Array.from(n.getChildren()).filter(t=>!t.is("uiElement")).length}sa.DEFAULT_PRIORITY=10,sa.prototype.is=function(n,t){return t?t===this.name&&(n==="attributeElement"||n==="view:attributeElement"||n==="element"||n==="view:element"):n==="attributeElement"||n==="view:attributeElement"||n==="element"||n==="view:element"||n==="node"||n==="view:node"};class Vb extends xn{constructor(t,e,i,o){super(t,e,i,o),this.getFillerOffset=LP}_insertChild(t,e){if(e&&(e instanceof oa||Array.from(e).length>0))throw new L("view-emptyelement-cannot-add",[this,e]);return 0}}function LP(){return null}Vb.prototype.is=function(n,t){return t?t===this.name&&(n==="emptyElement"||n==="view:emptyElement"||n==="element"||n==="view:element"):n==="emptyElement"||n==="view:emptyElement"||n==="element"||n==="view:element"||n==="node"||n==="view:node"};class Am extends xn{constructor(t,e,i,o){super(t,e,i,o),this.getFillerOffset=zP}_insertChild(t,e){if(e&&(e instanceof oa||Array.from(e).length>0))throw new L("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){let e=t.createElement(this.name);for(let i of this.getAttributeKeys())e.setAttribute(i,this.getAttribute(i));return e}}function FP(n){n.document.on("arrowKey",(t,e)=>function(i,o,s){if(o.keyCode==It.arrowright){let d=o.domTarget.ownerDocument.defaultView.getSelection(),u=d.rangeCount==1&&d.getRangeAt(0).collapsed;if(u||o.shiftKey){let p=d.focusNode,g=d.focusOffset,b=s.domPositionToView(p,g);if(b===null)return;let _=!1,v=b.getLastMatchingPosition(C=>(C.item.is("uiElement")&&(_=!0),!(!C.item.is("uiElement")&&!C.item.is("attributeElement"))));if(_){let C=s.viewPositionToDom(v);u?d.collapse(C.parent,C.offset):d.extend(C.parent,C.offset)}}}}(0,e,n.domConverter),{priority:"low"})}function zP(){return null}Am.prototype.is=function(n,t){return t?t===this.name&&(n==="uiElement"||n==="view:uiElement"||n==="element"||n==="view:element"):n==="uiElement"||n==="view:uiElement"||n==="element"||n==="view:element"||n==="node"||n==="view:node"};class Ub extends xn{constructor(t,e,i,o){super(t,e,i,o),this.getFillerOffset=jP}_insertChild(t,e){if(e&&(e instanceof oa||Array.from(e).length>0))throw new L("view-rawelement-cannot-add",[this,e]);return 0}render(t,e){}}function jP(){return null}Ub.prototype.is=function(n,t){return t?t===this.name&&(n==="rawElement"||n==="view:rawElement"||n==="element"||n==="view:element"):n==="rawElement"||n==="view:rawElement"||n===this.name||n==="view:"+this.name||n==="element"||n==="view:element"||n==="node"||n==="view:node"};class aa extends ve(na){constructor(t,e){super(),this._children=[],this._customProperties=new Map,this.document=t,e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*ni(this._customProperties.entries())}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let i=0,o=function(s,d){return typeof d=="string"?[new Ne(s,d)]:(Ri(d)||(d=[d]),Array.from(d).map(u=>typeof u=="string"?new Ne(s,u):u instanceof Lo?new Ne(s,u.data):u))}(this.document,e);for(let s of o)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(t,0,s),t++,i++;return i}_removeChildren(t,e=1){this._fireChange("children",this);for(let i=t;i<t+e;i++)this._children[i].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}aa.prototype.is=function(n){return n==="documentFragment"||n==="view:documentFragment"};class wv{constructor(t){this._cloneGroups=new Map,this._slotFactory=null,this.document=t}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new aa(this.document,t)}createText(t){return new Ne(this.document,t)}createAttributeElement(t,e,i={}){let o=new sa(this.document,t,e);return typeof i.priority=="number"&&(o._priority=i.priority),i.id&&(o._id=i.id),i.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),o}createContainerElement(t,e,i={},o={}){let s=null;Ut(i)?o=i:s=i;let d=new vd(this.document,t,e,s);return o.renderUnsafeAttributes&&d._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),d}createEditableElement(t,e,i={}){let o=new vm(this.document,t,e);return i.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),o}createEmptyElement(t,e,i={}){let o=new Vb(this.document,t,e);return i.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),o}createUIElement(t,e,i){let o=new Am(this.document,t,e);return i&&(o.render=i),o}createRawElement(t,e,i,o={}){let s=new Ub(this.document,t,e);return i&&(s.render=i),o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}setAttribute(t,e,i){i._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,i){Ut(t)&&i===void 0?e._setStyle(t):i._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,i){i._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof ct?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){let e=t.parent;if(!e.is("containerElement"))throw new L("view-writer-break-non-container-element",this.document);if(!e.parent)throw new L("view-writer-break-root",this.document);if(t.isAtStart)return ct._createBefore(e);if(!t.isAtEnd){let i=e._clone(!1);this.insert(ct._createAfter(e),i);let o=new zt(t,ct._createAt(e,"end")),s=new ct(i,0);this.move(o,s)}return ct._createAfter(e)}mergeAttributes(t){let e=t.offset,i=t.parent;if(i.is("$text"))return t;if(i.is("attributeElement")&&i.childCount===0){let d=i.parent,u=i.index;return i._remove(),this._removeFromClonedElementsGroup(i),this.mergeAttributes(new ct(d,u))}let o=i.getChild(e-1),s=i.getChild(e);if(!o||!s)return t;if(o.is("$text")&&s.is("$text"))return yv(o,s);if(o.is("attributeElement")&&s.is("attributeElement")&&o.isSimilar(s)){let d=o.childCount;return o._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new ct(o,d))}return t}mergeContainers(t){let e=t.nodeBefore,i=t.nodeAfter;if(!(e&&i&&e.is("containerElement")&&i.is("containerElement")))throw new L("view-writer-merge-containers-invalid-position",this.document);let o=e.getChild(e.childCount-1),s=o instanceof Ne?ct._createAt(o,"end"):ct._createAt(e,"end");return this.move(zt._createIn(i),ct._createAt(e,"end")),this.remove(zt._createOn(i)),s}insert(t,e){Cv(e=Ri(e)?[...e]:[e],this.document);let i=e.reduce((d,u)=>{let p=d[d.length-1],g=!u.is("uiElement");return p&&p.breakAttributes==g?p.nodes.push(u):d.push({breakAttributes:g,nodes:[u]}),d},[]),o=null,s=t;for(let{nodes:d,breakAttributes:u}of i){let p=this._insertNodes(s,d,u);o||(o=p.start),s=p.end}return o?new zt(o,s):new zt(t)}remove(t){let e=t instanceof zt?t:zt._createOn(t);if(Cd(e,this.document),e.isCollapsed)return new aa(this.document);let{start:i,end:o}=this._breakAttributesRange(e,!0),s=i.parent,d=o.offset-i.offset,u=s._removeChildren(i.offset,d);for(let g of u)this._removeFromClonedElementsGroup(g);let p=this.mergeAttributes(i);return e.start=p,e.end=p.clone(),new aa(this.document,u)}clear(t,e){Cd(t,this.document);let i=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(let o of i){let s=o.item,d;if(s.is("element")&&e.isSimilar(s))d=zt._createOn(s);else if(!o.nextPosition.isAfter(t.start)&&s.is("$textProxy")){let u=s.getAncestors().find(p=>p.is("element")&&e.isSimilar(p));u&&(d=zt._createIn(u))}d&&(d.end.isAfter(t.end)&&(d.end=t.end),d.start.isBefore(t.start)&&(d.start=t.start),this.remove(d))}}move(t,e){let i;if(e.isAfter(t.end)){let o=(e=this._breakAttributes(e,!0)).parent,s=o.childCount;t=this._breakAttributesRange(t,!0),i=this.remove(t),e.offset+=o.childCount-s}else i=this.remove(t);return this.insert(e,i)}wrap(t,e){if(!(e instanceof sa))throw new L("view-writer-wrap-invalid-attribute",this.document);if(Cd(t,this.document),t.isCollapsed){let o=t.start;o.parent.is("element")&&(i=o.parent,!Array.from(i.getChildren()).some(d=>!d.is("uiElement")))&&(o=o.getLastMatchingPosition(d=>d.item.is("uiElement"))),o=this._wrapPosition(o,e);let s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(t.start)&&this.setSelection(o),new zt(o)}return this._wrapRange(t,e);var i}unwrap(t,e){if(!(e instanceof sa))throw new L("view-writer-unwrap-invalid-attribute",this.document);if(Cd(t,this.document),t.isCollapsed)return t;let{start:i,end:o}=this._breakAttributesRange(t,!0),s=i.parent,d=this._unwrapChildren(s,i.offset,o.offset,e),u=this.mergeAttributes(d.start);u.isEqual(d.start)||d.end.offset--;let p=this.mergeAttributes(d.end);return new zt(u,p)}rename(t,e){let i=new vd(this.document,t,e.getAttributes());return this.insert(ct._createAfter(e),i),this.move(zt._createIn(e),ct._createAt(i,0)),this.remove(zt._createOn(e)),i}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return ct._createAt(t,e)}createPositionAfter(t){return ct._createAfter(t)}createPositionBefore(t){return ct._createBefore(t)}createRange(t,e){return new zt(t,e)}createRangeOn(t){return zt._createOn(t)}createRangeIn(t){return zt._createIn(t)}createSelection(...t){return new fo(...t)}createSlot(t="children"){if(!this._slotFactory)throw new L("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,i){let o,s;if(o=i?Hb(t):t.parent.is("$text")?t.parent.parent:t.parent,!o)throw new L("view-writer-invalid-position-container",this.document);s=i?this._breakAttributes(t,!0):t.parent.is("$text")?qb(t):t;let d=o._insertChild(s.offset,e);for(let b of e)this._addToClonedElementsGroup(b);let u=s.getShiftedBy(d),p=this.mergeAttributes(s);p.isEqual(s)||u.offset--;let g=this.mergeAttributes(u);return new zt(p,g)}_wrapChildren(t,e,i,o){let s=e,d=[];for(;s<i;){let p=t.getChild(s),g=p.is("$text"),b=p.is("attributeElement");if(b&&this._wrapAttributeElement(o,p))d.push(new ct(t,s));else if(g||!b||VP(o,p)){let _=o._clone();p._remove(),_._appendChild(p),t._insertChild(s,_),this._addToClonedElementsGroup(_),d.push(new ct(t,s))}else this._wrapChildren(p,0,p.childCount,o);s++}let u=0;for(let p of d)p.offset-=u,p.offset!=e&&(this.mergeAttributes(p).isEqual(p)||(u++,i--));return zt._createFromParentsAndOffsets(t,e,t,i)}_unwrapChildren(t,e,i,o){let s=e,d=[];for(;s<i;){let p=t.getChild(s);if(p.is("attributeElement"))if(p.isSimilar(o)){let g=p.getChildren(),b=p.childCount;p._remove(),t._insertChild(s,g),this._removeFromClonedElementsGroup(p),d.push(new ct(t,s),new ct(t,s+b)),s+=b,i+=b-1}else this._unwrapAttributeElement(o,p)?(d.push(new ct(t,s),new ct(t,s+1)),s++):(this._unwrapChildren(p,0,p.childCount,o),s++);else s++}let u=0;for(let p of d)p.offset-=u,!(p.offset==e||p.offset==i)&&(this.mergeAttributes(p).isEqual(p)||(u++,i--));return zt._createFromParentsAndOffsets(t,e,t,i)}_wrapRange(t,e){let{start:i,end:o}=this._breakAttributesRange(t,!0),s=i.parent,d=this._wrapChildren(s,i.offset,o.offset,e),u=this.mergeAttributes(d.start);u.isEqual(d.start)||d.end.offset--;let p=this.mergeAttributes(d.end);return new zt(u,p)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return vv(t.clone());t.parent.is("$text")&&(t=qb(t));let i=this.createAttributeElement("_wrapPosition-fake-element");i._priority=Number.POSITIVE_INFINITY,i.isSimilar=()=>!1,t.parent._insertChild(t.offset,i);let o=new zt(t,t.getShiftedBy(1));this.wrap(o,e);let s=new ct(i.parent,i.index);i._remove();let d=s.nodeBefore,u=s.nodeAfter;return d instanceof Ne&&u instanceof Ne?yv(d,u):vv(s)}_wrapAttributeElement(t,e){if(!Av(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(let i of t.getAttributeKeys())if(i!=="class"&&i!=="style"&&e.hasAttribute(i)&&e.getAttribute(i)!==t.getAttribute(i))return!1;for(let i of t.getStyleNames())if(e.hasStyle(i)&&e.getStyle(i)!==t.getStyle(i))return!1;for(let i of t.getAttributeKeys())i!=="class"&&i!=="style"&&(e.hasAttribute(i)||this.setAttribute(i,t.getAttribute(i),e));for(let i of t.getStyleNames())e.hasStyle(i)||this.setStyle(i,t.getStyle(i),e);for(let i of t.getClassNames())e.hasClass(i)||this.addClass(i,e);return!0}_unwrapAttributeElement(t,e){if(!Av(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(let i of t.getAttributeKeys())if(i!=="class"&&i!=="style"&&(!e.hasAttribute(i)||e.getAttribute(i)!==t.getAttribute(i)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(let i of t.getStyleNames())if(!e.hasStyle(i)||e.getStyle(i)!==t.getStyle(i))return!1;for(let i of t.getAttributeKeys())i!=="class"&&i!=="style"&&this.removeAttribute(i,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){let i=t.start,o=t.end;if(Cd(t,this.document),t.isCollapsed){let p=this._breakAttributes(t.start,e);return new zt(p,p)}let s=this._breakAttributes(o,e),d=s.parent.childCount,u=this._breakAttributes(i,e);return s.offset+=s.parent.childCount-d,new zt(u,s)}_breakAttributes(t,e=!1){let i=t.offset,o=t.parent;if(t.parent.is("emptyElement"))throw new L("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new L("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new L("view-writer-cannot-break-raw-element",this.document);if(!e&&o.is("$text")&&Wb(o.parent)||Wb(o))return t.clone();if(o.is("$text"))return this._breakAttributes(qb(t),e);if(i==o.childCount){let s=new ct(o.parent,o.index+1);return this._breakAttributes(s,e)}if(i===0){let s=new ct(o.parent,o.index);return this._breakAttributes(s,e)}{let s=o.index+1,d=o._clone();o.parent._insertChild(s,d),this._addToClonedElementsGroup(d);let u=o.childCount-i,p=o._removeChildren(i,u);d._appendChild(p);let g=new ct(o.parent,s);return this._breakAttributes(g,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(let o of t.getChildren())this._addToClonedElementsGroup(o);let e=t.id;if(!e)return;let i=this._cloneGroups.get(e);i||(i=new Set,this._cloneGroups.set(e,i)),i.add(t),t._clonesGroup=i}_removeFromClonedElementsGroup(t){if(t.is("element"))for(let o of t.getChildren())this._removeFromClonedElementsGroup(o);let e=t.id;if(!e)return;let i=this._cloneGroups.get(e);i&&i.delete(t)}}function Hb(n){let t=n.parent;for(;!Wb(t);){if(!t)return;t=t.parent}return t}function VP(n,t){return n.priority<t.priority||!(n.priority>t.priority)&&n.getIdentity()<t.getIdentity()}function vv(n){let t=n.nodeBefore;if(t&&t.is("$text"))return new ct(t,t.data.length);let e=n.nodeAfter;return e&&e.is("$text")?new ct(e,0):n}function qb(n){if(n.offset==n.parent.data.length)return new ct(n.parent.parent,n.parent.index+1);if(n.offset===0)return new ct(n.parent.parent,n.parent.index);let t=n.parent.data.slice(n.offset);return n.parent._data=n.parent.data.slice(0,n.offset),n.parent.parent._insertChild(n.parent.index+1,new Ne(n.root.document,t)),new ct(n.parent.parent,n.parent.index+1)}function yv(n,t){let e=n.data.length;return n._data+=t.data,t._remove(),new ct(n,e)}let UP=[Ne,sa,vd,Vb,Ub,Am];function Cv(n,t){for(let e of n){if(!UP.some(i=>e instanceof i))throw new L("view-writer-insert-invalid-node-type",t);e.is("$text")||Cv(e.getChildren(),t)}}function Wb(n){return n&&(n.is("containerElement")||n.is("documentFragment"))}function Cd(n,t){let e=Hb(n.start),i=Hb(n.end);if(!e||!i||e!==i)throw new L("view-writer-invalid-range-container",t)}function Av(n,t){return n.id===null&&t.id===null}let xv=n=>n.createTextNode("\xA0"),Ev=n=>{let t=n.createElement("span");return t.dataset.ckeFiller="true",t.innerText="\xA0",t},Dv=n=>{let t=n.createElement("br");return t.dataset.ckeFiller="true",t},go=7,Ad="\u2060".repeat(go);function En(n){return typeof n=="string"?n.substr(0,go)===Ad:ei(n)&&n.data.substr(0,go)===Ad}function xd(n){return n.data.length==go&&En(n)}function Mv(n){let t=typeof n=="string"?n:n.data;return En(n)?t.slice(go):t}function HP(n,t){if(t.keyCode==It.arrowleft){let e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){let i=e.getRangeAt(0).startContainer,o=e.getRangeAt(0).startOffset;En(i)&&o<=go&&e.collapse(i,0)}}}var Iv=h(8264),qP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(Iv.A,qP),Iv.A.locals;class WP extends ce(){constructor(t,e){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=t,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),y.isBlink&&!y.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new L("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!y.isAndroid)return;let t=null,e=!(y.isBlink&&!y.isAndroid)||!this.isSelecting;for(let i of this.markedChildren)this._updateChildrenMappings(i);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=ct._createBefore(t.parent)));for(let i of this.markedAttributes)this._updateAttrs(i);for(let i of this.markedChildren)this._updateChildren(i,{inlineFillerPosition:t});for(let i of this.markedTexts)!this.markedChildren.has(i.parent)&&this.domConverter.mapViewToDom(i.parent)&&this._updateText(i,{inlineFillerPosition:t});if(e)if(t){let i=this.domConverter.viewPositionToDom(t),o=i.parent.ownerDocument;En(i.parent)?this._inlineFiller=i.parent:this._inlineFiller=Sv(o,i.parent,i.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){let e=this.domConverter.mapViewToDom(t);if(!e)return;let i=Array.from(e.childNodes),o=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),s=this._diffNodeLists(i,o),d=this._findUpdateActions(s,i,o,GP);if(d.indexOf("update")!==-1){let u={equal:0,insert:0,delete:0};for(let p of d)if(p==="update"){let g=u.equal+u.insert,b=u.equal+u.delete,_=t.getChild(g);!_||_.is("uiElement")||_.is("rawElement")||this._updateElementMappings(_,i[b]),Ro(o[g]),u.equal++}else u[p]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){let t=this.selection.getFirstPosition();return t.parent.is("$text")?ct._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;let t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&ei(e.parent)&&En(e.parent))}_removeInlineFiller(){let t=this._inlineFiller;if(!En(t))throw new L("view-renderer-filler-was-lost",this);xd(t)?t.remove():t.data=t.data.substr(go),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;let t=this.selection.getFirstPosition(),e=t.parent,i=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(d){if(d.getAttribute("contenteditable")=="false")return!1;let u=d.findAncestor(p=>p.hasAttribute("contenteditable"));return!u||u.getAttribute("contenteditable")=="true"}(e)||i===e.getFillerOffset())return!1;let o=t.nodeBefore,s=t.nodeAfter;return!(o instanceof Ne||s instanceof Ne)&&(!y.isAndroid||!o&&!s)}_updateText(t,e){let i=this.domConverter.findCorrespondingDomText(t),o=this.domConverter.viewToDom(t).data,s=e.inlineFillerPosition;s&&s.parent==t.parent&&s.offset==t.index&&(o=Ad+o),Tv(i,o)}_updateAttrs(t){let e=this.domConverter.mapViewToDom(t);if(!e)return;let i=Array.from(e.attributes).map(s=>s.name),o=t.getAttributeKeys();for(let s of o)this.domConverter.setDomElementAttribute(e,s,t.getAttribute(s),t);for(let s of i)t.hasAttribute(s)||this.domConverter.removeDomElementAttribute(e,s)}_updateChildren(t,e){let i=this.domConverter.mapViewToDom(t);if(!i)return;if(y.isAndroid){let _=null;for(let v of Array.from(i.childNodes)){if(_&&ei(_)&&ei(v)){i.normalize();break}_=v}}let o=e.inlineFillerPosition,s=i.childNodes,d=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));o&&o.parent===t&&Sv(i.ownerDocument,d,o.offset);let u=this._diffNodeLists(s,d),p=this._findUpdateActions(u,s,d,$P),g=0,b=new Set;for(let _ of p)_==="delete"?(b.add(s[g]),Ro(s[g])):_!=="equal"&&_!=="update"||g++;g=0;for(let _ of p)_==="insert"?(sm(i,g,d[g]),g++):_==="update"?(Tv(s[g],d[g].data),g++):_==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(d[g])),g++);for(let _ of b)_.parentNode||this.domConverter.unbindDomElement(_)}_diffNodeLists(t,e){return t=function(i,o){let s=Array.from(i);return s.length==0||!o||s[s.length-1]==o&&s.pop(),s}(t,this._fakeSelectionContainer),G(t,e,KP.bind(null,this.domConverter))}_findUpdateActions(t,e,i,o){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let s=[],d=[],u=[],p={equal:0,insert:0,delete:0};for(let g of t)g==="insert"?u.push(i[p.equal+p.insert]):g==="delete"?d.push(e[p.equal+p.delete]):(s=s.concat(G(d,u,o).map(b=>b==="equal"?"update":b)),s.push("equal"),d=[],u=[]),p[g]++;return s.concat(G(d,u,o).map(g=>g==="equal"?"update":g))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(let e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(y.isBlink&&!y.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();let t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&y.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){let e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(d){let u=d.createElement("div");return u.className="ck-fake-selection-container",Object.assign(u.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),u.textContent="\xA0",u}(e));let i=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(i,this.selection),!this._fakeSelectionNeedsUpdate(t))return;i.parentElement&&i.parentElement==t||t.appendChild(i),i.textContent=this.selection.fakeSelectionLabel||"\xA0";let o=e.getSelection(),s=e.createRange();o.removeAllRanges(),s.selectNodeContents(i),o.addRange(s)}_updateDomSelection(t){let e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;let i=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);e.setBaseAndExtent(i.parent,i.offset,o.parent,o.offset),y.isGecko&&function(s,d){let u=s.parent;if(u.nodeType!=Node.ELEMENT_NODE||s.offset!=u.childNodes.length-1)return;let p=u.childNodes[s.offset];p&&p.tagName=="BR"&&d.addRange(d.getRangeAt(0))}(o,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;let e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){let e=this._fakeSelectionContainer,i=t.ownerDocument.getSelection();return!e||e.parentElement!==t||i.anchorNode!==e&&!e.contains(i.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(let t of this.domDocuments){let e=t.getSelection();if(e.rangeCount){let i=t.activeElement,o=this.domConverter.mapDomToView(i);i&&o&&e.removeAllRanges()}}}_removeFakeSelection(){let t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){let t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function Sv(n,t,e){let i=t instanceof Array?t:t.childNodes,o=i[e];if(ei(o))return o.data=Ad+o.data,o;{let s=n.createTextNode(Ad);return Array.isArray(t)?i.splice(e,0,s):sm(t,e,s),s}}function GP(n,t){return Bo(n)&&Bo(t)&&!ei(n)&&!ei(t)&&!ta(n)&&!ta(t)&&n.tagName.toLowerCase()===t.tagName.toLowerCase()}function $P(n,t){return Bo(n)&&Bo(t)&&ei(n)&&ei(t)}function KP(n,t,e){return t===e||(ei(t)&&ei(e)?t.data===e.data:!(!n.isBlockFiller(t)||!n.isBlockFiller(e)))}function Tv(n,t){let e=n.data;if(e==t)return;let i=N(e,t);for(let o of i)o.type==="insert"?n.insertData(o.index,o.values.join("")):n.deleteData(o.index,o.howMany)}let YP=Dv(wt.document),QP=xv(wt.document),ZP=Ev(wt.document),xm="data-ck-unsafe-attribute-",Ov="data-ck-unsafe-element";class Em{constructor(t,{blockFillerMode:e,renderingMode:i="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Fo,this._inlineObjectElementMatcher=new Fo,this._elementsWithTemporaryCustomProperties=new Set,this.document=t,this.renderingMode=i,this.blockFillerMode=e||(i==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?wt.document:wt.document.implementation.createHTMLDocument("")}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new fo(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){let e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(let i of Array.from(t.children))this.unbindDomElement(i)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,i){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(i==="img"&&(t==="src"||t==="srcset")||i==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);let i=new DOMParser().parseFromString(e,"text/html"),o=i.createDocumentFragment(),s=i.body.childNodes;for(;s.length>0;)o.appendChild(s[0]);let d=i.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),u=[],p;for(;p=d.nextNode();)u.push(p);for(let g of u){for(let _ of g.getAttributeNames())this.setDomElementAttribute(g,_,g.getAttribute(_));let b=g.tagName.toLowerCase();this._shouldRenameElement(b)&&(Rv(b),g.replaceWith(this._createReplacementDomElement(b,g)))}for(;t.firstChild;)t.firstChild.remove();t.append(o)}viewToDom(t,e={}){if(t.is("$text")){let i=this._processDataFromViewText(t);return this._domDocument.createTextNode(i)}{let i=t;if(this.mapViewToDom(i)){if(!i.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(i);this._elementsWithTemporaryCustomProperties.add(i)}let o;if(i.is("documentFragment"))o=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(o,i);else{if(i.is("uiElement"))return o=i.name==="$comment"?this._domDocument.createComment(i.getCustomProperty("$rawContent")):i.render(this._domDocument,this),e.bind&&this.bindElements(o,i),o;this._shouldRenameElement(i.name)?(Rv(i.name),o=this._createReplacementDomElement(i.name)):o=i.hasAttribute("xmlns")?this._domDocument.createElementNS(i.getAttribute("xmlns"),i.name):this._domDocument.createElement(i.name),i.is("rawElement")&&i.render(o,this),e.bind&&this.bindElements(o,i);for(let s of i.getAttributeKeys())this.setDomElementAttribute(o,s,i.getAttribute(s),i)}if(e.withChildren!==!1)for(let s of this.viewChildrenToDom(i,e))o.appendChild(s);return o}}setDomElementAttribute(t,e,i,o){let s=this.shouldRenderAttribute(e,i,t.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(e);s||gt("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:i}),function(d){try{wt.document.createAttribute(d)}catch{return!1}return!0}(e)?(t.hasAttribute(e)&&!s?t.removeAttribute(e):t.hasAttribute(xm+e)&&s&&t.removeAttribute(xm+e),t.setAttribute(s?e:xm+e,i)):gt("domconverter-invalid-attribute-detected",{domElement:t,key:e,value:i})}removeDomElementAttribute(t,e){e!=Ov&&(t.removeAttribute(e),t.removeAttribute(xm+e))}*viewChildrenToDom(t,e={}){let i=t.getFillerOffset&&t.getFillerOffset(),o=0;for(let s of t.getChildren()){i===o&&(yield this._getBlockFiller());let d=s.is("element")&&!!s.getCustomProperty("dataPipeline:transparentRendering")&&!Mi(s.getAttributes());d&&this.renderingMode=="data"?yield*ni(this.viewChildrenToDom(s,e)):(d&&gt("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,e)),o++}i===o&&(yield this._getBlockFiller())}viewRangeToDom(t){let e=this.viewPositionToDom(t.start),i=this.viewPositionToDom(t.end),o=this._domDocument.createRange();return o.setStart(e.parent,e.offset),o.setEnd(i.parent,i.offset),o}viewPositionToDom(t){let e=t.parent;if(e.is("$text")){let i=this.findCorrespondingDomText(e);if(!i)return null;let o=t.offset;return En(i)&&(o+=go),{parent:i,offset:o}}{let i,o,s;if(t.offset===0){if(i=this.mapViewToDom(e),!i)return null;s=i.childNodes[0]}else{let d=t.nodeBefore;if(o=d.is("$text")?this.findCorrespondingDomText(d):this.mapViewToDom(d),!o)return null;i=o.parentNode,s=o.nextSibling}return ei(s)&&En(s)?{parent:s,offset:go}:{parent:i,offset:o?uc(o)+1:0}}}domToView(t,e={}){let i=[],o=this._domToView(t,e,i),s=o.next().value;return s?(o.next(),this._processDomInlineNodes(null,i,e),s.is("$text")&&s.data.length==0?null:s):null}*domChildrenToView(t,e={},i=[]){for(let o=0;o<t.childNodes.length;o++){let s=t.childNodes[o],d=this._domToView(s,e,i),u=d.next().value;u!==null&&(this._isBlockViewElement(u)&&this._processDomInlineNodes(t,i,e),yield u,d.next())}this._processDomInlineNodes(t,i,e)}domSelectionToView(t){if(function(o){if(!y.isGecko||!o.rangeCount)return!1;let s=o.getRangeAt(0).startContainer;try{Object.prototype.toString.call(s)}catch{return!0}return!1}(t))return new fo([]);if(t.rangeCount===1){let o=t.getRangeAt(0).startContainer;ei(o)&&(o=o.parentNode);let s=this.fakeSelectionToView(o);if(s)return s}let e=this.isDomSelectionBackward(t),i=[];for(let o=0;o<t.rangeCount;o++){let s=t.getRangeAt(o),d=this.domRangeToView(s);d&&i.push(d)}return new fo(i,{backward:e})}domRangeToView(t){let e=this.domPositionToView(t.startContainer,t.startOffset),i=this.domPositionToView(t.endContainer,t.endOffset);return e&&i?new zt(e,i):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,uc(t));let i=this.mapDomToView(t);if(i&&(i.is("uiElement")||i.is("rawElement")))return ct._createBefore(i);if(ei(t)){if(xd(t))return this.domPositionToView(t.parentNode,uc(t));let o=this.findCorrespondingViewText(t),s=e;return o?(En(t)&&(s-=go,s=s<0?0:s),new ct(o,s)):null}if(e===0){let o=this.mapDomToView(t);if(o)return new ct(o,0)}else{let o=t.childNodes[e-1];if(ei(o)&&xd(o)||o&&this.isBlockFiller(o))return this.domPositionToView(o.parentNode,uc(o));let s=ei(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(s&&s.parent)return new ct(s.parent,s.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(xd(t))return null;let e=this.getHostViewElement(t);if(e)return e;let i=t.previousSibling;if(i){if(!this.isElement(i))return null;let o=this.mapDomToView(i);if(o){let s=o.nextSibling;return s instanceof Ne?s:null}}else{let o=this.mapDomToView(t.parentNode);if(o){let s=o.getChild(0);return s instanceof Ne?s:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){let e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){let e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){let{scrollX:i,scrollY:o}=wt.window,s=[];Pv(e,d=>{let{scrollLeft:u,scrollTop:p}=d;s.push([u,p])}),e.focus(),Pv(e,d=>{let[u,p]=s.shift();d.scrollLeft=u,d.scrollTop=p}),wt.window.scrollTo(i,o)}}_clearDomSelection(){let t=this.mapViewToDom(this.document.selection.editableElement);if(!t)return;let e=t.ownerDocument.defaultView.getSelection(),i=this.domSelectionToView(e);i&&i.rangeCount>0&&e.removeAllRanges()}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(YP):!(t.tagName!=="BR"||!Bv(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(ZP)||function(e,i){return e.isEqualNode(QP)&&Bv(e,i)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;let e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}let i=e.collapsed;return e.detach(),i}getHostViewElement(t){let e=function(i){let o=[],s=i;for(;s&&s.nodeType!=Node.DOCUMENT_NODE;)o.unshift(s),s=s.parentNode;return o}(t);for(e.pop();e.length;){let i=e.pop(),o=this._domToViewMapping.get(i);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}registerInlineObjectMatcher(t){this._inlineObjectElementMatcher.add(t)}_clearTemporaryCustomProperties(){for(let t of this._elementsWithTemporaryCustomProperties)t._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return xv(this._domDocument);case"markedNbsp":return Ev(this._domDocument);case"br":return Dv(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(ei(t)&&En(t)&&e<go||this.isElement(t)&&En(t.childNodes[e]))return!1;let i=this.mapDomToView(t);return!i||!i.is("uiElement")&&!i.is("rawElement")}*_domToView(t,e,i){if(this.isBlockFiller(t))return null;let o=this.getHostViewElement(t);if(o)return o;if(ta(t)&&e.skipComments)return null;if(ei(t)){if(xd(t))return null;{let s=t.data;if(s==="")return null;let d=new Ne(this.document,s);return i.push(d),d}}{let s=this.mapDomToView(t);if(s)return this._isInlineObjectElement(s)&&i.push(s),s;if(this.isDocumentFragment(t))s=new aa(this.document),e.bind&&this.bindDocumentFragments(t,s);else{s=this._createViewElement(t,e),e.bind&&this.bindElements(t,s);let u=t.attributes;if(u)for(let p=u.length,g=0;g<p;g++)s._setAttribute(u[g].name,u[g].value);if(this._isViewElementWithRawContent(s,e))return s._setCustomProperty("$rawContent",t.innerHTML),this._isBlockViewElement(s)||i.push(s),s;if(ta(t))return s._setCustomProperty("$rawContent",t.data),s}yield s;let d=[];if(e.withChildren!==!1)for(let u of this.domChildrenToView(t,e,d))s._appendChild(u);if(this._isInlineObjectElement(s))i.push(s);else for(let u of d)i.push(u)}}_processDomInlineNodes(t,e,i){if(!e.length||t&&!this.isDocumentFragment(t)&&!this._isBlockDomElement(t))return;let o=!1;for(let s=0;s<e.length;s++){let d=e[s];if(!d.is("$text")){o=!1;continue}let u,p=!1;if(XP(d,this.preElements))u=Mv(d.data);else{u=d.data.replace(/[ \n\t\r]{1,}/g," "),p=/[^\S\u00A0]/.test(u.charAt(u.length-1));let g=s>0?e[s-1]:null,b=s+1<e.length?e[s+1]:null,_=!g||g.is("element")&&g.name=="br"||o,v=!b&&!En(d.data);i.withChildren!==!1&&(_&&(u=u.replace(/^ /,"")),v&&(u=u.replace(/ $/,""))),u=Mv(u),u=u.replace(/ \u00A0/g,"  ");let C=b&&b.is("element")&&b.name!="br",E=b&&b.is("$text")&&b.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(u)||!b||C||E)&&(u=u.replace(/\u00A0$/," ")),(_||g&&g.is("element")&&g.name!="br")&&(u=u.replace(/^\u00A0/," "))}u.length==0&&d.parent?(d._remove(),e.splice(s,1),s--):(d._data=u,o=p)}e.length=0}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(i=>this.preElements.includes(i.name)))return e;if(e.charAt(0)==" "){let i=this._getTouchingInlineViewNode(t,!1);!(i&&i.is("$textProxy")&&this._nodeEndsWithSpace(i))&&i||(e="\xA0"+e.substr(1))}if(e.charAt(e.length-1)==" "){let i=this._getTouchingInlineViewNode(t,!0),o=i&&i.is("$textProxy")&&i.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&i&&!o||(e=e.substr(0,e.length-1)+"\xA0")}return e.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(t){if(t.getAncestors().some(i=>this.preElements.includes(i.name)))return!1;let e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_getTouchingInlineViewNode(t,e){let i=new ra({startPosition:e?ct._createAfter(t):ct._createBefore(t),direction:e?"forward":"backward"});for(let o of i){if(o.item.is("element","br"))return null;if(this._isInlineObjectElement(o.item))return o.item;if(o.item.is("containerElement"))return null;if(o.item.is("$textProxy"))return o.item}return null}_isBlockDomElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isBlockViewElement(t){return t.is("element")&&this.blockElements.includes(t.name)}_isInlineObjectElement(t){return!!t.is("element")&&(t.name=="br"||this.inlineObjectElements.includes(t.name)||!!this._inlineObjectElementMatcher.match(t))}_createViewElement(t,e){if(ta(t))return new Am(this.document,"$comment");let i=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new xn(this.document,i)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&t.is("element")&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){let e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){let i=this._domDocument.createElement("span");if(i.setAttribute(Ov,t),e){for(;e.firstChild;)i.appendChild(e.firstChild);for(let o of e.getAttributeNames())i.setAttribute(o,e.getAttribute(o))}return i}}function XP(n,t){return n.getAncestors().some(e=>e.is("element")&&t.includes(e.name))}function Pv(n,t){let e=n;for(;e;)t(e),e=e.parentElement}function Bv(n,t){let e=n.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function Rv(n){n==="script"&&gt("domconverter-unsafe-script-element-detected"),n==="style"&&gt("domconverter-unsafe-style-element-detected")}class zo extends hn(){constructor(t){super(),this._isEnabled=!1,this.view=t,this.document=t.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}let Nv=Xw(function(n,t){ur(t,qr(t),n)});class kc{constructor(t,e,i){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,Nv(this,i)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Yr extends zo{constructor(){super(...arguments),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(i,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}stopObserving(t){this.stopListening(t)}fire(t,e,i){this.isEnabled&&this.document.fire(t,new kc(this.view,e,i))}}class JP extends Yr{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(t){let e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return $r(this)}};this.fire(t.type,t,e)}}let Gb=function(){return Gi.Date.now()};var t4=/\s/;let e4=function(n){for(var t=n.length;t--&&t4.test(n.charAt(t)););return t};var i4=/^\s+/;let n4=function(n){return n&&n.slice(0,e4(n)+1).replace(i4,"")};var o4=/^[-+]0x[0-9a-f]+$/i,r4=/^0b[01]+$/i,s4=/^0o[0-7]+$/i,a4=parseInt;let Lv=function(n){if(typeof n=="number")return n;if(km(n))return NaN;if(Yt(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=Yt(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=n4(n);var e=r4.test(n);return e||s4.test(n)?a4(n.slice(2),e?2:8):o4.test(n)?NaN:+n};var c4=Math.max,l4=Math.min;let wc=function(n,t,e){var i,o,s,d,u,p,g=0,b=!1,_=!1,v=!0;if(typeof n!="function")throw new TypeError("Expected a function");function C(V){var W=i,J=o;return i=o=void 0,g=V,d=n.apply(J,W)}function E(V){var W=V-p;return p===void 0||W>=t||W<0||_&&V-g>=s}function S(){var V=Gb();if(E(V))return O(V);u=setTimeout(S,function(W){var J=t-(W-p);return _?l4(J,s-(W-g)):J}(V))}function O(V){return u=void 0,v&&i?C(V):(i=o=void 0,d)}function P(){var V=Gb(),W=E(V);if(i=arguments,o=this,p=V,W){if(u===void 0)return function(J){return g=J,u=setTimeout(S,t),b?C(J):d}(p);if(_)return clearTimeout(u),u=setTimeout(S,t),C(p)}return u===void 0&&(u=setTimeout(S,t)),d}return t=Lv(t)||0,Yt(e)&&(b=!!e.leading,s=(_="maxWait"in e)?c4(Lv(e.maxWait)||0,t):s,v="trailing"in e?!!e.trailing:v),P.cancel=function(){u!==void 0&&clearTimeout(u),g=0,i=p=o=u=void 0},P.flush=function(){return u===void 0?d:O(Gb())},P};class d4 extends zo{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=wc(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){let t=this.document;t.on("arrowKey",(e,i)=>{t.selection.isFake&&this.isEnabled&&i.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,i)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(i.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){let e=this.document.selection,i=new fo(e.getRanges(),{backward:e.isBackward,fake:!1});t!=It.arrowleft&&t!=It.arrowup||i.setTo(i.getFirstPosition()),t!=It.arrowright&&t!=It.arrowdown||i.setTo(i.getLastPosition());let o={oldSelection:e,newSelection:i,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}let u4=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},h4=function(n){return this.__data__.has(n)};function Dm(n){var t=-1,e=n==null?0:n.length;for(this.__data__=new Za;++t<e;)this.add(n[t])}Dm.prototype.add=Dm.prototype.push=u4,Dm.prototype.has=h4;let m4=Dm,p4=function(n,t){for(var e=-1,i=n==null?0:n.length;++e<i;)if(t(n[e],e,n))return!0;return!1},f4=function(n,t){return n.has(t)},Fv=function(n,t,e,i,o,s){var d=1&e,u=n.length,p=t.length;if(u!=p&&!(d&&p>u))return!1;var g=s.get(n),b=s.get(t);if(g&&b)return g==t&&b==n;var _=-1,v=!0,C=2&e?new m4:void 0;for(s.set(n,t),s.set(t,n);++_<u;){var E=n[_],S=t[_];if(i)var O=d?i(S,E,_,t,n,s):i(E,S,_,n,t,s);if(O!==void 0){if(O)continue;v=!1;break}if(C){if(!p4(t,function(P,V){if(!f4(C,V)&&(E===P||o(E,P,e,i,s)))return C.push(V)})){v=!1;break}}else if(E!==S&&!o(E,S,e,i,s)){v=!1;break}}return s.delete(n),s.delete(t),v},g4=function(n){var t=-1,e=Array(n.size);return n.forEach(function(i,o){e[++t]=[o,i]}),e},b4=function(n){var t=-1,e=Array(n.size);return n.forEach(function(i){e[++t]=i}),e};var zv=hi?hi.prototype:void 0,$b=zv?zv.valueOf:void 0;let _4=function(n,t,e,i,o,s,d){switch(e){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(n.byteLength!=t.byteLength||!s(new Ys(n),new Ys(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return un(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var u=g4;case"[object Set]":var p=1&i;if(u||(u=b4),n.size!=t.size&&!p)return!1;var g=d.get(n);if(g)return g==t;i|=2,d.set(n,t);var b=Fv(u(n),u(t),i,o,s,d);return d.delete(n),b;case"[object Symbol]":if($b)return $b.call(n)==$b.call(t)}return!1};var k4=Object.prototype.hasOwnProperty;let w4=function(n,t,e,i,o,s){var d=1&e,u=nd(n),p=u.length;if(p!=nd(t).length&&!d)return!1;for(var g=p;g--;){var b=u[g];if(!(d?b in t:k4.call(t,b)))return!1}var _=s.get(n),v=s.get(t);if(_&&v)return _==t&&v==n;var C=!0;s.set(n,t),s.set(t,n);for(var E=d;++g<p;){var S=n[b=u[g]],O=t[b];if(i)var P=d?i(O,S,b,t,n,s):i(S,O,b,n,t,s);if(!(P===void 0?S===O||o(S,O,e,i,s):P)){C=!1;break}E||(E=b=="constructor")}if(C&&!E){var V=n.constructor,W=t.constructor;V==W||!("constructor"in n)||!("constructor"in t)||typeof V=="function"&&V instanceof V&&typeof W=="function"&&W instanceof W||(C=!1)}return s.delete(n),s.delete(t),C};var jv="[object Arguments]",Vv="[object Array]",Mm="[object Object]",Uv=Object.prototype.hasOwnProperty;let v4=function(n,t,e,i,o,s){var d=Ni(n),u=Ni(t),p=d?Vv:Ks(n),g=u?Vv:Ks(t),b=(p=p==jv?Mm:p)==Mm,_=(g=g==jv?Mm:g)==Mm,v=p==g;if(v&&qs(n)){if(!qs(t))return!1;d=!0,b=!1}if(v&&!b)return s||(s=new dr),d||td(n)?Fv(n,t,e,i,o,s):_4(n,t,p,e,i,o,s);if(!(1&e)){var C=b&&Uv.call(n,"__wrapped__"),E=_&&Uv.call(t,"__wrapped__");if(C||E){var S=C?n.value():n,O=E?t.value():t;return s||(s=new dr),o(S,O,e,i,s)}}return!!v&&(s||(s=new dr),w4(n,t,e,i,o,s))},Im=function n(t,e,i,o,s){return t===e||(t==null||e==null||!$i(t)&&!$i(e)?t!=t&&e!=e:v4(t,e,i,o,n,s))},y4=function(n,t,e){var i=(e=typeof e=="function"?e:void 0)?e(n,t):void 0;return i===void 0?Im(n,t,void 0,e):!!i};class Hv extends zo{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.add(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}stopObserving(t){if(this._domElements.delete(t),this.isEnabled){this._mutationObserver.disconnect();for(let e of this._domElements)this._mutationObserver.observe(e,this._config)}}enable(){super.enable();for(let t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;let e=this.domConverter,i=new Set,o=new Set;for(let d of t){let u=e.mapDomToView(d.target);u&&(u.is("uiElement")||u.is("rawElement")||d.type!=="childList"||this._isBogusBrMutation(d)||o.add(u))}for(let d of t){let u=e.mapDomToView(d.target);if((!u||!u.is("uiElement")&&!u.is("rawElement"))&&d.type==="characterData"){let p=e.findCorrespondingViewText(d.target);p&&!o.has(p.parent)?i.add(p):!p&&En(d.target)&&o.add(e.mapDomToView(d.target.parentNode))}}let s=!1;for(let d of i)s=!0,this.renderer.markToSync("text",d);for(let d of o){let u=e.mapViewToDom(d),p=Array.from(d.getChildren()),g=Array.from(e.domChildrenToView(u,{withChildren:!1}));y4(p,g,C4)||(s=!0,this.renderer.markToSync("children",d))}s&&this.view.forceRender()}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function C4(n,t){if(!Array.isArray(n))return n===t||!(!n.is("$text")||!t.is("$text"))&&n.data===t.data}class Sm extends Yr{constructor(t){super(t),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;let e=this.document;e.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),t.change(()=>{})},50)}),e.on("blur",(i,o)=>{let s=e.selection.editableElement;s!==null&&s!==o.target||(e.isFocused=!1,this._isFocusChanging=!1,t.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class A4 extends zo{constructor(t){super(t),this.mutationObserver=t.getObserver(Hv),this.focusObserver=t.getObserver(Sm),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=wc(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=wc(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){let e=t.ownerDocument,i=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",i,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",i,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",i,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",(o,s)=>{this.document.isComposing&&!y.isAndroid||(this._handleSelectionChange(s,e),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(e))}stopObserving(t){this.stopListening(t)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(t,e){if(!this.isEnabled)return;let i=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(i.anchorNode))return;this.mutationObserver.flush();let o=this.domConverter.domSelectionToView(i);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(o)||!this.domConverter.isDomSelectionCorrect(i))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(o))this.view.forceRender();else{let s={oldSelection:this.selection,newSelection:o,domSelection:i};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class x4 extends Yr{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];let e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class qv{constructor(t,e={}){this._files=e.cacheFiles?Wv(t):null,this._native=t}get files(){return this._files||(this._files=Wv(this._native)),this._files}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}setDragImage(t,e,i){this._native.setDragImage(t,e,i)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Wv(n){let t=Array.from(n.files||[]),e=Array.from(n.items||[]);return t.length?t:e.filter(i=>i.kind==="file").map(i=>i.getAsFile())}class E4 extends Yr{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(t){let e=t.getTargetRanges(),i=this.view,o=i.document,s=null,d=null,u=[];if(t.dataTransfer&&(s=new qv(t.dataTransfer)),t.data!==null?d=t.data:s&&(d=s.getData("text/plain")),o.selection.isFake)u=Array.from(o.selection.getRanges());else if(e.length)u=e.map(p=>{let g=i.domConverter.domPositionToView(p.startContainer,p.startOffset),b=i.domConverter.domPositionToView(p.endContainer,p.endOffset);return g?i.createRange(g,b):b?i.createRange(b):void 0}).filter(p=>!!p);else if(y.isAndroid){let p=t.target.ownerDocument.defaultView.getSelection();u=Array.from(i.domConverter.domSelectionToView(p).getRanges())}if(y.isAndroid&&t.inputType=="insertCompositionText"&&d&&d.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[i.createRange(u[0].end)]});else if(t.inputType=="insertText"&&d&&d.includes(`
`)){let p=d.split(/\n{1,2}/g),g=u;for(let b=0;b<p.length;b++){let _=p[b];_!=""&&(this.fire(t.type,t,{data:_,dataTransfer:s,targetRanges:g,inputType:t.inputType,isComposing:t.isComposing}),g=[o.selection.getFirstRange()]),b+1<p.length&&(this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:g}),g=[o.selection.getFirstRange()])}}else this.fire(t.type,t,{data:d,dataTransfer:s,targetRanges:u,inputType:t.inputType,isComposing:t.isComposing})}}class D4 extends zo{constructor(t){super(t),this.document.on("keydown",(e,i)=>{if(this.isEnabled&&((o=i.keyCode)==It.arrowright||o==It.arrowleft||o==It.arrowup||o==It.arrowdown)){let s=new bc(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(s,i),s.stop.called&&e.stop()}var o})}observe(){}stopObserving(){}}class M4 extends zo{constructor(t){super(t);let e=this.document;e.on("keydown",(i,o)=>{if(!this.isEnabled||o.keyCode!=It.tab||o.ctrlKey)return;let s=new bc(e,"tab",e.selection.getFirstRange());e.fire(s,o),s.stop.called&&i.stop()})}observe(){}stopObserving(){}}let bo=function(n){return Qs(n,5)};class I4 extends ce(){constructor(t){super(),this.domRoots=new Map,this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this.document=new Cm(t),this.domConverter=new Em(this.document),this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new WP(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting","isComposing").to(this.document,"isFocused","isSelecting","isComposing"),this._writer=new wv(this.document),this.addObserver(Hv),this.addObserver(Sm),this.addObserver(A4),this.addObserver(JP),this.addObserver(d4),this.addObserver(x4),this.addObserver(D4),this.addObserver(E4),this.addObserver(M4),this.document.on("arrowKey",HP,{priority:"low"}),FP(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0}),y.isiOS&&this.listenTo(this.document,"blur",(e,i)=>{this.domConverter.mapDomToView(i.domEvent.relatedTarget)||this.domConverter._clearDomSelection()})}attachDomRoot(t,e="main"){let i=this.document.getRoot(e);i._name=t.tagName.toLowerCase();let o={};for(let{name:d,value:u}of Array.from(t.attributes))o[d]=u,d==="class"?this._writer.addClass(u.split(" "),i):this._writer.setAttribute(d,u,i);this._initialDomRootAttributes.set(t,o);let s=()=>{this._writer.setAttribute("contenteditable",(!i.isReadOnly).toString(),i),i.isReadOnly?this._writer.addClass("ck-read-only",i):this._writer.removeClass("ck-read-only",i)};s(),this.domRoots.set(e,t),this.domConverter.bindElements(t,i),this._renderer.markToSync("children",i),this._renderer.markToSync("attributes",i),this._renderer.domDocuments.add(t.ownerDocument),i.on("change:children",(d,u)=>this._renderer.markToSync("children",u)),i.on("change:attributes",(d,u)=>this._renderer.markToSync("attributes",u)),i.on("change:text",(d,u)=>this._renderer.markToSync("text",u)),i.on("change:isReadOnly",()=>this.change(s)),i.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(let d of this._observers.values())d.observe(t,e)}detachDomRoot(t){let e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:o})=>e.removeAttribute(o));let i=this._initialDomRootAttributes.get(e);for(let o in i)e.setAttribute(o,i[o]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e);for(let o of this._observers.values())o.stopObserving(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(let[i,o]of this.domRoots)e.observe(o,i);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(let t of this._observers.values())t.disable()}enableObservers(){for(let t of this._observers.values())t.enable()}scrollToTheSelection({alignToTop:t,forceScroll:e,viewportOffset:i=20,ancestorOffset:o=20}={}){let s=this.document.selection.getFirstRange();if(!s)return;let d=bo({alignToTop:t,forceScroll:e,viewportOffset:i,ancestorOffset:o});typeof i=="number"&&(i={top:i,bottom:i,left:i,right:i});let u={target:this.domConverter.viewRangeToDom(s),viewportOffset:i,ancestorOffset:o,alignToTop:t,forceScroll:e};this.fire("scrollToTheSelection",u,d),function({target:p,viewportOffset:g=0,ancestorOffset:b=0,alignToTop:_,forceScroll:v}){let C=mc(p),E=C,S=null;for(g=function(O){return typeof O=="number"?{top:O,bottom:O,left:O,right:O}:O}(g);E;){let O;O=wb(E==C?p:S),kb({parent:O,getRect:()=>fm(p,E),alignToTop:_,ancestorOffset:b,forceScroll:v});let P=fm(p,E);if(dm({window:E,rect:P,viewportOffset:g,alignToTop:_,forceScroll:v}),E.parent!=E){if(S=E.frameElement,E=E.parent,!S)return}else E=null}}(u)}focus(){if(!this.document.isFocused){let t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new L("cannot-change-view-tree",this);try{if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;let e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}catch(e){L.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.getObserver(Sm).flush(),this.change(()=>{})}destroy(){for(let t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return ct._createAt(t,e)}createPositionAfter(t){return ct._createAfter(t)}createPositionBefore(t){return ct._createBefore(t)}createRange(t,e){return new zt(t,e)}createRangeOn(t){return zt._createOn(t)}createRangeIn(t){return zt._createIn(t)}createSelection(...t){return new fo(...t)}_disableRendering(t){this._renderingDisabled=t,t==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class Qr{is(){throw new Error("is() method is abstract")}}class ca extends Qr{constructor(t){super(),this.parent=null,this._attrs=No(t)}get document(){return null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))===null)throw new L("model-node-not-found-in-parent",this);return t}get startOffset(){let t;if(!this.parent)return null;if((t=this.parent.getChildStartOffset(this))===null)throw new L("model-node-not-found-in-parent",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){let t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){let t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.parent!==null&&this.root.isAttached()}getPath(){let t=[],e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={}){let e=[],i=t.includeSelf?this:this.parent;for(;i;)e[t.parentFirst?"push":"unshift"](i),i=i.parent;return e}getCommonAncestor(t,e={}){let i=this.getAncestors(e),o=t.getAncestors(e),s=0;for(;i[s]==o[s]&&i[s];)s++;return s===0?null:i[s-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;let e=this.getPath(),i=t.getPath(),o=Ei(e,i);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<i[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){let t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((e,i)=>(e[i[0]]=i[1],e),{})),t}_clone(t){return new this.constructor(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=No(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}ca.prototype.is=function(n){return n==="node"||n==="model:node"};class Ed{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){let e=this._nodes.indexOf(t);return e==-1?null:e}getNodeStartOffset(t){let e=this.getNodeIndex(t);return e===null?null:this._nodes.slice(0,e).reduce((i,o)=>i+o.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;let e=this._nodes[t];if(!e)throw new L("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(let i of this._nodes){if(t>=e&&t<e+i.offsetSize)return this.getNodeIndex(i);e+=i.offsetSize}if(e!=t)throw new L("model-nodelist-offset-out-of-bounds",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(let i of e)if(!(i instanceof ca))throw new L("model-nodelist-insertnodes-not-node",this);this._nodes=function(i,o,s,d){if(Math.max(o.length,i.length)>1e4)return i.slice(0,s).concat(o).concat(i.slice(s+d,i.length));{let u=Array.from(i);return u.splice(s,d,...o),u}}(this._nodes,Array.from(e),t,0)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class Le extends ca{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){let t=super.toJSON();return t.data=this.data,t}_clone(){return new Le(this.data,this.getAttributes())}static fromJSON(t){return new Le(t.data,t.attributes)}}Le.prototype.is=function(n){return n==="$text"||n==="model:$text"||n==="text"||n==="model:text"||n==="node"||n==="model:node"};class _o extends Qr{constructor(t,e,i){if(super(),this.textNode=t,e<0||e>t.offsetSize)throw new L("model-textproxy-wrong-offsetintext",this);if(i<0||e+i>t.offsetSize)throw new L("model-textproxy-wrong-length",this);this.data=t.data.substring(e,e+i),this.offsetInText=e}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){let t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={}){let e=[],i=t.includeSelf?this:this.parent;for(;i;)e[t.parentFirst?"push":"unshift"](i),i=i.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}_o.prototype.is=function(n){return n==="$textProxy"||n==="model:$textProxy"||n==="textProxy"||n==="model:textProxy"};class Se extends ca{constructor(t,e,i){super(e),this._children=new Ed,this.name=t,i&&this._insertChild(0,i)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(let i of t)e=e.getChild(e.offsetToIndex(i));return e}findAncestor(t,e={}){let i=e.includeSelf?this:this.parent;for(;i;){if(i.name===t)return i;i=i.parent}return null}toJSON(){let t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(let e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){let e=t?Array.from(this._children).map(i=>i._clone(!0)):void 0;return new Se(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){let i=function(o){return typeof o=="string"?[new Le(o)]:(Ri(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new Le(s):s instanceof _o?new Le(s.data,s.getAttributes()):s))}(e);for(let o of i)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(t,i)}_removeChildren(t,e=1){let i=this._children._removeNodes(t,e);for(let o of i)o.parent=null;return i}static fromJSON(t){let e;if(t.children){e=[];for(let i of t.children)i.name?e.push(Se.fromJSON(i)):e.push(Le.fromJSON(i))}return new Se(t.name,t.attributes,e)}}Se.prototype.is=function(n,t){return t?t===this.name&&(n==="element"||n==="model:element"):n==="element"||n==="model:element"||n==="node"||n==="model:node"};class fr{constructor(t){if(!t||!t.boundaries&&!t.startPosition)throw new L("model-tree-walker-no-start-position",null);let e=t.direction||"forward";if(e!="forward"&&e!="backward")throw new L("model-tree-walker-unknown-direction",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this._position=t.startPosition.clone():this._position=tt._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,i,o,s;do o=this.position,s=this._visitedParent,{done:e,value:i}=this.next();while(!e&&t(i));e||(this._position=o,this._visitedParent=s)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position,e=this.position.clone(),i=this._visitedParent;if(i.parent===null&&e.offset===i.maxOffset)return{done:!0,value:void 0};if(i===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o=Dd(e,i),s=o||Gv(e,i,o);if(s instanceof Se){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e.path.push(0),this._visitedParent=s;return this._position=e,la("elementStart",s,t,e,1)}if(s instanceof Le){let d;if(this.singleCharacters)d=1;else{let g=s.endOffset;this._boundaryEndParent==i&&this.boundaries.end.offset<g&&(g=this.boundaries.end.offset),d=g-e.offset}let u=e.offset-s.startOffset,p=new _o(s,u,d);return e.offset+=d,this._position=e,la("text",p,t,e,d)}return e.path.pop(),e.offset++,this._position=e,this._visitedParent=i.parent,this.ignoreElementEnd?this._next():la("elementEnd",i,t,e)}_previous(){let t=this.position,e=this.position.clone(),i=this._visitedParent;if(i.parent===null&&e.offset===0)return{done:!0,value:void 0};if(i==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o=e.parent,s=Dd(e,o),d=s||$v(e,o,s);if(d instanceof Se)return e.offset--,this.shallow?(this._position=e,la("elementStart",d,t,e,1)):(e.path.push(d.maxOffset),this._position=e,this._visitedParent=d,this.ignoreElementEnd?this._previous():la("elementEnd",d,t,e));if(d instanceof Le){let u;if(this.singleCharacters)u=1;else{let b=d.startOffset;this._boundaryStartParent==i&&this.boundaries.start.offset>b&&(b=this.boundaries.start.offset),u=e.offset-b}let p=e.offset-d.startOffset,g=new _o(d,p-u,u);return e.offset-=u,this._position=e,la("text",g,t,e,u)}return e.path.pop(),this._position=e,this._visitedParent=i.parent,la("elementStart",i,t,e,1)}}function la(n,t,e,i,o){return{done:!1,value:{type:n,item:t,previousPosition:e,nextPosition:i,length:o}}}class tt extends Qr{constructor(t,e,i="toNone"){if(super(),!t.is("element")&&!t.is("documentFragment"))throw new L("model-position-root-invalid",t);if(!(e instanceof Array)||e.length===0)throw new L("model-position-path-incorrect-format",t,{path:e});t.is("rootElement")?e=e.slice():(e=[...t.getPath(),...e],t=t.root),this.root=t,this.path=e,this.stickiness=i}get offset(){return this.path[this.path.length-1]}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(t=t.getChild(t.offsetToIndex(this.path[e])),!t)throw new L("model-position-path-incorrect",this,{position:this});if(t.is("$text"))throw new L("model-position-path-incorrect",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Dd(this,this.parent)}get nodeAfter(){let t=this.parent;return Gv(this,t,Dd(this,t))}get nodeBefore(){let t=this.parent;return $v(this,t,Dd(this,t))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";let e=Ei(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;let i=new fr(e);return i.skip(t),i.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){let t=this.parent;return t.is("documentFragment")?[t]:t.getAncestors({includeSelf:!0})}findAncestor(t){let e=this.parent;return e.is("element")?e.findAncestor(t,{includeSelf:!0}):null}getCommonPath(t){if(this.root!=t.root)return[];let e=Ei(this.path,t.path),i=typeof e=="string"?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,i)}getCommonAncestor(t){let e=this.getAncestors(),i=t.getAncestors(),o=0;for(;e[o]==i[o]&&e[o];)o++;return o===0?null:e[o-1]}getShiftedBy(t){let e=this.clone(),i=e.offset+t;return e.offset=i<0?0:i,e}isAfter(t){return this.compareWith(t)=="after"}isBefore(t){return this.compareWith(t)=="before"}isEqual(t){return this.compareWith(t)=="same"}isTouching(t){if(this.root!==t.root)return!1;let e=Math.min(this.path.length,t.path.length);for(let i=0;i<e;i++){let o=this.path[i]-t.path[i];if(o<-1||o>1)return!1;if(o===1)return Kv(t,this,i);if(o===-1)return Kv(this,t,i)}return this.path.length===t.path.length||(this.path.length>t.path.length?Kb(this.path,e):Kb(t.path,e))}hasSameParentAs(t){return this.root!==t.root?!1:Ei(this.getParentPath(),t.getParentPath())=="same"}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=tt._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){let e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){let e=t.movedRange,i;return e.containsPosition(this)||e.start.isEqual(this)?(i=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(i=i._getTransformedByDeletion(t.deletionPosition,1))):i=this.isEqual(t.deletionPosition)?tt._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),i}_getTransformedByDeletion(t,e){let i=tt._createAt(this);if(this.root!=t.root)return i;if(Ei(t.getParentPath(),this.getParentPath())=="same"){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;i.offset-=e}}else if(Ei(t.getParentPath(),this.getParentPath())=="prefix"){let o=t.path.length-1;if(t.offset<=this.path[o]){if(t.offset+e>this.path[o])return null;i.path[o]-=e}}return i}_getTransformedByInsertion(t,e){let i=tt._createAt(this);if(this.root!=t.root)return i;if(Ei(t.getParentPath(),this.getParentPath())=="same")(t.offset<this.offset||t.offset==this.offset&&this.stickiness!="toPrevious")&&(i.offset+=e);else if(Ei(t.getParentPath(),this.getParentPath())=="prefix"){let o=t.path.length-1;t.offset<=this.path[o]&&(i.path[o]+=e)}return i}_getTransformedByMove(t,e,i){if(e=e._getTransformedByDeletion(t,i),t.isEqual(e))return tt._createAt(this);let o=this._getTransformedByDeletion(t,i);return o===null||t.isEqual(this)&&this.stickiness=="toNext"||t.getShiftedBy(i).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(t,e):o._getTransformedByInsertion(e,i)}_getCombined(t,e){let i=t.path.length-1,o=tt._createAt(e);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[i]-t.offset,o.path=[...o.path,...this.path.slice(i+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,i="toNone"){if(t instanceof tt)return new tt(t.root,t.path,t.stickiness);{let o=t;if(e=="end")e=o.maxOffset;else{if(e=="before")return this._createBefore(o,i);if(e=="after")return this._createAfter(o,i);if(e!==0&&!e)throw new L("model-createpositionat-offset-required",[this,t])}if(!o.is("element")&&!o.is("documentFragment"))throw new L("model-position-parent-incorrect",[this,t]);let s=o.getPath();return s.push(e),new this(o.root,s,i)}}static _createAfter(t,e){if(!t.parent)throw new L("model-position-after-root",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new L("model-position-before-root",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if(t.root==="$graveyard"){let i=new tt(e.graveyard,t.path);return i.stickiness=t.stickiness,i}if(!e.getRoot(t.root))throw new L("model-position-fromjson-no-root",e,{rootName:t.root});return new tt(e.getRoot(t.root),t.path,t.stickiness)}}function Dd(n,t){let e=t.getChild(t.offsetToIndex(n.offset));return e&&e.is("$text")&&e.startOffset<n.offset?e:null}function Gv(n,t,e){return e!==null?null:t.getChild(t.offsetToIndex(n.offset))}function $v(n,t,e){return e!==null?null:t.getChild(t.offsetToIndex(n.offset)-1)}function Kv(n,t,e){return e+1!==n.path.length&&!!Kb(t.path,e+1)&&!!function(i,o){let s=i.parent,d=i.path.length-1,u=0;for(;d>=o;){if(i.path[d]+u!==s.maxOffset)return!1;u=1,d--,s=s.parent}return!0}(n,e+1)}function Kb(n,t){for(;t<n.length;){if(n[t]!==0)return!1;t++}return!0}tt.prototype.is=function(n){return n==="position"||n==="model:position"};class $ extends Qr{constructor(t,e){super(),this.start=tt._createAt(t),this.end=e?tt._createAt(e):tt._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*ni(new fr({boundaries:this,ignoreElementEnd:!0}))}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return Ei(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);let i=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return i&&o}containsItem(t){let e=tt._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){let e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new $(this.start,t.start)),this.containsPosition(t.end)&&e.push(new $(t.end,this.end))):e.push(new $(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,i=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(i=t.end),new $(e,i)}return null}getJoined(t,e=!1){let i=this.isIntersecting(t);if(i||(i=this.start.isBefore(t.start)?e?this.end.isTouching(t.start):this.end.isEqual(t.start):e?t.end.isTouching(this.start):t.end.isEqual(this.start)),!i)return null;let o=this.start,s=this.end;return t.start.isBefore(o)&&(o=t.start),t.end.isAfter(s)&&(s=t.end),new $(o,s)}getMinimalFlatRanges(){let t=[],e=this.start.getCommonPath(this.end).length,i=tt._createAt(this.start),o=i.parent;for(;i.path.length>e+1;){let s=o.maxOffset-i.offset;s!==0&&t.push(new $(i,i.getShiftedBy(s))),i.path=i.path.slice(0,-1),i.offset++,o=o.parent}for(;i.path.length<=this.end.path.length;){let s=this.end.path[i.path.length-1],d=s-i.offset;d!==0&&t.push(new $(i,i.getShiftedBy(d))),i.offset=s,i.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new fr(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;let e=new fr(t);for(let i of e)yield i.item}*getPositions(t={}){t.boundaries=this;let e=new fr(t);yield e.position;for(let i of e)yield i.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new $(this.start,this.end)]}getTransformedByOperations(t){let e=[new $(this.start,this.end)];for(let i of t)for(let o=0;o<e.length;o++){let s=e[o].getTransformedByOperation(i);e.splice(o,1,...s),o+=s.length-1}for(let i=0;i<e.length;i++){let o=e[i];for(let s=i+1;s<e.length;s++){let d=e[s];(o.containsRange(d)||d.containsRange(o)||o.isEqual(d))&&e.splice(s,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return t&&t.is("element")&&t===e?t:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){let i=t.sourcePosition,o=t.howMany,s=t.targetPosition;return this._getTransformedByMove(i,s,o,e)}_getTransformedBySplitOperation(t){let e=this.start._getTransformedBySplitOperation(t),i=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(i=this.end.getShiftedBy(1)),e.root!=i.root&&(i=this.end.getShiftedBy(-1)),new $(e,i)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new $(this.start);let e=this.start._getTransformedByMergeOperation(t),i=this.end._getTransformedByMergeOperation(t);return e.root!=i.root&&(i=this.end.getShiftedBy(-1)),e.isAfter(i)?(t.sourcePosition.isBefore(t.targetPosition)?(e=tt._createAt(i),e.offset=0):(t.deletionPosition.isEqual(e)||(i=t.deletionPosition),e=t.targetPosition),new $(e,i)):new $(e,i)}_getTransformedByInsertion(t,e,i=!1){if(i&&this.containsPosition(t))return[new $(this.start,t),new $(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{let o=new $(this.start,this.end);return o.start=o.start._getTransformedByInsertion(t,e),o.end=o.end._getTransformedByInsertion(t,e),[o]}}_getTransformedByMove(t,e,i,o=!1){if(this.isCollapsed){let _=this.start._getTransformedByMove(t,e,i);return[new $(_)]}let s=$._createFromPositionAndShift(t,i),d=e._getTransformedByDeletion(t,i);if(this.containsPosition(e)&&!o&&(s.containsPosition(this.start)||s.containsPosition(this.end))){let _=this.start._getTransformedByMove(t,e,i),v=this.end._getTransformedByMove(t,e,i);return[new $(_,v)]}let u,p=this.getDifference(s),g=null,b=this.getIntersection(s);if(p.length==1?g=new $(p[0].start._getTransformedByDeletion(t,i),p[0].end._getTransformedByDeletion(t,i)):p.length==2&&(g=new $(this.start,this.end._getTransformedByDeletion(t,i))),u=g?g._getTransformedByInsertion(d,i,b!==null||o):[],b){let _=new $(b.start._getCombined(s.start,d),b.end._getCombined(s.start,d));u.length==2?u.splice(1,0,_):u.push(_)}return u}_getTransformedByDeletion(t,e){let i=this.start._getTransformedByDeletion(t,e),o=this.end._getTransformedByDeletion(t,e);return i==null&&o==null?null:(i==null&&(i=t),o==null&&(o=t),new $(i,o))}static _createFromPositionAndShift(t,e){let i=t,o=t.getShiftedBy(e);return e>0?new this(i,o):new this(o,i)}static _createIn(t){return new this(tt._createAt(t,0),tt._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift(tt._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(t.length===0)throw new L("range-create-from-ranges-empty-array",null);if(t.length==1)return t[0].clone();let e=t[0];t.sort((s,d)=>s.start.isAfter(d.start)?1:-1);let i=t.indexOf(e),o=new this(e.start,e.end);if(i>0)for(let s=i-1;t[s].end.isEqual(o.start);s++)o.start=tt._createAt(t[s].start);for(let s=i+1;s<t.length&&t[s].start.isEqual(o.end);s++)o.end=tt._createAt(t[s].end);return o}static fromJSON(t,e){return new this(tt.fromJSON(t.start,e),tt.fromJSON(t.end,e))}}$.prototype.is=function(n){return n==="range"||n==="model:range"};class Yv extends ve(){constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;let i=this._modelToViewMapping.get(e.modelPosition.parent);if(!i)throw new L("mapping-model-position-view-parent-not-found",this,{modelPosition:e.modelPosition});e.viewPosition=this.findPositionIn(i,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;let i=this.findMappedViewAncestor(e.viewPosition),o=this._viewToModelMapping.get(i),s=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,i);e.modelPosition=tt._createAt(o,s)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t,e={}){let i=this.toModelElement(t);if(this._elementToMarkerNames.has(t))for(let o of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(o);e.defer?this._deferredBindingRemovals.set(t,t.root):(this._viewToModelMapping.delete(t),this._modelToViewMapping.get(i)==t&&this._modelToViewMapping.delete(i))}unbindModelElement(t){let e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){let i=this._markerNameToElements.get(e)||new Set;i.add(t);let o=this._elementToMarkerNames.get(t)||new Set;o.add(e),this._markerNameToElements.set(e,i),this._elementToMarkerNames.set(t,o)}unbindElementFromMarkerName(t,e){let i=this._markerNameToElements.get(e);i&&(i.delete(t),i.size==0&&this._markerNameToElements.delete(e));let o=this._elementToMarkerNames.get(t);o&&(o.delete(e),o.size==0&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){let t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}flushDeferredBindings(){for(let[t,e]of this._deferredBindingRemovals)t.root==e&&this.unbindViewElement(t);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new $(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new zt(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){let e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={}){let i={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",i),i.viewPosition}markerNameToElements(t){let e=this._markerNameToElements.get(t);if(!e)return null;let i=new Set;for(let o of e)if(o.is("attributeElement"))for(let s of o.getElementsWithSameId())i.add(s);else i.add(o);return i}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,i){if(i!=t)return this._toModelOffset(t.parent,t.index,i)+this._toModelOffset(t,e,t);if(t.is("$text"))return e;let o=0;for(let s=0;s<e;s++)o+=this.getModelLength(t.getChild(s));return o}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name))return this._viewToModelLengthCallbacks.get(t.name)(t);if(this._viewToModelMapping.has(t))return 1;if(t.is("$text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(let i of t.getChildren())e+=this.getModelLength(i);return e}}findPositionIn(t,e){let i,o=0,s=0,d=0;if(t.is("$text"))return new ct(t,e);for(;s<e;)i=t.getChild(d),o=this.getModelLength(i),s+=o,d++;return s==e?this._moveViewPositionToTextNode(new ct(t,d)):this.findPositionIn(i,e-(s-o))}_moveViewPositionToTextNode(t){let e=t.nodeBefore,i=t.nodeAfter;return e instanceof Ne?new ct(e,e.data.length):i instanceof Ne?new ct(i,0):t}}class S4{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=Tm(e),t instanceof _o&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=Tm(e),t instanceof _o&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=Tm(e),t instanceof _o&&(t=this._getSymbolForTextProxy(t));let i=this._consumable.get(t);if(i===void 0)return null;let o=i.get(e);return o===void 0?null:o}revert(t,e){e=Tm(e),t instanceof _o&&(t=this._getSymbolForTextProxy(t));let i=this.test(t,e);return i===!1?(this._consumable.get(t).set(e,!0),!0):i!==!0&&null}verifyAllConsumed(t){let e=[];for(let[i,o]of this._consumable)for(let[s,d]of o){let u=s.split(":")[0];d&&t==u&&e.push({event:s,item:i.name||i.description})}if(e.length)throw new L("conversion-model-consumable-not-consumed",null,{items:e})}_getSymbolForTextProxy(t){let e=null,i=this._textProxyRegistry.get(t.startOffset);if(i){let o=i.get(t.endOffset);o&&(e=o.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t)),e}_addSymbolForTextProxy(t){let e=t.startOffset,i=t.endOffset,o=t.parent,s=Symbol("$textProxy:"+t.data),d,u;return d=this._textProxyRegistry.get(e),d||(d=new Map,this._textProxyRegistry.set(e,d)),u=d.get(i),u||(u=new Map,d.set(i,u)),u.set(o,s),s}}function Tm(n){let t=n.split(":");return t[0]=="insert"?t[0]:t[0]=="addMarker"||t[0]=="removeMarker"?n:t.length>1?t[0]+":"+t[1]:t[0]}var T4=Object.defineProperty,O4=Object.defineProperties,P4=Object.getOwnPropertyDescriptors,Qv=Object.getOwnPropertySymbols,B4=Object.prototype.hasOwnProperty,R4=Object.prototype.propertyIsEnumerable,Zv=(n,t,e)=>t in n?T4(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Yb=(n,t)=>{for(var e in t||(t={}))B4.call(t,e)&&Zv(n,e,t[e]);if(Qv)for(var e of Qv(t))R4.call(t,e)&&Zv(n,e,t[e]);return n},Xv=(n,t)=>O4(n,P4(t));class Jv extends ve(){constructor(t){super(),this._conversionApi=Yb({dispatcher:this},t),this._firedEventsMap=new WeakMap}convertChanges(t,e,i){let o=this._createConversionApi(i,t.getRefreshedItems());for(let d of t.getMarkersToRemove())this._convertMarkerRemove(d.name,d.range,o);let s=this._reduceChanges(t.getChanges());for(let d of s)d.type==="insert"?this._convertInsert($._createFromPositionAndShift(d.position,d.length),o):d.type==="reinsert"?this._convertReinsert($._createFromPositionAndShift(d.position,d.length),o):d.type==="remove"?this._convertRemove(d.position,d.length,d.name,o):this._convertAttribute(d.range,d.attributeKey,d.attributeOldValue,d.attributeNewValue,o);o.mapper.flushDeferredBindings();for(let d of o.mapper.flushUnboundMarkerNames()){let u=e.get(d).getRange();this._convertMarkerRemove(d,u,o),this._convertMarkerAdd(d,u,o)}for(let d of t.getMarkersToAdd())this._convertMarkerAdd(d.name,d.range,o);o.consumable.verifyAllConsumed("insert")}convert(t,e,i,o={}){let s=this._createConversionApi(i,void 0,o);this._convertInsert(t,s);for(let[d,u]of e)this._convertMarkerAdd(d,u,s);s.consumable.verifyAllConsumed("insert")}convertSelection(t,e,i){let o=this._createConversionApi(i);this.fire("cleanSelection",{selection:t},o);let s=t.getFirstPosition().root;if(!o.mapper.toViewElement(s))return;let d=Array.from(e.getMarkersAtPosition(t.getFirstPosition()));if(this._addConsumablesForSelection(o.consumable,t,d),this.fire("selection",{selection:t},o),t.isCollapsed){for(let u of d)if(o.consumable.test(t,"addMarker:"+u.name)){let p=u.getRange();if(!N4(t.getFirstPosition(),u,o.mapper))continue;let g={item:t,markerName:u.name,markerRange:p};this.fire(`addMarker:${u.name}`,g,o)}for(let u of t.getAttributeKeys())if(o.consumable.test(t,"attribute:"+u)){let p={item:t,range:t.getFirstRange(),attributeKey:u,attributeOldValue:null,attributeNewValue:t.getAttribute(u)};this.fire(`attribute:${u}:$text`,p,o)}}}_convertInsert(t,e,i={}){i.doNotAddConsumables||this._addConsumablesForInsert(e.consumable,t);for(let o of Array.from(t.getWalker({shallow:!0})).map(ty))this._testAndFire("insert",o,e)}_convertRemove(t,e,i,o){this.fire(`remove:${i}`,{position:t,length:e},o)}_convertAttribute(t,e,i,o,s){this._addConsumablesForRange(s.consumable,t,`attribute:${e}`);for(let d of t){let u={item:d.item,range:$._createFromPositionAndShift(d.previousPosition,d.length),attributeKey:e,attributeOldValue:i,attributeNewValue:o};this._testAndFire(`attribute:${e}`,u,s)}}_convertReinsert(t,e){let i=Array.from(t.getWalker({shallow:!0}));this._addConsumablesForInsert(e.consumable,i);for(let o of i.map(ty))this._testAndFire("insert",Xv(Yb({},o),{reconversion:!0}),e)}_convertMarkerAdd(t,e,i){if(e.root.rootName=="$graveyard")return;let o=`addMarker:${t}`;if(i.consumable.add(e,o),this.fire(o,{markerName:t,markerRange:e},i),i.consumable.consume(e,o)){this._addConsumablesForRange(i.consumable,e,o);for(let s of e.getItems()){if(!i.consumable.test(s,o))continue;let d={item:s,range:$._createOn(s),markerName:t,markerRange:e};this.fire(o,d,i)}}}_convertMarkerRemove(t,e,i){e.root.rootName!="$graveyard"&&this.fire(`removeMarker:${t}`,{markerName:t,markerRange:e},i)}_reduceChanges(t){let e={changes:t};return this.fire("reduceChanges",e),e.changes}_addConsumablesForInsert(t,e){for(let i of e){let o=i.item;if(t.test(o,"insert")===null){t.add(o,"insert");for(let s of o.getAttributeKeys())t.add(o,"attribute:"+s)}}return t}_addConsumablesForRange(t,e,i){for(let o of e.getItems())t.add(o,i);return t}_addConsumablesForSelection(t,e,i){t.add(e,"selection");for(let o of i)t.add(e,"addMarker:"+o.name);for(let o of e.getAttributeKeys())t.add(e,"attribute:"+o);return t}_testAndFire(t,e,i){let o=function(p,g){let b=g.item.is("element")?g.item.name:"$text";return`${p}:${b}`}(t,e),s=e.item.is("$textProxy")?i.consumable._getSymbolForTextProxy(e.item):e.item,d=this._firedEventsMap.get(i),u=d.get(s);if(u){if(u.has(o))return;u.add(o)}else d.set(s,new Set([o]));this.fire(o,e,i)}_testAndFireAddAttributes(t,e){let i={item:t,range:$._createOn(t)};for(let o of i.item.getAttributeKeys())i.attributeKey=o,i.attributeOldValue=null,i.attributeNewValue=i.item.getAttribute(o),this._testAndFire(`attribute:${o}`,i,e)}_createConversionApi(t,e=new Set,i={}){let o=Xv(Yb({},this._conversionApi),{consumable:new S4,writer:t,options:i,convertItem:s=>this._convertInsert($._createOn(s),o),convertChildren:s=>this._convertInsert($._createIn(s),o,{doNotAddConsumables:!0}),convertAttributes:s=>this._testAndFireAddAttributes(s,o),canReuseView:s=>!e.has(o.mapper.toModelElement(s))});return this._firedEventsMap.set(o,new Map),o}}function N4(n,t,e){let i=t.getRange(),o=Array.from(n.getAncestors());return o.shift(),o.reverse(),!o.some(s=>{if(i.containsItem(s))return!!e.toViewElement(s).getCustomProperty("addHighlight")})}function ty(n){return{item:n.item,range:$._createFromPositionAndShift(n.previousPosition,n.length)}}class Dn extends ve(Qr){constructor(...t){super(),this._lastRangeBackward=!1,this._attrs=new Map,this._ranges=[],t.length&&this.setTo(...t)}get anchor(){if(this._ranges.length>0){let t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){let t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(let e of this._ranges){let i=!1;for(let o of t._ranges)if(e.isEqual(o)){i=!0;break}if(!i)return!1}return!0}*getRanges(){for(let t of this._ranges)yield new $(t.start,t.end)}getFirstRange(){let t=null;for(let e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new $(t.start,t.end):null}getLastRange(){let t=null;for(let e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new $(t.start,t.end):null}getFirstPosition(){let t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){let t=this.getLastRange();return t?t.end.clone():null}setTo(...t){let[e,i,o]=t;if(typeof i=="object"&&(o=i,i=void 0),e===null)this._setRanges([]);else if(e instanceof Dn)this._setRanges(e.getRanges(),e.isBackward);else if(e&&typeof e.getRanges=="function")this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof $)this._setRanges([e],!!o&&!!o.backward);else if(e instanceof tt)this._setRanges([new $(e)]);else if(e instanceof ca){let s=!!o&&!!o.backward,d;if(i=="in")d=$._createIn(e);else if(i=="on")d=$._createOn(e);else{if(i===void 0)throw new L("model-selection-setto-required-second-parameter",[this,e]);d=new $(tt._createAt(e,i))}this._setRanges([d],s)}else{if(!Ri(e))throw new L("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,o&&!!o.backward)}}_setRanges(t,e=!1){let i=Array.from(t),o=i.some(s=>{if(!(s instanceof $))throw new L("model-selection-set-ranges-not-range",[this,t]);return this._ranges.every(d=>!d.isEqual(s))});(i.length!==this._ranges.length||o)&&(this._replaceAllRanges(i),this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0}))}setFocus(t,e){if(this.anchor===null)throw new L("model-selection-setfocus-no-ranges",[this,t]);let i=tt._createAt(t,e);if(i.compareWith(this.focus)=="same")return;let o=this.anchor;this._ranges.length&&this._popRange(),i.compareWith(o)=="before"?(this._pushRange(new $(i,o)),this._lastRangeBackward=!0):(this._pushRange(new $(o,i)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){let t=new WeakSet;for(let e of this.getRanges()){let i=iy(e.start,t);F4(i,e)&&(yield i);for(let s of e.getWalker()){let d=s.item;s.type=="elementEnd"&&L4(d,t,e)&&(yield d)}let o=iy(e.end,t);z4(o,e)&&(yield o)}}containsEntireContent(t=this.anchor.root){let e=tt._createAt(t,0),i=tt._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&i.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new $(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new L("model-selection-range-intersects",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_replaceAllRanges(t){this._removeAllRanges();for(let e of t)this._pushRange(e)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function ey(n,t){return!t.has(n)&&(t.add(n),n.root.document.model.schema.isBlock(n)&&!!n.parent)}function L4(n,t,e){return ey(n,t)&&Qb(n,e)}function iy(n,t){let e=n.parent.root.document.model.schema,i=n.parent.getAncestors({parentFirst:!0,includeSelf:!0}),o=!1,s=i.find(d=>!o&&(o=e.isLimit(d),!o&&ey(d,t)));return i.forEach(d=>t.add(d)),s}function Qb(n,t){let e=function(i){let o=i.root.document.model.schema,s=i.parent;for(;s;){if(o.isBlock(s))return s;s=s.parent}}(n);return e?!t.containsRange($._createOn(e),!0):!0}function F4(n,t){return!!n&&(!(!t.isCollapsed&&!n.isEmpty)||!t.start.isTouching(tt._createAt(n,n.maxOffset))&&Qb(n,t))}function z4(n,t){return!!n&&(!(!t.isCollapsed&&!n.isEmpty)||!t.end.isTouching(tt._createAt(n,0))&&Qb(n,t))}Dn.prototype.is=function(n){return n==="selection"||n==="model:selection"};class Mn extends ve($){constructor(t,e){super(t,e),j4.call(this)}detach(){this.stopListening()}toRange(){return new $(this.start,this.end)}static fromRange(t){return new Mn(t.start,t.end)}}function j4(){this.listenTo(this.root.document.model,"applyOperation",(n,t)=>{let e=t[0];e.isDocumentOperation&&V4.call(this,e)},{priority:"low"})}function V4(n){let t=this.getTransformedByOperation(n),e=$._createFromRanges(t),i=!e.isEqual(this),o=function(d,u){switch(u.type){case"insert":return d.containsPosition(u.position);case"move":case"remove":case"reinsert":case"merge":return d.containsPosition(u.sourcePosition)||d.start.isEqual(u.sourcePosition)||d.containsPosition(u.targetPosition);case"split":return d.containsPosition(u.splitPosition)||d.containsPosition(u.insertionPosition)}return!1}(this,n),s=null;if(i){e.root.rootName=="$graveyard"&&(s=n.type=="remove"?n.sourcePosition:n.deletionPosition);let d=this.toRange();this.start=e.start,this.end=e.end,this.fire("change:range",d,{deletionPosition:s})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:s})}Mn.prototype.is=function(n){return n==="liveRange"||n==="model:liveRange"||n=="range"||n==="model:range"};let Om="selection:";class ko extends ve(Qr){constructor(t){super(),this._selection=new U4(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(t){this._selection.observeMarkers(t)}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(...t){this._selection.setTo(...t)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return Om+t}static _isStoreAttributeKey(t){return t.startsWith(Om)}}ko.prototype.is=function(n){return n==="selection"||n=="model:selection"||n=="documentSelection"||n=="model:documentSelection"};class U4 extends Dn{constructor(t){super(),this.markers=new Yn({idProperty:"name"}),this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this._model=t.model,this._document=t,this.listenTo(this._model,"applyOperation",(e,i)=>{let o=i[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(e,i,o,s)=>{this._updateMarker(i,s)}),this.listenTo(this._document,"change",(e,i)=>{(function(o,s){let d=o.document.differ;for(let u of d.getChanges()){if(u.type!="insert")continue;let p=u.position.parent;u.length===p.maxOffset&&o.enqueueChange(s,g=>{let b=Array.from(p.getAttributeKeys()).filter(_=>_.startsWith(Om));for(let _ of b)g.removeAttribute(_,p)})}})(this._model,i)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*ni(super.getRanges()):yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...t){super.setTo(...t),this._updateAttributes(!0),this.updateMarkers()}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0),this.updateMarkers()}setAttribute(t,e){if(this._setAttribute(t,e)){let i=[t];this.fire("change:attribute",{attributeKeys:i,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){let e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){let t=Ot();return this._overriddenGravityRegister.add(t),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new L("document-selection-gravity-wrong-restore",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(t){this._observedMarkers.add(t),this.updateMarkers()}_replaceAllRanges(t){this._validateSelectionRanges(t),super._replaceAllRanges(t)}_popRange(){this._ranges.pop().detach()}_pushRange(t){let e=this._prepareRange(t);e&&this._ranges.push(e)}_validateSelectionRanges(t){for(let e of t)if(!this._document._validateSelectionRange(e))throw new L("document-selection-wrong-position",this,{range:e})}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;let e=Mn.fromRange(t);return e.on("change:range",(i,o,s)=>{if(this._hasChangedRange=!0,e.root==this._document.graveyard){this._selectionRestorePosition=s.deletionPosition;let d=this._ranges.indexOf(e);this._ranges.splice(d,1),e.detach()}}),e}updateMarkers(){if(!this._observedMarkers.size)return;let t=[],e=!1;for(let o of this._model.markers){let s=o.name.split(":",1)[0];if(!this._observedMarkers.has(s))continue;let d=o.getRange();for(let u of this.getRanges())d.containsRange(u,!u.isCollapsed)&&t.push(o)}let i=Array.from(this.markers);for(let o of t)this.markers.has(o)||(this.markers.add(o),e=!0);for(let o of Array.from(this.markers))t.includes(o)||(this.markers.remove(o),e=!0);e&&this.fire("change:marker",{oldMarkers:i,directChange:!1})}_updateMarker(t,e){let i=t.name.split(":",1)[0];if(!this._observedMarkers.has(i))return;let o=!1,s=Array.from(this.markers),d=this.markers.has(t);if(e){let u=!1;for(let p of this.getRanges())if(e.containsRange(p,!p.isCollapsed)){u=!0;break}u&&!d?(this.markers.add(t),o=!0):!u&&d&&(this.markers.remove(t),o=!0)}else d&&(this.markers.remove(t),o=!0);o&&this.fire("change:marker",{oldMarkers:s,directChange:!1})}_updateAttributes(t){let e=No(this._getSurroundingAttributes()),i=No(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(let[s,d]of this._attributePriority)d=="low"&&(this._attrs.delete(s),this._attributePriority.delete(s));this._setAttributesTo(e);let o=[];for(let[s,d]of this.getAttributes())i.has(s)&&i.get(s)===d||o.push(s);for(let[s]of i)this.hasAttribute(s)||o.push(s);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(t,e,i=!0){let o=i?"normal":"low";return o=="low"&&this._attributePriority.get(t)=="normal"?!1:super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,o),!0)}_removeAttribute(t,e=!0){let i=e?"normal":"low";return(i!="low"||this._attributePriority.get(t)!="normal")&&(this._attributePriority.set(t,i),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){let e=new Set;for(let[i,o]of this.getAttributes())t.get(i)!==o&&this._removeAttribute(i,!1);for(let[i,o]of t)this._setAttribute(i,o,!1)&&e.add(i);return e}*getStoredAttributes(){let t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(let e of t.getAttributeKeys())e.startsWith(Om)&&(yield[e.substr(10),t.getAttribute(e)])}_getSurroundingAttributes(){let t=this.getFirstPosition(),e=this._model.schema;if(t.root.rootName=="$graveyard")return null;let i=null;if(this.isCollapsed){let o=t.textNode?t.textNode:t.nodeBefore,s=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(i=Md(o,e)),i||(i=Md(s,e)),!this.isGravityOverridden&&!i){let d=o;for(;d&&!i;)d=d.previousSibling,i=Md(d,e)}if(!i){let d=s;for(;d&&!i;)d=d.nextSibling,i=Md(d,e)}i||(i=this.getStoredAttributes())}else{let o=this.getFirstRange();for(let s of o){if(s.item.is("element")&&e.isObject(s.item)){i=Md(s.item,e);break}if(s.type=="text"){i=s.item.getAttributes();break}}}return i}_fixGraveyardSelection(t){let e=this._model.schema.getNearestSelectionRange(t);e&&this._pushRange(e)}}function Md(n,t){if(!n)return null;if(n instanceof _o||n instanceof Le)return n.getAttributes();if(!t.isInline(n))return null;if(!t.isObject(n))return[];let e=[];for(let[i,o]of n.getAttributes())t.checkAttribute("$text",i)&&t.getAttributeProperties(i).copyFromObject!==!1&&e.push([i,o]);return e}class ny{constructor(t){this._dispatchers=t}add(t){for(let e of this._dispatchers)t(e);return this}}class H4 extends ny{elementToElement(t){return this.add(function(e){let i=sy(e.model),o=Id(e.view,"container");return i.attributes.length&&(i.children=!0),s=>{s.on(`insert:${i.name}`,function(d,u=W4){return(p,g,b)=>{if(!u(g.item,b.consumable,{preflight:!0}))return;let _=d(g.item,b,g);if(!_)return;u(g.item,b.consumable);let v=b.mapper.toViewPosition(g.range.start);b.mapper.bindElements(g.item,_),b.writer.insert(v,_),b.convertAttributes(g.item),uy(_,g.item.getChildren(),b,{reconversion:g.reconversion})}}(o,dy(i)),{priority:e.converterPriority||"normal"}),(i.children||i.attributes.length)&&s.on("reduceChanges",ly(i),{priority:"low"})}}(t))}elementToStructure(t){return this.add(function(e){let i=sy(e.model),o=Id(e.view,"container");return i.children=!0,s=>{if(s._conversionApi.schema.checkChild(i.name,"$text"))throw new L("conversion-element-to-structure-disallowed-text",s,{elementName:i.name});var d,u;s.on(`insert:${i.name}`,(d=o,u=dy(i),(p,g,b)=>{if(!u(g.item,b.consumable,{preflight:!0}))return;let _=new Map;b.writer._registerSlotFactory(function(E,S,O){return(P,V)=>{let W=P.createContainerElement("$slot"),J=null;if(V==="children")J=Array.from(E.getChildren());else{if(typeof V!="function")throw new L("conversion-slot-mode-unknown",O.dispatcher,{modeOrFilter:V});J=Array.from(E.getChildren()).filter(dt=>V(dt))}return S.set(W,J),W}}(g.item,_,b));let v=d(g.item,b,g);if(b.writer._clearSlotFactory(),!v)return;(function(E,S,O){let P=Array.from(S.values()).flat(),V=new Set(P);if(V.size!=P.length)throw new L("conversion-slot-filter-overlap",O.dispatcher,{element:E});if(V.size!=E.childCount)throw new L("conversion-slot-filter-incomplete",O.dispatcher,{element:E})})(g.item,_,b),u(g.item,b.consumable);let C=b.mapper.toViewPosition(g.range.start);b.mapper.bindElements(g.item,v),b.writer.insert(C,v),b.convertAttributes(g.item),function(E,S,O,P){O.mapper.on("modelToViewPosition",J,{priority:"highest"});let V=null,W=null;for([V,W]of S)uy(E,W,O,P),O.writer.move(O.writer.createRangeIn(V),O.writer.createPositionBefore(V)),O.writer.remove(V);function J(dt,Bt){let Gt=Bt.modelPosition.nodeAfter,Ue=W.indexOf(Gt);Ue<0||(Bt.viewPosition=Bt.mapper.findPositionIn(V,Ue))}O.mapper.off("modelToViewPosition",J)}(v,_,b,{reconversion:g.reconversion})}),{priority:e.converterPriority||"normal"}),s.on("reduceChanges",ly(i),{priority:"low"})}}(t))}attributeToElement(t){return this.add(function(e){e=bo(e);let i=e.model;typeof i=="string"&&(i={key:i});let o=`attribute:${i.key}`;if(i.name&&(o+=":"+i.name),i.values)for(let d of i.values)e.view[d]=Id(e.view[d],"attribute");else e.view=Id(e.view,"attribute");let s=ay(e);return d=>{d.on(o,function(u){return(p,g,b)=>{if(!b.consumable.test(g.item,p.name))return;let _=u(g.attributeOldValue,b,g),v=u(g.attributeNewValue,b,g);if(!_&&!v)return;b.consumable.consume(g.item,p.name);let C=b.writer,E=C.document.selection;if(g.item instanceof Dn||g.item instanceof ko)C.wrap(E.getFirstRange(),v);else{let S=b.mapper.toViewRange(g.range);g.attributeOldValue!==null&&_&&(S=C.unwrap(S,_)),g.attributeNewValue!==null&&v&&C.wrap(S,v)}}}(s),{priority:e.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=bo(e);let i=e.model;typeof i=="string"&&(i={key:i});let o=`attribute:${i.key}`;if(i.name&&(o+=":"+i.name),i.values)for(let d of i.values)e.view[d]=cy(e.view[d]);else e.view=cy(e.view);let s=ay(e);return d=>{var u;d.on(o,(u=s,(p,g,b)=>{if(!b.consumable.test(g.item,p.name))return;let _=u(g.attributeOldValue,b,g),v=u(g.attributeNewValue,b,g);if(!_&&!v)return;b.consumable.consume(g.item,p.name);let C=b.mapper.toViewElement(g.item),E=b.writer;if(!C)throw new L("conversion-attribute-to-attribute-on-text",b.dispatcher,g);if(g.attributeOldValue!==null&&_)if(_.key=="class"){let S=typeof _.value=="string"?_.value.split(/\s+/):_.value;for(let O of S)E.removeClass(O,C)}else if(_.key=="style")if(typeof _.value=="string"){let S=new Pb(E.document.stylesProcessor);S.setTo(_.value);for(let[O]of S.getStylesEntries())E.removeStyle(O,C)}else{let S=Object.keys(_.value);for(let O of S)E.removeStyle(O,C)}else E.removeAttribute(_.key,C);if(g.attributeNewValue!==null&&v)if(v.key=="class"){let S=typeof v.value=="string"?v.value.split(/\s+/):v.value;for(let O of S)E.addClass(O,C)}else if(v.key=="style")if(typeof v.value=="string"){let S=new Pb(E.document.stylesProcessor);S.setTo(v.value);for(let[O,P]of S.getStylesEntries())E.setStyle(O,P,C)}else{let S=Object.keys(v.value);for(let O of S)E.setStyle(O,v.value[O],C)}else E.setAttribute(v.key,v.value,C)}),{priority:e.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(e){let i=Id(e.view,"ui");return o=>{var s;o.on(`addMarker:${e.model}`,(s=i,(d,u,p)=>{u.isOpening=!0;let g=s(u,p);u.isOpening=!1;let b=s(u,p);if(!g||!b)return;let _=u.markerRange;if(_.isCollapsed&&!p.consumable.consume(_,d.name))return;for(let E of _)if(!p.consumable.consume(E.item,d.name))return;let v=p.mapper,C=p.writer;C.insert(v.toViewPosition(_.start),g),p.mapper.bindElementToMarker(g,u.markerName),_.isCollapsed||(C.insert(v.toViewPosition(_.end),b),p.mapper.bindElementToMarker(b,u.markerName)),d.stop()}),{priority:e.converterPriority||"normal"}),o.on(`removeMarker:${e.model}`,(d,u,p)=>{let g=p.mapper.markerNameToElements(u.markerName);if(g){for(let b of g)p.mapper.unbindElementFromMarkerName(b,u.markerName),p.writer.clear(p.writer.createRangeOn(b),b);p.writer.clearClonedElementsGroup(u.markerName),d.stop()}},{priority:e.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(e){return i=>{var o;i.on(`addMarker:${e.model}`,(o=e.view,(s,d,u)=>{if(!d.item||!(d.item instanceof Dn||d.item instanceof ko||d.item.is("$textProxy")))return;let p=Zb(o,d,u);if(!p||!u.consumable.consume(d.item,s.name))return;let g=u.writer,b=oy(g,p),_=g.document.selection;if(d.item instanceof Dn||d.item instanceof ko)g.wrap(_.getFirstRange(),b);else{let v=u.mapper.toViewRange(d.range),C=g.wrap(v,b);for(let E of C.getItems())if(E.is("attributeElement")&&E.isSimilar(b)){u.mapper.bindElementToMarker(E,d.markerName);break}}}),{priority:e.converterPriority||"normal"}),i.on(`addMarker:${e.model}`,function(s){return(d,u,p)=>{if(!u.item||!(u.item instanceof Se))return;let g=Zb(s,u,p);if(!g||!p.consumable.test(u.item,d.name))return;let b=p.mapper.toViewElement(u.item);if(b&&b.getCustomProperty("addHighlight")){p.consumable.consume(u.item,d.name);for(let _ of $._createIn(u.item))p.consumable.consume(_.item,d.name);b.getCustomProperty("addHighlight")(b,g,p.writer),p.mapper.bindElementToMarker(b,u.markerName)}}}(e.view),{priority:e.converterPriority||"normal"}),i.on(`removeMarker:${e.model}`,function(s){return(d,u,p)=>{if(u.markerRange.isCollapsed)return;let g=Zb(s,u,p);if(!g)return;let b=oy(p.writer,g),_=p.mapper.markerNameToElements(u.markerName);if(_){for(let v of _)p.mapper.unbindElementFromMarkerName(v,u.markerName),v.is("attributeElement")?p.writer.unwrap(p.writer.createRangeOn(v),b):v.getCustomProperty("removeHighlight")(v,g.id,p.writer);p.writer.clearClonedElementsGroup(u.markerName),d.stop()}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}markerToData(t){return this.add(function(e){e=bo(e);let i=e.model,o=e.view;return o||(o=s=>({group:i,name:s.substr(e.model.length+1)})),s=>{var d;s.on(`addMarker:${i}`,(d=o,(u,p,g)=>{let b=d(p.markerName,g);if(!b)return;let _=p.markerRange;g.consumable.consume(_,u.name)&&(ry(_,!1,g,p,b),ry(_,!0,g,p,b),u.stop())}),{priority:e.converterPriority||"normal"}),s.on(`removeMarker:${i}`,function(u){return(p,g,b)=>{let _=u(g.markerName,b);if(!_)return;let v=b.mapper.markerNameToElements(g.markerName);if(v){for(let E of v)b.mapper.unbindElementFromMarkerName(E,g.markerName),E.is("containerElement")?(C(`data-${_.group}-start-before`,E),C(`data-${_.group}-start-after`,E),C(`data-${_.group}-end-before`,E),C(`data-${_.group}-end-after`,E)):b.writer.clear(b.writer.createRangeOn(E),E);b.writer.clearClonedElementsGroup(g.markerName),p.stop()}function C(E,S){if(S.hasAttribute(E)){let O=new Set(S.getAttribute(E).split(","));O.delete(_.name),O.size==0?b.writer.removeAttribute(E,S):b.writer.setAttribute(E,Array.from(O).join(","),S)}}}}(o),{priority:e.converterPriority||"normal"})}}(t))}}function oy(n,t){let e=n.createAttributeElement("span",t.attributes);return t.classes&&e._addClass(t.classes),typeof t.priority=="number"&&(e._priority=t.priority),e._id=t.id,e}function ry(n,t,e,i,o){let s=t?n.start:n.end,d=s.nodeAfter&&s.nodeAfter.is("element")?s.nodeAfter:null,u=s.nodeBefore&&s.nodeBefore.is("element")?s.nodeBefore:null;if(d||u){let p,g;t&&d||!t&&!u?(p=d,g=!0):(p=u,g=!1);let b=e.mapper.toViewElement(p);if(b)return void function(_,v,C,E,S,O){let P=`data-${O.group}-${v?"start":"end"}-${C?"before":"after"}`,V=_.hasAttribute(P)?_.getAttribute(P).split(","):[];V.unshift(O.name),E.writer.setAttribute(P,V.join(","),_),E.mapper.bindElementToMarker(_,S.markerName)}(b,t,g,e,i,o)}(function(p,g,b,_,v){let C=`${v.group}-${g?"start":"end"}`,E=v.name?{name:v.name}:null,S=b.writer.createUIElement(C,E);b.writer.insert(p,S),b.mapper.bindElementToMarker(S,_.markerName)})(e.mapper.toViewPosition(s),t,e,i,o)}function sy(n){return typeof n=="string"&&(n={name:n}),{name:n.name,attributes:n.attributes?Ie(n.attributes):[],children:!!n.children}}function Id(n,t){return typeof n=="function"?n:(e,i)=>function(o,s,d){typeof o=="string"&&(o={name:o});let u,p=s.writer,g=Object.assign({},o.attributes);if(d=="container")u=p.createContainerElement(o.name,g);else if(d=="attribute"){let b={priority:o.priority||sa.DEFAULT_PRIORITY};u=p.createAttributeElement(o.name,g,b)}else u=p.createUIElement(o.name,g);if(o.styles){let b=Object.keys(o.styles);for(let _ of b)p.setStyle(_,o.styles[_],u)}if(o.classes){let b=o.classes;if(typeof b=="string")p.addClass(b,u);else for(let _ of b)p.addClass(_,u)}return u}(n,i,t)}function ay(n){return n.model.values?(t,e,i)=>{let o=n.view[t];return o?o(t,e,i):null}:n.view}function cy(n){return typeof n=="string"?t=>({key:n,value:t}):typeof n=="object"?n.value?()=>n:t=>({key:n.key,value:t}):n}function Zb(n,t,e){let i=typeof n=="function"?n(t,e):n;return i?(i.priority||(i.priority=10),i.id||(i.id=t.markerName),i):null}function ly(n){let t=function(e){return(i,o)=>{if(!i.is("element",e.name))return!1;if(o.type=="attribute"){if(e.attributes.includes(o.attributeKey))return!0}else if(e.children)return!0;return!1}}(n);return(e,i)=>{let o=[];i.reconvertedElements||(i.reconvertedElements=new Set);for(let s of i.changes){let d=s.type=="attribute"?s.range.start.nodeAfter:s.position.parent;if(d&&t(d,s)){if(!i.reconvertedElements.has(d)){i.reconvertedElements.add(d);let u=tt._createBefore(d),p=o.length;for(let g=o.length-1;g>=0;g--){let b=o[g],_=(b.type=="attribute"?b.range.start:b.position).compareWith(u);if(_=="before"||b.type=="remove"&&_=="same")break;p=g}o.splice(p,0,{type:"remove",name:d.name,position:u,length:1},{type:"reinsert",name:d.name,position:u,length:1})}}else o.push(s)}i.changes=o}}function dy(n){return(t,e,i={})=>{let o=["insert"];for(let s of n.attributes)t.hasAttribute(s)&&o.push(`attribute:${s}`);return!!o.every(s=>e.test(t,s))&&(i.preflight||o.forEach(s=>e.consume(t,s)),!0)}}function uy(n,t,e,i){for(let o of t)q4(n.root,o,e,i)||e.convertItem(o)}function q4(n,t,e,i){let{writer:o,mapper:s}=e;if(!i.reconversion)return!1;let d=s.toViewElement(t);return!(!d||d.root==n)&&!!e.canReuseView(d)&&(o.move(o.createRangeOn(d),s.toViewPosition(tt._createBefore(t))),!0)}function W4(n,t,{preflight:e}={}){return e?t.test(n,"insert"):t.consume(n,"insert")}function hy(n){let{schema:t,document:e}=n.model;for(let i of e.getRoots())if(i.isEmpty&&!t.checkChild(i,"$text")&&t.checkChild(i,"paragraph"))return n.insertElement("paragraph",i),!0;return!1}function my(n,t,e){let i=e.createContext(n);return!!e.checkChild(i,"paragraph")&&!!e.checkChild(i.push("paragraph"),t)}function py(n,t){let e=t.createElement("paragraph");return t.insert(e,n),t.createPositionAt(e,0)}var G4=Object.defineProperty,$4=Object.defineProperties,K4=Object.getOwnPropertyDescriptors,fy=Object.getOwnPropertySymbols,Y4=Object.prototype.hasOwnProperty,Q4=Object.prototype.propertyIsEnumerable,gy=(n,t,e)=>t in n?G4(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;class Z4 extends ny{elementToElement(t){return this.add(by(t))}elementToAttribute(t){return this.add(function(e){e=bo(e),_y(e);let i=ky(e,!1),o=Xb(e.view),s=o?`element:${o}`:"element";return d=>{d.on(s,i,{priority:e.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=bo(e);let i=null;(typeof e.view=="string"||e.view.key)&&(i=function(s){typeof s.view=="string"&&(s.view={key:s.view});let d=s.view.key,u=s.view.value===void 0?/[\s\S]*/:s.view.value,p;return d=="class"||d=="style"?p={[d=="class"?"classes":"styles"]:u}:p={attributes:{[d]:u}},s.view.name&&(p.name=s.view.name),s.view=p,d}(e)),_y(e,i);let o=ky(e,!0);return s=>{s.on("element",o,{priority:e.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(e){let i=function(d){return(u,p)=>{let g=typeof d=="string"?d:d(u,p);return p.writer.createElement("$marker",{"data-name":g})}}(e.model);return by((o=((d,u)=>{for(var p in u||(u={}))Y4.call(u,p)&&gy(d,p,u[p]);if(fy)for(var p of fy(u))Q4.call(u,p)&&gy(d,p,u[p]);return d})({},e),s={model:i},$4(o,K4(s))));var o,s}(t))}dataToMarker(t){return this.add(function(e){e=bo(e),e.model||(e.model=d=>d?e.view+":"+d:e.view);let i={view:e.view,model:e.model},o=Jb(wy(i,"start")),s=Jb(wy(i,"end"));return d=>{d.on(`element:${e.view}-start`,o,{priority:e.converterPriority||"normal"}),d.on(`element:${e.view}-end`,s,{priority:e.converterPriority||"normal"});let u=qt.low,p=qt.highest,g=qt.get(e.converterPriority)/p;d.on("element",function(b){return(_,v,C)=>{let E=`data-${b.view}`;function S(O,P){for(let V of P){let W=b.model(V,C),J=C.writer.createElement("$marker",{"data-name":W});C.writer.insert(J,O),v.modelCursor.isEqual(O)?v.modelCursor=v.modelCursor.getShiftedBy(1):v.modelCursor=v.modelCursor._getTransformedByInsertion(O,1),v.modelRange=v.modelRange._getTransformedByInsertion(O,1)[0]}}(C.consumable.test(v.viewItem,{attributes:E+"-end-after"})||C.consumable.test(v.viewItem,{attributes:E+"-start-after"})||C.consumable.test(v.viewItem,{attributes:E+"-end-before"})||C.consumable.test(v.viewItem,{attributes:E+"-start-before"}))&&(v.modelRange||Object.assign(v,C.convertChildren(v.viewItem,v.modelCursor)),C.consumable.consume(v.viewItem,{attributes:E+"-end-after"})&&S(v.modelRange.end,v.viewItem.getAttribute(E+"-end-after").split(",")),C.consumable.consume(v.viewItem,{attributes:E+"-start-after"})&&S(v.modelRange.end,v.viewItem.getAttribute(E+"-start-after").split(",")),C.consumable.consume(v.viewItem,{attributes:E+"-end-before"})&&S(v.modelRange.start,v.viewItem.getAttribute(E+"-end-before").split(",")),C.consumable.consume(v.viewItem,{attributes:E+"-start-before"})&&S(v.modelRange.start,v.viewItem.getAttribute(E+"-start-before").split(",")))}}(i),{priority:u+g})}}(t))}}function by(n){let t=Jb(n=bo(n)),e=Xb(n.view),i=e?`element:${e}`:"element";return o=>{o.on(i,t,{priority:n.converterPriority||"normal"})}}function Xb(n){return typeof n=="string"?n:typeof n=="object"&&typeof n.name=="string"?n.name:null}function Jb(n){let t=new Fo(n.view);return(e,i,o)=>{let s=t.match(i.viewItem);if(!s)return;let d=s.match;if(d.name=!0,!o.consumable.test(i.viewItem,d))return;let u=function(p,g,b){return p instanceof Function?p(g,b):b.writer.createElement(p)}(n.model,i.viewItem,o);u&&o.safeInsert(u,i.modelCursor)&&(o.consumable.consume(i.viewItem,d),o.convertChildren(i.viewItem,u),o.updateConversionResult(u,i))}}function _y(n,t=null){let e=t===null||(s=>s.getAttribute(t)),i=typeof n.model!="object"?n.model:n.model.key,o=typeof n.model!="object"||n.model.value===void 0?e:n.model.value;n.model={key:i,value:o}}function ky(n,t){let e=new Fo(n.view);return(i,o,s)=>{if(!o.modelRange&&t)return;let d=e.match(o.viewItem);if(!d||(function(b,_){let v=typeof b=="function"?b(_):b;return typeof v=="object"&&!Xb(v)?!1:!v.classes&&!v.attributes&&!v.styles}(n.view,o.viewItem)?d.match.name=!0:delete d.match.name,!s.consumable.test(o.viewItem,d.match)))return;let u=n.model.key,p=typeof n.model.value=="function"?n.model.value(o.viewItem,s):n.model.value;if(p===null)return;o.modelRange||Object.assign(o,s.convertChildren(o.viewItem,o.modelCursor)),function(b,_,v,C){let E=!1;for(let S of Array.from(b.getItems({shallow:v})))C.schema.checkAttribute(S,_.key)&&(E=!0,S.hasAttribute(_.key)||C.writer.setAttribute(_.key,_.value,S));return E}(o.modelRange,{key:u,value:p},t,s)&&(s.consumable.test(o.viewItem,{name:!0})&&(d.match.name=!0),s.consumable.consume(o.viewItem,d.match))}}function wy(n,t){return{view:`${n.view}-${t}`,model:(e,i)=>{let o=e.getAttribute("name"),s=n.model(o,i);return i.writer.createElement("$marker",{"data-name":s})}}}function X4(n){n.document.registerPostFixer(t=>function(e,i){let o=i.document.selection,s=i.schema,d=[],u=!1;for(let p of o.getRanges()){let g=vy(p,s);g&&!g.isEqual(p)?(d.push(g),u=!0):d.push(p)}return u&&e.setSelection(function(p){let g=[...p],b=new Set,_=1;for(;_<g.length;){let v=g[_],C=g.slice(0,_);for(let[E,S]of C.entries())if(!b.has(E)){if(v.isEqual(S))b.add(E);else if(v.isIntersecting(S)){b.add(E),b.add(_);let O=v.getJoined(S);g.push(O)}}_++}return g.filter((v,C)=>!b.has(C))}(d),{backward:o.isBackward}),!1}(t,n))}function vy(n,t){return n.isCollapsed?function(e,i){let o=e.start,s=i.getNearestSelectionRange(o);if(!s){let u=o.getAncestors().reverse().find(p=>i.isObject(p));return u?$._createOn(u):null}if(!s.isCollapsed)return s;let d=s.start;return o.isEqual(d)?null:new $(d)}(n,t):function(e,i){let{start:o,end:s}=e,d=i.checkChild(o,"$text"),u=i.checkChild(s,"$text"),p=i.getLimitElement(o),g=i.getLimitElement(s);if(p===g){if(d&&u)return null;if(function(v,C,E){let S=v.nodeAfter&&!E.isLimit(v.nodeAfter)||E.checkChild(v,"$text"),O=C.nodeBefore&&!E.isLimit(C.nodeBefore)||E.checkChild(C,"$text");return S||O}(o,s,i)){let v=o.nodeAfter&&i.isSelectable(o.nodeAfter)?null:i.getNearestSelectionRange(o,"forward"),C=s.nodeBefore&&i.isSelectable(s.nodeBefore)?null:i.getNearestSelectionRange(s,"backward"),E=v?v.start:o,S=C?C.end:s;return new $(E,S)}}let b=p&&!p.is("rootElement"),_=g&&!g.is("rootElement");if(b||_){let v=o.nodeAfter&&s.nodeBefore&&o.nodeAfter.parent===s.nodeBefore.parent,C=b&&(!v||!Cy(o.nodeAfter,i)),E=_&&(!v||!Cy(s.nodeBefore,i)),S=o,O=s;return C&&(S=tt._createBefore(yy(p,i))),E&&(O=tt._createAfter(yy(g,i))),new $(S,O)}return null}(n,t)}function yy(n,t){let e=n,i=e;for(;t.isLimit(i)&&i.parent;)e=i,i=i.parent;return e}function Cy(n,t){return n&&t.isSelectable(n)}class J4 extends ce(){constructor(t,e){super(),this.model=t,this.view=new I4(e),this.mapper=new Yv,this.downcastDispatcher=new Jv({mapper:this.mapper,schema:t.schema});let i=this.model.document,o=i.selection,s=this.model.markers;var d,u,p;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(i,"change",()=>{this.view.change(g=>{this.downcastDispatcher.convertChanges(i.differ,s,g),this.downcastDispatcher.convertSelection(o,s,g)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(g,b){return(_,v)=>{let C=v.newSelection,E=[];for(let O of C.getRanges())E.push(b.toModelRange(O));let S=g.createSelection(E,{backward:C.isBackward});S.isEqual(g.document.selection)||g.change(O=>{O.setSelection(S)})}}(this.model,this.mapper)),this.listenTo(this.view.document,"beforeinput",(d=this.mapper,u=this.model.schema,p=this.view,(g,b)=>{if(!p.document.isComposing||y.isAndroid)for(let _=0;_<b.targetRanges.length;_++){let v=b.targetRanges[_],C=d.toModelRange(v),E=vy(C,u);E&&!E.isEqual(C)&&(b.targetRanges[_]=d.toViewRange(E))}}),{priority:"high"}),this.downcastDispatcher.on("insert:$text",(g,b,_)=>{if(!_.consumable.consume(b.item,g.name))return;let v=_.writer,C=_.mapper.toViewPosition(b.range.start),E=v.createText(b.item.data);v.insert(C,E)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(g,b,_)=>{_.convertAttributes(b.item),b.reconversion||!b.item.is("element")||b.item.isEmpty||_.convertChildren(b.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(g,b,_)=>{let v=_.mapper.toViewPosition(b.position),C=b.position.getShiftedBy(b.length),E=_.mapper.toViewPosition(C,{isPhantom:!0}),S=_.writer.createRange(v,E),O=_.writer.remove(S.getTrimmed());for(let P of _.writer.createRangeIn(O).getItems())_.mapper.unbindViewElement(P,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("cleanSelection",(g,b,_)=>{let v=_.writer,C=v.document.selection;for(let E of C.getRanges())E.isCollapsed&&E.end.parent.isAttached()&&_.writer.mergeAttributes(E.start);v.setSelection(null)}),this.downcastDispatcher.on("selection",(g,b,_)=>{let v=b.selection;if(v.isCollapsed||!_.consumable.consume(v,"selection"))return;let C=[];for(let E of v.getRanges())C.push(_.mapper.toViewRange(E));_.writer.setSelection(C,{backward:v.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(g,b,_)=>{let v=b.selection;if(!v.isCollapsed||!_.consumable.consume(v,"selection"))return;let C=_.writer,E=v.getFirstPosition(),S=_.mapper.toViewPosition(E),O=C.breakAttributes(S);C.setSelection(O)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(g=>{if(g.rootName=="$graveyard")return null;let b=new _v(this.view.document,g.name);return b.rootName=g.rootName,this.mapper.bindElements(g,b),b})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(t){let e=typeof t=="string"?t:t.name,i=this.model.markers.get(e);if(!i)throw new L("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:e});this.model.change(()=>{this.model.markers._refresh(i)})}reconvertItem(t){this.model.change(()=>{this.model.document.differ._refreshItem(t)})}}class Sd{constructor(){this._consumables=new Map}add(t,e){let i;t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?i=this._consumables.get(t):(i=new tB(t),this._consumables.set(t,i)),i.add(e))}test(t,e){let i=this._consumables.get(t);return i===void 0?null:t.is("$text")||t.is("documentFragment")?i:i.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){let i=this._consumables.get(t);i!==void 0&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):i.revert(e))}static consumablesFromElement(t){let e={element:t,name:!0,attributes:[],classes:[],styles:[]},i=t.getAttributeKeys();for(let d of i)d!="style"&&d!="class"&&e.attributes.push(d);let o=t.getClassNames();for(let d of o)e.classes.push(d);let s=t.getStyleNames();for(let d of s)e.styles.push(d);return e}static createFrom(t,e){if(e||(e=new Sd),t.is("$text"))return e.add(t),e;t.is("element")&&e.add(t,Sd.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(let i of t.getChildren())e=Sd.createFrom(i,e);return e}}let Pm=["attributes","classes","styles"];class tB{constructor(t){this.element=t,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(let e of Pm)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(let e of Pm)if(e in t){let i=this._test(e,t[e]);if(i!==!0)return i}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(let e of Pm)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(let e of Pm)e in t&&this._revert(e,t[e])}_add(t,e){let i=Ie(e),o=this._consumables[t];for(let s of i){if(t==="attributes"&&(s==="class"||s==="style"))throw new L("viewconsumable-invalid-attribute",this);if(o.set(s,!0),t==="styles")for(let d of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(d,!0)}}_test(t,e){let i=Ie(e),o=this._consumables[t];for(let s of i)if(t!=="attributes"||s!=="class"&&s!=="style"){let d=o.get(s);if(d===void 0)return null;if(!d)return!1}else{let d=s=="class"?"classes":"styles",u=this._test(d,[...this._consumables[d].keys()]);if(u!==!0)return u}return!0}_consume(t,e){let i=Ie(e),o=this._consumables[t];for(let s of i)if(t!=="attributes"||s!=="class"&&s!=="style"){if(o.set(s,!1),t=="styles")for(let d of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(d,!1)}else{let d=s=="class"?"classes":"styles";this._consume(d,[...this._consumables[d].keys()])}}_revert(t,e){let i=Ie(e),o=this._consumables[t];for(let s of i)if(t!=="attributes"||s!=="class"&&s!=="style")o.get(s)===!1&&o.set(s,!0);else{let d=s=="class"?"classes":"styles";this._revert(d,[...this._consumables[d].keys()])}}}class eB extends ce(){constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new da(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new da(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new L("schema-cannot-register-item-twice",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new L("schema-cannot-extend-missing-item",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e=typeof t=="string"?t:"is"in t&&(t.is("$text")||t.is("$textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){let e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){let e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){let e=this.getDefinition(t);return!!e&&!!(e.isObject||e.isLimit&&e.isSelectable&&e.isContent)}isInline(t){let e=this.getDefinition(t);return!(!e||!e.isInline)}isSelectable(t){let e=this.getDefinition(t);return!!e&&!(!e.isSelectable&&!e.isObject)}isContent(t){let e=this.getDefinition(t);return!!e&&!(!e.isContent&&!e.isObject)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){let i=this.getDefinition(t.last);return!!i&&i.allowAttributes.includes(e)}checkMerge(t,e){if(t instanceof tt){let i=t.nodeBefore,o=t.nodeAfter;if(!(i instanceof Se))throw new L("schema-check-merge-no-element-before",this);if(!(o instanceof Se))throw new L("schema-check-merge-no-element-after",this);return this.checkMerge(i,o)}for(let i of e.getChildren())if(!this.checkChild(t,i))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[i,o])=>{if(!o)return;let s=t(i,o);typeof s=="boolean"&&(e.stop(),e.return=s)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[i,o])=>{let s=t(i,o);typeof s=="boolean"&&(e.stop(),e.return=s)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;for(t instanceof tt?e=t.parent:e=(t instanceof $?[t]:Array.from(t.getRanges())).reduce((i,o)=>{let s=o.getCommonAncestor();return i?i.getCommonAncestor(s,{includeSelf:!0}):s},null);!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){let i=[...t.getFirstPosition().getAncestors(),new Le("",t.getAttributes())];return this.checkAttribute(i,e)}{let i=t.getRanges();for(let o of i)for(let s of o)if(this.checkAttribute(s.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(i){for(let o of i)yield*ni(o.getMinimalFlatRanges())}(t);for(let i of t)yield*ni(this._getValidRangesForRange(i,e))}getNearestSelectionRange(t,e="both"){if(t.root.rootName=="$graveyard")return null;if(this.checkChild(t,"$text"))return new $(t);let i,o,s=t.getAncestors().reverse().find(d=>this.isLimit(d))||t.root;e!="both"&&e!="backward"||(i=new fr({boundaries:$._createIn(s),startPosition:t,direction:"backward"})),e!="both"&&e!="forward"||(o=new fr({boundaries:$._createIn(s),startPosition:t}));for(let d of function*(u,p){let g=!1;for(;!g;){if(g=!0,u){let b=u.next();b.done||(g=!1,yield{walker:u,value:b.value})}if(p){let b=p.next();b.done||(g=!1,yield{walker:p,value:b.value})}}}(i,o)){let u=d.walker==i?"elementEnd":"elementStart",p=d.value;if(p.type==u&&this.isObject(p.item))return $._createOn(p.item);if(this.checkChild(p.nextPosition,"$text"))return new $(p.nextPosition)}return null}findAllowedParent(t,e){let i=t.parent;for(;i;){if(this.checkChild(i,e))return i;if(this.isLimit(i))return null;i=i.parent}return null}setAllowedAttributes(t,e,i){let o=i.model;for(let[s,d]of Object.entries(e))o.schema.checkAttribute(t,s)&&i.setAttribute(s,d,t)}removeDisallowedAttributes(t,e){for(let i of t)if(i.is("$text"))Ay(this,i,e);else{let o=$._createIn(i).getPositions();for(let s of o)Ay(this,s.nodeBefore||s.parent,e)}}getAttributesWithProperty(t,e,i){let o={};for(let[s,d]of t.getAttributes()){let u=this.getAttributeProperties(s);u[e]!==void 0&&(i!==void 0&&i!==u[e]||(o[s]=d))}return o}createContext(t){return new da(t)}_clearCache(){this._compiledDefinitions=null}_compile(){let t={},e=this._sourceDefinitions,i=Object.keys(e);for(let o of i)t[o]=iB(e[o],o);for(let o of i)nB(t,o);for(let o of i)oB(t,o);for(let o of i)rB(t,o);for(let o of i)sB(t,o),aB(t,o);for(let o of i)cB(t,o),lB(t,o),dB(t,o);this._compiledDefinitions=t}_checkContextMatch(t,e,i=e.length-1){let o=e.getItem(i);if(t.allowIn.includes(o.name)){if(i==0)return!0;{let s=this.getDefinition(o);return this._checkContextMatch(s,e,i-1)}}return!1}*_getValidRangesForRange(t,e){let i=t.start,o=t.start;for(let s of t.getItems({shallow:!0}))s.is("element")&&(yield*ni(this._getValidRangesForRange($._createIn(s),e))),this.checkAttribute(s,e)||(i.isEqual(o)||(yield new $(i,o)),i=tt._createAfter(s)),o=tt._createAfter(s);i.isEqual(o)||(yield new $(i,o))}findOptimalInsertionRange(t,e){let i=t.getSelectedElement();if(i&&this.isObject(i)&&!this.isInline(i))return e=="before"||e=="after"?new $(tt._createAt(i,e)):$._createOn(i);let o=Mi(t.getSelectedBlocks());if(!o)return new $(t.focus);if(o.isEmpty)return new $(tt._createAt(o,0));let s=tt._createAfter(o);return t.focus.isTouching(s)?new $(s):new $(tt._createBefore(o))}}class da{constructor(t){if(t instanceof da)return t;let e;e=typeof t=="string"?[t]:Array.isArray(t)?t:t.getAncestors({includeSelf:!0}),this._items=e.map(hB)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){let e=new da([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*ni(this._items.map(t=>t.name))}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}startsWith(t){return Array.from(this.getNames()).join(" ").startsWith(t)}}function iB(n,t){let e={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(i,o){for(let s of i){let d=Object.keys(s).filter(u=>u.startsWith("is"));for(let u of d)o[u]=!!s[u]}}(n,e),ua(n,e,"allowIn"),ua(n,e,"allowContentOf"),ua(n,e,"allowWhere"),ua(n,e,"allowAttributes"),ua(n,e,"allowAttributesOf"),ua(n,e,"allowChildren"),ua(n,e,"inheritTypesFrom"),function(i,o){for(let s of i){let d=s.inheritAllFrom;d&&(o.allowContentOf.push(d),o.allowWhere.push(d),o.allowAttributesOf.push(d),o.inheritTypesFrom.push(d))}}(n,e),e}function nB(n,t){let e=n[t];for(let i of e.allowChildren){let o=n[i];o&&o.allowIn.push(t)}e.allowChildren.length=0}function oB(n,t){for(let e of n[t].allowContentOf)n[e]&&uB(n,e).forEach(i=>{i.allowIn.push(t)});delete n[t].allowContentOf}function rB(n,t){for(let e of n[t].allowWhere){let i=n[e];if(i){let o=i.allowIn;n[t].allowIn.push(...o)}}delete n[t].allowWhere}function sB(n,t){for(let e of n[t].allowAttributesOf){let i=n[e];if(i){let o=i.allowAttributes;n[t].allowAttributes.push(...o)}}delete n[t].allowAttributesOf}function aB(n,t){let e=n[t];for(let i of e.inheritTypesFrom){let o=n[i];if(o){let s=Object.keys(o).filter(d=>d.startsWith("is"));for(let d of s)d in e||(e[d]=o[d])}}delete e.inheritTypesFrom}function cB(n,t){let e=n[t],i=e.allowIn.filter(o=>n[o]);e.allowIn=Array.from(new Set(i))}function lB(n,t){let e=n[t];for(let i of e.allowIn)n[i].allowChildren.push(t)}function dB(n,t){let e=n[t];e.allowAttributes=Array.from(new Set(e.allowAttributes))}function ua(n,t,e){for(let i of n){let o=i[e];typeof o=="string"?t[e].push(o):Array.isArray(o)&&t[e].push(...o)}}function uB(n,t){let e=n[t];return(i=n,Object.keys(i).map(o=>i[o])).filter(o=>o.allowIn.includes(e.name));var i}function hB(n){return typeof n=="string"||n.is("documentFragment")?{name:typeof n=="string"?n:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:n.is("element")?n.name:"$text",*getAttributeKeys(){yield*ni(n.getAttributeKeys())},getAttribute:t=>n.getAttribute(t)}}function Ay(n,t,e){for(let i of t.getAttributeKeys())n.checkAttribute(t,i)||e.removeAttribute(i,t)}var mB=Object.defineProperty,pB=Object.defineProperties,fB=Object.getOwnPropertyDescriptors,xy=Object.getOwnPropertySymbols,gB=Object.prototype.hasOwnProperty,bB=Object.prototype.propertyIsEnumerable,Ey=(n,t,e)=>t in n?mB(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;class _B extends ve(){constructor(t){var e;super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi=(e=((i,o)=>{for(var s in o||(o={}))gB.call(o,s)&&Ey(i,s,o[s]);if(xy)for(var s of xy(o))bB.call(o,s)&&Ey(i,s,o[s]);return i})({},t),pB(e,fB({consumable:null,writer:null,store:null,convertItem:(i,o)=>this._convertItem(i,o),convertChildren:(i,o)=>this._convertChildren(i,o),safeInsert:(i,o)=>this._safeInsert(i,o),updateConversionResult:(i,o)=>this._updateConversionResult(i,o),splitToAllowedParent:(i,o)=>this._splitToAllowedParent(i,o),getSplitParts:i=>this._getSplitParts(i),keepEmptyElement:i=>this._keepEmptyElement(i)})))}convert(t,e,i=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(d,u){let p;for(let g of new da(d)){let b={};for(let v of g.getAttributeKeys())b[v]=g.getAttribute(v);let _=u.createElement(g.name,b);p&&u.insert(_,p),p=tt._createAt(_,0)}return p}(i,e),this.conversionApi.writer=e,this.conversionApi.consumable=Sd.createFrom(t),this.conversionApi.store={};let{modelRange:o}=this._convertItem(t,this._modelCursor),s=e.createDocumentFragment();if(o){this._removeEmptyElements();for(let d of Array.from(this._modelCursor.parent.getChildren()))e.append(d,s);s.markers=function(d,u){let p=new Set,g=new Map,b=$._createIn(d).getItems();for(let _ of b)_.is("element","$marker")&&p.add(_);for(let _ of p){let v=_.getAttribute("data-name"),C=u.createPositionBefore(_);g.has(v)?g.get(v).end=C.clone():g.set(v,new $(C.clone())),u.remove(_)}return g}(s,e)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,s}_convertItem(t,e){let i={viewItem:t,modelCursor:e,modelRange:null};if(t.is("element")?this.fire(`element:${t.name}`,i,this.conversionApi):t.is("$text")?this.fire("text",i,this.conversionApi):this.fire("documentFragment",i,this.conversionApi),i.modelRange&&!(i.modelRange instanceof $))throw new L("view-conversion-dispatcher-incorrect-result",this);return{modelRange:i.modelRange,modelCursor:i.modelCursor}}_convertChildren(t,e){let i=e.is("position")?e:tt._createAt(e,0),o=new $(i);for(let s of Array.from(t.getChildren())){let d=this._convertItem(s,i);d.modelRange instanceof $&&(o.end=d.modelRange.end,i=d.modelCursor)}return{modelRange:o,modelCursor:i}}_safeInsert(t,e){let i=this._splitToAllowedParent(t,e);return!!i&&(this.conversionApi.writer.insert(t,i.position),!0)}_updateConversionResult(t,e){let i=this._getSplitParts(t),o=this.conversionApi.writer;e.modelRange||(e.modelRange=o.createRange(o.createPositionBefore(t),o.createPositionAfter(i[i.length-1])));let s=this._cursorParents.get(t);e.modelCursor=s?o.createPositionAt(s,0):e.modelRange.end}_splitToAllowedParent(t,e){let{schema:i,writer:o}=this.conversionApi,s=i.findAllowedParent(e,t);if(s){if(s===e.parent)return{position:e};this._modelCursor.parent.getAncestors().includes(s)&&(s=null)}if(!s)return my(e,t,i)?{position:py(e,o)}:null;let d=this.conversionApi.writer.split(e,s),u=[];for(let g of d.range.getWalker())if(g.type=="elementEnd")u.push(g.item);else{let b=u.pop(),_=g.item;this._registerSplitPair(b,_)}let p=d.range.end.parent;return this._cursorParents.set(t,p),{position:d.position,cursorParent:p}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);let i=this._splitParts.get(t);this._splitParts.set(e,i),i.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t],e}_keepEmptyElement(t){this._emptyElementsToKeep.add(t)}_removeEmptyElements(){let t=!1;for(let e of this._splitParts.keys())e.isEmpty&&!this._emptyElementsToKeep.has(e)&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}class kB{getHtml(t){let e=wt.document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class wB{constructor(t){this.skipComments=!0,this.domParser=new DOMParser,this.domConverter=new Em(t,{renderingMode:"data"}),this.htmlWriter=new kB}toData(t){let e=this.domConverter.viewToDom(t);return this.htmlWriter.getHtml(e)}toView(t){let e=this._toDom(t);return this.domConverter.domToView(e,{skipComments:this.skipComments})}registerRawContentMatcher(t){this.domConverter.registerRawContentMatcher(t)}useFillerType(t){this.domConverter.blockFillerMode=t=="marked"?"markedNbsp":"nbsp"}_toDom(t){t.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(t=`<body>${t}</body>`);let e=this.domParser.parseFromString(t,"text/html"),i=e.createDocumentFragment(),o=e.body.childNodes;for(;o.length>0;)i.appendChild(o[0]);return i}}class vB extends ve(){constructor(t,e){super(),this.model=t,this.mapper=new Yv,this.downcastDispatcher=new Jv({mapper:this.mapper,schema:t.schema}),this.downcastDispatcher.on("insert:$text",(i,o,s)=>{if(!s.consumable.consume(o.item,i.name))return;let d=s.writer,u=s.mapper.toViewPosition(o.range.start),p=d.createText(o.item.data);d.insert(u,p)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(i,o,s)=>{s.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||s.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new _B({schema:t.schema}),this.viewDocument=new Cm(e),this.stylesProcessor=e,this.htmlProcessor=new wB(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new wv(this.viewDocument),this.upcastDispatcher.on("text",(i,o,{schema:s,consumable:d,writer:u})=>{let p=o.modelCursor;if(!d.test(o.viewItem))return;if(!s.checkChild(p,"$text")){if(!my(p,"$text",s)||o.viewItem.data.trim().length==0)return;let b=p.nodeBefore;p=py(p,u),b&&b.is("element","$marker")&&(u.move(u.createRangeOn(b),p),p=u.createPositionAfter(b))}d.consume(o.viewItem);let g=u.createText(o.viewItem.data);u.insert(g,p),o.modelRange=u.createRange(p,p.getShiftedBy(g.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(i,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){let{modelRange:d,modelCursor:u}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=d,o.modelCursor=u}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(i,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){let{modelRange:d,modelCursor:u}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=d,o.modelCursor=u}},{priority:"lowest"}),ce().prototype.decorate.call(this,"init"),ce().prototype.decorate.call(this,"set"),ce().prototype.decorate.call(this,"get"),ce().prototype.decorate.call(this,"toView"),ce().prototype.decorate.call(this,"toModel"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},hy)},{priority:"lowest"})}get(t={}){let{rootName:e="main",trim:i="empty"}=t;if(!this._checkIfRootsExists([e]))throw new L("datacontroller-get-non-existent-root",this);let o=this.model.document.getRoot(e);return o.isAttached()||gt("datacontroller-get-detached-root",this),i!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,t):""}stringify(t,e={}){let i=this.toView(t,e);return this.processor.toData(i)}toView(t,e={}){let i=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();let s=$._createIn(t),d=new aa(i);this.mapper.bindElements(t,d);let u=t.is("documentFragment")?t.markers:function(p){let g=[],b=p.root.document;if(!b)return new Map;let _=$._createIn(p);for(let v of b.model.markers){let C=v.getRange(),E=C.isCollapsed,S=C.start.isEqual(_.start)||C.end.isEqual(_.end);if(E&&S)g.push([v.name,C]);else{let O=_.getIntersection(C);O&&g.push([v.name,O])}}return g.sort(([v,C],[E,S])=>{if(C.end.compareWith(S.start)!=="after")return 1;if(C.start.compareWith(S.end)!=="before")return-1;switch(C.start.compareWith(S.start)){case"before":return 1;case"after":return-1;default:switch(C.end.compareWith(S.end)){case"before":return 1;case"after":return-1;default:return E.localeCompare(v)}}}),new Map(g)}(t);return this.downcastDispatcher.convert(s,u,o,e),d}init(t){if(this.model.document.version)throw new L("datacontroller-init-document-not-empty",this);let e={};if(typeof t=="string"?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new L("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},i=>{for(let o of Object.keys(e)){let s=this.model.document.getRoot(o);i.insert(this.parse(e[o],s),s,0)}}),Promise.resolve()}set(t,e={}){let i={};if(typeof t=="string"?i.main=t:i=t,!this._checkIfRootsExists(Object.keys(i)))throw new L("datacontroller-set-non-existent-root",this);this.model.enqueueChange(e.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(let s of Object.keys(i)){let d=this.model.document.getRoot(s);o.remove(o.createRangeIn(d)),o.insert(this.parse(i[s],d),d,0)}})}parse(t,e="$root"){let i=this.processor.toView(t);return this.toModel(i,e)}toModel(t,e="$root"){return this.model.change(i=>this.upcastDispatcher.convert(t,i,e))}addStyleProcessorRules(t){t(this.stylesProcessor)}registerRawContentMatcher(t){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(t),this.htmlProcessor.registerRawContentMatcher(t)}destroy(){this.stopListening()}_checkIfRootsExists(t){for(let e of t)if(!this.model.document.getRoot(e))return!1;return!0}}class yB{constructor(t,e){this._helpers=new Map,this._downcast=Ie(t),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Ie(e),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){let i=this._downcast.includes(e);if(!this._upcast.includes(e)&&!i)throw new L("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:i})}for(t){if(!this._helpers.has(t))throw new L("conversion-for-unknown-group",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(let{model:e,view:i}of t_(t))this.for("upcast").elementToElement({model:e,view:i,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(let{model:e,view:i}of t_(t))this.for("upcast").elementToAttribute({view:i,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(let{model:e,view:i}of t_(t))this.for("upcast").attributeToAttribute({view:i,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:i}){if(this._helpers.has(t))throw new L("conversion-group-exists",this);let o=i?new H4(e):new Z4(e);this._helpers.set(t,o)}}function*t_(n){if(n.model.values)for(let t of n.model.values){let e={key:n.model.key,value:t},i=n.view[t],o=n.upcastAlso?n.upcastAlso[t]:void 0;yield*ni(Dy(e,i,o))}else yield*ni(Dy(n.model,n.view,n.upcastAlso))}function*Dy(n,t,e){if(yield{model:n,view:t},e)for(let i of Ie(e))yield{model:n,view:i}}class In{constructor(t){this.baseVersion=t,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){let t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t,e){return new this(t.baseVersion)}}function e_(n,t){let e=Iy(t),i=e.reduce((d,u)=>d+u.offsetSize,0),o=n.parent;Pd(n);let s=n.index;return o._insertChild(s,e),Od(o,s+e.length),Od(o,s),new $(n,n.getShiftedBy(i))}function My(n){if(!n.isFlat)throw new L("operation-utils-remove-range-not-flat",this);let t=n.start.parent;Pd(n.start),Pd(n.end);let e=t._removeChildren(n.start.index,n.end.index-n.start.index);return Od(t,n.start.index),e}function Td(n,t){if(!n.isFlat)throw new L("operation-utils-move-range-not-flat",this);let e=My(n);return e_(t=t._getTransformedByDeletion(n.start,n.end.offset-n.start.offset),e)}function Iy(n){let t=[];(function e(i){if(typeof i=="string")t.push(new Le(i));else if(i instanceof _o)t.push(new Le(i.data,i.getAttributes()));else if(i instanceof ca)t.push(i);else if(Ri(i))for(let o of i)e(o)})(n);for(let e=1;e<t.length;e++){let i=t[e],o=t[e-1];i instanceof Le&&o instanceof Le&&Sy(i,o)&&(t.splice(e-1,2,new Le(o.data+i.data,o.getAttributes())),e--)}return t}function Od(n,t){let e=n.getChild(t-1),i=n.getChild(t);if(e&&i&&e.is("$text")&&i.is("$text")&&Sy(e,i)){let o=new Le(e.data+i.data,e.getAttributes());n._removeChildren(t-1,2),n._insertChild(t-1,o)}}function Pd(n){let t=n.textNode,e=n.parent;if(t){let i=n.offset-t.startOffset,o=t.index;e._removeChildren(o,1);let s=new Le(t.data.substr(0,i),t.getAttributes()),d=new Le(t.data.substr(i),t.getAttributes());e._insertChild(o,[s,d])}}function Sy(n,t){let e=n.getAttributes(),i=t.getAttributes();for(let o of e){if(o[1]!==t.getAttribute(o[0]))return!1;i.next()}return i.next().done}class fe extends In{constructor(t,e,i,o){super(o),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=i.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}get affectedSelectable(){return[$._createFromPositionAndShift(this.sourcePosition,this.howMany),$._createFromPositionAndShift(this.targetPosition,0)]}clone(){return new fe(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){let t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new fe(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){let t=this.sourcePosition.parent,e=this.targetPosition.parent,i=this.sourcePosition.offset,o=this.targetPosition.offset;if(i+this.howMany>t.maxOffset)throw new L("move-operation-nodes-do-not-exist",this);if(t===e&&i<o&&o<i+this.howMany)throw new L("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&Ei(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){let s=this.sourcePosition.path.length-1;if(this.targetPosition.path[s]>=i&&this.targetPosition.path[s]<i+this.howMany)throw new L("move-operation-node-into-itself",this)}}_execute(){Td($._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){let t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){let i=tt.fromJSON(t.sourcePosition,e),o=tt.fromJSON(t.targetPosition,e);return new this(i,t.howMany,o,t.baseVersion)}}class Si extends In{constructor(t,e,i){super(i),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new Ed(Iy(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}get affectedSelectable(){return this.position.clone()}clone(){let t=new Ed([...this.nodes].map(i=>i._clone(!0))),e=new Si(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){let t=this.position.root.document.graveyard,e=new tt(t,[0]);return new fe(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){let t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new L("insert-operation-position-invalid",this)}_execute(){let t=this.nodes;this.nodes=new Ed([...t].map(e=>e._clone(!0))),e_(this.position,t)}toJSON(){let t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){let i=[];for(let s of t.nodes)s.name?i.push(Se.fromJSON(s)):i.push(Le.fromJSON(s));let o=new Si(tt.fromJSON(t.position,e),i,t.baseVersion);return o.shouldReceiveAttributes=t.shouldReceiveAttributes,o}}class Fe extends In{constructor(t,e,i,o,s){super(s),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=i,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){let t=this.insertionPosition.path.slice();return t.push(0),new tt(this.insertionPosition.root,t)}get movedRange(){let t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new $(this.splitPosition,t)}get affectedSelectable(){let t=[$._createFromPositionAndShift(this.splitPosition,0),$._createFromPositionAndShift(this.insertionPosition,0)];return this.graveyardPosition&&t.push($._createFromPositionAndShift(this.graveyardPosition,0)),t}clone(){return new Fe(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){let t=this.splitPosition.root.document.graveyard,e=new tt(t,[0]);return new si(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){let t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new L("split-operation-position-invalid",this);if(!t.parent)throw new L("split-operation-split-in-root",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new L("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new L("split-operation-graveyard-position-invalid",this)}_execute(){let t=this.splitPosition.parent;if(this.graveyardPosition)Td($._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{let e=t._clone();e_(this.insertionPosition,e)}Td(new $(tt._createAt(t,this.splitPosition.offset),tt._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){let t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){let e=t.path.slice(0,-1);return e[e.length-1]++,new tt(t.root,e,"toPrevious")}static fromJSON(t,e){let i=tt.fromJSON(t.splitPosition,e),o=tt.fromJSON(t.insertionPosition,e),s=t.graveyardPosition?tt.fromJSON(t.graveyardPosition,e):null;return new this(i,t.howMany,o,s,t.baseVersion)}}class si extends In{constructor(t,e,i,o,s){super(s),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=i.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new tt(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){let t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new $(this.sourcePosition,t)}get affectedSelectable(){let t=this.sourcePosition.parent;return[$._createOn(t),$._createFromPositionAndShift(this.targetPosition,0),$._createFromPositionAndShift(this.graveyardPosition,0)]}clone(){return new si(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){let t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),i=new tt(this.sourcePosition.root,e)._getTransformedByMergeOperation(this);return new Fe(t,this.howMany,i,this.graveyardPosition,this.baseVersion+1)}_validate(){let t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new L("merge-operation-source-position-invalid",this);if(!e.parent)throw new L("merge-operation-target-position-invalid",this);if(this.howMany!=t.maxOffset)throw new L("merge-operation-how-many-invalid",this)}_execute(){let t=this.sourcePosition.parent;Td($._createIn(t),this.targetPosition),Td($._createOn(t),this.graveyardPosition)}toJSON(){let t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){let i=tt.fromJSON(t.sourcePosition,e),o=tt.fromJSON(t.targetPosition,e),s=tt.fromJSON(t.graveyardPosition,e);return new this(i,t.howMany,o,s,t.baseVersion)}}class mn extends In{constructor(t,e,i,o,s,d){super(d),this.name=t,this.oldRange=e?e.clone():null,this.newRange=i?i.clone():null,this.affectsData=s,this._markers=o}get type(){return"marker"}get affectedSelectable(){let t=[];return this.oldRange&&t.push(this.oldRange.clone()),this.newRange&&(this.oldRange?t.push(...this.newRange.getDifference(this.oldRange)):t.push(this.newRange.clone())),t}clone(){return new mn(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new mn(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){let t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new mn(t.name,t.oldRange?$.fromJSON(t.oldRange,e):null,t.newRange?$.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}let Ty=function(n,t){return Im(n,t)};class mi extends In{constructor(t,e,i,o,s){super(s),this.range=t.clone(),this.key=e,this.oldValue=i===void 0?null:i,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}get affectedSelectable(){return this.range.clone()}clone(){return new mi(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new mi(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){let t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new L("attribute-operation-range-not-flat",this);for(let t of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!Ty(t.getAttribute(this.key),this.oldValue))throw new L("attribute-operation-wrong-old-value",this,{item:t,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&t.hasAttribute(this.key))throw new L("attribute-operation-attribute-exists",this,{node:t,key:this.key})}}_execute(){Ty(this.oldValue,this.newValue)||function(t,e,i){Pd(t.start),Pd(t.end);for(let o of t.getItems({shallow:!0})){let s=o.is("$textProxy")?o.textNode:o;i!==null?s._setAttribute(e,i):s._removeAttribute(e),Od(s.parent,s.index)}Od(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new mi($.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class wi extends In{get type(){return"noop"}get affectedSelectable(){return null}clone(){return new wi(this.baseVersion)}getReversed(){return new wi(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class pn extends In{constructor(t,e,i,o){super(o),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=i}get type(){return"rename"}get affectedSelectable(){return this.position.nodeAfter}clone(){return new pn(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new pn(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){let t=this.position.nodeAfter;if(!(t instanceof Se))throw new L("rename-operation-wrong-position",this);if(t.name!==this.oldName)throw new L("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){let t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new pn(tt.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class gr extends In{constructor(t,e,i,o,s){super(s),this.root=t,this.key=e,this.oldValue=i===void 0?null:i,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}get affectedSelectable(){return this.root}clone(){return new gr(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new gr(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new L("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new L("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new L("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){let t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new L("rootattribute-operation-fromjson-no-root",this,{rootName:t.root});return new gr(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class jo extends In{constructor(t,e,i,o,s){super(s),this.rootName=t,this.elementName=e,this.isAdd=i,this._document=o,!this._document.getRoot(this.rootName)&&(this._document.createRoot(this.elementName,this.rootName)._isAttached=!1)}get type(){return this.isAdd?"addRoot":"detachRoot"}get affectedSelectable(){return this._document.getRoot(this.rootName)}clone(){return new jo(this.rootName,this.elementName,this.isAdd,this._document,this.baseVersion)}getReversed(){return new jo(this.rootName,this.elementName,!this.isAdd,this._document,this.baseVersion+1)}_execute(){this._document.getRoot(this.rootName)._isAttached=this.isAdd}toJSON(){let t=super.toJSON();return delete t._document,t}static get className(){return"RootOperation"}static fromJSON(t,e){return new jo(t.rootName,t.elementName,t.isAdd,e,t.baseVersion)}}let Qn={};Qn[mi.className]=mi,Qn[Si.className]=Si,Qn[mn.className]=mn,Qn[fe.className]=fe,Qn[wi.className]=wi,Qn[In.className]=In,Qn[pn.className]=pn,Qn[gr.className]=gr,Qn[jo.className]=jo,Qn[Fe.className]=Fe,Qn[si.className]=si;class CB{static fromJSON(t,e){return Qn[t.__className].fromJSON(t,e)}}let i_=new Map;function me(n,t,e){let i=i_.get(n);i||(i=new Map,i_.set(n,i)),i.set(t,e)}function AB(n){return[n]}function Oy(n,t,e={}){let i=function(o,s){let d=i_.get(o);return d&&d.has(s)?d.get(s):AB}(n.constructor,t.constructor);try{return i(n=n.clone(),t,e)}catch(o){throw o}}function xB(n,t,e){n=n.slice(),t=t.slice();let i=new EB(e.document,e.useRelations,e.forceWeakRemove);i.setOriginalOperations(n),i.setOriginalOperations(t);let o=i.originalOperations;if(n.length==0||t.length==0)return{operationsA:n,operationsB:t,originalOperations:o};let s=new WeakMap;for(let p of n)s.set(p,0);let d={nextBaseVersionA:n[n.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:n.length,originalOperationsBCount:t.length},u=0;for(;u<n.length;){let p=n[u],g=s.get(p);if(g==t.length){u++;continue}let b=t[g],_=Oy(p,b,i.getContext(p,b,!0)),v=Oy(b,p,i.getContext(b,p,!1));i.updateRelation(p,b),i.setOriginalOperations(_,p),i.setOriginalOperations(v,b);for(let C of _)s.set(C,g+v.length);n.splice(u,1,..._),t.splice(g,1,...v)}if(e.padWithNoOps){let p=n.length-d.originalOperationsACount,g=t.length-d.originalOperationsBCount;By(n,g-p),By(t,p-g)}return Py(n,d.nextBaseVersionB),Py(t,d.nextBaseVersionA),{operationsA:n,operationsB:t,originalOperations:o}}class EB{constructor(t,e,i=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!i,this._relations=new Map}setOriginalOperations(t,e=null){let i=e?this.originalOperations.get(e):null;for(let o of t)this.originalOperations.set(o,i||o)}updateRelation(t,e){if(t instanceof fe)e instanceof si?t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter"):e instanceof fe&&(t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter"));else if(t instanceof Fe){if(e instanceof si)t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");else if(e instanceof fe)if(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))this._setRelation(t,e,"splitBefore");else{let i=$._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&i.containsPosition(t.splitPosition)){let o=i.end.offset-t.splitPosition.offset,s=t.splitPosition.offset-i.start.offset;this._setRelation(t,e,{howMany:o,offset:s})}}}else if(t instanceof si)e instanceof si?(t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement")):e instanceof Fe?t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource"):e instanceof fe&&e.howMany>0&&(t.sourcePosition.isEqual(e.sourcePosition.getShiftedBy(e.howMany))&&this._setRelation(t,e,"mergeSourceAffected"),t.targetPosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeTargetWasBefore"));else if(t instanceof mn){let i=t.newRange;if(!i)return;if(e instanceof fe){let o=$._createFromPositionAndShift(e.sourcePosition,e.howMany),s=o.containsPosition(i.start)||o.start.isEqual(i.start),d=o.containsPosition(i.end)||o.end.isEqual(i.end);!s&&!d||o.containsRange(i)||this._setRelation(t,e,{side:s?"left":"right",path:s?i.start.path.slice():i.end.path.slice()})}else if(e instanceof si){let o=i.start.isEqual(e.targetPosition),s=i.start.isEqual(e.deletionPosition),d=i.end.isEqual(e.deletionPosition),u=i.end.isEqual(e.sourcePosition);(o||s||d||u)&&this._setRelation(t,e,{wasInLeftElement:o,wasStartBeforeMergedElement:s,wasEndBeforeMergedElement:d,wasInRightElement:u})}}}getContext(t,e,i){return{aIsStrong:i,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){let e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){let i=this.originalOperations.get(e),o=this._history.getUndoneOperation(i);if(!o)return null;let s=this.originalOperations.get(t),d=this._relations.get(s);return d&&d.get(o)||null}_setRelation(t,e,i){let o=this.originalOperations.get(t),s=this.originalOperations.get(e),d=this._relations.get(o);d||(d=new Map,this._relations.set(o,d)),d.set(s,i)}}function Py(n,t){for(let e of n)e.baseVersion=t++}function By(n,t){for(let e=0;e<t;e++)n.push(new wi(0))}function Ry(n,t,e){let i=n.nodes.getNode(0).getAttribute(t);if(i==e)return null;let o=new $(n.position,n.position.getShiftedBy(n.howMany));return new mi(o,t,i,e,0)}function Ny(n,t){return n.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)===null}function vc(n,t){let e=[];for(let i=0;i<n.length;i++){let o=n[i],s=new fe(o.start,o.end.offset-o.start.offset,t,0);e.push(s);for(let d=i+1;d<n.length;d++)n[d]=n[d]._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)[0];t=t._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)}return e}me(mi,mi,(n,t,e)=>{if(n.key===t.key&&n.range.start.hasSameParentAs(t.range.start)){let i=n.range.getDifference(t.range).map(s=>new mi(s,n.key,n.oldValue,n.newValue,0)),o=n.range.getIntersection(t.range);return o&&e.aIsStrong&&i.push(new mi(o,t.key,t.newValue,n.newValue,0)),i.length==0?[new wi(0)]:i}return[n]}),me(mi,Si,(n,t)=>{if(n.range.start.hasSameParentAs(t.position)&&n.range.containsPosition(t.position)){let e=n.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map(i=>new mi(i,n.key,n.oldValue,n.newValue,n.baseVersion));if(t.shouldReceiveAttributes){let i=Ry(t,n.key,n.oldValue);i&&e.unshift(i)}return e}return n.range=n.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[n]}),me(mi,si,(n,t)=>{let e=[];n.range.start.hasSameParentAs(t.deletionPosition)&&(n.range.containsPosition(t.deletionPosition)||n.range.start.isEqual(t.deletionPosition))&&e.push($._createFromPositionAndShift(t.graveyardPosition,1));let i=n.range._getTransformedByMergeOperation(t);return i.isCollapsed||e.push(i),e.map(o=>new mi(o,n.key,n.oldValue,n.newValue,n.baseVersion))}),me(mi,fe,(n,t)=>function(i,o){let s=$._createFromPositionAndShift(o.sourcePosition,o.howMany),d=null,u=[];s.containsRange(i,!0)?d=i:i.start.hasSameParentAs(s.start)?(u=i.getDifference(s),d=i.getIntersection(s)):u=[i];let p=[];for(let g of u){g=g._getTransformedByDeletion(o.sourcePosition,o.howMany);let b=o.getMovedRangeStart(),_=g.start.hasSameParentAs(b),v=g._getTransformedByInsertion(b,o.howMany,_);p.push(...v)}return d&&p.push(d._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),p}(n.range,t).map(i=>new mi(i,n.key,n.oldValue,n.newValue,n.baseVersion))),me(mi,Fe,(n,t)=>{if(n.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||n.range.end.offset++,[n];if(n.range.start.hasSameParentAs(t.splitPosition)&&n.range.containsPosition(t.splitPosition)){let e=n.clone();return e.range=new $(t.moveTargetPosition.clone(),n.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),n.range.end=t.splitPosition.clone(),n.range.end.stickiness="toPrevious",[n,e]}return n.range=n.range._getTransformedBySplitOperation(t),[n]}),me(Si,mi,(n,t)=>{let e=[n];if(n.shouldReceiveAttributes&&n.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(n.position)){let i=Ry(n,t.key,t.newValue);i&&e.push(i)}return e}),me(Si,Si,(n,t,e)=>(n.position.isEqual(t.position)&&e.aIsStrong||(n.position=n.position._getTransformedByInsertOperation(t)),[n])),me(Si,fe,(n,t)=>(n.position=n.position._getTransformedByMoveOperation(t),[n])),me(Si,Fe,(n,t)=>(n.position=n.position._getTransformedBySplitOperation(t),[n])),me(Si,si,(n,t)=>(n.position=n.position._getTransformedByMergeOperation(t),[n])),me(mn,Si,(n,t)=>(n.oldRange&&(n.oldRange=n.oldRange._getTransformedByInsertOperation(t)[0]),n.newRange&&(n.newRange=n.newRange._getTransformedByInsertOperation(t)[0]),[n])),me(mn,mn,(n,t,e)=>{if(n.name==t.name){if(!e.aIsStrong)return[new wi(0)];n.oldRange=t.newRange?t.newRange.clone():null}return[n]}),me(mn,si,(n,t)=>(n.oldRange&&(n.oldRange=n.oldRange._getTransformedByMergeOperation(t)),n.newRange&&(n.newRange=n.newRange._getTransformedByMergeOperation(t)),[n])),me(mn,fe,(n,t,e)=>{if(n.oldRange&&(n.oldRange=$._createFromRanges(n.oldRange._getTransformedByMoveOperation(t))),n.newRange){if(e.abRelation){let i=$._createFromRanges(n.newRange._getTransformedByMoveOperation(t));if(e.abRelation.side=="left"&&t.targetPosition.isEqual(n.newRange.start))return n.newRange.end=i.end,n.newRange.start.path=e.abRelation.path,[n];if(e.abRelation.side=="right"&&t.targetPosition.isEqual(n.newRange.end))return n.newRange.start=i.start,n.newRange.end.path=e.abRelation.path,[n]}n.newRange=$._createFromRanges(n.newRange._getTransformedByMoveOperation(t))}return[n]}),me(mn,Fe,(n,t,e)=>{if(n.oldRange&&(n.oldRange=n.oldRange._getTransformedBySplitOperation(t)),n.newRange){if(e.abRelation){let i=n.newRange._getTransformedBySplitOperation(t);return n.newRange.start.isEqual(t.splitPosition)&&e.abRelation.wasStartBeforeMergedElement?n.newRange.start=tt._createAt(t.insertionPosition):n.newRange.start.isEqual(t.splitPosition)&&!e.abRelation.wasInLeftElement&&(n.newRange.start=tt._createAt(t.moveTargetPosition)),n.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasInRightElement?n.newRange.end=tt._createAt(t.moveTargetPosition):n.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasEndBeforeMergedElement?n.newRange.end=tt._createAt(t.insertionPosition):n.newRange.end=i.end,[n]}n.newRange=n.newRange._getTransformedBySplitOperation(t)}return[n]}),me(si,Si,(n,t)=>(n.sourcePosition.hasSameParentAs(t.position)&&(n.howMany+=t.howMany),n.sourcePosition=n.sourcePosition._getTransformedByInsertOperation(t),n.targetPosition=n.targetPosition._getTransformedByInsertOperation(t),[n])),me(si,si,(n,t,e)=>{if(n.sourcePosition.isEqual(t.sourcePosition)&&n.targetPosition.isEqual(t.targetPosition)){if(e.bWasUndone){let i=t.graveyardPosition.path.slice();return i.push(0),n.sourcePosition=new tt(t.graveyardPosition.root,i),n.howMany=0,[n]}return[new wi(0)]}if(n.sourcePosition.isEqual(t.sourcePosition)&&!n.targetPosition.isEqual(t.targetPosition)&&!e.bWasUndone&&e.abRelation!="splitAtSource"){let i=n.targetPosition.root.rootName=="$graveyard",o=t.targetPosition.root.rootName=="$graveyard";if(o&&!i||!(i&&!o)&&e.aIsStrong){let s=t.targetPosition._getTransformedByMergeOperation(t),d=n.targetPosition._getTransformedByMergeOperation(t);return[new fe(s,n.howMany,d,0)]}return[new wi(0)]}return n.sourcePosition.hasSameParentAs(t.targetPosition)&&(n.howMany+=t.howMany),n.sourcePosition=n.sourcePosition._getTransformedByMergeOperation(t),n.targetPosition=n.targetPosition._getTransformedByMergeOperation(t),n.graveyardPosition.isEqual(t.graveyardPosition)&&e.aIsStrong||(n.graveyardPosition=n.graveyardPosition._getTransformedByMergeOperation(t)),[n]}),me(si,fe,(n,t,e)=>{let i=$._createFromPositionAndShift(t.sourcePosition,t.howMany);return t.type=="remove"&&!e.bWasUndone&&!e.forceWeakRemove&&n.deletionPosition.hasSameParentAs(t.sourcePosition)&&i.containsPosition(n.sourcePosition)?[new wi(0)]:(t.sourcePosition.getShiftedBy(t.howMany).isEqual(n.sourcePosition)?n.sourcePosition.stickiness="toNone":t.targetPosition.isEqual(n.sourcePosition)&&e.abRelation=="mergeSourceAffected"?n.sourcePosition.stickiness="toNext":t.sourcePosition.isEqual(n.targetPosition)?(n.targetPosition.stickiness="toNone",n.howMany-=t.howMany):t.targetPosition.isEqual(n.targetPosition)&&e.abRelation=="mergeTargetWasBefore"?(n.targetPosition.stickiness="toPrevious",n.howMany+=t.howMany):(n.sourcePosition.hasSameParentAs(t.targetPosition)&&(n.howMany+=t.howMany),n.sourcePosition.hasSameParentAs(t.sourcePosition)&&(n.howMany-=t.howMany)),n.sourcePosition=n.sourcePosition._getTransformedByMoveOperation(t),n.targetPosition=n.targetPosition._getTransformedByMoveOperation(t),n.sourcePosition.stickiness="toPrevious",n.targetPosition.stickiness="toNext",n.graveyardPosition.isEqual(t.targetPosition)||(n.graveyardPosition=n.graveyardPosition._getTransformedByMoveOperation(t)),[n])}),me(si,Fe,(n,t,e)=>{if(t.graveyardPosition&&(n.graveyardPosition=n.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),n.deletionPosition.isEqual(t.graveyardPosition)&&(n.howMany=t.howMany)),n.targetPosition.isEqual(t.splitPosition)){let i=t.howMany!=0,o=t.graveyardPosition&&n.deletionPosition.isEqual(t.graveyardPosition);if(i||o||e.abRelation=="mergeTargetNotMoved")return n.sourcePosition=n.sourcePosition._getTransformedBySplitOperation(t),[n]}if(n.sourcePosition.isEqual(t.splitPosition)){if(e.abRelation=="mergeSourceNotMoved")return n.howMany=0,n.targetPosition=n.targetPosition._getTransformedBySplitOperation(t),[n];if(e.abRelation=="mergeSameElement"||n.sourcePosition.offset>0)return n.sourcePosition=t.moveTargetPosition.clone(),n.targetPosition=n.targetPosition._getTransformedBySplitOperation(t),[n]}return n.sourcePosition.hasSameParentAs(t.splitPosition)&&(n.howMany=t.splitPosition.offset),n.sourcePosition=n.sourcePosition._getTransformedBySplitOperation(t),n.targetPosition=n.targetPosition._getTransformedBySplitOperation(t),[n]}),me(fe,Si,(n,t)=>{let e=$._createFromPositionAndShift(n.sourcePosition,n.howMany)._getTransformedByInsertOperation(t,!1)[0];return n.sourcePosition=e.start,n.howMany=e.end.offset-e.start.offset,n.targetPosition.isEqual(t.position)||(n.targetPosition=n.targetPosition._getTransformedByInsertOperation(t)),[n]}),me(fe,fe,(n,t,e)=>{let i=$._createFromPositionAndShift(n.sourcePosition,n.howMany),o=$._createFromPositionAndShift(t.sourcePosition,t.howMany),s,d=e.aIsStrong,u=!e.aIsStrong;if(e.abRelation=="insertBefore"||e.baRelation=="insertAfter"?u=!0:e.abRelation!="insertAfter"&&e.baRelation!="insertBefore"||(u=!1),s=n.targetPosition.isEqual(t.targetPosition)&&u?n.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):n.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Ny(n,t)&&Ny(t,n))return[t.getReversed()];if(i.containsPosition(t.targetPosition)&&i.containsRange(o,!0))return i.start=i.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),i.end=i.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),vc([i],s);if(o.containsPosition(n.targetPosition)&&o.containsRange(i,!0))return i.start=i.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),i.end=i.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),vc([i],s);let p=Ei(n.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if(p=="prefix"||p=="extension")return i.start=i.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),i.end=i.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),vc([i],s);n.type!="remove"||t.type=="remove"||e.aWasUndone||e.forceWeakRemove?n.type=="remove"||t.type!="remove"||e.bWasUndone||e.forceWeakRemove||(d=!1):d=!0;let g=[],b=i.getDifference(o);for(let v of b){v.start=v.start._getTransformedByDeletion(t.sourcePosition,t.howMany),v.end=v.end._getTransformedByDeletion(t.sourcePosition,t.howMany);let C=Ei(v.start.getParentPath(),t.getMovedRangeStart().getParentPath())=="same",E=v._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,C);g.push(...E)}let _=i.getIntersection(o);return _!==null&&d&&(_.start=_.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),_.end=_.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),g.length===0?g.push(_):g.length==1?o.start.isBefore(i.start)||o.start.isEqual(i.start)?g.unshift(_):g.push(_):g.splice(1,0,_)),g.length===0?[new wi(n.baseVersion)]:vc(g,s)}),me(fe,Fe,(n,t,e)=>{let i=n.targetPosition.clone();n.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&e.abRelation!="moveTargetAfter"||(i=n.targetPosition._getTransformedBySplitOperation(t));let o=$._createFromPositionAndShift(n.sourcePosition,n.howMany);if(o.end.isEqual(t.insertionPosition))return t.graveyardPosition||n.howMany++,n.targetPosition=i,[n];if(o.start.hasSameParentAs(t.splitPosition)&&o.containsPosition(t.splitPosition)){let d=new $(t.splitPosition,o.end);return d=d._getTransformedBySplitOperation(t),vc([new $(o.start,t.splitPosition),d],i)}n.targetPosition.isEqual(t.splitPosition)&&e.abRelation=="insertAtSource"&&(i=t.moveTargetPosition),n.targetPosition.isEqual(t.insertionPosition)&&e.abRelation=="insertBetween"&&(i=n.targetPosition);let s=[o._getTransformedBySplitOperation(t)];if(t.graveyardPosition){let d=o.start.isEqual(t.graveyardPosition)||o.containsPosition(t.graveyardPosition);n.howMany>1&&d&&!e.aWasUndone&&s.push($._createFromPositionAndShift(t.insertionPosition,1))}return vc(s,i)}),me(fe,si,(n,t,e)=>{let i=$._createFromPositionAndShift(n.sourcePosition,n.howMany);if(t.deletionPosition.hasSameParentAs(n.sourcePosition)&&i.containsPosition(t.sourcePosition)){if(n.type!="remove"||e.forceWeakRemove){if(n.howMany==1)return e.bWasUndone?(n.sourcePosition=t.graveyardPosition.clone(),n.targetPosition=n.targetPosition._getTransformedByMergeOperation(t),[n]):[new wi(0)]}else if(!e.aWasUndone){let s=[],d=t.graveyardPosition.clone(),u=t.targetPosition._getTransformedByMergeOperation(t);n.howMany>1&&(s.push(new fe(n.sourcePosition,n.howMany-1,n.targetPosition,0)),d=d._getTransformedByMove(n.sourcePosition,n.targetPosition,n.howMany-1),u=u._getTransformedByMove(n.sourcePosition,n.targetPosition,n.howMany-1));let p=t.deletionPosition._getCombined(n.sourcePosition,n.targetPosition),g=new fe(d,1,p,0),b=g.getMovedRangeStart().path.slice();b.push(0);let _=new tt(g.targetPosition.root,b);u=u._getTransformedByMove(d,p,1);let v=new fe(u,t.howMany,_,0);return s.push(g),s.push(v),s}}let o=$._createFromPositionAndShift(n.sourcePosition,n.howMany)._getTransformedByMergeOperation(t);return n.sourcePosition=o.start,n.howMany=o.end.offset-o.start.offset,n.targetPosition=n.targetPosition._getTransformedByMergeOperation(t),[n]}),me(pn,Si,(n,t)=>(n.position=n.position._getTransformedByInsertOperation(t),[n])),me(pn,si,(n,t)=>n.position.isEqual(t.deletionPosition)?(n.position=t.graveyardPosition.clone(),n.position.stickiness="toNext",[n]):(n.position=n.position._getTransformedByMergeOperation(t),[n])),me(pn,fe,(n,t)=>(n.position=n.position._getTransformedByMoveOperation(t),[n])),me(pn,pn,(n,t,e)=>{if(n.position.isEqual(t.position)){if(!e.aIsStrong)return[new wi(0)];n.oldName=t.newName}return[n]}),me(pn,Fe,(n,t)=>{if(Ei(n.position.path,t.splitPosition.getParentPath())=="same"&&!t.graveyardPosition){let e=new pn(n.position.getShiftedBy(1),n.oldName,n.newName,0);return[n,e]}return n.position=n.position._getTransformedBySplitOperation(t),[n]}),me(gr,gr,(n,t,e)=>{if(n.root===t.root&&n.key===t.key){if(!e.aIsStrong||n.newValue===t.newValue)return[new wi(0)];n.oldValue=t.newValue}return[n]}),me(jo,jo,(n,t)=>n.rootName===t.rootName&&n.isAdd===t.isAdd?[new wi(0)]:[n]),me(Fe,Si,(n,t)=>(n.splitPosition.hasSameParentAs(t.position)&&n.splitPosition.offset<t.position.offset&&(n.howMany+=t.howMany),n.splitPosition=n.splitPosition._getTransformedByInsertOperation(t),n.insertionPosition=n.insertionPosition._getTransformedByInsertOperation(t),[n])),me(Fe,si,(n,t,e)=>{if(!n.graveyardPosition&&!e.bWasUndone&&n.splitPosition.hasSameParentAs(t.sourcePosition)){let i=t.graveyardPosition.path.slice();i.push(0);let o=new tt(t.graveyardPosition.root,i),s=Fe.getInsertionPosition(new tt(t.graveyardPosition.root,i)),d=new Fe(o,0,s,null,0);return n.splitPosition=n.splitPosition._getTransformedByMergeOperation(t),n.insertionPosition=Fe.getInsertionPosition(n.splitPosition),n.graveyardPosition=d.insertionPosition.clone(),n.graveyardPosition.stickiness="toNext",[d,n]}return n.splitPosition.hasSameParentAs(t.deletionPosition)&&!n.splitPosition.isAfter(t.deletionPosition)&&n.howMany--,n.splitPosition.hasSameParentAs(t.targetPosition)&&(n.howMany+=t.howMany),n.splitPosition=n.splitPosition._getTransformedByMergeOperation(t),n.insertionPosition=Fe.getInsertionPosition(n.splitPosition),n.graveyardPosition&&(n.graveyardPosition=n.graveyardPosition._getTransformedByMergeOperation(t)),[n]}),me(Fe,fe,(n,t,e)=>{let i=$._createFromPositionAndShift(t.sourcePosition,t.howMany);if(n.graveyardPosition){let s=i.start.isEqual(n.graveyardPosition)||i.containsPosition(n.graveyardPosition);if(!e.bWasUndone&&s){let d=n.splitPosition._getTransformedByMoveOperation(t),u=n.graveyardPosition._getTransformedByMoveOperation(t),p=u.path.slice();p.push(0);let g=new tt(u.root,p);return[new fe(d,n.howMany,g,0)]}n.graveyardPosition=n.graveyardPosition._getTransformedByMoveOperation(t)}let o=n.splitPosition.isEqual(t.targetPosition);if(o&&(e.baRelation=="insertAtSource"||e.abRelation=="splitBefore"))return n.howMany+=t.howMany,n.splitPosition=n.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),n.insertionPosition=Fe.getInsertionPosition(n.splitPosition),[n];if(o&&e.abRelation&&e.abRelation.howMany){let{howMany:s,offset:d}=e.abRelation;return n.howMany+=s,n.splitPosition=n.splitPosition.getShiftedBy(d),[n]}if(n.splitPosition.hasSameParentAs(t.sourcePosition)&&i.containsPosition(n.splitPosition)){let s=t.howMany-(n.splitPosition.offset-t.sourcePosition.offset);return n.howMany-=s,n.splitPosition.hasSameParentAs(t.targetPosition)&&n.splitPosition.offset<t.targetPosition.offset&&(n.howMany+=t.howMany),n.splitPosition=t.sourcePosition.clone(),n.insertionPosition=Fe.getInsertionPosition(n.splitPosition),[n]}return t.sourcePosition.isEqual(t.targetPosition)||(n.splitPosition.hasSameParentAs(t.sourcePosition)&&n.splitPosition.offset<=t.sourcePosition.offset&&(n.howMany-=t.howMany),n.splitPosition.hasSameParentAs(t.targetPosition)&&n.splitPosition.offset<t.targetPosition.offset&&(n.howMany+=t.howMany)),n.splitPosition.stickiness="toNone",n.splitPosition=n.splitPosition._getTransformedByMoveOperation(t),n.splitPosition.stickiness="toNext",n.graveyardPosition?n.insertionPosition=n.insertionPosition._getTransformedByMoveOperation(t):n.insertionPosition=Fe.getInsertionPosition(n.splitPosition),[n]}),me(Fe,Fe,(n,t,e)=>{if(n.splitPosition.isEqual(t.splitPosition)){if(!n.graveyardPosition&&!t.graveyardPosition)return[new wi(0)];if(n.graveyardPosition&&t.graveyardPosition&&n.graveyardPosition.isEqual(t.graveyardPosition))return[new wi(0)];if(e.abRelation=="splitBefore")return n.howMany=0,n.graveyardPosition=n.graveyardPosition._getTransformedBySplitOperation(t),[n]}if(n.graveyardPosition&&t.graveyardPosition&&n.graveyardPosition.isEqual(t.graveyardPosition)){let i=n.splitPosition.root.rootName=="$graveyard",o=t.splitPosition.root.rootName=="$graveyard";if(o&&!i||!(i&&!o)&&e.aIsStrong){let s=[];return t.howMany&&s.push(new fe(t.moveTargetPosition,t.howMany,t.splitPosition,0)),n.howMany&&s.push(new fe(n.splitPosition,n.howMany,n.moveTargetPosition,0)),s}return[new wi(0)]}if(n.graveyardPosition&&(n.graveyardPosition=n.graveyardPosition._getTransformedBySplitOperation(t)),n.splitPosition.isEqual(t.insertionPosition)&&e.abRelation=="splitBefore")return n.howMany++,[n];if(t.splitPosition.isEqual(n.insertionPosition)&&e.baRelation=="splitBefore"){let i=t.insertionPosition.path.slice();i.push(0);let o=new tt(t.insertionPosition.root,i);return[n,new fe(n.insertionPosition,1,o,0)]}return n.splitPosition.hasSameParentAs(t.splitPosition)&&n.splitPosition.offset<t.splitPosition.offset&&(n.howMany-=t.howMany),n.splitPosition=n.splitPosition._getTransformedBySplitOperation(t),n.insertionPosition=Fe.getInsertionPosition(n.splitPosition),[n]});class Li extends ve(tt){constructor(t,e,i="toNone"){if(super(t,e,i),!this.root.is("rootElement"))throw new L("model-liveposition-root-not-rootelement",t);DB.call(this)}detach(){this.stopListening()}toPosition(){return new tt(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}function DB(){this.listenTo(this.root.document.model,"applyOperation",(n,t)=>{let e=t[0];e.isDocumentOperation&&MB.call(this,e)},{priority:"low"})}function MB(n){let t=this.getTransformedByOperation(n);if(!this.isEqual(t)){let e=this.toPosition();this.path=t.path,this.root=t.root,this.fire("change",e)}}Li.prototype.is=function(n){return n==="livePosition"||n==="model:livePosition"||n=="position"||n==="model:position"};class yc{constructor(t={}){typeof t=="string"&&(t=t==="transparent"?{isUndoable:!1}:{},gt("batch-constructor-deprecated-string-type"));let{isUndoable:e=!0,isLocal:i=!0,isUndo:o=!1,isTyping:s=!1}=t;this.operations=[],this.isUndoable=e,this.isLocal=i,this.isUndo=o,this.isTyping=s}get type(){return gt("batch-type-deprecated"),"default"}get baseVersion(){for(let t of this.operations)if(t.baseVersion!==null)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}var IB=Object.defineProperty,SB=Object.defineProperties,TB=Object.getOwnPropertyDescriptors,Ly=Object.getOwnPropertySymbols,OB=Object.prototype.hasOwnProperty,PB=Object.prototype.propertyIsEnumerable,Fy=(n,t,e)=>t in n?IB(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,zy=(n,t)=>{for(var e in t||(t={}))OB.call(t,e)&&Fy(n,e,t[e]);if(Ly)for(var e of Ly(t))PB.call(t,e)&&Fy(n,e,t[e]);return n};class BB{constructor(t){this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changedRoots=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set,this._markerCollection=t}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0&&this._changedRoots.size==0}bufferOperation(t){let e=t;switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(let i of e.range.getItems({shallow:!0}))this._isInInsertedElement(i.parent)||this._markAttribute(i);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;let i=this._isInInsertedElement(e.sourcePosition.parent),o=this._isInInsertedElement(e.targetPosition.parent);i||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),o||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);let i=$._createFromPositionAndShift(e.position,1);for(let o of this._markerCollection.getMarkersIntersectingRange(i)){let s=o.getData();this.bufferMarkerChange(o.name,s,s)}break}case"split":{let i=e.splitPosition.parent;this._isInInsertedElement(i)||this._markRemove(i,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{let i=e.sourcePosition.parent;this._isInInsertedElement(i.parent)||this._markRemove(i.parent,i.startOffset,1);let o=e.graveyardPosition.parent;this._markInsert(o,e.graveyardPosition.offset,1);let s=e.targetPosition.parent;this._isInInsertedElement(s)||this._markInsert(s,e.targetPosition.offset,i.maxOffset);break}case"detachRoot":case"addRoot":{let i=e.affectedSelectable;if(!i._isLoaded||i.isAttached()==e.isAdd)return;this._bufferRootStateChange(e.rootName,e.isAdd);break}case"addRootAttribute":case"removeRootAttribute":case"changeRootAttribute":{if(!e.root._isLoaded)return;let i=e.root.rootName;this._bufferRootAttributeChange(i,e.key,e.oldValue,e.newValue);break}}this._cachedChanges=null}bufferMarkerChange(t,e,i){e.range&&e.range.root.is("rootElement")&&!e.range.root._isLoaded&&(e.range=null),i.range&&i.range.root.is("rootElement")&&!i.range.root._isLoaded&&(i.range=null);let o=this._changedMarkers.get(t);o?o.newMarkerData=i:(o={newMarkerData:i,oldMarkerData:e},this._changedMarkers.set(t,o)),o.oldMarkerData.range==null&&i.range==null&&this._changedMarkers.delete(t)}getMarkersToRemove(){let t=[];for(let[e,i]of this._changedMarkers)i.oldMarkerData.range!=null&&t.push({name:e,range:i.oldMarkerData.range});return t}getMarkersToAdd(){let t=[];for(let[e,i]of this._changedMarkers)i.newMarkerData.range!=null&&t.push({name:e,range:i.newMarkerData.range});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(([t,e])=>({name:t,data:{oldRange:e.oldMarkerData.range,newRange:e.newMarkerData.range}}))}hasDataChanges(){if(this.getChanges().length||this._changedRoots.size>0)return!0;for(let{newMarkerData:t,oldMarkerData:e}of this._changedMarkers.values()){if(t.affectsData!==e.affectsData)return!0;if(t.affectsData){let i=t.range&&!e.range,o=!t.range&&e.range,s=t.range&&e.range&&!t.range.isEqual(e.range);if(i||o||s)return!0}}return!1}getChanges(t={}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let e=[];for(let i of this._changesInElement.keys()){let o=this._changesInElement.get(i).sort((b,_)=>b.offset===_.offset?b.type!=_.type?b.type=="remove"?-1:1:0:b.offset<_.offset?-1:1),s=this._elementSnapshots.get(i),d=jy(i.getChildren()),u=RB(s.length,o),p=0,g=0;for(let b of u)if(b==="i")e.push(this._getInsertDiff(i,p,d[p])),p++;else if(b==="r")e.push(this._getRemoveDiff(i,p,s[g])),g++;else if(b==="a"){let _=d[p].attributes,v=s[g].attributes,C;if(d[p].name=="$text")C=new $(tt._createAt(i,p),tt._createAt(i,p+1));else{let E=i.offsetToIndex(p);C=new $(tt._createAt(i,p),tt._createAt(i.getChild(E),0))}e.push(...this._getAttributesDiff(C,v,_)),p++,g++}else p++,g++}e.sort((i,o)=>i.position.root!=o.position.root?i.position.root.rootName<o.position.root.rootName?-1:1:i.position.isEqual(o.position)?i.changeCount-o.changeCount:i.position.isBefore(o.position)?-1:1);for(let i=1,o=0;i<e.length;i++){let s=e[o],d=e[i],u=s.type=="remove"&&d.type=="remove"&&s.name=="$text"&&d.name=="$text"&&s.position.isEqual(d.position),p=s.type=="insert"&&d.type=="insert"&&s.name=="$text"&&d.name=="$text"&&s.position.parent==d.position.parent&&s.position.offset+s.length==d.position.offset,g=s.type=="attribute"&&d.type=="attribute"&&s.position.parent==d.position.parent&&s.range.isFlat&&d.range.isFlat&&s.position.offset+s.length==d.position.offset&&s.attributeKey==d.attributeKey&&s.attributeOldValue==d.attributeOldValue&&s.attributeNewValue==d.attributeNewValue;u||p||g?(s.length++,g&&(s.range.end=s.range.end.getShiftedBy(1)),e[i]=null):o=i}e=e.filter(i=>i);for(let i of e)delete i.changeCount,i.type=="attribute"&&(delete i.position,delete i.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e,this._cachedChanges=e.filter(NB),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getChangedRoots(){return Array.from(this._changedRoots.values()).map(t=>{let e=zy({},t);return e.state!==void 0&&delete e.attributes,e})}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._changedRoots.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_bufferRootStateChange(t,e){if(!this._changedRoots.has(t))return void this._changedRoots.set(t,{name:t,state:e?"attached":"detached"});let i=this._changedRoots.get(t);i.state!==void 0?(delete i.state,i.attributes===void 0&&this._changedRoots.delete(t)):i.state=e?"attached":"detached"}_bufferRootAttributeChange(t,e,i,o){let s=this._changedRoots.get(t)||{name:t},d=s.attributes||{};if(d[e]){let u=d[e];o===u.oldValue?delete d[e]:u.newValue=o}else d[e]={oldValue:i,newValue:o};Object.entries(d).length===0?(delete s.attributes,s.state===void 0&&this._changedRoots.delete(t)):(s.attributes=d,this._changedRoots.set(t,s))}_refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize),this._refreshedItems.add(t);let e=$._createOn(t);for(let i of this._markerCollection.getMarkersIntersectingRange(e)){let o=i.getData();this.bufferMarkerChange(i.name,o,o)}this._cachedChanges=null}_bufferRootLoad(t){if(t.isAttached()){this._bufferRootStateChange(t.rootName,!0),this._markInsert(t,0,t.maxOffset);for(let i of t.getAttributeKeys())this._bufferRootAttributeChange(t.rootName,i,null,t.getAttribute(i));for(let i of this._markerCollection)if(i.getRange().root==t){let o=i.getData();this.bufferMarkerChange(i.name,(e=zy({},o),SB(e,TB({range:null}))),o)}var e}}_markInsert(t,e,i){if(t.root.is("rootElement")&&!t.root._isLoaded)return;let o={type:"insert",offset:e,howMany:i,count:this._changeCount++};this._markChange(t,o)}_markRemove(t,e,i){if(t.root.is("rootElement")&&!t.root._isLoaded)return;let o={type:"remove",offset:e,howMany:i,count:this._changeCount++};this._markChange(t,o),this._removeAllNestedChanges(t,e,i)}_markAttribute(t){if(t.root.is("rootElement")&&!t.root._isLoaded)return;let e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);let i=this._getChangesForElement(t);this._handleChange(e,i),i.push(e);for(let o=0;o<i.length;o++)i[o].howMany<1&&(i.splice(o,1),o--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,jy(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(let i of e){let o=t.offset+t.howMany,s=i.offset+i.howMany;if(t.type=="insert"&&(i.type=="insert"&&(t.offset<=i.offset?i.offset+=t.howMany:t.offset<s&&(i.howMany+=t.nodesToHandle,t.nodesToHandle=0)),i.type=="remove"&&t.offset<i.offset&&(i.offset+=t.howMany),i.type=="attribute")){if(t.offset<=i.offset)i.offset+=t.howMany;else if(t.offset<s){let d=i.howMany;i.howMany=t.offset-i.offset,e.unshift({type:"attribute",offset:o,howMany:d-i.howMany,count:this._changeCount++})}}if(t.type=="remove"){if(i.type=="insert"){if(o<=i.offset)i.offset-=t.howMany;else if(o<=s)if(t.offset<i.offset){let d=o-i.offset;i.offset=t.offset,i.howMany-=d,t.nodesToHandle-=d}else i.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=i.offset)t.nodesToHandle-=i.howMany,i.howMany=0;else if(t.offset<s){let d=s-t.offset;i.howMany-=d,t.nodesToHandle-=d}}if(i.type=="remove"&&(o<=i.offset?i.offset-=t.howMany:t.offset<i.offset&&(t.nodesToHandle+=i.howMany,i.howMany=0)),i.type=="attribute"){if(o<=i.offset)i.offset-=t.howMany;else if(t.offset<i.offset){let d=o-i.offset;i.offset=t.offset,i.howMany-=d}else if(t.offset<s)if(o<=s){let d=i.howMany;i.howMany=t.offset-i.offset;let u=d-i.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:u,count:this._changeCount++})}else i.howMany-=s-t.offset}}if(t.type=="attribute"){if(i.type=="insert")if(t.offset<i.offset&&o>i.offset){if(o>s){let d={type:"attribute",offset:s,howMany:o-s,count:this._changeCount++};this._handleChange(d,e),e.push(d)}t.nodesToHandle=i.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=i.offset&&t.offset<s&&(o>s?(t.nodesToHandle=o-s,t.offset=s):t.nodesToHandle=0);if(i.type=="remove"&&t.offset<i.offset&&o>i.offset){let d={type:"attribute",offset:i.offset,howMany:o-i.offset,count:this._changeCount++};this._handleChange(d,e),e.push(d),t.nodesToHandle=i.offset-t.offset,t.howMany=t.nodesToHandle}i.type=="attribute"&&(t.offset>=i.offset&&o<=s?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=i.offset&&o>=s&&(i.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,i){return{type:"insert",position:tt._createAt(t,e),name:i.name,attributes:new Map(i.attributes),length:1,changeCount:this._changeCount++,_element:i.element}}_getRemoveDiff(t,e,i){return{type:"remove",position:tt._createAt(t,e),name:i.name,attributes:new Map(i.attributes),length:1,changeCount:this._changeCount++,_element:i.element}}_getAttributesDiff(t,e,i){let o=[];i=new Map(i);for(let[s,d]of e){let u=i.has(s)?i.get(s):null;u!==d&&o.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:s,attributeOldValue:d,attributeNewValue:u,changeCount:this._changeCount++}),i.delete(s)}for(let[s,d]of i)o.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:s,attributeOldValue:null,attributeNewValue:d,changeCount:this._changeCount++});return o}_isInInsertedElement(t){let e=t.parent;if(!e)return!1;let i=this._changesInElement.get(e),o=t.startOffset;if(i){for(let s of i)if(s.type=="insert"&&o>=s.offset&&o<s.offset+s.howMany)return!0}return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,i){let o=new $(tt._createAt(t,e),tt._createAt(t,e+i));for(let s of o.getItems({shallow:!0}))s.is("element")&&(this._elementSnapshots.delete(s),this._changesInElement.delete(s),this._removeAllNestedChanges(s,0,s.maxOffset))}}function jy(n){let t=[];for(let e of n)if(e.is("$text"))for(let i=0;i<e.data.length;i++)t.push({name:"$text",attributes:new Map(e.getAttributes())});else t.push({name:e.name,attributes:new Map(e.getAttributes()),element:e});return t}function RB(n,t){let e=[],i=0,o=0;for(let s of t){if(s.offset>i){for(let d=0;d<s.offset-i;d++)e.push("e");o+=s.offset-i}if(s.type=="insert"){for(let d=0;d<s.howMany;d++)e.push("i");i=s.offset+s.howMany}else if(s.type=="remove"){for(let d=0;d<s.howMany;d++)e.push("r");i=s.offset,o+=s.howMany}else e.push(..."a".repeat(s.howMany).split("")),i=s.offset+s.howMany,o+=s.howMany}if(o<n)for(let s=0;s<n-o-i;s++)e.push("e");return e}function NB(n){let t="position"in n&&n.position.root.rootName=="$graveyard",e="range"in n&&n.range.root.rootName=="$graveyard";return!t&&!e}class LB{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(t){this._operations.length&&t>this._version+1&&this._gaps.set(this._version,t),this._version=t}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(t){if(t.baseVersion!==this.version)throw new L("model-document-history-addoperation-incorrect-version",this,{operation:t,historyVersion:this.version});this._operations.push(t),this._version++,this._baseVersionToOperationIndex.set(t.baseVersion,this._operations.length-1)}getOperations(t,e=this.version){if(!this._operations.length)return[];let i=this._operations[0];t===void 0&&(t=i.baseVersion);let o=e-1;for(let[u,p]of this._gaps)t>u&&t<p&&(t=p),o>u&&o<p&&(o=u-1);if(o<i.baseVersion||t>this.lastOperation.baseVersion)return[];let s=this._baseVersionToOperationIndex.get(t);s===void 0&&(s=0);let d=this._baseVersionToOperationIndex.get(o);return d===void 0&&(d=this._operations.length-1),this._operations.slice(s,d+1)}getOperation(t){let e=this._baseVersionToOperationIndex.get(t);if(e!==void 0)return this._operations[e]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class Bm extends Se{constructor(t,e,i="main"){super(e),this._isAttached=!0,this._isLoaded=!0,this._document=t,this.rootName=i}get document(){return this._document}isAttached(){return this._isAttached}toJSON(){return this.rootName}}Bm.prototype.is=function(n,t){return t?t===this.name&&(n==="rootElement"||n==="model:rootElement"||n==="element"||n==="model:element"):n==="rootElement"||n==="model:rootElement"||n==="element"||n==="model:element"||n==="node"||n==="model:node"};var FB=Object.defineProperty,zB=Object.defineProperties,jB=Object.getOwnPropertyDescriptors,Vy=Object.getOwnPropertySymbols,VB=Object.prototype.hasOwnProperty,UB=Object.prototype.propertyIsEnumerable,Uy=(n,t,e)=>t in n?FB(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Hy=(n,t)=>{for(var e in t||(t={}))VB.call(t,e)&&Uy(n,e,t[e]);if(Vy)for(var e of Vy(t))UB.call(t,e)&&Uy(n,e,t[e]);return n},qy=(n,t)=>zB(n,jB(t));let Wy="$graveyard";class HB extends ve(){constructor(t){super(),this.model=t,this.history=new LB,this.selection=new ko(this),this.roots=new Yn({idProperty:"rootName"}),this.differ=new BB(t.markers),this.isReadOnly=!1,this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Wy),this.listenTo(t,"applyOperation",(e,i)=>{let o=i[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(t,"applyOperation",(e,i)=>{let o=i[0];o.isDocumentOperation&&this.history.addOperation(o)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(e,i,o,s,d)=>{let u=qy(Hy({},i.getData()),{range:s});this.differ.bufferMarkerChange(i.name,d,u),o===null&&i.on("change",(p,g)=>{let b=i.getData();this.differ.bufferMarkerChange(i.name,qy(Hy({},b),{range:g}),b)})}),this.registerPostFixer(e=>{let i=!1;for(let o of this.roots)o.isAttached()||o.isEmpty||(e.remove(e.createRangeIn(o)),i=!0);for(let o of this.model.markers)o.getRange().root.isAttached()||(e.removeMarker(o),i=!0);return i})}get version(){return this.history.version}set version(t){this.history.version=t}get graveyard(){return this.getRoot(Wy)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new L("model-document-createroot-name-exists",this,{name:e});let i=new Bm(this,t,e);return this.roots.add(i),i}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(t=!1){return this.getRoots(t).map(e=>e.rootName)}getRoots(t=!1){return this.roots.filter(e=>e!=this.graveyard&&(t||e.isAttached())&&e._isLoaded)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){let t=uv(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){let t=this.getRoots();return t.length?t[0]:this.graveyard}_getDefaultRange(){let t=this._getDefaultRoot(),e=this.model,i=e.schema,o=e.createPositionFromPath(t,[0]);return i.getNearestSelectionRange(o)||e.createRange(o)}_validateSelectionRange(t){return Gy(t.start)&&Gy(t.end)}_callPostFixers(t){let e=!1;do for(let i of this._postFixers)if(this.selection.refresh(),e=i(t),e)break;while(e)}}function Gy(n){let t=n.textNode;if(t){let e=t.data,i=n.offset-t.startOffset;return!xb(e,i)&&!Eb(e,i)}return!0}var qB=Object.defineProperty,WB=Object.defineProperties,GB=Object.getOwnPropertyDescriptors,$y=Object.getOwnPropertySymbols,$B=Object.prototype.hasOwnProperty,KB=Object.prototype.propertyIsEnumerable,Ky=(n,t,e)=>t in n?qB(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;class YB extends ve(){constructor(){super(...arguments),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){let e=t instanceof Cc?t.name:t;return this._markers.has(e)}get(t){return this._markers.get(t)||null}_set(t,e,i=!1,o=!1){let s=t instanceof Cc?t.name:t;if(s.includes(","))throw new L("markercollection-incorrect-marker-name",this);let d=this._markers.get(s);if(d){let b=d.getData(),_=d.getRange(),v=!1;return _.isEqual(e)||(d._attachLiveRange(Mn.fromRange(e)),v=!0),i!=d.managedUsingOperations&&(d._managedUsingOperations=i,v=!0),typeof o=="boolean"&&o!=d.affectsData&&(d._affectsData=o,v=!0),v&&this.fire(`update:${s}`,d,_,e,b),d}let u=Mn.fromRange(e),p=new Cc(s,u,i,o);var g;return this._markers.set(s,p),this.fire(`update:${s}`,p,null,e,(g=((b,_)=>{for(var v in _||(_={}))$B.call(_,v)&&Ky(b,v,_[v]);if($y)for(var v of $y(_))KB.call(_,v)&&Ky(b,v,_[v]);return b})({},p.getData()),WB(g,GB({range:null})))),p}_remove(t){let e=t instanceof Cc?t.name:t,i=this._markers.get(e);return!!i&&(this._markers.delete(e),this.fire(`update:${e}`,i,i.getRange(),null,i.getData()),this._destroyMarker(i),!0)}_refresh(t){let e=t instanceof Cc?t.name:t,i=this._markers.get(e);if(!i)throw new L("markercollection-refresh-marker-not-exists",this);let o=i.getRange();this.fire(`update:${e}`,i,o,o,i.getData())}*getMarkersAtPosition(t){for(let e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(let e of this)e.getRange().getIntersection(t)!==null&&(yield e)}destroy(){for(let t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(let e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}class Cc extends ve(Qr){constructor(t,e,i,o){super(),this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=i,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new L("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new L("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new L("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new L("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new L("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}Cc.prototype.is=function(n){return n==="marker"||n==="model:marker"};class QB extends In{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}get affectedSelectable(){return null}toJSON(){let t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new L("detach-operation-on-document-node",this)}_execute(){My($._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class br extends Qr{constructor(t){super(),this.markers=new Map,this._children=new Ed,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}isAttached(){return!1}getAncestors(){return[]}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(let i of t)e=e.getChild(e.offsetToIndex(i));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){let t=[];for(let e of this._children)t.push(e.toJSON());return t}static fromJSON(t){let e=[];for(let i of t)i.name?e.push(Se.fromJSON(i)):e.push(Le.fromJSON(i));return new br(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){let i=function(o){return typeof o=="string"?[new Le(o)]:(Ri(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new Le(s):s instanceof _o?new Le(s.data,s.getAttributes()):s))}(e);for(let o of i)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(t,i)}_removeChildren(t,e=1){let i=this._children._removeNodes(t,e);for(let o of i)o.parent=null;return i}}br.prototype.is=function(n){return n==="documentFragment"||n==="model:documentFragment"};class ZB{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new Le(t,e)}createElement(t,e){return new Se(t,e)}createDocumentFragment(){return new br}cloneElement(t,e=!0){return t._clone(e)}insert(t,e,i=0){if(this._assertWriterUsedCorrectly(),t instanceof Le&&t.data=="")return;let o=tt._createAt(e,i);if(t.parent){if(Zy(t.root,o.root))return void this.move($._createOn(t),o);if(t.root.document)throw new L("model-writer-insert-forbidden-move",this);this.remove(t)}let s=o.root.document?o.root.document.version:null,d=new Si(o,t,s);if(t instanceof Le&&(d.shouldReceiveAttributes=!0),this.batch.addOperation(d),this.model.applyOperation(d),t instanceof br)for(let[u,p]of t.markers){let g=tt._createAt(p.root,0),b={range:new $(p.start._getCombined(g,o),p.end._getCombined(g,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(u)?this.updateMarker(u,b):this.addMarker(u,b)}}insertText(t,e,i,o){e instanceof br||e instanceof Se||e instanceof tt?this.insert(this.createText(t),e,i):this.insert(this.createText(t,e),i,o)}insertElement(t,e,i,o){e instanceof br||e instanceof Se||e instanceof tt?this.insert(this.createElement(t),e,i):this.insert(this.createElement(t,e),i,o)}append(t,e){this.insert(t,e,"end")}appendText(t,e,i){e instanceof br||e instanceof Se?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),i,"end")}appendElement(t,e,i){e instanceof br||e instanceof Se?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),i,"end")}setAttribute(t,e,i){if(this._assertWriterUsedCorrectly(),i instanceof $){let o=i.getMinimalFlatRanges();for(let s of o)Yy(this,t,e,s)}else Qy(this,t,e,i)}setAttributes(t,e){for(let[i,o]of No(t))this.setAttribute(i,o,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof $){let i=e.getMinimalFlatRanges();for(let o of i)Yy(this,t,null,o)}else Qy(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();let e=i=>{for(let o of i.getAttributeKeys())this.removeAttribute(o,i)};if(t instanceof $)for(let i of t.getItems())e(i);else e(t)}move(t,e,i){if(this._assertWriterUsedCorrectly(),!(t instanceof $))throw new L("writer-move-invalid-range",this);if(!t.isFlat)throw new L("writer-move-range-not-flat",this);let o=tt._createAt(e,i);if(o.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!Zy(t.root,o.root))throw new L("writer-move-different-document",this);let s=t.root.document?t.root.document.version:null,d=new fe(t.start,t.end.offset-t.start.offset,o,s);this.batch.addOperation(d),this.model.applyOperation(d)}remove(t){this._assertWriterUsedCorrectly();let e=(t instanceof $?t:$._createOn(t)).getMinimalFlatRanges().reverse();for(let i of e)this._addOperationForAffectedMarkers("move",i),XB(i.start,i.end.offset-i.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();let e=t.nodeBefore,i=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof Se))throw new L("writer-merge-no-element-before",this);if(!(i instanceof Se))throw new L("writer-merge-no-element-after",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,i){return this.model.createPositionFromPath(t,e,i)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(...t){return this.model.createSelection(...t)}_mergeDetached(t){let e=t.nodeBefore,i=t.nodeAfter;this.move($._createIn(i),tt._createAt(e,"end")),this.remove(i)}_merge(t){let e=tt._createAt(t.nodeBefore,"end"),i=tt._createAt(t.nodeAfter,0),o=t.root.document.graveyard,s=new tt(o,[0]),d=t.root.document.version,u=new si(i,t.nodeAfter.maxOffset,e,s,d);this.batch.addOperation(u),this.model.applyOperation(u)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof Se))throw new L("writer-rename-not-element-instance",this);let i=t.root.document?t.root.document.version:null,o=new pn(tt._createBefore(t),t.name,e,i);this.batch.addOperation(o),this.model.applyOperation(o)}split(t,e){this._assertWriterUsedCorrectly();let i,o,s=t.parent;if(!s.parent)throw new L("writer-split-element-no-parent",this);if(e||(e=s.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new L("writer-split-invalid-limit-element",this);do{let d=s.root.document?s.root.document.version:null,u=s.maxOffset-t.offset,p=Fe.getInsertionPosition(t),g=new Fe(t,u,p,null,d);this.batch.addOperation(g),this.model.applyOperation(g),i||o||(i=s,o=t.parent.nextSibling),s=(t=this.createPositionAfter(t.parent)).parent}while(s!==e);return{position:t,range:new $(tt._createAt(i,"end"),tt._createAt(o,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new L("writer-wrap-range-not-flat",this);let i=e instanceof Se?e:new Se(e);if(i.childCount>0)throw new L("writer-wrap-element-not-empty",this);if(i.parent!==null)throw new L("writer-wrap-element-attached",this);this.insert(i,t.start);let o=new $(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(o,tt._createAt(i,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),t.parent===null)throw new L("writer-unwrap-element-no-parent",this);this.move($._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||typeof e.usingOperation!="boolean")throw new L("writer-addmarker-no-usingoperation",this);let i=e.usingOperation,o=e.range,s=e.affectsData!==void 0&&e.affectsData;if(this.model.markers.has(t))throw new L("writer-addmarker-marker-exists",this);if(!o)throw new L("writer-addmarker-no-range",this);return i?(Bd(this,t,null,o,s),this.model.markers.get(t)):this.model.markers._set(t,o,i,s)}updateMarker(t,e){this._assertWriterUsedCorrectly();let i=typeof t=="string"?t:t.name,o=this.model.markers.get(i);if(!o)throw new L("writer-updatemarker-marker-not-exists",this);if(!e)return gt("writer-updatemarker-reconvert-using-editingcontroller",{markerName:i}),void this.model.markers._refresh(o);let s=typeof e.usingOperation=="boolean",d=typeof e.affectsData=="boolean",u=d?e.affectsData:o.affectsData;if(!s&&!e.range&&!d)throw new L("writer-updatemarker-wrong-options",this);let p=o.getRange(),g=e.range?e.range:p;s&&e.usingOperation!==o.managedUsingOperations?e.usingOperation?Bd(this,i,null,g,u):(Bd(this,i,p,null,u),this.model.markers._set(i,g,void 0,u)):o.managedUsingOperations?Bd(this,i,p,g,u):this.model.markers._set(i,g,void 0,u)}removeMarker(t){this._assertWriterUsedCorrectly();let e=typeof t=="string"?t:t.name;if(!this.model.markers.has(e))throw new L("writer-removemarker-no-marker",this);let i=this.model.markers.get(e);if(!i.managedUsingOperations)return void this.model.markers._remove(e);Bd(this,e,i.getRange(),null,i.affectsData)}addRoot(t,e="$root"){this._assertWriterUsedCorrectly();let i=this.model.document.getRoot(t);if(i&&i.isAttached())throw new L("writer-addroot-root-exists",this);let o=this.model.document,s=new jo(t,e,!0,o,o.version);return this.batch.addOperation(s),this.model.applyOperation(s),this.model.document.getRoot(t)}detachRoot(t){this._assertWriterUsedCorrectly();let e=typeof t=="string"?this.model.document.getRoot(t):t;if(!e||!e.isAttached())throw new L("writer-detachroot-no-root",this);for(let s of this.model.markers)s.getRange().root===e&&this.removeMarker(s);for(let s of e.getAttributeKeys())this.removeAttribute(s,e);this.remove(this.createRangeIn(e));let i=this.model.document,o=new jo(e.rootName,e.name,!1,i,i.version);this.batch.addOperation(o),this.model.applyOperation(o)}setSelection(...t){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...t)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._setSelectionAttribute(t,e);else for(let[i,o]of No(t))this._setSelectionAttribute(i,o)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._removeSelectionAttribute(t);else for(let e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){let i=this.model.document.selection;if(i.isCollapsed&&i.anchor.parent.isEmpty){let o=ko._getStoreAttributeKey(t);this.setAttribute(o,e,i.anchor.parent)}i._setAttribute(t,e)}_removeSelectionAttribute(t){let e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){let i=ko._getStoreAttributeKey(t);this.removeAttribute(i,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new L("writer-incorrect-use",this)}_addOperationForAffectedMarkers(t,e){for(let i of this.model.markers){if(!i.managedUsingOperations)continue;let o=i.getRange(),s=!1;if(t==="move"){let d=e;s=d.containsPosition(o.start)||d.start.isEqual(o.start)||d.containsPosition(o.end)||d.end.isEqual(o.end)}else{let d=e,u=d.nodeBefore,p=d.nodeAfter,g=o.start.parent==u&&o.start.isAtEnd,b=o.end.parent==p&&o.end.offset==0,_=o.end.nodeAfter==p,v=o.start.nodeAfter==p;s=g||b||_||v}s&&this.updateMarker(i.name,{range:o})}}}function Yy(n,t,e,i){let o=n.model,s=o.document,d,u,p,g=i.start;for(let _ of i.getWalker({shallow:!0}))p=_.item.getAttribute(t),d&&u!=p&&(u!=e&&b(),g=d),d=_.nextPosition,u=p;function b(){let _=new $(g,d),v=_.root.document?s.version:null,C=new mi(_,t,u,e,v);n.batch.addOperation(C),o.applyOperation(C)}d instanceof tt&&d!=g&&u!=e&&b()}function Qy(n,t,e,i){let o=n.model,s=o.document,d=i.getAttribute(t),u,p;if(d!=e){if(i.root===i){let g=i.document?s.version:null;p=new gr(i,t,d,e,g)}else{u=new $(tt._createBefore(i),n.createPositionAfter(i));let g=u.root.document?s.version:null;p=new mi(u,t,d,e,g)}n.batch.addOperation(p),o.applyOperation(p)}}function Bd(n,t,e,i,o){let s=n.model,d=s.document,u=new mn(t,e,i,s.markers,!!o,d.version);n.batch.addOperation(u),s.applyOperation(u)}function XB(n,t,e,i){let o;if(n.root.document){let s=i.document,d=new tt(s.graveyard,[0]);o=new fe(n,t,d,s.version)}else o=new QB(n,t);e.addOperation(o),i.applyOperation(o)}function Zy(n,t){return n===t||n instanceof Bm&&t instanceof Bm}function JB(n,t,e={}){if(t.isCollapsed)return;let i=t.getFirstRange();if(i.root.rootName=="$graveyard")return;let o=n.schema;n.change(s=>{if(!e.doNotResetEntireContent&&function(g,b){let _=g.getLimitElement(b);if(!b.containsEntireContent(_))return!1;let v=b.getFirstRange();return v.start.parent==v.end.parent?!1:g.checkChild(_,"paragraph")}(o,t))return void function(g,b){let _=g.model.schema.getLimitElement(b);g.remove(g.createRangeIn(_)),tC(g,g.createPositionAt(_,0),b)}(s,t);let d={};if(!e.doNotAutoparagraph){let g=t.getSelectedElement();g&&Object.assign(d,o.getAttributesWithProperty(g,"copyOnReplace",!0))}let[u,p]=function(g){let b=g.root.document.model,_=g.start,v=g.end;if(b.hasContent(g,{ignoreMarkers:!0})){let C=function(E){let S=E.parent,O=S.root.document.model.schema,P=S.getAncestors({parentFirst:!0,includeSelf:!0});for(let V of P){if(O.isLimit(V))return null;if(O.isBlock(V))return V}}(v);if(C&&v.isTouching(b.createPositionAt(C,0))){let E=b.createSelection(g);b.modifySelection(E,{direction:"backward"});let S=E.getLastPosition(),O=b.createRange(S,v);b.hasContent(O,{ignoreMarkers:!0})||(v=S)}}return[Li.fromPosition(_,"toPrevious"),Li.fromPosition(v,"toNext")]}(i);u.isTouching(p)||s.remove(s.createRange(u,p)),e.leaveUnmerged||(function(g,b,_){let v=g.model;if(!n_(g.model.schema,b,_))return;let[C,E]=function(S,O){let P=S.getAncestors(),V=O.getAncestors(),W=0;for(;P[W]&&P[W]==V[W];)W++;return[P[W],V[W]]}(b,_);!C||!E||(!v.hasContent(C,{ignoreMarkers:!0})&&v.hasContent(E,{ignoreMarkers:!0})?Jy(g,b,_,C.parent):Xy(g,b,_,C.parent))}(s,u,p),o.removeDisallowedAttributes(u.parent.getChildren(),s)),eC(s,t,u),!e.doNotAutoparagraph&&function(g,b){let _=g.checkChild(b,"$text"),v=g.checkChild(b,"paragraph");return!_&&v}(o,u)&&tC(s,u,t,d),u.detach(),p.detach()})}function Xy(n,t,e,i){let o=t.parent,s=e.parent;if(o!=i&&s!=i){for(t=n.createPositionAfter(o),(e=n.createPositionBefore(s)).isEqual(t)||n.insert(s,t),n.merge(t);e.parent.isEmpty;){let d=e.parent;e=n.createPositionBefore(d),n.remove(d)}n_(n.model.schema,t,e)&&Xy(n,t,e,i)}}function Jy(n,t,e,i){let o=t.parent,s=e.parent;if(o!=i&&s!=i){for(t=n.createPositionAfter(o),(e=n.createPositionBefore(s)).isEqual(t)||n.insert(o,e);t.parent.isEmpty;){let d=t.parent;t=n.createPositionBefore(d),n.remove(d)}e=n.createPositionBefore(s),function(d,u){let p=u.nodeBefore,g=u.nodeAfter;p.name!=g.name&&d.rename(p,g.name),d.clearAttributes(p),d.setAttributes(Object.fromEntries(g.getAttributes()),p),d.merge(u)}(n,e),n_(n.model.schema,t,e)&&Jy(n,t,e,i)}}function n_(n,t,e){let i=t.parent,o=e.parent;return i!=o&&!n.isLimit(i)&&!n.isLimit(o)&&function(s,d,u){let p=new $(s,d);for(let g of p.getWalker())if(u.isLimit(g.item))return!1;return!0}(t,e,n)}function tC(n,t,e,i={}){let o=n.createElement("paragraph");n.model.schema.setAllowedAttributes(o,i,n),n.insert(o,t),eC(n,e,n.createPositionAt(o,0))}function eC(n,t,e){t instanceof ko?n.setSelection(e):t.setTo(e)}function iC(n,t){let e=[];Array.from(n.getItems({direction:"backward"})).map(i=>t.createRangeOn(i)).filter(i=>(i.start.isAfter(n.start)||i.start.isEqual(n.start))&&(i.end.isBefore(n.end)||i.end.isEqual(n.end))).forEach(i=>{e.push(i.start.parent),t.remove(i)}),e.forEach(i=>{let o=i;for(;o.parent&&o.isEmpty;){let s=t.createRangeOn(o);o=o.parent,t.remove(s)}})}class t3{constructor(t,e,i){this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null,this._nodeToSelect=null,this.model=t,this.writer=e,this.position=i,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._documentFragment=e.createDocumentFragment(),this._documentFragmentPosition=e.createPositionAt(this._documentFragment,0)}handleNodes(t){for(let e of Array.from(t))this._handleNode(e);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(t){let e=this.writer.createPositionAfter(this._lastNode),i=this.writer.createPositionAfter(t);if(i.isAfter(e)){if(this._lastNode=t,this.position.parent!=t||!this.position.isAtEnd)throw new L("insertcontent-invalid-insertion-position",this);this.position=i,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?$._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new $(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t){if(this.schema.isObject(t))return void this._handleObject(t);let e=this._checkAndAutoParagraphToAllowedPosition(t);e||(e=this._checkAndSplitToAllowedPosition(t),e)?(this._appendToFragment(t),this._firstNode||(this._firstNode=t),this._lastNode=t):this._handleDisallowedNode(t)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;let t=Li.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=t.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=t.toPosition(),t.detach()}_handleObject(t){this._checkAndSplitToAllowedPosition(t)?this._appendToFragment(t):this._tryAutoparagraphing(t)}_handleDisallowedNode(t){t.is("element")?this.handleNodes(t.getChildren()):this._tryAutoparagraphing(t)}_appendToFragment(t){if(!this.schema.checkChild(this.position,t))throw new L("insertcontent-wrong-position",this,{node:t,position:this.position});this.writer.insert(t,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(t.offsetSize),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=t:this._nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=Li.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Li.fromPosition(t,"toNext"))}_mergeOnLeft(){let t=this._firstNode;if(!(t instanceof Se)||!this._canMergeLeft(t))return;let e=Li._createBefore(t);e.stickiness="toNext";let i=Li.fromPosition(this.position,"toNext");this._affectedStart.isEqual(e)&&(this._affectedStart.detach(),this._affectedStart=Li._createAt(e.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=Li._createAt(e.nodeBefore,"end","toNext")),this.position=i.toPosition(),i.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_mergeOnRight(){let t=this._lastNode;if(!(t instanceof Se)||!this._canMergeRight(t))return;let e=Li._createAfter(t);if(e.stickiness="toNext",!this.position.isEqual(e))throw new L("insertcontent-invalid-insertion-position",this);this.position=tt._createAt(e.nodeBefore,"end");let i=Li.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(e)&&(this._affectedEnd.detach(),this._affectedEnd=Li._createAt(e.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=Li._createAt(e.nodeBefore,0,"toPrevious")),this.position=i.toPosition(),i.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_canMergeLeft(t){let e=t.previousSibling;return e instanceof Se&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(e,t)}_canMergeRight(t){let e=t.nextSibling;return e instanceof Se&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(t,e)}_tryAutoparagraphing(t){let e=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,e)&&this.schema.checkChild(e,t)&&(e._appendChild(t),this._handleNode(e))}_checkAndAutoParagraphToAllowedPosition(t){if(this.schema.checkChild(this.position.parent,t))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",t))return!1;this._insertPartialFragment();let e=this.writer.createElement("paragraph");return this.writer.insert(e,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=e,this.position=this.writer.createPositionAt(e,0),!0}_checkAndSplitToAllowedPosition(t){let e=this._getAllowedIn(this.position.parent,t);if(!e)return!1;for(e!=this.position.parent&&this._insertPartialFragment();e!=this.position.parent;)if(this.position.isAtStart){let i=this.position.parent;this.position=this.writer.createPositionBefore(i),i.isEmpty&&i.parent===e&&this.writer.remove(i)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{let i=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=i,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(t,e){return this.schema.checkChild(t,e)?t:this.schema.isLimit(t)?null:this._getAllowedIn(t.parent,e)}}function e3(n,t,e,i={}){if(!n.schema.isObject(t))throw new L("insertobject-element-not-an-object",n,{object:t});let o=e||n.document.selection,s=o;i.findOptimalPosition&&n.schema.isBlock(t)&&(s=n.createSelection(n.schema.findOptimalInsertionRange(o,i.findOptimalPosition)));let d=Mi(o.getSelectedBlocks()),u={};return d&&Object.assign(u,n.schema.getAttributesWithProperty(d,"copyOnReplace",!0)),n.change(p=>{s.isCollapsed||n.deleteContent(s,{doNotAutoparagraph:!0});let g=t,b=s.anchor.parent;!n.schema.checkChild(b,t)&&n.schema.checkChild(b,"paragraph")&&n.schema.checkChild("paragraph",t)&&(g=p.createElement("paragraph"),p.insert(t,g)),n.schema.setAllowedAttributes(g,u,p);let _=n.insertContent(g,s);return _.isCollapsed||i.setSelection&&function(v,C,E,S){let O=v.model;if(E=="on")return void v.setSelection(C,"on");if(E!="after")throw new L("insertobject-invalid-place-parameter-value",O);let P=C.nextSibling;if(O.schema.isInline(C))return void v.setSelection(C,"after");!(P&&O.schema.checkChild(P,"$text"))&&O.schema.checkChild(C.parent,"paragraph")&&(P=v.createElement("paragraph"),O.schema.setAllowedAttributes(P,S,v),O.insertContent(P,v.createPositionAfter(C))),P&&v.setSelection(P,0)}(p,t,i.setSelection,u),_})}let i3=' ,.?!:;"-()';function n3(n,t){let{isForward:e,walker:i,unit:o,schema:s,treatEmojiAsSingleUnit:d}=n,{type:u,item:p,nextPosition:g}=t;if(u=="text")return n.unit==="word"?function(b,_){let v=b.position.textNode;for(v||(v=_?b.position.nodeAfter:b.position.nodeBefore);v&&v.is("$text");){let C=b.position.offset-v.startOffset;if(s3(v,C,_))v=_?b.position.nodeAfter:b.position.nodeBefore;else{if(r3(v.data,C,_))break;b.next()}}return b.position}(i,e):function(b,_,v){let C=b.position.textNode;if(C){let E=C.data,S=b.position.offset-C.startOffset;for(;xb(E,S)||_=="character"&&Eb(E,S)||v&&tv(E,S);)b.next(),S=b.position.offset-C.startOffset}return b.position}(i,o,d);if(u==(e?"elementStart":"elementEnd")){if(s.isSelectable(p))return tt._createAt(p,e?"after":"before");if(s.checkChild(g,"$text"))return g}else{if(s.isLimit(p))return void i.skip(()=>!0);if(s.checkChild(g,"$text"))return g}}function o3(n,t){let e=n.root,i=tt._createAt(e,t?"end":0);return t?new $(n,i):new $(i,n)}function r3(n,t,e){let i=t+(e?0:-1);return i3.includes(n.charAt(i))}function s3(n,t,e){return t===(e?n.offsetSize:0)}class a3 extends ce(){constructor(){super(),this.markers=new YB,this.document=new HB(this),this.schema=new eB,this._pendingChanges=[],this._currentWriter=null,["deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if(e.name==="$marker")return!0}),X4(this),this.document.registerPostFixer(hy),this.on("insertContent",(t,[e,i])=>{t.return=function(o,s,d){return o.change(u=>{let p=d||o.document.selection;p.isCollapsed||o.deleteContent(p,{doNotAutoparagraph:!0});let g=new t3(o,u,p.anchor),b=[],_;if(s.is("documentFragment")){if(s.markers.size){let E=[];for(let[S,O]of s.markers){let{start:P,end:V}=O,W=P.isEqual(V);E.push({position:P,name:S,isCollapsed:W},{position:V,name:S,isCollapsed:W})}E.sort(({position:S},{position:O})=>S.isBefore(O)?1:-1);for(let{position:S,name:O,isCollapsed:P}of E){let V=null,W=null,J=S.parent===s&&S.isAtStart,dt=S.parent===s&&S.isAtEnd;J||dt?P&&(W=J?"start":"end"):(V=u.createElement("$marker"),u.insert(V,S)),b.push({name:O,element:V,collapsed:W})}}_=s.getChildren()}else _=[s];g.handleNodes(_);let v=g.getSelectionRange();if(s.is("documentFragment")&&b.length){let E=v?Mn.fromRange(v):null,S={};for(let O=b.length-1;O>=0;O--){let{name:P,element:V,collapsed:W}=b[O],J=!S[P];if(J&&(S[P]=[]),V){let dt=u.createPositionAt(V,"before");S[P].push(dt),u.remove(V)}else{let dt=g.getAffectedRange();if(!dt){W&&S[P].push(g.position);continue}W?S[P].push(dt[W]):S[P].push(J?dt.start:dt.end)}}for(let[O,[P,V]]of Object.entries(S))P&&V&&P.root===V.root&&P.root.document&&!u.model.markers.has(O)&&u.addMarker(O,{usingOperation:!0,affectsData:!0,range:new $(P,V)});E&&(v=E.toRange(),E.detach())}v&&(p instanceof ko?u.setSelection(v):p.setTo(v));let C=g.getAffectedRange()||o.createRange(p.anchor);return g.destroy(),C})}(this,e,i)}),this.on("insertObject",(t,[e,i,o])=>{t.return=e3(this,e,i,o)}),this.on("canEditAt",t=>{let e=!this.document.isReadOnly;t.return=e,e||t.stop()})}change(t){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new yc,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}catch(e){L.rethrowUnexpectedError(e,this)}}enqueueChange(t,e){try{t?typeof t=="function"?(e=t,t=new yc):t instanceof yc||(t=new yc(t)):t=new yc,this._pendingChanges.push({batch:t,callback:e}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(i){L.rethrowUnexpectedError(i,this)}}applyOperation(t){t._execute()}insertContent(t,e,i,...o){let s=o_(e,i);return this.fire("insertContent",[t,s,i,...o])}insertObject(t,e,i,o,...s){let d=o_(e,i);return this.fire("insertObject",[t,d,o,o,...s])}deleteContent(t,e){JB(this,t,e)}modifySelection(t,e){(function(i,o,s={}){let d=i.schema,u=s.direction!="backward",p=s.unit?s.unit:"character",g=!!s.treatEmojiAsSingleUnit,b=o.focus,_=new fr({boundaries:o3(b,u),singleCharacters:!0,direction:u?"forward":"backward"}),v={walker:_,schema:d,isForward:u,unit:p,treatEmojiAsSingleUnit:g},C;for(;C=_.next();){if(C.done)return;let E=n3(v,C.value);if(E)return void(o instanceof ko?i.change(S=>{S.setSelectionFocus(E)}):o.setFocus(E))}})(this,t,e)}getSelectedContent(t){return function(e,i){return e.change(o=>{let s=o.createDocumentFragment(),d=i.getFirstRange();if(!d||d.isCollapsed)return s;let u=d.start.root,p=d.start.getCommonPath(d.end),g=u.getNodeByPath(p),b;b=d.start.parent==d.end.parent?d:o.createRange(o.createPositionAt(g,d.start.path[p.length]),o.createPositionAt(g,d.end.path[p.length]+1));let _=b.end.offset-b.start.offset;for(let v of b.getItems({shallow:!0}))v.is("$textProxy")?o.appendText(v.data,v.getAttributes(),s):o.append(o.cloneElement(v,!0),s);if(b!=d){let v=d._getTransformedByMove(b.start,o.createPositionAt(s,0),_)[0],C=o.createRange(o.createPositionAt(s,0),v.start);iC(o.createRange(v.end,o.createPositionAt(s,"end")),o),iC(C,o)}return s})}(this,t)}hasContent(t,e={}){let i=t instanceof $?t:$._createIn(t);if(i.isCollapsed)return!1;let{ignoreWhitespaces:o=!1,ignoreMarkers:s=!1}=e;if(!s){for(let d of this.markers.getMarkersIntersectingRange(i))if(d.affectsData)return!0}for(let d of i.getItems())if(this.schema.isContent(d)&&(!d.is("$textProxy")||!o||d.data.search(/\S/)!==-1))return!0;return!1}canEditAt(t){let e=o_(t);return this.fire("canEditAt",[e])}createPositionFromPath(t,e,i){return new tt(t,e,i)}createPositionAt(t,e){return tt._createAt(t,e)}createPositionAfter(t){return tt._createAfter(t)}createPositionBefore(t){return tt._createBefore(t)}createRange(t,e){return new $(t,e)}createRangeIn(t){return $._createIn(t)}createRangeOn(t){return $._createOn(t)}createSelection(...t){return new Dn(...t)}createBatch(t){return new yc(t)}createOperationFromJSON(t){return CB.fromJSON(t,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){let t=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){let e=this._pendingChanges[0].batch;this._currentWriter=new ZB(this,e);let i=this._pendingChanges[0].callback(this._currentWriter);t.push(i),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return t}}function o_(n,t){if(n)return n instanceof Dn||n instanceof ko?n:n instanceof ca?t||t===0?new Dn(n,t):n.is("rootElement")?new Dn(n,"in"):new Dn(n,"on"):new Dn(n)}class c3 extends Yr{constructor(){super(...arguments),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}class r_ extends Yr{constructor(){super(...arguments),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(t){this.fire(t.type,t)}}class _r{constructor(t){this.document=t}createDocumentFragment(t){return new aa(this.document,t)}createElement(t,e,i){return new xn(this.document,t,e,i)}createText(t){return new Ne(this.document,t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,i){return i._insertChild(t,e)}removeChildren(t,e,i){return i._removeChildren(t,e)}remove(t){let e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){let i=t.parent;if(i){let o=i.getChildIndex(t);return this.removeChildren(o,1,i),this.insertChild(o,e,i),!0}return!1}unwrapElement(t){let e=t.parent;if(e){let i=e.getChildIndex(t);this.remove(t),this.insertChild(i,t.getChildren(),e)}}rename(t,e){let i=new xn(this.document,t,e.getAttributes(),e.getChildren());return this.replace(e,i)?i:null}setAttribute(t,e,i){i._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,i){Ut(t)&&i===void 0?e._setStyle(t):i._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,i){i._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return ct._createAt(t,e)}createPositionAfter(t){return ct._createAfter(t)}createPositionBefore(t){return ct._createBefore(t)}createRange(t,e){return new zt(t,e)}createRangeOn(t){return zt._createOn(t)}createRangeIn(t){return zt._createIn(t)}createSelection(...t){return new fo(...t)}}class l3{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){let i=this.get(t);if(!i)throw new L("commandcollection-command-not-found",this,{commandName:t});return i.execute(...e)}*names(){yield*ni(this._commands.keys())}*commands(){yield*ni(this._commands.values())}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(let t of this.commands())t.destroy()}}var d3=Object.defineProperty,nC=Object.getOwnPropertySymbols,u3=Object.prototype.hasOwnProperty,h3=Object.prototype.propertyIsEnumerable,oC=(n,t,e)=>t in n?d3(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;let s_="contentEditing",rC="common";class m3{constructor(t){this.keystrokeInfos=new Map,this._editor=t;let e=t.config.get("menuBar.isVisible"),i=t.locale.t;this.addKeystrokeInfoCategory({id:s_,label:i("Content editing keystrokes"),description:i("These keyboard shortcuts allow for quick access to content editing features.")});let o=[{label:i("Close contextual balloons, dropdowns, and dialogs"),keystroke:"Esc"},{label:i("Open the accessibility help dialog"),keystroke:"Alt+0"},{label:i("Move focus between form fields (inputs, buttons, etc.)"),keystroke:[["Tab"],["Shift+Tab"]]},{label:i("Move focus to the toolbar, navigate between toolbars"),keystroke:"Alt+F10",mayRequireFn:!0},{label:i("Navigate through the toolbar or menu bar"),keystroke:[["arrowup"],["arrowright"],["arrowdown"],["arrowleft"]]},{label:i("Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content."),keystroke:[["Enter"],["Space"]]}];e&&o.push({label:i("Move focus to the menu bar, navigate between menu bars"),keystroke:"Alt+F9",mayRequireFn:!0}),this.addKeystrokeInfoCategory({id:"navigation",label:i("User interface and content navigation keystrokes"),description:i("Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface."),groups:[{id:"common",keystrokes:o}]})}addKeystrokeInfoCategory({id:t,label:e,description:i,groups:o}){this.keystrokeInfos.set(t,{id:t,label:e,description:i,groups:new Map}),this.addKeystrokeInfoGroup({categoryId:t,id:rC}),o&&o.forEach(s=>{this.addKeystrokeInfoGroup(((d,u)=>{for(var p in u||(u={}))u3.call(u,p)&&oC(d,p,u[p]);if(nC)for(var p of nC(u))h3.call(u,p)&&oC(d,p,u[p]);return d})({categoryId:t},s))})}addKeystrokeInfoGroup({categoryId:t=s_,id:e,label:i,keystrokes:o}){let s=this.keystrokeInfos.get(t);if(!s)throw new L("accessibility-unknown-keystroke-info-category",this._editor,{groupId:e,categoryId:t});s.groups.set(e,{id:e,label:i,keystrokes:o||[]})}addKeystrokeInfos({categoryId:t=s_,groupId:e=rC,keystrokes:i}){if(!this.keystrokeInfos.has(t))throw new L("accessibility-unknown-keystroke-info-category",this._editor,{categoryId:t,keystrokes:i});let o=this.keystrokeInfos.get(t);if(!o.groups.has(e))throw new L("accessibility-unknown-keystroke-info-group",this._editor,{groupId:e,categoryId:t,keystrokes:i});o.groups.get(e).keystrokes.push(...i)}}var sC=Object.getOwnPropertySymbols,p3=Object.prototype.hasOwnProperty,f3=Object.prototype.propertyIsEnumerable,aC=(n,t)=>{var e={};for(var i in n)p3.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&sC)for(var i of sC(n))t.indexOf(i)<0&&f3.call(n,i)&&(e[i]=n[i]);return e};class g3 extends ce(){constructor(t={}){super();let e=this.constructor,i=e.defaultConfig||{},{translations:o}=i,s=aC(i,["translations"]),d=t,{translations:u=o}=d,p=aC(d,["translations"]),g=t.language||s.language;this._context=t.context||new sv({language:g,translations:u}),this._context._addEditor(this,!t.context);let b=Array.from(e.builtinPlugins||[]);this.config=new Zh(p,s),this.config.define("plugins",b),this.config.define(this._context._getEditorConfig()),this.plugins=new ov(this,b,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new l3,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new a3,this.on("change:isReadOnly",()=>{this.model.document.isReadOnly=this.isReadOnly});let _=new BP;this.data=new vB(this.model,_),this.editing=new J4(this.model,_),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new yB([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new uP(this),this.keystrokes.listenTo(this.editing.view.document),this.accessibility=new m3(this)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(t){throw new L("editor-isreadonly-has-no-setter")}enableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new L("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)||(this._readOnlyLocks.add(t),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new L("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)&&(this._readOnlyLocks.delete(t),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}setData(t){this.data.set(t)}getData(t){return this.data.get(t)}initPlugins(){let t=this.config,e=t.get("plugins"),i=t.get("removePlugins")||[],o=t.get("extraPlugins")||[],s=t.get("substitutePlugins")||[];return this.plugins.init(e.concat(o),i,s)}destroy(){let t=Promise.resolve();return this.state=="initializing"&&(t=new Promise(e=>this.once("ready",e))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(t,...e){try{return this.commands.execute(t,...e)}catch(i){L.rethrowUnexpectedError(i,this)}}focus(){this.editing.view.focus()}static create(...t){throw new Error("This is an abstract method.")}}function a_(n){return class extends n{updateSourceElement(t){if(!this.sourceElement)throw new L("editor-missing-sourceelement",this);let e=this.config.get("updateSourceElementOnDestroy"),i=this.sourceElement instanceof HTMLTextAreaElement;if(!e&&!i)return void gd(this.sourceElement,"");let o=typeof t=="string"?t:this.data.get();gd(this.sourceElement,o)}}}a_.updateSourceElement=a_(Object).prototype.updateSourceElement;class cC extends bm{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new Yn({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if(typeof t!="string")throw new L("pendingactions-add-invalid-message",this);let e=new(ce());return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}let Ht={bold:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',colorPalette:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.209 18.717A8.5 8.5 0 1 1 18.686 9.6h-.008l.002.12a3 3 0 0 1-2.866 2.997h-.268l-.046-.002v.002h-4.791a2 2 0 1 0 0 4 1 1 0 1 1-.128 1.992 8.665 8.665 0 0 1-.372.008Zm-3.918-7.01a1.25 1.25 0 1 0-2.415-.648 1.25 1.25 0 0 0 2.415.647ZM5.723 8.18a1.25 1.25 0 1 0 .647-2.414 1.25 1.25 0 0 0-.647 2.414ZM9.76 6.155a1.25 1.25 0 1 0 .647-2.415 1.25 1.25 0 0 0-.647 2.415Zm4.028 1.759a1.25 1.25 0 1 0 .647-2.415 1.25 1.25 0 0 0-.647 2.415Z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',history:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 1a9 9 0 1 1-8.027 13.075l1.128-1.129A7.502 7.502 0 0 0 18.5 10a7.5 7.5 0 1 0-14.962.759l-.745-.746-.76.76A9 9 0 0 1 11 1z"/><path d="M.475 8.17a.75.75 0 0 1 .978.047l.075.082 1.284 1.643 1.681-1.284a.75.75 0 0 1 .978.057l.073.083a.75.75 0 0 1-.057.978l-.083.073-2.27 1.737a.75.75 0 0 1-.973-.052l-.074-.082-1.741-2.23a.75.75 0 0 1 .13-1.052z"/><path d="M11.5 5v4.999l3.196 3.196-1.06 1.06L10.1 10.72l-.1-.113V5z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.66 9.118a.693.693 0 0 1 .956.032l3.65 3.411 2.422-2.238a.695.695 0 0 1 .945 0L17.5 13.6V2.5h-15v11.1l4.16-4.482ZM17.8 1c.652 0 1.2.47 1.2 1.1v14.362c0 .64-.532 1.038-1.184 1.038H2.184C1.532 17.5 1 17.103 1 16.462V2.1C1 1.47 1.537 1 2.2 1h15.6Zm-5.655 6a2.128 2.128 0 0 1 .157-2.364A2.133 2.133 0 1 1 12.145 7Z"/></svg>',imageUpload:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1.201 1C.538 1 0 1.47 0 2.1v14.363c0 .64.534 1.037 1.186 1.037h9.494a2.97 2.97 0 0 1-.414-.287 2.998 2.998 0 0 1-1.055-2.03 3.003 3.003 0 0 1 .693-2.185l.383-.455-.02.018-3.65-3.41a.695.695 0 0 0-.957-.034L1.5 13.6V2.5h15v5.535a2.97 2.97 0 0 1 1.412.932l.088.105V2.1c0-.63-.547-1.1-1.2-1.1H1.202Zm11.713 2.803a2.146 2.146 0 0 0-2.049 1.992 2.14 2.14 0 0 0 1.28 2.096 2.13 2.13 0 0 0 2.644-3.11 2.134 2.134 0 0 0-1.875-.978Z"/><path d="M15.522 19.1a.79.79 0 0 0 .79-.79v-5.373l2.059 2.455a.79.79 0 1 0 1.211-1.015l-3.352-3.995a.79.79 0 0 0-.995-.179.784.784 0 0 0-.299.221l-3.35 3.99a.79.79 0 1 0 1.21 1.017l1.936-2.306v5.185c0 .436.353.79.79.79Z"/><path d="M15.522 19.1a.79.79 0 0 0 .79-.79v-5.373l2.059 2.455a.79.79 0 1 0 1.211-1.015l-3.352-3.995a.79.79 0 0 0-.995-.179.784.784 0 0 0-.299.221l-3.35 3.99a.79.79 0 1 0 1.21 1.017l1.936-2.306v5.185c0 .436.353.79.79.79Z"/></svg>',imageAssetManager:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1.201 1c-.662 0-1.2.47-1.2 1.1v14.248c0 .64.533 1.152 1.185 1.152h6.623v-7.236L6.617 9.15a.694.694 0 0 0-.957-.033L1.602 13.55V2.553l14.798.003V9.7H18V2.1c0-.63-.547-1.1-1.2-1.1H1.202Zm11.723 2.805a2.094 2.094 0 0 0-1.621.832 2.127 2.127 0 0 0 1.136 3.357 2.13 2.13 0 0 0 2.611-1.506 2.133 2.133 0 0 0-.76-2.244 2.13 2.13 0 0 0-1.366-.44Z"/><path clip-rule="evenodd" d="M19.898 12.369v6.187a.844.844 0 0 1-.844.844h-8.719a.844.844 0 0 1-.843-.844v-7.312a.844.844 0 0 1 .843-.844h2.531a.843.843 0 0 1 .597.248l.838.852h4.75c.223 0 .441.114.6.272a.844.844 0 0 1 .247.597Zm-1.52.654-4.377.02-1.1-1.143H11v6h7.4l-.023-4.877Z"/></svg>',imageUrl:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1.201 1C.538 1 0 1.47 0 2.1v14.363c0 .64.534 1.037 1.186 1.037h7.029a5.401 5.401 0 0 1 .615-4.338l.762-1.232-2.975-2.78a.696.696 0 0 0-.957-.033L1.5 13.6V2.5h15v6.023c.449.131.887.32 1.307.573l.058.033c.046.028.09.057.135.086V2.1c0-.63-.547-1.1-1.2-1.1H1.202Zm11.713 2.803a2.15 2.15 0 0 0-1.611.834 2.118 2.118 0 0 0-.438 1.158 2.14 2.14 0 0 0 1.277 2.096 2.132 2.132 0 0 0 2.645-3.11 2.13 2.13 0 0 0-1.873-.978Z"/><path d="M16.63 10.294a3.003 3.003 0 0 0-4.142.887l-.117.177a.647.647 0 0 0-.096.492.664.664 0 0 0 .278.418.7.7 0 0 0 .944-.234 1.741 1.741 0 0 1 2.478-.463 1.869 1.869 0 0 1 .476 2.55.637.637 0 0 0-.071.5.646.646 0 0 0 .309.396.627.627 0 0 0 .869-.19l.027-.041a3.226 3.226 0 0 0-.956-4.492Zm-6.061 3.78-.044.066a3.228 3.228 0 0 0 .82 4.403 3.005 3.005 0 0 0 4.275-.798l.13-.197a.626.626 0 0 0 .092-.475.638.638 0 0 0-.268-.402.713.713 0 0 0-.99.26l-.018.029a1.741 1.741 0 0 1-2.477.461 1.87 1.87 0 0 1-.475-2.55l.029-.047a.647.647 0 0 0 .086-.485.66.66 0 0 0-.275-.408l-.04-.027a.609.609 0 0 0-.845.17Z"/><path d="M15.312 13.925c.24-.36.154-.838-.19-1.067-.346-.23-.82-.124-1.059.236l-1.268 1.907c-.239.36-.153.838.192 1.067.345.23.818.123 1.057-.236l1.268-1.907Z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',textAlternative:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.035 1C2.446 1 2 1.54 2 2.098V10.5h1.5v-8h13v8H18V2.098C18 1.539 17.48 1 16.9 1H3.035Zm10.453 2.61a1.885 1.885 0 0 0-1.442.736 1.89 1.89 0 0 0 1.011 2.976 1.903 1.903 0 0 0 2.253-1.114 1.887 1.887 0 0 0-1.822-2.598ZM7.463 8.163a.611.611 0 0 0-.432.154L5.071 10.5h5.119L7.88 8.348a.628.628 0 0 0-.417-.185Zm6.236 1.059a.62.62 0 0 0-.42.164L12.07 10.5h2.969l-.92-1.113a.618.618 0 0 0-.42-.165ZM.91 11.5a.91.91 0 0 0-.91.912v6.877c0 .505.405.91.91.91h18.178a.91.91 0 0 0 .912-.91v-6.877a.908.908 0 0 0-.912-.912H.91ZM3.668 13h1.947l2.135 5.7H5.898l-.28-.946H3.601l-.278.945H1.516L3.668 13Zm4.947 0h1.801v4.3h2.7v1.4h-4.5V13h-.001Zm4.5 0h5.4v1.4h-1.798v4.3h-1.701v-4.3h-1.9V13h-.001Zm-8.517 1.457-.614 2.059h1.262l-.648-2.059Z"/></svg>',loupe:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.68 13.74h-.001l4.209 4.208a1 1 0 1 0 1.414-1.414l-4.267-4.268a6 6 0 1 0-1.355 1.474ZM13 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/></svg>',previousArrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>',nextArrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>',importExport:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></svg>',paragraph:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>',plus:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>',text:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 16.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1ZM1 15v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 13v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 11v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 9v1H0V9h1Zm19 0v1h-1V9h1ZM1 7v1H0V7h1Zm19 0v1h-1V7h1ZM1 5v1H0V5h1Zm19 0v1h-1V5h1Zm0-2v1h-1V3h1ZM1 3v1H0V3h1Zm13.5-1.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm-8 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm8 0v1h-1v-1h1Zm-10 0v1h-1v-1h1Z"/><path d="M13 5.5H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2ZM13 7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 2 7h11Z"/></svg>',objectSizeSmall:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 16.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1ZM1 15v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 13v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 11v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 9v1H0V9h1Zm19 0v1h-1V9h1ZM1 7v1H0V7h1Zm19 0v1h-1V7h1ZM1 5v1H0V5h1Zm19 0v1h-1V5h1Zm0-2v1h-1V3h1ZM1 3v1H0V3h1Zm13.5-1.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm-8 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm8 0v1h-1v-1h1Zm-10 0v1h-1v-1h1Z"/><path d="M7 9.5H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2ZM7 11a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4A.5.5 0 0 1 2 11h5Z"/></svg>',objectSizeMedium:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 16.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1ZM1 15v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 13v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 11v1H0v-1h1Zm19 0v1h-1v-1h1ZM1 9v1H0V9h1Zm19 0v1h-1V9h1ZM1 7v1H0V7h1Zm19 0v1h-1V7h1ZM1 5v1H0V5h1Zm19 0v1h-1V5h1Zm0-2v1h-1V3h1ZM1 3v1H0V3h1Zm13.5-1.5v1h-1v-1h1Zm2 0v1h-1v-1h1Zm2 0v1h-1v-1h1Zm-8 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm-2 0v1h-1v-1h1Zm8 0v1h-1v-1h1Zm-10 0v1h-1v-1h1Z"/><path d="M10 7.5H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2ZM10 9a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6A.5.5 0 0 1 2 9h8Z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',dragIndicator:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.25a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M12 3.25a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M5 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M12 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M5 16.75a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M12 16.75a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/></svg>',redo:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>',undo:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',bulletedList:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>',numberedList:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>',todoList:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m2.315 14.705 2.224-2.24a.689.689 0 0 1 .963 0 .664.664 0 0 1 0 .949L2.865 16.07a.682.682 0 0 1-.112.089.647.647 0 0 1-.852-.051L.688 14.886a.635.635 0 0 1 0-.903.647.647 0 0 1 .91 0l.717.722zm5.185.045a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75zM2.329 5.745l2.21-2.226a.689.689 0 0 1 .963 0 .664.664 0 0 1 0 .95L2.865 7.125a.685.685 0 0 1-.496.196.644.644 0 0 1-.468-.187L.688 5.912a.635.635 0 0 1 0-.903.647.647 0 0 1 .91 0l.73.736zM7.5 5.75A.75.75 0 0 1 8.25 5h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>',codeBlock:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.87 12.61a.75.75 0 0 1-.089.976l-.085.07-3.154 2.254 3.412 2.414a.75.75 0 0 1 .237.95l-.057.095a.75.75 0 0 1-.95.237l-.096-.058-4.272-3.022-.003-1.223 4.01-2.867a.75.75 0 0 1 1.047.174zm2.795-.231.095.057 4.011 2.867-.003 1.223-4.272 3.022-.095.058a.75.75 0 0 1-.88-.151l-.07-.086-.058-.095a.75.75 0 0 1 .15-.88l.087-.07 3.412-2.414-3.154-2.253-.085-.071a.75.75 0 0 1 .862-1.207zM16 0a2 2 0 0 1 2 2v9.354l-.663-.492-.837-.001V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3.118L7.156 19H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h14zM5.009 15l.003 1H3v-1h2.009zm2.188-2-1.471 1H5v-1h2.197zM10 11v.095L8.668 12H7v-1h3zm4-2v1H7V9h7zm0-2v1H7V7h7zm-4-2v1H5V5h5zM6 3v1H3V3h3z"/></svg>',browseFiles:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',heading1:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9v10h-2v-8h-2V9h4zM4 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V11H4v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v4.5z"/></svg>',heading2:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11H3v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H2a1 1 0 0 1 1 1v4.5zm16.076 8.343V18.5h-6.252c.067-.626.27-1.22.61-1.78.338-.561 1.006-1.305 2.005-2.232.804-.749 1.297-1.257 1.479-1.523.245-.368.368-.732.368-1.092 0-.398-.107-.703-.32-.917-.214-.214-.51-.32-.886-.32-.372 0-.669.111-.889.336-.22.224-.347.596-.38 1.117l-1.778-.178c.106-.982.438-1.686.997-2.114.558-.427 1.257-.64 2.095-.64.918 0 1.64.247 2.164.742.525.495.787 1.11.787 1.847 0 .419-.075.818-.225 1.197-.15.378-.388.775-.714 1.19-.216.275-.605.67-1.168 1.187-.563.516-.92.859-1.07 1.028a3.11 3.11 0 0 0-.365.495h3.542z"/></svg>',heading3:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11H3v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H2a1 1 0 0 1 1 1v4.5zm9.989 7.53 1.726-.209c.055.44.203.777.445 1.01.24.232.533.349.876.349.368 0 .678-.14.93-.42.251-.279.377-.655.377-1.13 0-.448-.12-.803-.362-1.066a1.153 1.153 0 0 0-.882-.393c-.228 0-.501.044-.819.133l.197-1.453c.482.012.85-.092 1.105-.315.253-.222.38-.517.38-.885 0-.313-.093-.563-.279-.75-.186-.185-.434-.278-.743-.278a1.07 1.07 0 0 0-.78.317c-.216.212-.347.52-.394.927l-1.644-.28c.114-.562.287-1.012.517-1.348.231-.337.553-.601.965-.794a3.24 3.24 0 0 1 1.387-.289c.876 0 1.579.28 2.108.838.436.457.653.973.653 1.549 0 .817-.446 1.468-1.339 1.955.533.114.96.37 1.28.768.319.398.478.878.478 1.441 0 .817-.298 1.513-.895 2.088-.596.576-1.339.864-2.228.864-.842 0-1.54-.243-2.094-.727-.555-.485-.876-1.118-.965-1.901z"/></svg>',heading4:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm13.55 10v-1.873h-3.81v-1.561l4.037-5.91h1.498v5.904h1.156v1.567h-1.156V18.5H17.05zm0-3.44v-3.18l-2.14 3.18h2.14z"/></svg>',heading5:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm9.578 7.607 1.777-.184c.05.402.201.72.45.955a1.223 1.223 0 0 0 1.81-.101c.258-.303.387-.759.387-1.368 0-.572-.128-1-.384-1.286-.256-.285-.59-.428-1-.428-.512 0-.971.226-1.377.679l-1.448-.21.915-4.843h4.716v1.67H15.56l-.28 1.58a2.697 2.697 0 0 1 1.219-.298 2.68 2.68 0 0 1 2.012.863c.55.576.825 1.323.825 2.241a3.36 3.36 0 0 1-.666 2.05c-.605.821-1.445 1.232-2.52 1.232-.86 0-1.56-.23-2.101-.692-.542-.461-.866-1.081-.971-1.86z"/></svg>',heading6:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm15.595 2.973-1.726.19c-.043-.355-.153-.617-.33-.787-.178-.169-.409-.253-.692-.253-.377 0-.695.169-.956.507-.26.339-.424 1.043-.492 2.114.445-.525.997-.787 1.657-.787.745 0 1.383.284 1.914.85.531.568.797 1.3.797 2.197 0 .952-.28 1.716-.838 2.291-.559.576-1.276.864-2.152.864-.94 0-1.712-.365-2.317-1.095-.605-.73-.908-1.927-.908-3.59 0-1.705.316-2.935.946-3.688.63-.753 1.45-1.13 2.457-1.13.706 0 1.291.198 1.755.594.463.395.758.97.885 1.723zm-4.043 3.891c0 .58.133 1.028.4 1.343.266.315.57.473.914.473.33 0 .605-.13.825-.388.22-.258.33-.68.33-1.27 0-.604-.118-1.047-.355-1.329a1.115 1.115 0 0 0-.89-.422c-.342 0-.632.134-.869.403s-.355.666-.355 1.19z"/></svg>',horizontalLine:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9h16v2H2z"/></svg>',html:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17 0a2 2 0 0 1 2 2v7a1 1 0 0 1 1 1v5a1 1 0 0 1-.883.993l-.118.006L19 17a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2l-.001-1.001-.116-.006A1 1 0 0 1 0 15v-5a1 1 0 0 1 .999-1L1 2a2 2 0 0 1 2-2h14zm.499 15.999h-15L2.5 17a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5l-.001-1.001zm-3.478-6.013-.014.014H14v.007l-1.525 1.525-1.46-1.46-.015.013V10h-1v5h1v-3.53l1.428 1.43.048.043.131-.129L14 11.421V15h1v-5h-.965l-.014-.014zM2 10H1v5h1v-2h2v2h1v-5H4v2H2v-2zm7 0H6v1h1v4h1v-4h1v-1zm8 0h-1v5h3v-1h-2v-4zm0-8.5H3a.5.5 0 0 0-.5.5l-.001 6.999h15L17.5 2a.5.5 0 0 0-.5-.5zM10 7v1H4V7h6zm3-2v1H4V5h9zm-3-2v1H4V3h6z"/></svg>',indent:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>',outdent:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>',table:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5.5v3h4v-3H3Zm0 4v3h4v-3H3Zm0 4v3h4v-3H3Zm5 3h4v-3H8v3Zm5 0h4v-3h-4v3Zm4-4v-3h-4v3h4Zm0-4v-3h-4v3h4Zm1.5 8A1.5 1.5 0 0 1 17 18H3a1.5 1.5 0 0 1-1.5-1.5V3c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13.5Zm-6.5-4v-3H8v3h4Zm0-4v-3H8v3h4Z"/></svg>'};class Zn extends Yn{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,i,o)=>{this._renderViewIntoCollectionParent(i,o)}),this.on("remove",(e,i)=>{i.element&&this._parentElement&&i.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(let e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new L("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(let i of this)for(let o of t)i.delegate(o).to(e);this.on("add",(i,o)=>{for(let s of t)o.delegate(s).to(e)}),this.on("remove",(i,o)=>{for(let s of t)o.stopDelegating(s,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}remove(t){return super.remove(t)}}class wo extends ve(){constructor(t){super(),Object.assign(this,hC(uC(t))),this._isRendered=!1,this._revertData=null}render(){let t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,intoFragment:!1,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new L("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*ni(function*t(e){if(e.children)for(let i of e.children)Nm(i)?yield i:c_(i)&&(yield*ni(t(i)))}(this))}static bind(t,e){return{to:(i,o)=>new b3({eventNameOrFunction:i,attribute:i,observable:t,emitter:e,callback:o}),if:(i,o,s)=>new lC({observable:t,emitter:e,attribute:i,valueIfTrue:o,callback:s})}}static extend(t,e){if(t._isRendered)throw new L("template-extend-render",[this,t]);gC(t,hC(uC(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new L("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),Rm(this.text)?this._bindToObservable({schema:this.text,updater:_3(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){if(!this.attributes)return;let e=t.node,i=t.revertData;for(let o in this.attributes){let s=e.getAttribute(o),d=this.attributes[o];i&&(i.attributes[o]=s);let u=bC(d)?d[0].ns:null;if(Rm(d)){let p=bC(d)?d[0].value:d;i&&_C(o)&&p.unshift(s),this._bindToObservable({schema:p,updater:k3(e,o,u),data:t})}else if(o=="style"&&typeof d[0]!="string")this._renderStyleAttribute(d[0],t);else{i&&s&&_C(o)&&d.unshift(s);let p=d.map(g=>g&&g.value||g).reduce((g,b)=>g.concat(b),[]).reduce(pC,"");Ac(p)||e.setAttributeNS(u,o,p)}}}_renderStyleAttribute(t,e){let i=e.node;for(let o in t){let s=t[o];Rm(s)?this._bindToObservable({schema:[s],updater:w3(i,o),data:e}):i.style[o]=s}}_renderElementChildren(t){let e=t.node,i=t.intoFragment?document.createDocumentFragment():e,o=t.isApplying,s=0;for(let d of this.children)if(l_(d)){if(!o){d.setParent(e);for(let u of d)i.appendChild(u.element)}}else if(Nm(d))o||(d.isRendered||d.render(),i.appendChild(d.element));else if(Bo(d))i.appendChild(d);else if(o){let u={children:[],bindings:[],attributes:{}};t.revertData.children.push(u),d._renderNode({intoFragment:!1,node:i.childNodes[s++],isApplying:!0,revertData:u})}else i.appendChild(d.render());t.intoFragment&&e.appendChild(i)}_setUpListeners(t){if(this.eventListeners)for(let e in this.eventListeners){let i=this.eventListeners[e].map(o=>{let[s,d]=e.split("@");return o.activateDomEventListener(s,d,t)});t.revertData&&t.revertData.bindings.push(i)}}_bindToObservable({schema:t,updater:e,data:i}){let o=i.revertData;dC(t,e,i);let s=t.filter(d=>!Ac(d)).filter(d=>d.observable).map(d=>d.activateAttributeListener(t,e,i));o&&o.bindings.push(s)}_revertTemplateFromNode(t,e){for(let o of e.bindings)for(let s of o)s();if(e.text)return void(t.textContent=e.text);let i=t;for(let o in e.attributes){let s=e.attributes[o];s===null?i.removeAttribute(o):i.setAttribute(o,s)}for(let o=0;o<e.children.length;++o)this._revertTemplateFromNode(i.childNodes[o],e.children[o])}}class Rd{constructor(t){this.attribute=t.attribute,this.observable=t.observable,this.emitter=t.emitter,this.callback=t.callback}getValue(t){let e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,i){let o=()=>dC(t,e,i);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,o),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,o)}}}class b3 extends Rd{constructor(t){super(t),this.eventNameOrFunction=t.eventNameOrFunction}activateDomEventListener(t,e,i){let o=(s,d)=>{e&&!d.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(d):this.observable.fire(this.eventNameOrFunction,d))};return this.emitter.listenTo(i.node,t,o),()=>{this.emitter.stopListening(i.node,t,o)}}}class lC extends Rd{constructor(t){super(t),this.valueIfTrue=t.valueIfTrue}getValue(t){return!Ac(super.getValue(t))&&(this.valueIfTrue||!0)}}function Rm(n){return!!n&&(n.value&&(n=n.value),Array.isArray(n)?n.some(Rm):n instanceof Rd)}function dC(n,t,{node:e}){let i=function(s,d){return s.map(u=>u instanceof Rd?u.getValue(d):u)}(n,e),o;o=n.length==1&&n[0]instanceof lC?i[0]:i.reduce(pC,""),Ac(o)?t.remove():t.set(o)}function _3(n){return{set(t){n.textContent=t},remove(){n.textContent=""}}}function k3(n,t,e){return{set(i){n.setAttributeNS(e,t,i)},remove(){n.removeAttributeNS(e,t)}}}function w3(n,t){return{set(e){n.style[t]=e},remove(){n.style[t]=null}}}function uC(n){return md(n,t=>{if(t&&(t instanceof Rd||c_(t)||Nm(t)||l_(t)))return t})}function hC(n){if(typeof n=="string"?n=function(t){return{text:[t]}}(n):n.text&&function(t){t.text=Ie(t.text)}(n),n.on&&(n.eventListeners=function(t){for(let e in t)mC(t,e);return t}(n.on),delete n.on),!n.text){n.attributes&&function(e){for(let i in e)e[i].value&&(e[i].value=Ie(e[i].value)),mC(e,i)}(n.attributes);let t=[];if(n.children)if(l_(n.children))t.push(n.children);else for(let e of n.children)c_(e)||Nm(e)||Bo(e)?t.push(e):t.push(new wo(e));n.children=t}return n}function mC(n,t){n[t]=Ie(n[t])}function pC(n,t){return Ac(t)?n:Ac(n)?t:`${n} ${t}`}function fC(n,t){for(let e in t)n[e]?n[e].push(...t[e]):n[e]=t[e]}function gC(n,t){if(t.attributes&&(n.attributes||(n.attributes={}),fC(n.attributes,t.attributes)),t.eventListeners&&(n.eventListeners||(n.eventListeners={}),fC(n.eventListeners,t.eventListeners)),t.text&&n.text.push(...t.text),t.children&&t.children.length){if(n.children.length!=t.children.length)throw new L("ui-template-extend-children-mismatch",n);let e=0;for(let i of t.children)gC(n.children[e++],i)}}function Ac(n){return!n&&n!==0}function Nm(n){return n instanceof Tt}function c_(n){return n instanceof wo}function l_(n){return n instanceof Zn}function bC(n){return Yt(n[0])&&n[0].ns}function _C(n){return n=="class"||n=="style"}var kC=h(7676),v3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(kC.A,v3),kC.A.locals;class Tt extends hn(ce()){constructor(t){super(),this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new Yn,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,i)=>{i.locale=t,i.t=t&&t.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=wo.bind(this,this)}createCollection(t){let e=new Zn(t);return this._viewCollections.add(e),e}registerChild(t){Ri(t)||(t=[t]);for(let e of t)this._unboundChildren.add(e)}deregisterChild(t){Ri(t)||(t=[t]);for(let e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new wo(t)}extendTemplate(t){wo.extend(this.template,t)}render(){if(this.isRendered)throw new L("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}var wC=h(7801),y3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(wC.A,y3),wC.A.locals;class Lm extends Tt{constructor(t){super(t),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${Ot()}`;let e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:e.to("for")},children:[{text:e.to("text")}]})}}class C3 extends Tt{constructor(t,e){super(t);let i=t.t,o=new Lm;o.text=i("Help Contents. To close this dialog press ESC."),this.setTemplate({tag:"div",attributes:{class:["ck","ck-accessibility-help-dialog__content"],"aria-labelledby":o.id,role:"document",tabindex:-1},children:[ln(document,"p",{},i("Below, you can find a list of keyboard shortcuts that can be used in the editor.")),...this._createCategories(Array.from(e.values())),o]})}focus(){this.element.focus()}_createCategories(t){return t.map(e=>{let i=[ln(document,"h3",{},e.label),...Array.from(e.groups.values()).map(o=>this._createGroup(o)).flat()];return e.description&&i.splice(1,0,ln(document,"p",{},e.description)),ln(document,"section",{},i)})}_createGroup(t){let e=t.keystrokes.sort((o,s)=>o.label.localeCompare(s.label)).map(o=>this._createGroupRow(o)).flat(),i=[ln(document,"dl",{},e)];return t.label&&i.unshift(ln(document,"h4",{},t.label)),i}_createGroupRow(t){let e=this.locale.t,i=ln(document,"dt"),o=ln(document,"dd"),s=function(u){return typeof u=="string"?[[u]]:typeof u[0]=="string"?[u]:u}(t.keystroke),d=[];for(let u of s)d.push(u.map(A3).join(""));return i.innerHTML=t.label,o.innerHTML=d.join(", ")+(t.mayRequireFn&&y.isMac?` ${e("(may require <kbd>Fn</kbd>)")}`:""),[i,o]}}function A3(n){return pc(n).split("+").map(t=>`<kbd>${t}</kbd>`).join("+")}let vC='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.628a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8.5 9.125a.3.3 0 0 0-.253-.296L5.11 8.327a.75.75 0 1 1 .388-1.449l4.04.716c.267.072.624.08.893.009l4.066-.724a.75.75 0 1 1 .388 1.45l-3.132.5a.3.3 0 0 0-.253.296v1.357a.3.3 0 0 0 .018.102l1.615 4.438a.75.75 0 0 1-1.41.513l-1.35-3.71a.3.3 0 0 0-.281-.197h-.209a.3.3 0 0 0-.282.198l-1.35 3.711a.75.75 0 0 1-1.41-.513l1.64-4.509a.3.3 0 0 0 .019-.103V9.125Z"/><path clip-rule="evenodd" d="M10 18.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Zm0 1.5c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z"/></svg>';var yC=h(8527),x3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(yC.A,x3),yC.A.locals;class E3 extends et{constructor(){super(...arguments),this.contentView=null}static get requires(){return[vr]}static get pluginName(){return"AccessibilityHelp"}init(){let t=this.editor,e=t.locale.t;t.ui.componentFactory.add("accessibilityHelp",()=>{let i=this._createButton(ge);return i.set({tooltip:!0,withText:!1,label:e("Accessibility help")}),i}),t.ui.componentFactory.add("menuBar:accessibilityHelp",()=>{let i=this._createButton(Sn);return i.label=e("Accessibility"),i}),t.keystrokes.set("Alt+0",(i,o)=>{this._showDialog(),o()}),this._setupRootLabels()}_createButton(t){let e=new t(this.editor.locale);return e.set({keystroke:"Alt+0",icon:vC}),e.on("execute",()=>this._showDialog()),e}_setupRootLabels(){let t=this.editor,e=t.editing.view,i=t.t;function o(s,d){let u=`${d.getAttribute("aria-label")}. ${i("Press %0 for help.",[pc("Alt+0")])}`;s.setAttribute("aria-label",u,d)}t.ui.on("ready",()=>{e.change(s=>{for(let d of e.document.roots)o(s,d)}),t.on("addRoot",(s,d)=>{let u=t.editing.view.document.getRoot(d.rootName);e.change(p=>o(p,u))},{priority:"low"})})}_showDialog(){let t=this.editor,e=t.plugins.get("Dialog"),i=t.locale.t;this.contentView||(this.contentView=new C3(t.locale,t.accessibility.keystrokeInfos)),e.show({id:"accessibilityHelp",className:"ck-accessibility-help-dialog",title:i("Accessibility help"),icon:vC,hasCloseButton:!0,content:this.contentView})}}class D3 extends Zn{constructor(t,e=[]){super(e),this.locale=t}get bodyCollectionContainer(){return this._bodyCollectionContainer}attachToDom(){this._bodyCollectionContainer=new wo({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=ln(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();let t=document.querySelector(".ck-body-wrapper");t&&t.childElementCount==0&&t.remove()}}var CC=h(7621),M3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(CC.A,M3),CC.A.locals;let AC=class extends Tt{constructor(){super();let n=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.set("isVisible",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon",n.if("isVisible","ck-hidden",t=>!t),"ck-reset_all-excluded",n.if("isColorInherited","ck-icon_inherit-color")],viewBox:n.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){let n=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=n.getAttribute("viewBox");t&&(this.viewBox=t);for(let{name:e,value:i}of Array.from(n.attributes))AC.presentationalAttributeNames.includes(e)&&this.element.setAttribute(e,i);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;n.childNodes.length>0;)this.element.appendChild(n.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(n=>{n.style.fill=this.fillColor})}},kr=AC;kr.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];class I3 extends Tt{constructor(){super(),this.set({style:void 0,text:void 0,id:void 0});let t=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:t.to("style"),id:t.to("id")},children:[{text:t.to("text")}]})}}var xC=h(9715),S3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(xC.A,S3),xC.A.locals;class ge extends Tt{constructor(t,e=new I3){super(t),this._focusDelayed=null;let i=this.bindTemplate,o=Ot();this.set("ariaLabel",void 0),this.set("ariaLabelledBy",`ck-editor__aria-label_${o}`),this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("role",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._setupLabelView(e),this.iconView=new kr,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));let s={tag:"button",attributes:{class:["ck","ck-button",i.to("class"),i.if("isEnabled","ck-disabled",d=>!d),i.if("isVisible","ck-hidden",d=>!d),i.to("isOn",d=>d?"ck-on":"ck-off"),i.if("withText","ck-button_with-text"),i.if("withKeystroke","ck-button_with-keystroke")],role:i.to("role"),type:i.to("type",d=>d||"button"),tabindex:i.to("tabindex"),"aria-checked":i.to("ariaChecked"),"aria-label":i.to("ariaLabel"),"aria-labelledby":i.to("ariaLabelledBy"),"aria-disabled":i.if("isEnabled",!0,d=>!d),"aria-pressed":i.to("isOn",d=>!!this.isToggleable&&String(!!d)),"data-cke-tooltip-text":i.to("_tooltipString"),"data-cke-tooltip-position":i.to("tooltipPosition")},children:this.children,on:{click:i.to(d=>{this.isEnabled?this.fire("execute"):d.preventDefault()})}};y.isSafari&&(this._focusDelayed||(this._focusDelayed=Ab(()=>this.focus(),0)),s.on.mousedown=i.to(()=>{this._focusDelayed()}),s.on.mouseup=i.to(()=>{this._focusDelayed.cancel()})),this.setTemplate(s)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}destroy(){this._focusDelayed&&this._focusDelayed.cancel(),super.destroy()}_setupLabelView(t){return t.bind("text","style","id").to(this,"label","labelStyle","ariaLabelledBy"),t}_createKeystrokeView(){let t=new Tt;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>pc(e))}]}),t}_getTooltipString(t,e,i){return t?typeof t=="string"?t:(i&&(i=pc(i)),t instanceof Function?t(e,i):`${e}${i?` (${i})`:""}`):""}}var EC=h(4391),T3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(EC.A,T3),EC.A.locals;class Fm extends ge{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){let t=new Tt;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}class DC extends ge{constructor(t){super(t),this.buttonView=this,this._fileInputView=new O3(t),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.on("execute",()=>{this._fileInputView.open()}),this.extendTemplate({attributes:{class:"ck-file-dialog-button"}})}render(){super.render(),this.children.add(this._fileInputView)}}class O3 extends Tt{constructor(t){super(t),this.set("acceptedType",void 0),this.set("allowMultipleFiles",!1);let e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:e.to("acceptedType"),multiple:e.to("allowMultipleFiles")},on:{change:e.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}let zm='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';var MC=h(25),P3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(MC.A,P3),MC.A.locals;class B3 extends Tt{constructor(t,e){super(t);let i=this.bindTemplate;this.set("isCollapsed",!1),this.set("label",""),this.buttonView=this._createButtonView(),this.children=this.createCollection(),this.set("_collapsibleAriaLabelUid",void 0),e&&this.children.addMany(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-collapsible",i.if("isCollapsed","ck-collapsible_collapsed")]},children:[this.buttonView,{tag:"div",attributes:{class:["ck","ck-collapsible__children"],role:"region",hidden:i.if("isCollapsed","hidden"),"aria-labelledby":i.to("_collapsibleAriaLabelUid")},children:this.children}]})}render(){super.render(),this._collapsibleAriaLabelUid=this.buttonView.labelView.element.id}focus(){this.buttonView.focus()}_createButtonView(){let t=new ge(this.locale),e=t.bindTemplate;return t.set({withText:!0,icon:zm}),t.extendTemplate({attributes:{"aria-expanded":e.to("isOn",i=>String(i))}}),t.bind("label").to(this),t.bind("isOn").to(this,"isCollapsed",i=>!i),t.on("execute",()=>{this.isCollapsed=!this.isCollapsed}),t}}var IC=h(7317),R3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(IC.A,R3),IC.A.locals,h(6931),h(9047);var SC=h(4962),N3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(SC.A,N3),SC.A.locals;class jm extends Tt{constructor(t,e){super(t);let i=`ck-labeled-field-view-${Ot()}`,o=`ck-labeled-field-view-status-${Ot()}`;this.fieldView=e(this,i,o),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(i),this.statusView=this._createStatusView(o),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(d,u)=>d||u);let s=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",s.to("class"),s.if("isEnabled","ck-disabled",d=>!d),s.if("isEmpty","ck-labeled-field-view_empty"),s.if("isFocused","ck-labeled-field-view_focused"),s.if("placeholder","ck-labeled-field-view_placeholder"),s.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(t){let e=new Lm(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createStatusView(t){let e=new Tt(this.locale),i=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",i.if("errorText","ck-labeled-field-view__status_error"),i.if("_statusText","ck-hidden",o=>!o)],id:t,role:i.if("errorText","alert")},children:[{text:i.to("_statusText")}]}),e}focus(t){this.fieldView.focus(t)}}class L3 extends Tt{constructor(t){super(t),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("tabIndex",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.set("ariaLabel",void 0),this.focusTracker=new Ii,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0);let e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",e.if("isFocused","ck-input_focused"),e.if("isEmpty","ck-input-text_empty"),e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),tabindex:e.to("tabIndex"),readonly:e.to("isReadOnly"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById"),"aria-label":e.to("ariaLabel")},on:{input:e.to((...i)=>{this.fire("input",...i),this._updateIsEmpty()}),change:e.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(t,e,i)=>{this._setDomElementValue(i),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}reset(){this.value=this.element.value="",this._updateIsEmpty()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(t){this.element.value=t||t===0?t:""}}var TC=h(253),F3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(TC.A,F3),TC.A.locals;class z3 extends L3{constructor(t){super(t),this.set("inputMode","text");let e=this.bindTemplate;this.extendTemplate({attributes:{inputmode:e.to("inputMode")}})}}class j3 extends z3{constructor(t){super(t),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var OC=h(1671),V3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(OC.A,V3),OC.A.locals;class U3 extends Tt{constructor(t){super(t);let e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",i=>`ck-dropdown__panel_${i}`),e.if("isVisible","ck-dropdown__panel-visible")],tabindex:"-1"},children:this.children,on:{selectstart:e.to(i=>{i.target.tagName.toLocaleLowerCase()!=="input"&&i.preventDefault()})}})}focus(){if(this.children.length){let t=this.children.first;typeof t.focus=="function"?t.focus():gt("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){let t=this.children.last;typeof t.focusLast=="function"?t.focusLast():t.focus()}}}var PC=h(8149),H3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(PC.A,H3),PC.A.locals;let d_=class extends Tt{constructor(n,t,e){super(n);let i=this.bindTemplate;this.buttonView=t,this.panelView=e,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new nn,this.focusTracker=new Ii,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",o=>!o)],id:i.to("id"),"aria-describedby":i.to("ariaDescribedById")},children:[t,e]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":i.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.on("change:isOpen",(t,e,i)=>{if(i)if(this.panelPosition==="auto"){let o=d_._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=o?o.name:this._panelPositions[0].name}else this.panelView.position=this.panelPosition}),this.keystrokes.listenTo(this.element);let n=(t,e)=>{this.isOpen&&(this.isOpen=!1,e())};this.keystrokes.set("arrowdown",(t,e)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,e())}),this.keystrokes.set("arrowright",(t,e)=>{this.isOpen&&e()}),this.keystrokes.set("arrowleft",n),this.keystrokes.set("esc",n)}focus(){this.buttonView.focus()}get _panelPositions(){let{south:n,north:t,southEast:e,southWest:i,northEast:o,northWest:s,southMiddleEast:d,southMiddleWest:u,northMiddleEast:p,northMiddleWest:g}=d_.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[e,i,d,u,n,o,s,p,g,t]:[i,e,u,d,n,s,o,g,p,t]}},u_=d_;u_.defaultPanelPositions={south:(n,t)=>({top:n.bottom,left:n.left-(t.width-n.width)/2,name:"s"}),southEast:n=>({top:n.bottom,left:n.left,name:"se"}),southWest:(n,t)=>({top:n.bottom,left:n.left-t.width+n.width,name:"sw"}),southMiddleEast:(n,t)=>({top:n.bottom,left:n.left-(t.width-n.width)/4,name:"sme"}),southMiddleWest:(n,t)=>({top:n.bottom,left:n.left-3*(t.width-n.width)/4,name:"smw"}),north:(n,t)=>({top:n.top-t.height,left:n.left-(t.width-n.width)/2,name:"n"}),northEast:(n,t)=>({top:n.top-t.height,left:n.left,name:"ne"}),northWest:(n,t)=>({top:n.top-t.height,left:n.left-t.width+n.width,name:"nw"}),northMiddleEast:(n,t)=>({top:n.top-t.height,left:n.left-(t.width-n.width)/4,name:"nme"}),northMiddleWest:(n,t)=>({top:n.top-t.height,left:n.left-3*(t.width-n.width)/4,name:"nmw"})},u_._getOptimalPosition=hc;class q3 extends ge{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",e=>String(e))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){let t=new kr;return t.content=zm,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}class Xn extends ve(){constructor(t){if(super(),this.focusables=t.focusables,this.focusTracker=t.focusTracker,this.keystrokeHandler=t.keystrokeHandler,this.actions=t.actions,t.actions&&t.keystrokeHandler)for(let e in t.actions){let i=t.actions[e];typeof i=="string"&&(i=[i]);for(let o of i)t.keystrokeHandler.set(o,(s,d)=>{this[e](),d()})}this.on("forwardCycle",()=>this.focusFirst(),{priority:"low"}),this.on("backwardCycle",()=>this.focusLast(),{priority:"low"})}get first(){return this.focusables.find(h_)||null}get last(){return this.focusables.filter(h_).slice(-1)[0]||null}get next(){return this._getDomFocusableItem(1)}get previous(){return this._getDomFocusableItem(-1)}get current(){let t=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((e,i)=>{let o=e.element===this.focusTracker.focusedElement;return o&&(t=i),o}),t)}focusFirst(){this._focus(this.first,1)}focusLast(){this._focus(this.last,-1)}focusNext(){let t=this.next;t&&this.focusables.getIndex(t)===this.current||t===this.first?this.fire("forwardCycle"):this._focus(t,1)}focusPrevious(){let t=this.previous;t&&this.focusables.getIndex(t)===this.current||t===this.last?this.fire("backwardCycle"):this._focus(t,-1)}_focus(t,e){t&&this.focusTracker.focusedElement!==t.element&&t.focus(e)}_getDomFocusableItem(t){let e=this.focusables.length;if(!e)return null;let i=this.current;if(i===null)return this[t===1?"first":"last"];let o=this.focusables.get(i),s=(i+e+t)%e;do{let d=this.focusables.get(s);if(h_(d)){o=d;break}s=(s+e+t)%e}while(s!==i);return o}}function h_(n){return Nd(n)&&pr(n.element)}function Nd(n){return!(!("focus"in n)||typeof n.focus!="function")}class BC extends Tt{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class W3 extends Tt{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}var G3=Object.defineProperty,RC=Object.getOwnPropertySymbols,$3=Object.prototype.hasOwnProperty,K3=Object.prototype.propertyIsEnumerable,NC=(n,t,e)=>t in n?G3(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,LC=(n,t)=>{for(var e in t||(t={}))$3.call(t,e)&&NC(n,e,t[e]);if(RC)for(var e of RC(t))K3.call(t,e)&&NC(n,e,t[e]);return n};function FC(n){if(Array.isArray(n))return{items:n,removeItems:[]};let t={items:[],removeItems:[]};return n?LC(LC({},t),n):t}var zC=h(9677),Y3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(zC.A,Y3),zC.A.locals;let{threeVerticalDots:jC}=Ht,Q3={alignLeft:Ht.alignLeft,bold:Ht.bold,importExport:Ht.importExport,paragraph:Ht.paragraph,plus:Ht.plus,text:Ht.text,threeVerticalDots:Ht.threeVerticalDots,pilcrow:Ht.pilcrow,dragIndicator:Ht.dragIndicator};class m_ extends Tt{constructor(t,e){super(t);let i=this.bindTemplate,o=this.t;this.options=e||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new Ii,this.keystrokes=new nn,this.set("class",void 0),this.set("isCompact",!1),this.itemsView=new Z3(t),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();let s=t.uiLanguageDirection==="rtl";this._focusCycler=new Xn({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[s?"arrowright":"arrowleft","arrowup"],focusNext:[s?"arrowleft":"arrowright","arrowdown"]}});let d=["ck","ck-toolbar",i.to("class"),i.if("isCompact","ck-toolbar_compact")];var u;this.options.shouldGroupWhenFull&&this.options.isFloating&&d.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:d,role:"toolbar","aria-label":i.to("ariaLabel"),style:{maxWidth:i.to("maxWidth")},tabindex:-1},children:this.children,on:{mousedown:(u=this,u.bindTemplate.to(p=>{p.target===u.element&&p.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new J3(this):new X3(this)}render(){super.render(),this.focusTracker.add(this.element);for(let t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e,i){this.items.addMany(this._buildItemsFromConfig(t,e,i))}_buildItemsFromConfig(t,e,i){let o=FC(t),s=i||o.removeItems;return this._cleanItemsConfiguration(o.items,e,s).map(d=>Yt(d)?this._createNestedToolbarDropdown(d,e,s):d==="|"?new BC:d==="-"?new W3:e.create(d)).filter(d=>!!d)}_cleanItemsConfiguration(t,e,i){let o=t.filter((s,d,u)=>s==="|"||i.indexOf(s)===-1&&(s==="-"?!this.options.shouldGroupWhenFull||(gt("toolbarview-line-break-ignored-when-grouping-items",u),!1):!(!Yt(s)&&!e.has(s))||(gt("toolbarview-item-unavailable",{item:s}),!1)));return this._cleanSeparatorsAndLineBreaks(o)}_cleanSeparatorsAndLineBreaks(t){let e=d=>d!=="-"&&d!=="|",i=t.length,o=t.findIndex(e);if(o===-1)return[];let s=i-t.slice().reverse().findIndex(e);return t.slice(o,s).filter((d,u,p)=>e(d)?!0:!(u>0&&p[u-1]===d))}_createNestedToolbarDropdown(t,e,i){let{label:o,icon:s,items:d,tooltip:u=!0,withText:p=!1}=t;if(d=this._cleanItemsConfiguration(d,e,i),!d.length)return null;let g=wr(this.locale);return o||gt("toolbarview-nested-toolbar-dropdown-missing-label",t),g.class="ck-toolbar__nested-toolbar-dropdown",g.buttonView.set({label:o,tooltip:u,withText:!!p}),s!==!1?g.buttonView.icon=Q3[s]||s||jC:g.buttonView.withText=!0,g_(g,()=>g.toolbarView._buildItemsFromConfig(d,e,i)),g}}class Z3 extends Tt{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class X3{constructor(t){let e=t.bindTemplate;t.set("isVertical",!1),t.itemsView.children.bindTo(t.items).using(i=>i),t.focusables.bindTo(t.items).using(i=>Nd(i)?i:null),t.extendTemplate({attributes:{class:[e.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class J3{constructor(t){this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,this.view=t,this.viewChildren=t.children,this.viewFocusables=t.focusables,this.viewItemsView=t.itemsView,this.viewFocusTracker=t.focusTracker,this.viewLocale=t.locale,this.ungroupedItems=t.createCollection(),this.groupedItems=t.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),t.itemsView.children.bindTo(this.ungroupedItems).using(e=>e),this.ungroupedItems.on("change",this._updateFocusCyclableItems.bind(this)),t.children.on("change",this._updateFocusCyclableItems.bind(this)),t.items.on("change",(e,i)=>{let o=i.index,s=Array.from(i.added);for(let d of i.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(d):this.ungroupedItems.remove(d);for(let d=o;d<o+s.length;d++){let u=s[d-o];d>this.ungroupedItems.length?this.groupedItems.add(u,d-this.ungroupedItems.length):this.ungroupedItems.add(u,d)}this._updateGrouping()}),t.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(t){this.viewElement=t.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(t)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!pr(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);let t=this.groupedItems.length,e;for(;this._areItemsOverflowing;)this._groupLastItem(),e=!0;if(!e&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==t&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;let t=this.viewElement,e=this.viewLocale.uiLanguageDirection,i=new ee(t.lastChild),o=new ee(t);if(!this.cachedPadding){let s=wt.window.getComputedStyle(t),d=e==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(s[d])}return e==="ltr"?i.right>o.right-this.cachedPadding:i.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let t;this.resizeObserver=new Js(this.viewElement,e=>{t&&t===e.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),t=e.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(t){t.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new BC),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){let t=this.viewLocale,e=t.t,i=wr(t);return i.class="ck-toolbar__grouped-dropdown",i.panelPosition=t.uiLanguageDirection==="ltr"?"sw":"se",g_(i,this.groupedItems),i.buttonView.set({label:e("Show more items"),tooltip:!0,tooltipPosition:t.uiLanguageDirection==="rtl"?"se":"sw",icon:jC}),i}_updateFocusCyclableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(t=>{Nd(t)&&this.viewFocusables.add(t)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}class xc extends Tt{constructor(t){super(t);let e=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",e.if("isVisible","ck-hidden",i=>!i)],role:"presentation"},children:this.children})}focus(){this.children.first&&this.children.first.focus()}}class p_ extends Tt{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}class Vm extends Tt{constructor(t,e=new Lm){super(t);let i=this.bindTemplate,o=new f_(t);this.set({label:"",isVisible:!0}),this.labelView=e,this.labelView.bind("text").to(this,"label"),this.children=this.createCollection(),this.children.addMany([this.labelView,o]),o.set({role:"group",ariaLabelledBy:e.id}),o.focusTracker.destroy(),o.keystrokes.destroy(),this.items=o.items,this.setTemplate({tag:"li",attributes:{role:"presentation",class:["ck","ck-list__group",i.if("isVisible","ck-hidden",s=>!s)]},children:this.children})}focus(){if(this.items){let t=this.items.find(e=>!(e instanceof p_));t&&t.focus()}}}var VC=h(5199),tR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(VC.A,tR),VC.A.locals;class f_ extends Tt{constructor(t){super(t),this._listItemGroupToChangeListeners=new WeakMap;let e=this.bindTemplate;this.focusables=new Zn,this.items=this.createCollection(),this.focusTracker=new Ii,this.keystrokes=new nn,this._focusCycler=new Xn({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.set("ariaLabel",void 0),this.set("ariaLabelledBy",void 0),this.set("role",void 0),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"],role:e.to("role"),"aria-label":e.to("ariaLabel"),"aria-labelledby":e.to("ariaLabelledBy")},children:this.items})}render(){super.render();for(let t of this.items)t instanceof Vm?this._registerFocusableItemsGroup(t):t instanceof xc&&this._registerFocusableListItem(t);this.items.on("change",(t,e)=>{for(let i of e.removed)i instanceof Vm?this._deregisterFocusableItemsGroup(i):i instanceof xc&&this._deregisterFocusableListItem(i);for(let i of Array.from(e.added).reverse())i instanceof Vm?this._registerFocusableItemsGroup(i,e.index):this._registerFocusableListItem(i,e.index)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}_registerFocusableListItem(t,e){this.focusTracker.add(t.element),this.focusables.add(t,e)}_deregisterFocusableListItem(t){this.focusTracker.remove(t.element),this.focusables.remove(t)}_getOnGroupItemsChangeCallback(t){return(e,i)=>{for(let o of i.removed)this._deregisterFocusableListItem(o);for(let o of Array.from(i.added).reverse())this._registerFocusableListItem(o,this.items.getIndex(t)+i.index)}}_registerFocusableItemsGroup(t,e){Array.from(t.items).forEach((o,s)=>{let d=e!==void 0?e+s:void 0;this._registerFocusableListItem(o,d)});let i=this._getOnGroupItemsChangeCallback(t);this._listItemGroupToChangeListeners.set(t,i),t.items.on("change",i)}_deregisterFocusableItemsGroup(t){for(let e of t.items)this._deregisterFocusableListItem(e);t.items.off("change",this._listItemGroupToChangeListeners.get(t)),this._listItemGroupToChangeListeners.delete(t)}}var UC=h(1792),eR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(UC.A,eR),UC.A.locals;class Um extends Tt{constructor(t,e){super(t);let i=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(e),this.arrowView=this._createArrowView(),this.keystrokes=new nn,this.focusTracker=new Ii,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",i.to("class"),i.if("isVisible","ck-hidden",o=>!o),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(t,e)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),e())}),this.keystrokes.set("arrowleft",(t,e)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),e())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(t){let e=t||new ge;return t||e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){let t=new ge,e=t.bindTemplate;return t.icon=zm,t.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":e.to("isOn"),"aria-haspopup":!0,"aria-expanded":e.to("isOn",i=>String(i))}}),t.bind("isEnabled").to(this),t.bind("label").to(this),t.bind("tooltip").to(this),t.delegate("execute").to(this,"open"),t}}var HC=h(1666),iR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(HC.A,iR),HC.A.locals;var qC=h(3629),nR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(qC.A,nR),qC.A.locals;function wr(n,t=q3){let e=typeof t=="function"?new t(n):t,i=new U3(n),o=new u_(n,e,i);return e.bind("isEnabled").to(o),e instanceof Um?e.arrowView.bind("isOn").to(o,"isOpen"):e.bind("isOn").to(o,"isOpen"),function(s){(function(d){d.on("render",()=>{l({emitter:d,activator:()=>d.isOpen,callback:()=>{d.isOpen=!1},contextElements:()=>[d.element,...d.focusTracker._elements]})})})(s),function(d){d.on("execute",u=>{u.source instanceof Fm||(d.isOpen=!1)})}(s),function(d){d.focusTracker.on("change:isFocused",(u,p,g)=>{d.isOpen&&!g&&(d.isOpen=!1)})}(s),function(d){d.keystrokes.set("arrowdown",(u,p)=>{d.isOpen&&(d.panelView.focus(),p())}),d.keystrokes.set("arrowup",(u,p)=>{d.isOpen&&(d.panelView.focusLast(),p())})}(s),function(d){d.on("change:isOpen",(u,p,g)=>{if(g)return;let b=d.panelView.element;b&&b.contains(wt.document.activeElement)&&d.buttonView.focus()})}(s),function(d){d.on("change:isOpen",(u,p,g)=>{g&&d.panelView.focus()},{priority:"low"})}(s)}(o),o}function g_(n,t,e={}){n.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),n.isOpen?WC(n,t,e):n.once("change:isOpen",()=>WC(n,t,e),{priority:"highest"}),e.enableActiveItemFocusOnDropdownOpen&&KC(n,()=>n.toolbarView.items.find(i=>i.isOn))}function WC(n,t,e){let i=n.locale,o=i.t,s=n.toolbarView=new m_(i),d=typeof t=="function"?t():t;s.ariaLabel=e.ariaLabel||o("Dropdown toolbar"),e.maxWidth&&(s.maxWidth=e.maxWidth),e.class&&(s.class=e.class),e.isCompact&&(s.isCompact=e.isCompact),e.isVertical&&(s.isVertical=!0),d instanceof Zn?s.items.bindTo(d).using(u=>u):s.items.addMany(d),n.panelView.children.add(s),s.items.delegate("execute").to(n)}function GC(n,t,e={}){n.isOpen?$C(n,t,e):n.once("change:isOpen",()=>$C(n,t,e),{priority:"highest"}),KC(n,()=>n.listView.items.find(i=>i instanceof xc&&i.children.first.isOn))}function $C(n,t,e){let i=n.locale,o=n.listView=new f_(i),s=typeof t=="function"?t():t;o.ariaLabel=e.ariaLabel,o.role=e.role,YC(n,o.items,s,i),n.panelView.children.add(o),o.items.delegate("execute").to(n)}function KC(n,t){n.on("change:isOpen",()=>{if(!n.isOpen)return;let e=t();e&&(typeof e.focus=="function"?e.focus():gt("ui-dropdown-focus-child-on-open-child-missing-focus",{view:e}))},{priority:qt.low-10})}function YC(n,t,e,i){t.bindTo(e).using(o=>{if(o.type==="separator")return new p_(i);if(o.type==="group"){let s=new Vm(i);return s.set({label:o.label}),YC(n,s.items,o.items,i),s.items.delegate("execute").to(n),s}if(o.type==="button"||o.type==="switchbutton"){let s=new xc(i),d;return o.type==="button"?(d=new ge(i),d.bind("ariaChecked").to(d,"isOn")):d=new Fm(i),d.bind(...Object.keys(o.model)).to(o.model),d.delegate("execute").to(s),s.children.add(d),s}return null})}let Hm=(n,t,e)=>{let i=new j3(n.locale);return i.set({id:t,ariaDescribedById:e}),i.bind("isReadOnly").to(n,"isEnabled",o=>!o),i.bind("hasError").to(n,"errorText",o=>!!o),i.on("input",()=>{n.errorText=null}),n.bind("isEmpty","isFocused","placeholder").to(i),i},XQ=Symbol("same"),JQ=(Symbol("color"),Symbol("hsva"),Symbol("update")),tZ=(Symbol("parts"),Symbol("css")),eZ=Symbol("sliders");var QC=h(1905),oR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(QC.A,oR),QC.A.locals,ce(Yn);let{eraser:iZ,colorPalette:nZ}=Ht;var ZC=h(6309),rR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(ZC.A,rR),ZC.A.locals;class sR{constructor(t){this._components=new Map,this.editor=t}*names(){for(let t of this._components.values())yield t.originalName}add(t,e){this._components.set(b_(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new L("componentfactory-item-missing",this,{name:t});return this._components.get(b_(t)).callback(this.editor.locale)}has(t){return this._components.has(b_(t))}}function b_(n){return String(n).toLowerCase()}var XC=h(7913),aR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(XC.A,aR),XC.A.locals;class cR extends Tt{constructor(t,e={}){super(t);let i=this.bindTemplate;this.set("label",e.label||""),this.set("class",e.class||null),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-form__header",i.to("class")]},children:this.children}),e.icon&&(this.iconView=new kr,this.iconView.content=e.icon,this.children.add(this.iconView));let o=new Tt(t);o.setTemplate({tag:"h2",attributes:{class:["ck","ck-form__header__label"],role:"presentation"},children:[{text:i.to("label")}]}),this.children.add(o)}}var JC=h(9822),lR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(JC.A,lR),JC.A.locals;class dR extends Tt{constructor(t){super(t),this.children=this.createCollection(),this.keystrokes=new nn,this._focusTracker=new Ii,this._focusables=new Zn,this.focusCycler=new Xn({focusables:this._focusables,focusTracker:this._focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-dialog__actions"]},children:this.children})}render(){super.render(),this.keystrokes.listenTo(this.element)}setButtons(t){for(let e of t){let i=new ge(this.locale),o;for(o in i.on("execute",()=>e.onExecute()),e.onCreate&&e.onCreate(i),e)o!="onExecute"&&o!="onCreate"&&i.set(o,e[o]);this.children.add(i)}this._updateFocusCyclableItems()}focus(t){t===-1?this.focusCycler.focusLast():this.focusCycler.focusFirst()}_updateFocusCyclableItems(){Array.from(this.children).forEach(t=>{this._focusables.add(t),this._focusTracker.add(t.element)})}}class uR extends Tt{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-dialog__content"]},children:this.children})}reset(){for(;this.children.length;)this.children.remove(0)}}var tA=h(9819),hR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(tA.A,hR),tA.A.locals;let qm="screen-center",eA="editor-center",mR="editor-top-side",pR="editor-top-center",fR="editor-bottom-center",gR="editor-above-center",bR="editor-below-center",iA=po("px"),nA=class extends function(n){return class extends n{constructor(...t){super(...t),this._onDragBound=this._onDrag.bind(this),this._onDragEndBound=this._onDragEnd.bind(this),this._lastDraggingCoordinates={x:0,y:0},this.on("render",()=>{this._attachListeners()}),this.set("isDragging",!1)}_attachListeners(){this.listenTo(this.element,"mousedown",this._onDragStart.bind(this)),this.listenTo(this.element,"touchstart",this._onDragStart.bind(this))}_attachDragListeners(){this.listenTo(wt.document,"mouseup",this._onDragEndBound),this.listenTo(wt.document,"touchend",this._onDragEndBound),this.listenTo(wt.document,"mousemove",this._onDragBound),this.listenTo(wt.document,"touchmove",this._onDragBound)}_detachDragListeners(){this.stopListening(wt.document,"mouseup",this._onDragEndBound),this.stopListening(wt.document,"touchend",this._onDragEndBound),this.stopListening(wt.document,"mousemove",this._onDragBound),this.stopListening(wt.document,"touchmove",this._onDragBound)}_onDragStart(t,e){if(!this._isHandleElementPressed(e))return;this._attachDragListeners();let i=0,o=0;e instanceof MouseEvent?(i=e.clientX,o=e.clientY):(i=e.touches[0].clientX,o=e.touches[0].clientY),this._lastDraggingCoordinates={x:i,y:o},this.isDragging=!0}_onDrag(t,e){if(!this.isDragging)return void this._detachDragListeners();let i=0,o=0;e instanceof MouseEvent?(i=e.clientX,o=e.clientY):(i=e.touches[0].clientX,o=e.touches[0].clientY),e.preventDefault(),this.fire("drag",{deltaX:Math.round(i-this._lastDraggingCoordinates.x),deltaY:Math.round(o-this._lastDraggingCoordinates.y)}),this._lastDraggingCoordinates={x:i,y:o}}_onDragEnd(){this._detachDragListeners(),this.isDragging=!1}_isHandleElementPressed(t){return!!this.dragHandleElement&&(this.dragHandleElement===t.target||t.target instanceof HTMLElement&&this.dragHandleElement.contains(t.target))}}}(Tt){constructor(n,{getCurrentDomRoot:t,getViewportOffset:e}){super(n),this.wasMoved=!1;let i=this.bindTemplate,o=n.t;this.set("className",""),this.set("ariaLabel",o("Editor dialog")),this.set("isModal",!1),this.set("position",qm),this.set("_isVisible",!1),this.set("_isTransparent",!1),this.set("_top",0),this.set("_left",0),this._getCurrentDomRoot=t,this._getViewportOffset=e,this.decorate("moveTo"),this.parts=this.createCollection(),this.keystrokes=new nn,this.focusTracker=new Ii,this._focusables=new Zn,this._focusCycler=new Xn({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-dialog-overlay",i.if("isModal","ck-dialog-overlay__transparent",s=>!s),i.if("_isVisible","ck-hidden",s=>!s)],tabindex:"-1"},children:[{tag:"div",attributes:{tabindex:"-1",class:["ck","ck-dialog",i.to("className")],role:"dialog","aria-label":i.to("ariaLabel"),style:{top:i.to("_top",s=>iA(s)),left:i.to("_left",s=>iA(s)),visibility:i.if("_isTransparent","hidden")}},children:this.parts}]})}render(){super.render(),this.keystrokes.set("Esc",(n,t)=>{this.fire("close",{source:"escKeyPress"}),t()}),this.on("drag",(n,{deltaX:t,deltaY:e})=>{this.wasMoved=!0,this.moveBy(t,e)}),this.listenTo(wt.window,"resize",()=>{this._isVisible&&!this.wasMoved&&this.updatePosition()}),this.listenTo(wt.document,"scroll",()=>{this._isVisible&&!this.wasMoved&&this.updatePosition()}),this.on("change:_isVisible",(n,t,e)=>{e&&(this._isTransparent=!0,setTimeout(()=>{this.updatePosition(),this._isTransparent=!1,this.focus()},10))}),this.keystrokes.listenTo(this.element)}get dragHandleElement(){return this.headerView?this.headerView.element:null}setupParts({icon:n,title:t,hasCloseButton:e=!0,content:i,actionButtons:o}){t&&(this.headerView=new cR(this.locale,{icon:n}),e&&(this.closeButtonView=this._createCloseButton(),this.headerView.children.add(this.closeButtonView)),this.headerView.label=t,this.ariaLabel=t,this.parts.add(this.headerView,0)),i&&(i instanceof Tt&&(i=[i]),this.contentView=new uR(this.locale),this.contentView.children.addMany(i),this.parts.add(this.contentView)),o&&(this.actionsView=new dR(this.locale),this.actionsView.setButtons(o),this.parts.add(this.actionsView)),this._updateFocusCyclableItems()}focus(){this._focusCycler.focusFirst()}moveTo(n,t){let e=this._getViewportRect(),i=this._getDialogRect();n+i.width>e.right&&(n=e.right-i.width),n<e.left&&(n=e.left),t<e.top&&(t=e.top),this._moveTo(n,t)}_moveTo(n,t){this._left=n,this._top=t}moveBy(n,t){this.moveTo(this._left+n,this._top+t)}_moveOffScreen(){this._moveTo(-9999,-9999)}updatePosition(){if(!this.element||!this.element.parentNode)return;let n=this._getViewportRect(),t,e=this.position;this._getCurrentDomRoot()?t=this._getVisibleDomRootRect(n):e=qm;let i=nA.defaultOffset,o=this._getDialogRect();switch(e){case mR:if(t){let s=this.locale.contentLanguageDirection==="ltr"?t.right-o.width-i:t.left+i;this.moveTo(s,t.top+i)}else this._moveOffScreen();break;case eA:t?this.moveTo(Math.round(t.left+t.width/2-o.width/2),Math.round(t.top+t.height/2-o.height/2)):this._moveOffScreen();break;case qm:this.moveTo(Math.round((n.width-o.width)/2),Math.round((n.height-o.height)/2));break;case pR:t?this.moveTo(Math.round(t.left+t.width/2-o.width/2),t.top+i):this._moveOffScreen();break;case fR:t?this.moveTo(Math.round(t.left+t.width/2-o.width/2),t.bottom-o.height-i):this._moveOffScreen();break;case gR:t?this.moveTo(Math.round(t.left+t.width/2-o.width/2),t.top-o.height-i):this._moveOffScreen();break;case bR:t?this.moveTo(Math.round(t.left+t.width/2-o.width/2),t.bottom+i):this._moveOffScreen()}}_getVisibleDomRootRect(n){let t=new ee(this._getCurrentDomRoot()).getVisible();return t?(t=n.getIntersection(t),t||null):null}_getDialogRect(){return new ee(this.element.firstElementChild)}_getViewportRect(){return function(n){n=Object.assign({top:0,bottom:0,left:0,right:0},n);let t=new ee(wt.window);return t.top+=n.top,t.height-=n.top,t.bottom-=n.bottom,t.height-=n.bottom,t.left+=n.left,t.right-=n.right,t.width-=n.left+n.right,t}(this._getViewportOffset())}_updateFocusCyclableItems(){let n=[];if(this.contentView)for(let t of this.contentView.children)Nd(t)&&n.push(t);this.actionsView&&n.push(this.actionsView),this.closeButtonView&&n.push(this.closeButtonView),n.forEach(t=>{var e;this._focusables.add(t),this.focusTracker.add(t.element),Nd(e=t)&&"focusCycler"in e&&e.focusCycler instanceof Xn&&(this.listenTo(t.focusCycler,"forwardCycle",i=>{this._focusCycler.focusNext(),this._focusCycler.next!==this._focusCycler.focusables.get(this._focusCycler.current)&&i.stop()}),this.listenTo(t.focusCycler,"backwardCycle",i=>{this._focusCycler.focusPrevious(),this._focusCycler.previous!==this._focusCycler.focusables.get(this._focusCycler.current)&&i.stop()}))})}_createCloseButton(){let n=new ge(this.locale),t=this.locale.t;return n.set({label:t("Close"),tooltip:!0,icon:Ht.cancel}),n.on("execute",()=>this.fire("close",{source:"closeButton"})),n}},Wm=nA;Wm.defaultOffset=15;class vr extends et{constructor(t){super(t);let e=t.t;this._initShowHideListeners(),this._initFocusToggler(),this._initMultiRootIntegration(),this.set("id",null),t.accessibility.addKeystrokeInfos({categoryId:"navigation",keystrokes:[{label:e("Move focus in and out of an active dialog window"),keystroke:"Ctrl+F6",mayRequireFn:!0}]})}static get pluginName(){return"Dialog"}_initShowHideListeners(){this.on("show",(t,e)=>{this._show(e)}),this.on("show",(t,e)=>{e.onShow&&e.onShow(this)},{priority:"low"}),this.on("hide",()=>{vr._visibleDialogPlugin&&vr._visibleDialogPlugin._hide()}),this.on("hide",()=>{this._onHide&&(this._onHide(this),this._onHide=void 0)},{priority:"low"})}_initFocusToggler(){let t=this.editor;t.keystrokes.set("Ctrl+F6",(e,i)=>{this.isOpen&&!this.view.isModal&&(this.view.focusTracker.isFocused?t.editing.view.focus():this.view.focus(),i())})}_initMultiRootIntegration(){let t=this.editor.model;t.document.on("change:data",()=>{if(!this.view)return;let e=t.document.differ.getChangedRoots();for(let i of e)i.state&&this.view.updatePosition()})}show(t){this.hide(),this.fire(`show:${t.id}`,t)}_show({id:t,icon:e,title:i,hasCloseButton:o=!0,content:s,actionButtons:d,className:u,isModal:p,position:g,onHide:b}){let _=this.editor;this.view=new Wm(_.locale,{getCurrentDomRoot:()=>_.editing.view.getDomRoot(_.model.document.selection.anchor.root.rootName),getViewportOffset:()=>_.ui.viewportOffset});let v=this.view;v.on("close",()=>{this.hide()}),_.ui.view.body.add(v),_.ui.focusTracker.add(v.element),_.keystrokes.listenTo(v.element),g||(g=p?qm:eA),v.set({position:g,_isVisible:!0,className:u,isModal:p}),v.setupParts({icon:e,title:i,hasCloseButton:o,content:s,actionButtons:d}),this.id=t,b&&(this._onHide=b),this.isOpen=!0,vr._visibleDialogPlugin=this}hide(){vr._visibleDialogPlugin&&vr._visibleDialogPlugin.fire(`hide:${vr._visibleDialogPlugin.id}`)}_hide(){if(!this.view)return;let t=this.editor,e=this.view;e.contentView&&e.contentView.reset(),t.ui.view.body.remove(e),t.ui.focusTracker.remove(e.element),t.keystrokes.stopListening(e.element),e.destroy(),t.editing.view.focus(),this.id=null,this.isOpen=!1,vr._visibleDialogPlugin=null}}var oA=h(3710),_R={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(oA.A,_R),oA.A.locals;var kR=Object.defineProperty,rA=Object.getOwnPropertySymbols,wR=Object.prototype.hasOwnProperty,vR=Object.prototype.propertyIsEnumerable,sA=(n,t,e)=>t in n?kR(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,be=(n,t)=>{for(var e in t||(t={}))wR.call(t,e)&&sA(n,e,t[e]);if(rA)for(var e of rA(t))vR.call(t,e)&&sA(n,e,t[e]);return n};let aA=po("px"),cA=wt.document.body,yR={top:-99999,left:-99999,name:"arrowless",config:{withArrow:!1}},__=class extends Tt{constructor(n){super(n);let t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class",void 0),this._pinWhenIsVisibleCallback=null,this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",e=>`ck-balloon-panel_${e}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",aA),left:t.to("left",aA)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(n){this.show();let t=__.defaultPositions,e=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:cA,fitInViewport:!0},n),i=__._getOptimalPosition(e)||yR,o=parseInt(i.left),s=parseInt(i.top),d=i.name,u=i.config||{},{withArrow:p=!0}=u;this.top=s,this.left=o,this.position=d,this.withArrow=p}pin(n){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(n):this._stopPinning()},this._startPinning(n),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(n){this.attachTo(n);let t=k_(n.target),e=n.limiter?k_(n.limiter):cA;this.listenTo(wt.document,"scroll",(i,o)=>{let s=o.target,d=t&&s.contains(t),u=e&&s.contains(e);!d&&!u&&t&&e||this.attachTo(n)},{useCapture:!0}),this.listenTo(wt.window,"resize",()=>{this.attachTo(n)})}_stopPinning(){this.stopListening(wt.document,"scroll"),this.stopListening(wt.window,"resize")}},fn=__;function k_(n){return mr(n)?n:Zs(n)?n.commonAncestorContainer:typeof n=="function"?k_(n()):null}function lA(n={}){let{sideOffset:t=fn.arrowSideOffset,heightOffset:e=fn.arrowHeightOffset,stickyVerticalOffset:i=fn.stickyVerticalOffset,config:o}=n;return{northWestArrowSouthWest:(u,p)=>be({top:s(u,p),left:u.left-t,name:"arrow_sw"},o&&{config:o}),northWestArrowSouthMiddleWest:(u,p)=>be({top:s(u,p),left:u.left-.25*p.width-t,name:"arrow_smw"},o&&{config:o}),northWestArrowSouth:(u,p)=>be({top:s(u,p),left:u.left-p.width/2,name:"arrow_s"},o&&{config:o}),northWestArrowSouthMiddleEast:(u,p)=>be({top:s(u,p),left:u.left-.75*p.width+t,name:"arrow_sme"},o&&{config:o}),northWestArrowSouthEast:(u,p)=>be({top:s(u,p),left:u.left-p.width+t,name:"arrow_se"},o&&{config:o}),northArrowSouthWest:(u,p)=>be({top:s(u,p),left:u.left+u.width/2-t,name:"arrow_sw"},o&&{config:o}),northArrowSouthMiddleWest:(u,p)=>be({top:s(u,p),left:u.left+u.width/2-.25*p.width-t,name:"arrow_smw"},o&&{config:o}),northArrowSouth:(u,p)=>be({top:s(u,p),left:u.left+u.width/2-p.width/2,name:"arrow_s"},o&&{config:o}),northArrowSouthMiddleEast:(u,p)=>be({top:s(u,p),left:u.left+u.width/2-.75*p.width+t,name:"arrow_sme"},o&&{config:o}),northArrowSouthEast:(u,p)=>be({top:s(u,p),left:u.left+u.width/2-p.width+t,name:"arrow_se"},o&&{config:o}),northEastArrowSouthWest:(u,p)=>be({top:s(u,p),left:u.right-t,name:"arrow_sw"},o&&{config:o}),northEastArrowSouthMiddleWest:(u,p)=>be({top:s(u,p),left:u.right-.25*p.width-t,name:"arrow_smw"},o&&{config:o}),northEastArrowSouth:(u,p)=>be({top:s(u,p),left:u.right-p.width/2,name:"arrow_s"},o&&{config:o}),northEastArrowSouthMiddleEast:(u,p)=>be({top:s(u,p),left:u.right-.75*p.width+t,name:"arrow_sme"},o&&{config:o}),northEastArrowSouthEast:(u,p)=>be({top:s(u,p),left:u.right-p.width+t,name:"arrow_se"},o&&{config:o}),southWestArrowNorthWest:u=>be({top:d(u),left:u.left-t,name:"arrow_nw"},o&&{config:o}),southWestArrowNorthMiddleWest:(u,p)=>be({top:d(u),left:u.left-.25*p.width-t,name:"arrow_nmw"},o&&{config:o}),southWestArrowNorth:(u,p)=>be({top:d(u),left:u.left-p.width/2,name:"arrow_n"},o&&{config:o}),southWestArrowNorthMiddleEast:(u,p)=>be({top:d(u),left:u.left-.75*p.width+t,name:"arrow_nme"},o&&{config:o}),southWestArrowNorthEast:(u,p)=>be({top:d(u),left:u.left-p.width+t,name:"arrow_ne"},o&&{config:o}),southArrowNorthWest:u=>be({top:d(u),left:u.left+u.width/2-t,name:"arrow_nw"},o&&{config:o}),southArrowNorthMiddleWest:(u,p)=>be({top:d(u),left:u.left+u.width/2-.25*p.width-t,name:"arrow_nmw"},o&&{config:o}),southArrowNorth:(u,p)=>be({top:d(u),left:u.left+u.width/2-p.width/2,name:"arrow_n"},o&&{config:o}),southArrowNorthMiddleEast:(u,p)=>be({top:d(u),left:u.left+u.width/2-.75*p.width+t,name:"arrow_nme"},o&&{config:o}),southArrowNorthEast:(u,p)=>be({top:d(u),left:u.left+u.width/2-p.width+t,name:"arrow_ne"},o&&{config:o}),southEastArrowNorthWest:u=>be({top:d(u),left:u.right-t,name:"arrow_nw"},o&&{config:o}),southEastArrowNorthMiddleWest:(u,p)=>be({top:d(u),left:u.right-.25*p.width-t,name:"arrow_nmw"},o&&{config:o}),southEastArrowNorth:(u,p)=>be({top:d(u),left:u.right-p.width/2,name:"arrow_n"},o&&{config:o}),southEastArrowNorthMiddleEast:(u,p)=>be({top:d(u),left:u.right-.75*p.width+t,name:"arrow_nme"},o&&{config:o}),southEastArrowNorthEast:(u,p)=>be({top:d(u),left:u.right-p.width+t,name:"arrow_ne"},o&&{config:o}),westArrowEast:(u,p)=>be({top:u.top+u.height/2-p.height/2,left:u.left-p.width-e,name:"arrow_e"},o&&{config:o}),eastArrowWest:(u,p)=>be({top:u.top+u.height/2-p.height/2,left:u.right+e,name:"arrow_w"},o&&{config:o}),viewportStickyNorth:(u,p,g,b)=>{let _=b||g;return u.getIntersection(_)?_.height-u.height>i?null:{top:_.top+i,left:u.left+u.width/2-p.width/2,name:"arrowless",config:be({withArrow:!1},o)}:null}};function s(u,p){return u.top-p.height-e}function d(u){return u.bottom+e}}fn.arrowSideOffset=25,fn.arrowHeightOffset=10,fn.stickyVerticalOffset=20,fn._getOptimalPosition=hc,fn.defaultPositions=lA();var dA=h(9205),CR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};at()(dA.A,CR),dA.A.locals;let uA="ck-tooltip",gn=class extends hn(){constructor(n){if(super(),this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver=null,this._mutationObserver=null,gn._editors.add(n),gn._instance)return gn._instance;gn._instance=this,this.tooltipTextView=new Tt(n.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new fn(n.locale),this.balloonPanelView.class=uA,this.balloonPanelView.content.add(this.tooltipTextView),this._mutationObserver=function(t){let e=new MutationObserver(()=>{t()});return{attach(i){e.observe(i,{attributes:!0,attributeFilter:["data-cke-tooltip-text","data-cke-tooltip-position"]})},detach(){e.disconnect()}}}(()=>{this._updateTooltipPosition()}),this._pinTooltipDebounced=wc(this._pinTooltip,600),this._unpinTooltipDebounced=wc(this._unpinTooltip,400),this.listenTo(wt.document,"keydown",this._onKeyDown.bind(this),{useCapture:!0}),this.listenTo(wt.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(wt.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(wt.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(wt.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(wt.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(n){let t=n.ui.view&&n.ui.view.body;gn._editors.delete(n),this.stopListening(n.ui),t&&t.has(this.balloonPanelView)&&t.remove(this.balloonPanelView),gn._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),gn._instance=null)}static getPositioningFunctions(n){let t=gn.defaultBalloonPositions;return{s:[t.southArrowNorth,t.southArrowNorthEast,t.southArrowNorthWest],n:[t.northArrowSouth],e:[t.eastArrowWest],w:[t.westArrowEast],sw:[t.southArrowNorthEast],se:[t.southArrowNorthWest]}[n]}_onKeyDown(n,t){t.key==="Escape"&&this._currentElementWithTooltip&&(this._unpinTooltip(),t.stopPropagation())}_onEnterOrFocus(n,{target:t}){let e=w_(t);e?e!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(e,hA(e))):n.name==="focus"&&this._unpinTooltip()}_onLeaveOrBlur(n,{target:t,relatedTarget:e}){if(n.name==="mouseleave"){if(!mr(t))return;let i=this.balloonPanelView.element,o=i&&(i===e||i.contains(e)),s=!o&&t===i;if(o)return void this._unpinTooltipDebounced.cancel();if(!s&&this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;let d=w_(t),u=w_(e);(s||d&&d!==u)&&this._unpinTooltipDebounced()}else{if(this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;this._unpinTooltipDebounced()}}_onScroll(n,{target:t}){this._currentElementWithTooltip&&(t.contains(this.balloonPanelView.element)&&t.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(n,{text:t,position:e,cssClass:i}){this._unpinTooltip();let o=Mi(gn._editors.values()).ui.view.body;o.has(this.balloonPanelView)||o.add(this.balloonPanelView),this.tooltipTextView.text=t,this.balloonPanelView.pin({target:n,positions:gn.getPositioningFunctions(e)}),this._resizeObserver=new Js(n,()=>{pr(n)||this._unpinTooltip()}),this._mutationObserver.attach(n),this.balloonPanelView.class=[uA,i].filter(s=>s).join(" ");for(let s of gn._editors)this.listenTo(s.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=n,this._currentTooltipPosition=e}_unpinTooltip(){this._unpinTooltipDebounced.cancel(),this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(let n of gn._editors)this.stopListening(n.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this.tooltipTextView.text="",this._resizeObserver&&this._resizeObserver.destroy(),this._mutationObserver.detach()}_updateTooltipPosition(){let n=hA(this._currentElementWithTooltip);pr(this._currentElementWithTooltip)&&n.text?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:gn.getPositioningFunctions(n.position)}):this._unpinTooltip()}},Gm=gn;function w_(n){return mr(n)?n.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}function hA(n){return{text:n.dataset.ckeTooltipText,position:n.dataset.ckeTooltipPosition||"s",cssClass:n.dataset.ckeTooltipClass||""}}Gm.defaultBalloonPositions=lA({heightOffset:5,sideOffset:13}),Gm._editors=new Set,Gm._instance=null;let $m=function(n,t,e){var i=!0,o=!0;if(typeof n!="function")throw new TypeError("Expected a function");return Yt(e)&&(i="leading"in e?!!e.leading:i,o="trailing"in e?!!e.trailing:o),wc(n,t,{leading:i,maxWait:t,trailing:o})};var AR=Object.defineProperty,mA=Object.getOwnPropertySymbols,xR=Object.prototype.hasOwnProperty,ER=Object.prototype.propertyIsEnumerable,pA=(n,t,e)=>t in n?AR(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,DR=(n,t)=>{for(var e in t||(t={}))xR.call(t,e)&&pA(n,e,t[e]);if(mA)for(var e of mA(t))ER.call(t,e)&&pA(n,e,t[e]);return n};let MR=50,IR=350,SR="Powered by";class TR extends hn(){constructor(t){super(),this.editor=t,this._balloonView=null,this._lastFocusedEditableElement=null,this._showBalloonThrottled=$m(this._showBalloon.bind(this),50,{leading:!0}),t.on("ready",this._handleEditorReady.bind(this))}destroy(){let t=this._balloonView;t&&(t.unpin(),this._balloonView=null),this._showBalloonThrottled.cancel(),this.stopListening()}_handleEditorReady(){let t=this.editor;(t.config.get("ui.poweredBy.forceVisible")||function(e){function i(C){return C.length>=40&&C.length<=255?"VALID":"INVALID"}if(!e)return"INVALID";let o="";try{o=atob(e)}catch{return"INVALID"}let s=o.split("-"),d=s[0],u=s[1];if(!u)return i(e);try{atob(u)}catch{try{if(atob(d),!atob(d).length)return i(e)}catch{return i(e)}}if(d.length<40||d.length>255)return"INVALID";let p="";try{atob(d),p=atob(u)}catch{return"INVALID"}if(p.length!==8)return"INVALID";let g=Number(p.substring(0,4)),b=Number(p.substring(4,6))-1,_=Number(p.substring(6,8)),v=new Date(g,b,_);return v<uo||isNaN(Number(v))?"INVALID":"VALID"}(t.config.get("licenseKey"))!=="VALID")&&t.ui.view&&(t.ui.focusTracker.on("change:isFocused",(e,i,o)=>{this._updateLastFocusedEditableElement(),o?this._showBalloon():this._hideBalloon()}),t.ui.focusTracker.on("change:focusedElement",(e,i,o)=>{this._updateLastFocusedEditableElement(),o&&this._showBalloon()}),t.ui.on("update",()=>{this._showBalloonThrottled()}))}_createBalloonView(){let t=this.editor,e=this._balloonView=new fn,i=gA(t),o=new OR(t.locale,i.label);e.content.add(o),e.set({class:"ck-powered-by-balloon"}),t.ui.view.body.add(e),t.ui.focusTracker.add(e.element),this._balloonView=e}_showBalloon(){if(!this._lastFocusedEditableElement)return;let t=function(e,i){let o=gA(e),s=o.side==="right"?function(d,u){return fA(d,u,(p,g)=>p.left+p.width-g.width-u.horizontalOffset)}(i,o):function(d,u){return fA(d,u,p=>p.left+u.horizontalOffset)}(i,o);return{target:i,positions:[s]}}(this.editor,this._lastFocusedEditableElement);t&&(this._balloonView||this._createBalloonView(),this._balloonView.pin(t))}_hideBalloon(){this._balloonView&&this._balloonView.unpin()}_updateLastFocusedEditableElement(){let t=this.editor,e=t.ui.focusTracker.isFocused,i=t.ui.focusTracker.focusedElement;if(!e||!i)return void(this._lastFocusedEditableElement=null);let o=Array.from(t.ui.getEditableElementsNames()).map(s=>t.ui.getEditableElement(s));o.includes(i)?this._lastFocusedEditableElement=i:this._lastFocusedEditableElement=o[0]}}class OR extends Tt{constructor(t,e){super(t);let i=new kr,o=this.bindTemplate;i.set({content:`<svg xmlns="http://www.w3.org/2000/svg" width="53" height="10" viewBox="0 0 53 10"><path fill="#1C2331" d="M31.724 1.492a15.139 15.139 0 0 0 .045 1.16 2.434 2.434 0 0 0-.687-.34 3.68 3.68 0 0 0-1.103-.166 2.332 2.332 0 0 0-1.14.255 1.549 1.549 0 0 0-.686.87c-.15.41-.225.98-.225 1.712 0 .939.148 1.659.444 2.161.297.503.792.754 1.487.754.452.015.9-.094 1.294-.316.296-.174.557-.4.771-.669l.14.852h1.282V.007h-1.623v1.485ZM31 6.496a1.77 1.77 0 0 1-.494.061.964.964 0 0 1-.521-.127.758.758 0 0 1-.296-.466 3.984 3.984 0 0 1-.093-.992 4.208 4.208 0 0 1 .098-1.052.753.753 0 0 1 .307-.477 1.08 1.08 0 0 1 .55-.122c.233-.004.466.026.69.089l.483.144v2.553c-.11.076-.213.143-.307.2a1.73 1.73 0 0 1-.417.189ZM35.68 0l-.702.004c-.322.002-.482.168-.48.497l.004.581c.002.33.164.493.486.49l.702-.004c.322-.002.481-.167.48-.496L36.165.49c-.002-.33-.164-.493-.486-.491ZM36.145 2.313l-1.612.01.034 5.482 1.613-.01-.035-5.482ZM39.623.79 37.989.8 38 2.306l-.946.056.006 1.009.949-.006.024 2.983c.003.476.143.844.419 1.106.275.26.658.39 1.148.387.132 0 .293-.01.483-.03.19-.02.38-.046.57-.08.163-.028.324-.068.482-.119l-.183-1.095-.702.004a.664.664 0 0 1-.456-.123.553.553 0 0 1-.14-.422l-.016-2.621 1.513-.01-.006-1.064-1.514.01-.01-1.503ZM46.226 2.388c-.41-.184-.956-.274-1.636-.27-.673.004-1.215.101-1.627.29-.402.179-.72.505-.888.91-.18.419-.268.979-.264 1.68.004.688.1 1.24.285 1.655.172.404.495.724.9.894.414.18.957.268 1.63.264.68-.004 1.224-.099 1.632-.284.4-.176.714-.501.878-.905.176-.418.263-.971.258-1.658-.004-.702-.097-1.261-.28-1.677a1.696 1.696 0 0 0-.888-.9Zm-.613 3.607a.77.77 0 0 1-.337.501 1.649 1.649 0 0 1-1.317.009.776.776 0 0 1-.343-.497 4.066 4.066 0 0 1-.105-1.02 4.136 4.136 0 0 1 .092-1.03.786.786 0 0 1 .337-.507 1.59 1.59 0 0 1 1.316-.008.79.79 0 0 1 .344.502c.078.337.113.683.105 1.03.012.343-.019.685-.092 1.02ZM52.114 2.07a2.67 2.67 0 0 0-1.128.278c-.39.191-.752.437-1.072.73l-.157-.846-1.273.008.036 5.572 1.623-.01-.024-3.78c.35-.124.646-.22.887-.286.26-.075.53-.114.8-.118l.45-.003.144-1.546-.286.001ZM22.083 7.426l-1.576-2.532a2.137 2.137 0 0 0-.172-.253 1.95 1.95 0 0 0-.304-.29.138.138 0 0 1 .042-.04 1.7 1.7 0 0 0 .328-.374l1.75-2.71c.01-.015.025-.028.024-.048-.01-.01-.021-.007-.031-.007L20.49 1.17a.078.078 0 0 0-.075.045l-.868 1.384c-.23.366-.46.732-.688 1.099a.108.108 0 0 1-.112.06c-.098-.005-.196-.001-.294-.002-.018 0-.038.006-.055-.007.002-.02.002-.039.005-.058a4.6 4.6 0 0 0 .046-.701V1.203c0-.02-.009-.032-.03-.03h-.033L16.93 1.17c-.084 0-.073-.01-.073.076v6.491c-.001.018.006.028.025.027h1.494c.083 0 .072.007.072-.071v-2.19c0-.055-.003-.11-.004-.166a3.366 3.366 0 0 0-.05-.417h.06c.104 0 .209.002.313-.002a.082.082 0 0 1 .084.05c.535.913 1.07 1.824 1.607 2.736a.104.104 0 0 0 .103.062c.554-.003 1.107-.002 1.66-.002l.069-.003-.019-.032-.188-.304ZM27.112 6.555c-.005-.08-.004-.08-.082-.08h-2.414c-.053 0-.106-.003-.159-.011a.279.279 0 0 1-.246-.209.558.558 0 0 1-.022-.15c0-.382 0-.762-.002-1.143 0-.032.007-.049.042-.044h2.504c.029.003.037-.012.034-.038V3.814c0-.089.013-.078-.076-.078h-2.44c-.07 0-.062.003-.062-.06v-.837c0-.047.004-.093.013-.14a.283.283 0 0 1 .241-.246.717.717 0 0 1 .146-.011h2.484c.024.002.035-.009.036-.033l.003-.038.03-.496c.01-.183.024-.365.034-.548.005-.085.003-.087-.082-.094-.218-.018-.437-.038-.655-.05a17.845 17.845 0 0 0-.657-.026 72.994 72.994 0 0 0-1.756-.016 1.7 1.7 0 0 0-.471.064 1.286 1.286 0 0 0-.817.655c-.099.196-.149.413-.145.633v3.875c0 .072.003.144.011.216a1.27 1.27 0 0 0 .711 1.029c.228.113.48.167.734.158.757-.005 1.515.002 2.272-.042.274-.016.548-.034.82-.053.03-.002.043-.008.04-.041-.008-.104-.012-.208-.019-.312a69.964 69.964 0 0 1-.05-.768ZM16.14 7.415l-.127-1.075c-.004-.03-.014-.04-.044-.037a13.125 13.125 0 0 1-.998.073c-.336.01-.672.02-1.008.016-.116-.001-.233-.014-.347-.039a.746.746 0 0 1-.45-.262c-.075-.1-.132-.211-.167-.33a3.324 3.324 0 0 1-.126-.773 9.113 9.113 0 0 1-.015-.749c0-.285.022-.57.065-.852.023-.158.066-.312.127-.46a.728.728 0 0 1 .518-.443 1.64 1.64 0 0 1 .397-.048c.628-.001 1.255.003 1.882.05.022.001.033-.006.036-.026l.003-.031.06-.55c.019-.177.036-.355.057-.532.004-.034-.005-.046-.04-.056a5.595 5.595 0 0 0-1.213-.21 10.783 10.783 0 0 0-.708-.02c-.24-.003-.48.01-.719.041a3.477 3.477 0 0 0-.625.14 1.912 1.912 0 0 0-.807.497c-.185.2-.33.433-.424.688a4.311 4.311 0 0 0-.24 1.096c-.031.286-.045.572-.042.86-.006.43.024.86.091 1.286.04.25.104.497.193.734.098.279.26.53.473.734.214.205.473.358.756.446.344.11.702.17 1.063.177a8.505 8.505 0 0 0 1.578-.083 6.11 6.11 0 0 0 .766-.18c.03-.008.047-.023.037-.057a.157.157 0 0 1-.003-.025Z"/><path fill="#AFE229" d="M6.016 6.69a1.592 1.592 0 0 0-.614.21c-.23.132-.422.32-.56.546-.044.072-.287.539-.287.539l-.836 1.528.009.006c.038.025.08.046.123.063.127.046.26.07.395.073.505.023 1.011-.007 1.517-.003.29.009.58.002.869-.022a.886.886 0 0 0 .395-.116.962.962 0 0 0 .312-.286c.056-.083.114-.163.164-.249.24-.408.48-.816.718-1.226.075-.128.148-.257.222-.386l.112-.192a1.07 1.07 0 0 0 .153-.518l-1.304.023s-1.258-.005-1.388.01Z"/><path fill="#771BFF" d="m2.848 9.044.76-1.39.184-.352c-.124-.067-.245-.14-.367-.21-.346-.204-.706-.384-1.045-.6a.984.984 0 0 1-.244-.207c-.108-.134-.136-.294-.144-.46-.021-.409-.002-.818-.009-1.227-.003-.195 0-.39.003-.585.004-.322.153-.553.427-.713l.833-.488c.22-.13.44-.257.662-.385.05-.029.105-.052.158-.077.272-.128.519-.047.76.085l.044.028c.123.06.242.125.358.196.318.178.635.357.952.537.095.056.187.117.275.184.194.144.254.35.266.578.016.284.007.569.006.853-.001.28.004.558 0 .838.592-.003 1.259 0 1.259 0l.723-.013c-.003-.292-.007-.584-.007-.876 0-.524.015-1.048-.016-1.571-.024-.42-.135-.8-.492-1.067a5.02 5.02 0 0 0-.506-.339A400.52 400.52 0 0 0 5.94.787C5.722.664 5.513.524 5.282.423 5.255.406 5.228.388 5.2.373 4.758.126 4.305-.026 3.807.21c-.097.046-.197.087-.29.14A699.896 699.896 0 0 0 .783 1.948c-.501.294-.773.717-.778 1.31-.004.36-.009.718-.001 1.077.016.754-.017 1.508.024 2.261.016.304.07.6.269.848.127.15.279.28.448.382.622.4 1.283.734 1.92 1.11l.183.109Z"/></svg>
`;let t="",e=null;for(let i of n.getChildren())t+=VN(i,e)+lx(i),e=i;return t}function VN(n,t){return t?n.is("element","li")&&!n.isEmpty&&n.getChild(0).is("containerElement")||cx.includes(n.name)&&cx.includes(t.name)?`

`:n.is("containerElement")||t.is("containerElement")?ax.includes(n.name)||ax.includes(t.name)?`
`:`

        --mat-mdc-form-field-label-transform,
        ${dH} translateX(${I})
      [mat-card-title], [mat-card-subtitle],