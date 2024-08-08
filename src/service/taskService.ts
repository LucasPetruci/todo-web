import { instance } from "../api/axios.api";
import { ITask, ICreateTaskData, IUpdateTaskData } from "../types/types";

export const taskService = {
  async getTasks(): Promise<ITask[]> {
    const { data } = await instance.get<ITask[]>("/tasks");
    return data;
  },

  async createTask(taskData: ICreateTaskData): Promise<ITask> {
    const { data } = await instance.post<ITask>("/tasks", taskData);
    return data;
  },

  async updateTask(id: number, taskData: IUpdateTaskData): Promise<ITask> {
    const { data } = await instance.put<ITask>(`/tasks/${id}`, taskData);
    return data;
  },

  async deleteTask(id: number): Promise<void> {
    await instance.delete(`/tasks/${id}`);
  },

  async toggleTaskCompletion(id: number, isCompleted: boolean): Promise<ITask> {
    const { data } = await instance.put<ITask>(`/tasks/${id}`, { isCompleted });
    return data;
  },
};
