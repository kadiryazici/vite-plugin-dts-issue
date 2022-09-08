import { ref, defineComponent, type PropType, renderList } from 'vue';

export interface Props {
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
    return () => <ul>{...renderList(props.items, (item) => <li>{item.text}</li>)}</ul>;
  },
});
