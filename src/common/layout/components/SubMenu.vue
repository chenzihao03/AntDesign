<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <i :class="menuInfo.meta.icon"/>
          <span v-if="!collapsed">{{ menuInfo.meta.title }}</span>
        </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-if="!item.children && !item.hidden" :key="parent ? parent + '/' + item.path : menuInfo.path + '/' + item.path">
        <i :class="item.meta.icon"/>
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <sub-menu v-if="item.children && !item.hidden" :key="item.name" :menu-info="item" :parent="parent ? parent + '/' + item.path : menuInfo.path + '/' + item.path"/>
    </template>
  </a-sub-menu>
</template>

<script>
  import {Menu} from 'ant-design-vue';

  export default {
    name: "SubMenu",
    props: {
      ...Menu.SubMenu.props,
      menuInfo: {
        type: Object,
        default: () => ({}),
      },
      collapsed: {
        type: Boolean,
        default: false
      },
      parent: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped>
  i {
    font-size: 15px;
    padding-right: 10px;
  }
</style>
