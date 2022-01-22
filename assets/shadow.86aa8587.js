import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{f as s,h as r,ac as S,ad as w,j as e,e as m,t as v,v as y,x as b,y as g,U as h,F as i,D as n,p as x,C as V}from"./framework.ccb220c6.js";const $={},C=o=>(S("data-v-656b59f4"),o=o(),w(),o),k={class:"demo-border"},j=C(()=>e("tbody",null,[e("tr",null,[e("td",{class:"text"},"Name"),e("td",{class:"text"},"Thickness"),e("td",{class:"line"},"Demo")]),e("tr",null,[e("td",{class:"text"},"Solid"),e("td",{class:"text"},"1px"),e("td",{class:"line"},[e("div")])]),e("tr",null,[e("td",{class:"text"},"Dashed"),e("td",{class:"text"},"2px"),e("td",{class:"line"},[e("div",{class:"dashed"})])])],-1)),I=[j];function R(o,_){return s(),r("table",k,I)}var B=p($,[["render",R],["__scopeId","data-v-656b59f4"]]),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const T={class:"title"},z={class:"value"},D=m({setup(o){const _=v([{name:"No Radius",type:""},{name:"Small Radius",type:"small"},{name:"Large Radius",type:"base"},{name:"Round Radius",type:"round"}]),c=l=>((t,a)=>getComputedStyle(document.documentElement).getPropertyValue(`--el-${t}-${a}`))("border-radius",l);return(l,u)=>{const t=y("el-col"),a=y("el-row");return s(),b(a,{gutter:12,class:"demo-radius"},{default:g(()=>[(s(!0),r(i,null,h(_.value,(d,f)=>(s(),b(t,{key:f,span:6,xs:{span:12}},{default:g(()=>[e("div",T,n(d.name),1),e("div",z,[e("code",null,"border-radius: "+n(c(d.type)||"0px"),1)]),e("div",{class:"radius",style:x({borderRadius:d.type?`var(--el-border-radius-${d.type})`:""})},null,4)]),_:2},1024))),128))]),_:1})}}});var N=p(D,[["__scopeId","data-v-4011af11"]]),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const E={class:"demo-shadow-text"},L=m({setup(o){const _=v([{name:"Basic Shadow",type:"base"},{name:"Light Shadow",type:"light"}]),c=l=>((t,a)=>getComputedStyle(document.documentElement).getPropertyValue(`--el-${t}-${a}`))("box-shadow",l);return(l,u)=>(s(),r("div",null,[(s(!0),r(i,null,h(_.value,(t,a)=>(s(),r(i,{key:a},[e("div",{class:"demo-shadow",style:x({boxShadow:`var(--el-box-shadow-${t.type})`})},null,4),e("span",E,[V(n(t.name)+" ",1),e("code",null,"box-shadow: "+n(c(t.type)),1)])],64))),128))]))}});var M=p(L,[["__scopeId","data-v-12e3ba08"]]),U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});export{G as _,P as a,U as b};