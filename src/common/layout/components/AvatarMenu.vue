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
      <h3>整体风格</h3>
      <a-row>
        <a-col :span="8">
          <div>
            <img src="@/../static/img/moon.svg" width="50" height="50" @click="setMenuTheme('dark')"/>
            <a-icon type="check" :class="checkClass" v-if="menuTheme === 'dark'"/>
          </div>
        </a-col>
        <a-col :span="8">
          <img src="@/../static/img/sun.svg" width="50" height="50" @click="setMenuTheme('light')"/>
          <a-icon type="check" :class="checkClass" v-if="menuTheme === 'light'"/>
        </a-col>
      </a-row>
      <br>
      <h3>主题颜色</h3>
      <a-row style="height:20px;">
        <a-col class="color-class" v-for="(item,index) in colorList" :key="index" :span="3" :offset="1"
               @click="setMenuColor('light')" :style="{ backgroundColor : item.color }">
          <a-icon type="check" :class="checkColor"/>
        </a-col>
      </a-row>
      <a-divider/>
      <h3>导航模式</h3>
      <a-row>
        <a-col :span="8">
          <img src="@/../static/img/sider.svg" width="50" height="50" @click="setMenuModel('inline')"/>
          <a-icon type="check" :class="checkClass" v-if="menuModel === 'inline'"/>
        </a-col>
        <a-col :span="8">
          <img src="@/../static/img/header.svg" width="50" height="50" @click="setMenuModel('horizontal')"/>
          <a-icon type="check" :class="checkClass" v-if="menuModel === 'horizontal'"/>
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
        checkClass: "check-class",
        checkColor: "check-color",
        colorList: [{
          name: '拂晓蓝',
          color: '#1a91ff'
        }, {
          name: '清新绿',
          color: '#53c41c'
        }, {
          name: '薄暮红',
          color: '#f5242f'
        }, {
          name: '极客蓝',
          color: '#3155eb'
        }]
      }
    },
    methods: {
      setMenuModel(menuModel) {
        this.$store.commit('setMenuModel', menuModel);
      },
      setMenuTheme(menuTheme) {
        this.$store.commit('setMenuTheme', menuTheme);
      },
      setMenuColor(menuColor) {
        this.$store.commit('setMenuTheme', menuColor);
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
      },
      menuTheme() {
        return this.$store.state.menuTheme
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
    font-size: 14px;
  }

  .check-color {
    position: absolute;
    top: 3px;
    left: 3px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    border-color: transparent;
  }

  .color-class {
    padding-left: 0;
    padding-right: 0;
    margin-right: 8px;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    border-color: transparent;
    text-align: center;
  }
</style>
