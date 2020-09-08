<template>
  <div id="area"></div>
</template>

<script>
import { Chart } from "@antv/g2";
export default {
  name: "MiniArea",
  data() {
    return {
      data: [
        { year: "1991", value: 15468 },
        { year: "1992", value: 16100 },
        { year: "1993", value: 15900 },
        { year: "1994", value: 17409 },
        { year: "1995", value: 17000 },
        { year: "1996", value: 31056 },
        { year: "1997", value: 31982 },
        { year: "1998", value: 32040 },
        { year: "1999", value: 33233 },
      ],
    };
  },
  mounted() {
    this.cc();
  },
  methods: {
    cc() {
      const chart = new Chart({
        container: "area",
        autoFit: true,
        height: 90,
      });

      chart.data(this.data);
      chart.scale({
        value: {
          min: 10000,
          nice: true,
        },
        year: {
          range: [0, 1],
        },
      });
      chart.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart.area().position("year*value");
      chart.line().position("year*value");
      chart.axis(false);
      chart.render();
    },
  },
};
</script>

<style lang="less" scoped>
</style>