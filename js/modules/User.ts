import { IUser } from './IUser';

export class User implements IUser {
  constructor(
    public surname: string,
    public name: string,
    public password: string,
  ) {}
  getUserInfo(): string {
    return `User: ${this.surname} ${this.name}, password: ${this.password}`;
  }
}
