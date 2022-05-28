import { useCreateContactMutation } from 'redux/contacts/createApi';
import { BackDrop } from 'components/Contacts/components/Modal/Modal.styled';
import { StyledButton } from 'components/Contacts/components/Button/Button.Styled.jsx';
import { MyForm } from 'components/Contacts/components/Form/Form.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { selector } from 'redux/contacts/modalSlice';
import PropTypes from 'prop-types';

export const NavBar = () => {
  const modalSelector = useSelector(state => state.modal.selector);
  const dispatch = useDispatch();
  const [addContact] = useCreateContactMutation();

  const addContactModal = e => {
    dispatch(selector('add'));
  };

  return (
    <>
      <h1>Phonebook</h1>
      {!modalSelector && (
        <StyledButton onClick={addContactModal}>AddContact</StyledButton>
      )}
      {modalSelector === 'add' && (
        <BackDrop>
          <MyForm
            mutator={addContact}
            initialFormValues={{ name: '', number: '' }}
            btn1="Add Contact"
            btn2="Clear Form"
            name="AddContact"
          />
        </BackDrop>
      )}
    </>
  );
};

MyForm.propTypes = {
  modalSelector: PropTypes.string,
};
