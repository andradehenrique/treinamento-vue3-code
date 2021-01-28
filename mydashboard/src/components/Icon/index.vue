<template>
  <component :is="name" v-bind="$props"></component>
</template>
<script>
import Loading from './Loading.vue'
import Copy from './Copy.vue'
import ChevronDown from './ChevronDown.vue'

export default {
  components: { Loading, Copy, ChevronDown },
  props: {
    name: { type: String, required: true }
  }
}
</script>
