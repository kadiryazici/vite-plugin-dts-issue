(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.Listeleme={},t.Vue))})(this,function(t,e){"use strict";const a=e.createTextVNode(" "+e.toDisplayString(5)),p={name:"TheListeleme"},m=e.defineComponent({...p,props:{items:{default:()=>[]}},setup(n){return(o,l)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("ul",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.items,r=>(e.openBlock(),e.createElementBlock("li",{key:r.text},e.toDisplayString(r.text),1))),128))]),a],64))}}),s=e.defineComponent({name:"TheListeleme",props:{items:{type:Array,default:()=>[]}},setup(n){return e.ref(5),()=>e.h("ul",null,e.renderList(n.items,o=>e.h("li",{},o)))}}),d=e.defineComponent({name:"TheListeleme",props:{items:{type:Array,default:()=>[]}}}),f=(n,o)=>{const l=n.__vccOpts||n;for(const[r,i]of o)l[r]=i;return l},_=e.createTextVNode(" "+e.toDisplayString(5));function k(n,o,l,r,i,h){return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("ul",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.items,c=>(e.openBlock(),e.createElementBlock("li",{key:c.text},e.toDisplayString(c.text),1))),128))]),_],64)}const y=f(d,[["render",k]]),u="";t.Lister=m,t.ListerNormalSetup=y,t.ListerTS=s,t.ListerTSX=s,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
