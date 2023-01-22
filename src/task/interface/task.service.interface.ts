import { ITask } from "./task.interface";

export const TaskServiceToken = Symbol('TaskService')

export interface ITaskService {
  findAll(): Promise<ITask[]>
}
