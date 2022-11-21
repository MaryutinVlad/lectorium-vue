<template>
	<a
    class="footer__link"
    href=""
	>
    {{data.title}}
	</a>
</template>

<script>
  export default {
		name: 'FooterLink',
		props: {
			data: Object
		}
	}
</script>

<style scoped>
  @import url('../styles/footer/__links-section/footer__link.css');
</style>