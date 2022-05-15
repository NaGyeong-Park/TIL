<template>
  <div>
    <input type="text" v-model="newParent">
    <p>appData: {{app}}</p>
    <p>childData : {{childData}}</p>
    <app-child :new-parent="newParent"
    @child-data="parentGet"></app-child>

  </div>
</template>

<script>
import AppChild from './AppChild.vue'

export default {
  name: "AppParent",
  components: {
    AppChild,
  },
  data:() =>{
    return {
      newParent: null,
      childData: null,
    }
  },
  props: {
    app: {
      type: Number,
    }
  },
  methods: {
    parentGet(value){
      this.childData = value
      console.log(value);
    }
  }
}
</script>

<style>

</style>