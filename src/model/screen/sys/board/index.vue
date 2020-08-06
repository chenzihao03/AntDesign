<template>
  <a-layout class="container-class">
    <a-layout-header class="header-class">
      <!-- 组件菜单 -->
      <a-menu theme="dark" mode="horizontal" class="menu-class" @click="tChoose">
        <a-sub-menu v-for="(item,index) in menuList" :key="index">
          <span slot="title" class="submenu-title-wrapper">
            <a-icon :type="item.icon" :style="{fontSize:'20px'}" :theme="item.theme" />
          </span>
          <a-menu-item v-for="item1 in item.children" :key="item1.name">
            <a-icon :type="item1.icon" :style="{fontSize:'20px'}" />
            {{item1.title}}
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="left-class">
        <p class="title">图层</p>
      </a-layout-sider>
      <a-layout-content class="main-class">
        <div class="container">
          <component
            v-for="(item,index) in comName"
            :is="item.name"
            :key="index"
            @func="getContent(index)"
          ></component>
        </div>
      </a-layout-content>
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
} from "@/model/screen/sys/components/charts";
export default {
  components: {
    BarChart,
    LineChart,
    PieChart,
    RadarChart,
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
              name: "RadarChart",
              title: "雷达图",
              icon: "radar-chart",
            },
          ],
        },
        {
          icon: "highlight",
          theme: "outlined",
        },
        {
          icon: "picture",
          theme: "outlined",
        },
        {
          icon: "table",
          theme: "outlined",
        },
      ],
      comName: [],
    };
  },
  mounted() {},
  methods: {
    tChoose(val) {
      this.comName.push({
        name: val.key,
      });
    },
    getContent(index) {},
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

.main-class {
  background: url("../../../../assets/img/boardbg.png") repeat;
  height: 100%;
  padding: 60px 0 0 0;
  width: 100%;
  overflow: hidden;
}
.container {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  position: relative;
  transform: scale(0.721354, 0.721354);
  width: 1926px;
  height: 1077px;
  background: url("../../../../assets/img/map_bg.jpg") no-repeat;
  background-position: 0% 0%;
  background-size: 100% 100%;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: red;
}
</style>
