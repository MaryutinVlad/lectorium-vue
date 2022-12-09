<template>
  <router-link
    class="section__navigation-link"
    :to="{ name: 'sectionTag', params: { tag: data}}"
  >
    {{data}}
  </router-link>
</template>

<script>
  export default {
    name: 'SectionNavigationItem',
    props: {
      data: String
    }
  }
</script>

<style>
  @import url('@/styles/section/section__navigation-link.css');
</style>