<template>
  <div>
    <h2>MainPage</h2>
    <nav>
      <RouterLink to="/">hello</RouterLink>
      |
      <RouterLink to="/world">world</RouterLink>
    </nav>
    <div><RouterView /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const MainPage = defineComponent({
  setup() {
    return {}
  },
})
export default MainPage
</script>
