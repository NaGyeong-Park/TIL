<template>
  <div>
    <ul>
      <li v-for="(todo,idx) in tododata" :key="`todo-${idx}`">
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
  props: {
    tododata: Array,
  },
  methods: {
    deleteTodo(todo, idx){
      this.$emit('deleteTodo', todo.item, idx)
    },
    toggleTodo(idx){
      this.$emit('toggleTodo',idx)
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