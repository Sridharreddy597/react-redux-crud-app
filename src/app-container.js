import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => {
  // console.log("persons map ", state.crudReducer.persons);
  // console.log("persons map ", state);
  return { persons: state.crudReducer.persons };
};

//const mapDispatchToProps = dispatch => ({
// //addPerson: person => dispatch(addPerson(person))
//});

const AppList = connect(mapStateToProps)(App);
export default AppList;
