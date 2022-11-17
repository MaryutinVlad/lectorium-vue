<template>
	<header class="header">
		<h1 class="header__title">
			{{title}}
		</h1>
		<div>
			<button class="header__button">
				{{signIn.text}}
				<div class="header__curve-bottom"></div>
			</button>
			<button class="header__button">
				{{signUp.text}}
				<div class="header__curve-top"></div>
			</button>
			<button class="header__button">
				{{info.text}}
				<div class="header__curve-top header__curve-bottom"></div>
			</button>
		</div>
	</header>
</template>

<script>
  export default {
	name: 'HeaderComponent',
	data() {
		return {
			title: 'Lectorium',
			signIn: {
				text: 'sign in'
			},
			signUp: {
				text: 'sign up'
			},
			info: {
				text: 'info'
			}
		}
	}
  }
</script>

<style scoped>
  @import url('../styles/header/header.css');
  @import url('../styles/header/header__title.css');
  @import url('../styles/header/header__button.css');
  @import url('../styles/header/header__curve-bottom.css');
  @import url('../styles/header/header__curve-top.css');
</style>