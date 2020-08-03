<template>
  <el-pagination
    background
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-size="pageSize"
    layout="total, prev, pager, next, jumper"
    class="page-class"
    :total="total">
  </el-pagination>
</template>
<script>
  export default {
    name: "Pagination",
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 0
      },
      pageSize: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {}
    },
    methods: {
      handleCurrentChange(val) {
        this.$emit('setCurrent', val);
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
