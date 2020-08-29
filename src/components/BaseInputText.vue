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
      return {
        // добавляем все слушатели из родителя
        ...this.$listeners,
        // Затем мы можем добавить собственные слушатели или
        // перезаписать поведение некоторых существующих.
        // Это обеспечит то, что будет работать v-model на компоненте
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

    box-shadow: inset 2px 1px 1px rgba(0, 0, 0, 0.7);

    cursor: text;

    transition: all 0.2s;
  }

  .text-input:focus {
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.7), 0 0 0 3px var(--bg-contrast-add-color);
  }
</style>
