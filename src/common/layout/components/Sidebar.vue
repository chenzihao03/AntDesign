<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    :theme="theme"
    v-model="collapsed"
    :class="sidebarClass">
    <div class="logo">
      <img src="@/../static/logo.png">
      <span class="log-class" v-if="!collapsed">My Task Aps</span>
    </div>
    <a-menu
      mode="inline"
      :theme="theme"
      @click="toRouter"
      :inlineCollapsed="collapsed"
      :defaultSelectedKeys="route"
      :openKeys.sync="openKeys">
      <template v-for="item in routes">
        <a-menu-item v-if="!item.children && !item.hidden" :key="item.path">
          <i :class="item.meta.icon"/>
          <span v-if="!collapsed">{{item.meta.title}}</span>
        </a-menu-item>
        <sub-menu v-if="item.children && !item.hidden" :menu-info="item" :key="item.path" :collapsed="collapsed"/>
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
        sidebarClass: "sidebar-class",
        openKeys: [this.$route.matched[0].path],
        route: [this.$route.path]
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
      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      },
      toRouter(item) {
        this.$router.push(item.key);
      }
    },
    computed: {
      routes() {
        return this.$router.options.routes;
      }
    }
  };
</script>
<style scoped>
  i {
    font-size: 15px;
    padding-right: 10px;
  }

  img {
    margin-top: -10px;
    width: 50px;
    height: 50px;
  }

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
    padding-left: 10px;
    height: 64px;
    line-height: 64px;
    background-color: #002140;
  }

  .log-class {
    font-size: 18px;
    color: white;
    padding: 5px 0 0 0;
  }
</style>
