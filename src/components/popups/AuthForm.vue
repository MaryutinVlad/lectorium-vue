<template>
  <div
    class="overlay"
    @click.self="store.togglePopup(data.access)"
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
  import { useStore } from '@/stores'
  import authServices from '@/resources/authServices.json'

  export default {
    name: 'AuthForm',
    props: {
      data: Object,
    },
    setup() {
      const store = useStore()
      return { store }
    },
    methods: {
      async submitForm() {
        if (!this.values.username) {
        const { data } = await apiAuth.signIn(this.values)
        localStorage.setItem('lectorium-jwt', data.token)
        //the futher code should be rewritten to async
        this.store.loggedIn = true;
        this.store.togglePopup(this.data.access)
      } else {
        const { data } = await apiAuth.signUp(this.values)
        //the futher code should be rewritten to async
        this.store.togglePopup(this.data.access)
        this.store.togglePopup('signIn')
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
        services: authServices
      }
    }
  }
</script>

<style scoped>
  @import url('@/styles/overlay/overlay.css');
  @import url('@/styles/overlay/overlay_hidden.css');
  @import url('@/styles/form/form.css');
  @import url('@/styles/form/form__title.css');
	@import url('@/styles/form/form__input-firld-container.css');
  @import url('@/styles/form/form__input-field.css');
  @import url('@/styles/form/form__fast-auth-container.css');
  @import url('@/styles/form/form__fast-auth-item.css');
  @import url('@/styles/form/form__fast-auth-image.css');
  @import url('@/styles/form/form__submit-button.css');
</style>