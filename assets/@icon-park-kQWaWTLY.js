import{i as L,b as s}from"./@vue-BFtwODxB.js";var m={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function v(){return"icon-"+((1+Math.random())*4294967296|0).toString(16).substring(1)}function j(o,i,r){var e=typeof i.fill=="string"?[i.fill]:i.fill||[],t=[],n=i.theme||r.theme;switch(n){case"outline":t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push("none"),t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push("none");break;case"filled":t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push("#FFF"),t.push("#FFF");break;case"two-tone":t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone),t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone);break;case"multi-color":t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push(typeof e[1]=="string"?e[1]:r.colors.multiColor.outFillColor),t.push(typeof e[2]=="string"?e[2]:r.colors.multiColor.innerStrokeColor),t.push(typeof e[3]=="string"?e[3]:r.colors.multiColor.innerFillColor);break}return{size:i.size||r.size,strokeWidth:i.strokeWidth||r.strokeWidth,strokeLinecap:i.strokeLinecap||r.strokeLinecap,strokeLinejoin:i.strokeLinejoin||r.strokeLinejoin,colors:t,id:o}}var y=Symbol("icon-context");function w(o,i,r){var e={name:"icon-"+o,props:["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","spin"],setup:function(n){var k=v(),l=L(y,m);return function(){var a=n.size,h=n.strokeWidth,c=n.strokeLinecap,f=n.strokeLinejoin,d=n.theme,p=n.fill,C=n.spin,F=j(k,{size:a,strokeWidth:h,strokeLinecap:c,strokeLinejoin:f,theme:d,fill:p},l),u=[l.prefix+"-icon"];return u.push(l.prefix+"-icon-"+o),C&&u.push(l.prefix+"-icon-spin"),s("span",{class:u.join(" ")},[r(F)])}}};return e}const W=w("home",!1,function(o){return s("svg",{width:o.size,height:o.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M9 18V42H39V18L24 6L9 18Z",fill:o.colors[1],stroke:o.colors[0],"stroke-width":o.strokeWidth,"stroke-linecap":o.strokeLinecap,"stroke-linejoin":o.strokeLinejoin},null),s("path",{d:"M19 29V42H29V29H19Z",fill:o.colors[3],stroke:o.colors[2],"stroke-width":o.strokeWidth,"stroke-linejoin":o.strokeLinejoin},null),s("path",{d:"M9 42H39",stroke:o.colors[0],"stroke-width":o.strokeWidth,"stroke-linecap":o.strokeLinecap},null)])});export{W as H};
