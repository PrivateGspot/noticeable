<template>
  <article class="todo">
    <p class="todo__text">
      <base-input-checkbox
        class="todo__checkbox"
        v-model="isDone"
      />
      <span :class="{ 'todo--completed': todo.isDone }">
        {{todo.value}}
      </span>
    </p>
    <base-button
      class="todo__delete-button button"
      @click="deleteTodo(todo.id)"
    >
      &#10006;
    </base-button>
  </article>
</template>

<script>
import { mapActions } from 'vuex';
import { DELETE_TODO, UPDATE_TODO } from '../store/actions';

import BaseInputCheckbox from './BaseInputCheckbox.vue';
import BaseButton from './BaseButton.vue';

export default {
  props: {
    todo: Object,
  },
  methods: {
    ...mapActions([DELETE_TODO, UPDATE_TODO]),
    deleteTodo(id) {
      this.DELETE_TODO(id);
      this.$emit('todo-delete');
    },
  },
  computed: {
    isDone: {
      get() {
        return this.todo.isDone;
      },
      set(value) {
        this.UPDATE_TODO({
          id: this.todo.id,
          isDone: value,
        });
      },
    },
  },
  components: {
    BaseInputCheckbox,
    BaseButton,
  },
};
</script>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-width: 300px;

  padding: 0.4em 0.8em;
}

.todo--completed {
  opacity: 0.8;

  text-decoration: line-through;
}

.todo__text {
  display: flex;
  align-items: center;

  font-family: inherit;
  font-size: 1rem;
  line-height: 1.4;

  margin: 0;
}

.todo__checkbox {
  margin-right: 0.8em;
}

.todo:hover > .todo__controls {
  opacity: 1;
}

.todo__delete-button {
  line-height: 1;

  padding: 0.8em;
  margin-left: 0.8em;
}
</style>
