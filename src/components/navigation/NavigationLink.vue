<template>
	<div class="navigation__link-container">
    <router-link
      class="navigation__link"
      :to="{ name: 'section', params: { section: title }}">
      {{title}}
    </router-link>
    <div class="navigation__sublink-container">
			<NavigationLSublink
        :sublinks="sublinks"
        :section="title"
      />
    </div>
	</div>
</template>

<script>
  import NavigationLSublink from './NavigationSublink'

  export default {
    name: 'NavigationLink',
		props: {
			title: String
		},
    components: {
      NavigationLSublink
    },
    data() {
      return {
        sublinks: require(`@/resources/${this.title}Items.json`).tags
      }
    }
  }
</script>

<style scoped>
  @import url('@/styles/navigation/navigation__link-container.css');
  @import url('@/styles/navigation/navigation__link.css');
	@import url('@/styles/navigation/navigation__sublink-container.css');
</style>