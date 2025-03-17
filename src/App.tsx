import { AppLayout } from './components';
import { UsersSection } from './features/user';
import './Theme.css';

function App() {
  return (
    <AppLayout>
      <UsersSection>
        <div>form</div>
        <div>List</div>
      </UsersSection>
    </AppLayout>
  );
}

export default App;
