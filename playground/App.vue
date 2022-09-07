<script lang="ts" setup>
import { Lister } from '../src/lib';
</script>

<template>
  <Lister :items="['ekmek al', 'kola al', ' köfte '].map((item) => ({ text: item }))" />
</template>
