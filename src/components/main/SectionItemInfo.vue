<template>
  <div class="section__item-info">
    <ItemInfoUnit
        v-for="unit in data"
        :key="unit.title"
        :data="unit"
      />
  </div>
</template>

<script>
  import ItemInfoUnit from './ItemInfoUnit'

  export default {
    name: 'SectionItemInfo',
    props: {
      data: Array
    },
    components: {
      ItemInfoUnit
    }
  }
</script>

<style scoped>
  @import url('@/styles/section/section__item-info.css');
</style>