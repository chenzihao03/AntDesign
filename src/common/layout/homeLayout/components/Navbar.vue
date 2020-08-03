<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-row>
      <a-col :span="21">
        <a-icon
          class="trigger"
          :type="siderCollapsed ? 'menu-unfold' : 'menu-fold'"
          @click="setSidebarShow"
        />
      </a-col>
      <a-col :span="3" class="triggers">
        <avatar-menu></avatar-menu>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
  import AvatarMenu from './AvatarMenu'

  export default {
    components: {
      'avatar-menu': AvatarMenu,
    },
    methods: {
      setSidebarShow(val) {
        this.$store.commit('setSiderCollapsed', !this.siderCollapsed);
      }
    },
    computed: {
      siderCollapsed() {
        return this.$store.state.siderCollapsed
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

  /*.container-class .triggers {*/
  /*  line-height: 64px;*/
  /*  padding: 0 10px;*/
  /*  cursor: pointer;*/
  /*  transition: color 0.3s;*/
  /*}*/

  .container-class .triggers:hover {
    background: rgba(0, 0, 0, .025);
  }
</style>
