<template>
	<div class="navigation__link-container">
    <a class="navigation__link" href="#">
      {{data.title}}
    </a>
    <div class="navigation__sublink-container">
			<a href="">aaaaa</a>
			<a href="">aaaaa</a>
			<a href="">aaaaa</a>
			<a href="">aaaaa</a>
    </div>
	</div>
</template>

<script>
  export default {
    name: 'NavigationLink',
		props: {
			data: Object
		}
  }
</script>

<style scoped>
  @import url('../styles/navigation/navigation__link-container.css');
  @import url('../styles/navigation/navigation__link.css');
	@import url('../styles/navigation/navigation__sublink-container.css');
</style>