import React, { Component } from "react";

class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://randomuser.me/api/portraits/med/men/39.jpg",
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = () => {
    console.log("working");
  };

  render() {
    const { hideModal } = this.props;
    const { firstName } = this.state;
    const { lastName } = this.state;
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
            name="firstName"
            className="form-input"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => this.change(e)}
          />
          <input
            name="lastName"
            className="form-input"
            placeholder="Last Name..."
            value={lastName}
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
        <button onClick={() => this.onSubmit()} className="submit-btn">
          Submit
        </button>
      </div>
    );
  }
}

export default AddContactForm;
