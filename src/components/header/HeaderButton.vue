<template>
  <button
    class="header__button"
    @click="store.togglePopup(data.access)"
  >
		{{data.title}}
		<div :class="data.classList"></div>
	</button>
</template>

<script>
  import { useStore } from '@/stores'

  export default {
    name: 'HeaderButton',
		props: {
			data: Object
		},
    setup() {
      const store = useStore()
      return { store }
    }
  }
</script>

<style scoped>
  @import url('@/styles/header/header__button.css');
  @import url('@/styles/header/header__curve-bottom.css');
  @import url('@/styles/header/header__curve-top.css');
</style>