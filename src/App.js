import React, { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>

        <ContactForm />
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
