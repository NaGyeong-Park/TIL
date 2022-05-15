<template>
  <div class="todo-item">
    <span 
    @click="updateTodoStatus(todo)"
    :class="{'is-completed': todo.isCompleted}">
      {{todo.title}}
      </span>
    <!-- 특수 문법 -->
    <!-- <button @click="deleteTodo 걸어두고, 
    실행할 때 인자로 todo 넘겨주세요 같이 메모한 느낌">X</button> -->
    <!-- 지금 실행하자는게 아니야~ -->
    <button @click="deleteTodo(todo)">Delete</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

// {deleteTodo : function() {}, cretaeTodo: function() {}}
export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
    }
  },
  methods: {
    // deleteTodo() {
    //   // store에 삭제 요청
    //   this.$store.dispatch('deleteTodo', this.Todo)
    // },
    // 이렇게 쓰는거 너무 길지않냐?  
    // actions의 'deleteTodo' 함수 바로 쓰고싶어 : map
    ...mapActions(['deleteTodo','updateTodoStatus']), //spread operator
    // 구조부할당은? key:value에선 안된다. 밖에서는 가능~
    // mapActions(['deleteTodo'])
  }
}
</script>

<style scoped>

.is-completed {
  text-decoration: line-through;
}

span{
  cursor: pointer;
}
</style>