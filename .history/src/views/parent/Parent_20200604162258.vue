<template>
  <div>
    <div class="top"></div>
    <div class="nav-left"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Name",
  data() {
    return {
    };
  },
  components: {},
  methods: {
  
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 30px;
  background: #999;
}
.nav-left {
  width: 60px;
  height: 500px;
  background: red;
}
</style>