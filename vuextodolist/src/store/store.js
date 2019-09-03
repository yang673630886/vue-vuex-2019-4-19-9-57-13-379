import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todoList: []
    },
    getters: {
        getList(state){
            return state.todoList
        }
    },
    mutations: {
        pushList: function (state, myListObject) {
            window.console.log(myListObject)
            state.todoList.push(myListObject)
        }
    }
})

export default store