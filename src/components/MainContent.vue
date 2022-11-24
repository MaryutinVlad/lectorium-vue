<template>
	<main class="main">
    <ContentSection
      v-for="section of sections"
			:key="section.title"
			:data="section"
		/>
	</main>
</template>

<script>
  import ContentSection from './ContentSection'

  export default {
		name: 'MainContent',
		components: {
			ContentSection
		},
		data() {
			return {
				sections: [
					{
						title: 'New lessons',
						articles: [
							{
								id: 1,
								title: 'Test article title',
								src: 'test1.png',
								text: 'A short description. Two lines max...',
								tag: 'writing'
							},
							{
								id: 2,
								title: 'Test article title',
								src: 'test2.png',
								text: 'A short description. Two lines max...',
								tag: 'math'
							},
							{
								id: 3,
								title: 'Test article title',
								src: 'test3.png',
								text: 'A short description. Two lines max...',
								tag: 'tribalart'
							}
						]
					},
					{
						title: 'Free content',
						articles: [
              {
								id: 4,
								title: 'Test article title',
								src: 'test4.png',
								text: 'A short description. Two lines max...',
								tag: 'security'
							},
							{
								id: 5,
								title: 'Test article title',
								src: 'test5.png',
								text: 'A short description. Two lines max...',
								tag: 'planning'
							},
							{
								id: 6,
								title: 'Test article title',
								src: 'test6.png',
								text: 'A short description. Two lines max...',
								tag: 'music'
							}
						]
					},
					{
						title: 'Top lessons',
						articles: [
              {
								id: 7,
								title: 'Test article title',
								src: 'test7.png',
								text: 'A short description. Two lines max...',
								tag: 'healthcare'
							},
							{
								id: 8,
								title: 'Test article title',
								src: 'test8.png',
								text: 'A short description. Two lines max...',
								tag: 'security'
							},
							{
								id: 9,
								title: 'Test article title',
								src: 'test9.png',
								text: 'A short description. Two lines max...',
								tag: 'willpower'
							}
						]
					}
				]
			}
		}
	}
</script>

<style scoped>
  @import url('../styles/main/main.css');
</style>