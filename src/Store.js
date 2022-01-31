import { reactive } from "vue";

export const store = {
  debug: true,

  state: reactive({
    tasks: [],
    isAddTaskShown: false,
  }),

  deleteTask(id) {
    this.state.tasks = this.state.tasks.filter((t) => t.id != id);
  },

  addTask(task) {
    this.state.tasks = [...this.state.tasks, task];
  },

  addAllTasks(tasks) {
    this.state.tasks = [...this.state.tasks, tasks];
  },

  getTaskById(id) {
    return this.state.tasks.find((t) => t.id == id);
  },

  toggleReminder(taskId) {
    const task = this.getTaskById(taskId);
    if (task == null) {
      throw new Error(`Invalid task id: ${taskId}`);
    }
    task.reminder = !task.reminder;
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
