<template>
  <div class="container">
    <header class="page-header">
      <slot name="header" />
    </header>
    <main class="page-main">
      <slot name="default" />
    </main>
    <footer class="page-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="css">
.container {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 0 10px;
}
.page-footer {
  margin: 40px 0;
}
</style>
