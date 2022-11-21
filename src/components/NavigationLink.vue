<template>
	<div class="navigation__link-container">
    <a class="navigation__link" href="#">
      {{data.title}}
    </a>
    <div class="navigation__sublink-container">
			<NavigationLSublink
        :sublinks="data.sublinks"
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
  @import url('../styles/navigation/navigation__link-container.css');
  @import url('../styles/navigation/navigation__link.css');
	@import url('../styles/navigation/navigation__sublink-container.css');
</style>