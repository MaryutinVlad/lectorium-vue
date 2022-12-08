<template>
  <router-link
    class="section__navigation-link"
    :to="{ name: 'classesTag', params: { id: data.title.toLowerCase()}}"
  >
    {{data.title}}
  </router-link>
</template>

<script>
  export default {
    name: 'SectionNavigationItem',
    props: {
      data: Object
    }
  }
</script>

<style>
  @import url('@/styles/section/section__navigation-link.css');
</style>