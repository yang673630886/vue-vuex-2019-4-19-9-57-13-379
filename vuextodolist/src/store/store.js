import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todoList: []
    },
    getters: {
        getList(state) {
            let oldList = state.todoList
            for (let i = 0; i < state.todoList.length; i++){
                state.todoList.push(oldList[i].info)
            }
            window.console.log(state.todoList)
                
        }
    },
    mutations: {
        pushList: function (state, myListObject) {

            let oldList = state.todoList;
            oldList.push(myListObject)
            state.todoList = [];
            for (let i = 0; i < oldList.length; i++) {
                state.todoList.push(oldList[i])
            }
        }
    }
})

export default store