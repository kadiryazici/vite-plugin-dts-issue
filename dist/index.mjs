import { defineComponent as a, openBlock as t, createElementBlock as n, Fragment as l, createElementVNode as _, renderList as c, toDisplayString as u, createTextVNode as d, ref as f, h as m } from "vue";
const y = /* @__PURE__ */ d(" " + /* @__PURE__ */ u(5)), h = {
  name: "TheListeleme"
}, N = /* @__PURE__ */ a({
  ...h,
  props: {
    items: { default: () => [] }
  },
  setup(e) {
    return (r, o) => (t(), n(l, null, [
      _("ul", null, [
        (t(!0), n(l, null, c(e.items, (s) => (t(), n("li", {
          key: s.text
        }, u(s.text), 1))), 128))
      ]),
      y
    ], 64));
  }
}), g = a({
  name: "TheListeleme",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return f(5), () => m(
      "ul",
      null,
      c(e.items, (r) => m("li", {}, r))
    );
  }
}), x = a({
  name: "TheListeleme",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}), L = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, i] of r)
    o[s] = i;
  return o;
}, T = /* @__PURE__ */ d(" " + /* @__PURE__ */ u(5));
function $(e, r, o, s, i, k) {
  return t(), n(l, null, [
    _("ul", null, [
      (t(!0), n(l, null, c(e.items, (p) => (t(), n("li", {
        key: p.text
      }, u(p.text), 1))), 128))
    ]),
    T
  ], 64);
}
const C = /* @__PURE__ */ L(x, [["render", $]]);
export {
  N as Lister,
  C as ListerNormalSetup,
  g as ListerTS,
  g as ListerTSX
};
