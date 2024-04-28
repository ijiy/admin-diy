import{i as U}from"./vue-demi-Dq6ymT-8.js";import{af as F,r as V,ae as B,ao as X,i as G,w as $,Y as A,D as E,ap as D,a8 as T,g as tt,h as et,n as st,Z as nt,B as ot}from"./@vue-BFtwODxB.js";/*!
* pinia v2.1.7
* (c) 2023 Eduardo San Martin Morote
* @license MIT
*/let H;const k=t=>H=t,J=Symbol();function R(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var C;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(C||(C={}));function bt(){const t=F(!0),o=t.run(()=>V({}));let s=[],e=[];const r=B({install(u){k(r),r._a=u,u.provide(J,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!U?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const N=()=>{};function O(t,o,s,e=N){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&tt()&&et(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const ct=t=>t();function I(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];R(r)&&R(e)&&t.hasOwnProperty(s)&&!E(e)&&!D(e)?t[s]=I(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!R(t)||!t.hasOwnProperty(rt)}const{assign:y}=Object;function at(t){return!!(E(t)&&t.effect)}function ft(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let g;function b(){a||(s.state.value[t]=r?r():{});const v=nt(s.state.value[t]);return y(v,u,Object.keys(f||{}).reduce((m,_)=>(m[_]=B(ot(()=>{k(s);const d=s._s.get(t);return f[_].call(d,d)})),m),{}))}return g=Y(t,b,o,s,e,!0),g}function Y(t,o,s={},e,r,u){let f;const a=y({actions:{}},s),g={deep:!0};let b,v,m=[],_=[],d;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),V({});let L;function W(c){let n;b=v=!1,typeof c=="function"?(c(e.state.value[t]),n={type:C.patchFunction,storeId:t,events:d}):(I(e.state.value[t],c),n={type:C.patchObject,payload:c,storeId:t,events:d});const h=L=Symbol();st().then(()=>{L===h&&(b=!0)}),v=!0,P(m,n,e.state.value[t])}const Z=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{y(S,h)})}:N;function q(){f.stop(),m=[],_=[],e._s.delete(t)}function z(c,n){return function(){k(e);const h=Array.from(arguments),S=[],p=[];function M(i){S.push(i)}function Q(i){p.push(i)}P(_,{args:h,name:c,store:l,after:M,onError:Q});let x;try{x=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw P(p,i),i}return x instanceof Promise?x.then(i=>(P(S,i),i)).catch(i=>(P(p,i),Promise.reject(i))):(P(S,x),x)}}const K={_p:e,$id:t,$onAction:O.bind(null,_),$patch:W,$reset:Z,$subscribe(c,n={}){const h=O(m,c,n.detached,()=>S()),S=f.run(()=>$(()=>e.state.value[t],p=>{(n.flush==="sync"?v:b)&&c({storeId:t,type:C.direct,events:d},p)},y({},g,n)));return h},$dispose:q},l=A(K);e._s.set(t,l);const w=(e._a&&e._a.runWithContext||ct)(()=>e._e.run(()=>(f=F()).run(o)));for(const c in w){const n=w[c];if(E(n)&&!at(n)||D(n))u||(j&&ut(n)&&(E(n)?n.value=j[c]:I(n,j[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const h=z(c,n);w[c]=h,a.actions[c]=n}}return y(l,w),y(T(l),w),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{W(n=>{y(n,c)})}}),e._p.forEach(c=>{y(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,v=!0,l}function yt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,g){const b=X();return a=a||(b?G(J,null):null),a&&k(a),a=H,a._s.has(e)||(u?Y(e,o,r,a):ft(e,r,a)),a._s.get(e)}return f.$id=e,f}export{bt as c,yt as d};