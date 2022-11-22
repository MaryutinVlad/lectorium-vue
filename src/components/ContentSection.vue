<template>
	<section class="main__section">
		<h2 class="main__section-title">
			{{data.title}}
		</h2>
		<div class="main__section-content-container">
			<ContentSectionItem
        v-for="article of data.articles"
				:key="article.id"
				:data="article"
			/>
		</div>
	</section>
</template>

<script>
  import ContentSectionItem from './ContentSectionItem';

  export default {
    name: 'ContentSection',
		props: {
			data: Object
		},
		components: {
			ContentSectionItem
		}
  }
</script>

<style scoped>
  @import url('../styles/main/main__section.css');
	@import url('../styles/main/main__section-title.css');
	@import url('../styles/main/main__section-content-container.css');
</style>