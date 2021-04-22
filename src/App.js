import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getVisibleContacts, getContacts } from './redux/selectors';
import { fetchContacts } from './redux/operations';

import 'react-toastify/dist/ReactToastify.css';

import st from './App.module.css';

function App() {
  const visibleContacts = useSelector(getVisibleContacts);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={st.container}>
      <h1 className={st.title}>PHONEBOOK</h1>
      <ContactForm />
      <h2 className={st.subtitle}>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {visibleContacts.length > 0 && <ContactList />}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
      />
    </div>
  );
}

export default App;
