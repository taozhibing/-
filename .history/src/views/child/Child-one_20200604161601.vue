<template>
 <div>
我是父路由传递过来的参数 : {{id}}
<div>
<input type="text" v-model="value">
</div>
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
      this.id = this.$route.query.id

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>