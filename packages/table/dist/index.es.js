import { createVNode as b, isVNode as X, defineComponent as R, computed as y, ref as x, mergeProps as A, resolveComponent as K } from "vue";
import H from "xe-utils";
import { VxeGrid as J } from "vxe-table";
import { ElPopconfirm as Y, ElButton as B } from "element-plus";
const W = "ui:width", G = "ui:options", $ = {
  schema: {
    type: Object,
    required: !0
  },
  uiSchema: {
    type: Object,
    required: !1,
    default: () => ({})
  }
}, I = {
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
  },
  columnWidth: {
    type: String,
    required: !1
  }
}, Q = {
  ...I,
  fields: {
    type: Array,
    required: !1
  }
};
function q(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !X(e);
}
const V = (e, t) => {
  const {
    type: s = "default",
    key: p,
    flag: n,
    title: i
  } = e;
  return n === "DEL" ? b(Y, {
    title: "是否确认删除该记录？",
    "cancel-button-text": "取消",
    "cancel-button-type": "text",
    "confirm-button-text": "删除",
    "confirm-button-type": "danger",
    onConfirm: () => t(p)
  }, {
    reference: () => b(B, {
      type: "danger",
      link: !0
    }, q(i) ? i : {
      default: () => [i]
    })
  }) : b(B, {
    type: s,
    link: !0,
    onClick: () => t(p)
  }, q(i) ? i : {
    default: () => [i]
  });
};
function Z(e) {
  let t = 0;
  return Array.from(e).forEach((s) => {
    s.charCodeAt(0) > 255 ? t += 2 : t += 1;
  }), t;
}
const D = "ry-json-table", L = "InnerOptColumn", E = /* @__PURE__ */ R({
  name: D,
  props: I,
  setup(e, t) {
    const s = y(() => ({
      align: "center",
      columnConfig: {
        resizable: !0
      },
      loading: e.tableLoading
    })), p = y(() => ({
      isHover: !0,
      useKey: !0,
      keyField: e.rowKey || "_X_ROW_KEY"
    })), n = x(), i = () => n.value;
    t.expose({
      getXTableRef: i
    });
    const d = (o) => {
      if (e.pageInfo) {
        const {
          pageInfo: m
        } = e;
        m.currentPage = o.currentPage, m.pageSize = o.pageSize;
      }
      t.emit("page-change", o);
    }, u = y(() => ({
      ...e.pageInfo
    })), _ = () => b(K("vxe-pager"), {
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
      "current-page": u.value.currentPage,
      "onUpdate:current-page": (o) => u.value.currentPage = o,
      "page-size": u.value.pageSize,
      "onUpdate:page-size": (o) => u.value.pageSize = o,
      total: u.value.total,
      onPageChange: d
    }, null), F = y(() => {
      const {
        schema: o,
        uiSchema: m,
        showIndex: w,
        selectionType: C
      } = e, c = [];
      C === "checkbox" && c.push({
        type: "checkbox",
        width: 50,
        fixed: "left"
      }), w && c.push({
        type: "seq",
        width: 50,
        fixed: "left",
        align: "center",
        title: "序号"
      });
      const N = ({
        cellValue: f
      }) => H.toDateString(f, "yyyy-MM-dd HH:mm:ss");
      Object.keys(o.properties).forEach((f) => {
        const r = o.properties[f];
        r.prop = r.prop || f;
        const S = m[f] || {}, g = S[G] || {}, a = {
          field: r.prop,
          title: r.description || r.prop,
          headerAlign: "center",
          align: "center",
          showOverflow: !0,
          ...g
        };
        if (S[W])
          a.width = S[W];
        else if (e.columnWidth === "auto") {
          if (g.minWidth && g.minWidth !== "auto")
            a.minWidth = g.minWidth;
          else if (r.description) {
            let l = Z(r.description) * 20;
            l < 100 && (l = 100), a.minWidth = l < 100 ? 100 : l;
          }
        }
        if (e.columnWidth && (f.includes("Time") || f.includes("Date") ? a.width = 200 : a.width = e.columnWidth), t.slots[f] && (a.slots = {
          default: f
        }), r.format)
          switch (r.format) {
            case "date-time":
              a.formatter = N;
              break;
          }
        g.formatter && typeof g.formatter == "function" ? a.formatter = g.formatter : r.oneOf ? a.formatter = ({
          cellValue: l
        }) => {
          const h = r.oneOf.find((P) => P.const === l);
          return (h == null ? void 0 : h.title) || l;
        } : r.anyOf && (a.formatter = ({
          cellValue: l
        }) => {
          let h = [];
          return typeof l == "string" ? h = l.split(",") : h = l, h.map((P) => {
            const T = r.anyOf.find((U) => U.const === P);
            return (T == null ? void 0 : T.title) || P;
          }).join(",");
        }), c.push(a);
      });
      const {
        rowBtnList: M
      } = e;
      return M !== null && c.push({
        width: e.optWidth,
        fixed: "right",
        align: "center",
        title: "操作",
        slots: {
          default: L
        }
      }), c;
    }), k = ({
      row: o
    }) => {
      const {
        rowBtnList: m
      } = e;
      let w = [];
      typeof m == "function" ? w = m(o) : w = m;
      const C = (c) => {
        t.emit("row-btn-click", c, o);
      };
      return w.map((c) => V(c, C));
    }, O = () => {
      n.value && t.emit("row-selected", n.value.getCheckboxRecords());
    }, j = {
      ...t.slots,
      [L]: k,
      pager: e.showPager ? _ : null
    }, z = y(() => e.model || []);
    return () => b("div", {
      class: D
    }, [b(J, A(t.attrs, {
      ref: n
    }, s.value, {
      columns: F.value,
      data: z.value,
      height: "auto",
      rowConfig: p.value,
      onCheckboxChange: O,
      onCheckboxAll: O
    }), j)]);
  }
});
E.install = (e) => {
  e.component(E.name, E);
};
const ee = "ry-pro-table", v = /* @__PURE__ */ R({
  name: ee,
  props: Q,
  setup(e, t) {
    const s = x(), p = y(() => {
      if (!e.fields)
        return e.schema;
      const d = {};
      return e.fields.forEach((u) => {
        e.schema.properties[u] && (d[u] = e.schema.properties[u]);
      }), {
        ...e.schema,
        properties: d
      };
    }), n = y(() => {
      const d = {
        ...e
      };
      return delete d.fields, d;
    }), i = () => s.value && s.value.getXTableRef();
    return t.expose({
      getXTableRef: i
    }), () => b(E, A({
      ref: s
    }, n.value, {
      schema: p.value
    }), t.slots);
  }
});
v.install = (e) => {
  e.component(v.name, v);
};
const le = (e) => ({
  onRowBtnClick: (n, i) => {
    e.emit("row-btn-click", n, i);
  },
  onRowSelected: (n) => {
    e.emit("row-selected", n);
  },
  onPageChange: (n) => {
    e.emit("page-change", n);
  }
}), se = [
  { key: "DEFAULT_EDIT", title: "编辑", type: "primary", flag: "EDIT" },
  { key: "DEFAULT_DEL", title: "删除", type: "danger", flag: "DEL" }
], te = [E, v], ne = (e) => {
  te.forEach((t) => {
    e.component(t.name, t);
  });
}, ue = {
  install: ne
};
export {
  se as DEFAULT_ROW_BTN_LIST,
  E as JsonTable,
  v as ProTable,
  I as basicTableProps,
  le as bindEvent,
  ue as default,
  ne as install,
  Q as proTableProps
};
