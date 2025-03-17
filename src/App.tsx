import { AppLayout } from './components';
import { AddUserForm, UserList, UsersSection } from './features/user';
import './Theme.css';

function App() {
  return (
    <AppLayout>
      <UsersSection>
        <AddUserForm />
        <UserList />
      </UsersSection>
    </AppLayout>
  );
}

export default App;
