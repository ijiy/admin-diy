import{a as w}from"./index-BJH4a_tv.js";import{u as _,g as m,h as v}from"./echarts-4_nwUSRR.js";import{d as k,s as b,w as r,b9 as z,a6 as x,k as E,W as R,o as A,c as D,n as L}from"./@vue-Bu2ox0Ej.js";const O=k({__name:"index",setup(U,{expose:f}){const{layout:a}=w(),p=b();let e,l;const d=n=>{_([...n.uses,m]),e=v(p.value,a.isDark?"dark":void 0),n.option.backgroundColor="",e.setOption(n.option),l=n},c=()=>{e==null||e.resize()},s=()=>{c(),L(()=>{c()})};let i,t,o;const u=r(()=>a.menuCollapsEnd,()=>{i?s():o=!0});return window.app_mobile&&u(),r(()=>a.isDark,()=>{i?(e==null||e.dispose(),d(l)):t=!0}),z(()=>{!window.app_mobile&&window.addEventListener("resize",s),i=!0,t?(t=!1,o=!1,e==null||e.dispose(),d(l)):o&&(o=!1,s())}),x(()=>{!window.app_mobile&&window.removeEventListener("resize",s),i=!1}),E(()=>{!window.app_mobile&&window.addEventListener("resize",s),i=!0,t=!1,o=!1}),R(()=>{e==null||e.dispose(),e=void 0}),f({init:d}),(n,g)=>(A(),D("div",{ref_key:"ref_chart",ref:p,class:"h-full"},null,512))}});export{O as _};
