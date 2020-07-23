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

  color: var(--bg-contrast-color);

  padding: 0.4em 0.8em;

  border-radius: 4px;
  border: none;

  background-color: var(--bg-main-color);

  transition: all 0.2s;

  cursor: pointer;
}

.button:focus {
  color: var(--cta-color);
}

.button:hover {
  opacity: 0.9;

  color: var(--cta-color);
}
</style>
