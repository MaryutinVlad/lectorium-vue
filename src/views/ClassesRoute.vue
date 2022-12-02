<template>
  <SectionComponent
    :title="title"
    :links="links"
    :items="items"
  />
</template>

<script>
  import SectionComponent from '../components/SectionComponent'

  export default {
    name: 'ClassesRoute',
    components: {
      SectionComponent
    },
    created() {
      console.log(this.$route.path.match(/[/]\w+/g));
      if (this.$route.path === /[/]\w+[/]\w+/g) {
        console.log('!!!!!')
      }
    },
    data() {
      return {
        title: this.$route.name,
        items: require(`../resources${this.$route.path}Items.json`),
        links: require(`../resources${this.$route.path}Links.json`)
      }
    }
  }
</script>
