<template>
  <div
    class="overlay"
    @click.self="store.togglePopup(data.access)"
  >
    <form
      class="form"
      action="#"
      @submit.prevent="confirm"
      novalidate
    >
      <h3 class="form__title">
        {{data.title}}
      </h3>
      <p class="form__description">
        {{data.description}}
      </p>
      <input
        class="form__submit-button"
        type="submit"
        value="log out"
      />
    </form>
  </div>
</template>

<script>
  import { useStore } from '@/stores'

  export default {
    name: 'ConfirmationComponent',
    props: {
      data: Object
    },
    setup() {
      const store = useStore()
      return { store }
    },
    methods: {
      confirm() {
        localStorage.removeItem('lectorium-jwt')
        this.store.loggedIn = false
        this.$router.push('/')
        this.store.togglePopup(this.data.access)
      }
    }
  }
</script>

<style scoped>
  @import url('@/styles/overlay/overlay.css');
  @import url('@/styles/overlay/overlay_hidden.css');
  @import url('@/styles/form/form.css');
  @import url('@/styles/form/form__title.css');
  @import url('@/styles/form/form__description.css');
  @import url('@/styles/form/form__submit-button.css');
</style>