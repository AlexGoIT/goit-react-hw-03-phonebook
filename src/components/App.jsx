import { Component } from 'react';
import './App.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // Add contact
  handleAddContact = contact => {
    const { contacts } = this.state;
    const { name } = contact;

    // Verify contact
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState({
      contacts: [...contacts, contact],
    });
  };

  // Delete contact
  handleDeleteContact = id => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  // Add filter
  handleFilter = ({ filter }) => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
