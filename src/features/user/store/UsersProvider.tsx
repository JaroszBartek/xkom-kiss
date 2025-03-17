import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from 'react';
import { getUsersFromLocaleStorage, setUsersInLocaleStorage } from './localeStorage';
import { UsersAction, UsersState } from './types';
import { usersReducer } from './usersReducer';

type UsersContextType = {
  state: UsersState;
  dispatch: Dispatch<UsersAction>;
};

const UsersContext = createContext<UsersContextType>({} as UsersContextType);

export type UsersProviderProps = {
  children: ReactNode;
};

export function UsersProvider({ children }: UsersProviderProps) {
  const [state, dispatch] = useReducer(usersReducer, getUsersFromLocaleStorage());

  useEffect(() => {
    setUsersInLocaleStorage(state);
  }, [state]);

  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsersContext() {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsersContext must be used within a UsersProvider');
  }
  return context;
}
