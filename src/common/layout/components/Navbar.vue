<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="sidebarShow ? 'menu-unfold' : 'menu-fold'"
      @click="setSidebarShow"
    />
  </a-layout-header>
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
        sidebarShow: this.collapsed
      };
    },
    methods: {
      setSidebarShow(val) {
        this.sidebarShow = !this.sidebarShow;
        this.$emit('setCollapsed', this.sidebarShow);
      }
    }
  };
</script>
<style scoped>
  .container-class .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .container-class .trigger:hover {
    background: rgba(0, 0, 0, .025);
  }
</style>
