<template>
	<header class="header">
		<h1 class="header__title">
			Lectorium
		</h1>
		<div>
			<HeaderButton
        @show-form="showForm"
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
		methods: {
			showForm(data) {
				this.$emit('show-form', data)
			}
		},
		emits: [
			'show-form'
		],
		data() {
			return {
				buttons: [
					{
						title: 'sign in',
						access: 'signIn',
						classList: 'header__curve-top'
					},
					{
						title: 'sign up',
						access: 'signUp',
						classList: 'header__curve-bottom'
					},
					{
						title: 'info',
						access: 'info',
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