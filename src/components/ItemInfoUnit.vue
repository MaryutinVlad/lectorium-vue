<template>
  <div class="infoUnit">
    <p class="infoUnit__title">
      {{data.title}}
    </p>
    <p class="infoUnit__value">
      {{data.value}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'ItemInfoUnit',
    props: {
      data: Object
    }
  }
</script>

<style scoped>
  @import url('../styles/infoUnit/infoUnit.css');
  @import url('../styles/infoUnit/infoUnit__title.css');
  @import url('../styles/infoUnit/infoUnit__value.css');
</style>