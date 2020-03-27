<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    :theme="theme"
    v-model="collapsed"
    :class="sidebarClass">
    <div class="logo">
      <img src="@/../static/logo.png" width="40" height="40">
      <span class="log-class" v-if="!collapsed">Task Aps</span>
    </div>
    <a-menu
      mode="inline"
      :theme="theme"
      @click="toRouter"
      :inlineCollapsed="collapsed">
      <template v-for="item in routes">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon :type="item.meta.icon"/>
          <span>{{item.meta.title}}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path"/>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
  import SubMenu from './SubMenu'

  export default {
    components: {
      'sub-menu': SubMenu,
    },
    props: {
      theme: {
        type: String,
        default: "dark"
      },
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        sidebarClass: "sidebar-class"
      }
    },
    watch: {
      collapsed(val, newVal) {
        if (!newVal) {
          this.sidebarClass = "collapsed-class";
        } else {
          this.sidebarClass = "sidebar-class";
        }
      }
    },
    methods: {
      toRouter(item) {
        this.$router.push(item.key);
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
  .sidebar-class {
    flex: 0 0 256px !important;
    max-width: 256px !important;
    min-width: 256px !important;
    width: 256px !important;
  }

  .collapsed-class {
    flex: 0 0 80px !important;
    max-width: 80px !important;
    min-width: 80px !important;
    width: 80px !important;
  }

  .logo {
    padding-left: 20px;
    height: 64px;
    line-height: 64px;
    background-color: #002140;
  }

  .log-class {
    font-size: 20px;
    color: white;
    padding: 5px 0 0 0;
  }
</style>
