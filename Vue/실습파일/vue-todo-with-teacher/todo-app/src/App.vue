<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @addTodo="addTodo"></todo-input>
    <todo-list :tododata="todos" @deleteTodo="deleteTodo" @toggleTodo="toggleTodo"></todo-list>
    <todo-footer @clearAll="clearAll"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  data:() => {
    return {
      todos: [],
    }
  },
  components: {
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList,
  },
  methods: {
    addTodo(item){
      const todoObj = {
          item,
          completed: false,
        }
        localStorage.setItem(item, JSON.stringify(todoObj))
        this.todos.push(todoObj)
    },
    deleteTodo(todoItem, idx) {
      localStorage.removeItem(todoItem)
      this.todos.splice(idx,1)

    },
    clearAll(){
      localStorage.clear()
      this.todos = []
    },
    toggleTodo(idx){
      this.todos[idx].completed = !this.todos[idx].completed
      localStorage.removeItem(this.todos[idx].item)
      localStorage.setItem(this.todos[idx].item,
       JSON.stringify(this.todos[idx]))
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.getItem(localStorage.key(i)) 
        this.todos.push(JSON.parse(todoItem));
      }
    }
  }
}
</script>

<style>
  body {
    background-color:whitesmoke;
    text-align: center;
  }
</style>
