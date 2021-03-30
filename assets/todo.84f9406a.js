import{d as e,o as t,c as o,a as l,t as d,w as a,b as s,p as n,e as r,F as c,r as i,f as p,g as u,h as m,i as v,j as f,k as g,l as C}from"./index.12030642.js";var h=e({props:{todo:{type:Object,required:!0},isPc:{type:Boolean,required:!0}},setup:(e,{emit:t})=>({optCompletedClick:()=>{t("opt",e.todo.id)},deleteTodo:()=>{t("del",e.todo.id)}})});const T=a("data-v-fb79dab4")(((e,a,s,n,r,c)=>(t(),o("div",{class:["todo-item",e.todo.completed?"completed":"",e.isPc?"":"notPc"]},[l("input",{type:"checkbox",class:"toggle",value:+e.todo.completed,checked:e.todo.completed,onClick:a[1]||(a[1]=(...t)=>e.optCompletedClick&&e.optCompletedClick(...t))},null,8,["value","checked"]),l("label",null,d(e.todo.content),1),l("button",{class:"destroy",onClick:a[2]||(a[2]=(...t)=>e.deleteTodo&&e.deleteTodo(...t))})],2))));h.render=T,h.__scopeId="data-v-fb79dab4";var b=e({props:{filter:{type:String,required:!0},todos:{type:Array,required:!0}},setup:(e,{emit:t})=>({states:["all","active","completed"],unFinishedTodoLength:s((()=>e.todos.filter((e=>!e.completed)).length)),toggleFilter:e=>{t("toggle",e)},clearAllCompleted:()=>{t("clearAll")}})});const y=a("data-v-1c22c348");n("data-v-1c22c348");const k={class:"helper"},A={class:"left"},_=p(" iteams left"),P={class:"tabs"};r();const S=y(((e,a,s,n,r,p)=>(t(),o("div",k,[l("span",A,[l("b",null,d(e.unFinishedTodoLength),1),_]),l("span",P,[(t(!0),o(c,null,i(e.states,(l=>(t(),o("span",{key:l,class:[l,e.filter===l?"actived":""],onClick:t=>e.toggleFilter(l)},d(l),11,["onClick"])))),128))]),l("span",{class:"clear",onClick:a[1]||(a[1]=(...t)=>e.clearAllCompleted&&e.clearAllCompleted(...t))},"Clear completed")]))));b.render=S,b.__scopeId="data-v-1c22c348";var O=e({name:"Author",props:{name:{type:String,default:"if(){}else{}"}},setup:e=>()=>l("div",{id:"author"},[l("span",null,[p("Written by "),e.name])])});var x=e({name:"TodoPage",components:{Item:h,Tabs:b,Author:O},setup(){const e=localStorage.test_vue3_demo?JSON.parse(localStorage.test_vue3_demo):{};let t=0;const o=u(!0),l=u(null);m((()=>{o.value=(()=>{const e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];let o=!0;for(let l=0;l<t.length;l++)if(e.indexOf(t[l])>0){o=!1;break}return o})(),l.value&&l.value.focus()}));const d=e.todos||[];let a=v(d);f(a,(t=>{e.todos=t,localStorage.test_vue3_demo=JSON.stringify(e)}));const n=e.filter||"all",r=u(n);f(r,(t=>{e.filter=t,localStorage.test_vue3_demo=JSON.stringify(e)}));const c=s((()=>{if("all"===r.value)return u(a);const e="completed"===r.value;return u(a.filter((t=>e===t.completed)))}));return{todos:a,addTodo:e=>{e.target.value.trim()&&(a.unshift({id:t++,content:e.target.value.trim(),completed:!1}),e.target.value="")},optCompleted:e=>{const t=a.findIndex((t=>t.id===e));a[t].completed=!a[t].completed},deleteTodo:e=>{a.splice(a.findIndex((t=>t.id===e)),1)},clearAllCompleted:()=>{const e=a.filter((e=>!e.completed));a=e},filter:r,toggleFilter:e=>{r.value=e},filteredTodos:c,isPc:o,inputRef:l}}});const F=a("data-v-1a604321");n("data-v-1a604321");const I={class:"todo-app"};r();const q=F(((e,d,a,s,n,r)=>{const p=g("Item"),u=g("Tabs"),m=g("Author");return t(),o("div",null,[l("div",I,[l("input",{type:"text",class:"add-input",ref:"inputRef",placeholder:"接下来要做什么？",onKeyup:d[1]||(d[1]=C(((...t)=>e.addTodo&&e.addTodo(...t)),["enter"]))},null,544),(t(!0),o(c,null,i(e.filteredTodos.value,(l=>(t(),o(p,{todo:l,key:l.id,isPc:e.isPc,onDel:e.deleteTodo,onOpt:e.optCompleted},null,8,["todo","isPc","onDel","onOpt"])))),128)),l(u,{filter:e.filter,todos:e.todos,onToggle:e.toggleFilter,onClearAll:e.clearAllCompleted},null,8,["filter","todos","onToggle","onClearAll"])]),l(m)])}));x.render=q,x.__scopeId="data-v-1a604321";export default x;