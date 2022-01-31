<template>
   <div v-for="task in tasks">
      <TaskItem @delete-task="$emit('delete-task', task.id)" :task="task" />
   </div>
</template>

<script>
   import TaskItem from "./TaskItem.vue";

   export default {
      name: "Tasks",
      components: { TaskItem },
      props: {
         tasks: Array,
      },
      emits: ["delete-task"],
   };
</script>

<style>
</style>