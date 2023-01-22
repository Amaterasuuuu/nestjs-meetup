import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [UserModule, TaskModule, PlanModule],
})
export class AppModule {}
