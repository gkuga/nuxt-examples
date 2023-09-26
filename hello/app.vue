<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

const x2 = ref(0)
const y2 = ref(0)

function update2(event) {
  x2.value = event.pageX + 10
  y2.value = event.pageY + 10
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))

onMounted(() => window.addEventListener('mousemove', update2))
onUnmounted(() => window.removeEventListener('mousemove', update2))

</script>

<template>
  <h2>Hello</h2>
  <p>
    Mouse position is at: {{ x }}, {{ y }}
  </p>
  <p>
    Mouse position is at: {{ x2 }}, {{ y2 }}
  </p>
</template>
