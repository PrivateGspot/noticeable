<template>
  <article class="todo-list">
    <header>
      <base-input-text
        autofocus
        class="todo-list__input"
        placeholder='Что нужно сделать?'
        v-model.trim="newTodoValue"
        @keyup.enter.native="pushTodo"
      />
      <base-alert-box>Добавь сообщение, сука!</base-alert-box>
    </header>
    <div class="todos">
      <ul class="todos__list">
        <li v-for="todo in todos" :key="todo.id">
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
import { mapState, mapActions } from 'vuex';
import { ADD_TODO } from '../store/actions';

import BaseInputText from './BaseInputText.vue';
import TodoListItem from './TodoListItem.vue';
import BaseAlertBox from './BaseAlertBox.vue';

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
    BaseAlertBox,
  },
  methods: {
    ...mapActions([ADD_TODO]),
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
