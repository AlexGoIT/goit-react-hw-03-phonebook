import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <List>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
          const { id } = contact;
          return (
            <ContactItem
              key={id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
