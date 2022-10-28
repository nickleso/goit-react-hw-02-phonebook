import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = (name, number) => {
    const contact = {
      id: nanoid(10),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    setTimeout(() => {
      console.log(this.state.contacts);
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />

        <div>
          <h2>Contacts</h2>
          <ul>
            {this.getFiltredContacts().map(contact => (
              <li key={contact.id}>
                <p>
                  {contact.name}: <span>{contact.number}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <label>
            Find contacts by name
            <input
              name="name"
              value={this.state.filter}
              onChange={this.changeFilter}
            ></input>
          </label>
        </div>
      </>
    );
  }
}

export default App;
