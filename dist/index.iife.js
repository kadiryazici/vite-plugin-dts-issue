var Listeleme=function(r,e){"use strict";const a=e.createTextVNode(" "+e.toDisplayString(5)),i={name:"TheListeleme"},m=e.defineComponent({...i,props:{items:{default:()=>[]}},setup(t){return(n,l)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("ul",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.items,o=>(e.openBlock(),e.createElementBlock("li",{key:o.text},e.toDisplayString(o.text),1))),128))]),a],64))}}),p=e.defineComponent({name:"TheListeleme",props:{items:{type:Array,default:()=>[]}},setup(t){return()=>e.h("ul",null,e.renderList(t.items,n=>e.h("li",{},n.text)))}}),d=e.defineComponent({name:"TheListeleme",props:{items:{type:Array,default:()=>[]}},setup(t){return()=>e.createVNode("ul",null,[...e.renderList(t.items,n=>e.createVNode("li",null,[n.text]))])}}),_=e.defineComponent({name:"TheListeleme",props:{items:{type:Array,default:()=>[]}}}),f=(t,n)=>{const l=t.__vccOpts||t;for(const[o,s]of n)l[o]=s;return l},k=e.createTextVNode(" "+e.toDisplayString(5));function y(t,n,l,o,s,g){return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("ul",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.items,c=>(e.openBlock(),e.createElementBlock("li",{key:c.text},e.toDisplayString(c.text),1))),128))]),k],64)}const L=f(_,[["render",y]]),B="";return r.Lister=m,r.ListerNormalSetup=L,r.ListerTS=p,r.ListerTSX=d,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),r}({},Vue);
