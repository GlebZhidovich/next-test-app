import { User } from './schema';

const USERS_STORAGE_KEY = 'users';

export const usersRepository = {
  getUsers() {
    const data = localStorage.getItem(USERS_STORAGE_KEY);

    return data ? (JSON.parse(data) as User[]) : [];
  },

  addUser(value: User) {
    const users = usersRepository.getUsers();

    users.push(value);

    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  },
};
