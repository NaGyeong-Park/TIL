<template>
  <div id="app">
    <h1>App</h1>
    <input type="text" v-model="newAppData">
    <p>parentData: </p>
    <p>childData: </p>
    <br>
    <h1>AppParent</h1>
    <app-parent :app=newAppData></app-parent>
    <br>
    <h1>AppChild</h1>
    <app-child></app-child> 
    <p>appData: {{newAppData}}</p>
    <p>childData: </p>
    
  </div>
</template>

<script>
import AppParent from "./components/AppParent.vue"
import AppChild from "./components/AppChild.vue"

export default {
  name: 'App',
  components: {
    AppChild,
    AppParent,
  },
  data:() => {
    return{
      newAppData : null,
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
