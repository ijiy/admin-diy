import{h as u}from"./@vueuse-DQwSfm13.js";import{d as h,s as k,k as E,o as n,c as i,Q as _,H as w,O as I,u as S}from"./@vue-BFtwODxB.js";import{_ as g}from"./plugin-vueexport-helper-DlAUqK2U.js";const B={key:0,class:"scroll-start"},C={key:1,class:"scroll-end"},R=h({__name:"DiyScrollY",props:{inline:{type:Boolean}},emits:["onReady"],setup(f,{emit:p}){const a=f,v=p,d=k();let e,s,o,l;const y=()=>{o=!0,!l&&e.classList.add("scroll-enter")},b=()=>{o=!1,l||(s&&clearTimeout(s),s=setTimeout(()=>{s=void 0,!o&&e.classList.remove("scroll-enter")},1e3))},m=window.app_mobile;return E(()=>{if(e=d.value,v("onReady",e),!m){const r=[!0,!0],c=new IntersectionObserver(L=>{L.forEach(t=>{r[t.target.className==="scroll-end"?1:0]=t.isIntersecting}),l=r.every(t=>t),l?(e.classList.remove("scroll-visible"),e.classList.remove("scroll-enter")):(e.classList.add("scroll-visible"),o&&e.classList.add("scroll-enter"))});c.observe(e.querySelector(".scroll-start")),c.observe(e.querySelector(".scroll-end")),u(e,"mouseenter",y),u(e,"mouseleave",b)}}),(r,c)=>(n(),i("div",{ref_key:"ref_scroll",ref:d,class:I(["scroll-diy",S(m)?"scroll-mobile":"scroll-pc"])},[a.inline?_("",!0):(n(),i("i",B)),w(r.$slots,"default",{},void 0,!0),a.inline?_("",!0):(n(),i("i",C))],2))}}),H=g(R,[["__scopeId","data-v-f835fd3d"]]);export{H as _};
