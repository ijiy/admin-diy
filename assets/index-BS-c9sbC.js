const __vite__fileDeps=["assets/RightMouse-_FqutKF8.js","assets/element-plus-DZpOzxTO.js","assets/@vue-DQf6Dgym.js","assets/lodash-es-ByZL8CPd.js","assets/async-validator-DKvM95Vc.js","assets/@vueuse-S2Oj7-21.js","assets/@element-plus-CrgkZgxn.js","assets/@ctrl-r5W6hzzQ.js","assets/@sxzz-D9SI2xQl.js","assets/normalize-wheel-es-B6fDCfyv.js","assets/element-plus-Dk5dSYq4.css","assets/plugin-vueexport-helper-DlAUqK2U.js","assets/RightMouse-CTrGnLol.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as Ae}from"./DiyScrollY-DtgPkuY6.js";import{d as M,o as s,K as y,L as m,a as x,H as Ne,B as We,c as b,b as _,u as e,a0 as be,T as P,ag as G,R as E,S as z,O as D,aL as ke,bp as j,ai as ye,Q as L,a2 as Re,bz as Ce,i as he,s as X,M as J,U as Y,aN as Se,n as V,P as ee,$ as Ke,w as Ue,Y as Xe,ae as Je,G as fe,V as Ye,aw as Ge}from"./@vue-DQf6Dgym.js";import{k as Qe,l as Ze,m as et,n as se,i as tt,o as nt,p as qe,q as $e,r as ue}from"./element-plus-DZpOzxTO.js";import{a as Te,_ as st}from"./index.vuevuetypescriptsetuptruelang-B_20kc3d.js";import{a as I,b as H,r as te,u as at,p as le,_ as ot,o as Z}from"./index-EVsRHSRY.js";import{u as N,o as W}from"./vue-router-bLDuaHV0.js";import{_ as B}from"./plugin-vueexport-helper-DlAUqK2U.js";import{_ as lt}from"./close-DlkrisXR.js";import{h as ce}from"./@vueuse-S2Oj7-21.js";import{_ as ct,a as it}from"./index-BYDppfzE.js";import"./lodash-es-ByZL8CPd.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-CrgkZgxn.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-CZ7Iq55q.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-i18n-Bt75MjS7.js";import"./@intlify-7FzvKZLA.js";import"./vue-s9CpXkFM.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";const rt={class:"scroll-better no-width h100"},ut={class:"flex ac h100"},_t=x("i",{class:"scroll-start"},null,-1),dt=x("i",{class:"scroll-end"},null,-1),_e=M({__name:"DiyScrollX",emits:["onReady"],setup(f,{emit:t}){const i=t,v=h=>{i("onReady",h)};return(h,l)=>{const o=Ae;return s(),y(o,{class:"scroll-inline h100 w100",inline:"",onOnReady:v},{default:m(()=>[x("div",rt,[x("div",ut,[_t,Ne(h.$slots,"default"),dt])])]),_:3})}}}),pt=M({__name:"LayoutCrumb",setup(f){const{layout:t}=I(),{navMenu:i}=H(),v=N(),h=(r,a)=>{var p;let u;for(let n=0;n<a.length;n++){if(a[n].path===r)return a[n];if((p=a[n].children)!=null&&p.length&&(u=h(r,a[n].children),u))return u}};let l,o;const d=We(()=>(l=v.matched.slice(1).map(r=>({title:r.meta.title,path:r.meta.params?`${r.path.split(":")[0]}${r.meta.params.split("&").map(a=>a.split("=")[1]).join("/")}`:r.path})),o=h(l[0].path,i.listRoute),o&&o.meta.parents.length&&o.meta.parents.forEach(r=>{l.unshift({title:r})}),l));return(r,a)=>{const u=Te,p=Qe,n=Ze,k=_e;return s(),b("div",{class:D(["qv-crumb flex",{"is-header":e(t).isHeader}])},[x("div",{class:"color-base cp flex ac h100 pd-inline",onClick:a[0]||(a[0]=(...c)=>e(te).back&&e(te).back(...c))},[_(u)]),_(k,{class:"f1"},{default:m(()=>[_(n,{class:"h100 flex ac pd-inline"},{default:m(()=>[_(be,{name:"ani-crumb"},{default:m(()=>[(s(!0),b(P,null,G(e(d),(c,C)=>(s(),y(p,{key:C,to:C<e(d).length-1?c.path:""},{default:m(()=>[E(z(r.$t(c.title)),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})],2)}}}),mt=B(pt,[["__scopeId","data-v-db3c978a"]]),Ee=Symbol("inject_tab_refresh"),ze=Symbol("inject_tab_close"),Ie=Symbol("inject_tab_clear"),ht=8;let ve,O,ie;const Pe=(f,t,i)=>{O+=ve,ve*(O-t)<0?ie=requestAnimationFrame(()=>{Pe(f,t,i)}):(O=t,ie=void 0),f.scroll({[i]:O})};let Q;const re=(f,t,i)=>{Q={direction:"top",animation:!0,...i},O=f[Q.direction==="top"?"scrollTop":"scrollLeft"],O>t&&t<0&&(t=0),Q.animation?(ve=(t-O)/ht,ie&&cancelAnimationFrame(ie),Pe(f,t,Q.direction)):f.scroll({[Q.direction]:t})},ft={class:"icon-base",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},vt=ke('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M10 14L3.5 20.5M14 10L20.5 3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3H15M3 21V15M21 3V9M3 21H9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"></animate></path></g>',1),bt=[vt];function kt(f,t){return s(),b("svg",ft,[...bt])}const yt={name:"line-md-arrows-diagonal",render:kt},Ct="/admin-diy/assets/avatar-z1t48fqC.png",$t={class:"flex fn"},xt={class:"flex dc ac"},gt={key:0,class:"flex ac"},Lt=M({__name:"Tool",props:{atAside:{type:Boolean}},setup(f){const t=f,{layout:i}=I(),{userInfo:v,setLogout:h}=at(),l=j({showPop:!1});let o;const d=window.document,r=()=>{o=[...d.querySelectorAll(".qp-main")].filter(u=>u.style.display!=="none")[0],o.webkitRequestFullScreen?o.webkitRequestFullScreen():o.mozRequestFullScreen?o.mozRequestFullScreen():o.msRequestFullscreen&&o.msRequestFullscreen()},a=()=>{d.webkitExitFullscreen?d.webkitExitFullscreen():d.mozCancelFullScreen?d.mozCancelFullScreen():d.msExitFullscreen&&d.msExitFullscreen(),o=null};return ce(document,"click",()=>{l.showPop=!1}),W(()=>{o&&a()}),(u,p)=>{const n=ct,k=it,c=yt,C=st,S=et,A=se,T=tt,q=ye("router-link"),w=nt;return s(),b("div",$t,[e(i).isMdScreen?L("",!0):(s(),b("div",{key:0,class:D(["flex ac",[t.atAside?"mb-base":"mr-base",{"qv-min dc jc":t.atAside&&e(i).menuCollapse}]])},[_(n),_(k,{class:"ml-base"}),_(C,{class:"ani-light cp ml-base",onClick:r},{default:m(()=>[_(c)]),_:1})],2)),_(w,{visible:e(l).showPop,"hide-after":0},{reference:m(()=>[x("div",{class:"flex ac",onClick:p[0]||(p[0]=Re(R=>e(l).showPop=!0,["stop"]))},[_(S,{src:e(Ct),class:"mr-half fn",size:e(i).size,alt:"your head"},null,8,["src","size"]),e(i).isMdScreen?L("",!0):(s(),y(A,{key:0,truncated:"",class:"qp-max-name"},{default:m(()=>[E(z(e(v).nickname),1)]),_:1}))])]),default:m(()=>[x("div",xt,[e(i).isMdScreen?(s(),b("div",gt,[_(n),_(k,{class:"ml-base"})])):L("",!0),_(q,{class:"w100",to:"/userInfo"},{default:m(()=>[_(T,{class:"w100",type:"primary"},{default:m(()=>[E(z(u.$t("个人中心")),1)]),_:1})]),_:1}),_(T,{class:"w100 mt-half",type:"danger",onClick:p[1]||(p[1]=R=>e(h)(!0))},{default:m(()=>[E(z(u.$t("注销")),1)]),_:1})])]),_:1},8,["visible"])])}}}),xe=B(Lt,[["__scopeId","data-v-53f783cc"]]),wt={class:"qv-tab flex stick-top zi-1"},Mt=["data-index","onClick"],At=M({__name:"LayoutTab",setup(f){Ce($=>({"68d759b2":e(r)("menuBackground"),"34f1310d":e(r)("menuColor"),"153f10e7":e(r)("menuActiveColor"),a5455bd0:e(r)("menuActiveBackground"),"2c2923b4":e(r)("menuHoverBackground")}));const t=Se(()=>ot(()=>import("./RightMouse-_FqutKF8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),i=he(Ee,()=>{}),v=he(ze,()=>{}),h=he(Ie,()=>{}),l=N(),{layout:o,menuWidthFold:d,getConfigColor:r}=I(),{closeTabRoutes:a,setActiveTabRoute:u,setTabListRoute:p,addTabRoutes:n,getNavTabRoute:k}=H(),{navTab:c,navMenu:C}=H(),S=X(),A=j([{name:"refresh",label:"重新加载"},{name:"close",label:"关闭标签"},{name:"closeOther",label:"关闭其他标签"},{name:"closeAll",label:"关闭全部标签"}]),T=$=>{const g=c.listRoute.map(U=>U.path).indexOf($.path);a($),v($.name),c.activeRoute.path===$.path&&le(c.listRoute.length?c.listRoute[g===c.listRoute.length?g-1:g].path:"/")},q=$=>{c.activeRoute.path!==$.path&&le($.path),p([$]),u($),h($.name)},w=$=>{C.firstRoute.path===$.path?q($):(le(C.firstRoute.path),p([C.firstRoute]),h(C.firstRoute.name))};let R;const de=$=>{switch($){case"refresh":i(R.name);break;case"close":T(R);break;case"closeOther":q(R);break;case"closeAll":w(R);break}},Le=$=>{R=k($),n(R),u(R)};let K,ae,oe,pe,me;const we=()=>{oe=K.querySelector(".is-active"),oe&&(ae=oe.offsetLeft,pe=ae-K.scrollLeft,pe<0?re(K,ae,{direction:"left"}):(me=K.clientWidth-oe.getBoundingClientRect().width,pe>me&&re(K,ae-me,{direction:"left"})))},Me=window.app_mobile,Fe=$=>{K=$,we(),Me||(ce($,"contextmenu",g=>{var U;g.preventDefault(),g.target&&g.target.getAttribute("data-index")&&(R=c.listRoute[Number(g.target.getAttribute("data-index"))],A[0].disabled=l.path!==R.path,A[1].disabled=c.listRoute.length===1&&R.path===C.firstRoute.path,A[2].disabled=c.listRoute.length===1,A[3].disabled=c.listRoute.length===1,(U=S.value)==null||U.showContextmenu(g.clientX-(o.isMdScreen?0:o.menuCollapse?d:o.menuWidthOpen)))}),ce(window,"keydown",g=>{g.altKey&&!g.ctrlKey&&!g.shiftKey&&g.key==="w"&&(c.listRoute.length>1||c.activeRoute.path!==C.firstRoute.path)&&T(c.activeRoute)}))};return W(async $=>{Le($),await V(),we()}),Le(l),($,g)=>{const U=Te,Ve=lt,Oe=_e;return s(),b("div",wt,[e(o).isCrumb?L("",!0):(s(),b("div",{key:0,class:"color-base cp flex ac h100 pd-inline",onClick:g[0]||(g[0]=(...F)=>e(te).back&&e(te).back(...F))},[_(U)])),_(Oe,{class:"qv-scroll f1",onOnReady:Fe},{default:m(()=>[_(be,{name:"el-list"},{default:m(()=>[(s(!0),b(P,null,G(e(c).listRoute,(F,De)=>(s(),b("div",{key:F.path,class:D(["qv-item no-select pd-inline flex ac jc fn h100 cp pr",{"is-mobile":e(Me),"is-active":e(c).activeRoute.path===F.path}]),"data-index":De,onClick:je=>e(le)(F.path)},[E(z($.$t(F.meta.title))+" ",1),J(_(Ve,{class:"qv-close color-text flex ac jc",onClick:Re(je=>T(F),["stop"])},null,8,["onClick"]),[[Y,e(c).listRoute.length>1||e(c).activeRoute.path!==e(C).firstRoute.path]])],10,Mt))),128))]),_:1})]),_:1}),e(o).toolAt==="top"&&(!e(o).isHeader||e(o).layoutMode==="MenuAtSide")?(s(),y(xe,{key:1,class:"pd-inline"})):L("",!0),_(e(t),{ref_key:"ref_right_mouse",ref:S,list:e(A),onEmitClickItem:de},null,8,["list"])])}}}),Rt=B(At,[["__scopeId","data-v-ebb8df3a"]]),St="/admin-diy/assets/logo-DCZDIjBD.png",qt=["alt"],Tt=M({__name:"Logo",setup(f){const{layout:t}=I(),i="Admin Diy";return(v,h)=>{const l=se;return s(),b("div",{class:D(["no-width f1 linear-text flex ac",{"qv-hide":e(t).menuCollapse}])},[x("img",{class:"icon-base mr-half",src:St,alt:e(i)},null,8,qt),_(l,{truncated:"",title:e(i),class:"qp-font-title"},{default:m(()=>[E(z(e(i)),1)]),_:1},8,["title"])],2)}}}),Be=B(Tt,[["__scopeId","data-v-a0c0154d"]]),Et={class:"icon-base",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},zt=x("path",{fill:"currentColor",d:"M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"},null,-1),It=[zt];function Pt(f,t){return s(),b("svg",Et,[...It])}const Bt={name:"ep-menu",render:Pt},Ht={class:"icon-base",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Ft=x("path",{fill:"currentColor",d:"M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357 357 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a352 352 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357 357 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294 294 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293 293 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294 294 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288 288 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293 293 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a288 288 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256"},null,-1),Vt=[Ft];function Ot(f,t){return s(),b("svg",Ht,[...Vt])}const Dt={name:"ep-setting",render:Ot},jt={class:"icon-base",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Nt=x("path",{fill:"currentColor",d:"M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.13 384.13 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512A448.13 448.13 0 0 1 448 68.48"},null,-1),Wt=x("path",{fill:"currentColor",d:"M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28M512 64V33.152A448 448 0 0 1 990.848 512H512z"},null,-1),Kt=[Nt,Wt];function Ut(f,t){return s(),b("svg",jt,[...Kt])}const Xt={name:"ep-pie-chart",render:Ut},Jt={class:"icon-base",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Yt=x("path",{fill:"currentColor",d:"M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96"},null,-1),Gt=x("path",{fill:"currentColor",d:"M384 416a64 64 0 1 0 0-128a64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256a128 128 0 0 1 0 256"},null,-1),Qt=x("path",{fill:"currentColor",d:"M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32m160 416a64 64 0 1 0 0-128a64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256a128 128 0 0 1 0 256"},null,-1),Zt=x("path",{fill:"currentColor",d:"M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32"},null,-1),en=[Yt,Gt,Qt,Zt];function tn(f,t){return s(),b("svg",Jt,[...en])}const nn={name:"ep-set-up",render:tn},sn={class:"icon-base",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},an=x("path",{fill:"currentColor",d:"M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144l45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744z"},null,-1),on=[an];function ln(f,t){return s(),b("svg",sn,[...on])}const cn={name:"ep-paperclip",render:ln},rn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},un=x("filter",{id:"a"},[x("feTurbulence",{baseFrequency:".02"})],-1),_n=x("rect",{width:"100%",height:"100%",filter:"url(#a)"},null,-1),dn=[un,_n];function pn(f,t){return s(),b("svg",rn,[...dn])}const mn={render:pn},hn=["title"],ne=M({__name:"MenuIcon",props:{name:{}},setup(f){const t=f,i=X({LSnoise:mn,IEpMenu:Bt,IEpSetting:Dt,IEpPieChart:Xt,IEpSetUp:nn,IEpPaperclip:cn});return(v,h)=>(s(),b("div",{class:"icon-base flex",title:t.name},[(s(),y(ee(e(i)[t.name||"IEpPaperclip"])))],8,hn))}}),ge=M({__name:"MenuTree",props:{menus:{default:()=>[]}},setup(f){const t=f;return(i,v)=>{const h=se,l=ye("MenuTree",!0),o=qe,d=$e;return s(!0),b(P,null,G(t.menus,r=>{var a;return s(),b(P,{key:r.path},[(a=r.children)!=null&&a.length?(s(),y(o,{key:0,index:r.path},{title:m(()=>[_(ne,{name:r.meta.icon},null,8,["name"]),_(h,null,{default:m(()=>[E(z(i.$t(r.meta.title)),1)]),_:2},1024)]),default:m(()=>[_(l,{menus:r.children},null,8,["menus"])]),_:2},1032,["index"])):(s(),y(d,{key:1,index:r.path,onClick:u=>e(Z)(r)},{title:m(()=>[_(h,null,{default:m(()=>[E(z(i.$t(r.meta.title)),1)]),_:2},1024)]),default:m(()=>[_(ne,{name:r.meta.icon},null,8,["name"])]),_:2},1032,["index","onClick"]))],64)}),128)}}}),fn=M({__name:"MenuAtTop",setup(f){const{layout:t,menuWidthMin:i}=I(),{navMenu:v}=H(),h=N(),l=j({activePath:h.path}),o=d=>{l.activePath=d.path};return W(d=>{o(d)}),(d,r)=>{const a=se,u=qe,p=$e,n=ue,k=_e;return s(),b(P,null,[e(t).isLogo&&(e(t).layoutMode!=="MenuAtTop"||!e(t).isMdScreen)?(s(),y(Be,{key:0,style:Ke(`width: ${e(i)}px;`)},null,8,["style"])):L("",!0),_(k,null,{default:m(()=>[_(n,{class:"qp-menu h100",mode:"horizontal","default-active":e(l).activePath,ellipsis:!1,"collapse-transition":!1},{default:m(()=>[(s(!0),b(P,null,G(e(v).listRoute,c=>{var C;return s(),b(P,{key:c.name},[(C=c.children)!=null&&C.length?(s(),y(u,{key:0,index:c.path},{title:m(()=>[_(ne,{name:c.meta.icon},null,8,["name"]),_(a,null,{default:m(()=>[E(z(d.$t(c.meta.title)),1)]),_:2},1024)]),default:m(()=>[_(ge,{menus:c.children},null,8,["menus"])]),_:2},1032,["index"])):(s(),y(p,{key:1,index:c.path,onClick:S=>e(Z)(c)},{default:m(()=>[_(ne,{name:c.meta.icon},null,8,["name"]),_(a,null,{default:m(()=>[E(z(d.$t(c.meta.title)),1)]),_:2},1024)]),_:2},1032,["index","onClick"]))],64)}),128))]),_:1},8,["default-active"])]),_:1})],64)}}}),vn=M({__name:"MenuAtPart",setup(f){const t=N(),{navMenu:i}=H(),v=j({activePath:""}),h=a=>{var p;let u;for(let n=0;n<a.length;n++){if(a[n].meta.navPage&&!a[n].meta.pageLink)return a[n];if((p=a[n].children)!=null&&p.length&&(u=h(a[n].children),u))return u}},l=Object.create(null),o=a=>{var u;l[a.path]?Z(l[a.path]):(u=a.children)!=null&&u.length?Z(h(a.children)||a):Z(a)},d=(a,u,p)=>{var n;for(let k=0;k<u.length;k++){if(u[k].path===a)return a;if((n=u[k].children)!=null&&n.length&&(p=k,d(a,u[k].children,p)))return u[p].path}return""},r=a=>{v.activePath=d(a.path,i.listRoute),l[v.activePath]=a.path};return W(a=>{r(a)}),r(t),(a,u)=>{const p=se,n=$e,k=ue,c=_e;return s(),y(c,null,{default:m(()=>[_(k,{class:"qp-menu h100",mode:"horizontal","default-active":e(v).activePath,ellipsis:!1,"collapse-transition":!1},{default:m(()=>[(s(!0),b(P,null,G(e(i).listRoute,C=>(s(),y(n,{key:C.path,index:C.path,onClick:S=>o(C)},{default:m(()=>[_(ne,{name:C.meta.icon},null,8,["name"]),_(p,null,{default:m(()=>[E(z(a.$t(C.meta.title)),1)]),_:2},1024)]),_:2},1032,["index","onClick"]))),128))]),_:1},8,["default-active"])]),_:1})}}}),bn=B(vn,[["__scopeId","data-v-5ab64689"]]),kn={class:"flex ac jb fn stick-top zi-1"},yn=M({__name:"LayoutHeader",setup(f){const{layout:t}=I(),i=X({MenuAtTop:fn,MenuAtPart:bn});return(v,h)=>(s(),b("header",kn,[(s(),y(ee(e(i)[e(t).layoutMode]),{key:e(t).layoutMode})),e(t).toolAt==="top"||e(t).layoutMode==="MenuAtTop"?(s(),y(xe,{key:0,class:"pd-inline"})):L("",!0)]))}}),Cn=B(yn,[["__scopeId","data-v-0e9342be"]]),$n={class:"icon-base",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},xn=ke('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M7 9L4 12L7 15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M19 12H10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path></g>',1),gn=[xn];function Ln(f,t){return s(),b("svg",$n,[...gn])}const wn={name:"line-md-menu-fold-left",render:Ln},Mn={class:"icon-base",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},An=ke('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M17 9L20 12L17 15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M5 5H19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M5 12H14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M5 19H19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path></g>',1),Rn=[An];function Sn(f,t){return s(),b("svg",Mn,[...Rn])}const qn={name:"line-md-menu-fold-right",render:Sn},Tn=M({__name:"AsideCollapse",setup(f){Ce(l=>({60881971:e(v)+"px"}));const{updateLayout:t,layout:i,menuWidthFold:v}=I(),h=()=>{t("menuCollapse",!i.menuCollapse)};return(l,o)=>{const d=qn,r=wn;return s(),b("div",{class:D(["collapse-btn color-base cp flex ac jc",{"qv-hide":e(i).menuCollapse}]),onClick:h},[J(_(d,null,null,512),[[Y,e(i).menuCollapse]]),J(_(r,null,null,512),[[Y,!e(i).menuCollapse]])],2)}}}),He=B(Tn,[["__scopeId","data-v-6f60e463"]]),En=M({__name:"MenuAtSide",setup(f){const{layout:t}=I(),{navMenu:i}=H(),v=N(),h=j({activePath:v.path});return W(l=>{h.activePath=l.path}),(l,o)=>{const d=ue;return s(),y(d,{class:"qp-menu","unique-opened":e(t).menuUniqueOpened,"default-active":e(h).activePath,collapse:e(t).isMdScreen?!1:e(t).menuCollapse,"collapse-transition":!1},{default:m(()=>[_(ge,{menus:e(i).listRoute},null,8,["menus"])]),_:1},8,["unique-opened","default-active","collapse"])}}}),zn=M({__name:"MenuAtPart",setup(f){const t=N(),{navMenu:i,getNavMenuRoute:v}=H(),{layout:h}=I(),l=j({activePath:t.path,activeChildren:[]}),o=(a,u)=>{var p;for(let n=0;n<u.length;n++)if(u[n].path===a||(p=u[n].children)!=null&&p.length&&o(a,u[n].children))return u[n]};let d;const r=a=>{var u;d=o(a.path,i.listRoute),l.activeChildren=d?(u=d.children)!=null&&u.length?d.children:[d]:[v(a)]};return W(a=>{l.activePath=a.path,r(a)}),r(t),(a,u)=>{const p=ue;return s(),y(p,{class:"qp-menu","unique-opened":e(h).menuUniqueOpened,"default-active":e(l).activePath,collapse:e(h).menuCollapse,"collapse-transition":!1},{default:m(()=>{var n;return[(n=e(l).activeChildren)!=null&&n.length?(s(),y(ge,{key:0,menus:e(l).activeChildren},null,8,["menus"])):L("",!0)]}),_:1},8,["unique-opened","default-active","collapse"])}}}),In={class:"qv-top flex ac jb"},Pn=M({__name:"LayoutAside",setup(f){Ce(w=>({"29f9be56":e(a),"74f068c8":e(v)("menuBackground"),"7eb1a6fc":e(v)("menuActiveBackground"),"57246efd":e(t).menuWidthOpen+"px"}));const{layout:t,menuWidthFold:i,getConfigColor:v,updateLayout:h}=I(),l=X(),o=X({MenuAtSide:En,MenuAtPart:zn}),d=document.body,r=w=>(t.isMdScreen&&(w?d.classList.remove("oh"):d.classList.add("oh")),`${w?i:t.menuWidthOpen}px`),a=X(r(t.menuCollapse));Ue(()=>t.menuCollapse,w=>{a.value=r(w)});const u=()=>{h("menuCollapse",!0),d.classList.remove("oh")};let p,n,k,c,C,S,A;const T=()=>{A&&clearTimeout(A),A=setTimeout(()=>{A=void 0,k=p.querySelector(".el-menu-item.is-active"),k&&(C=k.getBoundingClientRect(),c=C.top-p.offsetTop,n=c+p.scrollTop,c<0?re(p,n,{animation:!t.isMdScreen}):(S=p.clientHeight-C.height,c>S&&re(p,n-S,{animation:!t.isMdScreen})))},400)},q=w=>{p=w,T()};return!window.app_mobile&&ce(l.value,"transitionend",w=>{w.target===w.currentTarget&&h("menuCollapsEnd",!t.menuCollapsEnd)}),W(()=>{T()}),(w,R)=>{const de=Ae;return s(),b(P,null,[x("aside",{ref_key:"ref_aside",ref:l,class:D(["v100 flex dc fn",{"md-screen":e(t).isMdScreen,"is-show":e(t).isMdScreen&&!e(t).menuCollapse}])},[x("div",In,[e(t).isLogo?(s(),y(Be,{key:0})):L("",!0),e(t).isMdScreen?L("",!0):(s(),y(He,{key:1}))]),_(de,{class:"f1",onOnReady:q},{default:m(()=>[(s(),y(ee(e(o)[e(t).layoutMode]),{key:e(t).layoutMode,class:"scroll-better"}))]),_:1}),e(t).toolAt!=="top"?(s(),y(xe,{key:0,class:D(["dc pd-base at-aside",{"hide-tool":e(t).menuCollapse}]),atAside:""},null,8,["class"])):L("",!0)],2),e(t).isMdScreen?(s(),b("div",{key:0,class:"aside-mask w100 h100",onClick:u})):L("",!0)],64)}}}),Bn=B(Pn,[["__scopeId","data-v-6a5a0fbb"]]),Hn={class:"flex"},Fn={class:"flex dc f1"},Vn=M({__name:"index",setup(f){const{layout:t}=I(),{globPage:i,navKeep:v}=H(),h=N(),l=j({currentLiveName:"",currentRealName:""}),o=Xe({liveList:v.liveNames,realList:[]});let d;const r=async n=>{v.realNames.includes(n)?(d=o.realList.splice(o.realList.map(k=>k.name).indexOf(n),1),await V(),o.realList.push(d[0])):o.liveList.includes(n)?(o.liveList.splice(o.liveList.indexOf(n),1),await V(),l.currentLiveName="",await V(),l.currentLiveName=n,o.liveList.push(n)):(l.currentLiveName="",await V(),l.currentLiveName=n)},a=async n=>{v.realNames.includes(n)?o.realList.splice(o.realList.map(k=>k.name).indexOf(n),1):o.liveList.includes(n)&&(o.liveList.splice(o.liveList.indexOf(n),1),await V(),o.liveList.push(n))},u=async n=>{o.realList=v.realNames.includes(n)?o.realList.filter(k=>k.name===n):[],o.liveList=[n],await V(),o.liveList=v.liveNames};fe(Ee,r),fe(ze,a),fe(Ie,u);const p=(n,k)=>{v.realNames.includes(n)?(!o.realList.find(c=>c.name===n)&&o.realList.push({name:n,comp:Je(Se(i[k]))}),l.currentLiveName="",l.currentRealName=n):(l.currentLiveName=n,l.currentRealName="")};return p(h.name,h.meta.comp),te.beforeResolve(n=>{p(n.name,n.meta.comp)}),(n,k)=>{const c=Bn,C=Cn,S=Rt,A=mt,T=ye("router-view");return s(),b("section",Hn,[e(t).layoutMode!=="MenuAtTop"?(s(),y(c,{key:0})):L("",!0),x("article",Fn,[e(t).isHeader&&e(t).layoutMode!=="MenuAtSide"?(s(),y(C,{key:0})):L("",!0),e(t).isTab?(s(),y(S,{key:1})):L("",!0),e(t).isCrumb?(s(),y(A,{key:2})):L("",!0),J(x("main",null,[_(be,{name:e(t).animate},{default:m(()=>[(s(!0),b(P,null,G(e(o).realList,q=>J((s(),y(ee(q.comp),{key:q.name,class:"pd-base qp-main"})),[[Y,q.name===e(l).currentRealName]])),128))]),_:1},8,["name"])],512),[[Y,!!e(l).currentRealName]]),J(x("main",null,[_(T,null,{default:m(({Component:q})=>[_(Ye,{name:e(t).animate,mode:"out-in"},{default:m(()=>[(s(),y(Ge,{include:e(o).liveList},[(s(),y(ee(q),{key:e(l).currentLiveName,class:"pd-base qp-main"}))],1032,["include"]))]),_:2},1032,["name"])]),_:1})],512),[[Y,!e(l).currentRealName]])]),e(t).isMdScreen?(s(),y(He,{key:1,class:"qv-collapse zi-2"})):L("",!0)])}}}),rs=B(Vn,[["__scopeId","data-v-0714ae01"]]);export{rs as default};