<template>
  <vue-draggable-resizable
    class-name="my-class"
    class-name-active="my-active-class"
    :w="width"
    :h="height"
    @resizing="onResize"
  >
    <div id="BarChart" :style="{width:width + 'px',height: height + 'px'}"></div>
  </vue-draggable-resizable>
</template>
<script>
export default {
  name: "BarChart",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      width: 300,
      height: 300,
      x: "1000",
      y: "100",
    };
  },
  mounted() {
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
    onResize(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.drawLine();
    },
  },
};
</script>
<style>
.spin-class {
  position: relative;
  width: 100%;
  height: 100%;
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
</style>
