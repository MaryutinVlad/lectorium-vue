<template>
	<img
    class="footer__social-icon"
		:src="require(`@/images/` + data.src)"
		:alt="data.title"
	/>
</template>

<script>
  export default {
		name: 'FooterSocial',
		props: {
			data: Object
		}
	}
</script>

<style scoped>
  @import url('../styles/footer/__socials-section/footer__social-icon.css');
</style>