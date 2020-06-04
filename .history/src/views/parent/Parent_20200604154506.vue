<template>
  <div class="all">
    <div class="top"></div>
    <div class="nav">
      <div class="nav-left"></div>
      <div>
        <input type="text" v-model="value" />
        <button @click="goTo">跳转到detail</button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Name",
  data() {
    return {
      id: 100
    };
  },
  components: {},
  methods: {
    goTo() {
      this.$router.push({ name: "Child", query: { id: this.id } });
    }
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
</style>