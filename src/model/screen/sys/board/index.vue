<template>
  <div>
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-sider class="sider-class">Sider</a-layout-sider>
      <a-layout-content class="main-class">Content</a-layout-content>
      <a-layout-sider>Sider</a-layout-sider>
    </a-layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        width: 300,
        height: 300,
        x: '1000',
        y: '100'
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style scoped>
  .sider-class {
    height: 100%;
  }

  .main-class {
    position: relative;
    background: url("../../../../assets/boardbg.png") repeat;
    height: 100px;
  }
</style>
