import { UsersState } from './types';

const USERS_KEY = 'users';

export const getUsersFromLocaleStorage = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users
    ? JSON.parse(users)
    : {
        byId: {},
        allIds: [],
      };
};

export const setUsersInLocaleStorage = (users: UsersState) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};
