<template>
 <div>
我是路由传递过来的参数 : {{id}}
<div>
<input type="text" v-model="value">
</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods: {
      this.id = this.$route.query.id

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>