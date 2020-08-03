<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    :theme="menuTheme"
    v-model="siderCollapsed"
    :class="sidebarClass">
    <a-row class="logo" type="flex" justify="center"
           :style="{backgroundColor: menuTheme === 'dark' ? '#02172b' : '#FFFFFF'}">
      <a-col :span="siderCollapsed ? 13 : 5">
        <img src="@/../static/logo.png" width="40" height="40">
      </a-col>
      <a-col :span="14" v-if="!siderCollapsed">
        <h1 class="log-class" :style="{color: menuTheme === 'dark' ? '#FFFFFF' : '#000000'}">制造执行系统</h1>
      </a-col>
    </a-row>
    <a-menu
      :mode="model"
      :theme="menuTheme"
      @click="toRouter"
      :inlineCollapsed="siderCollapsed"
      :default-selected-keys="[this.$route.path]"
      :default-open-keys="[this.$route.matched[0].path]"
      :style="{color: menuTheme === 'dark' ? '#FFFFFF' : '#000000'}">
      <template v-for="item in routes" v-if="!item.hidden">
        <a-menu-item v-if="!item.children" :key="item.path" >
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
      model: {
        type: String,
        default: "inline"
      }
    },
    methods: {
      toRouter(item) {
        if (item.key == "/screen/board") {
          let routeData = this.$router.resolve({
            path: item.key,
          });
          var win = window.open(routeData.href, '_blank');
          win.document.title = "标题";
          win.focus();
        } else {
          this.$router.push(item.key);
        }
      }
    },
    computed: {
      routes() {
        return this.$router.options.routes
      },
      siderCollapsed() {
        return this.$store.state.siderCollapsed
      },
      sidebarClass() {
        if (this.$store.state.siderCollapsed) {
          return "collapsed-class";
        } else {
          return "sidebar-class";
        }
      },
      menuTheme() {
        return this.$store.state.menuTheme
      }
    }
  };
</script>
<style scoped>
  * {
    font-size: 14px;
    font-weight: 600;
  }

  .sidebar-class {
    flex: 0 0 199px !important;
    max-width: 199px !important;
    min-width: 199px !important;
    width: 199px !important;
    box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
  }

  .collapsed-class {
    flex: 0 0 80px !important;
    max-width: 80px !important;
    min-width: 80px !important;
    width: 80px !important;
  }

  .logo {
    height: 64px;
    line-height: 64px;
  }

  .log-class {
    font-size: 14px;
    font-weight: 600;
  }
</style>
