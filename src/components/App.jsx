import {
  Routes,
  Route,
  // useNavigate,
  // useLocation,
  // Router,
} from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import { HomeView } from './views/HomeView/HomeView';
import { LoginView } from './views/LoginView/LoginView';
import { ContactsView } from './views/ContactsView/ContactsView';
import { NotFoundView } from './views/NotFound/NotFound';
import { RegisterView } from './views/RegisterView/RegisterView';

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
};
