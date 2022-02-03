<template>
   <AddTask v-show="sharedState.isAddTaskShown" />

   <Tasks :tasks="sharedState.tasks" />
</template>
<script>
   import Tasks from "../components/Tasks.vue";
   import AddTask from "../components/AddTask.vue";

   import { store } from "../Store.js";

   export default {
      name: "Home",
      components: { Tasks, AddTask },
      data() {
         return {
            privateState: {},
            sharedState: store.state,
         };
      },
      async created() {
         await store.reloadTasks();
      },
   };
</script>