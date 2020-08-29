<template>
  <button
    class="button"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: inline-block;

  color: var(--bg-main-color);

  padding: 0.4em 0.8em;

  border-radius: 4px;
  border: none;

  background-color: var(--bg-contrast-color);

  transition: all 0.2s;

  cursor: pointer;
}

.button:focus {
  outline: 0;
  box-shadow: 0 0 0 3px var(--cta-color);
}

.button:hover {
  background-color: var(--cta-color);
}

.button:active {
  background-color: var(--cta-active-color);
}

.button:disabled {
  background-color: var(--disabled-color);
  cursor: default;
}
</style>
