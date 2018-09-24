import React from "react";
import PropTypes from "prop-types";
import AddPerson from "./add-person/add-person";

export class CrudApp extends React.Component {
  handleDelete = e => {
    console.log("handleDelete", e);
    // this.props.onDelete
  };

  render() {
    console.log("render ", this.props);
    const style = { padding: 18 };

    return (
      <div>
        <AddPerson addPerson={this.props.addPerson} />
        Hello The pe rsons are
        {this.props.persons.map(person => (
          <div key={person.id} style={{ margin: 10 }}>
            <li>
              <span style={style}> id : {person.id} </span>
              <span style={style} onDoubleClick={this.props.onUpdate(person)}>
                firstName : {person.firstName}
              </span>
              <span style={style}>lastName : {person.lastName}</span>
              <span style={style}>
                {" "}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.props.deletePerson(person)}
                >
                  Delete
                </button>
              </span>
            </li>
          </div>
        ))}
      </div>
    );
  }
}

CrudApp.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object)
};
