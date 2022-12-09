<template>
	<div class="navigation__link-container">
    <router-link
      class="navigation__link"
      :to="{ name: 'section', params: { section: data.title }}">
      {{data.title}}
    </router-link>
    <div class="navigation__sublink-container">
			<NavigationLSublink
        :data="data"
      />
    </div>
	</div>
</template>

<script>
  import NavigationLSublink from './NavigationSublink'

  export default {
    name: 'NavigationLink',
		props: {
			data: Object
		},
    components: {
      NavigationLSublink
    }
  }
</script>

<style scoped>
  @import url('@/styles/navigation/navigation__link-container.css');
  @import url('@/styles/navigation/navigation__link.css');
	@import url('@/styles/navigation/navigation__sublink-container.css');
</style>