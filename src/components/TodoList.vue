<template>
  <article class="todo-list">
    <header class="todo-list__header">
      <base-alert-box
        :warning="isWarning"
        :success="isSuccess"
        class="todo-list__alert-box"
      >
        {{ message }}
      </base-alert-box>
      <base-input-text
        autofocus
        class="todo-list__input"
        placeholder='Что нужно сделать?'
        v-model.trim="newTodoValue"
        @keyup.enter.native="pushTodo"
      />
    </header>
    <div class="todos">
      <h2 class="todos__title">{{ todoListTitle }}</h2>
      <ul class="todos__list">
        <li v-for="todo in todos" :key="todo.id">
          <todo-list-item @todo-delete="onTodoDelete" :todo="todo" />
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
      todoListTitle: 'Список задач',
      message: 'Доброго времени суток!',
      isWarning: false,
      isSuccess: false,
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
    toggleBoxTo(state) {
      if (state === 'warning') {
        this.isWarning = true;
        this.isSuccess = false;
      } else if (state === 'success') {
        this.isSuccess = true;
        this.isWarning = false;
      }
    },
    pushTodo(event) {
      if (event.target.value.length === 0) {
        this.toggleBoxTo('warning');
        this.message = 'Текст задачи не может содержать менее одного символа';

        return;
      }
      this.toggleBoxTo('success');
      this.message = 'Заметка успешно добавлена';
      this.ADD_TODO(this.newTodoValue);
      this.newTodoValue = '';
    },
    onTodoDelete() {
      this.toggleBoxTo('success');
      this.message = 'Заметка успешно удалена';
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
