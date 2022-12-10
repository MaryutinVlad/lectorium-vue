<template>
	<router-link
    :to="{ name: 'sectionTag', params: { section: section, tag: sublink}}"
    class="navigation__sublink"
    v-for="sublink in sublinks"
    :key="sublink"
  >
    {{sublink}}
  </router-link>
</template>

<script>
  export default {
    name: 'NavigationSublink',
    props: {
      sublinks: Array,
      section: String
    }
  }
</script>

<style scoped>
  @import url('@/styles/navigation/navigation__sublink.css');
</style>