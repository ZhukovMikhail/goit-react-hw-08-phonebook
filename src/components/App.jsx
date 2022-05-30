import { Routes, Route } from 'react-router-dom';
import { HomeView } from './views/HomeView/HomeView';
import { LoginView } from './views/LoginView/LoginView';
// import { ContactsView } from './views/ContactsView/ContactsView';
import { PhoneBook } from './Contacts/PhoneBook';
import { NotFoundView } from './views/NotFound/NotFound';
import { RegisterView } from './views/RegisterView/RegisterView';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as authOperations from '../redux/auth/authOperations';

import ResponsiveAppBar from './NavBar/NavBar';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<PhoneBook />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  );
};
