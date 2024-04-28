import{A as X,bq as Y,O as g,P as Z,bh as x,b9 as N,ar as w,R as V,N as S,bi as P,bj as B,d as U,bk as ee,at as ae,x as ie,br as te,bl as ne,c as d,Q as T,C as se,S as K,bp as le,W as oe,bm as ce,m as i,e as v,g as C,j as a,F as u,k as re,J as c,w as p,T as m,U as h,H as r,t as E,h as ue,bs as de,D as O,G as ve,aC as fe,z as pe,ao as he,bt as M,a9 as be,I as me}from"./index-D1zNGLi-.js";const ye=X({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:Y},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:g},activeActionIcon:{type:g},activeIcon:{type:g},inactiveIcon:{type:g},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:Z(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0},...x(["ariaLabel"])}),ke={[N]:l=>w(l)||V(l)||S(l),[P]:l=>w(l)||V(l)||S(l),[B]:l=>w(l)||V(l)||S(l)},Ie=["onClick"],ge=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],we=["aria-hidden"],Ve=["aria-hidden"],Se=["aria-hidden"],L="ElSwitch",Te=U({name:L}),Ce=U({...Te,props:ye,emits:ke,setup(l,{expose:j,emit:f}){const t=l,{formItem:y}=ee(),G=ae(),n=ie("switch"),{inputId:H}=te(t,{formItemContext:y}),k=ne(d(()=>t.loading)),A=T(t.modelValue!==!1),b=T(),R=T(),W=d(()=>[n.b(),n.m(G.value),n.is("disabled",k.value),n.is("checked",s.value)]),$=d(()=>[n.e("label"),n.em("label","left"),n.is("active",!s.value)]),q=d(()=>[n.e("label"),n.em("label","right"),n.is("active",s.value)]),J=d(()=>({width:se(t.width)}));K(()=>t.modelValue,()=>{A.value=!0});const D=d(()=>A.value?t.modelValue:!1),s=d(()=>D.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(D.value)||(f(N,t.inactiveValue),f(P,t.inactiveValue),f(B,t.inactiveValue)),K(s,e=>{var o;b.value.checked=e,t.validateEvent&&((o=y==null?void 0:y.validate)==null||o.call(y,"change").catch(_=>le()))});const I=()=>{const e=s.value?t.inactiveValue:t.activeValue;f(N,e),f(P,e),f(B,e),he(()=>{b.value.checked=s.value})},z=()=>{if(k.value)return;const{beforeChange:e}=t;if(!e){I();return}const o=e();[M(o),w(o)].includes(!0)||be(L,"beforeChange must return type `Promise<boolean>` or `boolean`"),M(o)?o.then(F=>{F&&I()}).catch(F=>{}):o&&I()},Q=()=>{var e,o;(o=(e=b.value)==null?void 0:e.focus)==null||o.call(e)};return oe(()=>{b.value.checked=s.value}),ce({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-switch",ref:"https://element-plus.org/en-US/component/switch.html"},d(()=>!!t.label)),j({focus:Q,checked:s}),(e,o)=>(i(),v("div",{class:u(a(W)),onClick:fe(z,["prevent"])},[C("input",{id:a(H),ref_key:"input",ref:b,class:u(a(n).e("input")),type:"checkbox",role:"switch","aria-checked":a(s),"aria-disabled":a(k),"aria-label":e.label||e.ariaLabel,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(k),tabindex:e.tabindex,onChange:I,onKeydown:re(z,["enter"])},null,42,ge),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(i(),v("span",{key:0,class:u(a($))},[e.inactiveIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(m(e.inactiveIcon)))]),_:1})):r("v-if",!0),!e.inactiveIcon&&e.inactiveText?(i(),v("span",{key:1,"aria-hidden":a(s)},E(e.inactiveText),9,we)):r("v-if",!0)],2)):r("v-if",!0),C("span",{ref_key:"core",ref:R,class:u(a(n).e("core")),style:ve(a(J))},[e.inlinePrompt?(i(),v("div",{key:0,class:u(a(n).e("inner"))},[e.activeIcon||e.inactiveIcon?(i(),c(a(h),{key:0,class:u(a(n).is("icon"))},{default:p(()=>[(i(),c(m(a(s)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(i(),v("span",{key:1,class:u(a(n).is("text")),"aria-hidden":!a(s)},E(a(s)?e.activeText:e.inactiveText),11,Ve)):r("v-if",!0)],2)):r("v-if",!0),C("div",{class:u(a(n).e("action"))},[e.loading?(i(),c(a(h),{key:0,class:u(a(n).is("loading"))},{default:p(()=>[ue(a(de))]),_:1},8,["class"])):a(s)?O(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(m(e.activeActionIcon)))]),_:1})):r("v-if",!0)]):a(s)?r("v-if",!0):O(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(m(e.inactiveActionIcon)))]),_:1})):r("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(i(),v("span",{key:1,class:u(a(q))},[e.activeIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(m(e.activeIcon)))]),_:1})):r("v-if",!0),!e.activeIcon&&e.activeText?(i(),v("span",{key:1,"aria-hidden":!a(s)},E(e.activeText),9,Se)):r("v-if",!0)],2)):r("v-if",!0)],10,Ie))}});var Ee=pe(Ce,[["__file","switch.vue"]]);const Pe=me(Ee);export{Pe as E};