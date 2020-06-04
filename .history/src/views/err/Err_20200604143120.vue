<template>
 <div>
你访问的页面不存在
<button @click="goto">返回首页</button>
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
     goto() {
       this.$router.push('/home')
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