<template>
  <a-layout-sider
    :trigger="null"
    collapsible>
    <a-row class="logo" type="flex" justify="center">
      <a-col :span="5">
        <img src="@/../static/logo.png" width="40" height="40">
      </a-col>
      <a-col :span="14">
        <h1 class="log-class">数据大屏</h1>
      </a-col>
    </a-row>
    <a-menu
      mode="inline"
      style="background-color: #171b22;border: none;"
      :default-selected-keys="['board']"
      :default-open-keys="[this.$route.matched[0].path]"
      @click="toRouter">
      <template v-for="item in routes" v-if="item.path === '/board'">
        <a-menu-item v-for="item1 in item.children" :key="item1.path" class="menu-item" v-if="!item1.hidden">
          <a-icon type="file-done" :style="{ fontSize: '16px', color: 'white' }"/>
          <span style="color: white;">{{item1.meta.title}}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>

  export default {
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
        this.$router.push(item.key);
      }
    },
    computed: {
      routes() {
        return this.$router.options.routes
      },
      siderCollapsed() {
        return this.$store.state.siderCollapsed
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

  .logo {
    height: 64px;
    line-height: 64px;
    background-color: #171b22;
  }

  .log-class {
    font-size: 20px;
    font-weight: 900;
    color: #FFFFFF;
  }

  .menu-item {
    padding-left: 30px !important;
    letter-spacing: 2px;
  }

  .menu-item:hover {
    background-color: #12161b;
  }

  .ant-menu-item::after {
    border-right: none !important;
  }

  .ant-menu-item-selected {
    background-color: #12161b !important;
  }
</style>
