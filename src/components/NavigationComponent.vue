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
            subtitles: ['math', 'langs', 'writing', 'speed reading']
          },
          {
            title: 'courses',
            subtitles: ['full course', 'term course', 'short course']
          },
          {
            title: 'lections',
            subtitles: ['public', 'conversations', 'free conten', 'start lection']
          },
          {
            title: 'communities',
            subtitles: ['featured', 'create', 'by themes', 'by country']
          }
        ]
      }
    }
  }
</script>

<style scoped>
  @import url('../styles/navigation/navigation.css');
</style>