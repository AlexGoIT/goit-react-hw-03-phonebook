import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactItem from './ContactItem';
import { Component } from 'react';

// const ContactList = ({ contacts, filter, onDeleteContact }) => {
//   return (
//     <List>
//       {contacts
//         .filter(contact =>
//           contact.name.toLowerCase().includes(filter.toLowerCase().trim())
//         )
//         .map(contact => {
//           const { id } = contact;
//           return (
//             <ContactItem
//               key={id}
//               contact={contact}
//               onDeleteContact={onDeleteContact}
//             />
//           );
//         })}
//     </List>
//   );
// };

// export default ContactList;

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    localStorage.setItem(
      'phonebook-contacts',
      JSON.stringify(this.props.contacts)
    );
  }

  render() {
    const { contacts, filter, onDeleteContact } = this.props;
    return (
      <List>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase().trim())
          )
          .map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          ))}
      </List>
    );
  }
}

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   filter: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
