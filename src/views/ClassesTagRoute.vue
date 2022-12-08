<template>
  <SectionItem
    v-for="item in items"
    :key="item.title"
    :data="item"
  />
</template>

<script>
  import SectionItem from '@/components/main/SectionItem.vue'
  import classesItems from '@/resources/classesItems.json'

  export default {
    name: 'ClasssesTagRoute',
    components: {
      SectionItem
    },
    data() {
      return {
        items: classesItems.filter(item => item.tag === this.$route.path)
      }
    },
    watch: {
      $route(to, from) {
        console.log(to.path, from.path)
        this.items = classesItems.filter(item => item.tag === this.$route.path)
      }
    }
  }
</script>
