import { createVNode as a, mergeProps as m, isVNode as S, defineComponent as I, ref as $, reactive as x, watchEffect as te, computed as w, resolveComponent as L, createTextVNode as _ } from "vue";
import { ElRadioGroup as re, ElRadio as ne, ElSelect as oe, ElOption as se, ElDatePicker as ie, ElInput as le, ElInputNumber as ce, ElSwitch as ae, ElCheckboxGroup as ue, ElCheckbox as de, ElCol as me, ElFormItem as pe, ElForm as fe, ElRow as he } from "element-plus";
const H = "ui:hidden", be = "ui:disabled", ye = "ui:width", R = "ui:options", y = "ui:widget", G = "ui:column";
var p = /* @__PURE__ */ ((e) => (e.SELECT = "select", e.RADIO = "radio", e.CHECKBOX = "checkbox", e.SWITCH = "switch", e.INPUT = "input", e.TEXTAREA = "textarea", e))(p || {}), O = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.ARRAY = "array", e.BOOLEAN = "boolean", e))(O || {});
const J = {
  schema: {
    type: Object,
    required: !0
  },
  uiSchema: {
    type: Object,
    required: !1,
    default: () => ({})
  }
}, Ee = (e, t) => {
  if (t == null)
    return e;
  if (t.length === 0)
    return {
      ...e,
      properties: {}
    };
  const n = {};
  return t.forEach((r) => {
    e.properties[r] && (n[r] = e.properties[r]);
  }), {
    ...e,
    properties: n
  };
};
class E {
  constructor(t, n, r) {
    this.schema = t, this.uiSchema = n, this.model = r, this.commonProps = this.initCommonProps(), this.prop = this.schema.prop;
  }
  initCommonProps() {
    const t = {
      ...this.uiSchema[R] || {}
    };
    return t.disabled = this.uiSchema[be] === !0, t.placeholder = t.placeholder || this.schema.description, t;
  }
}
function Oe(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
class K extends E {
  render() {
    let t;
    const {
      oneOf: n
    } = this.schema;
    return a(re, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (r) => this.model[this.prop] = r
    }), Oe(t = n.map((r) => a(ne, {
      label: r.const
    }, {
      default: () => [r.title]
    }))) ? t : {
      default: () => [t]
    });
  }
}
function Se(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
class T extends E {
  render() {
    let t;
    const {
      oneOf: n,
      anyOf: r
    } = this.schema, o = !!r, s = n || r || [];
    return a(oe, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (l) => this.model[this.prop] = l,
      style: {
        width: "100%"
      },
      multiple: o,
      clearable: !0
    }), Se(t = s.map((l) => a(se, {
      label: l.title,
      value: l.const
    }, null))) ? t : {
      default: () => [t]
    });
  }
}
class X extends E {
  render() {
    let {
      format: t
    } = this.schema;
    const {
      type: n
    } = this.schema;
    return n === O.ARRAY && (t += "range", this.commonProps["range-separator"] = this.commonProps["range-separator"] || "-"), a(ie, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (r) => this.model[this.prop] = r,
      type: t,
      clearable: !0
    }), null);
  }
}
class ge extends E {
  render() {
    const t = this.uiSchema[y] === "textarea" ? "textarea" : "text";
    return a(le, m(this.commonProps, {
      type: t,
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (n) => this.model[this.prop] = n,
      clearable: !0
    }), null);
  }
}
class Re extends E {
  render() {
    return a(ce, m({
      style: {
        width: "100%"
      }
    }, this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (t) => this.model[this.prop] = t
    }), null);
  }
}
class Y extends E {
  render() {
    return a(ae, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (t) => this.model[this.prop] = t
    }), null);
  }
}
function je(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
class Pe extends E {
  render() {
    let t;
    const {
      anyOf: n = []
    } = this.schema;
    return a(ue, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (r) => this.model[this.prop] = r
    }), je(t = n.map((r) => a(de, {
      label: r.const
    }, {
      default: () => [r.title]
    }))) ? t : {
      default: () => [t]
    });
  }
}
function Ce(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
const ve = (e, t = {}, n, r, o, s) => {
  let l;
  const c = e.prop;
  if (t[H])
    return null;
  const u = {
    ...t,
    [y]: t[y],
    [R]: {
      ...t[R] || {},
      onKeyup: (i) => {
        i.code === "Enter" && s.enter(i);
      },
      onChange: (i) => s.change(c, i)
    }
  };
  e.prop === "startTime" && console.log(e);
  const d = {
    item: e,
    uiItem: u,
    model: n
  }, f = () => {
    if (r && r[c])
      return () => r[c](n);
    switch (e.type) {
      case O.STRING:
        return M(d);
      case O.NUMBER:
        return we(d);
      case O.BOOLEAN:
        return Ie(d);
      case O.ARRAY:
        return Ae(d);
    }
    return M(d);
  }, h = t[G] || 1, g = (t[R] || {}).labelWidth || "auto";
  return a(me, {
    span: o * h
  }, {
    default: () => [a(pe, {
      label: e.description,
      prop: c,
      "label-width": g
    }, Ce(l = f()) ? l : {
      default: () => [l]
    })]
  });
}, q = (e = "不支持该类型") => a("div", null, [e]), M = (e) => {
  const {
    model: t,
    item: n,
    uiItem: r
  } = e;
  if (n.oneOf) {
    const o = r[y] || p.SELECT;
    return o === p.RADIO ? new K(n, r, t).render() : o === p.SELECT ? new T(n, r, t).render() : q();
  }
  return n.format && (n.format === "date" || n.format === "datetime") ? new X(n, r, t).render() : new ge(n, r, t).render();
}, we = (e) => {
  const {
    model: t,
    item: n,
    uiItem: r
  } = e;
  return r && r[y] === p.SWITCH ? new Y(n, r, t).render() : new Re(n, r, t).render();
}, Ie = (e) => {
  const {
    model: t,
    item: n,
    uiItem: r
  } = e, o = r[y] || p.SWITCH, s = [{
    const: !0,
    title: "是"
  }, {
    const: !1,
    title: "否"
  }];
  return n.oneOf = n.oneOf ? n.oneOf : s, o === p.SWITCH ? new Y(n, r, t).render() : o === p.RADIO ? new K(n, r, t).render() : o === p.SELECT ? new T(n, r, t).render() : q();
}, Ae = (e) => {
  const {
    model: t,
    item: n,
    uiItem: r
  } = e;
  if (n.anyOf) {
    const o = r[y] || "select";
    if (o === p.SELECT)
      return new T(n, r, t).render();
    if (o === p.CHECKBOX)
      return new Pe(n, r, t).render();
  }
  return n.format && (n.format === "date" || n.format === "datetime") ? new X(n, r, t).render() : q();
}, Ne = (e = {}, t) => {
  const n = { ...e }, { properties: r } = t, { required: o = [] } = t;
  return o.forEach((s) => {
    if (r[s]) {
      const l = r[s].prop || s;
      B(n, l, F(r[s].description));
    }
  }), Object.keys(r).forEach((s) => {
    const l = r[s], c = l.prop || s;
    l.required && o.findIndex((u) => u === c) < 0 && B(n, c, F(r[s].description));
  }), n;
}, B = (e, t, n) => {
  e[t] || (e[t] = []), e[t].push(n);
}, F = (e) => ({ required: !0, message: `${e}不能为空`, trigger: "blur" }), z = {
  ...J,
  model: {
    type: Object,
    required: !0
  },
  column: {
    type: Number,
    required: !1,
    default: 3
  },
  rules: {
    type: Object,
    required: !1,
    default: () => ({})
  }
}, Q = {
  ...z,
  fields: {
    type: Array,
    required: !1
  }
}, Z = {
  ...J,
  model: {
    type: Object,
    required: !0
  },
  column: {
    type: Number,
    required: !1,
    default: 3
  },
  size: {
    type: String,
    required: !1,
    default: "default"
  },
  border: {
    type: Boolean,
    required: !1,
    default: !0
  }
}, k = {
  ...Z,
  fields: {
    type: Array,
    required: !1
  }
}, Ve = {
  ...Q,
  ...k,
  readMode: {
    type: Boolean,
    required: !1,
    default: !1
  }
};
function De(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
const W = "ry-json-form", j = /* @__PURE__ */ I({
  name: W,
  props: z,
  setup(e, t) {
    const n = $();
    let r = x(e.model);
    const o = () => {
      n.value && n.value.resetFields();
    }, s = (i) => {
      n.value && n.value.validate(i);
    };
    t.expose({
      reset: o,
      validate: s
    });
    let l = 24 / e.column;
    te(() => {
      r = x(e.model), l = 24 / e.column;
    });
    const d = {
      change: (i, b) => {
        t.emit("data-change", i, b, r);
      },
      enter: (i) => {
        t.emit("enter-up", i, e.model);
      }
    }, f = () => {
      n.value && n.value.clearValidate();
      const {
        properties: i
      } = e.schema, b = [];
      return Object.keys(i).forEach((A) => {
        const N = i[A];
        N.prop = N.prop || A;
        const U = e.uiSchema[A], D = ve(N, U, e.model, t.slots, l, d);
        D && b.push(D);
      }), b;
    }, h = w(() => {
      const {
        schema: i,
        rules: b
      } = e;
      return Ne(b, i);
    }), g = (i) => {
      i && (i.stopPropagation && i.stopPropagation(), i.preventDefault && i.preventDefault());
    };
    return () => {
      let i;
      const {
        schema: b,
        uiSchema: A,
        model: N,
        column: U,
        rules: D,
        ...ee
      } = e;
      return a("div", {
        className: W
      }, [a(fe, m(ee, {
        ref: n,
        model: r,
        rules: h.value,
        labelWidth: "auto",
        onSubmit: g
      }), {
        default: () => [a(he, {
          gutter: 20
        }, De(i = f()) ? i : {
          default: () => [i]
        })]
      })]);
    };
  }
});
j.install = (e) => {
  e.component(j.name, j);
};
const Te = (e) => ({
  reset: () => {
    const r = e();
    r && r.reset();
  },
  validate: (r) => {
    const o = e();
    o && o.validate(r);
  }
}), qe = (e, t) => ({
  onDataChange: (o, s) => {
    e.emit("data-change", o, s, t);
  },
  onEnterUp: (o) => {
    e.emit("enter-up", o, t);
  }
}), Ue = "ry-pro-form", P = /* @__PURE__ */ I({
  name: Ue,
  props: Q,
  setup(e, t) {
    const n = $(), {
      reset: r,
      validate: o
    } = Te(() => n.value);
    t.expose({
      reset: r,
      validate: o
    });
    const s = w(() => {
      if (!e.fields)
        return e.schema;
      const c = {};
      return e.schema && e.schema.properties && e.fields.forEach((u) => {
        e.schema.properties[u] && (c[u] = e.schema.properties[u]);
      }), {
        ...e.schema,
        properties: c
      };
    }), l = w(() => {
      const c = {
        ...e
      };
      return delete c.fields, c;
    });
    return () => a(j, m({
      ref: n
    }, l.value, {
      schema: s.value
    }, qe(t, e.model)), t.slots);
  }
});
P.install = (e) => {
  e.component(P.name, P);
};
const xe = (e, t = {}, n, r) => {
  if (t[H] === !0)
    return null;
  const o = e.prop, s = () => {
    const c = n[o];
    if (e.oneOf) {
      const u = e.oneOf.find((d) => d.const === c);
      return u ? u.title : c;
    }
    return e.anyOf ? typeof c == "string" ? c.split(",").map((d) => {
      var h;
      const f = (h = e.anyOf) == null ? void 0 : h.find((g) => g.const === d);
      return f ? f.title : d;
    }).join(",") : c.map((u) => {
      var f;
      const d = (f = e.anyOf) == null ? void 0 : f.find((h) => h.const === u);
      return d ? d.title : u;
    }).join(",") : c;
  }, l = t[R] || {};
  return a(L("el-descriptions-item"), m(l, {
    span: t[G] || 1,
    width: t[ye] || 100,
    label: e.description || ""
  }), {
    default: () => [r[o] ? r[o](n) : s()]
  });
};
function _e(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
const Me = "ry-json-description", C = /* @__PURE__ */ I({
  name: Me,
  props: Z,
  setup(e, t) {
    const n = () => {
      const {
        properties: r
      } = e.schema, o = [];
      return Object.keys(r).forEach((s) => {
        const l = r[s];
        l.prop = l.prop || s;
        const c = e.uiSchema[s], u = xe(l, c, e.model, t.slots);
        u && o.push(u);
      }), o;
    };
    return () => {
      let r;
      const {
        column: o
      } = e;
      return a(L("el-descriptions"), m(t.attrs, {
        column: o,
        border: !0
      }), _e(r = n()) ? r : {
        default: () => [r]
      });
    };
  }
});
C.install = (e) => {
  e.component(C.name, C);
};
const Be = "ry-pro-description", v = /* @__PURE__ */ I({
  name: Be,
  props: k,
  setup(e, t) {
    const n = t.attrs, r = w(() => Ee(e.schema, e.fields)), o = w(() => {
      const s = {
        ...e
      };
      return delete s.fields, s;
    });
    return () => a(C, m(n, o.value, {
      schema: r.value
    }), t.slots);
  }
});
v.install = (e) => {
  e.component(v.name, v);
};
const Fe = "ry-json-form-description", V = /* @__PURE__ */ I({
  name: Fe,
  props: Ve,
  setup(e, {
    slots: t
  }) {
    return () => {
      const {
        readMode: n,
        ...r
      } = e;
      return n ? a(v, r, {
        default: () => [_("description")],
        ...t
      }) : a(P, r, {
        default: () => [_("form")],
        ...t
      });
    };
  }
});
V.install = (e) => {
  e.component(V.name, V);
};
const We = [j, P, C, v, V], $e = (e) => {
  We.forEach((t) => {
    e.component(t.name, t);
  });
}, Ge = {
  install: $e
};
export {
  C as JsonDescription,
  j as JsonForm,
  V as JsonFormDescription,
  v as ProDescription,
  P as ProForm,
  Z as basicDescriptionProps,
  z as basicFormProps,
  qe as bindEvent,
  Te as bindMethod,
  Ge as default,
  $e as install,
  Ve as jsonFormDescriptionProps,
  k as proDescriptionProps,
  Q as proFormProps
};
