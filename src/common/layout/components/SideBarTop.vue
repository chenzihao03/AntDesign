<template>
  <a-row class="logo">
    <a-col :span="3">
      <a-row type="flex" justify="end">
        <a-col :span="5">
          <img src="@/../static/logo.png" width="40" height="40">
        </a-col>
        <a-col :span="17">
          <h1 class="log-class" v-if="!collapsed">制造执行系统</h1>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="21">
      <a-row>
        <a-col :span="21">
          <a-menu
            :mode="model"
            :theme="theme"
            @click="toRouter"
            :default-selected-keys="[this.$route.path]">
            <template v-for="item in routes" v-if="!item.hidden">
              <a-menu-item v-if="!item.children" :key="item.path">
                <a-icon :type="item.meta.icon"/>
                <span>{{item.meta.title}}</span>
              </a-menu-item>
              <sub-menu v-else :menu-info="item" :key="item.path"/>
            </template>
          </a-menu>
        </a-col>
        <a-col :span="3">
          <avatar-menu></avatar-menu>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script>
  import SubMenu from './SubMenu'
  import AvatarMenu from './AvatarMenu'

  export default {
    components: {
      'sub-menu': SubMenu,
      'avatar-menu': AvatarMenu
    },
    props: {
      theme: {
        type: String,
        default: "dark"
      },
      collapsed: {
        type: Boolean,
        default: false
      },
      model: {
        type: String,
        default: "inline"
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
      },
      handleMenuClick(e) {
        if (e.key == "onChange") {
          this.$store.commit('setMenuModel', "inline");
        }
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
  * {
    font-size: 14px;
    font-weight: 600;
    line-height: 64px;
    color: white;
  }

  .logo {
    height: 64px;
    line-height: 64px;
    background-color: #02172b;
  }

  .log-class {
    font-size: 14px;
    font-weight: 600;
    color: white;
  }
</style>
