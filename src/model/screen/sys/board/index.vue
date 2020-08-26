<template>
  <a-layout class="container-class">
    <a-layout-header class="header-class">
      <!-- 组件菜单 -->
      <a-menu theme="dark" mode="horizontal" class="menu-class" @click="tChoose">
        <a-sub-menu v-for="(item,index) in menuList" :key="index">
          <span slot="title" class="submenu-title-wrapper">
            <a-icon :type="item.icon" :style="{fontSize:'20px'}" :theme="item.theme"/>
          </span>
          <a-menu-item v-for="item1 in item.children" :key="item1.name">
            <a-icon :type="item1.icon" :style="{fontSize:'20px'}"/>
            {{ item1.title }}
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <!-- 左侧操作栏 -->
      <a-layout-sider class="left-class">
        <p class="title">图层</p>
      </a-layout-sider>
      <!-- 中间图形展示层 -->
      <a-layout-content class="middle">
        <a-layout class="wrapper">
          <a-layout class="content">
            <component
              v-for="(item,index) in comName"
              :is="item.name"
              :key="index"
              @func="getContent(index)">
            </component>
          </a-layout>
        </a-layout>
      </a-layout-content>
      <!-- 右侧操作栏 -->
      <a-layout-sider class="right-class">
        <p class="title">操作</p>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  DotChart,
  FunnelChart,
} from "@/model/screen/sys/components/charts";
import {Texts} from "@/model/screen/sys/components/texts";
import {Dashboard} from "@/model/screen/sys/components/dashboard";

export default {
  components: {
    BarChart,
    LineChart,
    PieChart,
    RadarChart,
    Texts,
    DotChart,
    FunnelChart,
    Dashboard,
  },
  data() {
    return {
      menuList: [
        {
          icon: "area-chart",
          theme: "outlined",
          children: [
            {
              name: "BarChart",
              title: "柱状图",
              icon: "bar-chart",
            },
            {
              name: "LineChart",
              title: "折线图",
              icon: "line-chart",
            },
            {
              name: "PieChart",
              title: "饼图",
              icon: "pie-chart",
            },
            {
              name: "DotChart",
              title: "散点图",
              icon: "dot-chart",
            },
            {
              name: "RadarChart",
              title: "雷达图",
              icon: "radar-chart",
            },
            {
              name: "FunnelChart",
              title: "漏斗图",
              icon: "funnel-plot",
            },
          ],
        },
        {
          icon: "highlight",
          theme: "outlined",
          children: [
            {
              name: "texts",
              title: "文本",
              icon: "font-size",
            },
          ],
        },
        {
          icon: "picture",
          theme: "outlined",
        },
        {
          icon: "dashboard",
          theme: "outlined",
          children: [
            {
              name: "Dashboard",
              title: "仪表盘",
              icon: "dashboard",
            },
            {
              name: "reload",
              title: "环形图",
              icon: "reload",
            },
          ],
        },
        {
          icon: "table",
          theme: "outlined",
        },
        {
          icon: "eye",
          theme: "outlined",
        },
        {
          icon: "file-done",
          theme: "outlined",
        },
      ],
      comName: [],
    };
  },
  mounted() {
  },
  methods: {
    tChoose(val) {
      this.comName.push({
        name: val.key,
      });
    },
    getContent(index) {
    },
  },
};
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

.middle {
  background-color: #2a2d32;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  height: 100%;
  overflow: auto;

  .wrapper {
    width: 100%;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 60px 0 60px 0;
    background: url("../../../../assets/img/boardbg.png") repeat;

    .content {
      width: 100%;
      height: 100%;
      background: url("../../../../assets/img/map_bg.jpg") no-repeat;
      background-position: 0% 0%;
      background-size: 100% 100%;
    }
  }
}
</style>
