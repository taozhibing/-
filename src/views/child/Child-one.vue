<template>
 <div>
<div>
<input type="text" v-model="value">
<button @click="goTo">跳转到child-two</button>
</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       id : 100

     }
   },
   components: {

   },
   methods: {
      goTo() {
      this.$router.push({ name: "Child-two", query: { id: this.id } });
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