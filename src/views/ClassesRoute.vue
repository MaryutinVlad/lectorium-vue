<template>
  <section class="section">
    <h2 class="section__title">
      {{$route.path}}
    </h2>
    <div class="section__container">
      <nav class="section__navigation">
        <SectionNavigationItem
          v-for="link in links"
          :key="link.title"
          :data="link"
        />
      </nav>
      <div class="section__content">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
  import SectionNavigationItem from '@/components/main/navigation/SectionNavigationItem';

  export default {
    name: 'ClassesRoute',
    components: {
      SectionNavigationItem
    },
    data() {
      return {
        links: require(`../resources/classesLinks.json`)
      }
    }
  }
</script>

<style scoped>
  @import url('@/styles/section/section.css');
  @import url('@/styles/section/section__title.css');
  @import url('@/styles/section/section__container.css');
  @import url('@/styles/section/section__navigation.css');
  @import url('@/styles/section/section__content.css');
</style>
