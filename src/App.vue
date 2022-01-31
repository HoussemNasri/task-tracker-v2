/* eslint-disable vue/no-unused-components */
/* eslint-disable vue/no-unused-components */
<template>
   <div class="container">
      <Header title="Task Tracker" />
      <Tasks @delete-task="deleteTask" :tasks="tasks" />
   </div>
</template>

<script>
   import Header from "./components/Header.vue";
   import Tasks from "./components/Tasks.vue";

   export default {
      name: "App",
      components: { Header, Tasks },
      data() {
         return {
            tasks: Array,
         };
      },
      methods: {
         deleteTask(id) {
            console.info(
               `Wating for user confirmation to delete task with id ${id}`
            );
            if (confirm("Are you sure?")) {
               console.info("Deleting is confirmed");
               this.tasks = this.tasks.filter((_) => _.id != id);
            } else {
               console.info("Deleting is canceled");
            }
         },
      },
      created() {
         this.tasks = [
            {
               id: "1",
               text: "Doctors Appointment",
               day: "March 5th at 2:30pm",
               reminder: true,
            },
            {
               id: "2",
               text: "Meeting with boss",
               day: "March 6th at 1:30pm",
               reminder: true,
            },
            {
               id: "3",
               text: "Food shopping",
               day: "March 7th at 2:00pm",
               reminder: false,
            },
         ];
      },
   };
</script>

<style>
   @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   body {
      font-family: "Poppins", sans-serif;
   }

   .container {
      max-width: 500px;
      margin: 30px auto;
      overflow: auto;
      min-height: 300px;
      border: 1px solid steelblue;
      padding: 30px;
      border-radius: 5px;
   }

   .btn {
      display: inline-block;
      background: #000;
      color: #fff;
      border: none;
      padding: 10px 20px;
      margin: 5px;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      font-size: 15px;
      font-family: inherit;
   }

   .btn:focus {
      outline: none;
   }

   .btn:active {
      transform: scale(0.98);
   }

   .btn-block {
      display: block;
      width: 100%;
   }
</style>
