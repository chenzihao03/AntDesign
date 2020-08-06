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
    <div id="BarChart" :style="{width:width + 'px',height: height + 'px'}"></div>
  </vue-draggable-resizable>
</template>
<script>
export default {
  name: "BarChart",
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
      let BarDiv = document.getElementById("BarChart");
      let BarChart = echarts.init(BarDiv);
      BarChart.resize();
      BarChart.setOption({
        // title: {
        //   text: 'ECharts 入门示例'
        // },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
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