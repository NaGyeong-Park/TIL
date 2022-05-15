<template>
  <div>
    <ul>
      <li v-for="(todo,idx) in this.$store.state.todos" :key="`todo-${idx}`">
        <span
          :class="{ completed : todo.completed }"
          @click="toggleTodo(idx)">
        {{todo.item}}</span>
        <i @click="deleteTodo(todo,idx)" class="fa-solid fa-square-minus removeIcon"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    deleteTodo(todo, idx){
      this.$store.commit('deleteTodo', {
        item :todo.item,
        idx,
      })
    },
    toggleTodo(idx){
      this.$store.commit('toggleTodo',idx)
    }
  },
}
</script>

<style>
  li {
    height: 30px;
    display: flex;
  }

  .removeIcon {
    margin-left: auto;
    color:indianred;
  }

.completed {
  color:silver;
  text-decoration-line: line-through;
}

</style>