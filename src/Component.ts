import { h, defineComponent, type PropType, renderList } from 'vue';

interface Props {
  items: { text: string }[];
}

export default defineComponent({
  name: 'TheListeleme',
  props: {
    items: {
      type: Array as PropType<Props['items']>,
      default: () => [],
    },
  },
  setup(props) {
    return () =>
      h(
        'ul',
        null,
        renderList(props.items, (item) => h('li', {}, item.text)),
      );
  },
});
