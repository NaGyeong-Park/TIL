<template>
  <div>
    <input type="text" @keydown.enter="childSead">
    <p>appData: </p>
    <p>parentData: {{newParent}}</p>
  </div>
</template>

<script>
export default {
  name: "AppChild",
  props:{
    newParent: {
      type: Number,
    }
  },
  data:()=>{
    return{
      childData: null,
    }
  },
  methods: {
    childSead(event){
      this.$emit('child-data', event.target.value)
    },
  },
}
</script>

<style>

</style>