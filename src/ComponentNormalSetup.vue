<script lang="ts">
import { defineComponent, type PropType } from 'vue';

type Item = { text: string };

export interface Props {
  items: Item[];
}

export default defineComponent({
  name: 'TheListeleme',
  props: {
    items: {
      type: Array as PropType<Props['items']>,
      default: () => [],
    },
  },
});
</script>

<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.text"
    >
      {{ item.text }}
    </li>
  </ul>
  {{ 5 }}
</template>
