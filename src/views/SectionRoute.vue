<template>
  <section class="section">
    <h2 class="section__title">
      {{$route.path}}
    </h2>
    <div class="section__container">
      <nav class="section__navigation">
        <SectionNavigationItem
          v-for="tag in tags"
          :key="tag"
          :data="tag"
        />
      </nav>
      <div class="section__content">
        <SectionItem
          v-show="!$route.params.tag"
          v-for="item in items"
          :key="item.title"
          :data="item"
        />
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
  import SectionNavigationItem from '@/components/main/navigation/SectionNavigationItem';
  import SectionItem from '@/components/main/SectionItem.vue'

  export default {
    name: 'SectionRoute',
    components: {
      SectionNavigationItem,
      SectionItem
    },
    data() {
      return {
        items: require(`../resources/${this.$route.params.section}Items.json`).items,
        tags: require(`../resources/${this.$route.params.section}Items.json`).tags
      }
    },
    watch: {
      $route() {
        this.items = require(`../resources/${this.$route.params.section}Items.json`).items,
        this.tags = require(`../resources/${this.$route.params.section}Items.json`).tags
        console.log(this.$route)
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
