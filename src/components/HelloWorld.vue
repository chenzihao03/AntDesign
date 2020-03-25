<template>
  <a-layout class="sidebar-class">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo"><h2 style="color: white;">My Ant Deign</h2></div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user"/>
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera"/>
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload"/>
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>

      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapsed = !collapsed"
        />
      </a-layout-header>

      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>

    </a-layout>
  </a-layout>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>

<style scoped>
  .sidebar-class {
    height: 100%;
  }

  .sidebar-class .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .sidebar-class .trigger:hover {
    background: rgba(0, 0, 0, .025);
  }

  .sidebar-class .logo {
    height: 32px;
    margin: 16px;
  }
</style>
