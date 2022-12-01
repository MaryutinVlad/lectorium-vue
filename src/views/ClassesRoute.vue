<template>
  <SectionComponent
    :title="title"
    :links="links"
    :data="items"
  />
</template>

<script>
  import SectionComponent from '../components/SectionComponent'
  import classesItems from '../resources/classesItems'

  export default {
    name: 'ClassesRoute',
    components: {
      SectionComponent
    },
    data() {
      return {
        title: 'Classes',
        items: classesItems,
        links: [
          {
            title: 'Math',
            to: '/'
          },
          {
            title: 'Planning',
            to: '/'
          },
          {
            title: 'Healthcare',
            to: '/'
          },
          {
            title: 'Writing',
            to: '/'
          },
          {
            title: 'Security',
            to: '/'
          },
          {
            title: 'Crafting',
            to: '/'
          }
        ]
      }
    }
  }
</script>
