<template>
   <div :class="['task', task.reminder ? 'reminder' : '']">
      <h3>
         {{ task.text }}
         <i @click="onDelete()" class="fas fa-times"></i>
      </h3>
      <p>{{ task.day }}</p>
   </div>
</template>

<script>
   export default {
      name: "TaskItem",
      props: {
         task: Object,
      },
      methods: {
         onDelete() {
            this.$emit("delete-task", this.task.id);
         },
      },
   };
</script>

<style scope>
   .fas {
      color: red;
   }
   .task {
      background: #f4f4f4;
      margin: 5px;
      padding: 10px 20px;
   }
   .task.reminder {
      border-left: 5px solid green;
   }
   .task h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
</style>