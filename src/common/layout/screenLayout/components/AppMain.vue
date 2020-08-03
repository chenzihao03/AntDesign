<template>
  <a-layout-content class="content-class">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </a-layout-content>
</template>
<script>
  export default {
    data() {
      return {
        loading: true
      }
    },
    computed: {
      key() {
        return this.$route.path
      }
    }
  }
</script>
<style scoped>
  .content-class {
    margin: 24px 16px;
    background-color: #171b22;
  }
</style>
