<template>
  <div>
    <input type="text"
    v-model.trim="todoTitle"
    @keydown.enter="createTodo">
    <button @click="createTodo">Add</button>
    <!-- @keyup.enter="$store.dispatch('createTodo')"> -->
    <!-- trim으로 보낼 때부터 빈칸을 잘라서 보낼 수 있다. -->
  </div>
  
</template>

<script>

export default {
  name: 'TodoForm',
  data: () =>{
    return {
      todoTitle: '',
    }
  },
  methods: {
    createTodo() {
      const newTodo = {
        title: this.todoTitle,
        isCompleted: false,
        data: new Date().getTime(),
      }
      this.$store.dispatch('createTodo', newTodo) //action을 호출하는 이름 dispatch
      this.todoTitle = '' // 전송 후 input 내용 비워줌
    },
  }
}
</script>

<style>

</style>