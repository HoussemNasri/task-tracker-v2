<template>
   <form @submit="onSubmit" class="add-form">
      <div class="form-control">
         <label>Task</label>
         <input type="text" v-model="text" name="text" placeholder="Add Task" />
      </div>
      <div class="form-control">
         <label>Day & Time</label>
         <input
            type="text"
            v-model="day"
            name="day"
            placeholder="Add Day & Time"
         />
      </div>
      <div class="form-control form-control-check">
         <label>Set Reminder</label>
         <input v-model="reminder" type="checkbox" name="reminder" />
      </div>
      <input class="btn btn-block" type="submit" value="Save Task" />
   </form>
</template>

<script>
   import { store } from "../Store";
   export default {
      name: "AddTask",
      data() {
         return {
            text: "",
            day: "",
            reminder: false,
         };
      },
      methods: {
         async onSubmit(e) {
            e.preventDefault();
            if (!this.isInputCorrect()) {
               return;
            }

            const toAddTask = {
               id: Math.floor(Math.random() * 1000000),
               text: this.text,
               day: this.day,
               reminder: this.reminder,
            };
            this.clearForm();

            await store.addTask(toAddTask);
         },
         clearForm() {
            this.text = "";
            this.day = "";
            this.reminder = false;
         },
         isInputCorrect() {
            if (!this.text || !this.day) {
               alert("Please fill in the new task fields");
               return false;
            }
            return true;
         },
      },
   };
</script>

<style scoped>
   .add-form {
      margin-bottom: 40px;
   }
   .form-control {
      margin: 20px 0;
   }
   .form-control label {
      display: block;
   }
   .form-control input {
      width: 100%;
      height: 40px;
      margin: 5px;
      padding: 3px 7px;
      font-size: 17px;
   }
   .form-control-check {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   .form-control-check label {
      flex: 1;
   }
   .form-control-check input {
      flex: 2;
      height: 20px;
   }
</style>