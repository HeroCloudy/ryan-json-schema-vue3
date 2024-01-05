import { createVNode as h, isVNode as W, defineComponent as k, computed as m, ref as I, mergeProps as z, resolveComponent as H } from "vue";
import J from "xe-utils";
import { VxeGrid as U } from "vxe-table";
import { ElPopconfirm as Y, ElButton as T } from "element-plus";
const q = "ui:width", G = "ui:options", $ = {
  schema: {
    type: Object,
    required: !0
  },
  uiSchema: {
    type: Object,
    required: !1,
    default: () => ({})
  }
}, F = {
  ...$,
  model: {
    type: Array,
    required: !0
  },
  showPager: {
    type: Boolean,
    required: !1,
    default: !0
  },
  showIndex: {
    type: Boolean,
    required: !1,
    default: !1
  },
  selectionType: {
    type: String,
    required: !1,
    default: ""
  },
  pageInfo: {
    type: Object,
    required: !1,
    default: () => ({
      currentPage: 0,
      pageSize: 10,
      total: 0
    })
  },
  rowBtnList: {
    type: Function,
    required: !1,
    default: null
  },
  tableLoading: {
    type: Boolean,
    required: !1,
    default: !1
  },
  optWidth: {
    type: String,
    required: !1,
    default: "150"
  },
  rowKey: {
    type: String,
    required: !1,
    default: "_X_ROW_KEY"
  }
}, Q = {
  ...F,
  fields: {
    type: Array,
    required: !1
  }
};
function x(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !W(e);
}
const V = (e, t) => {
  const {
    type: s = "default",
    key: p,
    flag: n,
    title: r
  } = e;
  return n === "DEL" ? h(Y, {
    title: "是否确认删除该记录？",
    "cancel-button-text": "取消",
    "cancel-button-type": "text",
    "confirm-button-text": "删除",
    "confirm-button-type": "danger",
    onConfirm: () => t(p)
  }, {
    reference: () => h(T, {
      type: "danger",
      link: !0
    }, x(r) ? r : {
      default: () => [r]
    })
  }) : h(T, {
    type: s,
    link: !0,
    onClick: () => t(p)
  }, x(r) ? r : {
    default: () => [r]
  });
}, R = "ry-json-table", j = "InnerOptColumn", w = /* @__PURE__ */ k({
  name: R,
  props: F,
  setup(e, t) {
    const s = m(() => ({
      align: "center",
      columnConfig: {
        resizable: !0
      },
      loading: e.tableLoading
    })), p = m(() => ({
      isHover: !0,
      useKey: !0,
      keyField: e.rowKey || "_X_ROW_KEY"
    })), n = I(), r = () => n.value;
    t.expose({
      getXTableRef: r
    });
    const u = (o) => {
      if (e.pageInfo) {
        const {
          pageInfo: c
        } = e;
        c.currentPage = o.currentPage, c.pageSize = o.pageSize;
      }
      t.emit("page-change", o);
    }, i = m(() => ({
      ...e.pageInfo
    })), A = () => h(H("vxe-pager"), {
      layouts: [
        "Total",
        "Sizes",
        // 'PrevJump',
        "PrevPage",
        "JumpNumber",
        "NextPage",
        // 'NextJump',
        "FullJump"
        // 'Number',
        // 'PageCount'
      ],
      "current-page": i.value.currentPage,
      "onUpdate:current-page": (o) => i.value.currentPage = o,
      "page-size": i.value.pageSize,
      "onUpdate:page-size": (o) => i.value.pageSize = o,
      total: i.value.total,
      onPageChange: u
    }, null), _ = m(() => {
      const {
        schema: o,
        uiSchema: c,
        showIndex: b,
        selectionType: S
      } = e, l = [];
      S === "checkbox" && l.push({
        type: "checkbox",
        width: 50,
        fixed: "left"
      }), b && l.push({
        type: "seq",
        width: 50,
        fixed: "left",
        align: "center",
        title: "序号"
      });
      const X = ({
        cellValue: f
      }) => J.toDateString(f, "yyyy-MM-dd HH:mm:ss");
      Object.keys(o.properties).forEach((f) => {
        const a = o.properties[f];
        a.prop = a.prop || f;
        const O = c[f] || {}, P = O[G] || {}, d = {
          field: a.prop,
          title: a.description || a.prop,
          headerAlign: "center",
          align: "center",
          showOverflow: !0,
          ...P
        };
        if (O[q] ? d.width = O[q] : f.includes("Time") && (d.width = 200), t.slots[f] && (d.slots = {
          default: f
        }), a.format)
          switch (a.format) {
            case "date-time":
              d.formatter = X;
              break;
          }
        P.formatter && typeof P.formatter == "function" ? d.formatter = P.formatter : a.oneOf ? d.formatter = ({
          cellValue: y
        }) => {
          const g = a.oneOf.find((v) => v.const === y);
          return (g == null ? void 0 : g.title) || y;
        } : a.anyOf && (d.formatter = ({
          cellValue: y
        }) => {
          let g = [];
          return typeof y == "string" ? g = y.split(",") : g = y, g.map((v) => {
            const B = a.anyOf.find((M) => M.const === v);
            return (B == null ? void 0 : B.title) || v;
          }).join(",");
        }), l.push(d);
      });
      const {
        rowBtnList: K
      } = e;
      return K !== null && l.push({
        width: e.optWidth,
        fixed: "right",
        align: "center",
        title: "操作",
        slots: {
          default: j
        }
      }), l;
    }), L = ({
      row: o
    }) => {
      const {
        rowBtnList: c
      } = e;
      let b = [];
      typeof c == "function" ? b = c(o) : b = c;
      const S = (l) => {
        t.emit("row-btn-click", l, o);
      };
      return b.map((l) => V(l, S));
    }, E = () => {
      n.value && t.emit("row-selected", n.value.getCheckboxRecords());
    }, N = {
      ...t.slots,
      [j]: L,
      pager: e.showPager ? A : null
    }, D = m(() => e.model || []);
    return () => h("div", {
      class: R
    }, [h(U, z(t.attrs, {
      ref: n
    }, s.value, {
      columns: _.value,
      data: D.value,
      height: "auto",
      rowConfig: p.value,
      onCheckboxChange: E,
      onCheckboxAll: E
    }), N)]);
  }
});
w.install = (e) => {
  e.component(w.name, w);
};
const Z = "ry-pro-table", C = /* @__PURE__ */ k({
  name: Z,
  props: Q,
  setup(e, t) {
    const s = I(), p = m(() => {
      if (!e.fields)
        return e.schema;
      const u = {};
      return e.fields.forEach((i) => {
        e.schema.properties[i] && (u[i] = e.schema.properties[i]);
      }), {
        ...e.schema,
        properties: u
      };
    }), n = m(() => {
      const u = {
        ...e
      };
      return delete u.fields, u;
    }), r = () => s.value && s.value.getXTableRef();
    return t.expose({
      getXTableRef: r
    }), () => h(w, z({
      ref: s
    }, n.value, {
      schema: p.value
    }), t.slots);
  }
});
C.install = (e) => {
  e.component(C.name, C);
};
const ie = (e) => ({
  onRowBtnClick: (n, r) => {
    e.emit("row-btn-click", n, r);
  },
  onRowSelected: (n) => {
    e.emit("row-selected", n);
  },
  onPageChange: (n) => {
    e.emit("page-change", n);
  }
}), ee = [w, C], te = (e) => {
  ee.forEach((t) => {
    e.component(t.name, t);
  });
}, le = {
  install: te
};
export {
  w as JsonTable,
  C as ProTable,
  F as basicTableProps,
  ie as bindEvent,
  le as default,
  te as install,
  Q as proTableProps
};
