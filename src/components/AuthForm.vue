<template>
  <div
    class="overlay"
    @click="onClick"
    >
    <form
      class="form"
			action="#"
      @submit.prevent="submitForm"
      novalidate
		>
      <h2 class="form__title">
        {{data.title}}
      </h2>
      <div class="form__input-field-container">
        <input
          v-for="item in data.items"
					class="form__input-field"
					:key="item"
					:type="item"
					:placeholder="item"
          v-model="values[item]"
				>
      </div>
        <div class="form__fast-auth-container">
          <a
            v-for="item in services"
						:key="item.title"
						class="form__fast-auth-item"
						href="#"
					>
            <img
              class="form__fast-auth-image" 
							:src="require(`@/images/` + item.src)"
							:alt="item.title"
						>
          </a>
        </div>
        <input
          class="form__submit-button"
					type="submit"
					:value="data.title.toLowerCase()"
				>
    </form>
  </div>
</template>

<script>
  import { apiAuth } from '@/helpers/apiAuth'

  export default {
    name: 'AuthForm',
    props: {
      data: Object,
    },
    emits: [
      'hide-form',
      'auth-user'
    ],
    methods: {
      onClick(e) {
        this.$emit('hide-form', this.data.access, e.target !== e.currentTarget)
      },
      async submitForm() {
        if (!this.values.username) {
        console.log('sign in')
        const { data } = await apiAuth.signIn(this.values)
        localStorage.setItem('lectorium-jwt', data.token)
        this.loggedIn = true;
      } else {
        console.log('sign up')
        const { data } = await apiAuth.signUp(this.values)
        console.log(data)
      }
      }
    },
    data() {
      return {
        values: {
          email: '',
          password: '',
          username: ''
        },
        services: [
          {
            title: 'Google',
            src: 'Google_Authenticator_for_Android_icon.svg'
          },
          {
            title: 'Apple',
            src: 'apple-social-logo-outline_icon-icons.com_74064.svg'
          },
          {
            title: 'Facebook',
            src: 'fb_icon-icons.com_65434.svg'
          }
        ],
      }
    }
  }
</script>

<style scoped>
  @import url('../styles/overlay/overlay.css');
  @import url('../styles/overlay/overlay_hidden.css');
  @import url('../styles/form/form.css');
  @import url('../styles/form/form__title.css');
	@import url('../styles/form/form__input-firld-container.css');
  @import url('../styles/form/form__input-field.css');
  @import url('../styles/form/form__fast-auth-container.css');
  @import url('../styles/form/form__fast-auth-item.css');
  @import url('../styles/form/form__fast-auth-image.css');
  @import url('../styles/form/form__submit-button.css');
</style>