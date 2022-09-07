import { ref, defineComponent, type PropType, renderList } from 'vue';

export default defineComponent({
  name: 'TheListeleme',
  props: {
    items: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  setup(props) {
    return () => <ul>{...renderList(props.items, (item) => <li>{item}</li>)}</ul>;
  },
});
