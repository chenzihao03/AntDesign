<template>
  <a-layout-footer>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      class="page-class"
      :total="400">
    </el-pagination>
  </a-layout-footer>
</template>
<script>
  export default {
    data() {
      return {
        currentPage: 4
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style>
  .page-class {
    text-align: center;
  }

  .el-pagination__total {
    color: white;
  }

  .el-select-dropdown {
    border-radius: 0;
    border: none;
    background-color: #27343e;
    color: #bcc9d4;
  }

  .el-select-dropdown__item.hover, .el-select-dropdown__item.selected {
    font-weight: 400;
    background-color: rgba(0, 192, 222, .1);
  }

  .el-checkbox__inner, .el-dialog .el-slider__runway, .el-dialog input, .el-dialog textarea, .el-slider__runway, .el-switch__core, input, textarea {
    background-color: #0f1014 !important;
    color: #859094 !important;
    border-color: #282e3a !important;
  }

  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    background-color: transparent;
    color: #fff;
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: transparent;
    border: 1px solid #409eff;
  }
</style>
