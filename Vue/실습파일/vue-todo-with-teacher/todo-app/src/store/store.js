import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 앞으로 Vue instance 어디에서든 Vuex를 사용할 수 있게 해준다.

const storage = {
  fetch(){ //js 내부 함수
  const todos = []
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.getItem(localStorage.key(i)) 
        todos.push(JSON.parse(todoItem));
      }
    }
    return todos
  }
}

export const store = new Vuex.Store( {
  //CODE HERE
  state: {
    headerText: 'Todo List',
    todos: storage.fetch(),
  },
  mutations: {
    addTodo(state, item){
      const todoObj = {
        item,
        completed: false,
      }
      localStorage.setItem(item, JSON.stringify(todoObj))
      state.todos.push(todoObj)
    },
    deleteTodo(state, payload){
      localStorage.removeItem(payload.item)
      state.todos.splice(payload.idx,1)
    },
    clearAll(state){
      localStorage.clear()
      state.todos = []
    },
    toggleTodo(state,idx){
      state.todos[idx].completed = !state.todos[idx].completed
      localStorage.removeItem(state.todos[idx].item)
      localStorage.setItem(state.todos[idx].item,
       JSON.stringify(state.todos[idx]))
    },
  }

})