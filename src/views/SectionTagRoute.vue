<template>
  <SectionItem
    v-for="item in items"
    :key="item.title"
    :data="item"
  />
</template>

<script>
  import SectionItem from '@/components/main/SectionItem.vue'

  export default {
    name: 'SectionTagRoute',
    components: {
      SectionItem
    },
    data() {
      return {
        items: require(`@/resources/${this.$route.params.section}Items.json`).items
          .filter(item => item.tag === this.$route.params.tag)
      }
    },
    watch: {
      $route() {
        this.items = require(`@/resources/${this.$route.params.section}Items.json`).items
          .filter(item => item.tag === this.$route.params.tag)  
      }
    }
  }
</script>
