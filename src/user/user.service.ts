import { Inject, Injectable } from '@nestjs/common';
import { ITaskService, TaskServiceToken } from 'src/task/interface';
import { IUser, IUserService } from './interface';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(TaskServiceToken)
    private readonly taskService: ITaskService,
  ) {}

  async findAll(): Promise<IUser[]> {
    await this.taskService.findAll()
    return []
  }
}
