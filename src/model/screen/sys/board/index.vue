<template>
  <a-layout class="container-class">
    <a-layout-header class="header-class">
      <a-menu theme="dark" mode="horizontal" class="menu-class">
        <a-sub-menu v-for="(item,index) in menuList" :key="index">
        <span slot="title" class="submenu-title-wrapper">
          <a-icon :type="item.icon" :style="{fontSize:'20px'}" :theme="item.theme"/>
        </span>
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="left-class">
        <p class="title">图层</p>
      </a-layout-sider>
      <a-layout-content class="main-class"></a-layout-content>
      <a-layout-sider class="right-class">
        <p class="title">操作</p>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>
<script>

  export default {
    data() {
      return {
        menuList: [{
          icon: 'area-chart',
          theme: 'outlined'
        }, {
          icon: 'highlight',
          theme: 'outlined'
        }, {
          icon: 'picture',
          theme: 'outlined'
        }, {
          icon: 'table',
          theme: 'outlined'
        }]
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style scoped lang="scss">
  .container-class {
    height: 100%;
    width: 100%;
  }

  .menu-class {
    background-color: #212528;
    color: #909399;
    line-height: 48px;
    border-bottom: 1px solid #212528;
  }

  .header-class {
    height: 50px;
    line-height: 48px;
    padding: 0 !important;
    background-color: #212528;
  }

  .left-class {
    max-width: 180px !important;
    min-width: 180px !important;
    background-color: #212528;

    .title {
      padding: 0 20px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin-bottom: 10px;
      line-height: 35px;
      height: 35px;
      text-align: center;
      font-size: 13px;
      letter-spacing: 2px;
      text-indent: 2px;
      background-color: #2d343c;
      color: #fff;
    }
  }


  .right-class {
    max-width: 350px !important;
    min-width: 350px !important;
    background-color: #212528;

    .title {
      padding: 0 20px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin-bottom: 10px;
      line-height: 35px;
      height: 35px;
      text-align: center;
      font-size: 13px;
      letter-spacing: 2px;
      text-indent: 2px;
      background-color: #2d343c;
      color: #fff;
    }
  }

  .main-class {
    background: url("../../../../assets/boardbg.png") repeat;
    height: 100%;
  }
</style>
