<template>
  <AConfigprovider prefix-cls="operate-admin">
    <RouterView />
  </AConfigprovider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
console.log(import.meta.env)
export default defineComponent({
  name: 'App',
})
</script>
