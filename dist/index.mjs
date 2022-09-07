import { defineComponent as i, openBlock as t, createElementBlock as n, Fragment as l, createElementVNode as m, renderList as a, toDisplayString as u, createTextVNode as c, ref as p, h as o } from "vue";
const _ = /* @__PURE__ */ c(" " + /* @__PURE__ */ u(5)), d = {
  name: "TheListeleme"
}, h = /* @__PURE__ */ i({
  ...d,
  props: {
    items: { default: () => [] }
  },
  setup(e) {
    return (r, f) => (t(), n(l, null, [
      m("ul", null, [
        (t(!0), n(l, null, a(e.items, (s) => (t(), n("li", {
          key: s.text
        }, u(s.text), 1))), 128))
      ]),
      _
    ], 64));
  }
}), x = i({
  name: "TheListeleme",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return p(5), () => o(
      "ul",
      null,
      a(e.items, (r) => o("li", {}, r))
    );
  }
});
export {
  h as Lister,
  x as ListerTS,
  x as ListerTSX
};
