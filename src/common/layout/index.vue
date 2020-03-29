<template>
  <a-layout class="container-class">
    <sidebar :collapsed="collapsed" :theme="theme"></sidebar>
    <a-layout>
      <navbar
        :collapsed="collapsed"
        @setCollapsed="setCollapsed"></navbar>
      <app-main></app-main>
    </a-layout>
  </a-layout>
</template>

<script>
  import {Navbar, Sidebar, AppMain} from './components'

  export default {
    components: {
      Navbar,
      Sidebar,
      AppMain
    },
    data() {
      return {
        collapsed: false,
        theme: "dark"
      };
    },
    methods: {
      setCollapsed(event) {
        this.collapsed = event;
      }
    }
  };
</script>

<style scoped>
  .container-class {
    height: 100%;
  }
</style>
