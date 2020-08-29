<template>
  <label class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    />
    <span class="checkbox__checkmark"></span>
    <slot></slot>
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
  position: relative;

  display: block;

  padding-left: 1.8em;
}

.checkbox__input {
  position: absolute;
  opacity: 0;
  z-index: -1;
  appearance: none;
}

.checkbox__input:focus {
  box-shadow: none;
  outline: none;
}

.checkbox__checkmark {
  position: absolute;
  top: 0.15em;
  left: 0;

  line-height: 1rem;
  text-align: center;

  display: block;

  width: 1.2em;
  height: 1.2em;

  padding-left: 1.2em;

  border-radius: 50%;

  background-color: var(--bg-contrast-color);
  box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.4);

  transition: background-color 0.2s;

  cursor: pointer;
}

.checkbox__checkmark:hover {
  opacity: 0.9;
}

.checkbox__input:focus + .checkbox__checkmark {
  box-shadow: 0 0 0 3px var(--cta-color);
}

.checkbox__input:checked + .checkbox__checkmark {
  background-color: var(--cta-color);
}

.checkbox__input:active + .checkbox__checkmark {
  background-color: var(--cta-active-color);
}

.checkbox__input:checked:focus + .checkbox__checkmark {
  box-shadow: 0 0 0 3px var(--bg-contrast-color);
}
</style>
