import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: { //data : 마치 DB Table 같네
    todos: [
            {
              title : '점심먹기',
              isCompleted: false,
              data: new Date().getTime(),
            },
            {
              title : '저녁먹기',
              isCompleted: false,
              data: new Date().getTime(),
            }
          ]
  },
  getters: { //computed
    //현재 끝난 일의 갯수
    allTodosCount(state){
      return state.todos.length
    },
    completedTodosCount(state){
      return state.todos.filter(todo => {
        return todo.isCompleted
      }).length
    },
    uncompletedTodosCount(state){
      return state.todos.filter(todo => {
        return !todo.isCompleted
      }).length
    },
  },
  mutations: { // methods => change
    // LOAD_TODOS(state){
    //   const todosString = localStorage.getItem('todos')
    //   state.todos = JSON.parse(todosString)
    // },
    CREATE_TODO(state, newTodo){
      state.todos.push(newTodo)
    },
    DELETE_TODO(state, todoItem){
      //slice를 쓰기위해서 index 값을 구해줌
        const index = state.todos.indexOf(todoItem)
        state.todos.splice(index,1)
    },
    UPDATE_TODO_STATUS(state, todoItem){
      state.todos = state.todos.map(todo => {
        if (todo === todoItem){
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    },

    },
  actions: { //methods => !change
    saveTools({state}){
      const jsonData = JSON.stringify(state.todos)
      localStorage.setItem('todos', jsonData)
    },
    createTodo(context, newTodo){
      // context => 만능 맥가이버 칼
      // context안에 mutations에 접근 가능한 commit이 들어있음
      // const commit = context.commit
      // const {commit} = context
      context.commit('CREATE_TODO', newTodo )
      // context.dispatch('saveTodos')
    },
    deleteTodo({commit}, todoItem){
      if (confirm('Are you sure you want to delete')){
      commit('DELETE_TODO',todoItem)
      // dispatch('saveTodos')
    }
    },
    updateTodoStatus({commit}, todoItem){
      commit('UPDATE_TODO_STATUS', todoItem)
      // dispatch('saveTodos')
    }
  },
  modules: {
  }
})
