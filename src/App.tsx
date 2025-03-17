import { AppLayout } from './components';
import { AddUserForm, UsersSection } from './features/user';
import './Theme.css';

function App() {
  return (
    <AppLayout>
      <UsersSection>
        <AddUserForm />
        <div>List</div>
      </UsersSection>
    </AppLayout>
  );
}

export default App;
