<template>
  <div id="BarChart" :style="{width:width + 'px',height: height + 'px'}"></div>
</template>
<script>
export default {
  name: "BarChart",
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
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
  },
};
</script>