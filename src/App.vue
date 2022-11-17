<template>
  <SignIn />
  <SignUp />
  <HeaderComponent />
  <NavigationComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavigationComponent,
    SignIn,
    SignUp
  }
}
</script>

<style>
@import url('./fonts/fonts.css');

#app {
  display: flex;
  flex-direction: column;
  margin: 0 25px;
  padding: 0;
  background-color: #FEFEFA;
}
</style>
