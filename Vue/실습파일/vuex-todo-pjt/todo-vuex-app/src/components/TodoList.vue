<template>
  <div>
    <todo-list-item
      v-for="todo in todos"
      :key="todo.date"
      :todo="todo" 
    > <!--pass props-->
    </todo-list-item>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
import {mapState} from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  computed: {
    // todos(){
    //   return this.$store.state.todos
    // }
    ...mapState(['todos'])
  },
  }
</script>

<style>

</style>