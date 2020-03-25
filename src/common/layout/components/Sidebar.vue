<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    :theme="theme"
    v-model="collapsed">
    <div class="logo">
      <h2 style="color: white;" v-if="!collapsed">My Ant Deign</h2>
    </div>
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      mode="inline"
      :theme="theme"
      :inlineCollapsed="collapsed"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart"/>
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop"/>
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="inbox"/>
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail"/><span>Navigation One</span></span>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore"/><span>Navigation Two</span></span>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script>
  export default {
    props: {
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        theme: "dark",
        list: [
          {
            key: '1',
            title: 'Option 1',
          },
          {
            key: '2',
            title: 'Navigation 2',
            children: [
              {
                key: '2.1',
                title: 'Navigation 3',
                children: [{key: '2.1.1', title: 'Option 2.1.1'}],
              },
            ],
          },
        ],
      };
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
