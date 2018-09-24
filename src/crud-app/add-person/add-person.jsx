import React, { Component } from "react";
class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = event => {
    //console.log([event.target.name] + ":: " + event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const person = {};
    person["firstName"] = this.state.firstName;
    person["lastName"] = this.state.lastName;

    this.props.addPerson(person);
    //console.log(this.state);
  };

  render() {
    return (
      <div>
        FirstName :
        <input type="text" name="firstName" onChange={this.handleChange} />
        LastName :
        <input type="text" name="lastName" onChange={this.handleChange} />
        <input
          type="submit"
          name="submit"
          value="submit"
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

export default AddPerson;
