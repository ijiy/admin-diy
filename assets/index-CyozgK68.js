import{cD as h,cE as m,j as S,S as b,Q as g,cF as w}from"./index-B0Zwk6Q1.js";function A(e){return h()?(m(e),!0):!1}function p(e){return typeof e=="function"?e():S(e)}const E=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const j=Object.prototype.toString,L=e=>j.call(e)==="[object Object]",O=()=>{};function W(e){var t;const n=p(e);return(t=n==null?void 0:n.$el)!=null?t:n}const C=E?window:void 0;function k(...e){let t,n,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,a]=e,t=C):[t,n,r,a]=e,!t)return O;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const c=[],f=()=>{c.forEach(o=>o()),c.length=0},d=(o,s,i,u)=>(o.addEventListener(s,i,u),()=>o.removeEventListener(s,i,u)),y=b(()=>[W(t),p(a)],([o,s])=>{if(f(),!o)return;const i=L(s)?{...s}:s;c.push(...n.flatMap(u=>r.map(v=>d(o,u,v,i))))},{immediate:!0,flush:"post"}),l=()=>{y(),f()};return A(l),l}function G(){const e=g([]);return e.value.set=t=>{t&&e.value.push(t)},w(()=>{e.value.length=0}),e}export{G as a,k as u};
