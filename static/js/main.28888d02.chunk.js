(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/Ruled_paper_note_with_pin.8619e0cf.png"},function(e,t,n){e.exports=n(38)},,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),l=(n(16),n(2)),u=n(1);var m=o.a.createContext();function i(e){var t=function(e,t){var n=o.a.useState(!1),a=Object(u.a)(n,2),c=a[0],r=a[1],l=o.a.useState(!0),m=Object(u.a)(l,2),i=m[0],s=m[1],d=o.a.useState(t),p=Object(u.a)(d,2),f=p[0],E=p[1];return o.a.useEffect(function(){setTimeout(function(){try{var n,a=localStorage.getItem(e);a?n=JSON.parse(a):(localStorage.setItem(e,JSON.stringify(t)),n=t),E(n),s(!1)}catch(c){r(c)}},1e4)}),{item:f,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),E(t)}catch(c){r(c)}},loading:i,error:c}}("TODOS_V1",[]),n=t.item,a=t.saveItem,c=t.loading,r=t.error,i=o.a.useState(""),s=Object(u.a)(i,2),d=s[0],p=s[1],f=o.a.useState(!1),E=Object(u.a)(f,2),v=E[0],g=E[1],T=n.filter(function(e){return!!e.completed}).length,b=n.length,h=[];h=!d.length>=1?n:n.filter(function(e){var t=e.text.toLowerCase(),n=d.toLowerCase();return t.includes(n)});return o.a.createElement(m.Provider,{value:{error:r,loading:c,totalTodos:b,completedTodos:T,searchValue:d,setSearchValue:p,searchedTodos:h,addTodo:function(e){var t=Object(l.a)(n);t.push({completed:!1,text:e}),a(t)},toggleCompleteTodo:function(e){var t=n.findIndex(function(t){return t.text===e}),o=Object(l.a)(n);o[t].completed=!o[t].completed,a(o)},deleteTodo:function(e){var t=n.findIndex(function(t){return t.text===e}),o=Object(l.a)(n);o.splice(t,1),a(o)},openModal:v,setOpenModal:g}},e.children)}n(18);function s(){var e=o.a.useContext(m),t=e.totalTodos,n=e.completedTodos;return o.a.createElement("h2",{className:"TodoCounter"},"Has completado ",n," de ",t," TODOS")}n(20);function d(){var e=o.a.useContext(m),t=e.searchValue,n=e.setSearchValue;return o.a.createElement("input",{className:"TodoSearch",placeholder:"escribe aqui",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(22);function p(e){return o.a.createElement("section",null,o.a.createElement("ul",null,e.children))}n(24);var f=n(4);function E(e){return o.a.createElement("li",{className:"TodoItem"},o.a.createElement("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check-active"),onClick:e.onComplete},o.a.createElement(f.a,{className:""})),o.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete")},e.text),o.a.createElement("span",{className:"Icon Icon-delete",onClick:e.onDelete},o.a.createElement(f.b,null)))}n(26);function v(){var e=o.a.useState(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=o.a.useContext(m),r=c.addTodo,l=c.setOpenModal;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(n),l(!1)}},o.a.createElement("label",null,"Escribe tu nuevo TODO"),o.a.createElement("textarea",{value:n,onChange:function(e){a(e.target.value)},placeholder:"escribe aqu\xed"}),o.a.createElement("div",{className:"TodoForm-buttonContainer"},o.a.createElement("button",{className:"TodoForm-button TodoForm_button--cancel",type:"button",onClick:function(){l(!1)}},"Cancelar"),o.a.createElement("button",{className:"TodoForm-button TodoForm-button--add",type:"submit"},"A\xf1adir")))}n(28);function g(e){return o.a.createElement("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal(!e.openModal)}},"+")}var T=n(3),b=n.n(T);n(30);function h(e){var t=e.children;return b.a.createPortal(o.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}n(32);function C(){return o.a.createElement("div",{className:"LoadingTodo-Container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"},"Cargando Todos"))}var x=n(7),O=n.n(x);n(34);function N(){return o.a.createElement("div",{className:"EmptyTodo-Container"},o.a.createElement("img",{src:O.a}),o.a.createElement("p",{className:"EmptyTodo-text--uno"},"No tienes Tareas"),o.a.createElement("p",{className:"EmptyTodo-text--dos"},"Usa el bot\xf3n + para agregar nuevas tareas"))}n(36);function I(){return o.a.createElement("div",null,o.a.createElement("p",null,"ha ocurrido un error"))}function S(){var e=o.a.useContext(m),t=e.error,n=e.loading,a=e.searchedTodos,c=e.toggleCompleteTodo,r=e.deleteTodo,l=e.openModal,u=e.setOpenModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,null),o.a.createElement(d,null),o.a.createElement(p,null,t&&o.a.createElement(I,null),n&&o.a.createElement(C,null),!n&&!a.length&&o.a.createElement(N,null),a.map(function(e){return o.a.createElement(E,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return c(e.text)},onDelete:function(){return r(e.text)}})})),!!l&&o.a.createElement(h,null,o.a.createElement(v,null)),o.a.createElement(g,{setOpenModal:u,openModal:l}))}var y=function(){return o.a.createElement(i,null,o.a.createElement(S,null))};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(y,null))}],[[8,2,1]]]);
//# sourceMappingURL=main.28888d02.chunk.js.map