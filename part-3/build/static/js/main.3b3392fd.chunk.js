(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),u=n.n(o),c=n(3),l=n(4),i=n(2),s=n.n(i),m="https://vast-ridge-14405.herokuapp.com/api/persons",f=function(){return s.a.get(m)},d=function(e){return s.a.post(m,e)},p=function(e){return s.a.delete("".concat(m,"/").concat(e))},b=function(e){return s.a.put("".concat(m,"/").concat(e.id),e)},h=function(e){var t=e.headline;return r.a.createElement("h2",null,t)},v=function(e){var t,n=e.error,a=void 0===n?null:n;return null===a?null:(t="fail"===a.type?{backgroundColor:"red"}:{backgroundColor:"green"},r.a.createElement("div",{style:t},a.message))},E=function(e){var t=e.filter,n=e.setFilter;return r.a.createElement("form",null,r.a.createElement("div",null,"filter: ",r.a.createElement("input",{value:t,onChange:function(e){n(e.target.value)}})))},g=function(e){var t=e.persons,n=e.setPersons,a=e.setError,o=e.newName,u=e.setNewName,c=e.newNumber,i=e.setNewNumber;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),-1===t.map((function(e){return e.name})).indexOf(o)?d({name:o,number:c}).then((function(e){n(t.concat(e.data)),a({message:"".concat(o," added to phonebook."),type:"success"}),setTimeout((function(){return a(null)}),2e3)})).catch((function(e){a({message:"Unable to add ".concat(o," to phonebook."),type:"fail"}),setTimeout((function(){return a(null)}),2e3)})):window.confirm("".concat(o," is already added to phonebook. Update their number?"))&&b(Object(l.a)(Object(l.a)({},t.find((function(e){return e.name===o}))),{},{number:c})).then((function(e){n(t.map((function(t){return t.name!==o?t:e.data}))),a({message:"".concat(o,"'s number updated."),type:"success"}),setTimeout((function(){return a(null)}),2e3)})).catch((function(e){n(t.filter((function(e){return e.name!==o}))),a({message:"Unable to update ".concat(o,"'s number."),type:"fail"}),setTimeout((function(){return a(null)}),2e3)})),u(""),i("")}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:o,onChange:function(e){u(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:function(e){i(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},w=function(e){var t=e.persons,n=e.setPersons,a=e.setError,o=e.filter;return t.filter((function(e){return e.name.toUpperCase().includes(o.toUpperCase())})).map((function(e,o){return r.a.createElement("div",{key:o},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return r=e.id,o=e.name,void(window.confirm("Remove ".concat(o,"?"))&&p(r).then((function(){n(t.filter((function(e){return e.id!==r}))),a({message:"".concat(o," removed from phonebook."),type:"success"}),setTimeout((function(){return a(null)}),2e3)})).catch((function(e){n(t.filter((function(e){return e.id!==r}))),a({message:"Unable to remove ".concat(o," from phonebook."),type:"fail"}),setTimeout((function(){return a(null)}),2e3)})));var r,o}},"Remove"))}))},O=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(""),l=Object(c.a)(u,2),i=l[0],s=l[1],m=Object(a.useState)(""),d=Object(c.a)(m,2),p=d[0],b=d[1],O=Object(a.useState)(""),k=Object(c.a)(O,2),j=k[0],y=k[1],N=Object(a.useState)(null),C=Object(c.a)(N,2),S=C[0],T=C[1];return Object(a.useEffect)((function(){f().then((function(e){var t=[];e.data.map((function(e){return-1===n.map((function(e){return e.name})).indexOf(e.name)?t.push({id:e.id,name:e.name,number:e.number}):console.log("".concat(e.name," is already added to phonebook")),null})),o(n.concat(t))}))}),[]),r.a.createElement("div",null,r.a.createElement(h,{headline:"Phonebook"}),r.a.createElement(v,{error:S}),r.a.createElement(E,{filter:j,setFilter:y}),r.a.createElement(h,{headline:"Add new"}),r.a.createElement(g,{persons:n,setPersons:o,setError:T,newNumber:p,setNewNumber:b,newName:i,setNewName:s}),r.a.createElement(h,{headline:"Numbers"}),r.a.createElement(w,{persons:n,setPersons:o,setError:T,filter:j}))};u.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3b3392fd.chunk.js.map