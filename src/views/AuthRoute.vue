<template>
  <AuthForm
    :data="signIn"
  />
</template>

<script>
  import AuthForm from '@/components/popups/AuthForm.vue'

  export default {
    name: 'AuthRoute',
    components: {
      AuthForm
    },
    data() {
      return {
        signIn: {
          title: 'Sign In',
          access: 'signIn',
          items: ['email', 'password']
        },
        signUp: {
          title: 'Sign Up',
          access: 'signUp',
          items: ['email', 'password', 'username']
        },
      }
    }
  }
</script>

<style scoped>

</style>