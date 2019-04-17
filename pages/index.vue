<template>
  <section class="container">
    <div>
      <logo />
      <headings />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Headings from '~/components/Headings.vue'

export default {
  components: {
    Logo,
    Headings
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
