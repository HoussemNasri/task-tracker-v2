import { reactive } from "vue";

const apiUrl = process.env.VUE_APP_API_URL;

console.log(`API URL: ${apiUrl}`);

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

    await fetch(`${apiUrl}/tasks/${id}`, {
      method: "DELETE",
    });
  },

  async addTask(task) {
    await fetch(`${apiUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    this.state.tasks = [...this.state.tasks, task];

    await this.reloadTasks();
  },

  async addAllTasks(tasks) {
    for (const task of tasks) {
      await this.addTask(task);
    }
  },

  async fetchTaskById(id) {
    return await (await fetch(`${apiUrl}/tasks/${id}`)).json();
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

    await fetch(`${apiUrl}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    task.reminder = !task.reminder;
  },

  async reloadTasks() {
    const res = await fetch(`${apiUrl}/tasks`);
    const data = await res.json();
    this.state.tasks = data;
  },
};
