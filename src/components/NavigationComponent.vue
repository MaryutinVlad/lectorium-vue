<template>
  <nav class="navigation">
    <NavigationLink
      v-for="link in links"
      :key="link.title"
      :data="link"
    />
  </nav>
</template>

<script>
  import NavigationLink from './NavigationLink';

  export default {
    name: 'NavigationComponent',
    components: {
      NavigationLink
    },
    data() {
      return {
        links: [
          {
            title: 'classes',
            route: '/classes',
            sublinks: ['math', 'langs', 'writing', 'speed reading']
          },
          {
            title: 'courses',
            route: '/courses',
            sublinks: ['full course', 'term course', 'short course']
          },
          {
            title: 'lections',
            route: '/lections',
            sublinks: ['public', 'conversations', 'free conten', 'start lection']
          },
          {
            title: 'communities',
            route: '/communities',
            sublinks: ['featured', 'create', 'by themes', 'by country']
          }
        ]
      }
    }
  }
</script>

<style scoped>
  @import url('../styles/navigation/navigation.css');
</style>