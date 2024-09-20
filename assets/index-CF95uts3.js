import{_ as u}from"./DiyScrollY-BFeqa6Ks.js";import{y as d,f as p}from"./element-plus-DV6F2B4w.js";import{d as f,s as c,o as _,J as x,K as e,a as l,b as a,Q as t,u as v,D as V}from"./@vue-CMlG33N7.js";import"./@vueuse-BLWlpg6_.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./lodash-es-ByZL8CPd.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C3PuTle3.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";const b={class:"scroll-better f1 flex dc"},g={class:"qp-box"},h={class:"mt-base"},w={class:"mt-half"},y={class:"qp-box mt-base"},O=f({name:"PageCacheRealTest1",__name:"index",setup(B){const o=c("");return(C,s)=>{const n=d,i=p,m=u;return _(),x(m,{class:"page-vh flex dc"},{default:e(()=>[l("div",b,[l("div",g,[s[7]||(s[7]=l("h2",{class:"c-title"},"真实缓存示例1",-1)),l("ul",h,[s[5]||(s[5]=l("li",null,"切换标签, 输入的内容和iframe的内容不会重新加载",-1)),s[6]||(s[6]=l("li",{class:"mt-half"}," 右键标签刷新, 或关闭标签, 会清除真实缓存 ",-1)),l("li",w,[l("details",null,[l("summary",null,[a(n,null,{default:e(()=>s[1]||(s[1]=[t("真实缓存")])),_:1}),s[2]||(s[2]=t(" : ")),s[3]||(s[3]=l("ins",{class:"ani-wave"}," DOM, iframe内容, 多媒体信息等都会被缓存 ",-1))]),s[4]||(s[4]=l("ul",null,[l("li",null," 页面的加载不通过路由组件, 可获得急速的切换响应 "),l("li",{class:"mt-half"},[t(" 切换比虚拟缓存性能更高 (毕竟频繁切换 "),l("code",null,"v-show"),t(" 会比 "),l("code",null,"v-if"),t(" 更适合) ")]),l("li",{class:"mt-half"}," 自动将页面转成异步组件 (无障碍路由跳转) "),l("li",{class:"mt-half"},[t(" 缺点: "),l("code",null,"transition-group"),t(" 没有 "),l("code",null,'mode="out-in"'),t(" , 导致过度动画成了半吊子 ")]),l("li",{class:"mt-half"},[t(" 使用场景: 页面包含 "),l("code",null,"iframe"),t(" (如富文本编译器), 多媒体元素, 且内容为静态数据 ")]),l("li",{class:"mt-half"}," 缓存的过程不会被路由打断 ")],-1))])])])]),l("div",y,[a(i,{modelValue:v(o),"onUpdate:modelValue":s[0]||(s[0]=r=>V(o)?o.value=r:null),placeholder:"请随意输入"},null,8,["modelValue"])])])]),_:1})}}});export{O as default};