<template>
    <nav class="navigation">
        <a class="navigation__link" href="#">
            classes
        </a>
        <a class="navigation__link" href="#">
            courses
        </a>
        <a class="navigation__link" href="#">
            lections
        </a>
        <a class="navigation__link" href="#">
            communities
        </a>
    </nav>
</template>

<script>
  export default {
	name: 'NavigationComponent'
  }
</script>

<style scoped>
  @import url('../styles/navigation/navigation.css');
  @import url('../styles/navigation/navigation__link.css');
</style>