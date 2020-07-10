<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
  }

  [v-cloak] {
    display: none
  }

  ::-webkit-scrollbar {
    width: 10px; /*对垂直流动条有效*/
    height: 10px; /*对水平流动条有效*/
  }

  /*定义滚动条轨道 内阴影*/
  ::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 10px;
    background: transparent;
  }

  /*定义滚动条轨道 内阴影*/
  ::-webkit-scrollbar-track:hover {
    /*滚动条里面轨道*/
    background: rgba(191, 191, 191, 0.23);
  }

  /*定义滑块 内阴影*/
  ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background: rgba(174, 174, 174, 0.39);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(174, 174, 174, 0.42);
  }
</style>
