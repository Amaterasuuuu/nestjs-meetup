import { IUser } from ".";

export const UserServiceToken = Symbol('UserService')

export interface IUserService {
  findAll(): Promise<IUser[]>
}
