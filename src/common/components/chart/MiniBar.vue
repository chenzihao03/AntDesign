<template>
  <div id="bar"></div>
</template>

<script>
import { Chart } from "@antv/g2";
export default {
  name: "MiniBar",
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
        container: "bar",
        autoFit: true,
        height: 90,
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
      chart.axis(false);
      chart.render();
    },
  },
};
</script>

<style lang="less" scoped>
</style>