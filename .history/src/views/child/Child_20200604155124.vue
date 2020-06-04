<template>
  <div>
    <div>
      <input type="text" v-model="value" />
      <button @click="goTo">跳转到child</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ""
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>