import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { TaskServiceToken } from './interface';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  controllers: [TaskController],
  providers: [
    {
      provide: TaskServiceToken,
      useValue: TaskService,
    }
  ],
  exports: [TaskServiceToken],
})
export class TaskModule {}
