<template>
  <input
    type="text"
    class="text-input"
    placeholder="Текстовый ввод"
    :value="value"
    v-on="listeners"
  />
</template>

<script>
export default {
  props: {
    value: String,
  },
  computed: {
    listeners() {
      const vm = this;
      // объединяем объекты вместе, чтобы получить новый объект
      return {
        // добавляем все слушатели из родителя
        ...this.$listeners,
        // Затем мы можем добавить собственные слушатели или
        // перезаписать поведение некоторых существующих.
        // Это обеспечит, что будет работать v-model на компоненте
        input(event) {
          vm.$emit('input', event.target.value);
        },
      };
    },
  },
};
</script>

<style scoped>
  .text-input {
    color: var(--bg-contrast-color);

    padding: 0.4em 0.8em;

    border: none;
    border-radius: 4px;

    background-color: var(--bg-add-color);

    cursor: text;
  }
</style>
