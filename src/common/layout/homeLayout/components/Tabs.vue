<template>
  <a-tabs
    class="tab-layout-tabs"
    type="editable-card"
    style="height:52px"
    :hide-add="true"
    default-active-key="1"
    @change="callback"
  >
    <a-tab-pane key="1" tab="主页" :closable="false"></a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2"></a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3"></a-tab-pane>
  </a-tabs>
</template>

<script>
export default {
  name: "SubMenu",
  props: {},
};
</script>

<style lang="less">
@primary-color: #1890ff;
.page-transition-enter {
  opacity: 0;
}

.page-transition-leave-active {
  opacity: 0;
}

.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/*美化弹出Tab样式*/
.ant-tabs-nav-container {
  margin-top: 4px;
}

/* 修改 ant-tabs 样式 */
.tab-layout-tabs.ant-tabs {
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ffffff;
  background-color: white;
  padding: 0 20px;

  .ant-tabs-bar {
    margin: 4px 0 0;
    border: none;
  }
}

.tab-layout-tabs.ant-tabs {
  &.ant-tabs-card .ant-tabs-tab {
    padding: 0 24px !important;
    background-color: white !important;
    margin-right: 10px !important;

    .ant-tabs-close-x {
      width: 12px !important;
      height: 12px !important;
      opacity: 0 !important;
      cursor: pointer !important;
      font-size: 12px !important;
      margin: 0 !important;
      position: absolute;
      top: 36%;
      right: 6px;
    }

    &:hover .ant-tabs-close-x {
      opacity: 1 !important;
    }
  }
}

.tab-layout-tabs.ant-tabs.ant-tabs-card > .ant-tabs-bar {
  .ant-tabs-tab {
    border: none !important;
    border-bottom: 1px solid transparent !important;
  }
  .ant-tabs-tab-active {
    border-color: @primary-color!important;
  }
}
</style>
