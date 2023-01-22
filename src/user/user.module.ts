import { forwardRef, Module } from '@nestjs/common';
import { PlanModule } from 'src/plan/plan.module';
import { TaskModule } from 'src/task/task.module';
import { UserServiceToken } from './interface';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserServiceToken,
      useValue: UserService
    }
  ],
  exports: [UserServiceToken],
})
export class UserModule {}
