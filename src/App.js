import React, { Component } from "react";
import "./App.css";
import AddContactForm from "./Components/AddContactForm";
import Contacts from "./Components/Contacts";
import Modal from "react-modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isLoaded: false,
      filter: "",
      isOpen: false,
    };
  }

  handleSubmitContact = ({ first, last, age, gender, image }) => {
    const { contacts } = this.state;
    const newContact = {
      picture: { large: image },
      name: { first, last },
      dob: { age },
      gender,
    };
    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  deleteContact = (deletedContact) => {
    const contacts = this.state.contacts.filter(
      (contact) => contact.login.uuid !== deletedContact.login.uuid
    );
    this.setState({
      contacts,
    });
  };

  handleChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  getFilteredData = () => {
    const { filter, contacts } = this.state;
    let filteredData = [];

    if (filter === "male") {
      filteredData = contacts.filter(({ gender }) => {
        return gender === "male";
      });
    }
    if (filter === "female") {
      filteredData = contacts.filter(({ gender }) => {
        return gender === "female";
      });
    }
    if (filter === "over30") {
      filteredData = contacts.filter(({ dob }) => {
        return dob.age >= 30;
      });
    }
    if (filter === "under30") {
      filteredData = contacts.filter(({ dob }) => {
        return dob.age < 30;
      });
    }
    if (filter === "over100") {
      filteredData = contacts.filter(({ dob }) => {
        return dob.age > 100;
      });
    }
    return filteredData;
  };

  handlePageChange = (page) => {
    console.log(page);
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=30")
      .then((res) => res.json())
      .then(({ results }) => {
        this.setState({
          contacts: results,
          isLoaded: true,
        });
      });
  }

  render() {
    const { contacts, isLoaded, filter } = this.state;

    if (!isLoaded) {
      return <div>Is Loading...</div>;
    } else {
      return (
        <div className="contactListContainer">
          <div className="header">
            <select
              className="filter-options"
              value={this.state.filter}
              onChange={this.handleChange}
            >
              <option value="">None</option>;
              <option value="male">Male Only</option>;
              <option value="female">Female Only</option>
              <option value="over30">Over 30</option>;
              <option value="under30">Under 30</option>;
              <option value="over100">Over 100</option>;
            </select>
            <button className="add-contact-btn" onClick={this.openModal}>
              +Add Contact
            </button>
          </div>
          <Contacts
            contacts={filter ? this.getFilteredData() : contacts}
            deleteContact={this.deleteContact}
          />

          <Modal isOpen={this.state.isOpen} ariaHideApp={false}>
            <AddContactForm
              hideModal={this.hideModal}
              submitContact={this.handleSubmitContact}
            />
          </Modal>
        </div>
      );
    }
  }
}

export default App;
