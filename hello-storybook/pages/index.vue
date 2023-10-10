<script setup lang="ts">
const message = ref("Hello")
</script>

<template>
  <h1 class="title">{{ message }}</h1>
</template>

<style lang="scss" scoped>
.title {
  color: red;
}
</style>
