<template>
	<a
    href="#"
    class="navigation__sublink"
    v-for="sublink in sublinks"
    :key="sublink"
  >
    {{sublink}}
	</a>
</template>

<script>
  export default {
    name: 'NavigationSublink',
    props: {
      sublinks: Array
    }
  }
</script>

<style scoped>
  @import url('../styles/navigation/navigation__sublink.css');
</style>