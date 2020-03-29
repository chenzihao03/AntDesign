<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <i :class="menuInfo.meta.icon"/>
          <span>{{ menuInfo.meta.title }}</span>
        </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-if="!item.children && !item.hidden" :key="item.path">
        <i :class="item.meta.icon"/>
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <sub-menu v-if="item.children && !item.hidden" :key="item.name" :menu-info="item"/>
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

<style scoped>
  i {
    font-size: 15px;
    padding-right: 10px;
  }
</style>
