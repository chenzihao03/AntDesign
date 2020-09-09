<template>
  <a-layout-content class="content-class">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </a-layout-content>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>
<style scoped>
.content-class {
  margin: 24px 16px;
}
</style>
