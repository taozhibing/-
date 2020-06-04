<template>
 <div>
<button @click="goTo">跳转到detail</button>
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
     goTo() {
       // 不传参数
       this.$router.push('/detail')
      //  this.$router.replace('/detail') 不能回退操作
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
