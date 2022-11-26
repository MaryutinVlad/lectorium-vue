<template>
	<header class="header">
		<h1 class="header__title">
			Lectorium
		</h1>
		<div>
			<HeaderButton
        @show-form="(loggedIn ? showInfo : showForm)"
        v-for="button in (loggedIn ? logged : unlogged)"
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
		props: {
			loggedIn: Boolean
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
				unlogged: [
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
				],
				logged: [
          {
						title: 'user',
						access: 'userSettings',
						classList: 'header__curve-top'
					},
					{
						title: 'settings',
						access: 'settings',
						classList: 'header__curve-bottom'
					},
					{
						title: 'log out',
						access: 'logout',
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