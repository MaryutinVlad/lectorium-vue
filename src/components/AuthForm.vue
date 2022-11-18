<template>
  <div class="overlay">
    <form
      class="form"
			action="#"
		>
      <h2 class="form__title">
        {{data.text}}
      </h2>
      <div class="form__input-field-container">
        <input
          v-for="item in data.items"
					class="form__input-field"
					:key="item"
					:type="item"
					:placeholder="item"
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
					:value="data.text.toLowerCase()"
				>
    </form>
  </div>
</template>

<script>
  export default {
	name: 'AuthForm',
    props: {
        data: Object,
				services: Array
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