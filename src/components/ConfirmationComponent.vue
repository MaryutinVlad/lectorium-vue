<template>
  <div
    class="overlay"
    @click="onOverlayClick"
  >
    <form
      class="form"
      action="#"
      @submit.prevent="onConfirm"
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
  export default {
    name: 'ConfirmationComponent',
    props: {
      data: Object
    },
    methods: {
      onOverlayClick(e) {
        this.$emit('hide-popup', this.data.access, e.target !== e.currentTarget)
      },
      onConfirm() {
        this.$emit('confirm-action', this.data.access)
      }
    }
  }
</script>

<style scoped>
  @import url('../styles/overlay/overlay.css');
  @import url('../styles/overlay/overlay_hidden.css');
  @import url('../styles/form/form.css');
  @import url('../styles/form/form__title.css');
  @import url('../styles/form/form__submit-button.css');
</style>