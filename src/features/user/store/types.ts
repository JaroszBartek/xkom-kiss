import { User } from '../User';

export type UsersAction =
  | { type: 'ADD_USER'; payload: User }
  | { type: 'DELETE_USER'; payload: string };

export type UsersState = {
  byId: { [id: string]: User };
  allIds: string[];
};
