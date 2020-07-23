<template>
  <label class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    />
    <span class="checkbox__checkmark"></span>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
  },
};
</script>

<style scoped>
.checkbox {
  transition: opacity 0.1s ease-in;

  cursor: pointer;
}

.checkbox:hover {
  opacity: 0.8;
}

.checkbox__input {
  display: none;
}

.checkbox__checkmark {
  display: block;
  width: 1.2em;
  height: 1.2em;

  position: relative;

  border-radius: 50%;
  background-color: #eee;

  box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.4);
}

.checkbox__checkmark::before {
  content: " ";

  position: absolute;

  width: 100%;
  height: 100%;

  border-radius: 50%;

  background-color: var(--cta-color);

  opacity: 0;
  transition: opacity 0.1s ease-in;
}

.checkbox__input:checked ~ .checkbox__checkmark::before {
  opacity: 1;
}
</style>
