<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    :theme="theme"
    v-model="collapsed">
    <div class="logo">
      <h2 style="color: white;" v-if="!collapsed">My Ant Deign</h2>
    </div>
    <sidebar-item
      :menu="routes"
      :theme="theme"
      :collapsed="collapsed"></sidebar-item>
  </a-layout-sider>
</template>
<script>
  import SidebarItem from './SidebarItem'

  export default {
    components: {
      SidebarItem
    },
    props: {
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        theme: "dark"
      }
    },
    methods: {
      toRoute(item) {

      }
    },
    computed: {
      routes() {
        return this.$router.options.routes
      }
    }
  };
</script>
<style scoped>
  .sidebar-class .logo {
    height: 64px;
    padding: 16px;
    background-color: #002140;
  }

</style>
