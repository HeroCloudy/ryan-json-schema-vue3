const p = "ui:hidden", I = "ui:disabled", b = "ui:width", d = "ui:options", E = "ui:widget", O = "ui:column";
var a = /* @__PURE__ */ ((t) => (t.SELECT = "select", t.RADIO = "radio", t.CHECKBOX = "checkbox", t.SWITCH = "switch", t.INPUT = "input", t.TEXTAREA = "textarea", t))(a || {}), s = /* @__PURE__ */ ((t) => (t.STRING = "string", t.NUMBER = "number", t.ARRAY = "array", t.BOOLEAN = "boolean", t))(s || {});
const D = {
  schema: {
    type: Object,
    required: !0
  },
  uiSchema: {
    type: Object,
    required: !1,
    default: () => ({})
  }
}, l = (t) => {
  if (!t)
    return null;
  if (t.default !== void 0)
    return t.default;
  switch (t.type) {
    case "string":
      return "";
    case "number":
      return 0;
    case "boolean":
      return !1;
    case "array":
      return [];
    case "object":
      return {};
    default:
      return null;
  }
}, f = (t, e) => {
  if (e == null)
    return t;
  if (e.length === 0)
    return {
      ...t,
      properties: {}
    };
  const c = {};
  return e.forEach((r) => {
    t.properties[r] && (c[r] = t.properties[r]);
  }), {
    ...t,
    properties: c
  };
}, S = (t, e) => {
  if (!t || !t.properties)
    return {};
  const c = f(t, e), r = {}, { properties: n } = c;
  return Object.keys(n).forEach((u) => {
    const o = n[u], i = o.prop || u;
    r[i] = l(o);
  }), r;
}, h = (t, e) => ({
  const: e,
  title: t
}), A = (t, e, c, r = []) => {
  const n = {};
  for (let u = 0; u < t.length; u++) {
    const o = t[u];
    r.includes(o) || (n[o] = {
      "ui:width": e
    }), u === 0 && c && (n[o] = {
      ...n[o],
      "ui:options": {
        fixed: "left"
      }
    });
  }
  return n;
};
export {
  s as SchemaType,
  O as UI_COLUMN,
  I as UI_DISABLED,
  p as UI_HIDDEN,
  d as UI_OPTIONS,
  E as UI_WIDGET,
  b as UI_WIDTH,
  a as UiWidgets,
  D as basicSchemaProps,
  h as buildOfItem,
  f as buildSchema,
  S as getSchemaDefaultModel,
  l as getSchemaPropDefaultValue,
  A as getTableDefaultUiSchema
};
