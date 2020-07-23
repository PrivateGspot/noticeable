<template>
  <div id="app">
    <the-page-breaker />
    <the-page-layout>
      <template v-slot:header>
        <the-page-header />
      </template>
      <template v-slot:default>
        <todo-list />
      </template>
      <template v-slot:footer>
        <the-page-footer />
      </template>
    </the-page-layout>
  </div>
</template>

<script>
import ThePageLayout from './components/ThePageLayout.vue';
import ThePageHeader from './components/ThePageHeader.vue';
import ThePageFooter from './components/ThePageFooter.vue';
import ThePageBreaker from './components/ThePageBreaker.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    ThePageLayout,
    ThePageHeader,
    ThePageFooter,
    TodoList,
    ThePageBreaker,
  },
};
</script>

<style lang="css">
:root {
  --bg-main-color: #242423;
  --bg-add-color: #333533;
  --cta-color: #f5cb5c;
  --bg-contrast-color: #e8eddf;
  --bg-contrast-add-color: #cfdbd5;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 3px var(--bg-contrast-add-color);
}

::-moz-focus-inner {
  border: 0;
}

body {
  margin: 0;
  padding: 0;

  font-family: "Open Sans", sans-serif;
  color: var(--bg-contrast-color);

  background-color: var(--bg-main-color);
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
}

/* UTIL */
.visuallyhidden:not(:focus):not(:active) {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.center {
  display: block;

  margin: 0 auto;
}

/* TYPOGRAPHY */
::selection {
  color: var(--bg-add-color);
  background-color: var(--bg-contrast-color);
}

.title {
  font-family: inherit;
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.4;
  letter-spacing: 0.1em;
  text-align: center;
}

.small-text {
  font-family: inherit;
  font-size: 0.8rem;
  line-height: 1.4em;
  text-align: center;
  opacity: 0.8;
}
</style>
