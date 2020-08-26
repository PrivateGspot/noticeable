<template>
  <article class="todo-list">
    <header class="todo-list__header">
      <base-input-text
        autofocus
        class="todo-list__input"
        placeholder='Что нужно сделать?'
        v-model.trim="newTodoValue"
        @keyup.enter.native="pushTodo"
      />
      <base-alert-box :warning="isWarning" :success="isSuccess">{{ message }}</base-alert-box>
    </header>
    <div class="todos">
      <ul class="todos__list">
        <li v-for="todo in todos" :key="todo.id">
          <todo-list-item @todo-delete="onTodoDelete" :todo="todo" />
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

.todo-list__input {
  width: 100%;

  margin-bottom: 16px
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
