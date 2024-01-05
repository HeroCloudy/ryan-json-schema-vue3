const I = "ui:hidden", f = "ui:disabled", b = "ui:width", E = "ui:options", O = "ui:widget", d = "ui:column";
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
}, p = (t, r) => {
  if (r == null)
    return t;
  if (r.length === 0)
    return {
      ...t,
      properties: {}
    };
  const n = {};
  return r.forEach((e) => {
    t.properties[e] && (n[e] = t.properties[e]);
  }), {
    ...t,
    properties: n
  };
}, S = (t, r) => {
  if (!t || !t.properties)
    return {};
  const n = p(t, r), e = {}, { properties: u } = n;
  return Object.keys(u).forEach((o) => {
    const c = u[o], i = c.prop || o;
    e[i] = l(c);
  }), e;
}, A = (t, r) => ({
  const: r,
  title: t
});
export {
  s as SchemaType,
  d as UI_COLUMN,
  f as UI_DISABLED,
  I as UI_HIDDEN,
  E as UI_OPTIONS,
  O as UI_WIDGET,
  b as UI_WIDTH,
  a as UiWidgets,
  D as basicSchemaProps,
  A as buildOfItem,
  p as buildSchema,
  S as getSchemaDefaultModel,
  l as getSchemaPropDefaultValue
};
