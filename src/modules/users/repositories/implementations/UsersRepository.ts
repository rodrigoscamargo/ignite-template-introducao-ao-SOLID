import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User(name, email);

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const userAlreadyExists = this.users.find((user) => user.id === id);

    if (!userAlreadyExists) {
      return undefined;
    }

    return userAlreadyExists;
  }

  findByEmail(email: string): User | undefined {
    const userAlreadyExists = this.users.find((user) => user.email === email);

    if (!userAlreadyExists) {
      return undefined;
    }

    return userAlreadyExists;
  }

  turnAdmin(receivedUser: User): User {
    const user = receivedUser;

    user.admin = true;
    user.updated_at = new Date();

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
