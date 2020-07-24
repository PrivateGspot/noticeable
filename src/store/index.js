import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import {
  SET_UID,
  SET_TODO,
  REMOVE_TODO,
  UPDATE_DONE_VALUE,
} from './mutations';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './actions';

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
    uid: 0,
  },
  mutations: {
    [SET_TODO](state, todo) {
      const { todos } = state;
      todos.push(todo);
    },
    [REMOVE_TODO](state, deleteIndex) {
      const { todos } = state;
      todos.splice(deleteIndex, 1);
    },
    [UPDATE_DONE_VALUE](state, payload) {
      const { todo, isDone } = payload;
      todo.isDone = isDone;
    },
    [SET_UID](state) {
      const newUid = state.uid;
      state.uid = newUid + 1;
    },
  },
  actions: {
    [ADD_TODO](context, value) {
      const { uid } = context.state;
      const todo = {
        id: uid,
        isDone: false,
        value,
      };
      context.commit(SET_TODO, todo);
      context.commit(SET_UID);
    },
    [DELETE_TODO](context, id) {
      const { todos } = context.state;
      const deleteIndex = todos.findIndex((todo) => todo.id === id);
      context.commit(REMOVE_TODO, deleteIndex);
    },
    [UPDATE_TODO](context, payload) {
      const { todos } = context.state;
      let commitPayload;
      const todoIndex = todos.findIndex((todo) => todo.id === payload.id);
      const todo = todos[todoIndex];
      if ('isDone' in payload) {
        commitPayload = {
          todo,
          isDone: payload.isDone,
        };
        context.commit(UPDATE_DONE_VALUE, commitPayload);
      }
    },
  },
});
