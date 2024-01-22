import { createVNode as h, isVNode as M, defineComponent as I, computed as m, ref as L, mergeProps as _, resolveComponent as W } from "vue";
import H from "xe-utils";
import { VxeGrid as J } from "vxe-table";
import { ElPopconfirm as Y, ElButton as B } from "element-plus";
const R = "ui:width", G = "ui:options", $ = {
  schema: {
    type: Object,
    required: !0
  },
  uiSchema: {
    type: Object,
    required: !1,
    default: () => ({})
  }
}, k = {
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
  ...k,
  fields: {
    type: Array,
    required: !1
  }
};
function q(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !M(e);
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
    reference: () => h(B, {
      type: "danger",
      link: !0
    }, q(r) ? r : {
      default: () => [r]
    })
  }) : h(B, {
    type: s,
    link: !0,
    onClick: () => t(p)
  }, q(r) ? r : {
    default: () => [r]
  });
}, x = "ry-json-table", D = "InnerOptColumn", w = /* @__PURE__ */ I({
  name: x,
  props: k,
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
    })), n = L(), r = () => n.value;
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
    })), F = () => h(W("vxe-pager"), {
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
    }, null), A = m(() => {
      const {
        schema: o,
        uiSchema: c,
        showIndex: b,
        selectionType: T
      } = e, l = [];
      T === "checkbox" && l.push({
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
      const U = ({
        cellValue: f
      }) => H.toDateString(f, "yyyy-MM-dd HH:mm:ss");
      Object.keys(o.properties).forEach((f) => {
        const a = o.properties[f];
        a.prop = a.prop || f;
        const C = c[f] || {}, P = C[G] || {}, d = {
          field: a.prop,
          title: a.description || a.prop,
          headerAlign: "center",
          align: "center",
          showOverflow: !0,
          ...P
        };
        if (C[R] ? d.width = C[R] : f.includes("Time") && (d.width = 200), t.slots[f] && (d.slots = {
          default: f
        }), a.format)
          switch (a.format) {
            case "date-time":
              d.formatter = U;
              break;
          }
        P.formatter && typeof P.formatter == "function" ? d.formatter = P.formatter : a.oneOf ? d.formatter = ({
          cellValue: y
        }) => {
          const g = a.oneOf.find((E) => E.const === y);
          return (g == null ? void 0 : g.title) || y;
        } : a.anyOf && (d.formatter = ({
          cellValue: y
        }) => {
          let g = [];
          return typeof y == "string" ? g = y.split(",") : g = y, g.map((E) => {
            const S = a.anyOf.find((K) => K.const === E);
            return (S == null ? void 0 : S.title) || E;
          }).join(",");
        }), l.push(d);
      });
      const {
        rowBtnList: X
      } = e;
      return X !== null && l.push({
        width: e.optWidth,
        fixed: "right",
        align: "center",
        title: "操作",
        slots: {
          default: D
        }
      }), l;
    }), j = ({
      row: o
    }) => {
      const {
        rowBtnList: c
      } = e;
      let b = [];
      typeof c == "function" ? b = c(o) : b = c;
      const T = (l) => {
        t.emit("row-btn-click", l, o);
      };
      return b.map((l) => V(l, T));
    }, O = () => {
      n.value && t.emit("row-selected", n.value.getCheckboxRecords());
    }, z = {
      ...t.slots,
      [D]: j,
      pager: e.showPager ? F : null
    }, N = m(() => e.model || []);
    return () => h("div", {
      class: x
    }, [h(J, _(t.attrs, {
      ref: n
    }, s.value, {
      columns: A.value,
      data: N.value,
      height: "auto",
      rowConfig: p.value,
      onCheckboxChange: O,
      onCheckboxAll: O
    }), z)]);
  }
});
w.install = (e) => {
  e.component(w.name, w);
};
const Z = "ry-pro-table", v = /* @__PURE__ */ I({
  name: Z,
  props: Q,
  setup(e, t) {
    const s = L(), p = m(() => {
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
    }), () => h(w, _({
      ref: s
    }, n.value, {
      schema: p.value
    }), t.slots);
  }
});
v.install = (e) => {
  e.component(v.name, v);
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
}), le = [
  { key: "DEFAULT_EDIT", title: "编辑", type: "primary", flag: "EDIT" },
  { key: "DEFAULT_DEL", title: "删除", type: "danger", flag: "DEL" }
], ee = [w, v], te = (e) => {
  ee.forEach((t) => {
    e.component(t.name, t);
  });
}, se = {
  install: te
};
export {
  le as DEFAULT_ROW_BTN_LIST,
  w as JsonTable,
  v as ProTable,
  k as basicTableProps,
  ie as bindEvent,
  se as default,
  te as install,
  Q as proTableProps
};
