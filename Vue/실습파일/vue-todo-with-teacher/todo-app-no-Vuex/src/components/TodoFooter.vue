<template>
  <button @click="clearAll">모두 지우기</button>
</template>

<script>
export default {
  methods:{
    clearAll(){
      this.$emit('clearAll');
    }
  }
}
</script>

<style>

</style>