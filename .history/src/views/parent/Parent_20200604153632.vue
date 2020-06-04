<template>
 <div>
 <input type="text" v-model="value">
<button @click="goTo">跳转到detail</button>
<router-view></router-view>
 </div>
</template>

<script>
 export default {
   name : 'Name',
   data () {
     return {

     }
   },
   components: {

   },
   methods: {

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