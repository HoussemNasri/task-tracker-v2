import { reactive } from "vue";

export const store = {
  debug: true,

  state: reactive({
    tasks: [],
  }),

  deleteTask(id) {
    this.state.tasks = this.state.tasks.filter((t) => t.id != id);
  },

  addTask(task) {
    this.state.tasks.push(task);
  },

  addAllTasks(tasks) {
    this.state.tasks.push(tasks);
  },

  reloadTasks() {
    this.state.tasks = [
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
