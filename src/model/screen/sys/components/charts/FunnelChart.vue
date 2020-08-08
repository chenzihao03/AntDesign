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
    <div id="FunnelChart" :style="{width:width + 'px',height: height + 'px'}"></div>
  </vue-draggable-resizable>
</template>
<script>
export default {
  name: "FunnelChart",
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
      let FunnelDiv = document.getElementById("FunnelChart");
      let FunnelChart = echarts.init(FunnelDiv);
      FunnelChart.resize();
      FunnelChart.setOption({
        // title: {
        //   text: "漏斗图",
        //   subtext: "纯属虚构",
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        // toolbox: {
        //   feature: {
        //     dataView: { readOnly: false },
        //     restore: {},
        //     saveAsImage: {},
        //   },
        // },
        legend: {
          data: ["展现", "点击", "访问", "咨询", "订单"],
        },

        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "10%",
            top: 60,
            //x2: 80,
            bottom: 60,
            width: "80%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: [
              { value: 60, name: "访问" },
              { value: 40, name: "咨询" },
              { value: 20, name: "订单" },
              { value: 80, name: "点击" },
              { value: 100, name: "展现" },
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
