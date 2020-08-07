import React, { Component } from "react";

class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://randomuser.me/api/portraits/men/39.jpg",
      first: "",
      last: "",
      gender: "",
      age: "",
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { hideModal, submitContact } = this.props;
    const { first } = this.state;
    const { last } = this.state;
    const { gender } = this.state;
    const { age } = this.state;
    return (
      <div className="add-contact-container">
        <button className="hideModal-btn" onClick={hideModal}>
          Close
        </button>
        <h2>Add Contact</h2>
        <form className="form-inputs">
          <input
            name="first"
            className="form-input"
            placeholder="First Name"
            value={first}
            onChange={(e) => this.change(e)}
          />
          <input
            name="last"
            className="form-input"
            placeholder="Last Name..."
            value={last}
            onChange={(e) => this.change(e)}
          />
          <input
            name="gender"
            className="form-input"
            placeholder="Gender..."
            value={gender}
            onChange={(e) => this.change(e)}
          />
          <input
            name="age"
            className="form-input"
            placeholder="Age..."
            value={age}
            onChange={(e) => this.change(e)}
          />
        </form>
        <button
          onClick={() => submitContact(this.state)}
          className="submit-btn"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default AddContactForm;
