<script lang="ts">
export interface Props {
  items: { text: string }[];
}

export default {
  name: 'TheListeleme',
};
</script>

<script lang="ts" setup>
withDefaults(defineProps<Props>(), {
  items: () => [],
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
