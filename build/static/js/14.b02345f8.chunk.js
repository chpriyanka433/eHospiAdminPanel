(this.webpackJsonpkickrtechnology=this.webpackJsonpkickrtechnology||[]).push([[14],{537:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(538);function c(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},538:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},540:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(537);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,c,l=[],a=!0,i=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(l.push(r.value),!e||l.length!==e);a=!0);}catch(o){i=!0,c=o}finally{try{a||null==n.return||n.return()}finally{if(i)throw c}}return l}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},543:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(538);var c=n(537);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},545:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var r=63&n[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e}},627:function(t){t.exports=JSON.parse('[{"id":1,"Bill_No":"B0 ","Bill_Date":"02/21/2017","Patient":"Aman ","Doctor":"Dr Aryan pandey","Amount":"2000"},{"id":2,"Bill_No":"B1 ","Bill_Date":"diwesh","Patient":"Raju ","Doctor":"Dr. Raju Pandey","Amount":"3000"}]')},651:function(t,e,n){"use strict";n.r(e);var r=n(543),c=n(45),l=n(540),a=n(2),i=(n(541),n(542),n(159)),o=n(627),s=n(25),d=function(t){var e=t.contact,n=t.handleEditClick,r=t.handleDeleteClick;return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.Bill_No}),Object(s.jsx)("td",{children:e.Bill_Date}),Object(s.jsx)("td",{children:e.Patient}),Object(s.jsx)("td",{children:e.Doctor}),Object(s.jsx)("td",{children:e.Amount}),Object(s.jsx)("td",{children:Object(s.jsx)("span",{class:"badge badge-success",children:"Approved"})}),Object(s.jsxs)("td",{children:[Object(s.jsx)("button",{className:"btn btn-sm px-0 py-0 btn-primary ",onClick:function(t){return n(t,e)},children:Object(s.jsx)("i",{class:"fas fa-edit"})}),Object(s.jsx)("button",{className:"btn-danger btn-sm px-0 py-0 btn btn-sm",onClick:function(){return r(e.id)},children:Object(s.jsx)("i",{class:"fas fa-trash"})})]})]})},u=function(t){var e=t.editFormData,n=t.handleEditFormChange,r=t.handleCancelClick;return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("input",{type:"text",required:"required",placeholder:"Enter Bill_no",name:"Bill_No",value:e.Bill_No,onChange:n})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{type:"text",required:"required",placeholder:"Bill_Date",name:"Bill_Date",value:e.Bill_Date,onChange:n})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{type:"text",required:"required",placeholder:"Patient",value:e.Patient,onChange:n})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{type:"text",required:"required",placeholder:"Doctor",name:"Doctor",value:e.Doctor,onChange:n})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{type:"text",required:"required",placeholder:"Amount",name:"Amount",value:e.Amount,onChange:n})}),Object(s.jsxs)("td",{children:[Object(s.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Save"}),Object(s.jsx)("button",{className:"btn btn-danger",type:"button",onClick:r,children:"Cancel"})]})]})};n(545),e.default=function(){var t=Object(a.useState)(o),e=Object(l.a)(t,2),n=e[0],j=e[1],b=Object(a.useState)({Bill_No:"",Bill_Date:"",Patient:"",Doctor:"",Amount:""}),h=Object(l.a)(b,2),O=(h[0],h[1],Object(a.useState)({Bill_No:"",Bill_Date:"",Patient:"",Doctor:"",Amount:""})),m=Object(l.a)(O,2),x=m[0],f=m[1],p=Object(a.useState)(null),y=Object(l.a)(p,2),v=y[0],D=y[1],g=function(t){t.preventDefault();var e=t.target.getAttribute("name"),n=t.target.value,r=Object(c.a)({},x);r[e]=n,f(r)},A=function(t,e){t.preventDefault(),D(e.id);var n={Bill_No:e.Bill_No,Bill_Date:e.Bill_Date,Patient:e.Patient,Doctor:e.Doctor,Amount:e.Amount};f(n)},B=function(){D(null)},_=function(t){var e=Object(r.a)(n),c=n.findIndex((function(e){return e.id===t}));e.splice(c,1),j(e)};return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{children:Object(s.jsxs)("section",{class:"content",children:[Object(s.jsxs)("div",{class:"container-fluid",children:[Object(s.jsxs)("div",{class:"block-header",children:[Object(s.jsx)("h2",{children:"Payments"}),Object(s.jsx)("small",{class:"text-muted",children:"Welcome to Payments"})]}),Object(s.jsx)("div",{class:"row clearfix",children:Object(s.jsx)("div",{class:"col-lg-12 col-md-12 col-sm-12",children:Object(s.jsxs)("div",{class:"card",children:[Object(s.jsxs)("div",{class:"header",children:[Object(s.jsx)("h2",{children:"Hospital Payments"}),Object(s.jsxs)("form",{class:"form-inline d-flex my-2 my-lg-0",children:[Object(s.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(s.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]}),Object(s.jsx)("div",{class:"body table-responsive",children:Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault();var e={id:v,Bill_No:x.Bill_No,Bill_Date:x.Bill_Date,Patient:x.Doctor,Doctor:x.Doctor,Amount:x.Amount},c=Object(r.a)(n);c[n.findIndex((function(t){return t.id===v}))]=e,j(c),D(null)},children:Object(s.jsxs)("table",{class:"table table-bordered table-striped table-hover js-basic-example dataTable",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Bill No"}),Object(s.jsx)("th",{children:"Bill Date"}),Object(s.jsx)("th",{children:"Patient"}),Object(s.jsx)("th",{children:"Doctor"}),Object(s.jsx)("th",{children:"Amount"}),Object(s.jsx)("th",{children:"status"}),Object(s.jsx)("th",{children:"change"})]})}),Object(s.jsx)("tfoot",{}),Object(s.jsx)("tbody",{children:n.map((function(t){return Object(s.jsx)(a.Fragment,{children:v===t.id?Object(s.jsx)(u,{editFormData:x,handleEditFormChange:g,handleCancelClick:B}):Object(s.jsx)(d,{contact:t,handleEditClick:A,handleDeleteClick:_})})}))})]})})})]})})})]}),Object(s.jsx)("div",{className:"row clearfix",children:Object(s.jsx)("div",{className:"col-sm-12 text-center",children:Object(s.jsx)(i.b,{to:"Add payment",children:Object(s.jsx)("a",{className:"btn btn-raised g-bg-cyan",children:"Add payment"})})})})]})})})}}}]);
//# sourceMappingURL=14.b02345f8.chunk.js.map