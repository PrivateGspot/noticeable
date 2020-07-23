<template>
  <article class="todo-list">
    <header class="todo-list__header">
      <base-input-text
        autofocus
        class="todo-list__input"
        placeholder='Введите задачу, например "сходить за покупками"'
        v-model.trim="newTodoValue"
        @keyup.enter.native="pushTodo"
      />
    </header>
    <div class="todo-list__todos todos">
      <ul class="todos__list">
        <li class="todos__todo" v-for="todo in todos" :key="todo.id">
          <todo-list-item :todo="todo" />
        </li>
      </ul>
    </div>
    <footer class="todo-list__footer">
      Количество заметок: {{todosCount}}
    </footer>
  </article>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { ADD_TODO } from '../store/mutations';

import BaseInputText from './BaseInputText.vue';
import TodoListItem from './TodoListItem.vue';

export default {
  data() {
    return {
      newTodoValue: '',
    };
  },
  computed: {
    todosCount() {
      return this.$store.state.todos.length;
    },
    ...mapState(['todos']),
  },
  components: {
    BaseInputText,
    TodoListItem,
  },
  methods: {
    ...mapMutations([ADD_TODO]),
    pushTodo(event) {
      if (event.target.value.length === 0) return;
      this.ADD_TODO(this.newTodoValue);
      this.newTodoValue = '';
    },
  },
};
</script>

<style scoped>
.todo-list {
  display: block;
  margin: 0 auto;

  width: 100%;
  min-width: 320px;
  max-width: 600px;
}

.todo-list__input {
  width: 100%;
}

.todos {
  background-color: var(--bg-add-color);

  border-radius: 4px;
}

.todos__list {
  padding: 0;

  list-style: none;
}
</style>
