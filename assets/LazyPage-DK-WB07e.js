import{H as T,y as v,i as $,I as C,J as W}from"./element-plus-hr2Rsl-r.js";import{d as w,ao as L,o as x,c as f,a as l,V as h,b as m,R as u,W as B,u as b,P as D,ag as S}from"./@vue-Qh5bA5yX.js";import"./lodash-es-ByZL8CPd.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-D9VHCHPz.js";import"./@element-plus-ByXdi8SP.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";const N=(p,c,t)=>{let r="",o="",n;c.forEach(i=>{o+=`<th align="center">${i}</th>`}),t.forEach(i=>{n="<tr>",Object.values(i).forEach(d=>{n+=`<td style="vnd.ms-excel.numberformat:@" align="center">${d}</td>`}),r+=`${n}</tr>`});const e=document.createElement("a");e.href=`data:application/vnd.ms-excel;charset=utf-8,${encodeURIComponent(`
		<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel'>
			<head>
				<xml>
					<x:ExcelWorkbook>
						<x:ExcelWorksheets>
							<x:ExcelWorksheet>
								<x:Name>${p}</x:Name>
								<x:WorksheetOptions>
									<x:DisplayGridlines/>
								</x:WorksheetOptions>
							</x:ExcelWorksheet>
						</x:ExcelWorksheets>
					</x:ExcelWorkbook>
				</xml>
			</head>
			<body>
				<table>
					<tr>${o}</tr>
					${r}
				</table>
			</body>
		</html>
	`)}`,e.download=`${p}.xlsx`,document.body.appendChild(e),e.click(),document.body.removeChild(e)},P={class:"h-base"},R={class:"qp-box h-base"},V={class:"h-base"},I={class:"c-title"},O={class:"qp-box h-base"},j={class:"flex jb"},g="表格名称",K=w({__name:"LazyPage",setup(p){const c=[];let t;const r=new Date;for(t=1;t<27;t++)r.setDate(t),c.push({name:`${String.fromCodePoint(64+t)}${String.fromCodePoint(96+t)}`,createTime:r.toLocaleString("zh",{hour12:!1}),progress:`${t}%`});const o=L({loading:!1,dataList:c}),n=[{prop:"name",label:"姓名",align:"center"},{prop:"createTime",label:"时间",align:"center"},{prop:"progress",label:"进度",align:"center"}],e={timer:void 0,loading:!1},i=()=>{e.loading||(e.loading=!0,e.timer=setTimeout(()=>{e.timer=void 0,o.loading=!0},300),N(g,n.map(d=>d.label),o.dataList),setTimeout(()=>{T.success("导出成功"),e.timer?(clearTimeout(e.timer),e.timer=void 0):o.loading=!1,setTimeout(()=>{e.loading=!1},500)},500))};return(d,a)=>{const _=v,E=$,k=C,y=W;return x(),f("div",P,[l("div",R,[l("ul",V,[l("li",null,[l("h2",I,[a[1]||(a[1]=h(" 插件: ")),m(_,{type:"success"},{default:u(()=>a[0]||(a[0]=[h("plugToExcel")])),_:1})])]),a[2]||(a[2]=l("li",null,"作用: 将表格数据转成Excel",-1))])]),l("div",O,[l("div",j,[l("h2",{class:"c-title"},B(g)),m(E,{type:"primary",loading:b(o).loading,onClick:i},{default:u(()=>a[3]||(a[3]=[h(" 导出Excel ")])),_:1},8,["loading"])]),m(y,{stripe:"",data:b(o).dataList},{default:u(()=>[(x(),f(D,null,S(n,s=>m(k,{key:s.prop,prop:s.prop,label:s.label,align:s.align,width:s.width,"min-width":s.minWidth,formatter:s.formatter},null,8,["prop","label","align","width","min-width","formatter"])),64))]),_:1},8,["data"])])])}}});export{K as default};
