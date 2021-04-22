import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import Button from '../Button';
import st from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={st.listItem}>
          <span className={st.name}>{name}:</span>
          <span className={st.number}>{number}</span>
          <Button
            type="button"
            className={st.btn}
            onClick={() => handleDeleteContact(id)}
            value="Delete"
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
