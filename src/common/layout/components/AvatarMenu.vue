<template>
  <div>
    <a-dropdown>
      <div>
        <a-row type="flex" justify="end">
          <a-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :xxl="5">
            <a-avatar icon="user" :size="32"
                      src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>
          </a-col>
          <a-col :xs="0" :sm="0" :md="0" :lg="0" :xl="0" :xxl="17">
            欢迎您，陈梓豪
          </a-col>
        </a-row>
      </div>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="onChange">
          <a-icon type="tool"/>
          系统设置
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="user"/>
          2nd menu item
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="user"/>
          3rd item
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-drawer
      placement="right"
      :closable="false"
      :visible="visible"
      @close="onClose">
      <h2>导航模式</h2>
      <a-row>
        <a-col :span="8">
          <img src="@/../static/img/sider.svg" width="50" height="50" @click="setMenuModel('inline')"/>
          <div :class="checkClass" v-if="menuModel === 'inline'">
            <a-icon type="check"/>
          </div>
        </a-col>
        <a-col :span="8">
          <img src="@/../static/img/header.svg" width="50" height="50" @click="setMenuModel('horizontal')"/>
          <div :class="checkClass" v-if="menuModel === 'horizontal'">
            <a-icon type="check"/>
          </div>
        </a-col>
      </a-row>
    </a-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        checkClass: "check-class"
      }
    },
    methods: {
      setMenuModel(menuModel) {
        this.$store.commit('setMenuModel', menuModel);
      },
      handleMenuClick(e) {
        if (e.key == "onChange") {
          this.visible = true;
        }
      },
      onClose() {
        this.visible = false;
      }
    },
    computed: {
      menuModel() {
        return this.$store.state.menuModel
      }
    }
  }
</script>
<style scoped>
  .trigger:hover {
    background: rgba(0, 0, 0, .025);
  }

  .check-class {
    position: absolute;
    top: 20px;
    right: 30px;
  }
</style>
