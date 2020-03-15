(this["webpackJsonpsd-01-week16-react-redux-starwars-datatable-filters"]=this["webpackJsonpsd-01-week16-react-redux-starwars-datatable-filters"]||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),u=n.n(r),c=n(12),l=n.n(c),i=(n(30),n(4)),o=n(5),s=n(7),m=n(6),p=n(8),d=(n(31),n(1)),f=n(9),v=[{name:""}],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_PLANETS":return e;case"RECEIVE_PLANETS":return t.planets;default:return e}},h=function(){return function(e){return e({type:"REQUEST_PLANETS"}),fetch("https://swapi.co/api/planets").then((function(e){return e.json()})).then((function(t){e({type:"RECEIVE_PLANETS",planets:t.results})}))}};function b(e){return e.split("_").map((function(e){return"".concat(e[0].toUpperCase()).concat(e.substr(1))})).join(" ")}function j(e,t,n,a){return""===a||""===t?e:e.filter((function(e){return!("unknown"===e[t])&&function(e,t,n){switch(n){case">":return e>t;case"<":return e<t;case"===":return e===t;default:return!1}}(Number(e[t]),Number(a),n)}))}var O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getData)()}},{key:"filterData",value:function(){for(var e=this.props,t=e.data,n=e.name,a=e.arrayColumns,r=t,u=0;u<a.length;u+=1)r=j(r,this.props["valueSelectedColumn".concat(u+1)],this.props["valueSelectedComparison".concat(u+1)],this.props["valueNumber".concat(u+1)]);return function(e,t){var n=e.filter((function(e){return e.name.includes(t)}));return 0===n.length?[{}]:n}(r,n)}},{key:"render",value:function(){var e=this.filterData(),t=Object.keys(e[0]),n=t.indexOf("residents");return t=t.slice(0,n),u.a.createElement("div",null,u.a.createElement("table",null,u.a.createElement("thead",null,u.a.createElement("tr",null,t.map((function(e){return u.a.createElement("th",{key:e},b(e))})))),u.a.createElement("tbody",null,e.map((function(e){var t=Object.values(e);return t=t.slice(0,n),u.a.createElement("tr",{key:e.name},t.map((function(e){return u.a.createElement("td",{key:e},e)})))})))))}}]),t}(r.Component),C=Object(a.b)((function(e){var t=e.data,n=e.filters[0].name,a=e.filters.slice(1).map((function(e){return e.numericValues.column})),r=e.filters.slice(1).reduce((function(e,t,n){var a;return Object(f.a)({},e,(a={},Object(d.a)(a,"valueSelectedColumn".concat(n+1),t.numericValues.column),Object(d.a)(a,"valueSelectedComparison".concat(n+1),t.numericValues.comparison),Object(d.a)(a,"valueNumber".concat(n+1),t.numericValues.value),a))}),{});return Object(f.a)({},r,{data:t,name:n,arrayColumns:a})}),(function(e){return{getData:function(){return e(h())}}}))(O),y=n(19),g=[{name:""},{numericValues:{column:"",comparison:">",value:""}}],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME_FILTER":return[{name:t.value}].concat(Object(y.a)(e.slice(1)));case"CHANGE_NUMERIC_VALUES_FILTERS":return e.splice(t.id,1,{numericValues:Object(f.a)({},e[t.id].numericValues,Object(d.a)({},t.name,t.value))}),e.concat(t.id===e.length-1&&t.id<5?[{numericValues:{column:"",comparison:">",value:""}}]:[]);case"DELETE_NUMERIC_VALUES_FILTERS":return e.filter((function(e,n){return t.id!==n}));default:return e}},S=function(e){return{type:"CHANGE_NAME_FILTER",value:e.target.value}},_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.valueInput,n=e.handleChange;return u.a.createElement("div",{className:"filter"},u.a.createElement("input",{placeholder:"Search by name",value:t,onChange:n}))}}]),t}(r.Component),k=Object(a.b)((function(e){return{valueInput:e.filters[0].name}}),(function(e){return{handleChange:function(t){e(S(t))}}}))(_),V=function(e){var t=e.target,n=t.value,a=t.name,r=e.target.parentNode.id;return{type:"CHANGE_NUMERIC_VALUES_FILTERS",value:n,name:a,id:Number(r)}},L=function(e){var t=e.target.parentNode.id;return{type:"DELETE_NUMERIC_VALUES_FILTERS",id:Number(t)}};function A(e){return e.every((function(t,n){return""!==t||n===e.length-1}))}var I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"addFilter",value:function(e){var t=this.props,n=t.arrayColumns,a=t.handleChange,r=t.handleClick,c=n.slice(0,e-1),l=["population","orbital_period","diameter","rotation_period","surface_water"].filter((function(e){return!c.includes(e)}));return u.a.createElement("div",{id:e,className:"filter",key:e},u.a.createElement("select",{name:"column",onChange:a,value:this.props["valueSelectedColumn".concat(e)]},u.a.createElement("option",{value:"",disabled:!0},"Select column"),l.map((function(e){return u.a.createElement("option",{key:e,value:e},b(e))}))),u.a.createElement("select",{name:"comparison",onChange:a,value:this.props["valueSelectedComparison".concat(e)]},u.a.createElement("option",{value:">"},"greater than"),u.a.createElement("option",{value:"<"},"less than"),u.a.createElement("option",{value:"==="},"equal to")),u.a.createElement("input",{type:"number",placeholder:"Enter a number",name:"value",onChange:a,value:this.props["valueNumber".concat(e)]}),u.a.createElement("button",{type:"button",onClick:r},"X"))}},{key:"addMoreAndMoreFilters",value:function(){var e,t=this,n=this.props.arrayValues,a=this.props.arrayColumns;if(A(n)&&A(a))e=u.a.createElement("div",null,n.map((function(e,n){return t.addFilter(n+1,e)})));else{var r=n.slice(0,n.length-1);e=u.a.createElement("div",null,r.map((function(e,n){return t.addFilter(n+1)})))}return e}},{key:"render",value:function(){return u.a.createElement("div",null,this.addMoreAndMoreFilters())}}]),t}(r.Component),R=Object(a.b)((function(e){var t=e.filters.slice(1).reduce((function(e,t,n){var a;return Object(f.a)({},e,(a={},Object(d.a)(a,"valueSelectedColumn".concat(n+1),t.numericValues.column),Object(d.a)(a,"valueSelectedComparison".concat(n+1),t.numericValues.comparison),Object(d.a)(a,"valueNumber".concat(n+1),t.numericValues.value),a))}),{}),n=e.filters.slice(1).map((function(e){return e.numericValues.value})),a=e.filters.slice(1).map((function(e){return e.numericValues.column}));return Object(f.a)({},t,{arrayValues:n,arrayColumns:a})}),(function(e){return{handleChange:function(t){e(V(t))},handleClick:function(t){e(L(t))}}}))(I),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.isLoading;return u.a.createElement("div",{className:"App"},u.a.createElement("h1",null,"StarWars Datatable with Filters"),e&&"Loading...",!e&&u.a.createElement(k,null),!e&&u.a.createElement(R,null),u.a.createElement(C,null))}}]),t}(r.Component),w=Object(a.b)((function(e){return{isLoading:e.data.length<=1}}))(T),F=n(10),M=n(18),U=Object(F.c)({data:E,filters:N}),D=Object(F.d)(U,Object(F.a)(M.a));l.a.render(u.a.createElement(a.a,{store:D},u.a.createElement(w,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.2e1050c7.chunk.js.map