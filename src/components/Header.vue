<template>
   <header>
      <h1>{{ title }}</h1>
      <Button
         @click="toggleAddTask()"
         :title="state.isAddTaskShown ? 'Close' : 'Add Task'"
         :color="state.isAddTaskShown ? 'red' : 'green'" />
   </header>
</template>

<script>
   import Button from "./Button.vue";
   import { store } from "../Store";

   export default {
      name: "Header",
      data() {
         return {
            state: store.state,
         };
      },
      props: {
         title: {
            type: String,
            default: "Hello World",
         },
      },
      components: {
         Button,
      },
      methods: {
         toggleAddTask() {
            this.state.isAddTaskShown = !this.state.isAddTaskShown;
         },
      },
   };
</script>

<style scoped>
   header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
   }
   h1 {
      color: rgb(6, 20, 39);
   }
</style>