import{c0 as Ve,bz as Y,bL as $e,bx as Z,bA as W,bg as fe,bh as be,b9 as R,R as j,N as ee,ar as U,X as P,c as y,au as M,bl as _e,bk as q,S as ce,bp as me,ao as ge,Y as pe,Q as z,bC as I,bu as K,am as De,c1 as ae,at as le,br as he,bm as B,d as w,ba as ye,x as J,m as k,J as Ce,w as xe,g as ne,F as S,j as v,ad as V,e as E,b1 as $,aC as _,c2 as D,D as Q,af as Ne,n as Se,t as Le,H,T as ke,z as X,G as Re,A as Ge,P as Fe,V as Ue,c3 as Me,bw as ze,I as Ke,Z as Ae}from"./index-D1zNGLi-.js";import{U as te,p as se,h as ue,l as oe,S as G,r as He}from"./_initCloneObject-CPOiu2qT.js";var qe="__lodash_hash_undefined__";function Je(e){return this.__data__.set(e,qe),this}function Qe(e){return this.__data__.has(e)}function N(e){var a=-1,s=e==null?0:e.length;for(this.__data__=new Ve;++a<s;)this.add(e[a])}N.prototype.add=N.prototype.push=Je;N.prototype.has=Qe;function Xe(e,a){for(var s=-1,l=e==null?0:e.length;++s<l;)if(a(e[s],s,e))return!0;return!1}function Ye(e,a){return e.has(a)}var Ze=1,We=2;function Ee(e,a,s,l,c,t){var b=s&Ze,u=e.length,m=a.length;if(u!=m&&!(b&&m>u))return!1;var d=t.get(e),i=t.get(a);if(d&&i)return d==a&&i==e;var g=-1,p=!0,C=s&We?new N:void 0;for(t.set(e,a),t.set(a,e);++g<u;){var n=e[g],r=a[g];if(l)var h=b?l(r,n,g,a,e,t):l(n,r,g,e,a,t);if(h!==void 0){if(h)continue;p=!1;break}if(C){if(!Xe(a,function(f,o){if(!Ye(C,o)&&(n===f||c(n,f,s,l,t)))return C.push(o)})){p=!1;break}}else if(!(n===r||c(n,r,s,l,t))){p=!1;break}}return t.delete(e),t.delete(a),p}function je(e){var a=-1,s=Array(e.size);return e.forEach(function(l,c){s[++a]=[c,l]}),s}function ea(e){var a=-1,s=Array(e.size);return e.forEach(function(l){s[++a]=l}),s}var aa=1,la=2,na="[object Boolean]",ta="[object Date]",sa="[object Error]",ua="[object Map]",oa="[object Number]",ra="[object RegExp]",ia="[object Set]",da="[object String]",va="[object Symbol]",fa="[object ArrayBuffer]",ba="[object DataView]",re=Y?Y.prototype:void 0,F=re?re.valueOf:void 0;function ca(e,a,s,l,c,t,b){switch(s){case ba:if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case fa:return!(e.byteLength!=a.byteLength||!t(new te(e),new te(a)));case na:case ta:case oa:return $e(+e,+a);case sa:return e.name==a.name&&e.message==a.message;case ra:case da:return e==a+"";case ua:var u=je;case ia:var m=l&aa;if(u||(u=ea),e.size!=a.size&&!m)return!1;var d=b.get(e);if(d)return d==a;l|=la,b.set(e,a);var i=Ee(u(e),u(a),l,c,t,b);return b.delete(e),i;case va:if(F)return F.call(e)==F.call(a)}return!1}var ma=1,ga=Object.prototype,pa=ga.hasOwnProperty;function ha(e,a,s,l,c,t){var b=s&ma,u=se(e),m=u.length,d=se(a),i=d.length;if(m!=i&&!b)return!1;for(var g=m;g--;){var p=u[g];if(!(b?p in a:pa.call(a,p)))return!1}var C=t.get(e),n=t.get(a);if(C&&n)return C==a&&n==e;var r=!0;t.set(e,a),t.set(a,e);for(var h=b;++g<m;){p=u[g];var f=e[p],o=a[p];if(l)var A=b?l(o,f,p,a,e,t):l(f,o,p,e,a,t);if(!(A===void 0?f===o||c(f,o,s,l,t):A)){r=!1;break}h||(h=p=="constructor")}if(r&&!h){var L=e.constructor,x=a.constructor;L!=x&&"constructor"in e&&"constructor"in a&&!(typeof L=="function"&&L instanceof L&&typeof x=="function"&&x instanceof x)&&(r=!1)}return t.delete(e),t.delete(a),r}var ya=1,ie="[object Arguments]",de="[object Array]",O="[object Object]",Ca=Object.prototype,ve=Ca.hasOwnProperty;function xa(e,a,s,l,c,t){var b=Z(e),u=Z(a),m=b?de:ue(e),d=u?de:ue(a);m=m==ie?O:m,d=d==ie?O:d;var i=m==O,g=d==O,p=m==d;if(p&&oe(e)){if(!oe(a))return!1;b=!0,i=!1}if(p&&!i)return t||(t=new G),b||He(e)?Ee(e,a,s,l,c,t):ca(e,a,m,s,l,c,t);if(!(s&ya)){var C=i&&ve.call(e,"__wrapped__"),n=g&&ve.call(a,"__wrapped__");if(C||n){var r=C?e.value():e,h=n?a.value():a;return t||(t=new G),c(r,h,s,l,t)}}return p?(t||(t=new G),ha(e,a,s,l,c,t)):!1}function we(e,a,s,l,c){return e===a?!0:e==null||a==null||!W(e)&&!W(a)?e!==e&&a!==a:xa(e,a,s,l,we,c)}function Sa(e,a){return we(e,a)}const Te={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:fe,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...be(["ariaControls"])},Be={[R]:e=>j(e)||ee(e)||U(e),change:e=>j(e)||ee(e)||U(e)},T=Symbol("checkboxGroupContextKey"),La=({model:e,isChecked:a})=>{const s=P(T,void 0),l=y(()=>{var t,b;const u=(t=s==null?void 0:s.max)==null?void 0:t.value,m=(b=s==null?void 0:s.min)==null?void 0:b.value;return!M(u)&&e.value.length>=u&&!a.value||!M(m)&&e.value.length<=m&&a.value});return{isDisabled:_e(y(()=>(s==null?void 0:s.disabled.value)||l.value)),isLimitDisabled:l}},ka=(e,{model:a,isLimitExceeded:s,hasOwnLabel:l,isDisabled:c,isLabeledByFormItem:t})=>{const b=P(T,void 0),{formItem:u}=q(),{emit:m}=pe();function d(n){var r,h,f,o;return[!0,e.trueValue,e.trueLabel].includes(n)?(h=(r=e.trueValue)!=null?r:e.trueLabel)!=null?h:!0:(o=(f=e.falseValue)!=null?f:e.falseLabel)!=null?o:!1}function i(n,r){m("change",d(n),r)}function g(n){if(s.value)return;const r=n.target;m("change",d(r.checked),n)}async function p(n){s.value||!l.value&&!c.value&&t.value&&(n.composedPath().some(f=>f.tagName==="LABEL")||(a.value=d([!1,e.falseValue,e.falseLabel].includes(a.value)),await ge(),i(a.value,n)))}const C=y(()=>(b==null?void 0:b.validateEvent)||e.validateEvent);return ce(()=>e.modelValue,()=>{C.value&&(u==null||u.validate("change").catch(n=>me()))}),{handleChange:g,onClickRoot:p}},Aa=e=>{const a=z(!1),{emit:s}=pe(),l=P(T,void 0),c=y(()=>M(l)===!1),t=z(!1),b=y({get(){var u,m;return c.value?(u=l==null?void 0:l.modelValue)==null?void 0:u.value:(m=e.modelValue)!=null?m:a.value},set(u){var m,d;c.value&&I(u)?(t.value=((m=l==null?void 0:l.max)==null?void 0:m.value)!==void 0&&u.length>(l==null?void 0:l.max.value)&&u.length>b.value.length,t.value===!1&&((d=l==null?void 0:l.changeEvent)==null||d.call(l,u))):(s(R,u),a.value=u)}});return{model:b,isGroup:c,isLimitExceeded:t}},Ea=(e,a,{model:s})=>{const l=P(T,void 0),c=z(!1),t=y(()=>K(e.value)?e.label:e.value),b=y(()=>{const i=s.value;return U(i)?i:I(i)?De(t.value)?i.map(ae).some(g=>Sa(g,t.value)):i.map(ae).includes(t.value):i!=null?i===e.trueValue||i===e.trueLabel:!!i}),u=le(y(()=>{var i;return(i=l==null?void 0:l.size)==null?void 0:i.value}),{prop:!0}),m=le(y(()=>{var i;return(i=l==null?void 0:l.size)==null?void 0:i.value})),d=y(()=>!!a.default||!K(t.value));return{checkboxButtonSize:u,isChecked:b,isFocused:c,checkboxSize:m,hasOwnLabel:d,actualValue:t}},Ie=(e,a)=>{const{formItem:s}=q(),{model:l,isGroup:c,isLimitExceeded:t}=Aa(e),{isFocused:b,isChecked:u,checkboxButtonSize:m,checkboxSize:d,hasOwnLabel:i,actualValue:g}=Ea(e,a,{model:l}),{isDisabled:p}=La({model:l,isChecked:u}),{inputId:C,isLabeledByFormItem:n}=he(e,{formItemContext:s,disableIdGeneration:i,disableIdManagement:c}),{handleChange:r,onClickRoot:h}=ka(e,{model:l,isLimitExceeded:t,hasOwnLabel:i,isDisabled:p,isLabeledByFormItem:n});return(()=>{function o(){var A,L;I(l.value)&&!l.value.includes(g.value)?l.value.push(g.value):l.value=(L=(A=e.trueValue)!=null?A:e.trueLabel)!=null?L:!0}e.checked&&o()})(),B({from:"controls",replacement:"aria-controls",version:"2.8.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},y(()=>!!e.controls)),B({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},y(()=>c.value&&K(e.value))),B({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},y(()=>!!e.trueLabel)),B({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},y(()=>!!e.falseLabel)),{inputId:C,isLabeledByFormItem:n,isChecked:u,isDisabled:p,isFocused:b,checkboxButtonSize:m,checkboxSize:d,hasOwnLabel:i,model:l,actualValue:g,handleChange:r,onClickRoot:h}},wa=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],Ta=["id","indeterminate","disabled","value","name","tabindex"],Ba=w({name:"ElCheckbox"}),Ia=w({...Ba,props:Te,emits:Be,setup(e){const a=e,s=ye(),{inputId:l,isLabeledByFormItem:c,isChecked:t,isDisabled:b,isFocused:u,checkboxSize:m,hasOwnLabel:d,model:i,actualValue:g,handleChange:p,onClickRoot:C}=Ie(a,s),n=J("checkbox"),r=y(()=>[n.b(),n.m(m.value),n.is("disabled",b.value),n.is("bordered",a.border),n.is("checked",t.value)]),h=y(()=>[n.e("input"),n.is("disabled",b.value),n.is("checked",t.value),n.is("indeterminate",a.indeterminate),n.is("focus",u.value)]);return(f,o)=>(k(),Ce(ke(!v(d)&&v(c)?"span":"label"),{class:S(v(r)),"aria-controls":f.indeterminate?f.controls||f.ariaControls:null,onClick:v(C)},{default:xe(()=>{var A,L;return[ne("span",{class:S(v(h))},[f.trueValue||f.falseValue||f.trueLabel||f.falseLabel?V((k(),E("input",{key:0,id:v(l),"onUpdate:modelValue":o[0]||(o[0]=x=>$(i)?i.value=x:null),class:S(v(n).e("original")),type:"checkbox",indeterminate:f.indeterminate,name:f.name,tabindex:f.tabindex,disabled:v(b),"true-value":(A=f.trueValue)!=null?A:f.trueLabel,"false-value":(L=f.falseValue)!=null?L:f.falseLabel,onChange:o[1]||(o[1]=(...x)=>v(p)&&v(p)(...x)),onFocus:o[2]||(o[2]=x=>u.value=!0),onBlur:o[3]||(o[3]=x=>u.value=!1),onClick:o[4]||(o[4]=_(()=>{},["stop"]))},null,42,wa)),[[D,v(i)]]):V((k(),E("input",{key:1,id:v(l),"onUpdate:modelValue":o[5]||(o[5]=x=>$(i)?i.value=x:null),class:S(v(n).e("original")),type:"checkbox",indeterminate:f.indeterminate,disabled:v(b),value:v(g),name:f.name,tabindex:f.tabindex,onChange:o[6]||(o[6]=(...x)=>v(p)&&v(p)(...x)),onFocus:o[7]||(o[7]=x=>u.value=!0),onBlur:o[8]||(o[8]=x=>u.value=!1),onClick:o[9]||(o[9]=_(()=>{},["stop"]))},null,42,Ta)),[[D,v(i)]]),ne("span",{class:S(v(n).e("inner"))},null,2)],2),v(d)?(k(),E("span",{key:0,class:S(v(n).e("label"))},[Q(f.$slots,"default"),f.$slots.default?H("v-if",!0):(k(),E(Ne,{key:0},[Se(Le(f.label),1)],64))],2)):H("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var Pa=X(Ia,[["__file","checkbox.vue"]]);const Oa=["name","tabindex","disabled","true-value","false-value"],Va=["name","tabindex","disabled","value"],$a=w({name:"ElCheckboxButton"}),_a=w({...$a,props:Te,emits:Be,setup(e){const a=e,s=ye(),{isFocused:l,isChecked:c,isDisabled:t,checkboxButtonSize:b,model:u,actualValue:m,handleChange:d}=Ie(a,s),i=P(T,void 0),g=J("checkbox"),p=y(()=>{var n,r,h,f;const o=(r=(n=i==null?void 0:i.fill)==null?void 0:n.value)!=null?r:"";return{backgroundColor:o,borderColor:o,color:(f=(h=i==null?void 0:i.textColor)==null?void 0:h.value)!=null?f:"",boxShadow:o?`-1px 0 0 0 ${o}`:void 0}}),C=y(()=>[g.b("button"),g.bm("button",b.value),g.is("disabled",t.value),g.is("checked",c.value),g.is("focus",l.value)]);return(n,r)=>{var h,f;return k(),E("label",{class:S(v(C))},[n.trueValue||n.falseValue||n.trueLabel||n.falseLabel?V((k(),E("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=o=>$(u)?u.value=o:null),class:S(v(g).be("button","original")),type:"checkbox",name:n.name,tabindex:n.tabindex,disabled:v(t),"true-value":(h=n.trueValue)!=null?h:n.trueLabel,"false-value":(f=n.falseValue)!=null?f:n.falseLabel,onChange:r[1]||(r[1]=(...o)=>v(d)&&v(d)(...o)),onFocus:r[2]||(r[2]=o=>l.value=!0),onBlur:r[3]||(r[3]=o=>l.value=!1),onClick:r[4]||(r[4]=_(()=>{},["stop"]))},null,42,Oa)),[[D,v(u)]]):V((k(),E("input",{key:1,"onUpdate:modelValue":r[5]||(r[5]=o=>$(u)?u.value=o:null),class:S(v(g).be("button","original")),type:"checkbox",name:n.name,tabindex:n.tabindex,disabled:v(t),value:v(m),onChange:r[6]||(r[6]=(...o)=>v(d)&&v(d)(...o)),onFocus:r[7]||(r[7]=o=>l.value=!0),onBlur:r[8]||(r[8]=o=>l.value=!1),onClick:r[9]||(r[9]=_(()=>{},["stop"]))},null,42,Va)),[[D,v(u)]]),n.$slots.default||n.label?(k(),E("span",{key:2,class:S(v(g).be("button","inner")),style:Re(v(c)?v(p):void 0)},[Q(n.$slots,"default",{},()=>[Se(Le(n.label),1)])],6)):H("v-if",!0)],2)}}});var Pe=X(_a,[["__file","checkbox-button.vue"]]);const Da=Ge({modelValue:{type:Fe(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:fe,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...be(["ariaLabel"])}),Na={[R]:e=>I(e),change:e=>I(e)},Ra=w({name:"ElCheckboxGroup"}),Ga=w({...Ra,props:Da,emits:Na,setup(e,{emit:a}){const s=e,l=J("checkbox"),{formItem:c}=q(),{inputId:t,isLabeledByFormItem:b}=he(s,{formItemContext:c}),u=async d=>{a(R,d),await ge(),a("change",d)},m=y({get(){return s.modelValue},set(d){u(d)}});return Ue(T,{...Me(ze(s),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:u}),B({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-checkbox-group",ref:"https://element-plus.org/en-US/component/checkbox.html"},y(()=>!!s.label)),ce(()=>s.modelValue,()=>{s.validateEvent&&(c==null||c.validate("change").catch(d=>me()))}),(d,i)=>{var g;return k(),Ce(ke(d.tag),{id:v(t),class:S(v(l).b("group")),role:"group","aria-label":v(b)?void 0:d.label||d.ariaLabel||"checkbox-group","aria-labelledby":v(b)?(g=v(c))==null?void 0:g.labelId:void 0},{default:xe(()=>[Q(d.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var Oe=X(Ga,[["__file","checkbox-group.vue"]]);const Ma=Ke(Pa,{CheckboxButton:Pe,CheckboxGroup:Oe});Ae(Pe);Ae(Oe);export{Ma as E,we as b};