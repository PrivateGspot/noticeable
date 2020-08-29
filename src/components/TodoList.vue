<template>
  <section class="todo-list">
    <header class="todo-list__header">
      <todo-list-input-form />
    </header>
    <div class="todos">
      <h2 class="todos__title">{{ title }}</h2>
      <ul class="todos__list">
        <li v-for="todo in todos" :key="todo.id">
          <todo-list-item :todo="todo" />
        </li>
      </ul>
    </div>
    <footer class="todo-list__footer">
      <template v-if="todosCount === 0">
        Список задач пуст
      </template>
      <template v-else>
        Количество задач: {{todosCount}}
      </template>
    </footer>
  </section>
</template>

<script>
import { mapState } from 'vuex';

import TodoListItem from './TodoListItem.vue';
import TodoListInputForm from './TodoListInputForm.vue';

export default {
  props: {
    title: String,
  },
  computed: {
    todosCount() {
      return this.$store.state.todos.length;
    },
    ...mapState(['todos']),
  },
  components: {
    TodoListItem,
    TodoListInputForm,
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

.todo-list__alert-box {
  margin-bottom: 16px;
}

.todo-list__input {
  width: 100%;
}

.todos__list {
  padding: 0;

  border-radius: 4px;
  background-color: var(--bg-add-color);
  list-style: none;
}
</style>
