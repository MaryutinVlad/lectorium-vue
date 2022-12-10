<template>
	<footer class="footer">
		<div class="footer__logo-container">
			<img
        class="footer__logo"
				src="@/images/logo.svg"
				alt="Lectorium"
				@click="toTop"
			/>
			<h3 class="footer__logo-title">
				Lectorium
			</h3>
		</div>
		<div class="footer__links-section">
			<FooterLink
        v-for="item in links"
				:key="item.title"
				:data="item"
			/>
			<p class="footer__logo-copy">
				&copy; Lectorium 2022
			</p>
		</div>
		<div class="footer__socials-section">
			<FooterSocial
        v-for="item in socials"
				:key="item.title"
				:data="item"
			/>
		</div>
	</footer>
</template>

<script>
  import FooterLink from './FooterLink'
  import FooterSocial from './FooterSocial'
	import footerSocials from '@/resources/footerSocials.json'

  export default {
		name: 'FooterComponent',
		components: {
			FooterLink,
			FooterSocial
		},
		methods: {
			toTop() {
				window.scrollTo(0, 0)
			}
		},
		data() {
			return {
				socials: footerSocials.socials,
				links: footerSocials.links
			}
		}
	}
</script>

<style scoped>
  @import url('@/styles/footer/footer.css');
	@import url('@/styles/footer/__logo-container/footer__logo-container.css');
	@import url('@/styles/footer/__logo-container/footer__logo.css');
	@import url('@/styles/footer/__logo-container/footer__logo-title.css');
	@import url('@/styles/footer/__links-section/footer__links-section.css');
	@import url('@/styles/footer/__links-section/footer__logo-copy.css');
	@import url('@/styles/footer/__socials-section/footer__socials-section.css');
</style>