<template>
	<router-link
    :to="{ name: 'sectionTag', params: { section: data.title ,tag: sublink}}"
    class="navigation__sublink"
    v-for="sublink in data.sublinks"
    :key="sublink"
  >
    {{sublink}}
  </router-link>
</template>

<script>
  export default {
    name: 'NavigationSublink',
    props: {
      data: Object
    }
  }
</script>

<style scoped>
  @import url('@/styles/navigation/navigation__sublink.css');
</style>