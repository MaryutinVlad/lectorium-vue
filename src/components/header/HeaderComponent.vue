<template>
	<header class="header">
		<router-link
      class="header__title"
			to="/"
		>
			Lectorium
		</router-link>
		<div>
			<HeaderButton
        v-for="button in (loggedIn ? logged : unlogged)"
				:key="button.title"
				:data="button"
			/>
		</div>
	</header>
</template>

<script>
  import headerButtons from '@/resources/headerButtons.json'
  import HeaderButton from './HeaderButton'

  export default {
		name: 'HeaderComponent',
		components: {
      HeaderButton,
    },
		props: {
			loggedIn: Boolean
		},
		data() {
			return {
				unlogged: headerButtons.unlogged,
				logged: headerButtons.logged
			}
		},
  }
</script>

<style scoped>
  @import url('@/styles/header/header.css');
  @import url('@/styles/header/header__title.css');
</style>