<template>
  <h5 class="settings__lower-section-title">
    {{data.title}}
  </h5>
  <div
    :class="`settings__lower-section-container settings__lower-section-container_type_${data.type}`"
  >
    <div
      v-for="item of data.items"
      :key="item"
      :data="item"
    >
      {{item}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EditorComponent',
    props: {
      data: Object
    }
  }
</script>

<style scoped>
  @import url('@/styles/settings/settings__lower-section-title.css');
  @import url('@/styles/settings/settings__lower-section-container.css');
  @import url('@/styles/settings/settings__lower-section-container_type_model.css');
  @import url('@/styles/settings/settings__lower-section-container_type_list.css');
</style>
