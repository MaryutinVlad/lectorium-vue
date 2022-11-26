<template>
  <div class="settings__item-container">
    <span>
      {{data.title}}
    </span>
    <input
      class="settings__input-field"
      :type="data.type"
      v-show="!data.switch"
      :value="data.color==='#4CB36F' ? 'Proceed' : 'Expand'"
      :style="{
        color: data.color,
        width: data.type==='number' ? '70px' : '160px'
      }"
    />
    <div
      class="settings__switch-bar"
      v-show="data.switch"
    >
      <div
        class="settings__switch-bar-pointer"
        @click="toggleBar"
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SettingsItem',
    props: {
      data: Object
    },
    methods: {
      toggleBar(e) {
        e.target.classList.toggle('settings__switch-bar-pointer_active');
      }
    }
  }
</script>

<style scoped>
  @import url('../styles/settings/settings__item-container.css');
  @import url('../styles/settings/settings__input-field.css');
  @import url('../styles/settings/settings__switch-bar.css');
  @import url('../styles/settings/settings__switch-bar-pointer.css');
  @import url('../styles/settings/settings__switch-bar-pointer_active.css');
</style>
