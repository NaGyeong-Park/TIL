<template>
  <div>
    <div>{{context}}</div>
    <app-header :propsdata="context" @send="getData"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  data: () => {
    return{
      context: 'hello vue!',

    }
  },
  components: {
    AppHeader,
  },
  methods: {
    getData(value){
      this.context = value
    }
  }
}
</script>

<style>

</style>