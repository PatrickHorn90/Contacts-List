import React, { Component } from "react";

class Contacts extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    console.log(contacts);

    if (contacts.length === 0) {
      return <h3 className="no-matches">No User Matches</h3>;
    } else {
      return (
        <div>
          <div className="container">
            {contacts.map((contact, index) => (
              <div key={index} className="contact-card">
                <img src={contact.picture.large} alt="profile pic" />
                <div className="categories">
                  <h3>First Name: {contact.name.first}</h3>
                  <h3>Last Name: {contact.name.last}</h3>
                  <h3>Gender: {contact.gender}</h3>
                  <h3>Age: {contact.dob.age}</h3>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => deleteContact(contact)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Contacts;
