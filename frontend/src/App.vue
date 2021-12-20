<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  created() {
    console.log(process.env.VUE_APP_BASE_URL)
  }
}
</script>

