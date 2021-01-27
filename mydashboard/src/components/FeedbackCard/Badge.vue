<template>
  <span
    :class="`bg-${classColor}`"
    class="p-2 text-xs font-black text-white uppercase rounded-full"
    >{{ label }}</span
  >
</template>

<script>
import { computed } from 'vue'

const LABELS = {
  ISSUE: 'problema',
  IDEA: 'ideia'
}
const COLORS = {
  ISSUE: 'brand-danger',
  IDEA: 'brand-warning'
}

export default {
  props: {
    type: { type: String, required: true }
  },
  setup (props) {
    const label = computed(() => {
      return LABELS[props.type] ?? 'outros'
    })

    const classColor = computed(() => {
      return COLORS[props.type] ?? 'brand-graydark'
    })

    return { label, classColor }
  }
}
</script>
