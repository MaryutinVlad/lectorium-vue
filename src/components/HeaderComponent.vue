<template>
	<header class="header">
		<h1 class="header__title">
			Lectorium
		</h1>
		<div>
			<HeaderButton
        v-for="button in buttons"
				:key="button.title"
				:data="button"
			/>
		</div>
	</header>
</template>

<script>
  import HeaderButton from './HeaderButton'

  export default {
		name: 'HeaderComponent',
		components: {
      HeaderButton,
    },
		data() {
			return {
				buttons: [
					{
						title: 'sign in',
						classList: 'header__curve-top'
					},
					{
						title: 'sign up',
						classList: 'header__curve-bottom'
					},
					{
						title: 'info',
						classList: 'header__curve-top header__curve-bottom'
					}
				]
			}
		}
  }
</script>

<style scoped>
  @import url('../styles/header/header.css');
  @import url('../styles/header/header__title.css');
</style>