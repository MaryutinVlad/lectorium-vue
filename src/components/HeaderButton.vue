<template>
  <button
    class="header__button"
    @click="onClick"
  >
		{{data.title}}
		<div :class="data.classList"></div>
	</button>
</template>

<script>
  export default {
    name: 'HeaderButton',
		props: {
			data: Object
		},
    methods: {
      onClick() {
        console.log(this.$route.path)
        this.$emit('show-form', this.data.access)
      }
    }
  }
</script>

<style scoped>
  @import url('../styles/header/header__button.css');
  @import url('../styles/header/header__curve-bottom.css');
  @import url('../styles/header/header__curve-top.css');
</style>