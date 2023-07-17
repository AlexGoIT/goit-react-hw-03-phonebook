import { Component } from 'react';
import './App.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export default class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('phonebook-contacts'));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        'phonebook-contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  // Add contact
  handleAddContact = contact => {
    const { contacts } = this.state;
    const { name } = contact;

    // Verify contact
    if (contacts.find(contact => contact.name === name)) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  // Delete contact
  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  // Add filter
  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    document.title = 'HW-3 Phonebook';

    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} filter={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
