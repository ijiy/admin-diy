import{t as m,f as h}from"./element-plus-rtZK4mjR.js";import{d as _,al as v,s as p,k as x,W as b,o as f,J as w,K as R,a as e,M as k,R as T,u as i,c as V,b as l,D as B}from"./@vue-Bu2ox0Ej.js";import{_ as C}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./lodash-es-CbX0-HeL.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BI9iYFro.js";import"./@element-plus-BaPZHkdt.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";const D=_({__name:"index",props:{content:{},class:{}},setup(r){const o=r,n=v({desc:"",show:!1}),a=p();let t,c,s;const d=new ResizeObserver(()=>{n.desc=t.innerText,n.show=t.offsetWidth>c.offsetWidth,n.show?(s=new MutationObserver(()=>{n.desc=t.innerText}),s.observe(t,{characterData:!0,childList:!0,subtree:!0})):s&&(s.disconnect(),s=void 0)});return x(()=>{t=a.value.children[0],c=a.value.parentNode,d.observe(a.value)}),b(()=>{d.disconnect(),s&&s.disconnect()}),(U,J)=>{const u=m;return f(),w(u,{placement:"top",content:i(n).desc,disabled:!i(n).show},{default:R(()=>[e("div",{class:k(["flex f1 o-h",o.class])},[e("div",{ref_key:"ref_tip",ref:a,class:"qv-tip o-h"},[e("span",null,T(o.content),1)],512)],2)]),_:1},8,["content","disabled"])}}}),M=C(D,[["__scopeId","data-v-0f0f11ff"]]),g={class:"qp-box"},q=e("h2",{class:"qp-font-title color-title"}," 单行文字自动超出省略并悬浮提示 ",-1),y={class:"grid-col-4"},z={class:"mt-base"},E={class:"flex"},N={class:"w-0 f1"},W={class:"flex mt-half"},A={class:"w-0 f1"},I={class:"flex ac mt-half"},O={class:"mr-base"},S={class:"w-0 f1"},X=_({name:"CompAutoTip",__name:"index",setup(r){const o=p("继续输入内容");return(n,a)=>{const t=M,c=h;return f(),V("div",null,[e("div",g,[q,e("div",y,[e("ul",z,[e("li",E,[e("div",N,[l(t,{content:"很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长"})])]),e("li",W,[e("div",A,[l(t,{content:"可打开控制台, 编辑当前文字, 并添加更多内容"})])]),e("li",I,[e("div",O,[l(c,{modelValue:i(o),"onUpdate:modelValue":a[0]||(a[0]=s=>B(o)?o.value=s:null),placeholder:"请随意输入"},null,8,["modelValue"])]),e("div",S,[l(t,{content:i(o)},null,8,["content"])])])])])])])}}});export{X as default};