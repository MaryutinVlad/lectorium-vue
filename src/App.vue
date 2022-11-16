<template>
  <HeaderComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
@import url('./fonts/fonts.css');

#app {
  display: flex;
  flex-direction: column;
  margin: 0 38px;
  padding: 0;
}
</style>
