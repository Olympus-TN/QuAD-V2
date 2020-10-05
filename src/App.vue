<template>
<div>
  <navbar/>
  <signup/>
</div>

</template>

<script>
import signup from "./components/signup.vue"
import navbar from "./components/navbar.vue"

export default {
  name: 'App',
  components: {
signup,navbar
  }
}
</script>

<style>

</style>
