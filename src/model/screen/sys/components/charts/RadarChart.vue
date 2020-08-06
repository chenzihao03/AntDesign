<template>
  <vue-draggable-resizable
    class-name="my-class"
    class-name-active="my-active-class"
    class="draggable-class"
    :parent="true"
    :x="x"
    :y="y"
    :w="width"
    :h="height"
    @resizing="tResize"
    @dragging="tDragging"
    @activated="tActivated"
    @deactivated="tDeactivated"
    style="position:absolute;"
  >
    <div class="dragger-left" v-if="lineShow"></div>
    <div class="dragger-top" v-if="lineShow"></div>
    <div class="dragger-label" v-if="lineShow">{{x + "," + y}}</div>
    <div id="RadarChart" :style="{width:width + 'px',height: height + 'px'}"></div>
  </vue-draggable-resizable>
</template>
<script>
export default {
  name: "RadarChart",
  data() {
    return {
      width: 300,
      height: 300,
      lineShow: false,
      x: 0,
      y: 0,
    };
  },
  mounted() {
    this.drawLine();
  },
  updated() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let echarts = require("echarts");
      let RandarDiv = document.getElementById("RadarChart");
      let RadarChart = echarts.init(RandarDiv);
      RadarChart.resize();
      RadarChart.setOption({
        title: {
          text: "基础雷达图",
        },
        tooltip: {},
        legend: {
          data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"],
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: [
            { name: "销售（sales）", max: 6500 },
            { name: "管理（Administration）", max: 16000 },
            { name: "信息技术（Information Techology）", max: 30000 },
            { name: "客服（Customer Support）", max: 38000 },
            { name: "研发（Development）", max: 52000 },
            { name: "市场（Marketing）", max: 25000 },
          ],
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "预算分配（Allocated Budget）",
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "实际开销（Actual Spending）",
              },
            ],
          },
        ],
      });
    },
    tDragging(x, y) {
      this.x = x;
      this.y = y;
    },
    tResize(x, y, width, height) {
      this.width = width;
      this.height = height;
    },
    tActivated(val) {
      this.lineShow = true;
    },
    tDeactivated() {
      this.lineShow = false;
    },
  },
};
</script>
<style>
.spin-class {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.my-active-class {
  border: 1px dashed #09f;
  background-color: rgba(115, 170, 229, 0.5);
}

.handle {
  width: 10px;
  height: 10px;
  border: 1px solid #09f;
  border-radius: 100% !important;
  background-color: #09f !important;
}

.dragger-left {
  position: absolute;
  border-top: 1px dashed #09f;
  width: 10000px;
  height: 0;
  top: 0;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

.dragger-top {
  position: absolute;
  border-left: 1px dashed #09f;
  width: 0;
  height: 10000px;
  left: 0;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

.dragger-label {
  top: -5px;
  left: -8px;
  position: absolute;
  padding: 5px;
  -webkit-transform: translate(-100%, -100%);
  transform: translate(-100%, -100%);
  color: #09f;
  font-size: 18px;
  white-space: nowrap;
  cursor: move;
}
</style>