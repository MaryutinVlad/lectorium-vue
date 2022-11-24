<template>
  <div class="settings__item-container">
    <label for="switch-bar">
      {{data.title}}
    </label>
    <input class="settings__switch-bar" :type="data.type" id="switch-bar" value="!!!">
  </div>
</template>

<script>
  export default {
    name: 'SettingsItem',
    props: {
      data: Object
    }
  }
</script>

<style scoped>
  @import url('../styles/settings/settings__item-container.css');
  @import url('../styles/settings/settings__switch-bar.css');
</style>
