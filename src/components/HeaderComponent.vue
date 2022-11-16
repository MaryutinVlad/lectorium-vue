<template>
	<header class="header">
		<h1 class="header__title">
			{{title}}
		</h1>
		<div>
			<button class="header__button">
				<img src="../images/sign_in_button.png" alt="">
			</button>
			<button class="header__button">
				{{signUp.text}}
			</button>
			<button class="header__button">
				{{info.text}}
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
</style>