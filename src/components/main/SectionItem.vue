<template>
  <article class="section__item">
    <div class="section__item-description">
      <router-link
        class="section__item-title"
        :to="{ name: 'article', params: { id: data.title }}"
      >
        {{data.title}}
      </router-link>
      <p class="section__item-text">
        {{data.text}}
      </p>
    </div>
    <SectionItemInfo
      :data="data.info"
    />
    <img
      class="section__item-image"
      :src="require(`@/images/` + data.image)"
      :alt="data.title"
    />
  </article>
</template>

<script>
  import SectionItemInfo from './SectionItemInfo'

  export default {
    name: 'SectionItem',
    props: {
      data: Object
    },
    components: {
      SectionItemInfo
    }
  }
</script>

<style scoped>
  @import url('@/styles/section/section__item.css');
  @import url('@/styles/section/section__item-description.css');
  @import url('@/styles/section/section__item-title.css');
  @import url('@/styles/section/section__item-text.css');
  @import url('@/styles/section/section__item-image.css');
</style>