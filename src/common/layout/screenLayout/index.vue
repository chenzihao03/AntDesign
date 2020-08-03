<template>
  <a-layout class="container-class">
    <sidebar></sidebar>
    <a-layout>
      <navbar></navbar>
      <app-main></app-main>
    </a-layout>
  </a-layout>
</template>

<script>
  import {Navbar, Sidebar, AppMain, Footer} from '@/common/layout/screenLayout/components'

  export default {
    components: {
      Navbar,
      Sidebar,
      AppMain,
    },
    computed: {
      menuModel() {
        return this.$store.state.menuModel
      },
      siderCollapsed() {
        return this.$store.state.siderCollapsed
      }
    }
  };
</script>

<style scoped>
  * {
    background-color: #171b22;
  }

  .container-class {
    height: 100%;
  }

</style>
