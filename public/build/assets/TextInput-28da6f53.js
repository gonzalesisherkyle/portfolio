import{i as l,p as i,o as a,f as s,b as c,t as n,r as m,m as p,k as _}from"./app-821fe87b.js";const f={class:"text-sm text-red-600 dark:text-red-400"},h={__name:"InputError",props:["message"],setup(e){return(o,t)=>l((a(),s("div",null,[c("p",f,n(e.message),1)],512)),[[i,e.message]])}},g={class:"block font-medium text-sm text-gray-700 dark:text-gray-300"},k={key:0},v={key:1},y={__name:"InputLabel",props:["value"],setup(e){return(o,t)=>(a(),s("label",g,[e.value?(a(),s("span",k,n(e.value),1)):(a(),s("span",v,[m(o.$slots,"default")]))]))}},b=["value"],$={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(e,{expose:o}){const t=p(null);return _(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),o({focus:()=>t.value.focus()}),(u,r)=>(a(),s("input",{class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",value:e.modelValue,onInput:r[0]||(r[0]=d=>u.$emit("update:modelValue",d.target.value)),ref_key:"input",ref:t},null,40,b))}};export{y as _,$ as a,h as b};
