<template>
  <a-layout class="sidebar-class">
    <sidebar :collapsed="collapsed"></sidebar>
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
        top: 10,
        collapsed: false,
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
  .sidebar-class {
    height: 100%;
  }
</style>
