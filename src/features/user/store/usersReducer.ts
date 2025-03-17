import { UsersAction, UsersState } from './types';

export function usersReducer(state: UsersState, action: UsersAction): UsersState {
  switch (action.type) {
    case 'ADD_USER':
      return {
        byId: { ...state.byId, [action.payload.id]: action.payload },
        allIds: [...state.allIds, action.payload.id],
      };
    case 'DELETE_USER':
      const users = { ...state.byId };
      delete users[action.payload];
      return {
        byId: users,
        allIds: state.allIds.filter(id => id !== action.payload),
      };
    default:
      throw Error('Unknown action');
  }
}
