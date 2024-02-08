(function(o,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("xe-utils"),require("vxe-table"),require("element-plus")):typeof define=="function"&&define.amd?define(["exports","vue","xe-utils","vxe-table","element-plus"],t):(o=typeof globalThis<"u"?globalThis:o||self,t(o.table={},o.Vue,o.XEUtils,o.vxeTable,o.elementPlus))})(this,function(o,t,F,j,S){"use strict";const _="ui:width",x="ui:options",C={...{schema:{type:Object,required:!0},uiSchema:{type:Object,required:!1,default:()=>({})}},model:{type:Array,required:!0},showPager:{type:Boolean,required:!1,default:!0},showIndex:{type:Boolean,required:!1,default:!1},selectionType:{type:String,required:!1,default:""},pageInfo:{type:Object,required:!1,default:()=>({currentPage:0,pageSize:10,total:0})},rowBtnList:{type:Function,required:!1,default:null},tableLoading:{type:Boolean,required:!1,default:!1},optWidth:{type:String,required:!1,default:"150"},rowKey:{type:String,required:!1,default:"_X_ROW_KEY"},columnWidth:{type:String,required:!1}},D={...C,fields:{type:Array,required:!1}};function L(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!t.isVNode(e)}const W=(e,n)=>{const{type:c="default",key:h,flag:r,title:l}=e;if(r==="DEL"){const f={reference:()=>t.createVNode(S.ElButton,{type:"danger",link:!0},L(l)?l:{default:()=>[l]})};return t.createVNode(S.ElPopconfirm,{title:"是否确认删除该记录？","cancel-button-text":"取消","cancel-button-type":"text","confirm-button-text":"删除","confirm-button-type":"danger",onConfirm:()=>n(h)},f)}return t.createVNode(S.ElButton,{type:c,link:!0,onClick:()=>n(h)},L(l)?l:{default:()=>[l]})};function k(e){let n=0;return Array.from(e).forEach(c=>{c.charCodeAt(0)>255?n+=2:n+=1}),n}const N="ry-json-table",A="InnerOptColumn",b=t.defineComponent({name:N,props:C,setup(e,n){const c=t.computed(()=>({align:"center",columnConfig:{resizable:!0},loading:e.tableLoading})),h=t.computed(()=>({isHover:!0,useKey:!0,keyField:e.rowKey||"_X_ROW_KEY"})),r=t.ref(),l=()=>r.value;n.expose({getXTableRef:l});const f=i=>{if(e.pageInfo){const{pageInfo:g}=e;g.currentPage=i.currentPage,g.pageSize=i.pageSize}n.emit("page-change",i)},d=t.computed(()=>({...e.pageInfo})),V=()=>t.createVNode(t.resolveComponent("vxe-pager"),{layouts:["Total","Sizes","PrevPage","JumpNumber","NextPage","FullJump"],"current-page":d.value.currentPage,"onUpdate:current-page":i=>d.value.currentPage=i,"page-size":d.value.pageSize,"onUpdate:page-size":i=>d.value.pageSize=i,total:d.value.total,onPageChange:f},null),X=t.computed(()=>{const{schema:i,uiSchema:g,showIndex:w,selectionType:O}=e,p=[];O==="checkbox"&&p.push({type:"checkbox",width:50,fixed:"left"}),w&&p.push({type:"seq",width:50,fixed:"left",align:"center",title:"序号"});const Y=({cellValue:m})=>F.toDateString(m,"yyyy-MM-dd HH:mm:ss");Object.keys(i.properties).forEach(m=>{const a=i.properties[m];a.prop=a.prop||m;const B=g[m]||{},E=B[x]||{},u={field:a.prop,title:a.description||a.prop,headerAlign:"center",align:"center",showOverflow:!0,...E};if(B[_])u.width=B[_];else if(e.columnWidth==="auto"){if(a.description){let s=k(a.description)*20;s<100&&(s=100),u.minWidth=s<100?100:s}}else e.columnWidth&&(m.includes("Time")||m.includes("Date")?u.width=200:u.width=e.columnWidth);if(n.slots[m]&&(u.slots={default:m}),a.format)switch(a.format){case"date-time":u.formatter=Y;break}E.formatter&&typeof E.formatter=="function"?u.formatter=E.formatter:a.oneOf?u.formatter=({cellValue:s})=>{const y=a.oneOf.find(P=>P.const===s);return(y==null?void 0:y.title)||s}:a.anyOf&&(u.formatter=({cellValue:s})=>{let y=[];return typeof s=="string"?y=s.split(","):y=s,y.map(P=>{const q=a.anyOf.find($=>$.const===P);return(q==null?void 0:q.title)||P}).join(",")}),p.push(u)});const{rowBtnList:G}=e;return G!==null&&p.push({width:e.optWidth,fixed:"right",align:"center",title:"操作",slots:{default:A}}),p}),K=({row:i})=>{const{rowBtnList:g}=e;let w=[];typeof g=="function"?w=g(i):w=g;const O=p=>{n.emit("row-btn-click",p,i)};return w.map(p=>W(p,O))},I=()=>{r.value&&n.emit("row-selected",r.value.getCheckboxRecords())},J={...n.slots,[A]:K,pager:e.showPager?V:null},H=t.computed(()=>e.model||[]);return()=>t.createVNode("div",{class:N},[t.createVNode(j.VxeGrid,t.mergeProps(n.attrs,{ref:r},c.value,{columns:X.value,data:H.value,height:"auto",rowConfig:h.value,onCheckboxChange:I,onCheckboxAll:I}),J)])}});b.install=e=>{e.component(b.name,b)};const T=t.defineComponent({name:"ry-pro-table",props:D,setup(e,n){const c=t.ref(),h=t.computed(()=>{if(!e.fields)return e.schema;const f={};return e.fields.forEach(d=>{e.schema.properties[d]&&(f[d]=e.schema.properties[d])}),{...e.schema,properties:f}}),r=t.computed(()=>{const f={...e};return delete f.fields,f}),l=()=>c.value&&c.value.getXTableRef();return n.expose({getXTableRef:l}),()=>t.createVNode(b,t.mergeProps({ref:c},r.value,{schema:h.value}),n.slots)}});T.install=e=>{e.component(T.name,T)};const z=e=>({onRowBtnClick:(r,l)=>{e.emit("row-btn-click",r,l)},onRowSelected:r=>{e.emit("row-selected",r)},onPageChange:r=>{e.emit("page-change",r)}}),M=[{key:"DEFAULT_EDIT",title:"编辑",type:"primary",flag:"EDIT"},{key:"DEFAULT_DEL",title:"删除",type:"danger",flag:"DEL"}],v=[b,T],R=e=>{v.forEach(n=>{e.component(n.name,n)})},U={install:R};o.DEFAULT_ROW_BTN_LIST=M,o.JsonTable=b,o.ProTable=T,o.basicTableProps=C,o.bindEvent=z,o.default=U,o.install=R,o.proTableProps=D,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
