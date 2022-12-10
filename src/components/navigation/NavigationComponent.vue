<template>
  <nav class="navigation">
    <NavigationLink
      v-for="link in links"
      :key="link"
      :title="link"
    />
  </nav>
</template>

<script>
  import NavigationLink from './NavigationLink';
  import navigationLinks from '@/resources/navigationLinks.json'

  export default {
    name: 'NavigationComponent',
    components: {
      NavigationLink
    },
    data() {
      return {
        links: navigationLinks
      }
    }
  }
</script>

<style scoped>
  @import url('@/styles/navigation/navigation.css');
</style>