import { connect } from "react-redux";
import { AddPerson } from "./add-person";
import { addPerson } from "./add-person-action";

export const mapStateToProps = state => {
  // console.log("persons map ", state.crudReducer.persons);
  return { persons: state.crudReducer.persons };
};

// export const mapDispatchToProps = dispatch => ({
//   addPerson: person => dispatch(addPerson(person))
// });

export default connect(mapStateToProps)(AddPerson);
