<template>
  <section class="section">
    <h2 class="section__title">
      {{title}}
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
        <SectionItem
          v-for="item in items"
          :key="item.title"
          :data="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import SectionNavigationItem from './SectionNavigationItem'
  import SectionItem from './SectionItem.vue'

  export default {
    name: 'SectionComponent',
    props: {
      title: String,
      items: Array,
      links: Array
    },
    components: {
      SectionNavigationItem,
      SectionItem
    }
  }
</script>

<style scoped>
  @import url('../styles/section/section.css');
  @import url('../styles/section/section__title.css');
  @import url('../styles/section/section__container.css');
  @import url('../styles/section/section__navigation.css');
  @import url('../styles/section/section__content.css');
</style>