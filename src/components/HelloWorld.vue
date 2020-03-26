<template>
  <a-card title="Card Title">
    <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
    <a-card-grid style="width:25%;text-align:center" :hoverable="false">Content</a-card-grid>
    <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
    <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
    <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
    <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
    <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
    <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
  </a-card>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>

<style scoped>
  .sidebar-class {
    height: 100%;
  }

  .sidebar-class .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .sidebar-class .trigger:hover {
    background: rgba(0, 0, 0, .025);
  }

  .sidebar-class .logo {
    height: 32px;
    margin: 16px;
  }
</style>
