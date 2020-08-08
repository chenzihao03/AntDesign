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
    <div id="Dashboard" :style="{width:width + 'px',height: height + 'px'}"></div>
  </vue-draggable-resizable>
</template>
<script>
export default {
  name: "Dashboard",
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
      let DashboardDiv = document.getElementById("Dashboard");
      let Dashboard = echarts.init(DashboardDiv);
      Dashboard.resize();
      Dashboard.setOption({
        tooltip: {
          formatter: "{a} <br/>{c} {b}",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "速度",
            type: "gauge",
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: "50%",
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [0.09, "lime"],
                  [0.82, "#1e90ff"],
                  [1, "#ff4500"],
                ],
                width: 3,
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            axisLabel: {
              // 坐标轴小标记
              fontWeight: "bolder",
              color: "#fff",
              shadowColor: "#fff", //默认透明
              shadowBlur: 10,
            },
            axisTick: {
              // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            splitLine: {
              // 分隔线
              length: 25, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            pointer: {
              // 分隔线
              shadowColor: "#fff", //默认透明
              shadowBlur: 5,
            },
            title: {
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                fontSize: 20,
                fontStyle: "italic",
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            detail: {
              backgroundColor: "rgba(30,144,255,0.8)",
              borderWidth: 1,
              borderColor: "#fff",
              shadowColor: "#fff", //默认透明
              shadowBlur: 5,
              offsetCenter: [0, "50%"], // x, y，单位px
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                color: "#fff",
              },
            },
            data: [{ value: 40, name: "km/h" }],
          },
          {
            name: "转速",
            type: "gauge",
            center: ["25%", "55%"], // 默认全局居中
            radius: "30%",
            min: 0,
            max: 7,
            endAngle: 45,
            splitNumber: 7,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [0.29, "lime"],
                  [0.86, "#1e90ff"],
                  [1, "#ff4500"],
                ],
                width: 2,
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            axisLabel: {
              // 坐标轴小标记
              fontWeight: "bolder",
              color: "#fff",
              shadowColor: "#fff", //默认透明
              shadowBlur: 10,
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            splitLine: {
              // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            pointer: {
              width: 5,
              shadowColor: "#fff", //默认透明
              shadowBlur: 5,
            },
            title: {
              offsetCenter: [0, "-30%"], // x, y，单位px
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                fontStyle: "italic",
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            detail: {
              //backgroundColor: 'rgba(30,144,255,0.8)',
              // borderWidth: 1,
              borderColor: "#fff",
              shadowColor: "#fff", //默认透明
              shadowBlur: 5,
              width: 80,
              height: 30,
              offsetCenter: [25, "20%"], // x, y，单位px
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                color: "#fff",
              },
            },
            data: [{ value: 1.5, name: "x1000 r/min" }],
          },
          {
            name: "油表",
            type: "gauge",
            center: ["75%", "50%"], // 默认全局居中
            radius: "30%",
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [0.2, "lime"],
                  [0.8, "#1e90ff"],
                  [1, "#ff4500"],
                ],
                width: 2,
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            axisLabel: {
              fontWeight: "bolder",
              color: "#fff",
              shadowColor: "#fff", //默认透明
              shadowBlur: 10,
              formatter: function (v) {
                switch (v + "") {
                  case "0":
                    return "E";
                  case "1":
                    return "Gas";
                  case "2":
                    return "F";
                }
              },
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            pointer: {
              width: 2,
              shadowColor: "#fff", //默认透明
              shadowBlur: 5,
            },
            title: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [{ value: 0.5, name: "gas" }],
          },
          {
            name: "水表",
            type: "gauge",
            center: ["75%", "50%"], // 默认全局居中
            radius: "30%",
            min: 0,
            max: 2,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [0.2, "lime"],
                  [0.8, "#1e90ff"],
                  [1, "#ff4500"],
                ],
                width: 2,
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            axisTick: {
              // 坐标轴小标记
              show: false,
            },
            axisLabel: {
              fontWeight: "bolder",
              color: "#fff",
              shadowColor: "#fff", //默认透明
              shadowBlur: 10,
              formatter: function (v) {
                switch (v + "") {
                  case "0":
                    return "H";
                  case "1":
                    return "Water";
                  case "2":
                    return "C";
                }
              },
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
              },
            },
            pointer: {
              width: 2,
              shadowColor: "#fff", //默认透明
              shadowBlur: 5,
            },
            title: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [{ value: 0.5, name: "gas" }],
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
