import{_ as d}from"./DiyScrollY-DtgPkuY6.js";import{_ as u}from"./index.vuevuetypescriptsetuptruelang-Hqk4nUSp.js";import{t as f,f as h}from"./element-plus-DZpOzxTO.js";import{d as x,s as v,o as b,K as V,L as l,a as s,b as o,R as a,u as g,D}from"./@vue-DQf6Dgym.js";import"./@vueuse-S2Oj7-21.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./lodash-es-ByZL8CPd.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-CrgkZgxn.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";const q={class:"scroll-better f1 flex dc"},I={class:"qp-box"},R=s("h2",{class:"qp-font-title color-title"},"虚拟缓存示例",-1),w={class:"mt-base"},B=s("li",null," 切换标签 (路由切换), 输入的内容不会重新加载, iframe的内容会重新加载 ",-1),C=s("li",{class:"mt-half"}," 右键标签刷新, 或关闭标签, 会和清除虚拟缓存 ",-1),M={class:"mt-half"},N=s("ins",{class:"ani-wave"}," DOM会被缓存; iframe内容, 多媒体信息等不会被缓存 ",-1),O=s("ul",null,[s("li",null," vue渲染系统的构建模式, 真实DOM保存在内存中的数据解构 (渲染UI的数据化) "),s("li",{class:"mt-half"}," 减少DOM堆积, 获得更佳的性能 "),s("li",{class:"mt-half"},"缓存的过程会被路由打断")],-1),k={class:"qp-box mt-base"},y={class:"qp-box mt-base f1"},G=x({name:"PageCacheLiveIndex",__name:"index",props:{src1:{}},setup(n){const c=n,t=v("");return(E,e)=>{const i=f,_=h,m=u,r=d;return b(),V(r,{class:"page-vh flex dc"},{default:l(()=>[s("div",q,[s("div",I,[R,s("ul",w,[B,C,s("li",M,[s("details",null,[s("summary",null,[o(i,null,{default:l(()=>[a("虚拟缓存")]),_:1}),a(" : "),N]),O])])])]),s("div",k,[o(_,{modelValue:g(t),"onUpdate:modelValue":e[0]||(e[0]=p=>D(t)?t.value=p:null),placeholder:"请随意输入"},null,8,["modelValue"])]),s("div",y,[o(m,{src:c.src1},null,8,["src"])])])]),_:1})}}});export{G as default};