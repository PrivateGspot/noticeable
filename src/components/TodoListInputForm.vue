<template>
  <div class="input-form">
    <label for="taskInputForm" class="visuallyhidden">Введите задачу</label>
    <base-input-text
      autofocus
      id="taskInputForm"
      class="input-form__input"
      placeholder='Например, сходить за продуктами'
      v-model.trim="newTodoValue"
      @keyup.enter.native="pushTodoOnEnter"
    />
    <base-button
      @click.native="pushTodo"
      class="input-form__button"
      :disabled="isButtonDisabled"
    >
      Добавить
    </base-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { ADD_TODO } from '../store/actions';

import BaseButton from './BaseButton.vue';
import BaseInputText from './BaseInputText.vue';

export default {
  data() {
    return {
      newTodoValue: '',
    };
  },
  computed: {
    isButtonDisabled() {
      return this.newTodoValue.length === 0;
    },
  },
  components: {
    BaseButton,
    BaseInputText,
  },
  methods: {
    ...mapActions([ADD_TODO]),
    pushTodo() {
      this.ADD_TODO(this.newTodoValue);
      this.newTodoValue = '';
      this.$emit('todo-added');
    },
    pushTodoOnEnter(event) {
      if (event.target.value.length === 0) return;
      this.pushTodo();
    },
  },
};
</script>

<style scoped>
.input-form {
  display: flex;
}

.input-form__input {
  width: 100%;
}

.input-form__button {
  margin-left: 1em;
}

@media screen and (max-width: 400px) {
  .input-form {
    flex-direction: column;
  }

  .input-form__button {
    margin-left: 0;
    margin-top: 0.8em;

    padding: 0.8em;
  }
}
</style>
