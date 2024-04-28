import{a as T}from"./index-4vTwd3nK.js";import{u as D,i as U,a as q,b as G,c as E,d as $,e as N,f as P,g as V}from"./echarts-BU9SmZex.js";import{d as u,s as v,w as b,ba as j,a7 as I,k as g,X as K,o as x,c as z,n as L,K as R,a as f,b as w,u as k}from"./@vue-BFtwODxB.js";import{j as M}from"./@vueuse-DQwSfm13.js";import"./element-plus-7Vlk8dbZ.js";import"./lodash-es-ByZL8CPd.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-DHzED8UM.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-BdGwRZaI.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-i18n-v7gGpLht.js";import"./@intlify-7FzvKZLA.js";import"./vue-h5XNpCLg.js";import"./vue-router-BtlUgo1z.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./zrender-CxaDnYDJ.js";import"./tslib-BDyQ-Jie.js";const A=u({__name:"index",setup(y,{expose:r}){const{layout:t}=T(),d=v();let e,n;const s=p=>{D([...p.uses,U]),e=q(d.value,t.isDark?"dark":void 0),p.option.backgroundColor="",e.setOption(p.option),n=p},l=()=>{e==null||e.resize()},a=()=>{l(),L(()=>{l()})};let i,o,c;const m=b(()=>t.menuCollapsEnd,()=>{i?a():c=!0});return window.app_mobile&&m(),b(()=>t.isDark,()=>{i?(e==null||e.dispose(),s(n)):o=!0}),j(()=>{!window.app_mobile&&window.addEventListener("resize",a),i=!0,o?(o=!1,c=!1,e==null||e.dispose(),s(n)):c&&(c=!1,a())}),I(()=>{!window.app_mobile&&window.removeEventListener("resize",a),i=!1}),g(()=>{!window.app_mobile&&window.addEventListener("resize",a),i=!0,o=!1,c=!1}),K(()=>{e==null||e.dispose(),e=void 0}),r({init:s}),(p,_)=>(x(),z("div",{ref_key:"ref_chart",ref:d,class:"h100"},null,512))}}),O=u({__name:"ReLine",setup(y,{expose:r}){const t=v();return r({init:e=>{var a,i;const n=[],s=[G,E,$];e.list.forEach(o=>{n.push({name:o.name,type:"line",data:o.y})});const l={tooltip:{trigger:"axis",extraCssText:"z-index: 1"},grid:{left:"16",right:"16",bottom:"16",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:(a=e.list[0])==null?void 0:a.x},yAxis:{type:"value"},series:n};e.legend&&(l.legend={data:e.list.map(o=>o.name),top:"10"},s.push(e.legend)),(i=t.value)==null||i.init({uses:s,option:l})}}),(e,n)=>{const s=A;return x(),R(s,{ref_key:"ref_re_chart",ref:t},null,512)}}}),X=u({__name:"ReBar",setup(y,{expose:r}){const t=v();return r({init:e=>{var c,m,p;const n=[],s=[["product",...e.list.map(_=>_.name)]],l=[N,E,$,P];e.list.forEach(()=>{n.push({type:"bar",barGap:0})});const a=[];let i;(c=e.list[0])==null||c.x.forEach((_,h)=>{i=[],e.list.forEach(B=>{i.push(B.y[h])}),a.push(i)}),(m=e.list[0])==null||m.x.forEach((_,h)=>{s.push([_,...a[h]])});const o={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},extraCssText:"z-index: 1"},grid:{left:"16",right:"16",bottom:"16",containLabel:!0},xAxis:{type:"category"},yAxis:{},series:n,dataset:{source:s}};e.legend&&(o.legend={data:e.list.map(_=>_.name),top:"10"},l.push(e.legend)),(p=t.value)==null||p.init({uses:l,option:o})}}),(e,n)=>{const s=A;return x(),R(s,{ref_key:"ref_re_chart",ref:t},null,512)}}}),F={class:"grid-col-2 mt-base"},H={class:"qp-box"},J={class:"ar-con"},Q={class:"qp-box"},S={class:"ar-con"},xe=u({__name:"ChartList",setup(y){const r=M();return g(()=>{L(()=>{r.value.forEach(t=>{t.init({list:[{name:"语文",x:["高一","高二","高三"],y:[90,110,110]},{name:"数学",x:["高一","高二","高三"],y:[60,90,80]},{name:"英语",x:["高一","高二","高三"],y:[150,120,140]}],legend:V})})})}),(t,d)=>(x(),z("div",F,[f("div",H,[f("div",J,[w(O,{ref:k(r).set,class:"ar-item"},null,512)])]),f("div",Q,[f("div",S,[w(X,{ref:k(r).set,class:"ar-item"},null,512)])])]))}});export{xe as default};
