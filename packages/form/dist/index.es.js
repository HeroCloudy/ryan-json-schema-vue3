import { createVNode as c, mergeProps as m, isVNode as S, defineComponent as I, ref as T, reactive as _, watchEffect as te, computed as w, resolveComponent as L, createTextVNode as F } from "vue";
import { ElRadioGroup as re, ElRadio as ne, ElSelect as oe, ElOption as se, ElDatePicker as ie, ElInput as le, ElInputNumber as ae, ElSwitch as ce, ElCheckboxGroup as ue, ElCheckbox as de, ElCol as me, ElFormItem as pe, ElForm as fe, ElRow as he } from "element-plus";
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
    return c(re, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (r) => this.model[this.prop] = r
    }), Oe(t = n.map((r) => c(ne, {
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
class q extends E {
  render() {
    let t;
    const {
      oneOf: n,
      anyOf: r
    } = this.schema, o = !!r, s = n || r || [];
    return c(oe, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (i) => this.model[this.prop] = i,
      style: {
        width: "100%"
      },
      multiple: o,
      clearable: !0
    }), Se(t = s.map((i) => c(se, {
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
      type: n
    } = this.schema;
    return n === O.ARRAY && (t += "range", this.commonProps["range-separator"] = this.commonProps["range-separator"] || "-"), c(ie, m(this.commonProps, {
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
    return c(le, m(this.commonProps, {
      type: t,
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (n) => this.model[this.prop] = n,
      clearable: !0
    }), null);
  }
}
class Re extends E {
  render() {
    return c(ae, m({
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
    return c(ce, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (t) => this.model[this.prop] = t
    }), null);
  }
}
function je(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
class ve extends E {
  render() {
    let t;
    const {
      anyOf: n = []
    } = this.schema;
    return c(ue, m(this.commonProps, {
      modelValue: this.model[this.prop],
      "onUpdate:modelValue": (r) => this.model[this.prop] = r
    }), je(t = n.map((r) => c(de, {
      label: r.const
    }, {
      default: () => [r.title]
    }))) ? t : {
      default: () => [t]
    });
  }
}
function Pe(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
const Ce = (e, t = {}, n, r, o, s) => {
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
    model: n
  }, f = () => {
    if (r && r[a])
      return () => r[a](n);
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
  return c(me, {
    span: o * h
  }, {
    default: () => [c(pe, {
      label: e.description,
      prop: a,
      "label-width": g
    }, Pe(i = f()) ? i : {
      default: () => [i]
    })]
  });
}, U = (e = "不支持该类型") => c("div", null, [e]), M = (e) => {
  const {
    model: t,
    item: n,
    uiItem: r
  } = e;
  if (n.oneOf) {
    const o = r[y] || p.SELECT;
    return o === p.RADIO ? new K(n, r, t).render() : o === p.SELECT ? new q(n, r, t).render() : U();
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
  return n.oneOf = n.oneOf ? n.oneOf : s, o === p.SWITCH ? new Y(n, r, t).render() : o === p.RADIO ? new K(n, r, t).render() : o === p.SELECT ? new q(n, r, t).render() : U();
}, Ae = (e) => {
  const {
    model: t,
    item: n,
    uiItem: r
  } = e;
  if (n.anyOf) {
    const o = r[y] || "select";
    if (o === p.SELECT)
      return new q(n, r, t).render();
    if (o === p.CHECKBOX)
      return new ve(n, r, t).render();
  }
  return n.format && (n.format === "date" || n.format === "datetime") ? new X(n, r, t).render() : U();
}, Ne = (e = {}, t) => {
  const n = { ...e }, { properties: r } = t, { required: o = [] } = t;
  return o.forEach((s) => {
    if (r[s]) {
      const i = r[s].prop || s;
      B(n, i, W(r[s].description));
    }
  }), Object.keys(r).forEach((s) => {
    const i = r[s], a = i.prop || s;
    i.required && o.findIndex((u) => u === a) < 0 && B(n, a, W(r[s].description));
  }), n;
}, B = (e, t, n) => {
  e[t] || (e[t] = []), e[t].push(n);
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
const $ = "ry-json-form", j = /* @__PURE__ */ I({
  name: $,
  props: z,
  setup(e, t) {
    const n = T();
    let r = _(e.model);
    const o = () => {
      n.value && n.value.resetFields();
    }, s = (l) => {
      n.value && n.value.validate(l);
    };
    t.expose({
      reset: o,
      validate: s
    });
    let i = 24 / e.column;
    te(() => {
      r = _(e.model), i = 24 / e.column;
    });
    const d = {
      change: (l, b) => {
        t.emit("data-change", l, b, r);
      },
      enter: (l) => {
        t.emit("enter-up", l, e.model);
      }
    }, f = () => {
      n.value && n.value.clearValidate();
      const {
        properties: l
      } = e.schema, b = [];
      return Object.keys(l).forEach((A) => {
        const N = l[A];
        N.prop = N.prop || A;
        const x = e.uiSchema[A], D = Ce(N, x, e.model, t.slots, i, d);
        D && b.push(D);
      }), b;
    }, h = w(() => {
      const {
        schema: l,
        rules: b
      } = e;
      return Ne(b, l);
    }), g = (l) => {
      l && (l.stopPropagation && l.stopPropagation(), l.preventDefault && l.preventDefault());
    };
    return () => {
      let l;
      const {
        schema: b,
        uiSchema: A,
        model: N,
        column: x,
        rules: D,
        ...ee
      } = e;
      return c("div", {
        className: $
      }, [c(fe, m(ee, {
        ref: n,
        model: r,
        rules: h.value,
        labelWidth: "auto",
        onSubmit: g
      }), {
        default: () => [c(he, {
          gutter: 20
        }, De(l = f()) ? l : {
          default: () => [l]
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
}), Le = (e, t) => ({
  onDataChange: (o, s) => {
    e.emit("data-change", o, s, t);
  },
  onEnterUp: (o) => {
    e.emit("enter-up", o, t);
  }
}), qe = "ry-pro-form", v = /* @__PURE__ */ I({
  name: qe,
  props: Q,
  setup(e, t) {
    const n = T(), {
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
      ref: n
    }, i.value, {
      schema: s.value
    }), t.slots);
  }
});
v.install = (e) => {
  e.component(v.name, v);
};
const Ue = (e, t = {}, n, r) => {
  if (t[H] === !0)
    return null;
  const o = e.prop, s = () => {
    const a = n[o];
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
    width: t[ye] || 100,
    label: e.description || ""
  }), {
    default: () => [r[o] ? r[o](n) : s()]
  });
};
function xe(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !S(e);
}
const _e = "ry-json-description", P = /* @__PURE__ */ I({
  name: _e,
  props: Z,
  setup(e, t) {
    const n = () => {
      const {
        properties: r
      } = e.schema, o = [];
      return Object.keys(r).forEach((s) => {
        const i = r[s];
        i.prop = i.prop || s;
        const a = e.uiSchema[s], u = Ue(i, a, e.model, t.slots);
        u && o.push(u);
      }), o;
    };
    return () => {
      let r;
      const {
        column: o
      } = e;
      return c(L("el-descriptions"), m(t.attrs, {
        column: o,
        border: !0
      }), xe(r = n()) ? r : {
        default: () => [r]
      });
    };
  }
});
P.install = (e) => {
  e.component(P.name, P);
};
const Fe = "ry-pro-description", C = /* @__PURE__ */ I({
  name: Fe,
  props: k,
  setup(e, t) {
    const n = t.attrs, r = w(() => Ee(e.schema, e.fields)), o = w(() => {
      const s = {
        ...e
      };
      return delete s.fields, s;
    });
    return () => c(P, m(n, o.value, {
      schema: r.value
    }), t.slots);
  }
});
C.install = (e) => {
  e.component(C.name, C);
};
const Me = "ry-json-form-description", V = /* @__PURE__ */ I({
  name: Me,
  props: Ve,
  setup(e, t) {
    const n = T(), r = () => {
      n.value && n.value.reset();
    }, o = (s) => {
      n.value && n.value.validate(s);
    };
    return t.expose({
      reset: r,
      validate: o
    }), () => {
      const {
        readMode: s,
        ...i
      } = e;
      return s ? c(C, i, {
        default: () => [F("description")],
        ...t.slots
      }) : c(v, m({
        ref: n
      }, i), {
        default: () => [F("form")],
        ...t.slots
      });
    };
  }
});
V.install = (e) => {
  e.component(V.name, V);
};
const Be = [j, v, P, C, V], He = {
  install: (e) => {
    Be.forEach((t) => {
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
  Z as basicDescriptionProps,
  z as basicFormProps,
  Le as bindEvent,
  Te as bindMethod,
  He as default,
  Ve as jsonFormDescriptionProps,
  k as proDescriptionProps,
  Q as proFormProps
};
