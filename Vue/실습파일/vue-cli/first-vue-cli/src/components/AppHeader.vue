<template>
  <header>
    <h1>Header</h1>
    <button @click="send">send</button>
  </header>
</template>

<script>
export default {
  // props: ['propsdata']
  data: () => {
    return {
      headerText: 'text',
    }
  },
  props: {
    propsdata: String,
  },
  methods: {
    send(){
      this.$emit('send',this.headerText)
    }
  }
}
</script>

<style>

</style>