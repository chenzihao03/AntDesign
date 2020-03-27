<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail"/><span>{{ menuInfo.meta.title }}</span>
        </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.path">
        <a-icon :type="item.meta.icon"/>
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.name" :menu-info="item"/>
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
      }
    }
  }
</script>
