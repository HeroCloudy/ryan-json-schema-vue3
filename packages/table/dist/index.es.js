import { createVNode as y, isVNode as X, defineComponent as x, computed as h, ref as A, mergeProps as I, resolveComponent as K } from "vue";
import H from "xe-utils";
import { VxeGrid as J } from "vxe-table";
import { ElPopconfirm as Y, ElButton as B } from "element-plus";
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
}, _ = {
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
  ..._,
  fields: {
    type: Array,
    required: !1
  }
};
function D(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !X(e);
}
const V = (e, t) => {
  const {
    type: l = "default",
    key: p,
    flag: n,
    title: i
  } = e;
  return n === "DEL" ? y(Y, {
    title: "是否确认删除该记录？",
    "cancel-button-text": "取消",
    "cancel-button-type": "text",
    "confirm-button-text": "删除",
    "confirm-button-type": "danger",
    onConfirm: () => t(p)
  }, {
    reference: () => y(B, {
      type: "danger",
      link: !0
    }, D(i) ? i : {
      default: () => [i]
    })
  }) : y(B, {
    type: l,
    link: !0,
    onClick: () => t(p)
  }, D(i) ? i : {
    default: () => [i]
  });
};
function Z(e) {
  let t = 0;
  return Array.from(e).forEach((l) => {
    l.charCodeAt(0) > 255 ? t += 2 : t += 1;
  }), t;
}
const L = "ry-json-table", R = "InnerOptColumn", w = /* @__PURE__ */ x({
  name: L,
  props: _,
  setup(e, t) {
    const l = h(() => ({
      align: "center",
      columnConfig: {
        resizable: !0
      },
      loading: e.tableLoading
    })), p = h(() => ({
      isHover: !0,
      useKey: !0,
      keyField: e.rowKey || "_X_ROW_KEY"
    })), n = A(), i = () => n.value;
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
    }, u = h(() => ({
      ...e.pageInfo
    })), F = () => y(K("vxe-pager"), {
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
    }, null), k = h(() => {
      const {
        schema: o,
        uiSchema: m,
        showIndex: b,
        selectionType: C
      } = e, c = [];
      C === "checkbox" && c.push({
        type: "checkbox",
        width: 50,
        fixed: "left"
      }), b && c.push({
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
        const S = m[f] || {}, E = S[G] || {}, s = {
          field: r.prop,
          title: r.description || r.prop,
          headerAlign: "center",
          align: "center",
          showOverflow: !0,
          ...E
        };
        if (S[q])
          s.width = S[q];
        else if (e.columnWidth === "auto") {
          if (r.description) {
            let a = Z(r.description) * 20;
            a < 100 && (a = 100), s.minWidth = a < 100 ? 100 : a;
          }
        } else
          e.columnWidth && (f.includes("Time") || f.includes("Date") ? s.width = 200 : s.width = e.columnWidth);
        if (t.slots[f] && (s.slots = {
          default: f
        }), r.format)
          switch (r.format) {
            case "date-time":
              s.formatter = N;
              break;
          }
        E.formatter && typeof E.formatter == "function" ? s.formatter = E.formatter : r.oneOf ? s.formatter = ({
          cellValue: a
        }) => {
          const g = r.oneOf.find((P) => P.const === a);
          return (g == null ? void 0 : g.title) || a;
        } : r.anyOf && (s.formatter = ({
          cellValue: a
        }) => {
          let g = [];
          return typeof a == "string" ? g = a.split(",") : g = a, g.map((P) => {
            const T = r.anyOf.find((U) => U.const === P);
            return (T == null ? void 0 : T.title) || P;
          }).join(",");
        }), c.push(s);
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
          default: R
        }
      }), c;
    }), W = ({
      row: o
    }) => {
      const {
        rowBtnList: m
      } = e;
      let b = [];
      typeof m == "function" ? b = m(o) : b = m;
      const C = (c) => {
        t.emit("row-btn-click", c, o);
      };
      return b.map((c) => V(c, C));
    }, O = () => {
      n.value && t.emit("row-selected", n.value.getCheckboxRecords());
    }, j = {
      ...t.slots,
      [R]: W,
      pager: e.showPager ? F : null
    }, z = h(() => e.model || []);
    return () => y("div", {
      class: L
    }, [y(J, I(t.attrs, {
      ref: n
    }, l.value, {
      columns: k.value,
      data: z.value,
      height: "auto",
      rowConfig: p.value,
      onCheckboxChange: O,
      onCheckboxAll: O
    }), j)]);
  }
});
w.install = (e) => {
  e.component(w.name, w);
};
const ee = "ry-pro-table", v = /* @__PURE__ */ x({
  name: ee,
  props: Q,
  setup(e, t) {
    const l = A(), p = h(() => {
      if (!e.fields)
        return e.schema;
      const d = {};
      return e.fields.forEach((u) => {
        e.schema.properties[u] && (d[u] = e.schema.properties[u]);
      }), {
        ...e.schema,
        properties: d
      };
    }), n = h(() => {
      const d = {
        ...e
      };
      return delete d.fields, d;
    }), i = () => l.value && l.value.getXTableRef();
    return t.expose({
      getXTableRef: i
    }), () => y(w, I({
      ref: l
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
], te = [w, v], ne = (e) => {
  te.forEach((t) => {
    e.component(t.name, t);
  });
}, ue = {
  install: ne
};
export {
  se as DEFAULT_ROW_BTN_LIST,
  w as JsonTable,
  v as ProTable,
  _ as basicTableProps,
  le as bindEvent,
  ue as default,
  ne as install,
  Q as proTableProps
};
