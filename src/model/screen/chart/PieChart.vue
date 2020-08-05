<template>
  <vue-draggable-resizable
    class-name="my-class"
    class-name-active="my-active-class"
    :w="width"
    :h="height"
    @resizing="onResize"
    style
  >
    <div id="PieChart" :style="{width:width + 'px',height: height + 'px'}"></div>
  </vue-draggable-resizable>
</template>
<script>
export default {
  name: "PieChart",
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
      let chartDiv = document.getElementById("PieChart");
      let myChart = echarts.init(chartDiv);
      myChart.resize();
      myChart.setOption({
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
