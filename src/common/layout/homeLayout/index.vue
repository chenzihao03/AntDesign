<template>
  <div class="container-class">
    <a-layout class="container-class" v-if="menuModel === 'inline'">
      <sidebar :collapsed="siderCollapsed"></sidebar>
      <a-layout>
        <navbar></navbar>
        <tabs></tabs>
        <app-main></app-main>
      </a-layout>
    </a-layout>
    <a-layout class="container-class" v-if="menuModel === 'horizontal'">
      <sidebar-top></sidebar-top>
      <tabs></tabs>
      <app-main></app-main>
    </a-layout>
  </div>
</template>

<script>
import {
  Tabs,
  Navbar,
  Sidebar,
  AppMain,
  SidebarTop,
} from "@/common/layout/homeLayout/components";

export default {
  components: {
    Tabs,
    Navbar,
    Sidebar,
    AppMain,
    SidebarTop,
  },
  computed: {
    menuModel() {
      return this.$store.state.menuModel;
    },
    siderCollapsed() {
      return this.$store.state.siderCollapsed;
    },
  },
};
</script>

<style scoped>
.container-class {
  height: 100%;
}
</style>
