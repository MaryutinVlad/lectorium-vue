<template>
	<article class="section-item">
		<img
      class="section-item__image"
			:src="require(`@/images/` + data.src)"
			:alt="data.title"
		/>
		<h4 class="section-item__title">
			{{data.title}}
		</h4>
		<p class="section-item__text">
			{{data.text}}
		</p>
		<div class="section-item__button-container">
			<button
        class="section-item__tag-button"
			>
        #{{data.tag}}
			</button>
			<button
        class="section-item__expand-button"
			>
				Expand
			</button>
		</div>
	</article>
</template>

<script>
  export default {
    name: 'ContentSectionItem',
		props: {
			data: Object
		}
  }
</script>

<style scoped>
  @import url('../styles/section-item/section-item.css');
  @import url('../styles/section-item/section-item__image.css');
	@import url('../styles/section-item/section-item__title.css');
	@import url('../styles/section-item/section-item__text.css');
	@import url('../styles/section-item/section-item__button-container.css');
	@import url('../styles/section-item/section-item__tag-button.css');
	@import url('../styles/section-item/section-item__expand-button.css');
</style>>