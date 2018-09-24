import { connect } from "react-redux";
import { CrudApp } from "./crudApp";
import { addPerson } from "./add-person/add-person-action";
import { deletePerson } from "./crud-app-action";

const mapStateToProps = state => {
  //console.log("persons map ", state.crudReducer.persons);
  return { persons: state.crudReducer.persons };
};

const mapDispatchToProps = dispatch => ({
  addPerson: person => dispatch(addPerson(person)),
  deletePerson: person => dispatch(deletePerson(person))
});

const ConnectedCrudAPP = connect(
  mapStateToProps,
  mapDispatchToProps
)(CrudApp);
export default ConnectedCrudAPP;
