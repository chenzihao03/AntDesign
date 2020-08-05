<template>
  <vue-draggable-resizable
    class-name="my-class"
    class-name-active="my-active-class"
    :w="width"
    :h="height"
    @resizing="onResize"
  >
    <div id="LineChart" :style="{width:width + 'px',height: height + 'px'}"></div>
  </vue-draggable-resizable>
</template>
<script>
export default {
  name: "LineChart",
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
      let LineDiv = document.getElementById("LineChart");
      let LineChart = echarts.init(LineDiv);
      LineChart.resize();
      LineChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
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
