(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-625cd580"],{"035b":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-many-to-many"},[!1===e.relationshipSetup?n("v-notice",{attrs:{color:"warning",icon:"warning"}},[e._v(" "+e._s(e.$t("relationship_not_setup"))+" ")]):null===e.initialValue?n("v-spinner"):[e.items&&e.items.length?n("div",{staticClass:"table"},[n("div",{staticClass:"header"},[n("div",{staticClass:"row"},[e.sortable?n("button",{staticClass:"sort-column",on:{click:e.toggleManualSort}},[n("v-icon",{attrs:{name:"sort",small:"",color:e.manualSortActive?"--action":"--blue-grey-300"}})],1):e._e(),e._l(e.visibleFields,(function(t){return n("button",{key:t.field,staticClass:"type-table-head",attrs:{type:"button"},on:{click:function(n){return e.changeSort(t.field)}}},[e._v(" "+e._s(e.$helpers.formatField(t.field,t.collection))+" "),e.sort.field===t.field?n("v-icon",{attrs:{name:e.sort.asc?"arrow_downward":"arrow_upward",size:16}}):e._e()],1)}))],2)]),n("draggable",{staticClass:"body",class:{dragging:e.dragging,readonly:e.readonly},attrs:{handle:".drag-handle",disabled:!e.sortable||!e.manualSortActive},on:{start:function(t){e.dragging=!0},end:function(t){e.dragging=!1}},model:{value:e.itemsSorted,callback:function(t){e.itemsSorted=t},expression:"itemsSorted"}},e._l(e.itemsSorted,(function(t){return n("div",{key:t[e.junctionRelatedKey][e.relatedPrimaryKeyField],staticClass:"row",on:{click:function(n){return e.startEdit(t[e.junctionPrimaryKey])}}},[e.sortable?n("div",{staticClass:"sort-column",class:{disabled:!e.manualSortActive}},[e.readonly?e._e():n("v-icon",{staticClass:"drag-handle",attrs:{name:"drag_handle"}})],1):e._e(),e._l(e.visibleFields,(function(i){return n("div",{key:i.field},[n("v-ext-display",{attrs:{"interface-type":i.interface,name:i.field,type:i.type,collection:i.collection,datatype:i.datatype,options:i.options,value:t[e.junctionRelatedKey][i.field],values:t[e.junctionRelatedKey]}})],1)})),e.readonly?e._e():n("button",{staticClass:"remove",on:{click:function(n){return n.stopPropagation(),e.deleteItem(t[e.junctionPrimaryKey])}}},[n("v-icon",{attrs:{name:"close"}})],1)],2)})),0)],1):n("v-notice",{attrs:{color:"gray-subdued",icon:"info"}},[e._v(" "+e._s(e.$t("no_items_selected"))+" ")]),e.readonly?e._e():n("div",{staticClass:"buttons"},[e.options.allow_create?n("v-button",{attrs:{type:"button",disabled:e.readonly},on:{click:e.startAddNewItem}},[n("v-icon",{attrs:{name:"add",left:""}}),e._v(" "+e._s(e.$t("add_new"))+" ")],1):e._e(),e.options.allow_select?n("v-button",{attrs:{type:"button",disabled:e.readonly},on:{click:function(t){e.selectExisting=!0}}},[n("v-icon",{attrs:{name:"playlist_add",left:""}}),e._v(" "+e._s(e.$t("select_existing"))+" ")],1):e._e()],1)],e.selectExisting?n("v-item-select",{attrs:{fields:e.visibleFieldNames,collection:e.relation.junction.collection_one.collection,filters:[],value:e.stagedSelection||e.selectionPrimaryKeys},on:{input:e.stageSelection,done:e.closeSelection,cancel:e.cancelSelection}}):e._e(),e.editItem?n("portal",{attrs:{to:"modal"}},[n("v-modal",{attrs:{title:e.addNew?e.$t("creating_item"):e.$t("editing_item"),buttons:{save:{text:e.$t("save"),color:"accent"}}},on:{close:e.closeEditItem,save:e.saveEditItem}},[n("div",{staticClass:"edit-modal-body"},[n("v-form",{attrs:{"new-item":"",fields:e.relation.junction.collection_one.fields,collection:e.relation.junction.collection_one.collection,"primary-key":e.editItem[e.junctionRelatedKey]&&e.editItem[e.junctionRelatedKey][e.relatedPrimaryKeyField]||"+",values:e.editItem[e.junctionRelatedKey]},on:{"stage-value":e.stageValue}})],1)])],1):e._e()],2)},r=[],a=(n("a4d3"),n("99af"),n("4de4"),n("7db0"),n("4160"),n("caad"),n("a15b"),n("d81d"),n("e439"),n("dbb4"),n("b64b"),n("ac1f"),n("2532"),n("1276"),n("2ca0"),n("498a"),n("159b"),n("2909")),l=(n("96cf"),n("1da1")),o=n("ade3"),c=n("8db2"),s=n.n(c),u=n("649d"),d=n("8dee"),f=n.n(d),m=n("2ef0");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={name:"InterfaceManyToMany",mixins:[s.a],data:function(){return{sort:{field:null,asc:!0},selectExisting:!1,editItem:!1,addNew:null,dragging:!1,items:null,loading:!1,error:null,stagedSelection:null,initialValue:null}},computed:{relationshipSetup:function(){return!!this.relation},visibleFields:function(){if(!1===this.relationSetup)return[];if(!this.options.fields)return[];var e;Array.isArray(this.options.fields)&&(e=this.options.fields.map((function(e){return e.trim()}))),e=this.options.fields.split(",").map((function(e){return e.trim()}));var t=this.relation.junction.collection_one.fields,n=Object(m["get"])(this.relation,"junction.field_one.field",null);return e.map((function(e){var i=t[e];return n&&e===n&&(i.readonly=!0),i}))},visibleFieldNames:function(){return this.visibleFields.map((function(e){return e.field}))},relatedPrimaryKeyField:function(){return Object(m["find"])(this.relation.junction.collection_one.fields,{primary_key:!0}).field},selectionPrimaryKeys:function(){var e=this;return this.items.map((function(t){return t[e.junctionRelatedKey][e.relatedPrimaryKeyField]}))},sortField:function(){var e=this.relation.collection_many.fields,t=Object(m["find"])(e,{type:"sort"});return t},sortable:function(){return!!this.sortField},manualSortActive:function(){return"$manual"===this.sort.field},junctionRelatedKey:function(){return this.relation.junction.field_many.field},junctionPrimaryKey:function(){return Object(m["find"])(this.relation.junction.collection_many.fields,{primary_key:!0}).field},itemsSorted:{get:function(){var e=this;return"$manual"===this.sort.field?Object(m["orderBy"])(Object(m["cloneDeep"])(this.items),(function(t){return t[e.sortField.field]}),this.sort.asc?"asc":"desc"):Object(m["orderBy"])(Object(m["cloneDeep"])(this.items),(function(t){return t[e.junctionRelatedKey][e.sort.field]}),this.sort.asc?"asc":"desc")},set:function(e){var t=this;this.items=e.map((function(e,n){return p({},e,Object(o["a"])({},t.sortField.field,n+1))}))}}},watch:{items:function(e,t){null!==t&&this.emitValue(e)}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.sortable?e.sort.field="$manual":e.visibleFields&&e.visibleFields.length>0&&(e.sort.field=e.visibleFields[0].field),t.next=3,e.getInitialValue();case 3:e.items=(Object(m["cloneDeep"])(e.initialValue)||[]).filter((function(t){return t[e.junctionRelatedKey]}));case 4:case"end":return t.stop()}}),t)})))()},methods:{getInitialValue:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[e.junctionPrimaryKey,e.relation.junction_field+".*"],t.next=3,e.$api.getItems(e.relation.collection_many.collection,{fields:n,filter:Object(o["a"])({},e.relation.field_many.field,e.primaryKey)});case 3:i=t.sent,e.initialValue=i.data;case 5:case"end":return t.stop()}}),t)})))()},changeSort:function(e){this.sort.field!==e?(this.sort.asc=!0,this.sort.field=e):this.sort.asc=!this.sort.asc},startAddNewItem:function(){var e;this.addNew=!0;var t=this.relation.junction.collection_one.fields,n=Object(m["mapValues"])(t,(function(e){return e.default_value})),i="$temp_"+f.a.generate();n.hasOwnProperty(this.relatedPrimaryKeyField)&&delete n[this.relatedPrimaryKeyField],this.items=[].concat(Object(a["a"])(this.items),[(e={},Object(o["a"])(e,this.junctionPrimaryKey,i),Object(o["a"])(e,this.junctionRelatedKey,n),e)]),this.startEdit(i)},stageValue:function(e){var t=e.field,n=e.value;this.$set(this.editItem[this.junctionRelatedKey],t,n)},toggleManualSort:function(){this.sort.field="$manual",this.sort.asc=!0},startEdit:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var i,r,a,l,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=Object(m["cloneDeep"])(t.items.find((function(n){return n[t.junctionPrimaryKey]===e}))),r="string"===typeof e&&e.startsWith("$temp_"),!1!==r){n.next=11;break}return a=t.relation.collection_many.collection,l=t.relation.collection_many.fields.id.field,n.next=7,t.$api.getItem(a,e,{fields:"*.*.*"});case 7:o=n.sent,c=o.data,i=Object(m["merge"])({},c,i),t.initialValue=t.initialValue.map((function(t){return Object(m["get"])(t,l)===e?Object(m["cloneDeep"])(i):t}));case 11:t.editItem=i;case 12:case"end":return n.stop()}}),n)})))()},saveEditItem:function(){var e=this,t=this.editItem[this.junctionPrimaryKey];this.items=this.items.map((function(n){return n[e.junctionPrimaryKey]===t?e.editItem:n})),this.editItem=null},closeEditItem:function(){this.addNew&&this.items.pop(),this.addNew=!1,this.editItem=null},stageSelection:function(e){this.stagedSelection=e},closeSelection:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,i,r,l,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.stagedSelection){t.next=3;break}return e.selectExisting=!1,t.abrupt("return");case 3:if(n=e.stagedSelection||[],e.items=e.items.filter((function(t){var i=t[e.junctionRelatedKey][e.relatedPrimaryKeyField];return n.includes(i)})),i=e.items.map((function(t){return t[e.junctionRelatedKey][e.relatedPrimaryKeyField]})),r=Object(m["difference"])(n,i),!(r.length>0)){t.next=14;break}return t.next=10,e.$api.getItem(e.relation.junction.collection_one.collection,r.join(","),{fields:"*.*.*"});case 10:l=t.sent,c=Array.isArray(l.data)?l.data:[l.data],s=c.map((function(t){var n,i="$temp_"+f.a.generate();return n={},Object(o["a"])(n,e.junctionPrimaryKey,i),Object(o["a"])(n,e.junctionRelatedKey,t),n})),e.items=[].concat(Object(a["a"])(e.items),Object(a["a"])(s));case 14:e.stagedSelection=null,e.selectExisting=!1;case 16:case"end":return t.stop()}}),t)})))()},cancelSelection:function(){this.stagedSelection=null,this.selectExisting=null},deleteItem:function(e){var t=this;this.items=this.items.filter((function(n){var i=n[t.junctionPrimaryKey];return i!==e}))},emitValue:function(e){var t=this;e=Object(m["cloneDeep"])(e);var n=Object(m["get"])(this.relation,"junction.field_one.field",null),i=e.map((function(e){var i=e[t.junctionPrimaryKey],r=t.initialValue.find((function(e){return e[t.junctionPrimaryKey]===i}));if(r){var a=Object(u["diff"])(r,e);if(Object.keys(a).length>0){var l,c=(l={},Object(o["a"])(l,t.junctionPrimaryKey,i),Object(o["a"])(l,t.junctionRelatedKey,Object(o["a"])({},t.relatedPrimaryKeyField,r[t.junctionRelatedKey][t.relatedPrimaryKeyField])),l);return n&&c[t.junctionRelatedKey].hasOwnProperty(n)&&delete c[t.junctionRelatedKey][n],Object(m["merge"])({},c,a)}return null}return"string"===typeof e[t.junctionPrimaryKey]&&e[t.junctionPrimaryKey].startsWith("$temp_")&&delete e[t.junctionPrimaryKey],e[t.junctionRelatedKey]&&e[t.junctionRelatedKey][t.relatedPrimaryKeyField]&&(e[t.junctionRelatedKey]=Object(o["a"])({},t.relatedPrimaryKeyField,e[t.junctionRelatedKey][t.relatedPrimaryKeyField])),e})).filter((function(e){return e})),r=this.initialValue.map((function(e){return e[t.junctionPrimaryKey]})),l=e.map((function(e){return e[t.junctionPrimaryKey]})),c=Object(m["difference"])(r,l),s=c.map((function(e){var n;return n={},Object(o["a"])(n,t.junctionPrimaryKey,e),Object(o["a"])(n,"$delete",!0),n}));this.$emit("input",[].concat(Object(a["a"])(i),Object(a["a"])(s)))}}},j=b,h=(n("e0c3"),n("2877")),v=Object(h["a"])(j,i,r,!1,null,"01a4894e",null);t["default"]=v.exports},"50fd":function(e,t,n){},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},e0c3:function(e,t,n){"use strict";var i=n("50fd"),r=n.n(i);r.a}}]);
//# sourceMappingURL=chunk-625cd580.b0baa922.js.map