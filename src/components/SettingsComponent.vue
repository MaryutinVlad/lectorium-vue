<template>
  <div
    class="overlay"
    @click="onClick"
  >
    <div class="settings">
      <h3 class="settings__title">
        {{data.title}}
      </h3>
      <div class="settings__upper-section">
        <SettingsItem
          v-for="item of data.items"
          :key="item.title"
          :data="item"
        />
      </div>
      <div class="settings__lower-section">
        <EditorComponent
          :data="data.lowerSection"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import SettingsItem from './SettingsItem'
  import EditorComponent from './EditorComponent'

  export default {
    name: 'SettingsComponent',
    props: {
      data: Object
    },
    components: {
      SettingsItem,
      EditorComponent
    },
    emits: [
      'hide-settings'
    ],
    methods: {
      onClick(e) {
        this.$emit('hide-settings', this.data.access, e.target !== e.currentTarget)
      }
    }
  }
</script>

<style scoped>
  @import url('../styles/settings/settings.css');
  @import url('../styles/settings/settings__title.css');
  @import url('../styles/settings/settings__upper-section.css');
  @import url('../styles/settings/settings__lower-section.css');
</style>
