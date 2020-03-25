<template>
  <a-layout-content class="content-class">
    <a-card title="全部项目" :loading="loading">
      <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
      <a-card-grid style="width:25%;text-align:center" :hoverable="false">Content</a-card-grid>
      <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
      <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
      <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
      <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
      <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
      <a-card-grid style="width:25%;text-align:center">Content</a-card-grid>
    </a-card>
  </a-layout-content>
</template>
<script>
  export default {
    data() {
      return {
        loading: true
      }
    },
    mounted() {
      const that = this;
      this.timer = setInterval(() => {
        that.loading = false;
      }, 2000)
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
      }
    }
  }
</script>
<style scoped>
  .content-class {
    margin: 24px 16px;
    background-color: #949494;
    minHeight: "280px"
  }
</style>
