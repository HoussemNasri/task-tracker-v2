<template>
   <div v-for="task in tasks">
      <TaskItem :task="task" />
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
   };
</script>