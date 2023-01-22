import { Controller, Inject } from '@nestjs/common';
import { IUserService, UserServiceToken } from './interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserServiceToken)
    private readonly service: IUserService
  ) {}
}
