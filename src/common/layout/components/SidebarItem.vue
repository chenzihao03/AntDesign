<template>
  <div>
    <a-menu
      mode="inline"
      :theme="theme"
      @click="toRoute"
      v-for="(item,index) in menu"
      :key="index"
      :inlineCollapsed="collapsed">
      <!-- 最后一级菜单 -->
      <a-menu-item
        v-if="!item.children && !item.hidden"
        :key="item.path"
        :index="item.path">
        <a-icon :type="item.meta.icon"/>
        <span>{{item.meta.title}}</span>
      </a-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <a-sub-menu
        v-if="item.children && !item.hidden"
        :key="item.path">
        <span slot="title">
          <a-icon :type="item.meta.icon"/>
          <span>{{ item.meta.title }}</span>
        </span>
        <!-- 递归 -->
        <a-menu-item
          :menu="item.children"/>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
  export default {
    name: "SidebarItem",
    props: ["menu", "theme", "collapsed"],
    methods: {
      toRoute(item) {
        debugger;
        this.$router.push(item.keyPath[1]);
      }
    }
  }
</script>
