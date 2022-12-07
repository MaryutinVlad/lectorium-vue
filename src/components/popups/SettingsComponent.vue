<template>
  <div
    class="overlay"
    @click.self="store.togglePopup(data.access)"
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
  import { useStore } from '@/stores';

  export default {
    name: 'SettingsComponent',
    props: {
      data: Object
    },
    components: {
      SettingsItem,
      EditorComponent
    },
    setup() {
      const store = useStore()
      return { store }
    }
  }
</script>

<style scoped>
  @import url('@/styles/settings/settings.css');
  @import url('@/styles/settings/settings__title.css');
  @import url('@/styles/settings/settings__upper-section.css');
  @import url('@/styles/settings/settings__lower-section.css');
</style>
