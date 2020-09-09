<template>
  <a-row class="logo" :style="{backgroundColor: menuTheme === 'dark' ? '#02172b' : '#FFFFFF'}">
    <a-col :span="3">
      <a-row type="flex" justify="end">
        <a-col :span="5">
          <img src="@/../static/logo.png" width="40" height="40" />
        </a-col>
        <a-col :span="17">
          <h1
            class="log-class"
            v-if="!collapsed"
            :style="{color: menuTheme === 'dark' ? '#FFFFFF' : '#000000'}"
          >制造执行系统</h1>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="21">
      <a-row>
        <a-col :span="21">
          <a-menu
            :mode="menuModel"
            :theme="menuTheme"
            @click="toRouter"
            :default-selected-keys="[this.$route.path]"
            :style="{color: menuTheme === 'dark' ? '#FFFFFF' : '#000000'}"
          >
            <template v-for="item in routes">
              <template v-if="!item.hidden">
                <a-menu-item v-if="!item.children" :key="item.path">
                  <a-icon :type="item.meta.icon" />
                  <span>{{item.meta.title}}</span>
                </a-menu-item>
                <sub-menu v-else :menu-info="item" :key="item.path" />
              </template>
            </template>
          </a-menu>
        </a-col>
        <a-col :span="3">
          <avatar-menu :style="{color: menuTheme === 'dark' ? '#FFFFFF' : '#000000'}"></avatar-menu>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script>
import SubMenu from "./SubMenu";
import AvatarMenu from "./AvatarMenu";

export default {
  components: {
    "sub-menu": SubMenu,
    "avatar-menu": AvatarMenu,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sidebarClass: "sidebar-class",
    };
  },
  watch: {
    collapsed(val, newVal) {
      if (!newVal) {
        this.sidebarClass = "collapsed-class";
      } else {
        this.sidebarClass = "sidebar-class";
      }
    },
  },
  methods: {
    toRouter(item) {
      if (item.key == "/screen/board") {
        let routeData = this.$router.resolve({
          path: item.key,
        });
        var win = window.open(routeData.href, "_blank");
        win.document.title = "标题";
        win.focus();
      } else {
        this.$router.push(item.key);
      }
    },
    handleMenuClick(e) {
      if (e.key == "onChange") {
        this.$store.commit("setMenuModel", "inline");
      }
    },
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    menuModel() {
      return this.$store.state.menuModel;
    },
    menuTheme() {
      return this.$store.state.menuTheme;
    },
  },
};
</script>
<style scoped>
* {
  font-size: 14px;
  font-weight: 600;
  line-height: 64px;
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
