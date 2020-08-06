<template>
  <div id="LineChart" :style="{width:width + 'px',height: height + 'px'}"></div>
</template>
<script>
export default {
  name: "LineChart",
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
  },
};
</script>