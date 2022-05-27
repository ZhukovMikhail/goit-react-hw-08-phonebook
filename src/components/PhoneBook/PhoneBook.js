// import './PhoneBook.styled.jsx';
import { Container } from './PhoneBook.styled.jsx';
import { Contacts } from './components/Contacts/Contacts.jsx';
import { Filter } from './components/Filter/Filter.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import 'react-toastify/dist/ReactToastify.css';

export const PhoneBook = () => {
  return (
    <Container>
      <NavBar />
      <Filter />
      <Contacts />
    </Container>
  );
};
