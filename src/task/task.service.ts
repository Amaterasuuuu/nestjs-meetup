import { Inject, Injectable } from '@nestjs/common';
import { IUserService, UserServiceToken } from 'src/user';
import { ITask, ITaskService } from './interface';

@Injectable()
export class TaskService implements ITaskService {
  constructor(
    @Inject(UserServiceToken)
    private readonly userService: IUserService
  ) {}

  async findAll(): Promise<ITask[]> {
    return []
  }
}
