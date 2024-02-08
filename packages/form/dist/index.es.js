import { createVNode as c, mergeProps as m, isVNode as S, defineComponent as I, ref as T, reactive as x, watchEffect as re, computed as w, resolveComponent as L, createTextVNode as F } from "vue";
import { ElRadioGroup as oe, ElRadio as ne, ElSelect as se, ElOption as ie, ElDatePicker as le, ElInput as ae, ElInputNumber as ce, ElSwitch as ue, ElCheckboxGroup as de, ElCheckbox as me, ElCol as pe, ElFormItem as fe, ElForm as he, ElRow as be } from "element-plus";
const H = "ui:hidden", ye = "ui:disabled", Ee = "ui:width", R = "ui:options", y = "ui:widget", G = "ui:column";
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
}, Oe = (e, t) => {
  if (t == null)
    return e;
  if (t.length === 0)
    return {
      ...e,
      properties: {}
    };
  const o = {};
  return t.forEach((r) => {
    e.properties[r] && (o[r] = e.properties[r]);
  }), {
    ...e,
    properties: o
  };
};
class E {
  constructor(t, o, r) {
    this.schema = t, this.uiSchema = o, this.model = r, this.commonProps = this.initCommonProps(), this.prop = this.schema.prop;
  }
  initCommonProps() {
    const t = {
      ...this.uiSchema[R] || {}
    };
    return t.disabled = this.uiSchema[ye] === !0, t.placeholder = t.placeholder || this.schema.description, t;
  }
}
function Se(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
class K extends E {
  render() {
    let t;
    const {
      oneOf: o
    } = this.schema;
    return c(oe, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (r) => this.model[this.prop] = r
    }), Se(t = o.map((r) => c(ne, {
      label: r.const
    }, {
      default: () => [r.title]
    }))) ? t : {
      default: () => [t]
    });
  }
}
function ge(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
class q extends E {
  render() {
    let t;
    const {
      oneOf: o,
      anyOf: r
    } = this.schema, n = !!r, s = o || r || [];
    return c(se, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (i) => this.model[this.prop] = i,
      style: {
        width: "100%"
      },
      multiple: n,
      clearable: !0
    }), ge(t = s.map((i) => c(ie, {
      label: i.title,
      value: i.const
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
      type: o
    } = this.schema;
    return o === O.ARRAY && (t += "range", this.commonProps["range-separator"] = this.commonProps["range-separator"] || "-"), c(le, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (r) => this.model[this.prop] = r,
      type: t,
      clearable: !0
    }), null);
  }
}
class Re extends E {
  render() {
    const t = this.uiSchema[y] === "textarea" ? "textarea" : "text";
    return c(ae, m(this.commonProps, {
      type: t,
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (o) => this.model[this.prop] = o,
      clearable: !0
    }), null);
  }
}
class je extends E {
  render() {
    return c(ce, m({
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
    return c(ue, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (t) => this.model[this.prop] = t
    }), null);
  }
}
function ve(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
class Pe extends E {
  render() {
    let t;
    const {
      anyOf: o = []
    } = this.schema;
    return c(de, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (r) => this.model[this.prop] = r
    }), ve(t = o.map((r) => c(me, {
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
const we = (e, t = {}, o, r, n, s) => {
  let i;
  const a = e.prop;
  if (t[H])
    return null;
  const u = {
    ...t,
    [y]: t[y],
    [R]: {
      ...t[R] || {},
      onKeyup: (l) => {
        l.code === "Enter" && s.enter(l);
      },
      onChange: (l) => s.change(a, l)
    }
  };
  e.prop === "startTime" && console.log(e);
  const d = {
    item: e,
    uiItem: u,
    model: o
  }, f = () => {
    if (r && r[a])
      return () => r[a](o);
    switch (e.type) {
      case O.STRING:
        return M(d);
      case O.NUMBER:
        return Ie(d);
      case O.BOOLEAN:
        return Ae(d);
      case O.ARRAY:
        return Ne(d);
    }
    return M(d);
  }, h = t[G] || 1, g = (t[R] || {}).labelWidth || "auto";
  return c(pe, {
    span: n * h
  }, {
    default: () => [c(fe, {
      label: e.description,
      prop: a,
      "label-width": g
    }, Ce(i = f()) ? i : {
      default: () => [i]
    })]
  });
}, U = (e = "不支持该类型") => c("div", null, [e]), M = (e) => {
  const {
    model: t,
    item: o,
    uiItem: r
  } = e;
  if (o.oneOf) {
    const n = r[y] || p.SELECT;
    return n === p.RADIO ? new K(o, r, t).render() : n === p.SELECT ? new q(o, r, t).render() : U();
  }
  if (o.format && (o.format === "date" || o.format === "datetime")) {
    const n = r["ui:options"] || {};
    return console.log("重新渲染date-picker", o.prop, n["disabled-date"]), new X(o, r, t).render();
  }
  return new Re(o, r, t).render();
}, Ie = (e) => {
  const {
    model: t,
    item: o,
    uiItem: r
  } = e;
  return r && r[y] === p.SWITCH ? new Y(o, r, t).render() : new je(o, r, t).render();
}, Ae = (e) => {
  const {
    model: t,
    item: o,
    uiItem: r
  } = e, n = r[y] || p.SWITCH, s = [{
    const: !0,
    title: "是"
  }, {
    const: !1,
    title: "否"
  }];
  return o.oneOf = o.oneOf ? o.oneOf : s, n === p.SWITCH ? new Y(o, r, t).render() : n === p.RADIO ? new K(o, r, t).render() : n === p.SELECT ? new q(o, r, t).render() : U();
}, Ne = (e) => {
  const {
    model: t,
    item: o,
    uiItem: r
  } = e;
  if (o.anyOf) {
    const n = r[y] || "select";
    if (n === p.SELECT)
      return new q(o, r, t).render();
    if (n === p.CHECKBOX)
      return new Pe(o, r, t).render();
  }
  return o.format && (o.format === "date" || o.format === "datetime") ? new X(o, r, t).render() : U();
}, Ve = (e = {}, t) => {
  const o = { ...e }, { properties: r } = t, { required: n = [] } = t;
  return n.forEach((s) => {
    if (r[s]) {
      const i = r[s].prop || s;
      B(o, i, W(r[s].description));
    }
  }), Object.keys(r).forEach((s) => {
    const i = r[s], a = i.prop || s;
    i.required && n.findIndex((u) => u === a) < 0 && B(o, a, W(r[s].description));
  }), o;
}, B = (e, t, o) => {
  e[t] || (e[t] = []), e[t].push(o);
}, W = (e) => ({ required: !0, message: `${e}不能为空`, trigger: "blur" }), z = {
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
}, k = {
  ...z,
  fields: {
    type: Array,
    required: !1
  }
}, Q = {
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
}, Z = {
  ...Q,
  fields: {
    type: Array,
    required: !1
  }
}, De = {
  ...k,
  ...Z,
  readMode: {
    type: Boolean,
    required: !1,
    default: !1
  }
};
function Te(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
const $ = "ry-json-form", j = /* @__PURE__ */ I({
  name: $,
  props: z,
  setup(e, t) {
    const o = T();
    let r = x(e.model);
    const n = () => {
      o.value && o.value.resetFields();
    }, s = (l) => {
      o.value && o.value.validate(l);
    };
    t.expose({
      reset: n,
      validate: s
    });
    let i = 24 / e.column;
    re(() => {
      r = x(e.model), i = 24 / e.column;
    });
    const d = {
      change: (l, b) => {
        t.emit("data-change", l, b, r);
      },
      enter: (l) => {
        t.emit("enter-up", l, e.model);
      }
    }, f = () => {
      o.value && o.value.clearValidate();
      const {
        properties: l
      } = e.schema, b = [];
      return Object.keys(l).forEach((A) => {
        const N = l[A];
        N.prop = N.prop || A;
        const _ = e.uiSchema[A], D = we(N, _, e.model, t.slots, i, d);
        D && b.push(D);
      }), b;
    }, h = w(() => {
      const {
        schema: l,
        rules: b
      } = e;
      return Ve(b, l);
    }), g = (l) => {
      l && (l.stopPropagation && l.stopPropagation(), l.preventDefault && l.preventDefault());
    };
    return () => {
      let l;
      const {
        schema: b,
        uiSchema: A,
        model: N,
        column: _,
        rules: D,
        ...te
      } = e;
      return c("div", {
        className: $
      }, [c(he, m(te, {
        ref: o,
        model: r,
        rules: h.value,
        labelWidth: "auto",
        onSubmit: g
      }), {
        default: () => [c(be, {
          gutter: 20
        }, Te(l = f()) ? l : {
          default: () => [l]
        })]
      })]);
    };
  }
});
j.install = (e) => {
  e.component(j.name, j);
};
const qe = (e) => ({
  reset: () => {
    const r = e();
    r && r.reset();
  },
  validate: (r) => {
    const n = e();
    n && n.validate(r);
  }
}), ee = (e, t) => ({
  onDataChange: (n, s) => {
    e.emit("data-change", n, s, t);
  },
  onEnterUp: (n) => {
    e.emit("enter-up", n, t);
  }
}), Ue = "ry-pro-form", v = /* @__PURE__ */ I({
  name: Ue,
  props: k,
  setup(e, t) {
    const o = T(), {
      reset: r,
      validate: n
    } = qe(() => o.value);
    t.expose({
      reset: r,
      validate: n
    });
    const s = w(() => {
      if (!e.fields)
        return e.schema;
      const a = {};
      return e.schema && e.schema.properties && e.fields.forEach((u) => {
        e.schema.properties[u] && (a[u] = e.schema.properties[u]);
      }), {
        ...e.schema,
        properties: a
      };
    }), i = w(() => {
      const a = {
        ...e
      };
      return delete a.fields, a;
    });
    return () => c(j, m({
      ref: o
    }, i.value, {
      schema: s.value
    }, ee(t, e.model)), t.slots);
  }
});
v.install = (e) => {
  e.component(v.name, v);
};
const _e = (e, t = {}, o, r) => {
  if (t[H] === !0)
    return null;
  const n = e.prop, s = () => {
    const a = o[n];
    if (e.oneOf) {
      const u = e.oneOf.find((d) => d.const === a);
      return u ? u.title : a;
    }
    return e.anyOf ? typeof a == "string" ? a.split(",").map((d) => {
      var h;
      const f = (h = e.anyOf) == null ? void 0 : h.find((g) => g.const === d);
      return f ? f.title : d;
    }).join(",") : a.map((u) => {
      var f;
      const d = (f = e.anyOf) == null ? void 0 : f.find((h) => h.const === u);
      return d ? d.title : u;
    }).join(",") : a;
  }, i = t[R] || {};
  return c(L("el-descriptions-item"), m(i, {
    span: t[G] || 1,
    width: t[Ee] || 100,
    label: e.description || ""
  }), {
    default: () => [r[n] ? r[n](o) : s()]
  });
};
function xe(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
const Fe = "ry-json-description", P = /* @__PURE__ */ I({
  name: Fe,
  props: Q,
  setup(e, t) {
    const o = () => {
      const {
        properties: r
      } = e.schema, n = [];
      return Object.keys(r).forEach((s) => {
        const i = r[s];
        i.prop = i.prop || s;
        const a = e.uiSchema[s], u = _e(i, a, e.model, t.slots);
        u && n.push(u);
      }), n;
    };
    return () => {
      let r;
      const {
        column: n
      } = e;
      return c(L("el-descriptions"), m(t.attrs, {
        column: n,
        border: !0
      }), xe(r = o()) ? r : {
        default: () => [r]
      });
    };
  }
});
P.install = (e) => {
  e.component(P.name, P);
};
const Me = "ry-pro-description", C = /* @__PURE__ */ I({
  name: Me,
  props: Z,
  setup(e, t) {
    const o = t.attrs, r = w(() => Oe(e.schema, e.fields)), n = w(() => {
      const s = {
        ...e
      };
      return delete s.fields, s;
    });
    return () => c(P, m(o, n.value, {
      schema: r.value
    }), t.slots);
  }
});
C.install = (e) => {
  e.component(C.name, C);
};
const Be = "ry-json-form-description", V = /* @__PURE__ */ I({
  name: Be,
  props: De,
  setup(e, t) {
    const o = T(), r = () => {
      o.value && o.value.reset();
    }, n = (s) => {
      o.value && o.value.validate(s);
    };
    return t.expose({
      reset: r,
      validate: n
    }), () => {
      const {
        readMode: s,
        ...i
      } = e;
      return s ? c(C, i, {
        default: () => [F("description")],
        ...t.slots
      }) : c(v, m({
        ref: o
      }, i, ee(t, e.model)), {
        default: () => [F("form")],
        ...t.slots
      });
    };
  }
});
V.install = (e) => {
  e.component(V.name, V);
};
const We = [j, v, P, C, V], He = {
  install: (e) => {
    We.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  P as JsonDescription,
  j as JsonForm,
  V as JsonFormDescription,
  C as ProDescription,
  v as ProForm,
  Q as basicDescriptionProps,
  z as basicFormProps,
  ee as bindEvent,
  qe as bindMethod,
  He as default,
  De as jsonFormDescriptionProps,
  Z as proDescriptionProps,
  k as proFormProps
};
