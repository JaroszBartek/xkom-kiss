import { Button } from '../../../../components';
import { useUsersContext } from '../../store';
import { UserData } from '../UserData';
import styles from './UserList.module.css';

export const UserList = () => {
  const { state, dispatch } = useUsersContext();

  const removeUser = (id: string) => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  if (!state?.allIds?.length) {
    return <div>Nie ma użytkowników do wyświetlenia</div>;
  }

  return (
    <ul className={styles.list}>
      {state.allIds.map(id => (
        <li key={id} className={styles.listItem}>
          <UserData user={state.byId[id]} />
          <Button onClick={() => removeUser(id)}>X</Button>
        </li>
      ))}
    </ul>
  );
};
