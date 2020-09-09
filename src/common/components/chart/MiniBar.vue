<template>
  <div :id="divName"></div>
</template>

<script>
import { Chart } from "@antv/g2";
export default {
  name: "MiniBar",
  props: {
    divName: {
      type: String,
      default: "bar",
    },
    height: {
      type: Number,
      default: 90,
    },
    showAxis: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      data: [
        { year: "1951 年", sales: 38 },
        { year: "1952 年", sales: 52 },
        { year: "1956 年", sales: 61 },
        { year: "1957 年", sales: 145 },
        { year: "1958 年", sales: 48 },
        { year: "1959 年", sales: 38 },
        { year: "1960 年", sales: 38 },
        { year: "1962 年", sales: 38 },
      ],
    };
  },
  mounted() {
    this.cc();
  },
  methods: {
    cc() {
      const chart = new Chart({
        container: this.divName,
        autoFit: true,
        height: this.height,
      });

      chart.data(this.data);
      chart.scale("sales", {
        nice: true,
      });

      chart.tooltip({
        showMarkers: false,
      });
      chart.interaction("active-region");
      chart.interval().position("year*sales");
      chart.axis(this.showAxis);
      chart.render();
    },
  },
};
</script>

<style lang="less" scoped>
</style>