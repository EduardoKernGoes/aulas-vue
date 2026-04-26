<template>
  <DefaultHeader />
  <div class="container">
    <RouterView />
  </div>
  <DefaultFooter />
</template>

<script>
  import DefaultHeader from './components/DefaultHeader.vue';
  import DefaultFooter from './components/DefaultFooter.vue';
  export default {
    name: 'App',
    components: {
      DefaultHeader,
      DefaultFooter,
    }
  }
</script>

<style scoped></style>