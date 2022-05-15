<template>
  <div>
    <input type="text" @keyup.enter="search">
  </div>
</template>

<script>
export default {
  methods:{
    search: function(event) {
      this.$emit('input-search',event.target.value);
    }
  }
}
</script>

<style>

</style>