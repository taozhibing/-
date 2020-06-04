<template>
 <div><input type="text">
<button @click="goTo">跳转到detail</button>
 </div>
</template>

<script>
 export default {
   name : Home,
   data () {
     return {
       id : 100

     }
   },
   components: {

   },
   methods: {
     goTo() {
       // 不传参数
       this.$router.push('/detail')
      //  this.$router.replace('/detail') 不能回退操作

      // 路由传参 query 和 params
      // this.$router.push({path:'/detail',query : {id : this.id}})
      this.$router.push({name:'Detail',query : {id : this.id}})
      this.$router.push({name:'Detail',params : {id : this.id}})
         
     }

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
