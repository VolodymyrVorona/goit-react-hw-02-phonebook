import { Component } from 'react';

import Form from './Form';

import shortId from 'shortid';

class App extends Component {
  state = {
    contacts: [],
  };

  onFormSubmit = ({ name, number }) => {
    const newContact = {
      id: shortId.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  render() {
    console.log(this.state.contacts);
    return <Form onSubmit={this.onFormSubmit} />;
  }
}

export default App;
