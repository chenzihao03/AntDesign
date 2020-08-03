<template>
  <a-layout-header class="header-class">
    <a-menu mode="horizontal" class="menu-class">
      <a-menu-item key="app">
        <a-icon type="desktop"/>
        模板库
      </a-menu-item>
      <a-menu-item key="app1">
        <a-icon type="desktop"/>
        组件库
      </a-menu-item>
      <a-menu-item key="app2">
        <a-icon type="desktop"/>
        其他库
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
  export default {
    methods: {}
  };
</script>
<style scoped>
  .header-class {
    padding: 0 !important;
  }

  .menu-class {
    background-color: #171b22;
    color: white;
    line-height: 64px;
    border-bottom: 1px solid #212528;
  }
</style>
