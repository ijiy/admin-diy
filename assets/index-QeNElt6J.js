import{y as d,i as u}from"./element-plus-DV6F2B4w.js";import{m as _}from"./plugMitt-D2DZ23I9.js";import{d as f,s as c,a2 as b,ai as v,o as x,c as y,a as o,Q as e,b as i,K as a,R as g,u as k}from"./@vue-CMlG33N7.js";import"./lodash-es-ByZL8CPd.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BLWlpg6_.js";import"./@element-plus-C3PuTle3.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./mitt-DJ65BbbF.js";const B={class:"h-base"},E={class:"qp-box h-base"},N={class:"h-base"},V={class:"c-title"},C={class:"qp-box h-base"},S=f({name:"NMittParent",__name:"index",setup(P){let s;const n=c("");return _.on("mitt_parent_update",l=>{s=l}),b(()=>{s&&(n.value=s,s="")}),(l,t)=>{const r=d,m=u,p=v("router-link");return x(),y("div",B,[o("div",E,[o("ul",N,[o("li",null,[o("h2",V,[t[1]||(t[1]=e(" 插件: ")),i(r,{type:"success"},{default:a(()=>t[0]||(t[0]=[e("mitt")])),_:1})])]),t[2]||(t[2]=o("li",null," 作用: 事件总线, 适合于跨页面, 向上层(多层)页面或同级页面间通知事件 ",-1)),t[3]||(t[3]=o("li",null,"更适合于通知更新页面数据",-1)),t[4]||(t[4]=o("li",null,"注意: 若用于数据传递, 则要确保接收事件的页面已挂载",-1))])]),o("div",C,[e(" 子页面输入内容: "+g(k(n))+" ",1),o("div",null,[i(p,{to:"/diyUtils/mitt/childPage"},{default:a(()=>[i(m,{type:"primary"},{default:a(()=>t[5]||(t[5]=[e(" 子页面 ")])),_:1})]),_:1})])])])}}});export{S as default};