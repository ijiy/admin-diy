import{_ as n}from"./DiyChartBar.vuevuetypescriptsetuptruelang-CWCtr3jX.js";import{j as p}from"./@vueuse-BLWlpg6_.js";import{g as l}from"./echarts-oQUfPj2h.js";import{d as c,k as d,n as f,o as h,c as _,a as i,b as u,u as x}from"./@vue-CMlG33N7.js";import"./index.vuevuetypescriptsetuptruelang-BBs5ol2x.js";import"./index-C1p1eSpR.js";import"./element-plus-DV6F2B4w.js";import"./lodash-es-ByZL8CPd.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C3PuTle3.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-BrgXCphJ.js";import"./vue-demi-Dq6ymT-8.js";import"./@codemirror-D1iYbWyp.js";import"./@lezer-g9ZlY1HQ.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./vue-router-VFlIWpXA.js";import"./vue-i18n-BfQ-3HNT.js";import"./@intlify-DA-PR7LD.js";import"./vue-BI8I7hOi.js";import"./pinia-plugin-persistedstate-DEhZ7rAI.js";import"./destr-CVtkxrq9.js";import"./deep-pick-omit-DyxInw53.js";import"./zrender-DdJIivgC.js";import"./tslib-BDyQ-Jie.js";const b={class:"grid-base-2 mt-base"},g={class:"qp-box"},D={class:"ar-con"},a=9,Q=c({__name:"ChartList",setup(w){const e=p(),s=["#43E9CB","#6CC6DA","#6E86F8","#ADD244","#CC4FE7","#D471DD","#DA5D7B"],o=["较长字1很长很长","较长字2很长很长","较长字3很长很长","较长字4很长很长","较长字5很长很长","较长字6很长很长","较长字7很长很长","较长字8很长很长","较长字9很长很长","较长字10很长很长","较长字11很长很长","较长字12很长很长","较长字13很长很长","较长字14很长很长","较长字15很长很长","较长字16很长很长","较长字17很长很长","较长字18很长很长","较长字19很长很长","较长字20很长很长","较长字16很长很长","较长字17很长很长","较长字18很长很长","较长字19很长很长","较长字20很长很长"],r=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,160,170,180,190,200],m=100*a/o.length;return d(()=>{f(()=>{e.value[0].init({list:[{name:"a1",x:o,y:r}],grid:{top:50,left:50,right:50,bottom:40},yAxis:{name:"纵轴",fontSize:14},xAxis:{name:"横轴",splitLine:{show:!1},axisTick:{show:!1},axisLabel:{fontSize:12,formatter:t=>`${t.slice(0,5)}${t.length>5?"...":""}`}},series:{label:{show:!0,position:"top",formatter:t=>`${t.value[1+t.seriesIndex]}人`,fontSize:12},itemStyle:{borderRadius:[50,50,0,0],color:t=>s[t.dataIndex%s.length]},barWidth:30},dataZoom:[{show:o.length>a,type:"slider",height:20,bottom:0,left:50,right:50,end:m,handleSize:0,showDetail:!1,showDataShadow:!1,brushSelect:!1,zoomLock:!0},{type:"inside"}],zoom:l})})}),(t,C)=>(h(),_("div",b,[i("div",g,[i("div",D,[u(n,{ref:x(e).set,class:"ar-item"},null,512)])])]))}});export{Q as default};
