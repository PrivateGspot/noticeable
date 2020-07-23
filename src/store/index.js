import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './mutations';

const vuexPersist = new VuexPersist({
  key: 'noticable-state',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [],
  },
  mutations: {
    [ADD_TODO](state, value) {
      const { todos } = state;
      todos.push({
        id: todos.length,
        isDone: false,
        value,
      });
    },
    [REMOVE_TODO](state, payload) {
      const { todos } = state;
      todos.splice(payload.id, 1);
    },
    [UPDATE_TODO](state, payload) {
      const { todos } = state;
      const todo = todos[payload.id];
      if ('value' in payload) {
        todo.value = payload.value;
      }
      if ('isDone' in payload) {
        todo.isDone = payload.isDone;
      }
    },
  },
});
