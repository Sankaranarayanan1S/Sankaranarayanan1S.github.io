(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{10:function(e,a,t){e.exports={radio:"radio_radio__1CZkE",radio__input:"radio_radio__input__2GaTO",radio__label:"radio_radio__label__1IWKh"}},13:function(e,a,t){e.exports={circle:"card_circle__kf9WT",instructor_name:"card_instructor_name__3jiyu",card:"card_card__2RXxP",footer:"card_footer__snRIA"}},33:function(e,a,t){e.exports={search:"sidebar_search__fW8s7"}},34:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var c=t(2),r=t.n(c),n=t(16),s=t.n(n),l=t(11),o=t(35),i=t(18),d=t(23),u=function(e){return e.appReducer},j=Object(d.a)([u,function(e){var a;return null===e||void 0===e||null===(a=e.appReducer)||void 0===a?void 0:a.selectedCategory}],(function(e,a){var t=e.responseData,c=a;return"all"===c?t:t.filter((function(e){return(null===e||void 0===e?void 0:e.category.toLowerCase())===c}))})),b=Object(d.a)(u,(function(e){return e.availableOptions||[]})),O=t(6),p=t(19),h=t(13),v=t.n(h),_=t(1),m=function(e){var a,t=Date.parse(e.start_date),c=Date.parse(e.end_date),r=Date.now(),n=c/6048e5-t/6048e5;r<t&&(a="Pre-registration"),r>c&&(a="Completed"),r>t&&r<c&&(a="Ongoing");var s=new Date(t).toLocaleString("en-US",{month:"long",day:"numeric"}),l=new Date(c).toLocaleString("en-US",{month:"long",day:"numeric"});return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"col",children:Object(_.jsxs)("div",{className:"card h-100 ".concat(v.a.card),children:[Object(_.jsxs)("div",{className:"row p-2",children:[Object(_.jsx)("div",{className:"col-2",children:Object(_.jsx)("div",{className:"rounded-circle ".concat(v.a.circle)})}),Object(_.jsxs)("div",{className:"col-10",children:[Object(_.jsx)("b",{className:"card-title",children:e.title}),Object(_.jsx)("p",{className:v.a.instructor_name,children:Object(_.jsx)("b",{children:e.instructor_name})})]})]}),Object(_.jsxs)("div",{className:"row p-2",children:[Object(_.jsx)("div",{className:"col-2",children:Object(_.jsx)("i",{className:"material-icons",style:{width:24},children:"info_outlined"})}),Object(_.jsx)("div",{className:"col-10",children:Object(_.jsx)("p",{className:"card-text",dangerouslySetInnerHTML:{__html:e.description}})})]}),Object(_.jsxs)("div",{className:"row p-2",children:[Object(_.jsx)("div",{className:"col-2 ",children:Object(_.jsx)("i",{className:"material-icons",children:"date_range"})}),Object(_.jsx)("div",{className:"col-10",children:Object(_.jsx)("p",{className:v.a.footer,children:Object(_.jsxs)("b",{children:[a&&a,Object(_.jsx)("br",{}),s," - ",l,Object(_.jsx)("br",{}),Object(_.jsxs)("span",{children:[n," week course, ",e.estimated_workload]})]})})})]})]})})})},x=t(10),f=t.n(x);function C(e){var a=e.name,t=e.selectedCategory,c=e.onChange;return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsxs)("div",{className:f.a.radio,children:[Object(_.jsx)("input",{type:"radio",id:a,name:"Course_category",value:a,checked:(null===a||void 0===a?void 0:a.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase()),onChange:c,className:f.a.radio__input}),Object(_.jsxs)("label",{htmlFor:a,className:f.a.radio__label,children:[" ",a," "]})]}),Object(_.jsx)("br",{})]})}var g=t(33),E=t.n(g);function y(e){var a=function(a){var t;null===e||void 0===e||null===(t=e.onCategoryChange)||void 0===t||t.call(e,String(a.target.value).toLowerCase())};return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsx)("p",{children:Object(_.jsx)("b",{children:"Search for Keyword"})}),Object(_.jsx)("input",{className:E.a.search,type:"text",placeholder:"Filter Courses","aria-label":"Search",onChange:e.onSearchHandler}),Object(_.jsx)("p",{className:"pt-3",children:Object(_.jsx)("b",{children:"categories"})}),Object(_.jsxs)("div",{className:f.a.radio,children:[Object(_.jsx)("input",{type:"radio",id:"all",name:"Course_category",value:"All",checked:"all"===e.selectedCategory,onChange:a,className:f.a.radio__input}),Object(_.jsx)("label",{htmlFor:"all",className:f.a.radio__label,children:"All"})]}),Object(_.jsx)("br",{}),e.availableOptions&&e.availableOptions.map((function(t,c){return Object(_.jsx)(C,{name:t,selectedCategory:e.selectedCategory,onChange:a},c)}))]})}var N=Object(i.b)((function(e){var a;return{selectedCategory:null===e||void 0===e||null===(a=e.appReducer)||void 0===a?void 0:a.selectedCategory,resultList:j(e),availableOptions:b(e)}}),(function(e){return{invokeAPI:function(){return e({type:"INVOKE_CATEGORY_API"})},onCategoryChange:function(a){return e(function(e){return{type:"SELECTED_CATEGORY",payload:e}}(a))}}}))((function(e){var a=e.invokeAPI,t=Object(c.useState)([]),r=Object(p.a)(t,2),n=r[0],s=r[1],l=n.length;return Object(c.useEffect)((function(){s(e.resultList)}),[e.resultList]),Object(c.useEffect)((function(){a()}),[a]),Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"row my-3",children:[Object(_.jsx)("div",{className:"col-sm-3",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsx)(y,Object(O.a)(Object(O.a)({},e),{},{onSearchHandler:function(a){var t=a.target.value.toLowerCase();if(t){var c,r=null===(c=e.resultList)||void 0===c?void 0:c.filter((function(e){var a,c;return(null===e||void 0===e||null===(a=e.title)||void 0===a?void 0:a.toLowerCase().includes(t))||(null===e||void 0===e||null===(c=e.instructor_name)||void 0===c?void 0:c.toLowerCase().includes(t))}));s(r)}else s(e.resultList)}}))})}),Object(_.jsx)("div",{className:"col-sm-9 px-0",children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsxs)("p",{children:[l," Courses Available"]}),Object(_.jsx)("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4",children:n.map((function(e,a){return Object(c.createElement)(m,Object(O.a)(Object(O.a)({},e),{},{key:a}))}))})]})})]})})}));var w=function(){return Object(_.jsx)(N,{})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,65)).then((function(a){var t=a.getCLS,c=a.getFID,r=a.getFCP,n=a.getLCP,s=a.getTTFB;t(e),c(e),r(e),n(e),s(e)}))},L={responseData:[]},R=t(12),k=t.n(R),D=t(9),T=t(24),I=t.n(T),A=function(){return I.a.get("https://iit-madras-e9252-default-rtdb.asia-southeast1.firebasedatabase.app/allCourses.json")},P=function(){return I.a.get("https://iit-madras-e9252-default-rtdb.asia-southeast1.firebasedatabase.app/allCategories.json")},F=k.a.mark(Y),G=k.a.mark(K),V=k.a.mark(J);function Y(e){var a,t,c,r,n,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(D.a)([Object(D.b)(P),Object(D.b)(A)]);case 3:if(a=e.sent,t=Object(p.a)(a,2),c=t[0],r=t[1],!c.data.payload){e.next=11;break}return n=JSON.parse(c.data.payload),e.next=11,Object(D.c)({type:"CATEGORY_RESPONSE_RECEIVED",payload:n});case 11:if(!r.data.payload){e.next=17;break}return s=JSON.parse(r.data.payload),e.next=15,Object(D.c)({type:"RESPONSE_RECEIVED",payload:s});case 15:return e.next=17,Object(D.c)({type:"SELECTED_CATEGORY",payload:"all"});case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),F,null,[[0,19]])}function K(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)("INVOKE_CATEGORY_API",Y);case 2:case"end":return e.stop()}}),G)}function J(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([K()]);case 2:case"end":return e.stop()}}),V)}var B=t(34),H=t.n(B),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,U=Object(l.b)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"action":return Object(O.a)({},e);case"SAMPLE_BTN_CLICK":return Object(O.a)(Object(O.a)({},e),{},{btnClickValue:a.payload});case"RESPONSE_RECEIVED":return Object(O.a)(Object(O.a)({},e),{},{responseData:a.payload});case"SELECTED_CATEGORY":return Object(O.a)(Object(O.a)({},e),{},{selectedCategory:a.payload});case"CATEGORY_RESPONSE_RECEIVED":return Object(O.a)(Object(O.a)({},e),{},{availableOptions:a.payload});default:return e}}}),W=Object(o.a)(),X=Object(l.d)(U,M(Object(l.a)(W)));W.run(J),s.a.render(Object(_.jsx)(i.a,{store:X,children:Object(_.jsx)(w,{className:H.a.body})}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.ddb9c56e.chunk.js.map