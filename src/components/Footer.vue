<template>
   <footer>
      <p>Copyright &copy; 2022</p>
      <router-link v-show="isNotInAboutPage" to="/about">About</router-link>
   </footer>
</template>
<script>
   export default {
      computed: {
         isNotInAboutPage() {
            return (this.$route.name != "About");
         },
      },
   };
</script>

<style scoped>
   a {
      color: #333;
   }
   footer {
      margin-top: 30px;
      text-align: center;
   }
</style>