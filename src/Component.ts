import { h, ref, defineComponent, type PropType, renderList } from 'vue';

export default defineComponent({
  name: 'TheListeleme',
  props: {
    items: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  setup(props) {
    const a = ref(5);

    return () =>
      h(
        'ul',
        null,
        renderList(props.items, (item) => h('li', {}, item)),
      );
  },
});
