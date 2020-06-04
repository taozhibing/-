<template>
 <div>
我是路由传递过来的参数 : {{id}}
 </div>
</template>

<script>
 export default {
   data () {
     return {
       id : ''

     }
   },
   components: {

   },
   methods: {

   },
   mounted() {
    // 接收路由传递过来的参数
    // 当前路由对象 this.$route
    this.id = this.$route.query.id
    this.id = this.$route.params.id

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>