(this.webpackJsonpredux_cunban=this.webpackJsonpredux_cunban||[]).push([[0],{14:function(t,e,a){t.exports=a(23)},19:function(t,e,a){},23:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(5),s=a.n(o),u=(a(19),a(8),a(3)),c=a(2);var i=Object(c.b)((function(t){return{state:t}}),(function(t){return{deleteTask:function(e){return t({type:"deleteTask",payload:e})},saveTitleTask:function(e){var a=e.id,n=e.title;return t({type:"saveTitleTask",payload:{id:a,title:n}})},moveLeft:function(e){return t({type:"moveLeft",payload:e})},moveRight:function(e){return t({type:"moveRight",payload:e})}}}))((function(t){console.log("item",t);var e=t.element,a=Object(n.useState)(!1),o=Object(u.a)(a,2),s=o[0],c=o[1],i=Object(n.useState)(!1),l=Object(u.a)(i,2),d=l[0],m=l[1],f=Object(n.useState)(e.name),v=Object(u.a)(f,2),p=v[0],b=v[1];return r.a.createElement("li",{key:e.id},d?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:p,onChange:function(t){return b(t.target.value)}}),r.a.createElement("button",{onClick:function(){m(!1),t.saveTitleTask({id:e.id,title:p})}},"Save")):r.a.createElement("div",{class:"item",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},r.a.createElement("div",null,e.name)),s&&r.a.createElement("div",{class:"menu",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},"todo"!==e.status&&r.a.createElement("button",{onClick:function(){return t.moveRight(e.id)}},"Right"),"done"!==e.status&&r.a.createElement("button",{onClick:function(){return t.moveLeft(e.id)}},"Left"),r.a.createElement("button",{onClick:function(){m(!0)}},"Edit"),r.a.createElement("button",{onClick:function(){return t.deleteTask(e.id)}},"Delete")))}));var l=Object(c.b)((function(t){return{state:t}}),(function(t){return{addTask:function(e){return t({type:"addTask",payload:e})}}}))((function(t){var e=t.state.tasks,a=t.state.columns,o=Object(n.useState)(""),s=Object(u.a)(o,2),c=s[0],l=s[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",null,"Canban board"),r.a.createElement("input",{value:c,onChange:function(t){return l(t.target.value)}}),r.a.createElement("button",{onClick:function(){t.addTask(c),l("")}},"Add")),r.a.createElement("div",{class:"container text-center"},r.a.createElement("div",{class:"row"},a.map((function(t){return r.a.createElement("div",{class:"coll"},r.a.createElement("h2",null,t.title),r.a.createElement("ul",null,e.filter((function(e){return e.status===t.status})).map((function(t){return r.a.createElement(i,{element:t})}))))})))))}));var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l,null))},m=a(7),f=a(12),v=a(13),p=a(1),b={tasks:[{id:1,status:"progress",name:"Text todo1"},{id:2,status:"todo",name:"Text todo2"},{id:3,status:"review",name:"Text todo3"},{id:4,status:"done",name:"Text todo4"}],columns:[{id:1,status:"todo",priority:"Text todo1",title:"Todo"},{id:2,status:"progress",priority:"Text todo2",title:"Progress"},{id:3,status:"review",priority:"Text todo3",title:"Review"},{id:4,status:"done",priority:"Text todo4",title:"Done"}]},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"deleteTask":var a=Object(p.a)(Object(p.a)({},t),{},{tasks:t.tasks.filter((function(t){return t.id!==e.payload}))});return a;case"addTask":return Object(p.a)(Object(p.a)({},t),{},{tasks:[].concat(Object(v.a)(t.tasks),[{id:Math.random(),name:e.payload,status:"todo"}])});case"saveTitleTask":var n=e.payload,r=n.title,o=n.id;return console.log("saveTitleTask"),r&&o?Object(p.a)(Object(p.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===o&&(t.name=r),t}))}):t;case"moveLeft":return Object(p.a)(Object(p.a)({},t),{},{tasks:t.tasks.map((function(a){if(a.id===e.payload){var n=t.columns.findIndex((function(t){return t.status===a.status}))+1;a.status=n<t.columns.length?t.columns[n].status:a.status}return a}))});case"moveRight":return Object(p.a)(Object(p.a)({},t),{},{tasks:t.tasks.map((function(a){if(a.id===e.payload){var n=t.columns.findIndex((function(t){return t.status===a.status}))-1;a.status=n>=0?t.columns[n].status:a.status}return a}))});default:return t}},E=Object(m.createStore)(k,Object(f.composeWithDevTools)(Object(m.applyMiddleware)()));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:E},r.a.createElement(d,null))),document.getElementById("root"))},8:function(t,e,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.67548189.chunk.js.map