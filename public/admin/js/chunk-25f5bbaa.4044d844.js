(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25f5bbaa"],{1489:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(t){t.preventDefault()}}},[n("label",{staticClass:"type-label",class:{required:"__none__"===t.viewOptions.date},attrs:{for:"spacing"}},[t._v(" "+t._s(t.$t("layouts.calendar.datetime"))+" ")]),n("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.datetime||"__none__",options:t.datetimeOptions,icon:"access_time"},on:{input:function(e){return t.setOption("datetime",e)}}}),n("label",{staticClass:"type-label",class:{required:"__none__"===t.viewOptions.datetime},attrs:{for:"spacing"}},[t._v(" "+t._s(t.$t("layouts.calendar.date"))+" ")]),n("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.date||"__none__",options:t.dateOptions,icon:"today"},on:{input:function(e){return t.setOption("date",e)}}}),n("label",{staticClass:"type-label",attrs:{for:"spacing"}},[t._v(" "+t._s(t.$t("layouts.calendar.time"))+" ")]),n("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.time||"__none__",options:t.timeOptions,icon:"schedule"},on:{input:function(e){return t.setOption("time",e)}}}),n("label",{staticClass:"type-label required",attrs:{for:"spacing"}},[t._v(" "+t._s(t.$t("layouts.calendar.title"))+" ")]),n("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.title||"__none__",options:t.textOptions,icon:"title"},on:{input:function(e){return t.setOption("title",e)}}}),n("label",{staticClass:"type-label",attrs:{for:"spacing"}},[t._v(" "+t._s(t.$t("layouts.calendar.color"))+" ")]),n("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.color||"__none__",options:t.colorOptions,icon:"color_lens"},on:{input:function(e){return t.setOption("color",e)}}})],1)},s=[],a=(n("a4d3"),n("4de4"),n("4160"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),o=n("c3ff"),r=n.n(o),c=n("2ef0");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={mixins:[r.a],data:function(){return{sortList:null}},computed:{textOptions:function(){var t=Object(c["mapValues"])(this.fields,(function(t){return"string"==t.type||"integer"==t.type?t.name:null}));return Object(c["pickBy"])(t,c["identity"])},dateOptions:function(){var t=u({__none__:"(".concat(this.$t("dont_show"),")")},Object(c["mapValues"])(this.fields,(function(t){return"date"==t.type?t.name:null})));return Object(c["pickBy"])(t,c["identity"])},datetimeOptions:function(){var t=u({__none__:"(".concat(this.$t("dont_show"),")")},Object(c["mapValues"])(this.fields,(function(t){return"datetime"==t.type?t.name:null})));return Object(c["pickBy"])(t,c["identity"])},timeOptions:function(){var t=u({__none__:"(".concat(this.$t("dont_show"),")")},Object(c["mapValues"])(this.fields,(function(t){return"time"==t.type?t.name:null})));return Object(c["pickBy"])(t,c["identity"])},colorOptions:function(){var t=u({__none__:"(".concat(this.$t("dont_show"),")")},Object(c["mapValues"])(this.fields,(function(t){return"string"==t.type?t.name:null})));return Object(c["pickBy"])(t,c["identity"])}},methods:{setOption:function(t,e){this.$emit("options",u({},this.viewOptions,Object(a["a"])({},t,e)))}}},d=p,f=(n("47fa"),n("2877")),_=Object(f["a"])(d,i,s,!1,null,"3ed13022",null);e["default"]=_.exports},"47fa":function(t,e,n){"use strict";var i=n("a50b"),s=n.n(i);s.a},a50b:function(t,e,n){},c3ff:function(t,e){t.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:()=>[]},viewOptions:{type:Object,default:()=>({})},viewQuery:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:()=>[]},link:{type:String,default:null},sortField:{type:String,default:null},collection:{type:String,default:null}}}}}]);
//# sourceMappingURL=chunk-25f5bbaa.4044d844.js.map