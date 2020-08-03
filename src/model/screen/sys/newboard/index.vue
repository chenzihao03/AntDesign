<template>
  <a-spin size="large" :delay="50000" spinning="" class="spin-class">
    <div class="dragger-class">
      <vue-draggable-resizable
        class-name="my-class"
        class-name-active="my-active-class"
        :w="width"
        :h="height"
        @resizing="onResize">
        <div id="myChart" :style="{width:width + 'px',height: height + 'px'}">
        </div>
      </vue-draggable-resizable>
    </div>
  </a-spin>
</template>
<script>
  export default {
    name: 'newboard',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        width: 300,
        height: 300,
        x: '1000',
        y: '100'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        let echarts = require('echarts');
        let chartDiv = document.getElementById('myChart');
        let myChart = echarts.init(chartDiv);
        myChart.resize();
        myChart.setOption({
          // title: {
          //   text: 'ECharts 入门示例'
          // },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
      onResize(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.drawLine();
      }
    }
  }
</script>
<style>
  .spin-class {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .my-active-class {
    border: 1px dashed #09f;
    background-color: rgba(115, 170, 229, .5);
  }

  .handle {
    width: 10px;
    height: 10px;
    border: 1px solid #09f;
    border-radius: 100% !important;
    background-color: #09f !important;
  }

  .dragger-class {
    height: 100%;
    width: 100%;
    position: relative;
    /*background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px;*/
  }
</style>
