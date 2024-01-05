(function(o,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("xe-utils"),require("vxe-table"),require("element-plus")):typeof define=="function"&&define.amd?define(["exports","vue","xe-utils","vxe-table","element-plus"],t):(o=typeof globalThis<"u"?globalThis:o||self,t(o.table={},o.Vue,o.XEUtils,o.vxeTable,o.elementPlus))})(this,function(o,t,z,A,S){"use strict";const N="ui:width",F="ui:options",E={...{schema:{type:Object,required:!0},uiSchema:{type:Object,required:!1,default:()=>({})}},model:{type:Array,required:!0},showPager:{type:Boolean,required:!1,default:!0},showIndex:{type:Boolean,required:!1,default:!1},selectionType:{type:String,required:!1,default:""},pageInfo:{type:Object,required:!1,default:()=>({currentPage:0,pageSize:10,total:0})},rowBtnList:{type:Function,required:!1,default:null},tableLoading:{type:Boolean,required:!1,default:!1},optWidth:{type:String,required:!1,default:"150"},rowKey:{type:String,required:!1,default:"_X_ROW_KEY"}},x={...E,fields:{type:Array,required:!1}};function R(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!t.isVNode(e)}const v=(e,n)=>{const{type:f="default",key:g,flag:r,title:i}=e;if(r==="DEL"){const s={reference:()=>t.createVNode(S.ElButton,{type:"danger",link:!0},R(i)?i:{default:()=>[i]})};return t.createVNode(S.ElPopconfirm,{title:"是否确认删除该记录？","cancel-button-text":"取消","cancel-button-type":"text","confirm-button-text":"删除","confirm-button-type":"danger",onConfirm:()=>n(g)},s)}return t.createVNode(S.ElButton,{type:f,link:!0,onClick:()=>n(g)},R(i)?i:{default:()=>[i]})},j="ry-json-table",k="InnerOptColumn",b=t.defineComponent({name:j,props:E,setup(e,n){const f=t.computed(()=>({align:"center",columnConfig:{resizable:!0},loading:e.tableLoading})),g=t.computed(()=>({isHover:!0,useKey:!0,keyField:e.rowKey||"_X_ROW_KEY"})),r=t.ref(),i=()=>r.value;n.expose({getXTableRef:i});const s=a=>{if(e.pageInfo){const{pageInfo:d}=e;d.currentPage=a.currentPage,d.pageSize=a.pageSize}n.emit("page-change",a)},c=t.computed(()=>({...e.pageInfo})),V=()=>t.createVNode(t.resolveComponent("vxe-pager"),{layouts:["Total","Sizes","PrevPage","JumpNumber","NextPage","FullJump"],"current-page":c.value.currentPage,"onUpdate:current-page":a=>c.value.currentPage=a,"page-size":c.value.pageSize,"onUpdate:page-size":a=>c.value.pageSize=a,total:c.value.total,onPageChange:s},null),X=t.computed(()=>{const{schema:a,uiSchema:d,showIndex:P,selectionType:O}=e,u=[];O==="checkbox"&&u.push({type:"checkbox",width:50,fixed:"left"}),P&&u.push({type:"seq",width:50,fixed:"left",align:"center",title:"序号"});const H=({cellValue:p})=>z.toDateString(p,"yyyy-MM-dd HH:mm:ss");Object.keys(a.properties).forEach(p=>{const l=a.properties[p];l.prop=l.prop||p;const q=d[p]||{},T=q[F]||{},m={field:l.prop,title:l.description||l.prop,headerAlign:"center",align:"center",showOverflow:!0,...T};if(q[N]?m.width=q[N]:p.includes("Time")&&(m.width=200),n.slots[p]&&(m.slots={default:p}),l.format)switch(l.format){case"date-time":m.formatter=H;break}T.formatter&&typeof T.formatter=="function"?m.formatter=T.formatter:l.oneOf?m.formatter=({cellValue:y})=>{const h=l.oneOf.find(C=>C.const===y);return(h==null?void 0:h.title)||y}:l.anyOf&&(m.formatter=({cellValue:y})=>{let h=[];return typeof y=="string"?h=y.split(","):h=y,h.map(C=>{const B=l.anyOf.find(Y=>Y.const===C);return(B==null?void 0:B.title)||C}).join(",")}),u.push(m)});const{rowBtnList:U}=e;return U!==null&&u.push({width:e.optWidth,fixed:"right",align:"center",title:"操作",slots:{default:k}}),u}),K=({row:a})=>{const{rowBtnList:d}=e;let P=[];typeof d=="function"?P=d(a):P=d;const O=u=>{n.emit("row-btn-click",u,a)};return P.map(u=>v(u,O))},_=()=>{r.value&&n.emit("row-selected",r.value.getCheckboxRecords())},J={...n.slots,[k]:K,pager:e.showPager?V:null},W=t.computed(()=>e.model||[]);return()=>t.createVNode("div",{class:j},[t.createVNode(A.VxeGrid,t.mergeProps(n.attrs,{ref:r},f.value,{columns:X.value,data:W.value,height:"auto",rowConfig:g.value,onCheckboxChange:_,onCheckboxAll:_}),J)])}});b.install=e=>{e.component(b.name,b)};const w=t.defineComponent({name:"ry-pro-table",props:x,setup(e,n){const f=t.ref(),g=t.computed(()=>{if(!e.fields)return e.schema;const s={};return e.fields.forEach(c=>{e.schema.properties[c]&&(s[c]=e.schema.properties[c])}),{...e.schema,properties:s}}),r=t.computed(()=>{const s={...e};return delete s.fields,s}),i=()=>f.value&&f.value.getXTableRef();return n.expose({getXTableRef:i}),()=>t.createVNode(b,t.mergeProps({ref:f},r.value,{schema:g.value}),n.slots)}});w.install=e=>{e.component(w.name,w)};const M=e=>({onRowBtnClick:(r,i)=>{e.emit("row-btn-click",r,i)},onRowSelected:r=>{e.emit("row-selected",r)},onPageChange:r=>{e.emit("page-change",r)}}),D=[b,w],I=e=>{D.forEach(n=>{e.component(n.name,n)})},L={install:I};o.JsonTable=b,o.ProTable=w,o.basicTableProps=E,o.bindEvent=M,o.default=L,o.install=I,o.proTableProps=x,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
