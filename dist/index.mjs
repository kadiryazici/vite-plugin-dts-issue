import { defineComponent as u, openBlock as n, createElementBlock as r, Fragment as l, createElementVNode as d, renderList as a, toDisplayString as p, createTextVNode as f, h as m, createVNode as _ } from "vue";
const y = /* @__PURE__ */ f(" " + /* @__PURE__ */ p(5)), x = {
  name: "TheListeleme"
}, N = /* @__PURE__ */ u({
  ...x,
  props: {
    items: { default: () => [] }
  },
  setup(e) {
    return (t, o) => (n(), r(l, null, [
      d("ul", null, [
        (n(!0), r(l, null, a(e.items, (s) => (n(), r("li", {
          key: s.text
        }, p(s.text), 1))), 128))
      ]),
      y
    ], 64));
  }
}), C = u({
  name: "TheListeleme",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return () => m(
      "ul",
      null,
      a(e.items, (t) => m("li", {}, t.text))
    );
  }
}), g = u({
  name: "TheListeleme",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return () => _("ul", null, [...a(e.items, (t) => _("li", null, [t.text]))]);
  }
}), h = u({
  name: "TheListeleme",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}), L = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, c] of t)
    o[s] = c;
  return o;
}, T = /* @__PURE__ */ f(" " + /* @__PURE__ */ p(5));
function S(e, t, o, s, c, $) {
  return n(), r(l, null, [
    d("ul", null, [
      (n(!0), r(l, null, a(e.items, (i) => (n(), r("li", {
        key: i.text
      }, p(i.text), 1))), 128))
    ]),
    T
  ], 64);
}
const A = /* @__PURE__ */ L(h, [["render", S]]);
export {
  N as Lister,
  A as ListerNormalSetup,
  C as ListerTS,
  g as ListerTSX
};
