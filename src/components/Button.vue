<template>
   <button class="btn" :style="{ background: color }">{{ title }}</button>
</template>

<script>
   export default {
      name: "Button",
      props: {
         title: String,
         color: String,
      },
   };
</script>

<style scoped>
   button {
      padding: 10px 16px;
      border-radius: 5px;
   }
</style>