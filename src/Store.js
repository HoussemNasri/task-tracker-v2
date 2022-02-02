import { reactive } from "vue";

export const store = {
  debug: true,

  state: reactive({
    tasks: [],
    isAddTaskShown: false,
  }),

  async deleteTask(id) {
    const task = this.fetchTaskById(id);
    if (task == undefined) {
      throw new Error(`Invalid task id: ${id}`);
    }

    this.state.tasks = this.state.tasks.filter((t) => t.id != id);

    await fetch(`api/tasks/${id}`, {
      method: "DELETE",
    });
  },

  async addTask(task) {
    await fetch("api/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    this.state.tasks = [...this.state.tasks, task];

    await this.reloadTasks();
  },

  addAllTasks(tasks) {
    this.state.tasks = [...this.state.tasks, tasks];
  },

  async fetchTaskById(id) {
    return await (await fetch(`api/tasks/${id}`)).json();
  },

  getTaskById(id) {
    return this.state.tasks.find((t) => t.id == id);
  },

  async toggleReminder(taskId) {
    const task = this.getTaskById(taskId);
    const updatedTask = { ...task, reminder: !task.reminder };

    if (task == undefined) {
      throw new Error(`Invalid task id: ${taskId}`);
    }

    await fetch(`api/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    task.reminder = !task.reminder;
  },

  async reloadTasks() {
    const res = await fetch("api/tasks");
    const data = await res.json();
    this.state.tasks = data;
  },
};
