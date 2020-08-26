<template>
  <div class="alert-box" :class="state">
    <p class="alert-box__message">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    warning: Boolean,
    success: Boolean,
  },
  computed: {
    state() {
      return {
        'alert-box--warning': this.warning,
        'alert-box--success': this.success,
      };
    },
  },
};
</script>

<style scoped>
.alert-box {
  width: 100%;
  padding: 0.4em 0.8em;

  border: none;
  border-radius: 4px;

  background-color: var(--bg-add-color);
}

.alert-box__message {
  color: var(--bg-contrast-color);

  margin: 10px 0;
}

.alert-box--warning {
  box-shadow: 0 0 0 3px var(--warning-color);
}

.alert-box--success {
  box-shadow: 0 0 0 3px var(--success-color);
}
</style>
