import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// model.id = nanoid(10) //=> "V1StGXR8_Z5jdHi6B-myT"

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // onInputChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  onFormSubmit = event => {
    event.preventDefault();
    console.log('submit');
    const form = event.currentTarget;
    this.setState({ name: form.elements.name.value });
    console.log(form.elements.name.value);
    // this.props.onSubmit(this.state.name);

    form.reset();
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>

          <ul></ul>
        </div>
      </>
    );
  }
}

export default App;
