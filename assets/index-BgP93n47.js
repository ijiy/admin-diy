import{G as u,i as h}from"./element-plus-rtZK4mjR.js";import{M as f}from"./md-editor-v3-i2rvv4OS.js";import{a as E}from"./index-BJH4a_tv.js";import{d as p,o as d,J as _,u as l,al as b,c as g,a as i,b as m,K as k,Q as v}from"./@vue-Bu2ox0Ej.js";import"./lodash-es-CbX0-HeL.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BI9iYFro.js";import"./@element-plus-BaPZHkdt.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./@vavt-DY9C3b1x.js";import"./medium-zoom-bWEtUbjf.js";import"./copy-to-clipboard-H-iOfSQ6.js";import"./@intlify-7FzvKZLA.js";import"./toggle-selection-BHUZwh74.js";import"./markdown-it-DI8MEbma.js";import"./mdurl-k9Sl0PQj.js";import"./uc.micro-kMc2yuuw.js";import"./entities-C20TfXL6.js";import"./linkify-it-DmNjr4Kv.js";import"./punycode.js-Dj65hjkv.js";import"./markdown-it-image-figures-BD49Kf-b.js";import"./markdown-it-task-lists-C1O_TidZ.js";import"./lru-cache-DmfXgoGS.js";import"./@codemirror-C6X7y8Au.js";import"./pinia-BMu_gUya.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-Q6gHvPgm.js";import"./vue-i18n-BXMOD-z5.js";import"./vue-CDKdorV-.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";const y=p({__name:"index",props:{content:{}},setup(a){const e=a,{layout:r,lang:n}=E();return(c,o)=>(d(),_(l(f),{modelValue:e.content,"onUpdate:modelValue":o[0]||(o[0]=t=>e.content=t),theme:l(r).isDark?"dark":"light",language:l(n).defaultLang==="zh-cn"?"zh-CN":"en-US"},null,8,["modelValue","theme","language"]))}}),C=(a,e,r)=>{let n="",c="",o;e.forEach(s=>{c+=`<th align="center">${s}</th>`}),r.forEach(s=>{o="<tr>",Object.values(s).forEach(x=>{o+=`<td style="vnd.ms-excel.numberformat:@" align="center">${x}</td>`}),n+=`${o}</tr>`});const t=document.createElement("a");t.href=`data:application/vnd.ms-excel;charset=utf-8,${encodeURIComponent(`
		<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel'>
			<head>
				<xml>
					<x:ExcelWorkbook>
						<x:ExcelWorksheets>
							<x:ExcelWorksheet>
								<x:Name>${a}</x:Name>
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
					<tr>${c}</tr>
					${n}
				</table>
			</body>
		</html>
	`)}`,t.download=`${a}.xlsx`,document.body.appendChild(t),t.click(),document.body.removeChild(t)},$={class:"qp-box mt-base"},ae=p({name:"NConvertExcel",__name:"index",setup(a){const e=b({loading:!1}),r=()=>{e.loading||(e.loading=!0,C("文件名",["表头a","表头b"],[{a:"2024-01-01 10:10:10",b:"1/10"}]),setTimeout(()=>{e.loading=!1,u.success("导出成功")},1e3))};return(n,c)=>{const o=y,t=h;return d(),g("div",null,[i("div",$,[i("div",null,[m(o,{content:`convertExcel( '文件名', ['表头a', '表头b'], [{ a:
					'2024-01-01 10:10:10', b: '1/10' }])`})]),m(t,{class:"mt-base",type:"primary",loading:l(e).loading,onClick:r},{default:k(()=>[v(" 表格数据转Excel ")]),_:1},8,["loading"])])])}}});export{ae as default};
